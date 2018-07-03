import React from 'react'
import { Link } from 'react-router-dom'
import ListElement from './ListElement'

export default function ElementsList(props) {
	let elements = props.list.map((element, index) => {
		return (
			<ListElement remove={props.removeElement} key={index} index={index} element={element} /> 
		)
	});

	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-3 text-center'>Admin Page</h1>
			</div>
			<Link to='admin/add'>
				<button className='btn btn-outline-primary'>Добавить запись</button>
			</Link>
			<div className='card mx-auto' style={{width: '50%'}}>{ elements }</div>
		</div>
	)
}
