var fs = require('fs');

console.log("Logging before call to readFile.");

fs.readFile('./testFile.txt', {encoding: 'utf8'}, function(err, data){
	console.log("Logging inside callback.");

	if (err) throw err;

	console.log(data);
});

console.log("Logging after call to readFile.");