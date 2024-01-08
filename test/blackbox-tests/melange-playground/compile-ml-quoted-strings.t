  $ cat > input.js <<EOF
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/playground/mel_playground.bc.js');
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/playground/melange-cmijs.js');
  > console.log(ocaml.compileML("Js.log {js|🪄|js}"));
  > EOF

  $ node input.js
  {
    js_code: '// Generated by Melange\n' +
      '\n' +
      '\n' +
      'console.log("🪄");\n' +
      '\n' +
      'export {\n' +
      '  \n' +
      '}\n' +
      '/*  Not a pure module */\n',
    warnings: [],
    type_hints: [
      {
        start: [Object],
        end: [Object],
        kind: 'expression',
        hint: 'string'
      },
      {
        start: [Object],
        end: [Object],
        kind: 'expression',
        hint: 'string -> unit'
      },
      {
        start: [Object],
        end: [Object],
        kind: 'expression',
        hint: 'unit'
      }
    ]
  }
