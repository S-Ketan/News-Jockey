import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from './components/About';
export class App extends Component {
  router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="home" country="us" pagesize="10"/>
          </div>
        ),
      },
      {
        path: "/business",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="business" country="us" pagesize="10" category="business"/>
          </div>
        ),
      },
      {
        path: "/entertainment",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="entertainment" country="us" pagesize="10" category="entertainment"/>

          </div>
        ),
      },
      {
        path: "/general",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="general" country="us" pagesize="10" category="general"/>

          </div>
        ),
      },
      {
        path: "/health",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="health" country="us" pagesize="10" category="health"/>

          </div>
        ),
      },
      {
        path: "/technology",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="technology" country="us" pagesize="10" category="technology"/>

          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <About />
          </div>
        ),
      },
      {
        path: "/sports",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="sports" country="us" pagesize="10" category="sports"/>

          </div>
        ),
      },
      {
        path: "/science",
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <News key="science" country="us" pagesize="10" category="science"/>

          </div>
        ),
      },
      {
        path: "*", // Fallback route for unmatched paths
        element: (
          <div>
            <Navbar title ="News Jockey" />
            <h1>Page Not Found</h1>
          </div>
        ),
      },
    ])
  render() {
    return (
      <RouterProvider router={this.router} />
  );  

      
  }
}

export default App

