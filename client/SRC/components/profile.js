import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
	constructor(props) {
		super(props);
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
			</div>
		)
	}
}

export default connect((state) => {
	return {address: state.address, username: state.username, email: state.email, name: state.name, telephoneNumber: state.telephoneNumber};
})(Profile)