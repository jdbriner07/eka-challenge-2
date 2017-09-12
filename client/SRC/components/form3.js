import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import { updateStreetNumber, updateCity, updateState, updateZip } from '../actions/addressChange';

class Form3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			completed: false,
			error: ''
		}

		this.updateStreetNumberState = this.updateStreetNumberState.bind(this);
		this.updateCityState = this.updateCityState.bind(this);
		this.updateStateState = this.updateStateState.bind(this);
		this.updateZipState = this.updateZipState.bind(this);
		this.signUp3 = this.signUp3.bind(this);
	}

	updateStreetNumberState (e) {
		this.props.dispatch(updateStreetNumber(e.target.value))
	}

	updateCityState (e) {
		this.props.dispatch(updateCity(e.target.value))
	}

	updateStateState (e) {
		this.props.dispatch(updateState(e.target.value))
	}

	updateZipState (e) {
		this.props.dispatch(updateZip(e.target.value))
	}

	signUp3 () {
		axios.post('/updateInfo3', {password: this.props.password.password, username: this.props.username.username, address: this.props.address})
			.then( (e) => {
				if (e.status === 201) {
					this.setState({completed: true});
				} else {
					this.setState({error: 'please contact support to resolve your issue'});
				}
			})
			.catch( (e) => {
				console.log(e);
			})
	}

	render() {
		return (
			!this.state.completed ?
			<div>
				<form>
					<h1 className='error'>{this.state.error}</h1>
					<label> Street address: 
						<input type='text' name='username' defaultValue={this.props.address.streeNumber} onChange={this.updateStreetNumberState} />
					</label>
					<label> City:
						<input type='text' name='password' defaultValue={this.props.address.city} onChange={this.updateCityState} />
					</label>
					<label> state:
						<input type='text' name='email' defaultValue={this.props.address.state} onChange={this.updateStateState} />
					</label>
					<label> Zip:
						<input type='text' name='email' defaultValue={this.props.address.zip} onChange={this.updateZipState} />
					</label>
				</form>
				<button onClick={this.signUp3}>Save</button>
			</div>
			: <Redirect to='/profile' />
		)
	}
}

export default connect((state) => {
	return {address: state.address, username: state.username, password: state.password};
})(Form3)