//Wed Jul 24 2024 14:24:46 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function r(t) {
    return "@babel/helpers - typeof", r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
      return typeof n;
    } : function (n) {
      return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
    }, r(t);
  }
  function t() {
    t = function () {
      return o;
    };
    var e,
      o = {},
      c = Object.prototype,
      u = c.hasOwnProperty,
      i = Object.defineProperty || function (n, r, t) {
        n[r] = t.value;
      },
      f = "function" == typeof Symbol ? Symbol : {},
      D = f.iterator || "@@iterator",
      C = f.asyncIterator || "@@asyncIterator",
      K = f.toStringTag || "@@toStringTag";
    function a(n, r, t) {
      return Object.defineProperty(n, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), n[r];
    }
    try {
      a({}, "");
    } catch (n) {
      a = function (n, r, t) {
        return n[r] = t;
      };
    }
    function s(n, r, t, e) {
      var o = r && r.prototype instanceof g ? r : g,
        c = Object.create(o.prototype),
        u = new U(e || []);
      return i(c, "_invoke", {
        value: E(n, t, u)
      }), c;
    }
    function O(r, t, x) {
      try {
        return {
          type: "normal",
          arg: r.call(t, x)
        };
      } catch (r) {
        return {
          type: "throw",
          arg: r
        };
      }
    }
    o.wrap = s;
    var h = "suspendedStart",
      M = "suspendedYield",
      p = "executing",
      j = "completed",
      b = {};
    function g() {}
    function l() {}
    function d() {}
    var q = {};
    a(q, D, function () {
      return this;
    });
    var v = Object.getPrototypeOf,
      Y = v && v(v(F([])));
    Y && Y !== c && u.call(Y, D) && (q = Y);
    var A = d.prototype = g.prototype = Object.create(q);
    function X(n) {
      ["next", "throw", "return"].forEach(function (t) {
        a(n, t, function (n) {
          return this._invoke(t, n);
        });
      });
    }
    function L(n, t) {
      var e;
      function c(x, e, i, f) {
        var C = O(n[x], n, e);
        if ("throw" !== C.type) {
          var K = C.arg,
            a = K.value;
          return a && "object" == r(a) && u.call(a, "__await") ? t.resolve(a.__await).then(function (n) {
            c("next", n, i, f);
          }, function (n) {
            c("throw", n, i, f);
          }) : t.resolve(a).then(function (n) {
            K.value = n;
            i(K);
          }, function (n) {
            return c("throw", n, i, f);
          });
        }
        f(C.arg);
      }
      i(this, "_invoke", {
        value: function (n, r) {
          function u() {
            var x = function (n, r, t, x, e) {
              return n(r, t, x, e);
            };
            return new t(function (t, w) {
              x(c, n, r, t, w);
            });
          }
          return e = e ? e.then(u, u) : u();
        }
      });
    }
    function E(r, t, x) {
      var c = h;
      return function (n, u) {
        if (c === p) throw Error("Generator is already running");
        if (c === j) {
          if ("throw" === n) throw u;
          return {
            value: e,
            done: !0
          };
        }
        for (x.method = n, x.arg = u;;) {
          var i = x.delegate;
          if (i) {
            var f = T(i, x);
            if (f) {
              if (f === b) continue;
              return f;
            }
          }
          if ("next" === x.method) x.sent = x._sent = x.arg;else if ("throw" === x.method) {
            if (c === h) throw c = j, x.arg;
            x.dispatchException(x.arg);
          } else "return" === x.method && x.abrupt("return", x.arg);
          c = p;
          var D = O(r, t, x);
          if ("normal" === D.type) {
            if (c = x.done ? j : M, D.arg === b) continue;
            return {
              value: D.arg,
              done: x.done
            };
          }
          "throw" === D.type && (c = j, x.method = "throw", x.arg = D.arg);
        }
      };
    }
    function T(r, t) {
      for (var x = "3|0|5|4|2|1".split("|"), o = 0;;) {
        switch (x[o++]) {
          case "0":
            if (i === e) return t.delegate = null, "throw" === u && r.iterator.return && (t.method = "return", t.arg = e, T(r, t), "throw" === t.method) || "return" !== u && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + u + "' method")), b;
            continue;
          case "1":
            return c ? c.done ? (t[r.resultName] = c.value, t.next = r.nextLoc, "return" !== t.method && (t.method = "next", t.arg = e), t.delegate = null, b) : c : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, b);
          case "2":
            var c = f.arg;
            continue;
          case "3":
            var u = t.method,
              i = r.iterator[u];
            continue;
          case "4":
            if ("throw" === f.type) return t.method = "throw", t.arg = f.arg, t.delegate = null, b;
            continue;
          case "5":
            var f = O(i, r.iterator, t.arg);
            continue;
        }
        break;
      }
    }
    function m(n) {
      var r = {
        tryLoc: n[0]
      };
      1 in n && (r.catchLoc = n[1]);
      2 in n && (r.finallyLoc = n[2], r.afterLoc = n[3]);
      this.tryEntries.push(r);
    }
    function S(n) {
      var r = n.completion || {};
      r.type = "normal";
      delete r.arg;
      n.completion = r;
    }
    function U(n) {
      this.tryEntries = [{
        tryLoc: "root"
      }];
      n.forEach(m, this);
      this.reset(!0);
    }
    function F(n) {
      if (n || "" === n) {
        var t = n[D];
        if (t) return t.call(n);
        if ("function" == typeof n.next) return n;
        if (!isNaN(n.length)) {
          var o = -1,
            c = function r() {
              for (; ++o < n.length;) if (u.call(n, o)) return r.value = n[o], r.done = !1, r;
              return r.value = e, r.done = !0, r;
            };
          return c.next = c;
        }
      }
      throw new TypeError(r(n) + " is not iterable");
    }
    return l.prototype = d, i(A, "constructor", {
      value: d,
      configurable: !0
    }), i(d, "constructor", {
      value: l,
      configurable: !0
    }), l.displayName = a(d, K, "GeneratorFunction"), o.isGeneratorFunction = function (r) {
      var t = "function" == typeof r && r.constructor;
      return !!t && (t === l || "GeneratorFunction" === (t.displayName || t.name));
    }, o.mark = function (n) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(n, d) : (n.__proto__ = d, a(n, K, "GeneratorFunction")), n.prototype = Object.create(A), n;
    }, o.awrap = function (n) {
      return {
        __await: n
      };
    }, X(L.prototype), a(L.prototype, C, function () {
      return this;
    }), o.AsyncIterator = L, o.async = function (n, r, t, e, c) {
      void 0 === c && (c = Promise);
      var u = new L(s(n, r, t, e), c);
      return o.isGeneratorFunction(r) ? u : u.next().then(function (n) {
        return n.done ? n.value : u.next();
      });
    }, X(A), a(A, K, "Generator"), a(A, D, function () {
      return this;
    }), a(A, "toString", function () {
      return "[object Generator]";
    }), o.keys = function (r) {
      var t = function (r, t) {
          return r in t;
        },
        x = Object(r),
        e = [];
      for (var o in x) e.push(o);
      return e.reverse(), function n() {
        for (; e.length;) {
          var r = e.pop();
          if (t(r, x)) return n.value = r, n.done = !1, n;
        }
        return n.done = !0, n;
      };
    }, o.values = F, U.prototype = {
      constructor: U,
      reset: function (n) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !n) for (var r in this) "t" === r.charAt(0) && u.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
      },
      stop: function () {
        this.done = !0;
        var r = this.tryEntries[0].completion;
        if ("throw" === r.type) throw r.arg;
        return this.rval;
      },
      dispatchException: function (r) {
        if (this.done) throw r;
        var x = this;
        function o(n, o) {
          return f.type = "throw", f.arg = r, x.next = n, o && (x.method = "next", x.arg = e), !!o;
        }
        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
          var i = this.tryEntries[c],
            f = i.completion;
          if ("root" === i.tryLoc) return o("end");
          if (i.tryLoc <= this.prev) {
            var D = u.call(i, "catchLoc"),
              C = u.call(i, "finallyLoc");
            if (D && C) {
              if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return o(i.finallyLoc);
            } else if (D) {
              if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
            } else {
              if (!C) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return o(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (n, r) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var e = this.tryEntries[t];
          if (e.tryLoc <= this.prev && u.call(e, "finallyLoc") && this.prev < e.finallyLoc) {
            var o = e;
            break;
          }
        }
        o && ("break" === n || "continue" === n) && o.tryLoc <= r && r <= o.finallyLoc && (o = null);
        var c = o ? o.completion : {};
        return c.type = n, c.arg = r, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(c);
      },
      complete: function (r, t) {
        if ("throw" === r.type) throw r.arg;
        return "break" === r.type || "continue" === r.type ? this.next = r.arg : "return" === r.type ? (this.rval = this.arg = r.arg, this.method = "return", this.next = "end") : "normal" === r.type && t && (this.next = t), b;
      },
      finish: function (r) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var x = this.tryEntries[t];
          if (x.finallyLoc === r) return this.complete(x.completion, x.afterLoc), S(x), b;
        }
      },
      catch: function (r) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var x = this.tryEntries[t];
          if (x.tryLoc === r) {
            var e = x.completion;
            if ("throw" === e.type) {
              var o = e.arg;
              S(x);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (r, t, x) {
        return this.delegate = {
          iterator: F(r),
          resultName: t,
          nextLoc: x
        }, "next" === this.method && (this.arg = e), b;
      }
    }, o;
  }
  function x(r, t) {
    return i(r) || u(r, t) || o(r, t) || e();
  }
  function e() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function o(r, t) {
    if (r) {
      if ("string" == typeof r) return c(r, t);
      var x = {}.toString.call(r).slice(8, -1);
      return "Object" === x && r.constructor && (x = r.constructor.name), "Map" === x || "Set" === x ? Array.from(r) : "Arguments" === x || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x) ? c(r, t) : void 0;
    }
  }
  function c(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var x = 0, e = Array(t); x < t; x++) e[x] = r[x];
    return e;
  }
  function u(r, t) {
    var x = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != x) {
      var e,
        o,
        c,
        u,
        i = [],
        f = true,
        D = false;
      try {
        if (c = (x = x.call(r)).next, 0 === t) {
          if (Object(x) !== x) return;
          f = !1;
        } else for (; !(f = (e = c.call(x)).done) && (i.push(e.value), i.length !== t); f = !0) {}
      } catch (n) {
        D = !0;
        o = n;
      } finally {
        try {
          if (!f && null != x.return && (u = x.return(), Object(u) !== u)) return;
        } finally {
          if (D) throw o;
        }
      }
      return i;
    }
  }
  function i(n) {
    if (Array.isArray(n)) return n;
  }
  function f(r, t, x, e, o, c, u) {
    try {
      var i = r[c](u),
        f = i.value;
    } catch (r) {
      return void x(r);
    }
    i.done ? t(f) : Promise.resolve(f).then(e, o);
  }
  function D(r) {
    return function () {
      var x = this,
        e = arguments;
      return new Promise(function (t, o) {
        var u = r.apply(x, e);
        function i(n) {
          f(u, t, o, i, D, "next", n);
        }
        function D(r) {
          f(u, t, o, i, D, "throw", r);
        }
        i(void 0);
      });
    };
  }
  var C = new Env("𝐍𝐞𝐭𝐞𝐚𝐬𝐞𝐂𝐥𝐨𝐮𝐝𝐌𝐮𝐬𝐢𝐜"),
    K = "netease_".concat(C.time("yyyyMM"), "_notified"),
    a = C.isQuanX() ? "https://fr.yuhengy17.me/api/v2/" : "https://free.yuhengy17.me/api/v2/",
    s = typeof $response === "undefined",
    O = s ? {
      status: C.isQuanX() ? "HTTP/1.1 200 OK" : 200,
      headers: typeof $request === "undefined" ? {} : $request.headers,
      body: ""
    } : $response;
  function h(r) {
    for (var t = "2|1|3|0|4".split("|"), x = 0;;) {
      switch (t[x++]) {
        case "0":
          var e = btoa(o);
          continue;
        case "1":
          var o = "";
          continue;
        case "2":
          var c = new Uint8Array(r);
          continue;
        case "3":
          for (var u = 0; u < c.length; u++) o += String.fromCharCode(c[u]);
          continue;
        case "4":
          return e;
      }
      break;
    }
  }
  function M(r) {
    for (var t = atob(r), x = new Uint8Array(t.length), e = 0; e < t.length; e++) x[e] = t.charCodeAt(e);
    return x;
  }
  function p() {
    return j.apply(this, arguments);
  }
  function j() {
    return (j = D(t().mark(function n() {
      var x, e;
      return t().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return x = $request.method.toLowerCase(), e = {
              url: $request.url,
              headers: $request.headers
            }, x == "post" && Object.assign(e, {
              body: $request.body
            }), n.next = 5, C.http[x];
          case 5:
            return n.abrupt("return", n.sent);
          case 6:
          case "end":
            return n.stop();
        }
      }, n);
    }))).apply(this, arguments);
  }
  function b() {
    return g.apply(this, arguments);
  }
  function g() {
    return (g = D(t().mark(function n() {
      var x;
      return t().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (!s) {
              n.next = 9;
              break;
            }
            if (O.body || O.bodyBytes) {
              n.next = 6;
              break;
            }
            return n.next = 4, p();
          case 4:
            x = n.sent;
            Object.assign(x, {
              body: x.body,
              headers: x.headers
            });
          case 6:
            C.done(C.isQuanX() ? O : {
              response: O
            });
            n.next = 10;
            break;
          case 9:
            C.done(O);
          case 10:
          case "end":
            return n.stop();
        }
      }, n);
    }))).apply(this, arguments);
  }
  function l() {
    return d.apply(this, arguments);
  }
  function d() {
    return (d = D(t().mark(function r() {
      var x, e, o, c, u;
      return t().wrap(function (n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return x = ["本脚本仅用于技术学习，禁止非法使用。", "不得将本脚本用于任何商业或违法用途，违者后果自负。", "在中国大陆地区，严禁传播本脚本。", "开发者不对脚本的滥用承担任何责任。", "违规使用导致的后果由使用者自行承担。", "如有违反相关法规，将立即删除本脚本。", "使用者若违反声明规定，将自动视为放弃使用权。", "本声明的最终解释权归开发者所有。"], e = "https://cdn.jsdelivr.net/gh/Yuheng0101/X@main/Utils/notice.json", n.prev = 2, n.next = 5, C.http.get(e);
          case 5:
            o = n.sent;
            c = o.body;
            x = C.toObj(c);
            C.log("获取远程声明成功");
            n.next = 14;
            break;
          case 11:
            n.prev = 11;
            n.t0 = n.catch(2);
            C.log("获取远程声明失败, 使用本地声明");
          case 14:
            return C.setdata("true", K), u = C.time("yyyyMM", new Date(new Date().setMonth(new Date().getMonth() - 1))), C.setdata(null, "netease_".concat(u, "_notified")), n.abrupt("return", x.join("\n"));
          case 18:
          case "end":
            return n.stop();
        }
      }, r, null, [[2, 11]]);
    }))).apply(this, arguments);
  }
  D(t().mark(function r() {
    var e, o, c, u, i, f, D, p, j, g, d, q;
    return t().wrap(function (n) {
      for (var r = function (n, r, t) {
        return n(r, t);
      };;) switch (n.prev = n.next) {
        case 0:
          if (!(C.getdata(K) == "true")) {
            n.next = 4;
            break;
          }
          C.debug("本月已通知过，本次不再通知");
          n.next = 11;
          break;
        case 4:
          return n.t0 = C, n.t1 = C.name, n.next = 8, l();
        case 8:
          n.t2 = n.sent;
          n.t3 = {
            $open: "https://t.me/yqc_123/",
            $media: "https://p1.music.126.net/X-Y-Fvq9mYUuuszPERRHIA==/109951165915149381.jpg?param=700y550"
          };
          n.t0.msg.call(n.t0, n.t1, "脚本声明", n.t2, n.t3);
        case 11:
          return s || (o = Object.fromEntries(Object.entries($response.headers).map(function (n) {
            var t = r(x, n, 2),
              e = t[0],
              o = t[1];
            return [e.toLowerCase(), o];
          })), o !== null && o !== void 0 && (e = o["content-type"]) !== null && e !== void 0 && e.includes("application/json") || (C.isQuanX() && !$response.bodyBytes && C.done({}), $response.body || C.done({}))), n.prev = 12, c = h((C.isQuanX() ? O.bodyBytes : O.body) || ""), u = $request.url.replace(/^(?:https?:\/\/)?(?:www\.)?[^\/]+(\/[^?#]*)?.*$/, "$1"), i = {
            url: "".concat(a),
            headers: {
              "x-id": "netease",
              "Content-Type": "application/json;charset=UTF-8",
              "x-tools-id": encodeURIComponent(C.getEnv())
            },
            body: C.toStr({
              params: s ? btoa(encodeURIComponent(C.toStr({
                url: $request.url,
                method: $request.method,
                data: $request.body
              }))) : c,
              path: btoa(encodeURIComponent(u))
            })
          }, n.next = 18, C.http.post(i);
        case 18:
          f = n.sent;
          D = f.body;
          p = C.toObj(D);
          j = p.code;
          g = p.data;
          d = p.message;
          j === 200 ? (q = M(g), C.isQuanX() ? (O.bodyBytes = q.buffer, delete O.body) : O.body = q, b()) : C.log("请求失败: ".concat(d));
          n.next = 28;
          break;
        case 24:
          n.prev = 24;
          n.t4 = n.catch(12);
          C.log("网络请求失败", n.t4.message);
        case 28:
        case "end":
          return n.stop();
      }
    }, r, null, [[12, 24]]);
  }))().catch(function (n) {
    return C.logErr(n);
  }).finally(D(t().mark(function r() {
    return t().wrap(function (r) {
      for (;;) switch (r.prev = r.next) {
        case 0:
          return r.next = 2, b();
        case 2:
          return r.abrupt("return", r.sent);
        case 3:
        case "end":
          return r.stop();
      }
    }, r);
  })));
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) return s;
      return o;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s), t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) try {
          const t = JSON.parse(o);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          return this.data = this.loaddata(), this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      return e = e.substring(0, e.length - 1), e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) t = i;else if (i.startsWith("data:")) {
                      const [t] = i.split(";"),
                        [, o] = i.split(",");
                      e = o;
                      s = t.replace("data:", "");
                    } else {
                      e = i;
                      s = (t => {
                        const e = {
                          JVBERi0: "application/pdf",
                          R0lGODdh: "image/gif",
                          R0lGODlh: "image/gif",
                          iVBORw0KGgo: "image/png",
                          "/9j/": "image/jpg"
                        };
                        for (var s in e) if (0 === t.indexOf(s)) return e[s];
                        return null;
                      })(i);
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  return Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  }), r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  return i?.startsWith("http") && (r = i), r && Object.assign(s, {
                    mediaUrl: r
                  }), console.log(JSON.stringify(s)), s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  return n && Object.assign(o, {
                    "update-pasteboard": n
                  }), console.log(JSON.stringify(o)), o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(e, s, i, r(o));
          break;
        case "Quantumult X":
          $notify(e, s, i, r(o));
          break;
        case "Node.js":
          break;
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}