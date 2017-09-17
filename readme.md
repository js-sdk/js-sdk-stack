# js-sdk-stack

[![Build Status](https://travis-ci.org/js-sdk/js-sdk-stack.svg?branch=master)](https://travis-ci.org/js-sdk/js-sdk-stack) [![Coverage Status](https://coveralls.io/repos/github/js-sdk/js-sdk-stack/badge.svg?branch=master)](https://coveralls.io/github/js-sdk/js-sdk-stack?branch=master)

Simple stack type.

## library

```ts
$ Stack(init || []) : Stack

// Create a new stack.


$ Stack.push(item : a) : ()

// Pushes a value to the stack.


$ Stack.pop() : a

// Pops a value from the stack.


$ Stack.length() : Number

// The length of the stack.


$ Stack.map(f (item : a) -> b) : Stack

// Maps each value of the stack returning a new Stack.


$ Stack.filter(f (item : a) -> Boolean) : Stack

// Returns a filtered Stack.


$ Stack.reduce(f (acc : b, item : a) -> b, initial : b) -> b

// If no initial value is passed, it will use Stack.
```

## license

See `license.md` or visit [Unlicense](http://unlicense.org).
