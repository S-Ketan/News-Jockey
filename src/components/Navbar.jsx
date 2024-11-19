import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="p-4 w-full text-gray-600 bg-gray-300">
        <div className="w-full flex justify-center sm:justify-between items-center mx-auto">
          <div className="flex items-center space-x-4 ">
            <a className="text-xl font-bold" href="/">
              {this.props.title}
            </a>
            <a
              className="nav-link active px-3 py-2 rounded block md:inline-block"
              aria-current="page"
              href="/"
            >
              Home
            </a>
            <a
              className="nav-link px-3 py-2 rounded block md:inline-block"
              href="/about"
            >
              About
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
