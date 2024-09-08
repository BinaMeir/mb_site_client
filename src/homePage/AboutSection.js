import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css'; // Import the CSS file for styling

const AboutSection = () => {
    return (
        <div className="about-section-container">
            <div className="about-section-content">
                <div className="about-text">
                    <h2>אודות הקבלן</h2>
                    <p>
                        מיכאל ברלינגר הוא קבלן שיפוצים עם 10 שנות ניסיון בהובלת פרויקטים של שיפוץ דירות, ומביא איתו שילוב של מקצועיות, דיוק ותשומת לב לכל פרט.
                    </p>
                    <p>
                        בין אם אתם חולמים על מטבח חדש, חידוש חדר האמבטיה, או שדרוג כללי של הבית – מיכאל וצוותו ילוו אתכם לאורך כל התהליך: 
                        משלב הרעיון והעיצוב ועד למסירת המפתח.
                    </p>
                    <h3>המומחיות שלנו</h3>
                    <ul>
                        <li>התאמת פתרונות אישיים לצרכים שלכם</li>
                        <li>עמידה בלוחות זמנים ושקיפות מלאה</li>
                        <li>שימוש בחומרי גלם איכותיים בלבד</li>
                        <li>שירות אמין וזמין עם ליווי צמוד לאורך כל הדרך</li>
                    </ul>
                    <p className="final-message">
                        מתכננים שיפוץ? תנו לנו להפוך את החלום שלכם למציאות!
                    </p>
                    <Link to="/about" className="about-button">
                        קרא.י עוד
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
