import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

import address from './reducers/address';
import username from './reducers/username';
import password from './reducers/password';
import email from './reducers/email';
import name from './reducers/name';
import telephoneNumber from './reducers/teleNumber';


const middleware = applyMiddleware(createLogger());

const reducers = combineReducers({
	address: address,
	username: username,
	password: password,
	email: email,
	name: name,
	telephoneNumber: telephoneNumber,
});

const store = createStore(reducers, middleware);

export default store;