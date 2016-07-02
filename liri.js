var request = require(keys.js);


// INSTRUCTIONS:


// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require('request');

// Store all of the arguments in an array 
var nodeArgs = process.argv;


var tweetName = "";

var queryUrl = "";

twitter.stream("filter", {track: "love"}, function(stream){

	stream.on('data', function(data){

	console.log(util.inspect(data));
	
	});
});

