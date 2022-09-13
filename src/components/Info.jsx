import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        
        <div className="about__box">
            <i className="uil uil-heart-medical  about__icon"></i>
            <h3 className="about__title">Healthy Fats</h3>
            
        </div>

        <div className="about__box">
            <i className="uil uil-3-plus  about__icon"></i>
            <h3 className="about__title">Omega-3 & 5</h3>
            
        </div>

        <div className="about__box">
            <i className="uil uil-hard-hat  about__icon"></i>
            <h3 className="about__title">Fatty Acid</h3>
            
        </div>
    </div>
  )
}

export default Info