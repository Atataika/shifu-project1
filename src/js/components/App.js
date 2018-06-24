import React from 'react'
//import ArticleList from './ArticleList'
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

var str1 = JSON.stringify(articles[0])
var str2 = JSON.stringify(articles[1])
var str3 = JSON.stringify(articles[2])
var str4 = JSON.stringify(articles[3])
var str5 = JSON.stringify(articles[4])
var str6 = JSON.stringify(articles[5])
var str7 = JSON.stringify(articles[6])
var str8 = JSON.stringify(articles[7])
var str9 = JSON.stringify(articles[8])
var str10 = JSON.stringify(articles[9])

localStorage.setItem('myKey', str1)
localStorage.setItem('myKey1', str2)
localStorage.setItem('myKey2', str3)
localStorage.setItem('myKey3', str4)
localStorage.setItem('myKey4', str5)
localStorage.setItem('myKey5', str6)
localStorage.setItem('myKey6', str7)
localStorage.setItem('myKey7', str8)
localStorage.setItem('myKey8', str9)
localStorage.setItem('myKey9', str10)

export default App