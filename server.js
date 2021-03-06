'use strict';

const express = require('express');
const products = require('./products.json');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'David\'s web projects',
    products: products.products,
  });
});

app.get('/cetlis', (req, res) => {
  res.send('Under development...');
});


// Insider jatek kod
app.get('/insider', (req, res) => {
  const script = products.products.find(p => p.id === 'insider').script;
  res.render('insider', {
    title: 'Insider',
    script: `${script}`,
  });
});

const words = require('./resources/insider/szavak.json');

io.on('connection', (socket) => {
  socket.on('get_word', () => {
    var word = words.words[Math.floor(Math.random() * words.words.length)];
    socket.emit('new_word_sent', word);
  });
});


// Server start
const server = http.listen(8080, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});

// module.exports = server;
exports.server = server;
exports.io = io;

