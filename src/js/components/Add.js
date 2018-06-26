import React, { Component } from 'react'
import { Route, Redirect, Link, browserHistory } from 'react-router'
import Admin from './Admin'

export default class Add extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const value = e.target.elements[0].value
    window.localStorage.setItem('myKey'+value, '{"title":"'+value+'"}')
    this.context.router.push('/admin')
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
					<button type='submit' className='btn btn-outline-primary'>Добавить</button>
				</form>
			</div>
		</div>
	)}
}
