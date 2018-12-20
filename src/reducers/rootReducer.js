const initState = {};
  
  const rootReducer = (state = initState, action) => {
    switch (action.type) {
      case 'RECEIVE_PATIENTS': {
        return {
          ...state,
          ...action.patients
        };
      }
      default:
        return state;
    }
  }
  
  export default rootReducer