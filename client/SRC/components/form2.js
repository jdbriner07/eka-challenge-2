import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateFirstName, updateLastName } from '../actions/nameChange';
import { updatePhone } from '../actions/phoneChange';

class Form2 extends React.Component {
	constructor(props) {
		super(props);

		this.updateFirstNameState = this.updateFirstNameState.bind(this);
		this.updateLastNameState = this.updateLastNameState.bind(this);
		this.updatePhoneState = this.updatePhoneState.bind(this);
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

	render() {
		return (
			<div>
				<form>
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
				<button><Link to='/signUp3'>Save</Link></button>
			</div>
		)
	}
}

export default connect((state) => {
	return {name: state.name, telephoneNumber: state.telephoneNumber};
})(Form2)