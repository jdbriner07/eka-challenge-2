import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { updateUsername } from '../actions/usernameChange';
import { updatePassword } from '../actions/passwordChange';
import { updateEmail } from '../actions/emailChange';

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: false,
			error: ''
		}
		this.updateUsernameState = this.updateUsernameState.bind(this);
		this.updatePasswordState = this.updatePasswordState.bind(this);
		this.updateEmailState = this.updateEmailState.bind(this);
		this.signUp = this.signUp.bind(this);
	} 

	updateUsernameState (e) {
		this.props.dispatch(updateUsername(e.target.value))
	}

	updatePasswordState (e) {
		this.props.dispatch(updatePassword(e.target.value))
	}

	updateEmailState (e) {
		this.props.dispatch(updateEmail(e.target.value))
	}

	signUp () {
		let data = {username:this.props.username.username, password: this.props.password.password, email: this.props.email.email}
		if (checkValidInfo(data.username, data.password, data.email) != null) {
			axios.post('/signup', data)
			.then( (e) => {
				if (e.status === 201) {
					this.setState({completed: true});
				} else {
					this.setState({error: 'username already exists'});
				}
			}).catch( (e) => {
				console.log(e);
			})
		} else {
			this.setState({error: 'Please enter valid Information'});
		}
	}

	render() {
		return (
			!this.state.completed ? <div>
				<form>
					<h1 className='error'>{this.state.error}</h1>
					<label> Username: 
						<input type='text' name='username' defaultValue={this.props.username.username} onChange={this.updateUsernameState} />
					</label>
					<label>Password:
						<input type='password' name='password' defaultValue={this.props.password.password} onChange={this.updatePasswordState} />
					</label>
					<label> email:
						<input type='text' name='email' defaultValue={this.props.email.email} onChange={this.updateEmailState} />
					</label>
				</form>
				<button onClick={this.signUp}>Save</button>
			</div>
			: <Redirect to='signUp2' />
		)
	}
}

export default connect((state) => {
	return {username: state.username, password: state.password, email: state.email};
})(Form1)

function checkValidInfo(username, password, email) {
	var usernameRegEx = /^[a-zA-Z0-9_-]{3,16}$/;
	var passwordRegEx = /^[a-zA-Z0-9_-]{6,18}$/;
	var emailRegEx = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	return username.match(usernameRegEx) && password.match(passwordRegEx) && email.match(emailRegEx);
}

