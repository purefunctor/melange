// Generated by Melange
'use strict';

let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Caml_oo_curry = require("melange.js/caml_oo_curry.js");
let CamlinternalOO = require("melange/camlinternalOO.js");

const shared = ["add"];

const $$class = CamlinternalOO.create_table([
      "hi",
      "id1",
      "id2",
      "hello"
    ]);

const ids = CamlinternalOO.get_method_labels($$class, [
      "id2",
      "id1",
      "hi",
      "hello"
    ]);

const id2 = ids[0];

const id1 = ids[1];

const hi = ids[2];

const hello = ids[3];

CamlinternalOO.set_methods($$class, [
      hi,
      (function (self$1, v, z) {
          return v + z | 0;
        }),
      id1,
      (function (self$1) {
          return 3;
        }),
      id2,
      (function (self$1) {
          return 4;
        }),
      hello,
      (function (self$1, v) {
          return v;
        })
    ]);

CamlinternalOO.init_class($$class);

const u = CamlinternalOO.create_object_opt(undefined, $$class);

const $$class$1 = CamlinternalOO.create_table(["id"]);

const id = CamlinternalOO.get_method_label($$class$1, "id");

CamlinternalOO.set_method($$class$1, id, (function (self$2) {
        return "uu";
      }));

CamlinternalOO.init_class($$class$1);

const uu = CamlinternalOO.create_object_opt(undefined, $$class$1);

const $$class$2 = CamlinternalOO.create_table(shared);

const add = CamlinternalOO.get_method_label($$class$2, "add");

CamlinternalOO.set_method($$class$2, add, (function (self$3, x, y) {
        return x + y | 0;
      }));

CamlinternalOO.init_class($$class$2);

const uuu = CamlinternalOO.create_object_opt(undefined, $$class$2);

const $$class$3 = CamlinternalOO.create_table(shared);

const add$1 = CamlinternalOO.get_method_label($$class$3, "add");

CamlinternalOO.set_method($$class$3, add$1, (function (self$4, x, y) {
        return x + y | 0;
      }));

CamlinternalOO.init_class($$class$3);

const v = CamlinternalOO.create_object_opt(undefined, $$class$3);

function test(param) {
  if (Caml_oo_curry.js1(23515, 1, uu) !== "uu") {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/test_simple_obj.ml",
                21,
                4
              ]
            });
  }
  if (Caml_oo_curry.js3(4846113, 2, uuu, 1, 20) !== 21) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/test_simple_obj.ml",
                22,
                4
              ]
            });
  }
  if (Caml_oo_curry.js3(4846113, 3, v, 3, 7) !== 10) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/test_simple_obj.ml",
                23,
                4
              ]
            });
  }
  if (Caml_oo_curry.js1(5243894, 4, u) !== 3) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/test_simple_obj.ml",
                25,
                4
              ]
            });
  }
  if (Caml_oo_curry.js1(5243895, 5, u) !== 4) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/test_simple_obj.ml",
                26,
                4
              ]
            });
  }
  if (Caml_oo_curry.js3(23297, 6, u, 1, 2) !== 3) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/test_simple_obj.ml",
                27,
                4
              ]
            });
  }
  if (Caml_oo_curry.js2(616641298, 7, u, 32) === 32) {
    return ;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/test_simple_obj.ml",
              28,
              4
            ]
          });
}

exports.u = u;
exports.uu = uu;
exports.uuu = uuu;
exports.v = v;
exports.test = test;
/* class Not a pure module */
