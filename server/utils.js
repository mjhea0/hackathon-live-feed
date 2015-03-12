var http = require('http');


/**
 * Ping staging server every 20 minutes to keep Heroku "alive".
 */
var keepHerokuAlive = function() {
  setInterval(function() {
    var options = {
      host: 'pacific-beach-3008.herokuapp.com',
      port: 80,
      path: '/'
    };
    http.get(options);
  }, 20 * 60 * 1000);
};

module.exports = keepHerokuAlive;