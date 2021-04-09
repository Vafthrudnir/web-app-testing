'use strict';

// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const serverFile = require('../server');
const server = serverFile.server;

// const Client = require('socket.io-client');
// const socketUrl = 'http://localhost:8080/insider';
// const options = {
//   transports: ['websocket'],
//   'force new connection': true,
// };

// Configure chai
chai.use(chaiHttp);
chai.should();
describe('Main page', function() {
  it('should get page', function(done) {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) {
          console.log(err.stack);
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
describe('Cetlis', function() {
  it('should get page', function(done) {
    chai.request(server)
      .get('/cetlis')
      .end((err, res) => {
        if (err) {
          console.log(err.stack);
        }
        res.should.have.status(200);
        res.text.should.equal('Under development...');
        done();
      });
  });
});
describe('Insider', function() {
  it('should get page', function(done) {
    chai.request(server)
      .get('/insider')
      .end((err, res) => {
        if (err) {
          console.log(err.stack);
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
// describe('Insider - socket', function() {
//   let io, serverSocket, clientSocket;

//   before(function(done) {
//     server.listen();
//   });

//   it('should get word', function(done) {

//     var clientSocket = Client(socketUrl);
//     clientSocket.on('connect', function(msg){
//       //msg.should.equal('test');

//       // Disconnect both client connections
//       //clientSocket.disconnect();
//       done();
//     });

//     //clientSocket.emit('get_word');
//   });
// });

/*
const { createServer } = require('http');
const Server = require('socket.io');
const Client = require('socket.io-client');
const assert = require('chai').assert;

const uut = require('../server');

describe('my awesome project', function() {
  let io, serverSocket, clientSocket;

  before(function(done) {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on('connection', (socket) => {
        serverSocket = socket;
      });
      clientSocket.on('connect', done);
    });
  });

  after(function() {
    io.close();
    clientSocket.close();
  });

  it('should work', function(done) {
    clientSocket.on('hello', (arg) => {
      assert.equal(arg, 'world');
      done();
    });
    serverSocket.emit('hello', 'world');
  });

  it('should work (with ack)', function(done) {
    serverSocket.on('hi', (cb) => {
      cb('hola');
    });
    clientSocket.emit('hi', (arg) => {
      assert.equal(arg, 'hola');
      done();
    });
  });
});*/
