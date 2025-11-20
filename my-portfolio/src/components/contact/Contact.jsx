/* eslint-disable no-unused-vars */
import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get In Touch 📩</h2>
        <span className="section__subtitle">Ready to get started on your project? <br/> Contact me now for a Free consultation.</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk To Me<i className="uil uil-calling"></i></h3>

                <div className="contact__info">

                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">gkmsankalpa98@gmail.com</span>

                        <a href="mailto:gkmsankalpa98@gmail.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">(+94) 77 063 1923</span>

                        <a href="https://api.whatsapp.com/send?phone=94770631923&text=Hello, I would like to connect with you!" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact