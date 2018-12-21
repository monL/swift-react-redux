import React from 'react';

const PatientInfo = (props) => {
    const { patient } = props;
    
    if ( !patient ) return <div className="empty-content"><h3>No details were found for patient with id: </h3></div>;
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm col-md general-info">
                    <p>General Info</p>
                    <p><a>Date of Birth:</a> (insert value here)</p>
                    <p><a>Address:</a> (insert value here)</p>
                    <p><a>Last Updated:</a> (insert value here)</p>
                </div>
                <div className="col-sm col-md hospital-info">
                    <p>Hospital Info</p>
                    <p><a>Room #:</a> (insert value here)</p>
                    <p><a>Bed #:</a> (insert value here)</p>
                </div>
            </div>
        </div>
    );
}

export default PatientInfo;
