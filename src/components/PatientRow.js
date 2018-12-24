import React from 'react';
import { Link } from 'react-router-dom'

const PatientRow = (props) => {
    const { patient } = props;
    return (
        <tr>
            <td>{ patient.attributes.firstName }</td>
            <td>{ patient.attributes.lastName }</td>
            <td>{ patient.attributes.roomNumber }</td>
            <td>{ patient.attributes.bedNumber }</td>
            <td>
                <Link to={'/patients/' + patient.id}>
                    <span>See Details</span>
                </Link>
            </td>
        </tr>
    )
}

export default PatientRow;