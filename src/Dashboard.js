import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Home = () => {
  let {search} = useLocation();
  let params = new URLSearchParams(search);
  console.log(search);


  return (
    <center>
        <div>
        <h3>Welcome to Dashboard page</h3>
        <p>Name : {params.get('name')}</p>
        <p>Age : {params.get('age')}</p>
        <Link to = '/' className = 'Link'>Back to home</Link>
        </div>
    </center>
  )
}

export default Home
