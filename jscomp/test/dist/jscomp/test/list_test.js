// Generated by Melange
'use strict';

var Mt = require("./mt.js");
var Caml = require("melange.runtime/caml.js");
var Stdlib__List = require("melange/./list.js");
var Stdlib__Array = require("melange/./array.js");

var list_suites_0 = [
  "length",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: 1,
              _1: Stdlib__List.length({
                    hd: [
                      0,
                      1,
                      2,
                      3,
                      4
                    ],
                    tl: /* [] */0
                  })
            };
    })
];

var list_suites_1 = {
  hd: [
    "length2",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: 5,
                _1: Stdlib__List.length({
                      hd: 0,
                      tl: {
                        hd: 1,
                        tl: {
                          hd: 2,
                          tl: {
                            hd: 3,
                            tl: {
                              hd: 4,
                              tl: /* [] */0
                            }
                          }
                        }
                      }
                    })
              };
      })
  ],
  tl: {
    hd: [
      "long_length",
      (function (param) {
          return {
                  TAG: /* Eq */0,
                  _0: 30000,
                  _1: Stdlib__List.length(Stdlib__Array.to_list(Stdlib__Array.init(30000, (function (param) {
                                  return 0;
                                }))))
                };
        })
    ],
    tl: {
      hd: [
        "sort",
        (function (param) {
            return {
                    TAG: /* Eq */0,
                    _0: Stdlib__List.sort(Caml.caml_int_compare, {
                          hd: 4,
                          tl: {
                            hd: 1,
                            tl: {
                              hd: 2,
                              tl: {
                                hd: 3,
                                tl: /* [] */0
                              }
                            }
                          }
                        }),
                    _1: {
                      hd: 1,
                      tl: {
                        hd: 2,
                        tl: {
                          hd: 3,
                          tl: {
                            hd: 4,
                            tl: /* [] */0
                          }
                        }
                      }
                    }
                  };
          })
      ],
      tl: /* [] */0
    }
  }
};

var list_suites = {
  hd: list_suites_0,
  tl: list_suites_1
};

Mt.from_pair_suites("List_test", list_suites);

exports.list_suites = list_suites;
/*  Not a pure module */
