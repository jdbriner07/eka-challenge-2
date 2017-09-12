import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import LogIn from './logIn';
import Profile from './profile';

class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<h1>Jeff's EKA Challenge</h1>
					<ul>
						<li><Link to='/'>Home</Link></li>					
						<li><Link to='/signUp'>Sign Up</Link></li>
						<li><Link to='/logIn'>Log In</Link></li>
					</ul>
					
					<Route path='/' />
					<Route path='/signUp' component={Form1}/>
					<Route path='/logIn' component={LogIn}/>
					<Route path='/signUp2' component={Form2}/>
					<Route path='/signUp3' component={Form3}/>
					<Route path='/profile' component={Profile}/>
				</div>
			</Router>
		)
	}
}

export default App
