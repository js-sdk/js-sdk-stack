function Stack(init) {
  this.values = init || [];
}

Stack.prototype.length = function() {
  return this.values.length;
};

Stack.prototype.push = function(item) {
  this.values.unshift(item);
};

Stack.prototype.pop = function() {
  return this.values.shift();
};

Stack.prototype.map = function(f) {
  return new Stack(this.values.map(f));
};

Stack.prototype.filter = function(f) {
  return new Stack(this.values.filter(f));
};

Stack.prototype.reduce = function(f, initial) {
  return this.values.reduce(f, initial != null ? initial : new Stack());
};

export default Stack;
