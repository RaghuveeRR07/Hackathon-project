import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Login from './login'
import { SignUpFour } from './register'

function App() {

  return (
    
      <div className='text-white h-[100vh] flex items-center justify-center bg-cover'>
        <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={SignUpFour} />
      </Switch>
    </Router>
          
      </div>
      
    
  )
}

export default App
