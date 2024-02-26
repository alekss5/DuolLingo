const initialState = {
    userProgress: [],
    // time: 0,
    // score:0,
    // correctAswers:0,
    //correectAnswersInRow

  };
  
  const progressReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_PROGRESS':
        return {
          ...state,
          userProgress: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default progressReducer;
  