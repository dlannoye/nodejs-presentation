// A simple chat application.
// Messages are sent to the client with a comet request via long polling (http://en.wikipedia.org/wiki/Comet_(programming)#Ajax_with_long_polling)
// No libraries outside of the core node libraries are used.

var http = require('http');
var fs = require('fs');
var url = require('url');

// Just store all of the messages in an array.
var messages = [];
var requests = [];

http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname == '/') {
    fs.readFile('./index.html', function(err, data) {
      if (err) throw err;
      res.end(data);
    });
  } else if (parsedUrl.pathname == '/get') {
    requests.push({
      time: new Date(),
      request: res,
    });
  } else if (parsedUrl.pathname == '/send') {
    var query = parsedUrl.query;
    var message = decodeURIComponent(query.value);
    messages.push(message);

    pushMessages();
    res.end();
  }
  return;

}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');

var pushMessages = function() {
  while(requests.length > 0) {
    var request = requests.pop().request;
    request.end(JSON.stringify({
      messages: messages,
    }));
  }
};
