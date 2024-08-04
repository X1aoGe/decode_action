//Sun Aug 04 2024 14:35:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var visitors = {
  File(node, scope) {
    ast_excute(node.program, scope);
  },
  Program(program, scope) {
    for (i = function () {
      return 0;
    }(); i < program.body.length; eval(String.fromCharCode(105, 43, 43))) {
      ast_excute(program.body[i], scope);
    }
  },
  ExpressionStatement(node, scope) {
    return ast_excute(node.expression, scope);
  },
  CallExpression(node, scope) {
    var func = ast_excute(node.callee, scope);
    var args = node.arguments.map(function (arg) {
      return ast_excute(arg, scope);
    });
    var value;
    if (eval(String.fromCharCode(110, 111, 100, 101, 91, 39, 92, 120, 54, 51, 92, 120, 54, 49, 92, 120, 54, 99, 92, 120, 54, 99, 92, 120, 54, 53, 92, 120, 54, 53, 39, 93, 91, 39, 92, 120, 55, 52, 92, 120, 55, 57, 92, 120, 55, 48, 92, 120, 54, 53, 39, 93, 32, 61, 61, 61, 32, 39, 77, 101, 109, 98, 101, 114, 69, 120, 112, 114, 101, 115, 115, 105, 111, 110, 39))) {
      value = ast_excute(node.callee.object, scope);
    }
    return func.apply(value, args);
  },
  MemberExpression(node, scope) {
    var obj = ast_excute(node.object, scope);
    var name = node.property.name;
    return obj[name];
  },
  Identifier(node, scope) {
    return scope[node.name];
  },
  StringLiteral(node) {
    return node.value;
  },
  NumericLiteral(node) {
    return node.value;
  }
};
function ast_excute(node, scope) {
  var _0xf5b = "2|1|0".split(_0x26ga7d(_0xb3edf[1])),
    _0x78796g = 0;
  while (true) {
    switch (+_0xf5b[_0x78796g++]) {
      case 0:
        return evalute(node, scope);
        continue;
      case 1:
        if (!evalute) {
          throw new Error(_0x26ga7d(_0xb3edf[2]), node.type);
        }
        continue;
      case 2:
        var evalute = visitors[node.type];
        continue;
    }
    break;
  }
}
var _0x9b54be = function (s, h) {
  return s + h;
}(6, 4);
var _0xbc7b = $request.headers;
_0x9b54be = function () {
  return 3;
}();
_0xbc7b["User-Agent"] = "))NC_hz ;2.61 SOi ;enohPi( 6554/0.0.9 cisuMesaeteN".split("").reverse().join("");
_0xbc7b.Cookie = function () {
  return _0x26ga7d(_0xb3edf[3]);
}();
delete _0xbc7b["MConfig-Info"];
$done({
  headers: _0xbc7b
});