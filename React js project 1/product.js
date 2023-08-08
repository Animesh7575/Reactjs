import React from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';

const Product = ({ products, onAddProduct, onDeleteProduct }) => {
  return (
    <div>
      <h3>Product List</h3>
      <ProductForm onAddProduct={onAddProduct} />
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          onDelete={onDeleteProduct}
        />
      ))}
    </div>
  );
};

export default Product;