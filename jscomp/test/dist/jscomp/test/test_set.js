// Generated by Melange
'use strict';

let Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
let Curry = require("melange.js/curry.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__List = require("melange/list.js");

function Make(Ord) {
  const height = function (param) {
    if (param) {
      return param._3;
    } else {
      return 0;
    }
  };
  const create = function (l, v, r) {
    const hl = l ? l._3 : 0;
    const hr = r ? r._3 : 0;
    return /* Node */{
            _0: l,
            _1: v,
            _2: r,
            _3: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
          };
  };
  const bal = function (l, v, r) {
    const hl = l ? l._3 : 0;
    const hr = r ? r._3 : 0;
    if (hl > (hr + 2 | 0)) {
      if (l) {
        const lr = l._2;
        const lv = l._1;
        const ll = l._0;
        if (height(ll) >= height(lr)) {
          return create(ll, lv, create(lr, v, r));
        }
        if (lr) {
          return create(create(ll, lv, lr._0), lr._1, create(lr._2, v, r));
        }
        throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                  MEL_EXN_ID: "Invalid_argument",
                  _1: "Set.bal"
                });
      }
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "Set.bal"
              });
    }
    if (hr <= (hl + 2 | 0)) {
      return /* Node */{
              _0: l,
              _1: v,
              _2: r,
              _3: hl >= hr ? hl + 1 | 0 : hr + 1 | 0
            };
    }
    if (r) {
      const rr = r._2;
      const rv = r._1;
      const rl = r._0;
      if (height(rr) >= height(rl)) {
        return create(create(l, v, rl), rv, rr);
      }
      if (rl) {
        return create(create(l, v, rl._0), rl._1, create(rl._2, rv, rr));
      }
      throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
                MEL_EXN_ID: "Invalid_argument",
                _1: "Set.bal"
              });
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Set.bal"
            });
  };
  const add = function (x, t) {
    if (!t) {
      return /* Node */{
              _0: /* Empty */0,
              _1: x,
              _2: /* Empty */0,
              _3: 1
            };
    }
    const r = t._2;
    const v = t._1;
    const l = t._0;
    const c = Curry._2(Ord.compare, x, v);
    if (c === 0) {
      return t;
    } else if (c < 0) {
      return bal(add(x, l), v, r);
    } else {
      return bal(l, v, add(x, r));
    }
  };
  const singleton = function (x) {
    return /* Node */{
            _0: /* Empty */0,
            _1: x,
            _2: /* Empty */0,
            _3: 1
          };
  };
  const add_min_element = function (v, param) {
    if (param) {
      return bal(add_min_element(v, param._0), param._1, param._2);
    } else {
      return singleton(v);
    }
  };
  const add_max_element = function (v, param) {
    if (param) {
      return bal(param._0, param._1, add_max_element(v, param._2));
    } else {
      return singleton(v);
    }
  };
  const join = function (l, v, r) {
    if (!l) {
      return add_min_element(v, r);
    }
    if (!r) {
      return add_max_element(v, l);
    }
    const rh = r._3;
    const lh = l._3;
    if (lh > (rh + 2 | 0)) {
      return bal(l._0, l._1, join(l._2, v, r));
    } else if (rh > (lh + 2 | 0)) {
      return bal(join(l, v, r._0), r._1, r._2);
    } else {
      return create(l, v, r);
    }
  };
  const min_elt = function (_param) {
    while(true) {
      const param = _param;
      if (param) {
        const l = param._0;
        if (!l) {
          return param._1;
        }
        _param = l;
        continue ;
      }
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
                MEL_EXN_ID: Stdlib.Not_found
              });
    };
  };
  const max_elt = function (_param) {
    while(true) {
      const param = _param;
      if (param) {
        if (!param._2) {
          return param._1;
        }
        _param = param._2;
        continue ;
      }
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
                MEL_EXN_ID: Stdlib.Not_found
              });
    };
  };
  const remove_min_elt = function (param) {
    if (param) {
      const l = param._0;
      if (l) {
        return bal(remove_min_elt(l), param._1, param._2);
      } else {
        return param._2;
      }
    }
    throw new Caml_js_exceptions.MelangeError("Invalid_argument", {
              MEL_EXN_ID: "Invalid_argument",
              _1: "Set.remove_min_elt"
            });
  };
  const merge = function (t1, t2) {
    if (t1) {
      if (t2) {
        return bal(t1, min_elt(t2), remove_min_elt(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  const concat = function (t1, t2) {
    if (t1) {
      if (t2) {
        return join(t1, min_elt(t2), remove_min_elt(t2));
      } else {
        return t1;
      }
    } else {
      return t2;
    }
  };
  const split = function (x, param) {
    if (!param) {
      return [
              /* Empty */0,
              false,
              /* Empty */0
            ];
    }
    const r = param._2;
    const v = param._1;
    const l = param._0;
    const c = Curry._2(Ord.compare, x, v);
    if (c === 0) {
      return [
              l,
              true,
              r
            ];
    }
    if (c < 0) {
      const match = split(x, l);
      return [
              match[0],
              match[1],
              join(match[2], v, r)
            ];
    }
    const match$1 = split(x, r);
    return [
            join(l, v, match$1[0]),
            match$1[1],
            match$1[2]
          ];
  };
  const is_empty = function (param) {
    if (param) {
      return false;
    } else {
      return true;
    }
  };
  const mem = function (x, _param) {
    while(true) {
      const param = _param;
      if (!param) {
        return false;
      }
      const c = Curry._2(Ord.compare, x, param._1);
      if (c === 0) {
        return true;
      }
      _param = c < 0 ? param._0 : param._2;
      continue ;
    };
  };
  const remove = function (x, param) {
    if (!param) {
      return /* Empty */0;
    }
    const r = param._2;
    const v = param._1;
    const l = param._0;
    const c = Curry._2(Ord.compare, x, v);
    if (c === 0) {
      return merge(l, r);
    } else if (c < 0) {
      return bal(remove(x, l), v, r);
    } else {
      return bal(l, v, remove(x, r));
    }
  };
  const union = function (s1, s2) {
    if (!s1) {
      return s2;
    }
    if (!s2) {
      return s1;
    }
    const h2 = s2._3;
    const v2 = s2._1;
    const h1 = s1._3;
    const v1 = s1._1;
    if (h1 >= h2) {
      if (h2 === 1) {
        return add(v2, s1);
      }
      const match = split(v1, s2);
      return join(union(s1._0, match[0]), v1, union(s1._2, match[2]));
    }
    if (h1 === 1) {
      return add(v1, s2);
    }
    const match$1 = split(v2, s1);
    return join(union(match$1[0], s2._0), v2, union(match$1[2], s2._2));
  };
  const inter = function (s1, s2) {
    if (!s1) {
      return /* Empty */0;
    }
    if (!s2) {
      return /* Empty */0;
    }
    const r1 = s1._2;
    const v1 = s1._1;
    const l1 = s1._0;
    const match = split(v1, s2);
    const l2 = match[0];
    if (match[1]) {
      return join(inter(l1, l2), v1, inter(r1, match[2]));
    } else {
      return concat(inter(l1, l2), inter(r1, match[2]));
    }
  };
  const diff = function (s1, s2) {
    if (!s1) {
      return /* Empty */0;
    }
    if (!s2) {
      return s1;
    }
    const r1 = s1._2;
    const v1 = s1._1;
    const l1 = s1._0;
    const match = split(v1, s2);
    const l2 = match[0];
    if (match[1]) {
      return concat(diff(l1, l2), diff(r1, match[2]));
    } else {
      return join(diff(l1, l2), v1, diff(r1, match[2]));
    }
  };
  const cons_enum = function (_s, _e) {
    while(true) {
      const e = _e;
      const s = _s;
      if (!s) {
        return e;
      }
      _e = /* More */{
        _0: s._1,
        _1: s._2,
        _2: e
      };
      _s = s._0;
      continue ;
    };
  };
  const compare_aux = function (_e1, _e2) {
    while(true) {
      const e2 = _e2;
      const e1 = _e1;
      if (!e1) {
        if (e2) {
          return -1;
        } else {
          return 0;
        }
      }
      if (!e2) {
        return 1;
      }
      const c = Curry._2(Ord.compare, e1._0, e2._0);
      if (c !== 0) {
        return c;
      }
      _e2 = cons_enum(e2._1, e2._2);
      _e1 = cons_enum(e1._1, e1._2);
      continue ;
    };
  };
  const compare = function (s1, s2) {
    return compare_aux(cons_enum(s1, /* End */0), cons_enum(s2, /* End */0));
  };
  const equal = function (s1, s2) {
    return compare(s1, s2) === 0;
  };
  const subset = function (_s1, _s2) {
    while(true) {
      const s2 = _s2;
      const s1 = _s1;
      if (!s1) {
        return true;
      }
      if (!s2) {
        return false;
      }
      const r2 = s2._2;
      const l2 = s2._0;
      const r1 = s1._2;
      const v1 = s1._1;
      const l1 = s1._0;
      const c = Curry._2(Ord.compare, v1, s2._1);
      if (c === 0) {
        if (!subset(l1, l2)) {
          return false;
        }
        _s2 = r2;
        _s1 = r1;
        continue ;
      }
      if (c < 0) {
        if (!subset(/* Node */{
                _0: l1,
                _1: v1,
                _2: /* Empty */0,
                _3: 0
              }, l2)) {
          return false;
        }
        _s1 = r1;
        continue ;
      }
      if (!subset(/* Node */{
              _0: /* Empty */0,
              _1: v1,
              _2: r1,
              _3: 0
            }, r2)) {
        return false;
      }
      _s1 = l1;
      continue ;
    };
  };
  const iter = function (f, _param) {
    while(true) {
      const param = _param;
      if (!param) {
        return ;
      }
      iter(f, param._0);
      Curry._1(f, param._1);
      _param = param._2;
      continue ;
    };
  };
  const fold = function (f, _s, _accu) {
    while(true) {
      const accu = _accu;
      const s = _s;
      if (!s) {
        return accu;
      }
      _accu = Curry._2(f, s._1, fold(f, s._0, accu));
      _s = s._2;
      continue ;
    };
  };
  const for_all = function (p, _param) {
    while(true) {
      const param = _param;
      if (!param) {
        return true;
      }
      if (!Curry._1(p, param._1)) {
        return false;
      }
      if (!for_all(p, param._0)) {
        return false;
      }
      _param = param._2;
      continue ;
    };
  };
  const exists = function (p, _param) {
    while(true) {
      const param = _param;
      if (!param) {
        return false;
      }
      if (Curry._1(p, param._1)) {
        return true;
      }
      if (exists(p, param._0)) {
        return true;
      }
      _param = param._2;
      continue ;
    };
  };
  const filter = function (p, param) {
    if (!param) {
      return /* Empty */0;
    }
    const v = param._1;
    const l$p = filter(p, param._0);
    const pv = Curry._1(p, v);
    const r$p = filter(p, param._2);
    if (pv) {
      return join(l$p, v, r$p);
    } else {
      return concat(l$p, r$p);
    }
  };
  const partition = function (p, param) {
    if (!param) {
      return [
              /* Empty */0,
              /* Empty */0
            ];
    }
    const v = param._1;
    const match = partition(p, param._0);
    const lf = match[1];
    const lt = match[0];
    const pv = Curry._1(p, v);
    const match$1 = partition(p, param._2);
    const rf = match$1[1];
    const rt = match$1[0];
    if (pv) {
      return [
              join(lt, v, rt),
              concat(lf, rf)
            ];
    } else {
      return [
              concat(lt, rt),
              join(lf, v, rf)
            ];
    }
  };
  const cardinal = function (param) {
    if (param) {
      return (cardinal(param._0) + 1 | 0) + cardinal(param._2) | 0;
    } else {
      return 0;
    }
  };
  const elements_aux = function (_accu, _param) {
    while(true) {
      const param = _param;
      const accu = _accu;
      if (!param) {
        return accu;
      }
      _param = param._0;
      _accu = {
        hd: param._1,
        tl: elements_aux(accu, param._2)
      };
      continue ;
    };
  };
  const elements = function (s) {
    return elements_aux(/* [] */0, s);
  };
  const find = function (x, _param) {
    while(true) {
      const param = _param;
      if (param) {
        const v = param._1;
        const c = Curry._2(Ord.compare, x, v);
        if (c === 0) {
          return v;
        }
        _param = c < 0 ? param._0 : param._2;
        continue ;
      }
      throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
                MEL_EXN_ID: Stdlib.Not_found
              });
    };
  };
  const of_sorted_list = function (l) {
    const sub = function (n, l) {
      switch (n) {
        case 0 :
            return [
                    /* Empty */0,
                    l
                  ];
        case 1 :
            if (l) {
              return [
                      /* Node */{
                        _0: /* Empty */0,
                        _1: l.hd,
                        _2: /* Empty */0,
                        _3: 1
                      },
                      l.tl
                    ];
            }
            break;
        case 2 :
            if (l) {
              const match = l.tl;
              if (match) {
                return [
                        /* Node */{
                          _0: /* Node */{
                            _0: /* Empty */0,
                            _1: l.hd,
                            _2: /* Empty */0,
                            _3: 1
                          },
                          _1: match.hd,
                          _2: /* Empty */0,
                          _3: 2
                        },
                        match.tl
                      ];
              }
              
            }
            break;
        case 3 :
            if (l) {
              const match$1 = l.tl;
              if (match$1) {
                const match$2 = match$1.tl;
                if (match$2) {
                  return [
                          /* Node */{
                            _0: /* Node */{
                              _0: /* Empty */0,
                              _1: l.hd,
                              _2: /* Empty */0,
                              _3: 1
                            },
                            _1: match$1.hd,
                            _2: /* Node */{
                              _0: /* Empty */0,
                              _1: match$2.hd,
                              _2: /* Empty */0,
                              _3: 1
                            },
                            _3: 2
                          },
                          match$2.tl
                        ];
                }
                
              }
              
            }
            break;
        default:
          
      }
      const nl = n / 2 | 0;
      const match$3 = sub(nl, l);
      const l$1 = match$3[1];
      if (l$1) {
        const match$4 = sub((n - nl | 0) - 1 | 0, l$1.tl);
        return [
                create(match$3[0], l$1.hd, match$4[0]),
                match$4[1]
              ];
      }
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/test_set.ml",
                  372,
                  18
                ]
              });
    };
    return sub(Stdlib__List.length(l), l)[0];
  };
  const of_list = function (l) {
    if (!l) {
      return /* Empty */0;
    }
    const match = l.tl;
    const x0 = l.hd;
    if (!match) {
      return singleton(x0);
    }
    const match$1 = match.tl;
    const x1 = match.hd;
    if (!match$1) {
      return add(x1, singleton(x0));
    }
    const match$2 = match$1.tl;
    const x2 = match$1.hd;
    if (!match$2) {
      return add(x2, add(x1, singleton(x0)));
    }
    const match$3 = match$2.tl;
    const x3 = match$2.hd;
    if (match$3) {
      if (match$3.tl) {
        return of_sorted_list(Stdlib__List.sort_uniq(Ord.compare, l));
      } else {
        return add(match$3.hd, add(x3, add(x2, add(x1, singleton(x0)))));
      }
    } else {
      return add(x3, add(x2, add(x1, singleton(x0))));
    }
  };
  return {
          height: height,
          create: create,
          bal: bal,
          add: add,
          singleton: singleton,
          add_min_element: add_min_element,
          add_max_element: add_max_element,
          join: join,
          min_elt: min_elt,
          max_elt: max_elt,
          remove_min_elt: remove_min_elt,
          merge: merge,
          concat: concat,
          split: split,
          empty: /* Empty */0,
          is_empty: is_empty,
          mem: mem,
          remove: remove,
          union: union,
          inter: inter,
          diff: diff,
          cons_enum: cons_enum,
          compare_aux: compare_aux,
          compare: compare,
          equal: equal,
          subset: subset,
          iter: iter,
          fold: fold,
          for_all: for_all,
          exists: exists,
          filter: filter,
          partition: partition,
          cardinal: cardinal,
          elements_aux: elements_aux,
          elements: elements,
          choose: min_elt,
          find: find,
          of_sorted_list: of_sorted_list,
          of_list: of_list
        };
}

const N = {
  a: 3
};

exports.Make = Make;
exports.N = N;
/* No side effect */
