import React, { useState } from 'react';
import serverConfig from '../serverConfig';
import axios from 'axios';
import './Contact.css';
import IsMobile from '../IsMobile';

const handleSaveData = async (data) => {
  console.log('Data to save:', data);

  axios.post(serverConfig.SERVER_URL + serverConfig.ADD_CLIENT_EP, data)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

const Contact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [showThanks, setShowThanks] = useState(false);
  const isMobile = IsMobile();

  const validateInput = (data) => {
    const errors = {};
    if (!data.name.trim()) {
        errors.name = 'Name is required';
      } else if (!/^[\u0590-\u05FFa-zA-Z\s]+$/.test(data.name)) {
        errors.name = 'Name can only contain letters and spaces';
    }
    // Phone number validation
    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (!data.email.includes('@')) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const handleSave = () => {
    const data = {
      name,
      phoneNumber,
      email
    };
    const validationErrors = validateInput(data);
    if (Object.keys(validationErrors).length === 0) {
      handleSaveData(data);
      setShowThanks(true); // Show the success message
      setErrors({}); // Clear any previous errors
      setName(''); // Clear input fields
      setPhoneNumber('');
      setEmail('');
      
      // Hide the message and reset the form after 2 seconds
      setTimeout(() => {
        setShowThanks(false);
      }, 2000);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={`contact-container ${isMobile ? 'vertical' : 'horizontal'}`}>
      {showThanks ? (
        <p>תודה שפניתם למיכאל ברלינגר בנייה ושיפוצים!</p>
      ) : (
        <>
          <button onClick={handleSave}>שמור</button>
          <div className="email">
            <input 
              type="text" 
              placeholder="אימייל" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="phoneNumber">
            <input 
              type="text" 
              placeholder="טלפון" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
          </div>
          <div className="name">
            <input 
              type="text" 
              placeholder="שם" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
        </>
      )}
    {!showThanks && <label>:צרו קשר</label>}
    </div>
  );
};

export default Contact;
