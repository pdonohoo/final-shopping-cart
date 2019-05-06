import React, { Component } from 'react';
import { Col } from '../Components/col';
import { Row } from '../Components/row';
import { Input } from '../Components/input';
import { getItems } from '../Data/inventory';
import { Button } from '../Components/button';

class Admin extends Component {

  state = {
    inventory: [],
    name: '',
    price: '',
    image: '',
    id: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


editItem = (_id) => () => {
  return fetch(`http://localhost:5000/items/${_id}`, {
  })
  .then(response => response.json())
  .then(response => {
    console.log(response)
    this.setState({
      name: response.name,
      price: response.price,
      image: response.image,
    })
  })
}


  componentDidMount() {
    getItems()
      .then(inventory => {
        this.setState({
          inventory
        })
      })
  }

  render() {
    return (
      <Col>
      
        <Col>
            <Input name={this.state.name} placeholder={this.state.name} onChange={this.handleChange} ></Input>
            <Input name={this.state.price} placeholder={this.state.price} onChange={this.handleChange} ></Input>
            <Input name={this.state.image} placeholder={this.state.image} onChange={this.handleChange} ></Input>
        </Col>
        <Row style={{alignSelf:'center', margin:10}}>
          <Button color='green'>Update</Button>
        </Row>
        <Row >
          <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', }} >
            {this.state.inventory.map(({ name, price, image, _id }) => (
              <li style={{ flexDirection: 'column', height: 'relative', width: 150, marginLeft: 20, marginTop: 10, marginBottom: 10, textAlign: 'center', display: 'flex', backgroundColor: 'white' }} >
                {name} <br />
                {price}
                <img style={{ width: 150, height: 100 }} src={image}></img>
                <Button color='white' onClick={this.editItem(_id)}>Edit Item</Button>
              </li>
            ))}
          </ul>
        </Row>
      </Col>
    )
  }
}

export default Admin;