var twit = require('twitteer'),
	twitter = new twit ({
		 consumer_key: '<q0I0UQwyLciOUdOE5TujPvOk4',
  consumer_secret: 'GJVpp8coFWa4XBcBm2Xq8lKlYrQblf3uXs6DeMitkbK15ZLjnh',
  access_token_key: '722593734324396032-HsCDzc3t4BOMHIclwLsbVyPhTjac2fe',
  access_token_secret: 'oLCyOoECG3baoTBXkpcJiy5Qx46MU4l7tHnmor1N5GaOl',
	});



var count = 0,
	util = require('util');

twitter.stream('filter', {track:"love"}, function(stream){

	stream.on('data', function(data){
		console.log(util.inspect(data));
		stream.destroy();
		process.exit(0);
	});
});

