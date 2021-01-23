import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './screens/Home'
import Login from './screens/Login'
import Signup from './screens/Signup'
import NavBar from './components/NavBar'

function App () {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
