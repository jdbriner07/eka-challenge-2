import React from 'react';
import { connect } from 'react-redux';
import { updateUsername } from '../actions/usernameChange';
import { updatePassword } from '../actions/passwordChange';

class LogIn extends React.Component {
	constructor(props) {
		super(props);

		this.updateUsernameState = this.updateUsernameState.bind(this);
		this.updatePasswordState = this.updatePasswordState.bind(this);
	}

	updateUsernameState (e) {
		this.props.dispatch(updateUsername(e.target.value))
	}

	updatePasswordState (e) {
		this.props.dispatch(updatePassword(e.target.value))
	}

	render() {
		return (
			<div>
				<form>
					<label> Username: 
						<input type='text' name='username' defaultValue={this.props.username.username} onChange={this.updateUsernameState} />
					</label>
					<label>Password:
						<input type='text' name='password' defaultValue={this.props.password.password} onChange={this.updatePasswordState} />
					</label>
				</form>
				<button>Log In</button>
			</div>
		)
	}
}

export default connect((state) => {
	return {username: state.username, password: state.password};
})(LogIn)

