import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
     
        <div className="hero-image"></div>
        <div className="hero-content">
            <h1 className='hero-text'>Urban Reads</h1>
            <p className='hero-description'>
            Welcome to Urban Reads, a vibrant oasis in the heart of the city where stories come to life.
            </p>
        </div>
    </div>
  )
}

export default Home