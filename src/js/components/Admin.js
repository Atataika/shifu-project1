import React from 'react'

function Admin() {
	const list = Object.keys(localStorage).map(myKey => {
	const listItem = JSON.parse(localStorage.getItem(myKey));

	return (
		<div key={ listItem.id }>
			<div className='card-header'>
				<h2>{ listItem.title }</h2>
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
			<div className='card mx-auto' style={{width: '50%'}}>{ list }</div>
		</div>
	)
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
		<ul>
			<li key = { listItem.id }>
				<h2>{ listItem.title }</h2>
				<p>{ listItem.content }</p>
				<p>{ listItem.slug }</p>
			</li>
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
			<li key = { listItem3.id }>
				<h2>{ listItem3.title }</h2>
				<p>{ listItem3.content }</p>
				<p>{ listItem3.slug }</p>
			</li>
			<li key = { listItem4.id }>
				<h2>{ listItem4.title }</h2>
				<p>{ listItem4.content }</p>
				<p>{ listItem4.slug }</p>
			</li>
			<li key = { listItem5.id }>
				<h2>{ listItem5.title }</h2>
				<p>{ listItem5.content }</p>
				<p>{ listItem5.slug }</p>
			</li>
			<li key = { listItem6.id }>
				<h2>{ listItem6.title }</h2>
				<p>{ listItem6.content }</p>
				<p>{ listItem6.slug }</p>
			</li>
			<li key = { listItem7.id }>
				<h2>{ listItem7.title }</h2>
				<p>{ listItem7.content }</p>
				<p>{ listItem7.slug }</p>
			</li>
			<li key = { listItem8.id }>
				<h2>{ listItem8.title }</h2>
				<p>{ listItem8.content }</p>
				<p>{ listItem8.slug }</p>
			</li>
			<li key = { listItem9.id }>
				<h2>{ listItem9.title }</h2>
				<p>{ listItem9.content }</p>
				<p>{ listItem9.slug }</p>
			</li>
		</ul>
	)
}
*/
export default Admin