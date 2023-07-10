// Generated by Melange
'use strict';

var Mt = require("./mt.js");
var Curry = require("melange.js/curry.js");
var Mt_global = require("./mt_global.js");
var Caml_array = require("melange.js/caml_array.js");
var Stdlib__Int64 = require("melange/int64.js");
var Stdlib__Printf = require("melange/printf.js");
var Stdlib__Random = require("melange/random.js");

var id = {
  contents: 0
};

var suites = {
  contents: /* [] */0
};

function eq(f) {
  return function (param, param$1) {
    return Mt_global.collect_eq(id, suites, f, param, param$1);
  };
}

function neq(f) {
  return function (param, param$1) {
    return Mt_global.collect_neq(id, suites, f, param, param$1);
  };
}

function approx(f) {
  return function (param, param$1) {
    return Mt_global.collect_approx(id, suites, f, param, param$1);
  };
}

Mt_global.collect_neq(id, suites, "File \"random_test.ml\", line 12, characters 6-13", (Stdlib__Random.self_init(undefined), Stdlib__Random.$$int(10000)), (Stdlib__Random.self_init(undefined), Stdlib__Random.$$int(1000)));

Stdlib__Random.init(0);

var v = Caml_array.make(10, false);

for(var i = 0; i <= 9; ++i){
  Caml_array.set(v, i, Stdlib__Random.bool(undefined));
}

Mt_global.collect_eq(id, suites, "File \"random_test.ml\", line 26, characters 5-12", v, [
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      false
    ]);

var f = Stdlib__Random.int64(Stdlib__Int64.max_int);

var h = Stdlib__Random.int64([
      0,
      3
    ]);

var vv = Stdlib__Random.bits(undefined);

var xx = Stdlib__Random.$$float(3.0);

var xxx = Stdlib__Random.int32(103);

Curry._5(Stdlib__Printf.printf(/* Format */{
          _0: {
            TAG: /* Int64 */7,
            _0: /* Int_d */0,
            _1: /* No_padding */0,
            _2: /* No_precision */0,
            _3: {
              TAG: /* Char_literal */12,
              _0: /* ' ' */32,
              _1: {
                TAG: /* Int64 */7,
                _0: /* Int_d */0,
                _1: /* No_padding */0,
                _2: /* No_precision */0,
                _3: {
                  TAG: /* Char_literal */12,
                  _0: /* ' ' */32,
                  _1: {
                    TAG: /* Int */4,
                    _0: /* Int_d */0,
                    _1: /* No_padding */0,
                    _2: /* No_precision */0,
                    _3: {
                      TAG: /* Char_literal */12,
                      _0: /* ' ' */32,
                      _1: {
                        TAG: /* Float */8,
                        _0: [
                          /* Float_flag_ */0,
                          /* Float_f */0
                        ],
                        _1: /* No_padding */0,
                        _2: /* No_precision */0,
                        _3: {
                          TAG: /* Char_literal */12,
                          _0: /* ' ' */32,
                          _1: {
                            TAG: /* Int32 */5,
                            _0: /* Int_d */0,
                            _1: /* No_padding */0,
                            _2: /* No_precision */0,
                            _3: {
                              TAG: /* String_literal */11,
                              _0: " \n",
                              _1: /* End_of_format */0
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          _1: "%Ld %Ld %d %f %ld \n"
        }), f, h, vv, xx, xxx);

Mt.from_pair_suites("Random_test", suites.contents);

exports.id = id;
exports.suites = suites;
exports.eq = eq;
exports.neq = neq;
exports.approx = approx;
exports.v = v;
exports.f = f;
exports.h = h;
exports.vv = vv;
exports.xx = xx;
exports.xxx = xxx;
/*  Not a pure module */
