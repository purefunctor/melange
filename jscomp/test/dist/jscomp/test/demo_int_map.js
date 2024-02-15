// Generated by Melange
'use strict';

let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Caml_option = require("melange.js/caml_option.js");
let Curry = require("melange.js/curry.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__List = require("melange/list.js");
let Stdlib__Seq = require("melange/seq.js");

function compare(x, y) {
  return x - y | 0;
}

const funarg = {
  compare: compare
};

function height(param) {
  if (param) {
    return param.h;
  } else {
    return 0;
  }
}

function create(l, x, d, r) {
  const hl = height(l);
  const hr = height(r);
  return /* Node */{
          l: l,
          v: x,
          d: d,
          r: r,
          h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
        };
}

function bal(l, x, d, r) {
  const hl = l ? l.h : 0;
  const hr = r ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    if (l) {
      const lr = l.r;
      const ld = l.d;
      const lv = l.v;
      const ll = l.l;
      if (height(ll) >= height(lr)) {
        return create(ll, lv, ld, create(lr, x, d, r));
      }
      if (lr) {
        return create(create(ll, lv, ld, lr.l), lr.v, lr.d, create(lr.r, x, d, r));
      }
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "Map.bal"
              });
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  if (hr <= (hl + 2 | 0)) {
    return /* Node */{
            l: l,
            v: x,
            d: d,
            r: r,
            h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  }
  if (r) {
    const rr = r.r;
    const rd = r.d;
    const rv = r.v;
    const rl = r.l;
    if (height(rr) >= height(rl)) {
      return create(create(l, x, d, rl), rv, rd, rr);
    }
    if (rl) {
      return create(create(l, x, d, rl.l), rl.v, rl.d, create(rl.r, rv, rd, rr));
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Map.bal"
            });
  }
  throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
            MEL_EXN_ID: "Invalid_argument",
            _1: "Map.bal"
          });
}

function add(x, data, m) {
  if (!m) {
    return /* Node */{
            l: /* Empty */0,
            v: x,
            d: data,
            r: /* Empty */0,
            h: 1
          };
  }
  const r = m.r;
  const d = m.d;
  const v = m.v;
  const l = m.l;
  const c = Curry._2(funarg.compare, x, v);
  if (c === 0) {
    if (d === data) {
      return m;
    } else {
      return /* Node */{
              l: l,
              v: x,
              d: data,
              r: r,
              h: m.h
            };
    }
  }
  if (c < 0) {
    const ll = add(x, data, l);
    if (l === ll) {
      return m;
    } else {
      return bal(ll, v, d, r);
    }
  }
  const rr = add(x, data, r);
  if (r === rr) {
    return m;
  } else {
    return bal(l, v, d, rr);
  }
}

function find(x, _param) {
  while(true) {
    const param = _param;
    if (param) {
      const c = Curry._2(funarg.compare, x, param.v);
      if (c === 0) {
        return param.d;
      }
      _param = c < 0 ? param.l : param.r;
      continue ;
    }
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  };
}

function test(param) {
  let m = /* Empty */0;
  for(let i = 0; i <= 1000000; ++i){
    m = Curry._3(add, i, i, m);
  }
  for(let i$1 = 0; i$1 <= 1000000; ++i$1){
    Curry._2(find, i$1, m);
  }
}

test(undefined);

/* IntMap Not a pure module */
