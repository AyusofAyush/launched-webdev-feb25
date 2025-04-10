import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProduct } from '../redux/productSlice';

const ProductDetails = () => {
  const product = useSelector(selectProduct);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <span className="price">${product.price}</span>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
          style={{ width: '50px', marginLeft: '10px' }}
        />
      </div>
      <button style={{ marginTop: '1rem' }}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
