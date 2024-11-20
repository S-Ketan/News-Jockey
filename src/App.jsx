import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Spinner from './components/Spinner'


export class App extends Component {
  render() {
    return (
      <>
      <Navbar title="News Monkey" />
      
      <News pagesize="10"/>
      
      </>
    )
  }
}

export default App

