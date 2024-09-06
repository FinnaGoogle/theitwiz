import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './style/StorePage.css';

const products = [
  {
    id: 1,
    name: 'High End',
    details: {
      CPU: 'Intel Core i9-13900K',
      GPU: 'NVIDIA RTX 4090',
      RAM: '64GB DDR5',
      Storage: '2TB NVMe SSD',
      PSU: '1000W Platinum',
      Cooling: 'Liquid Cooling'
    },
    price: 40000,
    imageUrl: 'path/to/highendImage',
    alt: "High-end PC"
  },
  {
    id: 2,
    name: 'Mid Tier',
    details: {
      CPU: 'Intel Core i7-13700K',
      GPU: 'NVIDIA RTX 4070',
      RAM: '32GB DDR4',
      Storage: '1TB NVMe SSD',
      PSU: '750W Gold',
      Cooling: 'Air Cooling'
    },
    price: 20000,
    imageUrl: 'path/to/midrangeImage',
    alt: "Mid-range PC"
  },
  {
    id: 3,
    name: 'Entry Level',
    details: {
      CPU: 'Intel Core i5-12400',
      GPU: 'NVIDIA GTX 1660 Super',
      RAM: '16GB DDR4',
      Storage: '512GB SSD',
      PSU: '550W Bronze',
      Cooling: 'Stock Air Cooler'
    },
    price: 10000,
    imageUrl: 'path/to/entrylevelImage',
    alt: "Entry-level PC"
  }
];


function StorePage() {
  const dispatch = useDispatch();

  return (
  <div>
    <h1>Our products</h1>
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>R{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
}

export default StorePage;
