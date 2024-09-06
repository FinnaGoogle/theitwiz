import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShippingMethod } from '../redux/cartSlice'; 
import './style/cartPage.css'

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingMethod = useSelector((state) => state.cart.shippingMethod);

  const handleShippingChange = (event) => {
    dispatch(selectShippingMethod(event.target.value));
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name}</h3>
                <p>R{item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Amount: R{totalAmount.toFixed(2)}</p>

        <div className="shipping-method">
          <label>Select Shipping Method:</label>
          <select value={shippingMethod} onChange={handleShippingChange}>
            <option value="standard">Standard Shipping - R70.00</option>
            <option value="express">Express Shipping - R170.00</option>
          </select>
        </div>

        <p>Shipping: R{shippingMethod === 'express' ? '170.00' : '50.00'}</p>
        <p>
          <strong>
            Total: R{(totalAmount + (shippingMethod === 'express' ? 170.0 : 70.0)).toFixed(2)}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default CartPage;