import React, { Component } from "react";
import NewsItem from "./NewsItem";
import BgOne from "../assets/WebsiteBgOne.jpeg";

export class News extends Component {
  articles = [
    // ... (your articles array)
  ];
  constructor() {
    super();
    console.log("I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=tesla&from=2024-10-19&sortBy=publishedAt&apiKey=31ed162351bc4eaca239f08c62d57745";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }
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
        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          {this.state.articles.slice(0, 20).map((element) => (
            <div className="break-inside-avoid m-auto" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                desc={element.description ? element.description : ""}
                img={element.urlToImage ? element.urlToImage : ""}
                newsUrl={element.url ? element.url : ""}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
