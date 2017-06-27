const { routes } = require('./routes/index');
const traffic = require('./utils/trafficMiddleware');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)

app.use(traffic);

app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

io.on('connection', socket => {
	console.log('Connected!');

	socket.on('message', msg => {
		console.log({ msg })
		io.emit('message', `You sent me ${msg}!`);
	});

	socket.on('disconnect', () => console.log('Disconnected!'))
})

http.listen(process.env.PORT || 5000);
