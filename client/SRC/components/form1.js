import React from 'react';
import { connect } from 'react-redux';

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.updateUsernameState = this.updateUsernameState.bind(this);
	}

	updateUsernameState () {
		console.log(this.props);
	}

	render() {
		return (
			<form>
				<label> Username: 
					<input type='text' name='username' defaultValue='' onChange={this.updateUsernameState} />
				</label>
			</form>
		)
	}
}

const mapStateToProps = ({ username }) => {
	return { username }
}

export default Form1