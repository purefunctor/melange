// Generated by Melange
'use strict';

let Mt = require("../mt.js");
let Stdlib__List = require("melange/list.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

const x = Stdlib__List.length({
      hd: 1,
      tl: {
        hd: 2,
        tl: {
          hd: 3,
          tl: /* [] */0
        }
      }
    });

const _map = {"idb":"idb","leveldb":"leveldb","http":"http"};

function adapterToJs(param) {
  return param;
}

function adapterFromJs(param) {
  return _map[param];
}

eq("File \"jscomp/test/re_or_res/re_first_test.re\", line 13, characters 3-10", "idb", "idb");

Mt.from_pair_suites("Re_first_test", suites.contents);

const u = 3;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.x = x;
exports.u = u;
exports.adapterToJs = adapterToJs;
exports.adapterFromJs = adapterFromJs;
/* x Not a pure module */
