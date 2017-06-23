import React from 'react';
import ReactDOM from 'react-dom';
import _get from 'lodash/fp/get';

import ChatWindow from './elements/chatWindow/socketChatWindow';

ReactDOM.render(
	<div>
		<ChatWindow />
	</div>,
	document.getElementById('root')
)
