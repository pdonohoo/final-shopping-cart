// export const getItems = () => new Promise ((resolve, reject) => {
//   fetch('http://localhost:5000/items')
//   .then(response => {
//     resolve(response.json())
//   }).catch(reject)
// });

// export const getItems = () => new Promise ((resolve, reject) => {
//   fetch('https://final-shopping-cart-api.herokuapp.com/items')
//   .then(response => {
//     resolve(response.json())
//   }).catch(reject)
// });

export const getItems = async () => {
  const response = await fetch('https://final-shopping-cart-api.herokuapp.com/items');
  const json = await response.json()
  return json
}

// export const getCart = () => new Promise ((resolve, reject) => {
//   fetch('http://localhost:5000/cart')
//   .then(response => {
//     resolve(response.json())
//   }).catch(reject)
// })

export const getCart = () => new Promise ((resolve, reject) => {
  fetch('https://final-shopping-cart-api.herokuapp.com/cart')
  .then(response => {
    resolve(response.json())
  }).catch(reject)
})