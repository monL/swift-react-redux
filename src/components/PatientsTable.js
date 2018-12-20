import React from 'react';
import PatientRow from './PatientRow';

//this is a function based component
//TODO: this needs refactoring and cleaning.
const PatientsTable = (props) => {
    const { patients } = props;
    var patientContent;
    if ( !patients ) patientContent = <tr></tr>;
    
    else {
        const patientRows = patients.map(patient => {
            return (
                <PatientRow patient={ patient } key={ patient.id} />
            )
        });
        patientContent = patientRows;     
    }

    return (
        <div className="patients-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Room #</th>
                        <th>Bed #</th>
                        <th></th>
                    </tr> 
                </thead>
                <tbody>
                    { patientContent }  
                </tbody>
            </table>
        </div>
    );
}

export default PatientsTable