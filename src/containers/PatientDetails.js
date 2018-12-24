import React, { Component } from 'react';
import WoundsTable from '../components/WoundsTable';
import PatientInfo from '../components/PatientInfo';

import { connect } from 'react-redux';
import { getPatientDetails, getPatientWounds } from '../actions/index';

class PatientDetails extends Component {
    constructor(props) {
        super(props)
        const patientId = props.match.params.patient_id;

        this.props.dispatch(getPatientWounds(patientId));
        this.props.dispatch(getPatientDetails(patientId));
    }
        
    render() {
        const { wounds, patient } = this.props;
        
        return (
            <div className="patient-details">
                { patient &&
                    <h1>{patient.attributes.firstName} {patient.attributes.lastName}</h1>
                }
                <div className="patient-info">
                    <PatientInfo patient={ patient } />
                </div>
                <div className="wounds">
                    <h2>Wounds</h2>
                    <WoundsTable wounds={ wounds } /> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      wounds: state.wounds,
      patient: state.currentPatient
    }
  }

export default connect(mapStateToProps)(PatientDetails)