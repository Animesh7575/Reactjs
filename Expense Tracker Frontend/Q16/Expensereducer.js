const initialState = {
    expenses: [],
    totalAmount: 0
  };
  
  const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_EXPENSE":
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
          totalAmount: state.totalAmount + action.payload.amount
        };
     
      default:
        return state;
    }
  };
  
  export default expensesReducer;
  