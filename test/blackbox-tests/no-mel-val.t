Demonstrate `@@mel.val` is redundant and unnecessary

  $ . ./setup.sh

  $ cat > x.ml <<EOF
  > type document
  > external doc : unit -> document = "" [@@mel.val "document"]
  > external log : 'a -> unit = "log" [@@mel.val] [@@mel.scope "console"]
  > let x = doc()
  > let () = log "hello"
  > EOF

  $ melc -ppx melppx x.ml
  File "x.ml", line 2, characters 40-47:
  2 | external doc : unit -> document = "" [@@mel.val "document"]
                                              ^^^^^^^
  Alert deprecated: `[@mel.val]' attributes are redundant and will be removed in the next release.
  Consider removing them from any external declarations.
  File "x.ml", line 3, characters 37-44:
  3 | external log : 'a -> unit = "log" [@@mel.val] [@@mel.scope "console"]
                                           ^^^^^^^
  Alert deprecated: `[@mel.val]' attributes are redundant and will be removed in the next release.
  Consider removing them from any external declarations.
  // Generated by Melange
  'use strict';
  
  
  var x = document();
  
  console.log("hello");
  
  exports.x = x;
  /* x Not a pure module */

Demonstrate the same payload can be achieved with `@@mel.scope`

  $ cat > x.ml <<EOF
  > external utcWithYM : year:float -> month:float -> unit -> float = ""
  >   [@@mel.val "Date.UTC"]
  > let x = utcWithYM ~year:2023. ~month:8. ()
  > external utcWithYM : year:float -> month:float -> unit -> float = "UTC"
  >   [@@mel.scope "Date"]
  > let y = utcWithYM ~year:2023. ~month:8. ()
  > EOF

  $ melc -ppx melppx x.ml
  File "x.ml", line 2, characters 5-12:
  2 |   [@@mel.val "Date.UTC"]
           ^^^^^^^
  Alert deprecated: `[@mel.val]' attributes are redundant and will be removed in the next release.
  Consider removing them from any external declarations.
  // Generated by Melange
  'use strict';
  
  
  var x = Date.UTC(2023, 8);
  
  var y = Date.UTC(2023, 8);
  
  exports.x = x;
  exports.y = y;
  /* x Not a pure module */
