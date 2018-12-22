import {
  RECEIVE_PATIENTS,
  RECEIVE_WOUNDS,
  RECEIVE_PATIENT_DETAILS
} from '../constants/actionTypes'

const initState = {};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_PATIENTS: {
      return {
        ...state,
        ...action.patients
      };
    }
    case RECEIVE_WOUNDS: {
      /*replaces current patient wounds in state.
      this goes under the assumption that we will only hold
      information about the patient and its wounds that's viewed under
      patient details. */
      return {
        ...state,
        ...action.wounds
      };
    }
    case RECEIVE_PATIENT_DETAILS: {
      return {
        ...state,
        ...action.currentPatient
      }
    }
    default:
      return state;
  }
}

export default rootReducer