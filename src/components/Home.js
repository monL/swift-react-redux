import React, { Component } from 'react';
import PatientsTable from './PatientsTable';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { patients } = this.props;

    return (
      <div className="Home">
        <h1>Swift Medical - React/Redux Challenge</h1>
        <PatientsTable patients={patients}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patients
  }
}

export default connect(mapStateToProps)(Home);
