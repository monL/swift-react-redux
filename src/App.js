import React, { Component } from 'react';
import './css/App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './containers/Home'
import PatientDetails from './containers/PatientDetails'

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
