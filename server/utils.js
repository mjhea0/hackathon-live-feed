var http = require('http');


/**
 * Ping Staging server every 5 minutes to keep Heroku "alive".
 */
setInterval(function() {
  http.get("https://pacific-beach-3008.herokuapp.com/");
}, 300000);