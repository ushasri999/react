import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Home = () => {
  let params = useParams();
  return (
    <center>
        <div>
        <h3>Welcome to Dashboard page</h3>
        <p>Name: {params.name}</p>
        <Link to = '/' className = 'Link'>Back to home</Link>
        </div>
    </center>
  )
}

export default Home
