var fs = require('fs');

fs.watchFile('./testFile.txt', function(curr, prev){
	console.log("File changed.");
});
