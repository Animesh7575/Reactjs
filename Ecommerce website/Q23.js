import React, { useState, useCallback } from "react";

const cartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  purchased: () => {},
  logoutCartHandler: () => {},
  loginCartHandler: () => {},
});

export const CartContextProvider = (props) => {
  let userEmail;
  if (localStorage.getItem("tokenId")) {
    userEmail = JSON.parse(localStorage.getItem("tokenId")).email;
    userEmail = userEmail.replace(/[@.]/g, "");
  }

  const [cartState, setCartState] = useState({ item: [], totalAmount: 0 });

  const addItem = (updatedCart) => {
    setCartState(updatedCart);
  };

  const removeItem = (updatedCart) => {
    setCartState(updatedCart);
  };

  const purchased = () => {
    alert("Your order has been placed");
    setCartState({ item: [], totalAmount: 0 });
  };

  const loginCartHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/a062fc4d12e04df9a0f7d5f2dd6cbefe/cartItem${userEmail}`
      );

      const data = await response.json();
      console.log("login called");
      if (response.ok) {
        console.log("refresh");
        let refreshedItem = [];
        let refreshedAmount = 0;

        data.forEach((item) => {
          refreshedItem.push(item);
          refreshedAmount += item.price * item.quantity;
        });

        setCartState({ item: refreshedItem, totalAmount: refreshedAmount });
      } else {
        throw data.error;
      }
    } catch (err) {
      console.log(err.message);
    }
  }, [userEmail]);

  const logoutCartHandler = () => {
    setCartState({ item: [], totalAmount: 0 });
  };

  const contextValues = {
    item: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    purchased: purchased,
    logoutCartHandler: logoutCartHandler,
    loginCartHandler: loginCartHandler,
  };

  return (
    <cartContext.Provider value={contextValues}>
      {props.children}
    </cartContext.Provider>
  );
};

export default cartContext;