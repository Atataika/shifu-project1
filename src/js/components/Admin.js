import React from 'react'
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom'
//import ArticleList from './ArticleList'
import articles from '../posts'

//function Admin() {
//	return (
//			<div>
//				<h1>Welcome, admin</h1>
//				<h2>Posts list</h2>
//				<ArticleList articles = {articles} />
//			</div>
//	)
//}

//localStorage.setItem('myKey', JSON.stringify(articles[0]))


var returnObj = JSON.parse(localStorage.getItem("myKey"))
var returnObj1 = JSON.parse(localStorage.getItem("myKey1"))
var returnObj2 = JSON.parse(localStorage.getItem("myKey2"))
var returnObj3 = JSON.parse(localStorage.getItem("myKey3"))
var returnObj4 = JSON.parse(localStorage.getItem("myKey4"))
var returnObj5 = JSON.parse(localStorage.getItem("myKey5"))
var returnObj6 = JSON.parse(localStorage.getItem("myKey6"))
var returnObj7 = JSON.parse(localStorage.getItem("myKey7"))
var returnObj8 = JSON.parse(localStorage.getItem("myKey8"))
var returnObj9 = JSON.parse(localStorage.getItem("myKey9"))

var Stringobj = JSON.stringify(returnObj)
var Stringobj1 = JSON.stringify(returnObj1)
var Stringobj2 = JSON.stringify(returnObj2)
var Stringobj3 = JSON.stringify(returnObj3)
var Stringobj4 = JSON.stringify(returnObj4)
var Stringobj5 = JSON.stringify(returnObj5)
var Stringobj6 = JSON.stringify(returnObj6)
var Stringobj7 = JSON.stringify(returnObj7)
var Stringobj8 = JSON.stringify(returnObj8)
var Stringobj9 = JSON.stringify(returnObj9)

function Admin() {
	return (
		<div>
			<Stringobj />
		</div>
	)
}


export default Admin