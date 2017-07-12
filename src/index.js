import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Go get the createStore method from the redux module
// We also need applyMiddleware from redux if we are going to use middleware
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

// import the Provider from react-redux so react and redux can talk
import { Provider } from 'react-redux';

// import the rootReducer so we can give it to the store. Fill those shelves!
import rootReducer from './reducers/rootReducer';

// const theStore = createStore(reducers);
// console.log(theStore)
// Make a store that uses middleware
// applyMiddleware takes an arg (all the middleware to be used)
// which returns a function that takes one arg, createStore
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)
const theFinalStore = createStoreWithMiddleware(rootReducer)

// ReactDOM.render takes 2 args: 1. What, 2. Where
ReactDOM.render(
	<Provider store={theFinalStore}>
		<div className="App">
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
);
