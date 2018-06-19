import React from 'react'

function Article(props) {
	const {article} = props
	const body = <p>{article.content}</p>
	return (
		<div>
			<h2>{article.title}</h2>
			{body}
			<p>{article.slug}</p>
		</div>
	)
}

export default Article