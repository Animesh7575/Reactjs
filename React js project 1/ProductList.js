import React, { useState, useEffect } from 'react';
import Product from './Product';
import TotalStockValue from './TotalStockValue';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [totalStockValue, setTotalStockValue] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);

    const initialValue = storedProducts.reduce((sum, product) => sum + product.price, 0);
    setTotalStockValue(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
    const updatedTotal = products.reduce((sum, product) => sum + product.price, 0);
    setTotalStockValue(updatedTotal);
  }, [products]);

  const addProductHandler = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const deleteProductHandler = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h2>Seller's Admin Page</h2>
      <Product
        products={products}
        onAddProduct={addProductHandler}
        onDeleteProduct={deleteProductHandler}
      />
      <TotalStockValue value={totalStockValue} />
    </div>
  );
};

export default ProductList;