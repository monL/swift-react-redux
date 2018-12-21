import patientAPI from '../api/patientAPI';
import woundsAPI from '../api/woundsAPI';

import {
    RECEIVE_PATIENTS,
    RECEIVE_WOUNDS
  } from '../constants/actionTypes'


export const getAllPatients = () => dispatch => {
    patientAPI.getPatients(patients => {
        dispatch(receivePatients(patients))
      })
}

const receivePatients = (patients) => ({
    type: RECEIVE_PATIENTS,
    patients
  })

export const getPatientWounds = (patientId) => dispatch => {
    woundsAPI.getPatientWounds(patientId, wounds => {
        dispatch(receivePatientWounds(wounds))
      })
}

const receivePatientWounds = (wounds) => ({
    type: RECEIVE_WOUNDS,
    wounds
  })

/*
export const updateWound = woundId => (dispatch, getState) => {
    // todo
}
*/