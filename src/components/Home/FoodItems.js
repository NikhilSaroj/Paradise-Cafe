import React from 'react'
import { useState } from 'react'


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
    }
  ])

  const foodItemsList = items.map(x => 
     <div className="Food-Items-List" key={x.id} id={x.id}>
        <img src={image_url} alt="something" height="137px" width="137px"/>
        {x.name}
        <button>Add to Cart</button>
     </div>)
  return (
    <div>
      {foodItemsList}
    </div>
  )
}

export default FoodItems
