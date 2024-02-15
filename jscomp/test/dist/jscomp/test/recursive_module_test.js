// Generated by Melange
'use strict';

let Caml_module = require("melange.js/caml_module.js");
let Curry = require("melange.js/curry.js");
let Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
}

function add(suite) {
  suites.contents = {
    hd: suite,
    tl: suites.contents
  };
}

const Int3 = Caml_module.init_mod([
      "jscomp/test/recursive_module_test.ml",
      13,
      6
    ], {
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "u"
        ]]
    });

Caml_module.update_mod({
      TAG: /* Module */0,
      _0: [[
          /* Function */0,
          "u"
        ]]
    }, Int3, Int3);

function fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return Math.imul(n, Curry._1(M.fact, n - 1 | 0));
  }
}

const M = {
  fact: fact
};

const fact$1 = M.fact;

const Fact = {
  M: M,
  fact: fact$1
};

eq("File \"jscomp/test/recursive_module_test.ml\", line 30, characters 5-12", 120, Curry._1(fact$1, 5));

add([
      "File \"jscomp/test/recursive_module_test.ml\", line 34, characters 7-14",
      (function (param) {
          return {
                  TAG: /* ThrowAny */7,
                  _0: (function (param) {
                      Curry._1(Int3.u, 3);
                    })
                };
        })
    ]);

Mt.from_pair_suites("Recursive_module_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.add = add;
exports.Int3 = Int3;
exports.Fact = Fact;
/* Int3 Not a pure module */
