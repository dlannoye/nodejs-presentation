
var moduleA = require("./moduleA.js");

moduleA.test();

console.log("Testing in the core script.");
if (a) {
	console.log("a is defined");
} else {
	console.log("a is undefined");
}

// Declaring this here so we don't get reference errors, but can show that the
// variable defined in the module didn't leak to this context.
var a;