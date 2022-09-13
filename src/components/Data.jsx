import React from 'react'
import marijuana from "../assets/marijuana.png"

function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">Hempistan
        <img src={marijuana} alt=""  className='home__hand'/>
        </h1>

        <h3 className="home__subtitle">Organic & Fresh</h3>
        <p className="home__description">The Best Medical Hemp in Pakistan 
        </p>
    
    </div>
  )
}

export default Data