import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class ElementEdit extends Component {

	constructor(props) {
	super(props)
	
	let elements = JSON.parse(localStorage.getItem('myKey'))
	this.index = this.props.match.params.index
	this.element = elements[this.index]
	this.state = {
		text: this.element ? this.element.title : '',
		redirect: this.element ? false : true }
	this.editElement = this.editElement.bind(this)
	this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({ text: e.target.value })
	}

	editElement() {
		let text = this.state.text
		this.props.editElement(text, this.index)
		this.setState({ redirect: true })
	}

	render() {
		if (this.state.redirect) {
		return <Redirect to='/admin'/> 
	}

		return (
			<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-3 text-center'>Add element to list</h1>
			</div>
			<div className='card mx-auto' style={{width: '30%'}}>
				<input type='text' onChange={this.handleChange} value={this.state.text} />
				<button className='btn btn-primary' onClick={this.editElement}>Добавить</button>
			</div>
		</div>
		)
	}
}
