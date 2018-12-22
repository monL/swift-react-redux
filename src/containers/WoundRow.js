import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resolveWound } from '../actions/index';

class WoundRow extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.dispatch(resolveWound(
            this.props.wound.id
        ));
    }

    render() {
        const { wound } = this.props; 
        return (
            <tr>
                <td><img src={ wound.attributes.imageUrl } className="img-thumbnail"></img></td>
                <td>{ wound.attributes.type }</td>
                <td>{ wound.attributes.bodyLocation }</td>
                <td>{ wound.attributes.createdAt }</td>
                <td>{ wound.attributes.updatedAt }</td>
                <td>{ wound.attributes.inHouseAcquired ? 'Yes': 'No' }</td>
                <td>
                    { wound.attributes.resolved ? 
                    'Resolved' : ( 
                        <form>
                            <button className="btn btn-primary" onClick={this.handleClick}>Mark as Resolved</button>
                        </form>
                    ) }
                </td>
            </tr>
    )}
}

export default connect()(WoundRow);