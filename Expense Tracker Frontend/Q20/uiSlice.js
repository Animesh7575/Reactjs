const uiSlice = createSlice({
    name: 'ui',
    initialState: { notification: null },
    reducers: {
      setNotification: (state, action) => {
        state.notification = action.payload;
      },
      clearNotification: (state) => {
        state.notification = null;
      },
    },
  });
  
  export const { setNotification, clearNotification } = uiSlice.actions;
  export default uiSlice.reducer;
  