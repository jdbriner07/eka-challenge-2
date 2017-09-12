import React from 'react';
import { connect } from 'react-redux';
import { updateUsername } from '../actions/usernameChange';
import { updatePassword } from '../actions/passwordChange';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: false,
			error: ''
		}

		this.updateUsernameState = this.updateUsernameState.bind(this);
		this.updatePasswordState = this.updatePasswordState.bind(this);
		this.logIn = this.logIn.bind(this);
	}

	updateUsernameState (e) {
		this.props.dispatch(updateUsername(e.target.value))
	}

	updatePasswordState (e) {
		this.props.dispatch(updatePassword(e.target.value))
	}

	logIn() {
		axios.post('/login', {username: this.props.username.username, password:this.props.password.password})
			.then( (e) => {
				if (e.status === 201) {
					this.setState({completed: true});
				} else if (e.status === 202) {
					this.setState({error: 'not a valid username/password combination'});
				}
			})
	}

	render() {
		return (
			!this.state.completed ?
			<div>
				<h1 className='error'>{this.state.error}</h1>
				<form>
					<label> Username: 
						<input type='text' name='username' defaultValue={this.props.username.username} onChange={this.updateUsernameState} />
					</label>
					<label>Password:
						<input type='text' name='password' defaultValue={this.props.password.password} onChange={this.updatePasswordState} />
					</label>
				</form>
				<button onClick={this.logIn}>Log In</button>
			</div>
			: <Redirect to='profile' />
		)
	}
}

export default connect((state) => {
	return {username: state.username, password: state.password};
})(LogIn)

