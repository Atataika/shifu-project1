import React from 'react'
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom'
import ArticleList from './ArticleList'
import articles from '../posts'

function Admin() {
	return (
			<div>
				<h1>Welcome, admin</h1>
				<h2>Posts list</h2>
				<ArticleList articles = {articles} />
			</div>
	)
}

export default Admin