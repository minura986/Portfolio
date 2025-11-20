/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Minura Sankalpa/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                
                {/* Removed Testimonials Link */}
            </ul>


            <span className="footer__copy">&#169; Minura Sankalpa. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer