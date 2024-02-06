// Generated by Melange
'use strict';

var Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function test(code) {
  if (code > 599 || code < 500) {
    if (code === 201 || code === 200) {
      return "good response";
    } else {
      return "the catch all";
    }
  } else if (code > 597 || code < 512) {
    return "bad response";
  } else {
    return "the catch all";
  }
}

var a = "good response";

var b = "bad response";

if (a !== "good response") {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/gpr_3877_test.ml",
              14,
              3
            ]
          });
}

if (b !== "bad response") {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/gpr_3877_test.ml",
              15,
              3
            ]
          });
}

exports.test = test;
exports.a = a;
exports.b = b;
/*  Not a pure module */
