import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const OrderConformation = () => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/');
  };

  return (
    <>
      
        <div className="confirm-container">
          <h2 className="confirm">Order Confirmed!</h2>
          <p className="confirm-para">Your order is placed!</p>
          <p className="confirm-para">Thank You for shopping with Us</p>
          <button className="home-button" onClick={handleGoToHomePage}>OK</button>
        </div>
   
    </>
  );
};

export default OrderConformation;
