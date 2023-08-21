const cartSlice = createSlice({
    // ... previous code ...
  
    reducers: {
      // ... previous code ...
  
      removeItem: (state, action) => {
        const itemId = action.payload;
        delete state.items[itemId];
      },
    },
  });
  