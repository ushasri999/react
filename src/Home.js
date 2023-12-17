import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <center>
        <div>
        <h3>Welcome to home page</h3>
        <Link to = '/dashboard'>Dashboard</Link> {" "}
        <Link to = '/about'>About</Link>
        </div>
    </center>
  )
}

export default Home
