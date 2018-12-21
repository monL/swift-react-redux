import patientAPI from '../api/patientAPI'

export const getAllPatients = () => dispatch => {
    patientAPI.getPatients(patients => {
        dispatch(receivePatients(patients))
      })
}

export const getAllPatientsWithoutTimeout = () => dispatch => {
    patientAPI.getPatientsWithoutTimeout(patients => {
        dispatch(receivePatients(patients))
      })
}

const receivePatients = patients => ({
    type: 'RECEIVE_PATIENTS',
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