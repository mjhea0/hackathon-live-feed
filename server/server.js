var app = require('./app'),
    debug = require('debug')('hackathon-live-feed:server'),
    http = require('http'),
    Twitter = require('twitter'),
    config = require('./_config');


// get port from env and store
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// create http server
var server = http.createServer(app);

// listen
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

// normalize port
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// event handler for errors
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port: 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// listening
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr: 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Express server listening on port ' + port);
}

// sockets

var io = require('socket.io').listen(server);

var client = new Twitter({
  consumer_key: config.twitterConsumerKey,
  consumer_secret: config.twitterConsumerSecret,
  access_token_key: config.twitterAccessTokenKey,
  access_token_secret: config.twitterAccessTokenSecret
});

client.stream('statuses/filter', {track: config.hashtags}, function(stream) {
  stream.on('data', function(tweet) {
    io.emit('newTweet', tweet);
  });
  stream.on('error', function(error) {
    throw error;
  });
});

var commitStream = require('github-commit-stream');
var d = new Date();

commitStream({
  // token: req.user.github.token,
  user: 'substack',
  repo: 'node-browserify',
  since: d.setHours(0,0,0,0)
}).on('data', function(commit) {
  console.log(commit.commit.message);
  io.emit('newCommit', commit);
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
