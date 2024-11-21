import React, { Component } from "react";
import PropTypes from 'prop-types';

export class NewsItem extends Component {
  render() {
    let { title, desc, img, newsUrl } = this.props;
    const truncatedDesc = desc.length > 71 ? desc.substring(0, 105) + "..." : desc;
    const truncatedTitle = title.length > 55 ? title.substring(0, 55) + "..." : title;

    return (
      <div className="flex justify-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
          <a href={newsUrl} target="_blank">
            <img
              className="rounded-t-lg"
              src={img}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href={newsUrl} target="_blank">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#333333] line-clamp-2">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-[#757575] line-clamp-2" >
              {desc}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#3498db] dark:hover:bg-[#2980b9] dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  newsUrl: PropTypes.string.isRequired,
};

export default NewsItem;
