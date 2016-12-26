'use strict';

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

http.listen(5000, () => {
  console.log('server listening on port 5000');
});

var clients = new Map();

io.on('connection', (socket) => {
  var socketId = socket.id.slice(2);

  socket.on('client-connect', (msg) => {
    clients.set(socket.id, msg);

    socket.broadcast.emit('msg', clients.get(socket.id) + ' connected');
    socket.broadcast.emit('client-to-server-list', clients.get(socket.id));

    console.log('user connected: ' + clients.get(socket.id) + ' | ' + socketId);
  });

  socket.on('retrieve-clients', function() {
    var clientArray = [];
    clients.forEach((value, key) => {
      clientArray.push([value, key]);
    })
    
    socket.emit('client-list', clientArray);
  })

  socket.on('send-msg', (msg) => {
    io.emit('msg', msg);   
  });

  socket.on('disconnect', function() {
    var counter = 0;
    for(let i = 0 ; i < 2 ; i++) {
      if (counter == 0) {
        console.log('user disconnected: ' + clients.get(socket.id) + ' | ' + socketId);
        counter++;
      } else {
        clients.delete(socket.id);
      }
    }
  });

});