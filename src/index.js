import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Nav from 'react-bootstrap/Nav';

class lineOne extends Component {
	render() {
		return (
			<div>
				<h1>This is a haiku.</h1>
			</div>
		);
	}
}

class lineTwo extends Component {
	render() {
		return (
			<div>
				<h1>There should be more code poems.</h1>
			</div>
		);
	}
}

class lineThree extends Component {
	render() {
		return (
			<div>
				<h1>The world needs more art.</h1>
			</div>
		);
	}
}

class Navbar extends Component {
	render() {
		return (
			<div className="nav">
				<Nav variant="pills" defaultActiveKey="/lineone">
					<Nav.Item>
						<Nav.Link href="/">Line 1</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/linetwo" eventKey="link-1">
							Line 2
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link href="/linethree" eventKey="link-2">
							Line 3
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</div>
		);
	}
}

class Routes extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<hr />
					<Route name="lineOne" exact path="/" component={lineOne} />
					<Route name="lineTwo" path="/linetwo" component={lineTwo} />
					<Route name="lineThree" path="/linethree" component={lineThree} />
				</div>
			</Router>
		);
	}
}

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
