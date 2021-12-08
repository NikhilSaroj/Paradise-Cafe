import React from 'react'
import { useState } from 'react'
import './CSS/FoodItems.css'


function FoodItems() {

  const image_url = "https://www.bing.com/th?id=OIP.lEa60MoPEz7kNWZQBc_a3wHaEo&w=199&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2";
  const [items,setFoodItems] = useState([
    {
      id: 1,
      name: "Item1",
      picture: "Picture1",
      price: 1200
    },
    {
      id: 2,
      name: "Item2",
      picture: "Picture3",
      price: 1200
    },
    {
      id: 3,
      name: "Item3",
      picture: "Picture3",
      price: 1200
    },
    {
      id: 4,
      name: "Item3",
      picture: "Picture3",
      price: 1200
    },
    {
      id: 5,
      name: "Item3",
      picture: "Picture3",
      price: 1200
    },
    {
      id: 6,
      name: "Item3",
      picture: "Picture3",
      price: 1200
    },
    {
      id: 7,
      name: "Item3",
      picture: "Picture3",
      price: 1200
    },
    {
      id: 8,
      name: "Item3",
      picture: "Picture3",
      price: 1200
    },
    {
      id: 9,
      name: "Item3",
      picture: "Picture3",
      price: 1200
    }
  ])

  const foodItemsList = items.map(x => 
     <div className="Food-Items-List" key={x.id}>
        <img id="food-img" src={image_url} alt="something"/>
        <div className="text-container">
          <p id="item-name">Name : {x.name}</p>
          <p id="item-price">Price : {x.price}</p>
          <button id="add-to-cart">Add to Cart</button>
        </div>        
     </div>)
  return (
    <div className="food-items-container">
      {foodItemsList}
    </div>
  )
}

export default FoodItems
