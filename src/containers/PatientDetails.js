import React, { Component } from 'react';
import WoundsTable from '../components/WoundsTable';
import PatientInfo from '../components/PatientInfo';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { getPatientWounds } from '../actions/index';

class PatientDetails extends Component {
    //TODO: add wounds to woundsTable from props
    constructor(props) {
        super(props)
        const patientId = props.match.params.patient_id;

        //TODO: move this elsewhere...or pass store as props
        const middleware = [ thunk ];
        const store = createStore(
            rootReducer,
            applyMiddleware(...middleware)
        );
        store.dispatch(getPatientWounds(patientId));
    }
        
    render() {
        return (
            <div className="patient-details">
                <h1>Patient Name</h1>
                <div className="patient-info">
                    <PatientInfo />
                </div>
                <div className="wounds">
                    <WoundsTable /> 
                </div>
            </div>
        );
    }
}

//TODO: connect patient details to state
export default PatientDetails