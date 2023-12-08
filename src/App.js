import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  return (
    <div>
      <center>
        Name : {name} <br></br>
        <input type='text' name='name'onChange={(e) => setName(e.target.value)}/>
      </center>
    </div>
  )
}

export default App
