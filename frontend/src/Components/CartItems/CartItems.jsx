import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';
import PayOption from './PayOption'; // Import PayOption component
 // Import CashOnDelivery component

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, incrementCartItem, decrementCartItem, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [showPayOption, setShowPayOption] = useState(false); // State to toggle PayOption component

  // Function to calculate total price for an item
  const calculateTotalPrice = (item) => {
    return item.new_price * cartItems[item.id];
  };

  // Handle checkout and display payment options
  const handleCheckout = () => {
    setShowPayOption(true); // Show PayOption component
  };

  // Handle payment method selection
  const handlePayment = (method) => {
    if (method === 'COD') {
      // Navigate to CashOnDelivery component with props
      navigate('/cash-on-delivery', { state: { totalAmount: getTotalCartAmount(), productNames: getProductNames() } });
    } else {
      // Handle online payment option
      navigate('/pay', { state: { totalAmount: getTotalCartAmount(), productNames: getProductNames(), paymentMethod: 'online' } });
    }
  };

  // Get list of product names for display
  const getProductNames = () => {
    return all_product
      .filter(item => cartItems[item.id] > 0)
      .map(item => item.name)
      .join(', ');
  };

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Array.isArray(all_product) &&
        all_product.map((item) => {
          if (cartItems[item.id] > 0) {
            return (
              <div key={item.id}>
                <div className='cartitems-format cartitems-format-main'>
                  <img src={item.image} alt='' className='carticon-product-icon' />
                  <p>{item.name}</p>
                  <p>₹{item.new_price}</p>
                  <div className='cartitems-quantity'>
                    <button className='decrement' onClick={() => decrementCartItem(item.id)}>-</button>
                    <span className='cartitems-quantity-number'>{cartItems[item.id]}</span>
                    <button className='increment' onClick={() => incrementCartItem(item.id)}>+</button>
                  </div>
                  <p>₹{calculateTotalPrice(item)}</p>
                  <img
                    className='cartitems-remove-icon'
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                    alt=''
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          {showPayOption && <PayOption handlePayment={handlePayment} />} {/* Conditional rendering of PayOption component */}
        </div>
        <div className='cartitems-promocode'>
          <p>If You have a promo code, Enter it Here</p>
          <div className='cartitems-promobox'>
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
      {!showPayOption && <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>} {/* Proceed to checkout button */}
    </div>
  );
};

export default CartItems;
