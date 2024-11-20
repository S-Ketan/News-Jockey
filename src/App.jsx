import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Technology from './components/categories/Technology';
import Sports from './components/categories/Sports';
import Science from './components/categories/Science';
import Health from './components/categories/Health';
import General from './components/categories/General';
import Entertainment from './components/categories/Entertainment';
import Business from './components/categories/Business';
import About from './components/About';
export class App extends Component {
  router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <News country="us" pagesize="10" category="sports"/>
          </div>
        ),
      },
      {
        path: "/business",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <Business />
          </div>
        ),
      },
      {
        path: "/entertainment",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <Entertainment />
          </div>
        ),
      },
      {
        path: "/general",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <General />
          </div>
        ),
      },
      {
        path: "/health",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <Health />
          </div>
        ),
      },
      {
        path: "/technology",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <Technology />
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <About />
          </div>
        ),
      },
      {
        path: "/sports",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <Sports />
          </div>
        ),
      },
      {
        path: "/science",
        element: (
          <div>
            <Navbar title ="News Monkey" />
            <Science/>
          </div>
        ),
      },
      {
        path: "*", // Fallback route for unmatched paths
        element: (
          <div>
            <Navbar title ="News Monkey" />
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

