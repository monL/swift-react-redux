import React, { Component } from 'react';
import PatientsTable from '../components/PatientsTable';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { patients } = this.props;

    return (
      <div className="Home">
        <h1>Patients</h1>
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
