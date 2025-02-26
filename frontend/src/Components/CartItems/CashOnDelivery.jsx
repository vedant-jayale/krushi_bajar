import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  // Importing necessary hooks from react-router-dom
import emailjs from 'emailjs-com';
import './PayForm/Pay.css';


const CashOnDelivery = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Using useHistory hook to get access to history

  const { totalAmount, productNames } = location.state || {};

  const [formData, setFormData] = useState({
    products: productNames || '',
    customer_name: '',
    mobile: '',
    email: '',
    shipping_address: '',
    total: totalAmount || '',
    
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formRef.current.checkValidity()) {
      emailjs
        .send(
          'service_g9q9tcq',
          'template_25fpt9c',
          formData,
          'snYQucjNwTC1BN6W5'
        )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Payment details sent successfully!');
  
          // Redirect to success page after successful payment
          navigate('/success'); // Navigate to '/success' route
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('Failed to send payment details.');
        });
    } else {
      alert('Please fill out all required fields.');
    }
  };
  
     
    

  return (
    <div className="main-container">
      <div className="sub-container">
        <form ref={formRef} className="form-container" onSubmit={handleSubmit}>
          {/* Form fields remain the same */}
          <div>
            <label htmlFor="productName" className="namefield">
              Product Name( उत्पाद का नाम)
            </label>
            <div className="product-container">
              <input
                id="productName"
                name="products"
                type="text"
                required
                value={formData.products}
                readOnly
                className="product-field"
              />
            </div>
          </div>
          <div>
            <label htmlFor="customerName" className="customer-field">
              Customer Name (ग्राहक का नाम)
            </label>
            <div className="customer-container">
              <input
                id="customerName"
                name="customer_name"
                type="text"
                required
                value={formData.customer_name}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <label htmlFor="customerMobile" className="block text-sm font-medium leading-6 text-gray-900">
              Customer Mobile (मोबाइल नंबर)
            </label>
            <div className="mt-2">
              <input
                id="customerMobile"
                name="mobile"
                type="text"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <label htmlFor="customerEmail" className="block text-sm font-medium leading-6 text-gray-900">
              Customer Email - ईमेल (वैकल्पिक)
            </label>
            <div className="mt-2">
              <input
                id="customerEmail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>
          <div>
            <label htmlFor="totalAmount" className="block text-sm font-medium leading-6 text-gray-900">
              Total Amount to Pay (कुल राशि)
            </label>
            <div className="mt-2">
              <input
                id="totalAmount"
                name="total"
                type="number"
                required
                value={`${formData.total}.00`}
                readOnly
                className="product-field"
              />
            </div>
          </div>
          
           
          
         
          <div>
            <label htmlFor="suggestions" className="block text-sm font-medium leading-6 text-gray-900">
              Shipping Address (पता)
            </label>
            <div className="mt-2">
              <textarea
                id="suggestions"
                name="shipping_address"
                required
                value={formData.shipping_address}
                onChange={handleChange}
                className="input-field"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CashOnDelivery;
