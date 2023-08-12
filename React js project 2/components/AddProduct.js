import React, { useState } from 'react';
import { useMedicineItems } from '../contexts/MedicineItemsContext';
import './AddProduct.css'; 

const AddProduct = () => {
  const { addMedicineItem } = useMedicineItems();
  const [medicineData, setMedicineData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicineData({ ...medicineData, [name]: value });
  };

  const handleAddProduct = () => {
    addMedicineItem(medicineData);
    setMedicineData({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Medicine Name"
        value={medicineData.name}
        onChange={handleInputChange}
      />
      
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
};

export default AddProduct;