import patientAPI from '../api/patientAPI';
import {
    RECEIVE_PATIENTS
  } from '../constants/actionTypes'


  export const getAllPatientsWithoutTimeout = () => dispatch => {
    patientAPI.getPatientsWithoutTimeout(patients => {
        dispatch(receivePatients(patients))
      })
}

const receivePatients = patients => ({
    type: RECEIVE_PATIENTS,
    patients
  })

/*
export const getAllPatientWounds = patientId => dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
}
*/

/*
export const updateWound = woundId => (dispatch, getState) => {
    // todo
}
*/