import {
  RECEIVE_PATIENTS,
  RECEIVE_WOUNDS
} from '../constants/actionTypes'

const initState = {};

//TODO: ensure state is not being mutated.
//TODO: review reducer and dispatcher standards
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_PATIENTS: {
      return {
        ...state,
        ...action.patients
      };
    }
    case RECEIVE_WOUNDS: {
      //replace current wounds item...
      //TODO: research best practices on how to do this..
      //TODO: why does the state not have any patients at this point?
      //This only works for replacing existing list of wounds...
      const newState = {
        ...state,
        ...action.wounds
      }
      return newState;
    }
    default:
      return state;
  }
}

export default rootReducer