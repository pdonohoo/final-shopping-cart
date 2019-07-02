import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from './Components/button';
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

          <Router>
            <Row style={{ backgroundColor: 'black', justifyContent: 'space-between' }}>
              <h1 style={{  color: '#fd5e53' }}>
                Shopaholics Annonymous
              </h1>
              <ul style={{ listStyleType: 'none', }}>

                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/admin'>Admin</Link>
                </li>
                <li>
                  <Link to='/register'>Register</Link>
                </li>

              </ul>
            </Row>
            <Route exact path='/' exact component={Home}></Route>
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
