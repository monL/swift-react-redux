import React from 'react';

const PatientInfo = (props) => {
    const { patient } = props;
    
    if ( !patient ) return <div className="empty-content"><h3>No details were found for patient with id: </h3></div>;
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm col-md general-info">
                    <p>General Info</p>
                    <p><i>Date of Birth:</i>{ patient.attributes.dateOfBirth }</p>
                    <p><i>Address:</i>{ patient.attributes.address }</p>
                    <p><i>Last Updated:</i>{ patient.attributes.updatedAt }</p>
                </div>
                <div className="col-sm col-md hospital-info">
                    <p>Hospital Info</p>
                    <p><i>Room #:</i>{ patient.attributes.roomNumber }</p>
                    <p><i>Bed #:</i>{ patient.attributes.bedNumber }</p>
                </div>
            </div>
        </div>
    );
}

export default PatientInfo;
