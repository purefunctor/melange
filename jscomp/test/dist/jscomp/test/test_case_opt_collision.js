// Generated by Melange
'use strict';

let Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function f(xOpt, y) {
  const x = xOpt !== undefined ? xOpt : 3;
  const xOpt$1 = x + 2 | 0;
  console.log(xOpt$1);
  return xOpt$1 + y | 0;
}

console.log(f(undefined, 2));

eq("File \"jscomp/test/test_case_opt_collision.ml\", line 15, characters 6-13", f(undefined, 2), 7);

eq("File \"jscomp/test/test_case_opt_collision.ml\", line 17, characters 6-13", f(4, 2), 8);

Mt.from_pair_suites("jscomp/test/test_case_opt_collision.ml", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f = f;
/*  Not a pure module */
