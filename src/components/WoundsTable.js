import React from 'react';

const WoundsTable = (props) => {
    const { wounds } = props;
    
    //TODO: uncomment this
    //if ( !wounds || wounds.length === 0 ) return <div className="empty-content"><h3>No wounds</h3></div>;
    
    return (
        <div className="wounds-table">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Type</th>
                        <th>Body Location</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Aqcuired in House</th>
                        <th>Resolved</th>
                        <th></th>
                    </tr> 
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}

export default WoundsTable