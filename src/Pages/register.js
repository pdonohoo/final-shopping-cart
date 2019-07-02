import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from '../Components/button';

export class Register extends Component {

  state = {
    userName: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  registerNewUser = (e) => {
    e.preventDefault()
    let user = {
      userName: this.state.userName,
      password: this.state.password
    }
    return fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password
      })
    })
  
  }

  render() {
    return (
      <div style={{ textAlign: 'center'}}>
        <h3> Register New User</h3>
      <form style={{ textAlign: 'center', margin: 30, }}>
        <input name='userName' onChange={this.handleChange} type='text' placeholder='UserName'></input>
        <input name='password' onChange={this.handleChange} type='text' placeholder='Password'></input> <br />
        <Button onClick={this.registerNewUser} color='green' > Register</Button>
      </form>
      </div>
    )
  }
}

export default Register
