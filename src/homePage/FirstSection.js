import React from 'react';
import './FirstSection.css';
import IsMobile from '../IsMobile';
import Contact from '../pages/Contact';
import { Link } from 'react-router-dom';

const FirstSection = () => {
    const isMobile = IsMobile();

    return (
        <header className="first-section">
            <div className="first-section-content">
                    <h1>ברלינגר בנייה ושיפוצים</h1>
                <p>תכנון חכם, ביצוע מושלם</p>
            </div>
            {isMobile ? (
                <div className="contact-button-container">
                    <button className="contact-button">
                        <Link to="/contact" className="contact-link">Contact Us</Link>
                    </button>
                </div>
            ) : (
                <div className="contact-component-container">
                    <Contact />
                </div>
            )}
        </header>
    );
};

export default FirstSection;
