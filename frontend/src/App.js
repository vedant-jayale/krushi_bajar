import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product'; // Import the Product component
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Company from './Components/Footer/Company';
import Contact from './Components/Footer/Contact';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import Pay from "./Components/CartItems/PayForm/Pay.jsx";
import Success from "./Components/CartItems/Success/Success.jsx";
import CashOnDelivery from './Components/CartItems/CashOnDelivery.jsx';


function App() {
  return (
    <div data-testid="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/insecticides' element={<ShopCategory category="insecticides" />} />
          <Route path='/fungicides' element={<ShopCategory  category="fungicides" />} />
          <Route path='/tonics' element={<ShopCategory  category="tonics" />} />
          <Route path='/fertilizers' element={<ShopCategory  category="fertilizers" />} />
          <Route path='/others' element={<ShopCategory  category="others" />} />
          {/* Define route for individual product */}
          <Route path='/product/:productId' element={<Product />} /> 
          {/* Note: ":productId" is a placeholder for the actual product ID */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/AdminLogin' element={<AdminLogin />} />
          <Route path='/pay' element={<Pay/>} />
          <Route path='/cash-on-delivery' element={<CashOnDelivery/>} />
          <Route path='/success' element={<Success/>} />



          
       
        </Routes>
        <Footer />  
      </BrowserRouter>
    </div>
  );
}

export default App;

