import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


export default class ElementAdd extends Component {
	constructor(props) {
		super(props)

		this.state = {
		textInputValue: '',
		redirect: false }
		this.handleChange = this.handleChange.bind(this)
		this.addElement = this.addElement.bind(this)
	}

	handleChange(e) {
		this.setState({ textInputValue: e.target.value }) 
	}

	addElement () {
		let text = this.state.textInputValue;
		this.props.addElement(text)
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
					<input type='text' onChange={this.handleChange} />
					<button className='btn btn-primary' onClick={this.addElement}>Добавить</button>
				</div>
			</div>
		)
	}
}
