import React from 'react';

const PayOption = ({ handlePayment }) => {
  return (
    <div className="pay-option">
      <button onClick={() => handlePayment('online')}>Pay Online</button>
      <button onClick={() => handlePayment('COD')}>Cash on Delivery</button>
    </div>
  );
};

export default PayOption;
