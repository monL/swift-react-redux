import patientAPI from '../api/patientAPI';
import woundsAPI from '../api/woundsAPI';

import {
    RECEIVE_PATIENTS,
    RECEIVE_WOUNDS,
    UPDATE_WOUND,
    RECEIVE_PATIENT_DETAILS
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

export const getPatientDetails  = (patientId) => dispatch => {
    patientAPI.getPatientDetails(patientId, (patient) => {
        dispatch(receivePatientDetails(patient))
    })
}

const receivePatientDetails = (currentPatient) => ({
    type: RECEIVE_PATIENT_DETAILS,
    currentPatient
})

export const getPatientWounds = (patientId) => dispatch => {
    woundsAPI.getPatientWounds(patientId, (wounds) => {
        dispatch(receivePatientWounds(wounds))
      })
}

const receivePatientWounds = (wounds) => ({
    type: RECEIVE_WOUNDS,
    wounds
  })


export const resolveWound = (woundId) => dispatch => {
    // todo
    woundsAPI.resolvePatientWound(woundId, (wound) => {
        dispatch(confirmWoundResolved(wound))
    });
}

const confirmWoundResolved = (wound) => ({
    type: UPDATE_WOUND,
    wound: wound
});

