  $ cat > input.js <<EOF
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/bin/jsoo_main.bc.js');
  > require(process.env.DUNE_SOURCEROOT + '/_build/default/bin/melange-cmijs.js');
  > console.log(ocaml.compileML("module Deprecated: sig val x: unit Js.null [@@alert deprecated \"this is deprecated\"] end = struct let x = Js.null end ;; let t = Deprecated.x"));
  > EOF

  $ node input.js
  {
    js_code: '// Generated by Melange\n' +
      '\n' +
      '\n' +
      'var x = null;\n' +
      '\n' +
      'var Deprecated = {\n' +
      '  x: x\n' +
      '};\n' +
      '\n' +
      'var t = x;\n' +
      '\n' +
      'export {\n' +
      '  Deprecated ,\n' +
      '  t ,\n' +
      '}\n' +
      '/* No side effect */\n',
    warnings: [
      {
        js_warning_error_msg: 'Line 1, 129:\n  Alert: deprecated Deprecated.x\nthis is deprecated',
        row: 0,
        column: 129,
        endRow: 0,
        endColumn: 141,
        text: 'Deprecated.x\nthis is deprecated',
        type: 'alert'
      }
    ],
    type_hints: [
      {
        start: [Object],
        end: [Object],
        kind: 'expression',
        hint: 'unit Js.null'
      },
      {
        start: [Object],
        end: [Object],
        kind: 'pattern_type',
        hint: 'unit Js.null'
      },
      {
        start: [Object],
        end: [Object],
        kind: 'binding',
        hint: 'unit Js.null'
      },
      { start: [Object], end: [Object], kind: 'core_type', hint: 'unit' },
      {
        start: [Object],
        end: [Object],
        kind: 'core_type',
        hint: 'unit Js.null'
      },
      {
        start: [Object],
        end: [Object],
        kind: 'expression',
        hint: "'a Js__Js_internal.null"
      },
      {
        start: [Object],
        end: [Object],
        kind: 'pattern_type',
        hint: "'a Js__Js_internal.null"
      },
      {
        start: [Object],
        end: [Object],
        kind: 'binding',
        hint: "'a Js__Js_internal.null"
      }
    ]
  }
