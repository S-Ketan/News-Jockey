import React, { Component } from 'react'
import spinner from '../assets/spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center h-[50vh] w-full items-center'>
        <img src={spinner} alt="loading" className='h-[100%]'/>
      </div>
    )
  }
}

export default Spinner
