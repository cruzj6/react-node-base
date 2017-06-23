import ChatWindow from '../index';
import { lifecycle, withState, withProps, compose } from 'recompose';
import io from 'socket.io-client';

const socket = io();

const enhancedChatWindow = compose(
	withProps(props => ({
			sendMessage: message => socket.emit('message', message)
	})),

	withState('messages', 'setMessages', { values: [] }),

	lifecycle({
		componentWillMount: function () {
			socket.on('message', message => {
				this.props.setMessages({
					values: [ ...this.props.messages.values, message ]
				});
			});
		}
	})
)(ChatWindow);

export default enhancedChatWindow;
