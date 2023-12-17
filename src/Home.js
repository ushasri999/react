import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Home = () => {
  return (
    <center>
        <div>
        <h3>Welcome to home page</h3>
        <Link to = '/dashboard' className = 'Link'>Dashboard</Link> {" "}
        <Link to = '/about' className = 'Link'>About</Link>
        </div>
    </center>
  )
}

export default Home
