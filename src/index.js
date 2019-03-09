import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Start Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import submittedValueReducer from './reducers/submittedValueReducer';

const allReducers = combineReducers({
    submittedValue: submittedValueReducer
});

const store = createStore(
    allReducers,
    {
        submittedValue: 'Nothing has been submitted yet'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// End Redux


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
