import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShippingMethod } from '../redux/cartSlice';

const CartPage = () => {
  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Selectors to extract necessary state from Redux store
  const cartItems = useSelector((state) => state.cart.items); // Get all items in the cart
  const totalAmount = useSelector((state) => state.cart.totalAmount); // Get the total amount of the cart
  const shippingMethod = useSelector((state) => state.cart.shippingMethod); // Get the selected shipping method

  // Event handler for when the user selects a shipping method
  const handleShippingChange = (event) => {
    dispatch(selectShippingMethod(event.target.value)); // Dispatch action to update shipping method in Redux store
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          {cartItems.length > 0 ? (
            <div className="space-y-6">
              {/* Loop over cart items and render each one */}
              {cartItems.map((item) => (
                <div
                  key={item.id} // Use unique key for each item
                  className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-md mr-6"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="text-lg text-gray-600">R{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // If cart is empty, show message
            <p className="text-center text-lg">Your cart is empty</p>
          )}
        </div>

        {/* Cart Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Cart Summary</h2>
          
          {/* Display total cart amount */}
          <p className="text-lg mb-4">Total Amount: R{totalAmount.toFixed(2)}</p>

          {/* Shipping Method Selection */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold">Select Shipping Method:</label>
            <select
              value={shippingMethod} // Controlled component linked to Redux state
              onChange={handleShippingChange} // Handle shipping change
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="standard">Standard Shipping - R70.00</option>
              <option value="express">Express Shipping - R170.00</option>
            </select>
          </div>

          {/* Display shipping cost based on selected shipping method */}
          <p className="text-lg mb-4">
            Shipping: R{shippingMethod === 'express' ? '170.00' : '70.00'}
          </p>

          {/* Calculate and display final total including shipping */}
          <p className="text-xl font-semibold">
            Total: R{(totalAmount + (shippingMethod === 'express' ? 170.0 : 70.0)).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
