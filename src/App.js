import React, { Fragment, Component } from 'react';
import CursorView from './components/CursorView';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrNotFound from './components/pages/ErrNotFound';
import IconFill from './components/IconFill.js';
import './index.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

render() {

	return (
		<Router>
			<Fragment>
				<CursorView />
				<IconFill />
				<Header />
					<Switch>

						<Route exact path='/' component={Home} />
						<Route path='/projects' component={Projects} />
						<Route path='/about' component={About} />
						<Route path='/contact' component={Contact} />
						<Route component={ErrNotFound} />
					</Switch>
			</Fragment>
		</Router>
			);
	}

}

export default App;
