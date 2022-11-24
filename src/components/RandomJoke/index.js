import React, { Component } from 'react'
import {TailSpin} from 'react-loader-spinner'
import "./index.css"

export default class RandomJoke extends Component {
state={joke:"",isLoading:true}

componentDidMount(){
    this.getNewJoke()
}

getNewJoke=async ()=>{
    const response=await fetch("https://apis.ccbp.in/jokes/random")
    const data= await response.json()
    console.log(data)
    this.setState({isLoading:false,joke:data.value})
}

  render() {
    const {joke,isLoading}=this.state
    return (
      <div className='container'>
        <div className='content'>
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png"
            alt="joke" />
            {isLoading ? (<TailSpin
  height="80"
  width="80"
  color="#fff"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>) : (<h1>{joke}</h1>)}
            <button onClick={this.getNewJoke}>Get New Joke</button>
        </div>
      </div>
    )
  }
}
