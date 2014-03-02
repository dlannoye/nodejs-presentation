// If we want to take over the whole object returned by by the module we can't
// use `exports` we have to use 

module.exports = {
	propertyB: "Some Property",
	functionB: function() {
		console.log("In exported fucntionB");
	},
};