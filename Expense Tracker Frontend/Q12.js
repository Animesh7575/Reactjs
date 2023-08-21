const INCREMENT = "increment";
const DECREMENT = "decrement";
const INCREMENTBY2 = "incrementBy2";
const DECREMENTBY2 = "decrementBy2";


const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const incrementBy2 = () => ({ type: INCREMENTBY2 });
const decrementBy2 = () => ({ type: DECREMENTBY2 });


const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENTBY2:
      return state + 2;
    case DECREMENTBY2:
      return state - 2;
    default:
      return state;
  }
};


const store = Redux.createStore(counterReducer);
