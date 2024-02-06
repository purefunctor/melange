// Generated by Melange
'use strict';

var Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
var Caml_obj = require("melange.js/caml_obj.js");
var Curry = require("melange.js/curry.js");
var Stdlib__List = require("melange/list.js");
var Stdlib__Queue = require("melange/queue.js");

function to_list(q) {
  return Stdlib__List.rev(Stdlib__Queue.fold((function (l, x) {
                    return {
                            hd: x,
                            tl: l
                          };
                  }), /* [] */0, q));
}

var Q = {
  Empty: Stdlib__Queue.Empty,
  create: Stdlib__Queue.create,
  add: Stdlib__Queue.add,
  push: Stdlib__Queue.push,
  take: Stdlib__Queue.take,
  take_opt: Stdlib__Queue.take_opt,
  pop: Stdlib__Queue.pop,
  peek: Stdlib__Queue.peek,
  peek_opt: Stdlib__Queue.peek_opt,
  top: Stdlib__Queue.top,
  clear: Stdlib__Queue.clear,
  copy: Stdlib__Queue.copy,
  is_empty: Stdlib__Queue.is_empty,
  length: Stdlib__Queue.length,
  iter: Stdlib__Queue.iter,
  fold: Stdlib__Queue.fold,
  transfer: Stdlib__Queue.transfer,
  to_seq: Stdlib__Queue.to_seq,
  add_seq: Stdlib__Queue.add_seq,
  of_seq: Stdlib__Queue.of_seq,
  to_list: to_list
};

function does_raise(f, q) {
  try {
    Curry._1(f, q);
    return false;
  }
  catch (raw_exn){
    var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib__Queue.Empty) {
      return true;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

var q = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

if (!(Caml_obj.caml_equal(to_list(q), /* [] */0) && q.length === 0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              28,
              25
            ]
          });
}

Stdlib__Queue.add(1, q);

if (!(Caml_obj.caml_equal(to_list(q), {
          hd: 1,
          tl: /* [] */0
        }) && q.length === 1)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              29,
              25
            ]
          });
}

Stdlib__Queue.add(2, q);

if (!(Caml_obj.caml_equal(to_list(q), {
          hd: 1,
          tl: {
            hd: 2,
            tl: /* [] */0
          }
        }) && q.length === 2)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              30,
              25
            ]
          });
}

Stdlib__Queue.add(3, q);

if (!(Caml_obj.caml_equal(to_list(q), {
          hd: 1,
          tl: {
            hd: 2,
            tl: {
              hd: 3,
              tl: /* [] */0
            }
          }
        }) && q.length === 3)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              31,
              25
            ]
          });
}

Stdlib__Queue.add(4, q);

if (!(Caml_obj.caml_equal(to_list(q), {
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
        }) && q.length === 4)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              32,
              25
            ]
          });
}

if (Stdlib__Queue.take(q) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              33,
              2
            ]
          });
}

if (!(Caml_obj.caml_equal(to_list(q), {
          hd: 2,
          tl: {
            hd: 3,
            tl: {
              hd: 4,
              tl: /* [] */0
            }
          }
        }) && q.length === 3)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              33,
              25
            ]
          });
}

if (Stdlib__Queue.take(q) !== 2) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              34,
              2
            ]
          });
}

if (!(Caml_obj.caml_equal(to_list(q), {
          hd: 3,
          tl: {
            hd: 4,
            tl: /* [] */0
          }
        }) && q.length === 2)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              34,
              25
            ]
          });
}

if (Stdlib__Queue.take(q) !== 3) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              35,
              2
            ]
          });
}

if (!(Caml_obj.caml_equal(to_list(q), {
          hd: 4,
          tl: /* [] */0
        }) && q.length === 1)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              35,
              25
            ]
          });
}

if (Stdlib__Queue.take(q) !== 4) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              36,
              2
            ]
          });
}

if (!(Caml_obj.caml_equal(to_list(q), /* [] */0) && q.length === 0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              36,
              25
            ]
          });
}

if (!does_raise(Stdlib__Queue.take, q)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              37,
              2
            ]
          });
}

var q$1 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

Stdlib__Queue.add(1, q$1);

if (Stdlib__Queue.take(q$1) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              42,
              13
            ]
          });
}

if (!does_raise(Stdlib__Queue.take, q$1)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              42,
              36
            ]
          });
}

