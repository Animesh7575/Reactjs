import React from 'react';
import { CartProvider } from './contexts/CartContext';
import { MedicineItemsProvider } from './contexts/MedicineItemsContext';
import AddProduct from './components/AddProduct';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import './App.css'; // Import your global App.css if needed

function App() {
  return (
    <CartProvider>
      <MedicineItemsProvider>
        <div className="App">
          <h1>Medicine Shop Inventory Management</h1>
          <AddProduct />
          <MedicineList />
          <Cart />
        </div>
      </MedicineItemsProvider>
    </CartProvider>
  );
}

export default App;