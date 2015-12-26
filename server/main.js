var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
  res.send('Hello World');
  console.log("Something just connected to express");
});

io.on('connection', function(socket) {
  console.log('Something connected to socket.io');
  socket.emit('messages', ["Hello", "How are you?", "WOW!"]);
});

server.listen(8080);
