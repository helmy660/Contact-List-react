import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';
import { fetchContacts } from './actions/index';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// create a global store to save the data retrieved from the api
// call the dispatch function to take an action
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchContacts());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
