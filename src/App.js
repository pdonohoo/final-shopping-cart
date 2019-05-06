import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from './Components/button';
import Home from './Pages/home';
import Cart from './Data/cart';
import Admin from './Pages/admin';
import { Col } from './Components/col';
import { Row } from './Components/row';

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'gray', }}>
        <div>

          <Router>
            <Row style={{ justifyContent: 'space-between' }}>
              <h1 style={{ color: '#fd5e53' }}>
                Shopaholics Annonymous
              </h1>
              <ul style={{ listStyleType: 'none', }}>

                <li>
                  <Link to='/'>Home</Link>
                </li>


                <li>
                  <Link to='/Admin'>Admin</Link>
                </li>

              </ul>
            </Row>
            <Route path='/' exact component={Home}></Route>
            <Route path='/Admin' exact component={Admin}></Route>
          </Router>
        </div>
      </div>
    )
  }
}


export default App;
