console.log("Module A loading");

var a = "Something";

exports.test = function () {

	console.log("In exported test function.");

	if (a) {
		console.log("a is defined");
	} else {
		console.log("a is undefined");
	}
};