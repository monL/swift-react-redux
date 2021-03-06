import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { getAllPatients } from './actions/index';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
    );

store.dispatch(getAllPatients())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
