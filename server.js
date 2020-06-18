'use strict';

const express = require('express');
const products = require('./products.json')
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Homepage',
		products: products.products
	});
});

app.get('/cetlis', (req, res) => {
	res.send('Under development...');
});


// Insider jatek kod
app.get('/insider', (req, res) => {
	res.render('insider', {
		title: 'Insider'
	});
});

const words = require('./resources/insider/szavak.json');

io.on('connection', (socket) => {
	var word_sent = false;
	socket.on('click', () => {
		if (word_sent) {
			io.emit('word', '');
			word_sent = false;
		}
		else {
			var index = Math.floor(Math.random() * words.words.length)
			var word = words.words[index];
			io.emit('word', word);
			word_sent = true;
		}
	});
});


// Server start
const server = http.listen(8080, () => {
	console.log(`Express running -> PORT ${server.address().port}`);
});
