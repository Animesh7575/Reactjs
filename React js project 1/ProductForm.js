import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (productName.trim() === '' || productPrice <= 0) {
      return;
    }

    const newProduct = {
      id: Math.random().toString(),
      name: productName,
      price: +productPrice,
    };

    onAddProduct(newProduct);
    setProductName('');
    setProductPrice('');
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        value={productName}
        onChange={(event) => setProductName(event.target.value)}
      />
      <label htmlFor="price">Product Price (INR)</label>
      <input
        type="number"
        id="price"
        value={productPrice}
        onChange={(event) => setProductPrice(event.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;