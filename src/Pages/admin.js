import React, { Component } from 'react';
import { Col } from '../Components/col';
import { Row } from '../Components/row';
import { Input } from '../Components/input';
import { getItems } from '../Data/inventory';
import { Button } from '../Components/button';

class Admin extends Component {

  state = {
    inventory: [],
    name: 'Item Name',
    price: 'Item Price',
    image: 'Image/URL',
    _id: '',
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
      _id: response._id,
    })
  })
}

addItem = (name, price, image) => () =>  {
  return fetch('http://localhost:5000/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      price: price,
      image: image,
  })
})
.then(response => response.json())
.then(response => {
  this.setState({
    inventory: [...this.state.inventory, response]
  })
})
}

deleteItem = (_id) => () => {
return fetch(`http://localhost:5000/items/${_id}`, {
  method: 'DELETE',
})
.then(() => getItems())
.then(response => {
  this.setState({
    inventory: response
  })
})
}

updateDBItem = (_id, name, price, image) => () => {
return fetch(`http://localhost:5000/items/${_id}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: name,
    price: price,
    image: image
  })
})
.then(() => getItems())
.then( inventory => {
  this.setState({
    inventory
  })
  this.setState({
    name: 'Item Name',
    price: 'Item Price',
    image: 'Image URL'
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
    // let {name} = this.state.name;
    // let {price} = this.state.price;
    // let {image} = this.state.image;
    // let {_id} = this.state._id;
    return (
      <Col>
         <Col>
         <div> {this.state._id} </div>
            <Input name='name' placeholder={this.state.name} onChange={this.handleChange}  ></Input>
            <Input name='price'   placeholder={this.state.price} onChange={this.handleChange} ></Input>
            <Input name='image'  placeholder={this.state.image} onChange={this.handleChange} ></Input>
        </Col>
        <Row style={{alignSelf:'center', margin:10}}>
          <Button onClick={this.updateDBItem(this.state._id, this.state.name, this.state.price, this.state.image)} color='blue'>Update</Button>
          <Button onClick={this.addItem(this.state.name, this.state.price, this.state.image)} color='green'>Add Item</Button>
        </Row>
        <Row >
          <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none', }} >
            {this.state.inventory.map(({ name, price, image, _id }) => (
              <li style={{ flexDirection: 'column', height: 'relative', width: 150, marginLeft: 20, marginTop: 10, marginBottom: 10, textAlign: 'center', display: 'flex', backgroundColor: 'white' }} >
                {name} <br />
                {price}
                <img style={{ width: 150, height: 100 }} src={image}></img>
                <Button color='blue' onClick={this.editItem(_id)}>Edit Item</Button>
                <Button onClick={this.deleteItem(_id)} color='red'>Delete item</Button>
              </li>
            ))}
          </ul>
        </Row>
      </Col>
    )
  }
}

export default Admin;