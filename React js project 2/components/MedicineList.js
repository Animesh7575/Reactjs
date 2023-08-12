import React from 'react';
import { useMedicineItems } from '../contexts/MedicineItemsContext';
import { useCart } from '../contexts/CartContext';
import './MedicineList.css';

const MedicineList = () => {
  const { medicineItems } = useMedicineItems();
  const { dispatch } = useCart();

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div className="medicine-list">
      <h2>Medicine List</h2>
      <ul>
        {medicineItems.map((item, index) => (
          <li key={index}>
            <div className="medicine-info">
              <span className="medicine-name">{item.name}</span>
              <span className="stock-info">
                {item.quantity > 0 ? `${item.quantity} in stock` : 'Out of stock'}
              </span>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              disabled={item.quantity === 0}
              className={item.quantity === 0 ? 'red' : ''}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;