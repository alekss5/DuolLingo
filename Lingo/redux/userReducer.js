// userReducer.js
const initialState = {
    loggedInUser: null,
    userProfile: null,
    isAuthenticated: false,
    hearts:null,
    points:null,
    daysSteak:null,
    courses:[],
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          loggedInUser: action.payload,
          isAuthenticated: true,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          loggedInUser: null,
          isAuthenticated: false,
        };
      case 'SET_USER_PROFILE':
        return {
          ...state,
          userProfile: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  