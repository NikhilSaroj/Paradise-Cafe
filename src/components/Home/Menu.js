import React from 'react'
import { useHistory } from 'react-router'
import { useState } from 'react'
import './CSS/menu.css'
import './CSS/header.css'
import BreadsAndPastry from './BreadsAndPastry'
import SandwichAndSalad from './SandwichAndSalad'
import CakesAndDesert from './CakesAndDesert'
import CoffeAndBeverages from './CoffeAndBeverages'
import Footer from './Footer'
import FoodItems from './FoodItems'
import Header from './Header'

function Menu(props) {

    const [items,whenLinkIsClicked] = 
    useState(
    [
        {
            id:101,
            itemName:'Promotions',
            isClicked:true
        },
        {
            id:102,
            itemName:'Breads and Pastry',
            isClicked:false
        },
        {
            id:103,
            itemName:'Sandwich and Salad',
            isClicked:false
        },
        {
            id:104,
            itemName:'Cakes and Desert',
            isClicked:false
        },
        {
            id:105,
            itemName:'Coffe and Beverages',
            isClicked:false
        }
    ]);

    const buttonOnClicked = (event) => {

        const buttonID = parseInt(event.target.id);
        const tmp = items.filter(x => x.id === buttonID);
        console.log(tmp[0].id," = ",tmp[0].isClicked)
        tmp[0].isClicked = true;
        console.log(tmp[0].id," = ",tmp[0].isClicked)
        
        for(let i=0;i<items.length;i++){

            if(buttonID !== items.at(i).id){
                items.at(i).isClicked = false
            }
        }
        whenLinkIsClicked(arr => [...arr]);        
      
    }

    const itemsList = items.map((items) => <h1 id="h1-list" key={items.id}>
        <button className="list-buttons" id={items.id} onClick={buttonOnClicked}>{items.itemName}</button></h1>); 

    
            return (
            <div className="menu">
                <Header/>
                <div className="container">
                        <div className="menu-list">
                            {itemsList}
                        </div>

                        <div id="menu-card">
                            {items.at(0).isClicked === true && <FoodItems />}
                            {items.at(1).isClicked === true && <BreadsAndPastry />}
                            {items.at(2).isClicked === true && <SandwichAndSalad />}
                            {items.at(3).isClicked === true && <CakesAndDesert />}
                            {items.at(4).isClicked === true && <CoffeAndBeverages />}
                        </div>
                </div>
                <Footer/>
            </div>
        )
}

export default Menu
