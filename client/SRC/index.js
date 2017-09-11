import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Form1 from './components/form1'
import store from './reducers';

class App extends React.Component {

	render() {
		console.log(this.props.children);
		return (
			<Provider store={store}>
				<Form1 ></Form1>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));