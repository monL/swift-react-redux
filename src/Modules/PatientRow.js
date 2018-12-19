import React from 'react';

const PatientRow = (props) => {
    const { patient } = props;
    return (
        <tr>
            <td>{ patient.firstName }</td>
            <td>{ patient.lastName }</td>
            <td>{ patient.roomNumber }</td>
            <td>{ patient.bedNumber }</td>
        </tr>
    )
}

export default PatientRow;