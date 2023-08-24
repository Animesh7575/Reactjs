import { createStore } from 'redux';

const initialState = {
  emails: [],
  unreadCount: 0,
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAILS':
      return { ...state, emails: action.payload };
    case 'SET_UNREAD_COUNT':
      return { ...state, unreadCount: action.payload };
    default:
      return state;
  }
};

const store = createStore(emailReducer);

export default store;
