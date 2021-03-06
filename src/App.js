import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Pages/home';
import Admin from './Pages/admin';
import { Row } from './Components/row';
import Register from './Pages/register';
import Login from './Pages/login';

class App extends Component {
  render() {
    return (
      <div >
        <div>

          <Router >
            <Row style={{ backgroundColor: 'black', justifyContent: 'space-between', textDecoration:'none' }}>
              <h1 style={{  color: 'white' }}>
                Shopaholics Annonymous
              </h1>
              <ul style={{ listStyleType: 'none', display: 'flex'}} >

                <li style={{paddingRight: '5px', paddingTop:'12px'}} >
                  <Link style={{color: 'white', textDecoration:'none' }} to='/'>Home</Link>
                </li>
                <li style={{paddingRight: '5px' , paddingTop:'12px'}}>
                  <Link style={{color: 'white', textDecoration:'none' }} to='/admin'>Admin</Link>
                </li>
                <li style={{paddingRight: '5px' , paddingTop:'12px'}}>
                  <Link style={{color: 'white', textDecoration:'none',  }} to='/register'>Register</Link>
                </li>

              </ul>
            </Row>
            <Route  exact path='/' component={Home}></Route>
            <Route path='/admin' component={Admin}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/login' component={Login}></Route>
          </Router>
        </div>
      </div>
    )
  }
}


export default App;
