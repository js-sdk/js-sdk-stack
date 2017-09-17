/* global describe, it, context */

import Stack from '../src/index.js';

describe("stack", () => {
  context("contructor.", () => {
    it("empty stack.", () => {
      const s = new Stack();
      s.values.should.be.eql([]);
    });

    it("init with value.", () => {
      const values = [3, 2, 1];
      const s = new Stack(values);
      s.values.should.be.eql(values);
    });
  });

  it("push(i).", () => {
    const s = new Stack();
    s.push(1);
    s.values.should.be.eql([1]);
  });

  it("lifo.", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.values.should.be.eql([2, 1]);
  });

  it("pop(item).", () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    const v = s.pop();
    v.should.be.eql(2);
  });

  it("map(f)", () => {
    const s = new Stack([1, 2, 3]);
    s.map(x => String.fromCharCode(x + 64)).should.be.eql(
      new Stack(['A', 'B', 'C'])
    );
  });

  it("filter(f)", () => {
    const s = new Stack([1, 2, 3]);
    s.filter(x => x < 2).should.be.eql(
      new Stack([1])
    );
  });

  context("reducing", () => {
    it("reduce(f, 0)", () => {
      const s = new Stack([1, 2, 3]);
      s.reduce((acc, b) => acc + b, 0).should.be.eql(6);
    });

    it("reduce(f)", () => {
      const s = new Stack([1, 2, 3]);
      s.reduce((acc, b) => {
        acc.push(b);
        return acc;
      }).values.should.be.eql([3, 2, 1]);
    });
  });

  it("length()", () => {
    const s = new Stack([1, 2, 3]);
    s.length().should.be.eql(3);
  });
});
