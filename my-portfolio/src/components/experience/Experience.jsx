/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">My Professional Journey</span>

        <div className="exp__container container grid">
            
            {/* Experience 1: Data Entry Operator */}
            <div className="exp__content">
                <div>
                    <i className="uil uil-database exp__icon"></i>
                    <h3 className="exp__title">Data Entry <br /> Operator</h3>
                </div>

                <div>
                    <span className="exp__comp">Fast Tech</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Data Entry Operator</h3>
                        <p className="exp__modal-description">Worked as a Data Entry Operator at Fast Tech.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Managed data entry tasks with high accuracy.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Ensured efficiency in data processing and management.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Experience 2: Online Entrepreneur */}
            <div className="exp__content">
                <div>
                    <i className="uil uil-store exp__icon"></i>
                    <h3 className="exp__title">Online <br /> Entrepreneur </h3>
                </div>

                <div>
                    <span className="exp__comp">Self-Employed</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Online Entrepreneur <br /> 2021 - Ongoing</h3>
                        <p className="exp__modal-description">Operating independent businesses across two separate platforms.</p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info"><strong>Fiverr:</strong> Providing freelance technical and creative services.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info"><strong>Dropshipping:</strong> Managing product listings and order fulfillment for e-commerce.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Experience