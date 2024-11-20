import React, { Component } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false,
      selectedPage: "/",
    };
  
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  }
  handlePageChange(page) {
    this.setState({ selectedPage: page });
  }

  render() {
    const categories = ["About","Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];

    return (
      <nav className="p-4 w-full text-white bg-slate-900">
        <div className="w-full flex justify-between  sm:justify-start sm:gap-16 items-center mx-auto">
          <div className="flex items-center space-x-4 ">
            <p className="text-xl font-bold" >
              {this.props.title}
            </p>
           
          </div>
          <div className="hidden sm:block">
           { categories.map((category) => (
              <Link
                key={category}
                className="nav-link px-3 py-2 rounded block md:inline-block"
                to={`/${category}`}
              >
                {category}
              </Link>
            ))}
          

         
          </div>
          <button className="block sm:hidden"
          onClick={()=>this.toggleSidebar()}>
         
          ☰
        </button>
        {this.state.isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div className="w-64 bg-white h-full shadow-lg z-50 p-6">
           {/*  <button className="text-black text-2xl absolute top-4 right-4" onClick={toggleSidebar}>
              &times;
            </button> */}
            <nav className="mt-10 space-y-4">
              {categories.map((category) => (
                <Link
                key={category}
                className="nav-link px-3 py-2 rounded block md:inline-block"
                to={`/${category}`}
              >
                {category}
              </Link>
               
              
              ))}
             
            </nav>
          </div>
          {/* Click outside sidebar to close */}
          <div className="flex-grow" onClick={() => this.toggleSidebar()}></div>
        </div>
      )}
        </div>
      </nav>
    );
  }
}

export default Navbar;
