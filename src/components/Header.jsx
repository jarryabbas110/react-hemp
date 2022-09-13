import React, { useState } from 'react'
import "./header.css";


const Header = () => {

    window.addEventListener("scroll", function () {
        const header= document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });


    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Hempistan</a>
        
            <div className={Toggle ? "nav__menu show-menu": "nav__menu" }>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"} href="#home" >
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
               
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
              
                    <li className="nav__item">
                        <a href="#product" onClick={() => setActiveNav('#product')} className={activeNav === "#product" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Products
                        </a>
                    </li>
        
                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase nav__icon"></i> Vaporize
                        </a>
                    </li>
                
                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portables
                        </a>
                    </li>
               
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Chillums
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Cultivate
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Prescribe
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#review" onClick={() => setActiveNav('#review')} className={activeNav === "#review" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Reviews
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                        
                    <li className="nav__item">
                        <a className="nav__link">
                        <i class="uil uil-search"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                        <i class="uil uil-user"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                        <i class="uil uil-user-circle"></i>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a className="nav__link">
                        <i class="uil uil-shopping-cart"></i>
                        </a>
                    </li>

                    
                        {/* <Nav/> */}
                        
                </ul>

                <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header