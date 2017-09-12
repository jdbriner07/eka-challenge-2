import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Form1 from './components/form1';
import Form2 from './components/form2';
import Form3 from './components/form3';
import store from './reducers';

class Root extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<Form3 ></Form3>
			</Provider>
		)
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));