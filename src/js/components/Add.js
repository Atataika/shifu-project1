import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { render } from "react-dom";
import React, { Component } from 'react'

export default class Add extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const value = e.target.elements[0].value
    window.localStorage.setItem('myKey'+value, '{"title":"'+value+'"}')
}
render() {
	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-3 text-center'>Add to list</h1>
			</div>
			<div className='row'>
				<form className='col-md-4' onSubmit={this.handleSubmit}>
					<input type='text' className='form-control' />
					<button type='submit' className='btn btn-outline-primary'><Link to="/admin">Добавить</Link></button>
				</form>
			</div>
		</div>
	)}
}
