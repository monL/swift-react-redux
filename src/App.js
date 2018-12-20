import React, { Component } from 'react';
import './App.css';
import PatientsTable from './components/PatientsTable';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { patients } = this.props;

    return (
      <div className="App">
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

export default connect(mapStateToProps)(App);
