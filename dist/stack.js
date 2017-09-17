(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function Stack(init) {
    this.values = init || [];
  }

  Stack.prototype.length = function () {
    return this.values.length;
  };

  Stack.prototype.push = function (item) {
    this.values.unshift(item);
  };

  Stack.prototype.pop = function () {
    return this.values.shift();
  };

  Stack.prototype.map = function (f) {
    return new Stack(this.values.map(f));
  };

  Stack.prototype.filter = function (f) {
    return new Stack(this.values.filter(f));
  };

  Stack.prototype.reduce = function (f, initial) {
    return this.values.reduce(f, initial != null ? initial : new Stack());
  };

  exports.default = Stack;
});
