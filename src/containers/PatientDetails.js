import React, { Component } from 'react';
import WoundsTable from '../components/WoundsTable';
import PatientInfo from '../components/PatientInfo';

import { connect } from 'react-redux';
import { getPatientWounds } from '../actions/index';

class PatientDetails extends Component {
    //TODO: figure out best practices.
    //this is probably not the best way to dispatch from a container
    constructor(props) {
        super(props)
        const patientId = props.match.params.patient_id;

        this.props.dispatch(getPatientWounds(patientId));
    }
        
    render() {
        debugger
        const { wounds } = this.props;

        return (
            <div className="patient-details">
                <h1>Patient Name</h1>
                <div className="patient-info">
                    <PatientInfo />
                </div>
                <div className="wounds">
                    <WoundsTable wounds={wounds} /> 
                </div>
            </div>
        );
    }
}

//TODO: figure out how to get patientId here...
const mapStateToProps = (state) => {
    debugger
    //find patient with specific id
    // const patientId = this.props.match.params.patient_id;
    // var patient;
    // if (!state.patients) {
    //     patient = {}; //TODO: better handle this
    // } else {
    //     patient = state.patients.find((patient) => {
    //         return patient.id === patientId;
    //     });
    // }
    return {
      wounds: state.wounds,
      //patient: patient
    }
  }

export default connect(mapStateToProps)(PatientDetails)