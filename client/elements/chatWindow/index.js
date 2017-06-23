import React from 'react';
import _map from 'lodash/fp/map';

const ChatWindow = ({ messages, sendMessage }) => {

	_map(message => console.log(message))(messages.values)

	return (
		<div>
			<ul className="chatwindow-messages">
			</ul>
			<textarea placeholder="Enter chat message..." onChange={e => sendMessage(e.target.value)}/>
		</div>

	);
};

export default ChatWindow;
