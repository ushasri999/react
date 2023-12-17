import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <center>
        <div>
        <h3>Welcome to Dashboard page</h3>
        <Link to = '/' className = 'Link'>Back to home</Link>
        </div>
    </center>
  )
}

export default Home
