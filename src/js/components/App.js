import React from 'react'
import ArticleList from './ArticleList'
import articles from '../posts'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './Admin'
import Home from './Home'

function App() {
	return (
	<Router>
		<div>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/admin">Admin</Link>
			</li>
		</ul>
	<hr />

		<Route exact path="/" component={Home} />
		<Route path="/admin" component={Admin} />
		</div>
	</Router>
	)
};

export default App