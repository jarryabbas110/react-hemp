import React from 'react'
import Data from './Data'
import "./home.css";
import ScrollDown from './ScrollDown';
import background from "../assets/background2.jpg"

function Home() {
  return (
     <section className="home section" id='home'>
        
        <div className="home__container container grid">
          
            <div className="home__content grid">
                
      

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown />
        </div>
     </section>
  )
}

export default Home