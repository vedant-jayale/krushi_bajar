import React from 'react';
import "./Breadcrums.css"

const Breadcrums = ({ productName }) => {
  return (
    <div className="breadcrums">
      <span>Home</span> / <span>Products</span> /  <span>{productName}</span>
    </div>
  );
};

export default Breadcrums;