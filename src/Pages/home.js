import React, { Component } from 'react';
import { Button } from '../Components/button';
import { getItems, getCart } from '../Data/inventory';
import Cart from '../Data/cart';
import { apiUrl } from '../config'

class Home extends Component {

  state = {
    inventory: [],
    cart: []
  }

addToCart = (name, image, price, _id) => () => { 
    return fetch(`${apiUrl}cart`,{
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
        id: _id
      })
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        cart: [...this.state.cart, response]
      })
    }) 
      
}
r
deleteFromCart = (_id) => () => {
  return fetch(`${apiUrl}cart/${_id}`, {
    method: 'DELETE',
  })
  .then(() => getCart()
  .then(response => {
    this.setState({
      cart: response
    })
  }))
}

  componentDidMount() {

    getItems()
      .then(inventory => {
        this.setState({
        inventory
        })
      })
    
      getCart()
      .then(cart => {
        this.setState({
          cart
        })
      })
      
  }

  render() {
    return (
      <div>
        <div >
        {console.log('console log inventory', this.state.inventory)}
          <ul style={{ display: 'flex', flexWrap: 'wrap', listStyleType: 'none',  }}>
          
            {this.state.inventory.map(({ name, image, price, _id }) => (
              <li key={_id} style={{ flexDirection: 'column', height: 'relative', width: 225, marginLeft: 20, marginTop: 10, marginBottom:10, textAlign: 'center', display: 'flex', }}>
                {name} <br />
                {price}
                <img style={{ width: 225, height: 150 }} src={image} alt=''></img>
                <Button onClick={this.addToCart(name, image, price, _id)} color='white'>Add to cart</Button>
              </li>
            ))}
          </ul>
        </div>
        <div style={{textAlign: 'center'}}>
          <Cart style={{justifyContent: 'row'}} cartItems={this.state.cart} deleteFromCart={this.deleteFromCart}/>
        </div>
      </div>
    )
  }
}

export default Home;