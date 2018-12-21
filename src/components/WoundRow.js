import React from 'react';

const WoundRow = (props) => {
    const { wound } = props;
    return (
        <tr>
            <td>{ wound.attributes.imageUrl }</td>
            <td>{ wound.attributes.type }</td>
            <td>{ wound.attributes.bodyLocation }</td>
            <td>{ wound.attributes.createdAt }</td>
            <td>{ wound.attributes.updatedAt }</td>
            <td>{ wound.attributes.inHouseAcquired }</td>
            <td>{ wound.attributes.resolved }</td>
        </tr>
    )
}

export default WoundRow;