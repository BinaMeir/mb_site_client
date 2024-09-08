import React from 'react';
import { FaUtensils, FaHome, FaBath, FaTools, FaCouch, FaWrench } from 'react-icons/fa'; // Importing icons from Font Awesome
import { GiFloorPolisher } from 'react-icons/gi'; // Importing icon from Game Icons
import { Link } from 'react-router-dom';
import './SecondSection.css'; // Import the CSS for styling

const SecondSection = () => {
    return (
        <header className="second-section">
            <div className="second-section-header">
                <h2>ההתמחויות שלנו</h2>
            </div>
            <div className="second-section-links">    
                <Link to="/house-rennovation#others" className="icon-link">
                    <FaTools size={50} />
                    <span>שונות</span>
                </Link>      
                <Link to="/house-rennovation#plaster" className="icon-link">
                    <FaTools size={50} />
                    <span>גבס</span>
                </Link>
                <Link to="/house-rennovation#flooring" className="icon-link">
                    <GiFloorPolisher size={50} />
                    <span>ריצוף</span>
                </Link>
                <Link to="/house-rennovation#plumbing" className="icon-link">
                    <FaWrench size={50} />
                    <span>אינסטלציה</span>
                </Link>
                <Link to="/house-rennovation#bathroom" className="icon-link">
                    <FaBath size={50} />
                    <span>חדרי אמבטיה</span>
                </Link>
                <Link to="/house-rennovation#kitchen" className="icon-link">
                    <FaUtensils size={50} />
                    <span>מטבחים</span>
                </Link>
                <Link to="/house-rennovation#living-room" className="icon-link">
                    <FaCouch size={50} />
                    <span>סלון</span>
                </Link>
                <Link to="/house-rennovation#apartment-renovation" className="icon-link">
                    <FaHome size={50} />
                    <span>שיפוץ דירה</span>
                </Link>      
            </div>
        </header>
    );
};

export default SecondSection;
