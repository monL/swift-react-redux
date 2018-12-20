import React from 'react';
import PatientRow from './PatientRow';

//this is a function based component
const PatientsTable = (props) => {
    const { patients } = props;
    const patientRows = patients.map(patient => {
        return (
            <PatientRow patient={ patient } key={ patient.id} />
        )
    });
    
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
                    { patientRows }  
                </tbody>
            </table>
        </div>
    );
}

export default PatientsTable