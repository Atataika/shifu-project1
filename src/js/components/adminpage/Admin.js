import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import ElementsList from './ElementsList'
import ElementAdd from './ElementAdd'
import ElementEdit from './ElementEdit'

export default class Admin extends Component {
	constructor() {
		super()

		let myKey = JSON.parse(localStorage.getItem('myKey'))
		this.state = { myKey: myKey }
		this.editElement = this.editElement.bind(this)
		this.removeElement = this.removeElement.bind(this)
		this.addElement = this.addElement.bind(this)
	}

	editElement(text, index) {
		let myKey = this.state.myKey
		myKey[index].title = text
		this.setState({ myKey: myKey })
		localStorage.setItem('myKey', JSON.stringify(myKey))
	}

	removeElement(index) {
		let myKey = this.state.myKey
		myKey.splice(index, 1)
		this.setState({ myKey: myKey })
		localStorage.setItem('myKey', JSON.stringify(myKey))
	}

	addElement(title) {
		let myKey = this.state.myKey
		let newElem = {
			title: title,
			content: '',
			slug: ''}
		myKey.push(newElem)
		this.setState({ myKey: myKey })
		localStorage.setItem('myKey', JSON.stringify(myKey))
	}

	render() {
		return (
			<Switch>
				<Route exact path='/admin' render={() => (<ElementsList removeElement={this.removeElement} list={this.state.myKey} /> )}/>
				<Route path='/admin/add' render={() => (<ElementAdd addElement={this.addElement}/> )}/>
				<Route path='/admin/edit/:index' render={(props) => (<ElementEdit editElement={this.editElement} {...props}/> )}/>
			</Switch>
		)
	}
}
