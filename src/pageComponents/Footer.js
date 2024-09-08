import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo} alt="לוגו" />
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h4>שירותים</h4>
                    <Link to="/bathrooms">חדרי אמבטיה</Link>
                    <Link to="/kitchen">מטבח</Link>
                    <Link to="/plaster">גבס</Link>
                    <Link to="/plumping">אינסטלציה</Link>
                </div>
                <div className="footer-column">
                    <h4>אודות החברה</h4>
                    <Link to="/about">אודות</Link>
                    <Link to="/contact">צור קשר</Link>
                </div>
                <div className="footer-column">
                    <h4>פרטי קשר</h4>
                    <p>טלפון: 0515887084</p>
                    <p>דוא"ל: mb0548439982</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
