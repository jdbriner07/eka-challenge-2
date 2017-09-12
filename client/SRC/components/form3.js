import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { updateStreetNumber, updateCity, updateState, updateZip } from '../actions/addressChange';

class Form3 extends React.Component {
	constructor(props) {
		super(props);

		this.updateStreetNumberState = this.updateStreetNumberState.bind(this);
		this.updateCityState = this.updateCityState.bind(this);
		this.updateStateState = this.updateStateState.bind(this);
		this.updateZipState = this.updateZipState.bind(this);
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

	render() {
		return (
			<div>
				<form>
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
				<button><Link to='/profile'>Save</Link></button>
			</div>
		)
	}
}

export default connect((state) => {
	return {address: state.address};
})(Form3)