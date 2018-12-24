import React from 'react';
import PatientRow from './PatientRow';

const PatientsTable = (props) => {
    const { patients } = props;
    
    if ( !patients || patients.length === 0 ) return <div><h3>No patients</h3></div>;
    
    const patientRows = patients.map(patient => {
        return (
            <PatientRow patient={ patient } key={ patient.id} />
        )
    });

    return (
        <div>
            <table className="table table-striped table-hover">
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