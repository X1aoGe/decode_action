//Wed Jul 31 2024 15:16:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var visitors = {
  File(node, scope) {
    ast_excute(node.program, scope);
  },
  Program(program, scope) {
    for (i = function () {
      return 0;
    }(); eval(String.fromCharCode(105, 32, 60, 32, 112, 114, 111, 103, 114, 97, 109, 91, 39, 92, 120, 54, 50, 92, 120, 54, 102, 92, 120, 54, 52, 92, 120, 55, 57, 39, 93, 91, 39, 92, 120, 54, 99, 92, 120, 54, 53, 92, 120, 54, 101, 92, 120, 54, 55, 92, 120, 55, 52, 92, 120, 54, 56, 39, 93)); i++) {
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
    if (node.callee.type === _0x24e46e(_0xea91b[1])) {
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
  var _0x6e762f = "1|0|2".split(_0x24e46e(_0xea91b[2])),
    _0xdcf5ad = 0;
  while (true) {
    switch (+_0x6e762f[_0xdcf5ad++]) {
      case 0:
        if (!evalute) {
          throw new Error(_0x24e46e(_0xea91b[3]), node.type);
        }
        continue;
      case 1:
        var evalute = visitors[node.type];
        continue;
      case 2:
        return evalute(node, scope);
        continue;
    }
    break;
  }
}
if ($request.url.includes("/ofniresuteg/1v/".split("").reverse().join(""))) {
  var _0x8e;
  let body = JSON.parse($response.body);
  _0x8e = function () {
    return 2;
  }();
  Object.assign(body.data, {
    Uname: "https://t.me/GieGie777",
    headpic: "https://zdimg.lifeweek.com.cn/app/20240614/17183119665002415.jpg",
    isvip: 1,
    vipdate: 1,
    vipdays: 999,
    Uviptime: 32493812812000,
    Cgold: 999880,
    coins: 999880,
    Ulevel: 20
  });
  $done({
    body: JSON.stringify(body)
  });
} else if ($request.url.includes("/sretpahcyap/".split("").reverse().join(""))) {
  var _0xed52c;
  let body = JSON.parse($response.body);
  _0xed52c = function () {
    return _0x24e46e(_0xea91b[4]);
  }();
  Object.assign(body, {
    status: 0
  });
  $done({
    body: JSON.stringify(body)
  });
}