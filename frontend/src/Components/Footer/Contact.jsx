import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

import Hero from '../Hero/Hero';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm('service_g9q9tcq', 'template_dvrpes4', form.current, {
        publicKey: '29Pf_TJ26Z79OYNiH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };



    return (
        <div>
         <Hero/>
        <div className='contact'>
            <h2>संपर्क करें</h2>
            <p>हमें आपसे सुनने में खुशी होगी। कृपया नीचे दिए गए विवरण का उपयोग करके हमसे संपर्क करें:</p>
            <div className='company-details'>
                <h3>संपर्क विवरण:</h3>
                <p><strong>ईमेल:</strong> info@krushibazar@gmail.com</p>
                <br></br>
                <p><strong>फोन:</strong> +91-1234567890</p>
                <br></br>
                <p><strong>पता:</strong> कृषि बाजार, उद्योग नगर, रम्भापुर ,तालुका अकोट, जिला अकोला - 444101</p>

            </div>
            <br></br>
            <div>
                <h3>संपर्क फ़ॉर्म:</h3>
                <form ref={form} onSubmit={sendEmail } className="contact-form">
                    <label htmlFor="name">नाम:</label><br />
                    <input type="text" id="name" name="from_name" className="input-field" required /><br />
                    <label htmlFor="email">ईमेल:</label><br />
                    <input type="email" id="email" name="from_email"  className="input-field" required /><br />
                    <label htmlFor="message">संदेश:</label><br />
                    <textarea id="message" name="message" rows="4" className="textarea-field"  required></textarea><br />
                    <button type="submit" className="submit-button">भेजें</button>
                </form>
            </div>
        </div>

        </div>
    );
}

export default Contact;



