import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
import Pagenotfound from './Pagenotfound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home />}/>
            <Route path = '/dashboard' element = {<Dashboard />}/>
            <Route path = '/about' element = {<About />}/>
            <Route path = '/*' element = {<Pagenotfound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App