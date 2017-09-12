import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { updateFirstName, updateLastName } from '../actions/nameChange';
import { updatePhone } from '../actions/phoneChange';

class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: false,
			error: ''
		}
		this.updateFirstNameState = this.updateFirstNameState.bind(this);
		this.updateLastNameState = this.updateLastNameState.bind(this);
		this.updatePhoneState = this.updatePhoneState.bind(this);
		this.signUp2 = this.signUp2.bind(this);
	}

	updateFirstNameState (e) {
		this.props.dispatch(updateFirstName(e.target.value))
	}

	updateLastNameState (e) {
		this.props.dispatch(updateLastName(e.target.value))
	}

	updatePhoneState (e) {
		this.props.dispatch(updatePhone(e.target.value))
	}

	signUp2 () {
		let data = {password: this.props.password.password, username: this.props.username.username, name: this.props.name, phoneNumber: this.props.telephoneNumber.telephoneNumber};
		if (checkValidInfo(data.name, data.phoneNumber) != null) {
			axios.post('/updateInfo2', data)
			 .then( (e) => {
			 	if (e.status === 201) {
			 		this.setState({completed: true});
			 	} else {
			 		this.setState({error: 'Please contact support to resolve your issue'});
			 	}
			}).catch ( (e) => {
				console.log(e);
			})
		} else {
			this.setState({error: 'please enter in your name and phone number just as 10 digits'})
		}
	}

	render() {
		console.log(this.props)
		return (
			!this.state.completed ? <div>
				<form>
					<h1 className='error'>{this.state.error}</h1>
					<label> First Name: 
						<input type='text' name='username' defaultValue={this.props.name.firstName} onChange={this.updateFirstNameState} />
					</label>
					<label> Last Name:
						<input type='text' name='password' defaultValue={this.props.name.lastName} onChange={this.updateLastNameState} />
					</label>
					<label> Telephone Number:
						<input type='text' name='email' defaultValue={this.props.telephoneNumber.telephoneNumber} onChange={this.updatePhoneState} />
					</label>
				</form>
				<button onClick={this.signUp2}>Save</button>
			</div>
			: <Redirect to='/signUp3' />
		)
	}
}

export default connect((state) => {
	return {name: state.name, telephoneNumber: state.telephoneNumber, username: state.username, password: state.password};
})(Form2)

function checkValidInfo(name, phoneNumber) {
	var nameRegEx = /^[a-zA-Z]{3,16}$/;
	var phoneRegEx = /^([0-9]{10,10})$/;
	return name.firstName.match(nameRegEx) && name.lastName.match(nameRegEx) && phoneNumber.match(phoneRegEx);
}