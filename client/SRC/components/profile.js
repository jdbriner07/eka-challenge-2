import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { updateFirstName, updateLastName } from '../actions/nameChange';
import { updatePhone } from '../actions/phoneChange';
import { updateStreetNumber, updateCity, updateState, updateZip } from '../actions/addressChange';


class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		axios.get(`/login/${this.props.username.username}/${this.props.password.password}`)
			.then( (e) => {
				let data = e.data;
				this.props.dispatch(updateFirstName(data.firstname));
				this.props.dispatch(updateLastName(data.lastname));
				this.props.dispatch(updatePhone(data.telephonenumber));
				this.props.dispatch(updateStreetNumber(data.streetaddress));
				this.props.dispatch(updateCity(data.city));
				this.props.dispatch(updateState(data.state));
				this.props.dispatch(updateZip(data.zip));
			}).catch( (e) => {
				console.log(e);
			})
	}
	
	render() {
		return (
			<div>
				<ul> <h1> Your Profile </h1> 
					<li> username: {this.props.username.username}</li>
					<li> email: {this.props.email.email}</li>
					<li> Name: {this.props.name.firstName}<br/>
								{this.props.name.lastName}
					</li>
					<li> Phone Number: {this.props.telephoneNumber.telephoneNumber}</li>
					<li> address: {this.props.address.streetNumber} <br/>
									{this.props.address.city}, {this.props.address.state}, {this.props.address.zip}
					</li>

				</ul>
				<button><Link to='/signUp2'>Update Information</Link></button>
			</div>
		)
	}
}

export default connect((state) => {
	return {password: state.password, address: state.address, username: state.username, email: state.email, name: state.name, telephoneNumber: state.telephoneNumber};
})(Profile)