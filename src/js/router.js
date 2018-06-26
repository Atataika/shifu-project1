import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Admin from './components/Admin'
import Home from './components/Home'
import Add from './components/Add'

function Rout() {
	return (
	<Router>
		<div>
			<div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
				<nav>
					<Link className='p-2 text-dark' to="/">Home</Link>
					<Link className='p-2 text-dark' to="/admin">Admin</Link>
				</nav>
			</div>
			<Route exact path="/" component={Home} />
			<Route exact path="/admin" component={Admin} />
			<Route path="/admin/add" component={Add} />
		</div>
	</Router>
	)
};

export default Rout