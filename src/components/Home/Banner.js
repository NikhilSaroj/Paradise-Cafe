import React from 'react'
import './CSS/banner.css'

function Banner(props) {
    if(props.val===true){
        return(
            <div className="about-paradise">
                <h1>About Paradise</h1>
            </div>
        )
    }
    return (
            <div className="banner">
               This is banner
            </div>
    )
}

export default Banner