Stdlib__Queue.add(2, q$1);

if (Stdlib__Queue.take(q$1) !== 2) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              43,
              13
            ]
          });
}

if (!does_raise(Stdlib__Queue.take, q$1)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              43,
              36
            ]
          });
}

if (q$1.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              44,
              2
            ]
          });
}

var q$2 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

Stdlib__Queue.add(1, q$2);

if (Stdlib__Queue.peek(q$2) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              49,
              13
            ]
          });
}

Stdlib__Queue.add(2, q$2);

if (Stdlib__Queue.peek(q$2) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              50,
              13
            ]
          });
}

Stdlib__Queue.add(3, q$2);

if (Stdlib__Queue.peek(q$2) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              51,
              13
            ]
          });
}

if (Stdlib__Queue.peek(q$2) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              52,
              2
            ]
          });
}

if (Stdlib__Queue.take(q$2) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              52,
              25
            ]
          });
}

if (Stdlib__Queue.peek(q$2) !== 2) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              53,
              2
            ]
          });
}

if (Stdlib__Queue.take(q$2) !== 2) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              53,
              25
            ]
          });
}

if (Stdlib__Queue.peek(q$2) !== 3) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              54,
              2
            ]
          });
}

if (Stdlib__Queue.take(q$2) !== 3) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              54,
              25
            ]
          });
}

if (!does_raise(Stdlib__Queue.peek, q$2)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              55,
              2
            ]
          });
}

if (!does_raise(Stdlib__Queue.peek, q$2)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              56,
              2
            ]
          });
}

var q$3 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

for(var i = 1; i <= 10; ++i){
  Stdlib__Queue.add(i, q$3);
}

Stdlib__Queue.clear(q$3);

if (q$3.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              63,
              2
            ]
          });
}

if (!does_raise(Stdlib__Queue.take, q$3)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              64,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(q$3, {
        length: 0,
        first: /* Nil */0,
        last: /* Nil */0
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              65,
              2
            ]
          });
}

Stdlib__Queue.add(42, q$3);

if (Stdlib__Queue.take(q$3) !== 42) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              67,
              2
            ]
          });
}

var q1 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

for(var i$1 = 1; i$1 <= 10; ++i$1){
  Stdlib__Queue.add(i$1, q1);
}

var q2 = Stdlib__Queue.copy(q1);

if (!Caml_obj.caml_equal(to_list(q1), {
        hd: 1,
        tl: {
          hd: 2,
          tl: {
            hd: 3,
            tl: {
              hd: 4,
              tl: {
                hd: 5,
                tl: {
                  hd: 6,
                  tl: {
                    hd: 7,
                    tl: {
                      hd: 8,
                      tl: {
                        hd: 9,
                        tl: {
                          hd: 10,
                          tl: /* [] */0
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              74,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2), {
        hd: 1,
        tl: {
          hd: 2,
          tl: {
            hd: 3,
            tl: {
              hd: 4,
              tl: {
                hd: 5,
                tl: {
                  hd: 6,
                  tl: {
                    hd: 7,
                    tl: {
                      hd: 8,
                      tl: {
                        hd: 9,
                        tl: {
                          hd: 10,
                          tl: /* [] */0
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              75,
              2
            ]
          });
}

if (q1.length !== 10) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              76,
              2
            ]
          });
}

if (q2.length !== 10) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              77,
              2
            ]
          });
}

for(var i$2 = 1; i$2 <= 10; ++i$2){
  if (Stdlib__Queue.take(q1) !== i$2) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/libqueue_test.ml",
                79,
                4
              ]
            });
  }
  
}

for(var i$3 = 1; i$3 <= 10; ++i$3){
  if (Stdlib__Queue.take(q2) !== i$3) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/libqueue_test.ml",
                82,
                4
              ]
            });
  }
  
}

var q$4 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

if (q$4.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              88,
              2
            ]
          });
}

for(var i$4 = 1; i$4 <= 10; ++i$4){
  Stdlib__Queue.add(i$4, q$4);
  if (q$4.length !== i$4) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/libqueue_test.ml",
                91,
                4
              ]
            });
  }
  if (q$4.length === 0) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/libqueue_test.ml",
                92,
                4
              ]
            });
  }
  
}

