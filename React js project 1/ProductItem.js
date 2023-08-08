import React from 'react';

const ProductItem = ({ id, name, price, onDelete }) => {
  return (
    <div>
      <span>{name} - {price} INR</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default ProductItem;