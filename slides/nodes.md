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
* Read-Eval-Print loop - console
	* Simply run `node` at the command line to launch node in this mode.
* If you only need a couple of statements you can launch node in an non-interactive mode with a a list of statments using `node -e "..."`.
	* Example:

```
$ node -e "console.log(3 + 6); console.log(new Date());"
9
Sat Mar 01 2014 10:09:23 GMT-0600 (CST)
```

* The way we will be using node is to lauch it by running a JavaScript file: `node someFile.js`

## NPM
