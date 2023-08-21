const cartSlice = createSlice({
    // ... previous code ...
  
    reducers: {
      // ... previous code ...
  
      addToCart: (state, action) => {
        const { id } = action.payload;
        if (state.items[id]) {
          state.items[id].quantity += 1;
        } else {
          state.items[id] = { quantity: 1 };
        }
      },
  
      removeFromCart: (state, action) => {
        const { id } = action.payload;
        if (state.items[id]) {
          if (state.items[id].quantity === 1) {
            delete state.items[id];
          } else {
            state.items[id].quantity -= 1;
          }
        }
      },
    },
  });
  
  export const selectTotalQuantity = (state) => {
    return Object.values(state.cart.items).reduce((total, item) => total + item.quantity, 0);
  };
  