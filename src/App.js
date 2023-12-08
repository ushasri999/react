import React, { useState } from 'react'

function App() {
  const [data, setData] = useState({
    email:'',
    password:''
  })

  const changeHandler = e => {
    setData({...data, [e.target.name] : e.target.value})
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
  }
  
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label>E-Mail</label><br/>
          <input type = 'text' name = 'email' onChange={changeHandler}/><br/>
          
          <label>Password</label><br/>
          <input type = 'password' name = 'password' onChange={changeHandler}/><br/>
          <input type='submit' value='Login'/>
        </form>
      </center>
    </div> 
  )
}

export default App
