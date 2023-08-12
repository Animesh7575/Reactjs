import React, { createContext, useContext, useState } from 'react';

const MedicineItemsContext = createContext();

export const MedicineItemsProvider = ({ children }) => {
  const [medicineItems, setMedicineItems] = useState([]);

  const addMedicineItem = (item) => {
    setMedicineItems([...medicineItems, item]);
  };

  return (
    <MedicineItemsContext.Provider value={{ medicineItems, addMedicineItem }}>
      {children}
    </MedicineItemsContext.Provider>
  );
};

export const useMedicineItems = () => {
  return useContext(MedicineItemsContext);
};