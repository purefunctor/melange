Generate runtime cmijs for building against melange libs from the playground

  $ find $DUNE_SOURCEROOT/_build/default/jscomp/stdlib/.stdlib.objs/melange -name "*.cmi" -or -name "*.cmj" | xargs js_of_ocaml build-fs -o stdlib-cmijs.js
  $ find $DUNE_SOURCEROOT/_build/default/jscomp/runtime/.runtime.objs/melange -name "*.cmi" -or -name "*.cmj" | xargs js_of_ocaml build-fs -o runtime-cmijs.js
  $ find $DUNE_SOURCEROOT/_build/default/jscomp/others/.belt.objs/melange -name "*.cmi" -or -name "*.cmj" | xargs js_of_ocaml build-fs -o belt-cmijs.js

Prepare an input file to test some snippets to exercise common functionality

  $ cat > input.js <<EOF
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/bin/jsoo_main.bc.js');
  > require('./stdlib-cmijs.js');
  > require('./runtime-cmijs.js');
  > require('./belt-cmijs.js');
  > console.log(ocaml.compile("let t = 1"));
  > console.log(ocaml.compile(\`let john = [%bs.obj { name = "john"; age = 99 }] let t = john##name\`));
  > console.log(ocaml.compile(\`let foo = Belt.List.map\`));
  > console.log(ocaml.compile(\`let +foo\`));
  > console.log(ocaml.compile(\`let foo = "" + 2\`));
  > console.log(ocaml.compile(\`type person = {
  >   name: string ;
  >   age: int
  > }[@@deriving abstract]
  > 
  > let person1: person = person ~name:"joe" ~age:10\`));
  > EOF

  $ node input.js
  {
    js_code: '// Generated by Melange\n' +
      "'use strict';\n" +
      '\n' +
      '\n' +
      'var t = 1;\n' +
      '\n' +
      'exports.t = t;\n' +
      '/* No side effect */\n'
  }
  {
    js_code: '// Generated by Melange\n' +
      "'use strict';\n" +
      '\n' +
      '\n' +
      'var john = {\n' +
      '  name: "john",\n' +
      '  age: 99\n' +
      '};\n' +
      '\n' +
      'var t = john.name;\n' +
      '\n' +
      'exports.john = john;\n' +
      'exports.t = t;\n' +
      '/* t Not a pure module */\n'
  }
  {
    js_code: '// Generated by Melange\n' +
      "'use strict';\n" +
      '\n' +
      'var Belt_List = require("./stdlib/belt_List.js");\n' +
      '\n' +
      'var foo = Belt_List.map;\n' +
      '\n' +
      'exports.foo = foo;\n' +
      '/* No side effect */\n'
  }
  {
    js_error_msg: 'Line 1, 5:\n  Error Syntax error',
    row: 0,
    column: 5,
    endRow: 0,
    endColumn: 8,
    text: 'Syntax error',
    type: 'error'
  }
  {
    js_error_msg: 'Line 1, 10:\n' +
      '  Error This expression has type string but an expression was expected of type int',
    row: 0,
    column: 10,
    endRow: 0,
    endColumn: 12,
    text: 'This expression has type string but an expression was expected of type int',
    type: 'error'
  }
  {
    js_code: '// Generated by Melange\n' +
      "'use strict';\n" +
      '\n' +
      '\n' +
      'var person1 = {\n' +
      '  name: "joe",\n' +
      '  age: 10\n' +
      '};\n' +
      '\n' +
      'exports.person1 = person1;\n' +
      '/* No side effect */\n'
  }