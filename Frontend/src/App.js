import React from 'react';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
	return (
	<Router>
		<Route path="/" exact component={Join}/>
		<Route path="/chat" component={Chat}/>
		<Footer/>
	</Router>
	);

}

export default App;