import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { getAllPatients, getAllPatientsWithoutTimeout } from './actions/index';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
    );

// store.dispatch(getAllPatients())
store.dispatch(getAllPatientsWithoutTimeout())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