for(var i$5 = 10; i$5 >= 1; --i$5){
  if (q$4.length !== i$5) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/libqueue_test.ml",
                95,
                4
              ]
            });
  }
  if (q$4.length === 0) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/libqueue_test.ml",
                96,
                4
              ]
            });
  }
  Stdlib__Queue.take(q$4);
}

if (q$4.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              99,
              2
            ]
          });
}

if (q$4.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              100,
              2
            ]
          });
}

var q$5 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

for(var i$6 = 1; i$6 <= 10; ++i$6){
  Stdlib__Queue.add(i$6, q$5);
}

var i$7 = {
  contents: 1
};

Stdlib__Queue.iter((function (j) {
        if (i$7.contents !== j) {
          throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                    MEL_EXN_ID: "Assert_failure",
                    _1: [
                      "jscomp/test/libqueue_test.ml",
                      107,
                      19
                    ]
                  });
        }
        i$7.contents = i$7.contents + 1 | 0;
      }), q$5);

var q1$1 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

var q2$1 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

if (q1$1.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              112,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$1), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              112,
              28
            ]
          });
}

if (q2$1.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              113,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$1), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              113,
              28
            ]
          });
}

Stdlib__Queue.transfer(q1$1, q2$1);

if (q1$1.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              115,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$1), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              115,
              28
            ]
          });
}

if (q2$1.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              116,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$1), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              116,
              28
            ]
          });
}

var q1$2 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

var q2$2 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

for(var i$8 = 1; i$8 <= 4; ++i$8){
  Stdlib__Queue.add(i$8, q1$2);
}

if (q1$2.length !== 4) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              122,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$2), {
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
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              122,
              28
            ]
          });
}

if (q2$2.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              123,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$2), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              123,
              28
            ]
          });
}

Stdlib__Queue.transfer(q1$2, q2$2);

if (q1$2.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              125,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$2), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              125,
              28
            ]
          });
}

if (q2$2.length !== 4) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              126,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$2), {
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
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              126,
              28
            ]
          });
}

var q1$3 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

var q2$3 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

for(var i$9 = 5; i$9 <= 8; ++i$9){
  Stdlib__Queue.add(i$9, q2$3);
}

if (q1$3.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              132,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$3), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              132,
              28
            ]
          });
}

if (q2$3.length !== 4) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              133,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$3), {
        hd: 5,
        tl: {
          hd: 6,
          tl: {
            hd: 7,
            tl: {
              hd: 8,
              tl: /* [] */0
            }
          }
        }
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              133,
              28
            ]
          });
}

Stdlib__Queue.transfer(q1$3, q2$3);

if (q1$3.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              135,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$3), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              135,
              28
            ]
          });
}

if (q2$3.length !== 4) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              136,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$3), {
        hd: 5,
        tl: {
          hd: 6,
          tl: {
            hd: 7,
            tl: {
              hd: 8,
              tl: /* [] */0
            }
          }
        }
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              136,
              28
            ]
          });
}

var q1$4 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

var q2$4 = {
  length: 0,
  first: /* Nil */0,
  last: /* Nil */0
};

for(var i$10 = 1; i$10 <= 4; ++i$10){
  Stdlib__Queue.add(i$10, q1$4);
}

for(var i$11 = 5; i$11 <= 8; ++i$11){
  Stdlib__Queue.add(i$11, q2$4);
}

if (q1$4.length !== 4) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              143,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$4), {
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
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              143,
              28
            ]
          });
}

if (q2$4.length !== 4) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              144,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$4), {
        hd: 5,
        tl: {
          hd: 6,
          tl: {
            hd: 7,
            tl: {
              hd: 8,
              tl: /* [] */0
            }
          }
        }
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              144,
              28
            ]
          });
}

Stdlib__Queue.transfer(q1$4, q2$4);

if (q1$4.length !== 0) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              146,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q1$4), /* [] */0)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              146,
              28
            ]
          });
}

if (q2$4.length !== 8) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              147,
              2
            ]
          });
}

if (!Caml_obj.caml_equal(to_list(q2$4), {
        hd: 5,
        tl: {
          hd: 6,
          tl: {
            hd: 7,
            tl: {
              hd: 8,
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
            }
          }
        }
      })) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/libqueue_test.ml",
              147,
              28
            ]
          });
}

console.log("OK");

exports.Q = Q;
exports.does_raise = does_raise;
/* q Not a pure module */
