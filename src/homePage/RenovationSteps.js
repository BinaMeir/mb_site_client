// RenovationSteps.js
import React from 'react';
import { FaPhoneAlt, FaHome, FaFileInvoice, FaHammer } from 'react-icons/fa';
import './RenovationSteps.css'; // Import the CSS file for styling

const RenovationSteps = () => {
    return (
        <div className="renovation-steps-container">
            <h2>מתכננים שיפוץ? ככה מתחילים</h2>

            <div className="step">
                <FaPhoneAlt className="step-icon" size={40} />
                <div className="step-content">
                    <h3>1. יצירת קשר ראשוני</h3>
                    <p>צרו איתנו קשר וספרו לנו על הרעיונות שלכם. נשמח לשמוע את הצרכים שלכם ולחשוב איך להפוך את החלום שלכם למציאות.</p>
                </div>
            </div>

            <div className="step">
                <FaHome className="step-icon" size={40} />
                <div className="step-content">
                    <h3>2. ביקור במקום</h3>
                    <p>נגיע אליכם כדי להתרשם מהשטח, להבין את המצב הנוכחי, ולהציע פתרונות מותאמים לפרויקט שלכם.</p>
                </div>
            </div>

            <div className="step">
                <FaFileInvoice className="step-icon" size={40} />
                <div className="step-content">
                    <h3>3. הצעת מחיר מפורטת</h3>
                    <p>לאחר הביקור, נבנה עבורכם הצעת מחיר ברורה ומסודרת שכוללת את כל מה שנדרש - בלי הפתעות בהמשך.</p>
                </div>
            </div>

            <div className="step">
                <FaHammer className="step-icon" size={40} />
                <div className="step-content">
                    <h3>4. תחילת עבודה</h3>
                    <p>צוות הפועלים שלנו יתחיל בעבודה לפי התוכנית שנקבעה, תוך שמירה על לוחות זמנים ועדכונים שוטפים לאורך הדרך.</p>
                </div>
            </div>
        </div>
    );
};

export default RenovationSteps;
