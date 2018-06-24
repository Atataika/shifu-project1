import '../css/style.css'
import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom'
import App from './components/App'

render(
	<App />,
	document.getElementById('root')
)
