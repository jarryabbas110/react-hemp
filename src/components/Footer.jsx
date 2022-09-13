import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Hempistan.</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#product" className="footer__link">Products</a>
                </li>

                <li>
                    <a href="#vaporize" className="footer__link">Vaporize</a>
                </li>

                <li>
                    <a href="#chillums" className="footer__link">Chillums</a>
                </li>

                <li>
                    <a href="#cultivate" className="footer__link">Cultivate</a>
                </li>

                <li>
                    <a href="#precribe" className="footer__link">Prescribe</a>
                </li>

                <li>
                    <a href="#review" className="footer__link">Reviews</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">

            <a href="https://www.youtube.com/" className="footer__social-link" target="_blank">
            <i className="bx bxl-youtube"></i>
            </a>


        <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.facebook.com/" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
        </a>


            </div>

            <span className="footer__copy">&#169; Hempistan. All Rights Reserved</span>
        </div>
    </footer>
  )
}

export default Footer
