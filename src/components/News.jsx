import React, { Component } from "react";
import NewsItem from "./NewsItem";
import BgOne from "../assets/WebsiteBgOne.jpeg";
import Spinner from "./Spinner";

export class News extends Component {
  

  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/everything?q=tesla&from=2024-10-20&sortBy=publishedAt&apiKey=31ed162351bc4eaca239f08c62d57745&page=1&pageSize=20`;
      this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-10-20&sortBy=publishedAt&apiKey=31ed162351bc4eaca239f08c62d57745&page=${
      this.state.page - 1
    }&pageSize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      console.log("Next");
   
      let url = `https://newsapi.org/v2/everything?q=tesla&from=2024-10-20&sortBy=publishedAt&apiKey=31ed162351bc4eaca239f08c62d57745&page=${
        this.state.page + 1
      }&pageSize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading:false
      });
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${BgOne})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="pt-6"
      >
        <h2 className="text-3xl p-5 text-center bg-blue-300  mb-6">
          News Monkey - Top Headlines
        </h2>
       {this.state.loading && <Spinner />}
        {!this.state.loading && <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {this.state.articles.map((element) => (
            <div className="break-inside-avoid m-auto" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                desc={element.description ? element.description : ""}
                img={element.urlToImage ? element.urlToImage : ""}
                newsUrl={element.url ? element.url : ""}
              />
            </div>
          ))}
        </div>}
        <div className="w-[80vw] flex justify-between m-auto mt-8">
          <button
            disabled={this.state.page <= 1}
            className="text-white bg-black p-4 rounded-2xl"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
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
