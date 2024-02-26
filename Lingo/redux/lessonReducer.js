
const initialState = {
    lessons: [],
    selectedLesson: null,
    
  };
  
  const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LESSONS':
        return {
          ...state,
          lessons: action.payload,
        };
      case 'SELECT_LESSON':
        return {
          ...state,
          selectedLesson: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default lessonReducer;
  