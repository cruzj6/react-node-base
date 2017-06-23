import React from 'react';
import ReactDOM from 'react-dom';
import _get from 'lodash/fp/get';

import SuperRecompose from './recomposedAF';

ReactDOM.render(
	<div>
		<SuperRecompose />
	</div>,
	document.getElementById('root')
)
