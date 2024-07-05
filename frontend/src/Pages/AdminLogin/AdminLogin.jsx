import React, { useState } from 'react';
import '../CSS/LoginSignup.css'; // Make sure to create a CSS file for styling

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    const predefinedEmail = "vedantjayle2003@gmail.com";
    const predefinedPassword ="$Krushi$";

    if (formData.email === predefinedEmail && formData.password === predefinedPassword) {
      window.location.href = 'https://krushibajaradmin.netlify.app/';
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Login</h1>
        <div className='loginsignup-fields'>
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type='email'
            placeholder='Email Address'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type='password'
            placeholder='Password'
          />
        </div>
        <button onClick={login}>Continue</button>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
