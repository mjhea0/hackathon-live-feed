var config = {};

// github keys
config.githubClientID = process.env.githubClientID || 'GET_YOUR_OWN';
config.githubClientSecret = process.env.githubClientSecret || 'GET_YOUR_OWN';
config.githubCallbackURL = process.env.githubCallbackURL || "http://127.0.0.1:3000/auth/github/callback";

// secret key (update in production!!!)
config.secretKey = process.env.secretKey || "\x1d\x0fB\x8d'\xaa\xaf\x04\xca\xfe\n\xb8Vg\x95X\x9b\xd6\x18\xd60T`\xc6";

// mongo uri
config.mongoURI = {development: "mongodb://localhost/hackathon", test: "mongodb://localhost/test"};


module.exports = config;