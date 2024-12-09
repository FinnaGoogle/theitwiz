import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice'; // Redux action to add items to the cart
import entrylevel from '../media/lowrange.jpg'; // Image for entry-level PC
import midlevel from '../media/midrange.jpg'; // Image for mid-range PC
import highlevel from '../media/highrange.1.jpg'; // Image for high-end PC

// Array of product objects containing details, price, and image references
const products = [
  {
    id: 1,
    name: 'High End', // Name of the product
    details: { // Detailed specifications of the product
      CPU: 'Intel Core i9-13900K',
      GPU: 'NVIDIA RTX 4090',
      RAM: '64GB DDR5',
      Storage: '2TB NVMe SSD',
      PSU: '1000W Platinum',
      Cooling: 'Liquid Cooling',
    },
    price: 40000, // Price of the product
    imageUrl: highlevel, // Image of the product
    alt: 'High-end PC', // Alt text for the image
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
      Cooling: 'Air Cooling',
    },
    price: 20000,
    imageUrl: midlevel,
    alt: 'Midrange PC',
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
      Cooling: 'Stock Air Cooler',
    },
    price: 10000,
    imageUrl: entrylevel,
    alt: 'Entry-level PC',
  },
];

function StorePage() {
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store

  return (
    <div className="min-h-screen py-20">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-center text-grey-600 mb-12">Our Products</h1>

      {/* Grid layout to display products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-grey-500 ">
        {products.map((product) => (
          <div
            key={product.id} // Unique key for each product
            className="bg-grey-400 opacity-80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Product image */}
            <img
              src={product.imageUrl}
              alt={product.alt}
              className="w-100 h-50  object-cover rounded-md mb-4"
            />
            {/* Product name */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            {/* Product details*/}
            <p className="text-lg text-gray-700 mb-4">{product.details.CPU}</p>
            <p className="text-lg text-gray-700 mb-4">{product.details.GPU}</p>
            <p className="text-lg text-gray-700 mb-4">{product.details.RAM}</p>
            <p className="text-lg text-gray-700 mb-4">{product.details.Storage}</p>
            <p className="text-lg text-gray-700 mb-4">{product.details.Cooling}</p>
            <p className="text-lg text-gray-700 mb-4">{product.details.PSU}</p>
            {/* Product price */}
            <p className="text-lg text-gray-700 mb-4">R{product.price}</p>
            {/* Add to cart button */}
            <button
              onClick={() => dispatch(addToCart(product))} 
              className="bg-black-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StorePage;