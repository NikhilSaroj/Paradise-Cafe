import React from 'react'
import { useState } from 'react'
import './CSS/FoodItems.css'
import creamroll from './images/cafeLogo.jpg'
import sandwich from './images/sandwich.jpg'
import pattis from './images/pattis.jfif'
import pohe from './images/pohe.jfif'
import idli from './images/idli.jfif'
import samosa from './images/samosa.jfif'
import masalaTea from './images/masalaTea.jfif'
import coffee from './images/coffee.jfif'


function FoodItems() {

  const burger = "https://www.bing.com/th?id=OIP.lEa60MoPEz7kNWZQBc_a3wHaEo&w=199&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2";
  const [items,setFoodItems] = useState([
    {
      id: 1,
      name: "Creamroll",
      picture: creamroll,
      price: 15
    },
    {
      id: 2,
      name: "Burger",
      picture: burger,
      price: 70
    },
    {
      id: 3,
      name: "Sandwich",
      picture: sandwich,
      price: 120
    },
    {
      id: 4,
      name: "Pattis",
      picture: pattis,
      price: 15
    },
    {
      id: 5,
      name: "Pohe",
      picture: pohe,
      price: 15
    },
    {
      id: 6,
      name: "Idli",
      picture: idli,
      price: 30
    },
    {
      id: 7,
      name: "Samosa",
      picture: samosa,
      price: 15
    },
    {
      id: 8,
      name: "Masala Tea",
      picture: masalaTea,
      price: 10
    },
    {
      id: 9,
      name: "Coffee",
      picture: coffee,
      price: 20
    }
  ])

  const foodItemsList = items.map(x => 
     <div className="Food-Items-List" key={x.id}>
        <img id="food-img" src={x.picture} alt="something"/>
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
