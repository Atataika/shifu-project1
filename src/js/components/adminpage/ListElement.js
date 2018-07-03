import React from 'react'
import { Link } from 'react-router-dom'

export default function ListElement(props) {
	return (
		<div>
			<div className='card-header'>
				<h2>{ props.element.title }</h2>
				<button onClick={ () => props.remove(props.index) } className='btn btn-danger'>Удалить</button>
				<Link to={`admin/edit/${props.index}`}>
					<button className='btn btn-primary'>Редактировать</button>
				</Link>
			</div>
			<div className='card-body'>
				<p>{ props.element.content }</p>
			</div>
			<div className='card-footer'>
				<p>{ props.element.slug }</p>
			</div>
		</div>
	)
}