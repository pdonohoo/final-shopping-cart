import React from 'react';
import {Button} from '../Components/button'

export default ({cartItems, deleteFromCart}) => 
(
      <div>
        <h1>
          My Cart
        </h1>
        <div>
          <ul style={{display: 'flex', flexDirection:'wrap', flexWrap: 'wrap'}}>
            {cartItems.map(({name, image, price, _id}) => (
              <li style={{ flexDirection: 'column', height: 'relative', width: 150, marginLeft: 20, marginTop: 10, marginBottom:10, textAlign: 'center', display: 'flex', backgroundColor: 'white', justifyContent: 'row' }}>
                {name}
                <img style={{ width: 150, height: 100 }} src={image}></img>
                {price}
                <Button onClick={deleteFromCart(_id)}>Delete</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  
