import React from 'react';

const PatientInfo = (props) => {
    const { patient } = props;
    
    if ( !patient ) return <div className="empty-content"><h3>No details were found for patient with id: </h3></div>;
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm col-md info-section">
                    <h3>General Info</h3>
                    <p><b>Date of Birth: </b>{ patient.attributes.dateOfBirth.split('T')[0] }</p>
                    <p><b>Address: </b>{ patient.attributes.address }</p>
                    <p><b>Last Updated: </b>{ patient.attributes.updatedAt.split('T')[0] }</p>
                </div>
                <div className="vertical-line"></div>
                <div className="col-sm col-md info-section">
                    <h3>Hospital Info</h3>
                    <p><b>Room Number: </b>{ patient.attributes.roomNumber }</p>
                    <p><b>Bed Number: </b>{ patient.attributes.bedNumber }</p>
                </div>
            </div>
        </div>
    );
}

export default PatientInfo;
