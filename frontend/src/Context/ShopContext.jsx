import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return {}; // Initialize an empty object for cart items
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch(`{window.location.origin}/allproducts`) 
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products:", data);
        if (data.success) {
          setAll_product(data.products);
        } else {
          console.error("Error fetching products:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    // Fetch cart items if user is logged in
    if (localStorage.getItem("auth-token")) {
      fetch(`{window.location.origin}/getcart`, {
        method: 'POST',
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        }
      })
        .then((response) => response.json())
        .then((data) => {
          // Update cart items state with fetched data
          setCartItems(data);
        })
        .catch((error) => {
          console.error("Error fetching cart items:", error);
        });
    }
  }, []);

  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch(`{window.location.origin}/addtocart`, {
        method: 'POST',
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId })
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.error("Error adding to cart:", error);
        });
    }
  };

  const incrementCartItem = (itemId) => {
    addToCart(itemId);
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      if (localStorage.getItem("auth-token")) {
        fetch(`{window.location.origin}/removefromcart`, {
          method: 'POST',
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId })
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => {
            console.error("Error removing from cart:", error);
          });
      }
    }
  };

  const decrementCartItem = (itemId) => {
    if (cartItems[itemId] > 0) {
      removeFromCart(itemId);
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(itemId));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalItem += cartItems[itemId];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    incrementCartItem, 
    decrementCartItem
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
