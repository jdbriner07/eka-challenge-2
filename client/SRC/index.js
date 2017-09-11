import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>This is a test to make sure webpack is working</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));