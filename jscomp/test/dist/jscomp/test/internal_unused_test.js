// Generated by Melange
'use strict';

var Caml_exceptions = require("melange.js/caml_exceptions.js");
var Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

console.log(3);

var A = /* @__PURE__ */Caml_exceptions.create("Internal_unused_test.P1.A");

function f(param) {
  throw new Caml_js_exceptions.MelangeError(A, {
            MEL_EXN_ID: A
          });
}

var c = 5;

function h(a, b) {
  return a + b | 0;
}

var h1 = 2;

var h2 = h1 + 1 | 0;

var h4 = 2;

var h5 = h4 + 1 | 0;

var b = 5;

var N = {
  b: b
};

console.log(h5);

console.log(h2);

console.log(c);

console.log(h(1, 2));

function H($star) {
  return {};
}

exports.f = f;
exports.N = N;
exports.H = H;
/*  Not a pure module */
