import '../css/style.css';
import React from 'react';
import {render} from 'react-dom';

function FirstFunction() {
	return (
		<div>
			<h1>Бычков Егор Ильич запустил проект, какой он молодец!</h1>
		</div>
	)
}

render(<FirstFunction/>, document.getElementById('root'));
