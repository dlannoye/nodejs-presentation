# Notes

## Orgins
* Node's goal is to provide an easy way to build scalable network programs
* Node doesn't have locks
* Build on top of Google's V8 engine and its ECMAScript (Javascript).
* Almost no functions in node directly perform I/O so nothing blocks
* Uses an event loop as a language construct rather than a library providing it.
* Node runs the initial script and then enters the event loop. The event loop continues to run untill there are no remaining callbacks.
* Unlike other similar libraries (Ruby's Event Machine or Python's Twisted) you don't have to start the event loop throught a blocking call like `EventMachine::run()`. Just like browser javascript the event loop is hidden from the user.

## Basics
* Read-Eval-Print loop (REPL)
	* Simply run `node` at the command line to launch node in this mode.
* If you only need a couple of statements you can launch node in an non-interactive mode with a a list of statments using `node -e "..."`.
	* Example:

```
$ node -e "console.log(3 + 6); console.log(new Date());"
9
Sat Mar 01 2014 10:09:23 GMT-0600 (CST)
```

* The way we will be using node is to lauch it by running a JavaScript file: `node someFile.js`

### Differences from running JS in the browser
* In the browser we have `window` and `document` objects. Those framilar with browser JS will understand why these don't exist in node. In browser based JS the variables in the global scope are placed on the [`window`](http://nodejs.org/api/globals.html#globals_global) object in node they are placed on the `global` object. node also offers the [`console`](http://nodejs.org/api/console.html) object and [`process`](http://nodejs.org/api/process.html#process_process) object.

* In the browser there isn't [currently](http://wiki.ecmascript.org/doku.php?id=harmony:modules) a language feature to include modules, there are some libraries that try to saome this like CommonJS and RequireJS.

#### [Modules](http://nodejs.org/api/modules.html) in node
* Modules are loaded through the `require(...)` function.
	* For a local module you can require it by using a a path to the file that contains the module: `var someVar = require('./myModule.js');`
	* For [core modules](http://nodejs.org/api/) you can simply reference them by name: `var someVar = require('http');`

##### Defining your own modules
* In your modules you can export functionality by either adding a property on the `exports` object or by setting `module.exports` to the object you want to export.


## NPM
