import '../css/style.css'
import React from 'react'
import {render} from 'react-dom'
import Rout from './router'
import articles from './components/posts'
import Admin from './components/Admin'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

for (var i = 0; i < articles.length; i++) {
	localStorage.setItem('myKey'+i, JSON.stringify(articles[i]))
}

render(
	<Rout />,
	document.getElementById('root')
)
