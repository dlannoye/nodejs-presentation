// A simple chat application.

var http = require('http');
var fs = require('fs');
var socketio = require('socket.io'); 

var app = http.createServer(function (req, res) {
  fs.readFile('./index.html', function(err, data) {
    if (err) throw err;
    res.end(data);
  });
});

app.listen(1337, 'localhost');
var io = socketio.listen(app);

io.sockets.on('connection', function(socket) {
  socket.on('send', function(data){
    
    // Send to all connections
    io.sockets.emit('newMessage', data);

    // Send to just the other connecitons
    //socket.broadcast.emit('newMessage', data);
  });
});

console.log('Server running at http:/localhost:1337/');
