import React from 'react';
import { Link } from 'react-router-dom'

const PatientRow = (props) => {
    const { patient } = props;
    return (
        <tr>
            <td>{ patient.firstName }</td>
            <td>{ patient.lastName }</td>
            <td>{ patient.roomNumber }</td>
            <td>{ patient.bedNumber }</td>
            <td>
                <Link to={'/patients/' + patient.id}>
                    <span>See Details ></span>
                </Link>
            </td>
        </tr>
    )
}

export default PatientRow;