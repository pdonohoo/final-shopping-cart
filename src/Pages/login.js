import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { Button } from '../Components/button'

export class Login extends Component {

  state = {
    userName: '',
    password: '',
    user: null,
  }

  verifyUser = (e) => {
    e.preventDefault();
     return fetch('http://localhost:5000/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
      })
    }).then(response => response.json())
    .then(user => {
     localStorage.setItem('user', JSON.stringify(user))
     this.setState({
       user
     })
    }).catch((err) => {alert('Invalid credentials try again')})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({
      user
    })
    console.log(user, 'this is user')
  }



  render() {
    return (
      this.state.user 
      ?
      <Redirect to='/admin'/>
      :
      <div style={{textAlign:'center', margin: 30}}>
        <h3> Admin Login </h3>
        <form>
          <input onChange={this.handleChange} name='userName' placeholder='Username'></input>
          <input onChange={this.handleChange} name='password' placeholder='Password'></input> <br/>
          <Button onClick={this.verifyUser} color='green'>Login</Button>
        </form>
      </div>
    )
  }
}

export default Login
