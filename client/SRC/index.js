import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import store from './reducers';

class Root extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<App ></App>
			</Provider>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));