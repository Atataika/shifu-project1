import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Admin() {
	const list = Object.keys(localStorage).map((myKey, index) => {
	const listItem = JSON.parse(localStorage.getItem(myKey));

	return (
		<div key={ listItem.id }>
			<div className='card-header'>
				<h2>{ listItem.title }</h2>
				<button onClick={handleClick(index)} className='btn btn-danger .col-3'>Удалить</button>
				<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
			</div>
			<div className='card-body'>
				<p>{ listItem.content }</p>
				<p>{ listItem.slug }</p>
			</div>
		</div>
	);
});

	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-3 text-center'>Admin Page</h1>
			</div>
			<div className='btn btn-outline-primary'>
				<Link to='/admin/add' className='align-right'>Добавить запись</Link>
			</div>
			<div className='card mx-auto' style={{width: '50%'}}>{ list }</div>
		</div>
	)
} 

 function handleClick(listItem) {
	//list.slice(index, 1)
	//const listId = Object.keys(localStorage).map(itemId => {
	//localStorage.removeItem(itemId)
	//})
	console.log(listItem.id, 'clicked')
}

/*
function Admin() {
	var listItem = JSON.parse(localStorage.getItem('myKey0'))
	var listItem1 = JSON.parse(localStorage.getItem('myKey1'))
	var listItem2 = JSON.parse(localStorage.getItem('myKey2'))
	var listItem3 = JSON.parse(localStorage.getItem('myKey3'))
	var listItem4 = JSON.parse(localStorage.getItem('myKey4'))
	var listItem5 = JSON.parse(localStorage.getItem('myKey5'))
	var listItem6 = JSON.parse(localStorage.getItem('myKey6'))
	var listItem7 = JSON.parse(localStorage.getItem('myKey7'))
	var listItem8 = JSON.parse(localStorage.getItem('myKey8'))
	var listItem9 = JSON.parse(localStorage.getItem('myKey9'))

	return (
		<div className='container'>
			<div className='jumbotron'>
				<h1 className='display-3 text-center'>Admin Page</h1>
			</div>
			<div className='btn btn-outline-primary'>
				<Link to='/admin/add' className='align-right'>Добавить запись</Link>
			</div>
			
			<div className='card mx-auto' style={{width: '50%'}}>
				
				<div key={ listItem.id }>
					<div className='card-header'>
						<h2>{ listItem.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem.content }</p>
						<p>{ listItem.slug }</p>
					</div>
				</div>
				<div key={ listItem1.id }>
					<div className='card-header'>
						<h2>{ listItem1.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem1.content }</p>
						<p>{ listItem1.slug }</p>
					</div>
				</div>
				<div key={ listItem2.id }>
					<div className='card-header'>
						<h2>{ listItem2.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem2.content }</p>
						<p>{ listItem2.slug }</p>
					</div>
				</div>
				<div key={ listItem3.id }>
					<div className='card-header'>
						<h2>{ listItem3.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem3.content }</p>
						<p>{ listItem3.slug }</p>
					</div>
				</div>
				<div key={ listItem4.id }>
					<div className='card-header'>
						<h2>{ listItem4.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem4.content }</p>
						<p>{ listItem4.slug }</p>
					</div>
				</div>
				<div key={ listItem5.id }>
					<div className='card-header'>
						<h2>{ listItem5.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem5.content }</p>
						<p>{ listItem5.slug }</p>
					</div>
				</div>
				<div key={ listItem6.id }>
					<div className='card-header'>
						<h2>{ listItem6.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem6.content }</p>
						<p>{ listItem6.slug }</p>
					</div>
				</div>
				<div key={ listItem7.id }>
					<div className='card-header'>
						<h2>{ listItem7.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem7.content }</p>
						<p>{ listItem7.slug }</p>
					</div>
				</div>
				<div key={ listItem8.id }>
					<div className='card-header'>
						<h2>{ listItem8.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem8.content }</p>
						<p>{ listItem8.slug }</p>
					</div>
				</div>
				<div key={ listItem9.id }>
					<div className='card-header'>
						<h2>{ listItem9.title }</h2>
						<button onClick={handleClick} className='btn btn-danger .col-3'>Удалить</button>
						<Link to='/edit/' className='btn btn-primary .col-3'>Редактировать</Link>
					</div>
					<div className='card-body'>
						<p>{ listItem9.content }</p>
						<p>{ listItem9.slug }</p>
					</div>
				</div>

			</div>
		</div>
	)
}

				<li key = { listItem1.id }>
					<h2>{ listItem1.title }</h2>
					<p>{ listItem1.content }</p>
					<p>{ listItem1.slug }</p>
				</li>
				<li key = { listItem2.id }>
					<h2>{ listItem2.title }</h2>
					<p>{ listItem2.content }</p>
					<p>{ listItem2.slug }</p>
				</li>

function handleClick() {
	localStorage.removeItem('myKey0')
}
*/

export default Admin