
const initialState = {
    isAuthenticated: false
  };
  

  const LOGIN = "login";
  const LOGOUT = "logout";
  
 
  const login = () => ({ type: LOGIN });
  const logout = () => ({ type: LOGOUT });
 
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, isAuthenticated: true };
      case LOGOUT:
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };
  