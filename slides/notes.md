# Notes

## Origins
* Node's goal is to provide an easy way to build scalable network programs
* Your code runs on a single thread
* Node doesn't have locks
* Build on top of Google's V8 engine and its ECMAScript (Javascript).
* Almost no functions in node directly perform I/O so there are very few calls that block.
* Based around the idea that running is code is cheap, but I/O is is not. So to work around this I/O is done asynchronous and callbacks are used so your code can keep running instead of blocking for I/O.
``` Traditional I/O
var file = readFile("filename.txt");
doSomethingWithFile(file);
// ...other code
```

``` Async I/O
readFile("filename.txt", function(file){
	doSomethingWithFile(file);
});
// ...other code
```
* For example some systems might do a thread per connection, but the threads would sit idle while waiting for results. 
	* Because of the overhead of threading and some of the sitting idele waiting for I/O you don't ge the performance you should
	* Bring up example of Apache vs. NGINX from JSConf slides.
* Node isn't great for CPU intensive tasks... image processing, calculating the billionth digit of pi, etc.

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


#Resources
* [Offical Node Docs](http://nodejs.org/api/)
* [Slides introducing node.js from JSCOnf '09](http://s3.amazonaws.com/four.livejournal/20091117/jsconf.pdf)
* [Understanding the node.js event loop](http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/)
