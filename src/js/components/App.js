import React from 'react'
import ArticleList from './ArticleList'
import articles from '../posts'

function App() {
	return (
			<div>
				<h1>Welcome, user</h1>
				<h2>Posts list</h2>
				<ArticleList articles = {articles} />
			</div>
	)
}

export default App