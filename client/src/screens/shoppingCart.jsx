import React, { useState } from 'react';
import "../styles/cart.css"; 
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function ShoppingCart() {  
    const navigate = useNavigate()
    const { state } = useLocation();
    const product = state ? state.additionalData : null;

    const [products, setProducts] = useState(product ? [product] : []);
    const [paymentMethod, setPaymentMethod] = useState(null);

    const handleCheckout = () => {
        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }
        navigate('/order-confirm');
    };

    const getShortDescription = (description, numWords) => {
        if (!description) return '';
        const words = description.split(' ');
        return words.slice(0, numWords).join(' ');
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const isCheckoutDisabled = !paymentMethod; 

    return (
        <div className="shopping-cart">
            <h1>Shopping Cart</h1>
            <div className="column-labels">
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-line-price">Total</label>
            </div>

            {products.map(product => (
                <div className="product" key={product.name}>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-details">
                        <div className="product-title">{product.name}</div>
                        <p className="product-description">{getShortDescription(product.description, 12)}</p>
                        <div className="product-title">{product.color}</div>
                    </div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-quantity"><p>1</p></div>
                    <div className="product-line-price">{product.price}</div>
                </div>
            ))}

            <div className="totals">
                <div className="totals-item">
                    <label>Subtotal</label>
                    <div className="totals-value">{product.price}</div>
                </div>
                <div className="totals-item">
                    <label>Tax (5%)</label>
                    <div className="totals-value">00.00</div>
                </div>
                <div className="totals-item">
                    <label>Shipping</label>
                    <div className="totals-value">{product.price}</div>
                </div>
                <div className="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div className="totals-value">{product.price}</div>
                </div>
                <div className="totals-item">
                    <label htmlFor="cod">Cash on Delivery (COD)</label>
                    <input 
                        type="radio" 
                        id="cod" 
                        name="paymentMethod" 
                        value="cod" 
                        onChange={handlePaymentMethodChange}
                    />
                </div>
            </div>

            <button className="checkout" disabled={isCheckoutDisabled} onClick={handleCheckout}>Checkout</button>
        </div>
    );
}

export default ShoppingCart;
