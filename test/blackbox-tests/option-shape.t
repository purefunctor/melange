
  $ . ./setup.sh
  $ cat > x.ml <<EOF
  > module X = struct
  >   type 'a t = 'a option = None | Some of 'a
  > end
  > let () = match X.None with Some _ -> Js.log "A BUG!" | None -> Js.log "OK"
  > EOF

  $ melc -ppx melppx x.ml
  // Generated by Melange
  'use strict';
  
  
  var X = {};
  
  console.log("OK");
  
  exports.X = X;
  /*  Not a pure module */