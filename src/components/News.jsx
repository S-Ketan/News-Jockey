import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const NEWS_API_KEY = import.meta.env.VITE_API_KEY;

export class News extends Component {
  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: this.getPageSize(),
    };
  }

  getPageSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return 5; // Small devices
    } else if (width < 1024) {
      return 10; // Medium devices
    } else {
      return 20; // Large devices
    }
  };

  async componentDidMount() {
    this.updateDocumentTitle();
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${NEWS_API_KEY}&page=1&pageSize=${this.state.pageSize}`;
    if (this.props.category) {
      url += `&category=${this.props.category}`;
    }
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.updateDocumentTitle();
    }
  }

  updateDocumentTitle = () => {
    if (this.props.category) {
      document.title = `News Jockey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
    } else {
      document.title = "News Jockey";
    }
  };

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${NEWS_API_KEY}&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    if (this.props.category) {
      url += `&category=${this.props.category}`;
    }
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize))) {
      console.log("Next");

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${NEWS_API_KEY}&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      if (this.props.category) {
        url += `&category=${this.props.category}`;
      }
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div
        className="pt-6 bg-[#f5f5f5]"
      >
        <h2 className="text-4xl font-serif p-5 text-center bg-gradient-to-r from-[#3498db] to-[#2ecc71] mb-6 shadow-lg rounded-lg border-b-4 border-[#2ecc71] text-white">
          {this.props.category ? `Top Headlines in ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}` : 'Top Headlines'}
        </h2>
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="columns-1 sm:columns-3 gap-4 space-y-20 sm:mt-20 sm:w-[85vw] m-auto">
            {this.state.articles.map((element) => (
              <div className="break-inside-avoid m-auto" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  desc={element.description ? element.description : ""}
                  img={element.urlToImage ? element.urlToImage : ""}
                  newsUrl={element.url ? element.url : ""}
                  source={element.source.name ? element.source.name : "Unknown"}
                  author={element.author ? element.author : "Unknown"}
                  date={element.publishedAt ? element.publishedAt : "Unknown Date"}
                />
              </div>
            ))}
          </div>
        )}
        <div className="w-[80vw] flex justify-between m-auto mt-8">
          <button
            disabled={this.state.page <= 1}
            className="text-white bg-black p-4 rounded-2xl"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)}
            className="text-white bg-black p-4 rounded-2xl"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
