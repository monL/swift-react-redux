import React from 'react';
import WoundRow from '../containers/WoundRow';

const WoundsTable = (props) => {
    const { wounds } = props;
    
    if ( !wounds || wounds.length === 0 ) return <div><h3>No wounds</h3></div>;
    
    const woundRows = wounds.map(wound => {
        return (
            <WoundRow wound={ wound } key={ wound.id} />
        )
    });
    
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Type</th>
                        <th>Body Location</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Aqcuired in House</th>
                        <th>Resolved</th>
                    </tr> 
                </thead>
                <tbody>
                    { woundRows }
                </tbody>
            </table>
        </div>
    );
}

export default WoundsTable