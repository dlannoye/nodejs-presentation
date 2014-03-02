console.log("Module A loading");

// Variables declared in the module are "private", kinda like the whole 
// module was wraped inside of a function.
var a = "Something";


// Exports can either be assigned like 1 property/function at a time or like
// shown in moduleB using module.exports
exports.test = function () {

	console.log("In exported test function.");

	if (a) {
		console.log("a is defined");
	} else {
		console.log("a is undefined");
	}
};