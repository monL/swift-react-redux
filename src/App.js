import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import PatientDetails from './components/PatientDetails'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/patients/:patient_id' component={PatientDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
