import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {render} from 'react-dom'
import Rout from './router'
import posts from './components/posts'

//for (var i = 0; i < posts.length; i++) {
//	localStorage.setItem('myKey'+i, JSON.stringify(posts[i]))
//}

localStorage.setItem('myKey', JSON.stringify(posts))

render(
	<Rout />,
	document.getElementById('root')
)
