// Generated by Melange
'use strict';

var Stdlib = require("melange/stdlib.js");
var Caml_string = require("melange.js/caml_string.js");
var Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

var hh;

try {
  hh = Caml_string.get("ghsogh", -3);
}
catch (raw_e){
  var e = Caml_js_exceptions.internalToOCamlException(raw_e);
  if (e.RE_EXN_ID === Stdlib.Invalid_argument) {
    console.log(e._1);
    hh = /* 'a' */97;
  } else {
    throw e;
  }
}

var f = /* 'o' */111;

exports.f = f;
exports.hh = hh;
/* hh Not a pure module */
