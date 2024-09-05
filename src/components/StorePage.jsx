import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './StorePage.css';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

function StorePage() {
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default StorePage;
