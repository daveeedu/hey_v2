! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(x, e) {
    "use strict";

    function g(e) { return null != e && e === e.window }
    var t = [],
        n = Object.getPrototypeOf,
        s = t.slice,
        m = t.flat ? function(e) { return t.flat.call(e) } : function(e) { return t.concat.apply([], e) },
        l = t.push,
        o = t.indexOf,
        i = {},
        r = i.toString,
        v = i.hasOwnProperty,
        a = v.toString,
        u = a.call(Object),
        y = {},
        b = function(e) { return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item },
        T = x.document,
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function _(e, t, n) {
        var i, o, r = (n = n || T).createElement("script");
        if (r.text = e, t)
            for (i in c)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function p(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[r.call(e)] || "object" : typeof e }
    var f = "3.6.0",
        C = function(e, t) { return new C.fn.init(e, t) };

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = p(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: f,
        constructor: C,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { e = C.merge(this.constructor(), e); return e.prevObject = this, e },
        each: function(e) { return C.each(this, e) },
        map: function(n) { return this.pushStack(C.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        even: function() { return this.pushStack(C.grep(this, function(e, t) { return (t + 1) % 2 })) },
        odd: function() { return this.pushStack(C.grep(this, function(e, t) { return t % 2 })) },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, i, o, r = arguments[0] || {},
            a = 1,
            s = arguments.length,
            l = !1;
        for ("boolean" == typeof r && (l = r, r = arguments[a] || {}, a++), "object" == typeof r || b(r) || (r = {}), a === s && (r = this, a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = e[t], "__proto__" !== t && r !== n && (l && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (o = r[t], o = i && !Array.isArray(o) ? [] : i || C.isPlainObject(o) ? o : {}, i = !1, r[t] = C.extend(l, o, n)) : void 0 !== n && (r[t] = n));
        return r
    }, C.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { return !(!e || "[object Object]" !== r.call(e) || (e = n(e)) && ("function" != typeof(e = v.call(e, "constructor") && e.constructor) || a.call(e) !== u)) },
        isEmptyObject: function(e) { for (var t in e) return !1; return !0 },
        globalEval: function(e, t, n) { _(e, { nonce: t && t.nonce }, n) },
        each: function(e, t) {
            var n, i = 0;
            if (d(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        makeArray: function(e, t) { t = t || []; return null != e && (d(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t },
        inArray: function(e, t, n) { return null == t ? -1 : o.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i]; return e.length = o, e },
        grep: function(e, t, n) { for (var i = [], o = 0, r = e.length, a = !n; o < r; o++) !t(e[o], o) != a && i.push(e[o]); return i },
        map: function(e, t, n) {
            var i, o, r = 0,
                a = [];
            if (d(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
            return m(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { i["[object " + t + "]"] = t.toLowerCase() });
    var h = function(n) {
        function f(e, t) { return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320)) }

        function i() { E() }
        var e, h, _, r, o, p, d, g, w, l, u, E, x, a, T, m, s, c, v, C = "sizzle" + +new Date,
            y = n.document,
            S = 0,
            b = 0,
            k = le(),
            N = le(),
            A = le(),
            D = le(),
            I = function(e, t) { return e === t && (u = !0), 0 },
            L = {}.hasOwnProperty,
            t = [],
            O = t.pop,
            j = t.push,
            P = t.push,
            q = t.slice,
            H = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B = "\\[" + F + "*(" + R + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + F + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            z = new RegExp(F + "+", "g"),
            U = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            Q = new RegExp("^" + F + "*," + F + "*"),
            $ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            V = new RegExp(F + "|>"),
            X = new RegExp(W),
            K = new RegExp("^" + R + "$"),
            Y = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + B), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"), bool: new RegExp("^(?:" + M + ")$", "i"), needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i") },
            G = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
            oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) { return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            ae = ye(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { P.apply(t = q.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType } catch (e) {
            P = {
                apply: t.length ? function(e, t) { j.apply(e, q.call(t)) } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function se(e, t, n, i) {
            var o, r, a, s, l, u, c, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && (E(t), t = t || x, T)) {
                if (11 !== d && (l = te.exec(e)))
                    if (o = l[1]) { if (9 === d) { if (!(a = t.getElementById(o))) return n; if (a.id === o) return n.push(a), n } else if (f && (a = f.getElementById(o)) && v(t, a) && a.id === o) return n.push(a), n } else { if (l[2]) return P.apply(n, t.getElementsByTagName(e)), n; if ((o = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(o)), n }
                if (h.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (c = e, f = t, 1 === d && (V.test(e) || $.test(e))) {
                        for ((f = ne.test(e) && ge(t.parentNode) || t) === t && h.scope || ((s = t.getAttribute("id")) ? s = s.replace(oe, re) : t.setAttribute("id", s = C)), r = (u = p(e)).length; r--;) u[r] = (s ? "#" + s : ":scope") + " " + ve(u[r]);
                        c = u.join(",")
                    }
                    try { return P.apply(n, f.querySelectorAll(c)), n } catch (t) { D(e, !0) } finally { s === C && t.removeAttribute("id") }
                }
            }
            return g(e.replace(U, "$1"), t, n, i)
        }

        function le() { var i = []; return function e(t, n) { return i.push(t + " ") > _.cacheLength && delete e[i.shift()], e[t + " "] = n } }

        function ue(e) { return e[C] = !0, e }

        function ce(e) { var t = x.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) { for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t }

        function de(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function pe(a) { return ue(function(r) { return r = +r, ue(function(e, t) { for (var n, i = a([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n])) }) }) }

        function ge(e) { return e && void 0 !== e.getElementsByTagName && e }
        for (e in h = se.support = {}, o = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    e = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || e && e.nodeName || "HTML")
            }, E = se.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : y;
                return e != x && 9 === e.nodeType && e.documentElement && (a = (x = e).documentElement, T = !o(x), y != x && (t = x.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), h.scope = ce(function(e) { return a.appendChild(e).appendChild(x.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length }), h.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), h.getElementsByTagName = ce(function(e) { return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length }), h.getElementsByClassName = ee.test(x.getElementsByClassName), h.getById = ce(function(e) { return a.appendChild(e).id = C, !x.getElementsByName || !x.getElementsByName(C).length }), h.getById ? (_.filter.ID = function(e) { var t = e.replace(ie, f); return function(e) { return e.getAttribute("id") === t } }, _.find.ID = function(e, t) { if (void 0 !== t.getElementById && T) { e = t.getElementById(e); return e ? [e] : [] } }) : (_.filter.ID = function(e) { var t = e.replace(ie, f); return function(e) { e = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return e && e.value === t } }, _.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), _.find.TAG = h.getElementsByTagName ? function(e, t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, _.find.CLASS = h.getElementsByClassName && function(e, t) { if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e) }, s = [], m = [], (h.qsa = ee.test(x.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), (t = x.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = x.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = ee.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W) }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = ee.test(a.compareDocumentPosition), v = t || ee.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, I = t ? function(e, t) { if (e === t) return u = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e == x || e.ownerDocument == y && v(y, e) ? -1 : t == x || t.ownerDocument == y && v(y, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!o || !r) return e == x ? -1 : t == x ? 1 : o ? -1 : r ? 1 : l ? H(l, e) - H(l, t) : 0;
                    if (o === r) return de(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (; a[i] === s[i];) i++;
                    return i ? de(a[i], s[i]) : a[i] == y ? -1 : s[i] == y ? 1 : 0
                }), x
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if (E(e), h.matchesSelector && T && !D[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try { var n = c.call(e, t); if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { D(t, !0) }
                return 0 < se(t, x, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) != x && E(e), v(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) != x && E(e);
                var n = _.attrHandle[t.toLowerCase()],
                    n = n && L.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== n ? n : h.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, se.escape = function(e) { return (e + "").replace(oe, re) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(I), u) { for (; t = e[o++];) t === e[o] && (i = n.push(o)); for (; i--;) e.splice(n[i], 1) }
                return l = null, e
            }, r = se.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += r(e) } else if (3 === o || 4 === o) return e.nodeValue } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (_ = se.selectors = {
                cacheLength: 50,
                createPseudo: ue,
                match: Y,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(ie, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(ie, f).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = k[e + " "]; return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && k(e, function(e) { return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(t, n, i) { return function(e) { e = se.attr(e, t); return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(z, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var i, o, r, a, s, l, u = v != y ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                h = !1;
                            if (c) {
                                if (v) {
                                    for (; u;) {
                                        for (a = e; a = a[u];)
                                            if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                    for (h = (s = (i = (o = (r = (a = c)[C] || (a[C] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (h = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++h && a === e) { o[p] = [S, s, h]; break }
                                } else if (d && (h = s = (i = (o = (r = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h)
                                    for (;
                                        (a = ++s && a && a[u] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++h || (d && ((o = (r = a[C] || (a[C] = {}))[a.uniqueID] || (r[a.uniqueID] = {}))[p] = [S, h]), a !== e)););
                                return (h -= m) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function(e, r) { var t, a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e); return a[C] ? a(r) : 1 < a.length ? (t = [e, e, "", r], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) { for (var n, i = a(e, r), o = i.length; o--;) e[n = H(e, i[o])] = !(t[n] = i[o]) }) : function(e) { return a(e, 0, t) }) : a }
                },
                pseudos: {
                    not: ue(function(e) {
                        var i = [],
                            o = [],
                            s = d(e.replace(U, "$1"));
                        return s[C] ? ue(function(e, t, n, i) { for (var o, r = s(e, null, i, []), a = e.length; a--;)(o = r[a]) && (e[a] = !(t[a] = o)) }) : function(e, t, n) { return i[0] = e, s(i, null, n, o), i[0] = null, !o.pop() }
                    }),
                    has: ue(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: ue(function(t) {
                        return t = t.replace(ie, f),
                            function(e) { return -1 < (e.textContent || r(e)).indexOf(t) }
                    }),
                    lang: ue(function(n) {
                        return K.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(ie, f).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !_.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return Z.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase()) },
                    first: pe(function() { return [0] }),
                    last: pe(function(e, t) { return [t - 1] }),
                    eq: pe(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: pe(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: pe(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: pe(function(e, t, n) { for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i); return e }),
                    gt: pe(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e })
                }
            }).pseudos.nth = _.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) _.pseudos[e] = function(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }(e);
        for (e in { submit: !0, reset: !0 }) _.pseudos[e] = function(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }(e);

        function me() {}

        function ve(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function ye(a, e, t) {
            var s = e.dir,
                l = e.next,
                u = l || s,
                c = t && "parentNode" === u,
                f = b++;
            return e.first ? function(e, t, n) {
                for (; e = e[s];)
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, o, r = [S, f];
                if (n) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || c)
                            if (i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[s] || e;
                            else { if ((o = i[u]) && o[0] === S && o[1] === f) return r[2] = o[2]; if ((i[u] = r)[2] = a(e, t, n)) return !0 } return !1
            }
        }

        function be(o) {
            return 1 < o.length ? function(e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function _e(e, t, n, i, o) { for (var r, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), u && t.push(s))); return a }

        function we(e) {
            for (var i, t, n, o = e.length, r = _.relative[e[0].type], a = r || _.relative[" "], s = r ? 1 : 0, l = ye(function(e) { return e === i }, a, !0), u = ye(function(e) { return -1 < H(i, e) }, a, !0), c = [function(e, t, n) { n = !r && (n || t !== w) || ((i = t).nodeType ? l : u)(e, t, n); return i = null, n }]; s < o; s++)
                if (t = _.relative[e[s].type]) c = [ye(be(c), t)];
                else {
                    if ((t = _.filter[e[s].type].apply(null, e[s].matches))[C]) {
                        for (n = ++s; n < o && !_.relative[e[n].type]; n++);
                        return function e(h, p, g, m, v, t) {
                            return m && !m[C] && (m = e(m)), v && !v[C] && (v = e(v, t)), ue(function(e, t, n, i) {
                                var o, r, a, s = [],
                                    l = [],
                                    u = t.length,
                                    c = e || function(e, t, n) { for (var i = 0, o = t.length; i < o; i++) se(e, t[i], n); return n }(p || "*", n.nodeType ? [n] : n, []),
                                    f = !h || !e && p ? c : _e(c, s, h, n, i),
                                    d = g ? v || (e ? h : u || m) ? [] : t : f;
                                if (g && g(f, d, n, i), m)
                                    for (o = _e(d, l), m(o, [], n, i), r = o.length; r--;)(a = o[r]) && (d[l[r]] = !(f[l[r]] = a));
                                if (e) {
                                    if (v || h) {
                                        if (v) {
                                            for (o = [], r = d.length; r--;)(a = d[r]) && o.push(f[r] = a);
                                            v(null, d = [], o, i)
                                        }
                                        for (r = d.length; r--;)(a = d[r]) && -1 < (o = v ? H(e, a) : s[r]) && (e[o] = !(t[o] = a))
                                    }
                                } else d = _e(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, i) : P.apply(t, d)
                            })
                        }(1 < s && be(c), 1 < s && ve(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(U, "$1"), t, s < n && we(e.slice(s, n)), n < o && we(e = e.slice(n)), n < o && ve(e))
                    }
                    c.push(t)
                }
            return be(c)
        }
        return me.prototype = _.filters = _.pseudos, _.setFilters = new me, p = se.tokenize = function(e, t) { var n, i, o, r, a, s, l, u = N[e + " "]; if (u) return t ? 0 : u.slice(0); for (a = e, s = [], l = _.preFilter; a;) { for (r in n && !(i = Q.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(o = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(U, " ") }), a = a.slice(n.length)), _.filter) !(i = Y[r].exec(a)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({ value: n, type: r, matches: i }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? se.error(e) : N(e, s).slice(0) }, d = se.compile = function(e, t) {
            var n, m, v, y, b, i, o = [],
                r = [],
                a = A[e + " "];
            if (!a) {
                for (n = (t = t || p(e)).length; n--;)((a = we(t[n]))[C] ? o : r).push(a);
                (a = A(e, (m = r, y = 0 < (v = o).length, b = 0 < m.length, i = function(e, t, n, i, o) {
                    var r, a, s, l = 0,
                        u = "0",
                        c = e && [],
                        f = [],
                        d = w,
                        h = e || b && _.find.TAG("*", o),
                        p = S += null == d ? 1 : Math.random() || .1,
                        g = h.length;
                    for (o && (w = t == x || t || o); u !== g && null != (r = h[u]); u++) {
                        if (b && r) {
                            for (a = 0, t || r.ownerDocument == x || (E(r), n = !T); s = m[a++];)
                                if (s(r, t || x, n)) { i.push(r); break }
                            o && (S = p)
                        }
                        y && ((r = !s && r) && l--, e && c.push(r))
                    }
                    if (l += u, y && u !== l) {
                        for (a = 0; s = v[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--;) c[u] || f[u] || (f[u] = O.call(i));
                            f = _e(f)
                        }
                        P.apply(i, f), o && !e && 0 < f.length && 1 < l + v.length && se.uniqueSort(i)
                    }
                    return o && (S = p, w = d), c
                }, y ? ue(i) : i))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, i) {
            var o, r, a, s, l, u = "function" == typeof e && e,
                c = !i && p(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (a = r[0]).type && 9 === t.nodeType && T && _.relative[r[1].type]) {
                    if (!(t = (_.find.ID(a.matches[0].replace(ie, f), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = Y.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !_.relative[s = a.type]);)
                    if ((l = _.find[s]) && (i = l(a.matches[0].replace(ie, f), ne.test(r[0].type) && ge(t.parentNode) || t))) { if (r.splice(o, 1), !(e = i.length && ve(r))) return P.apply(n, i), n; break }
            }
            return (u || d(e, c))(i, t, !T, n, !t || ne.test(e) && ge(t.parentNode) || t), n
        }, h.sortStable = C.split("").sort(I).join("") === C, h.detectDuplicates = !!u, E(), h.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(x.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), h.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(M, function(e, t, n) { if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null }), se
    }(x);
    C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape;

    function w(e, t, n) {
        for (var i = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && C(e).is(n)) break;
                i.push(e)
            }
        return i
    }

    function E(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n }
    var S = C.expr.match.needsContext;

    function k(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function A(e, n, i) { return b(n) ? C.grep(e, function(e, t) { return !!n.call(e, t, e) !== i }) : n.nodeType ? C.grep(e, function(e) { return e === n !== i }) : "string" != typeof n ? C.grep(e, function(e) { return -1 < o.call(n, e) !== i }) : C.filter(n, e, i) }
    C.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) { return 1 === e.nodeType })) }, C.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (C.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(A(this, e || [], !1)) },
        not: function(e) { return this.pushStack(A(this, e || [], !0)) },
        is: function(e) { return !!A(this, "string" == typeof e && S.test(e) ? C(e) : e || [], !1).length }
    });
    var D, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || D, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), N.test(i[1]) && C.isPlainObject(t))
                for (var i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (e = T.getElementById(i[2])) && (this[0] = e, this.length = 1), this
    }).prototype = C.fn, D = C(T);
    var L = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };

    function j(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                a = "string" != typeof e && C(e);
            if (!S.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) { r.push(n); break }
            return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
        },
        index: function(e) { return e ? "string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), C.each({ parent: function(e) { e = e.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(e) { return w(e, "parentNode") }, parentsUntil: function(e, t, n) { return w(e, "parentNode", n) }, next: function(e) { return j(e, "nextSibling") }, prev: function(e) { return j(e, "previousSibling") }, nextAll: function(e) { return w(e, "nextSibling") }, prevAll: function(e) { return w(e, "previousSibling") }, nextUntil: function(e, t, n) { return w(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return w(e, "previousSibling", n) }, siblings: function(e) { return E((e.parentNode || {}).firstChild, e) }, children: function(e) { return E(e.firstChild) }, contents: function(e) { return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes)) } }, function(i, o) { C.fn[i] = function(e, t) { var n = C.map(this, o, e); return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (O[i] || C.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n) } });
    var P = /[^\x20\t\r\n\f]+/g;

    function q(e) { return e }

    function H(e) { throw e }

    function M(e, t, n, i) { var o; try { e && b(o = e.promise) ? o.call(e).done(t).fail(n) : e && b(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i)) } catch (e) { n.apply(void 0, [e]) } }
    C.Callbacks = function(i) {
        var n;
        i = "string" == typeof i ? (n = {}, C.each(i.match(P) || [], function(e, t) { n[t] = !0 }), n) : C.extend({}, i);

        function o() {
            for (a = a || i.once, t = r = !0; l.length; u = -1)
                for (e = l.shift(); ++u < s.length;) !1 === s[u].apply(e[0], e[1]) && i.stopOnFalse && (u = s.length, e = !1);
            i.memory || (e = !1), r = !1, a && (s = e ? [] : "")
        }
        var r, e, t, a, s = [],
            l = [],
            u = -1,
            c = { add: function() { return s && (e && !r && (u = s.length - 1, l.push(e)), function n(e) { C.each(e, function(e, t) { b(t) ? i.unique && c.has(t) || s.push(t) : t && t.length && "string" !== p(t) && n(t) }) }(arguments), e && !r && o()), this }, remove: function() { return C.each(arguments, function(e, t) { for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= u && u-- }), this }, has: function(e) { return e ? -1 < C.inArray(e, s) : 0 < s.length }, empty: function() { return s = s && [], this }, disable: function() { return a = l = [], s = e = "", this }, disabled: function() { return !s }, lock: function() { return a = l = [], e || r || (s = e = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || o()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!t } };
        return c
    }, C.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                a = {
                    state: function() { return o },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    catch: function(e) { return a.then(null, e) },
                    pipe: function() {
                        var o = arguments;
                        return C.Deferred(function(i) {
                            C.each(r, function(e, t) {
                                var n = b(o[t[4]]) && o[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function u(o, r, a, s) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < l)) {
                                        if ((e = a.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? s ? t.call(e, u(l, r, q, s), u(l, r, H, s)) : (l++, t.call(e, u(l, r, q, s), u(l, r, H, s), u(l, r, q, r.notifyWith))) : (a !== q && (n = void 0, i = [e]), (s || r.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = s ? e : function() { try { e() } catch (e) { C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (a !== H && (n = void 0, i = [e]), r.rejectWith(n, i)) } };
                                o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), x.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) { r[0][3].add(u(0, e, b(i) ? i : q, e.notifyWith)), r[1][3].add(u(0, e, b(t) ? t : q)), r[2][3].add(u(0, e, b(n) ? n : H)) }).promise()
                    },
                    promise: function(e) { return null != e ? C.extend(e, a) : a }
                },
                s = {};
            return C.each(r, function(e, t) {
                var n = t[2],
                    i = t[5];
                a[t[1]] = n.add, i && n.add(function() { o = i }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            function t(t) { return function(e) { o[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(o, r) } }
            var n = arguments.length,
                i = n,
                o = Array(i),
                r = s.call(arguments),
                a = C.Deferred();
            if (n <= 1 && (M(e, a.done(t(i)).resolve, a.reject, !n), "pending" === a.state() || b(r[i] && r[i].then))) return a.then();
            for (; i--;) M(r[i], t(i), a.reject);
            return a.promise()
        }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) { x.console && x.console.warn && e && F.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, C.readyException = function(e) { x.setTimeout(function() { throw e }) };
    var R = C.Deferred();

    function B() { T.removeEventListener("DOMContentLoaded", B), x.removeEventListener("load", B), C.ready() }
    C.fn.ready = function(e) { return R.then(e).catch(function(e) { C.readyException(e) }), this }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(T, [C])
        }
    }), C.ready.then = R.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? x.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", B), x.addEventListener("load", B));
    var W = function(e, t, n, i, o, r, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === p(n))
                for (s in o = !0, n) W(e, t, s, n[s], !0, r, a);
            else if (void 0 !== i && (o = !0, b(i) || (a = !0), u && (t = a ? (t.call(e, i), null) : (u = t, function(e, t, n) { return u.call(C(e), n) })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function Q(e, t) { return t.toUpperCase() }

    function $(e) { return e.replace(z, "ms-").replace(U, Q) }

    function V(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType }

    function X() { this.expando = C.expando + X.uid++ }
    X.uid = 1, X.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[$(t)] = n;
            else
                for (i in t) o[$(i)] = t[i];
            return o
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in i ? [t] : t.match(P) || []).length; for (; n--;) delete i[t[n]] }
                void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) { e = e[this.expando]; return void 0 !== e && !C.isEmptyObject(e) }
    };
    var K = new X,
        Y = new X,
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function J(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try { n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : G.test(o) ? JSON.parse(o) : o) } catch (e) {}
                Y.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({ hasData: function(e) { return Y.hasData(e) || K.hasData(e) }, data: function(e, t, n) { return Y.access(e, t, n) }, removeData: function(e, t) { Y.remove(e, t) }, _data: function(e, t, n) { return K.access(e, t, n) }, _removeData: function(e, t) { K.remove(e, t) } }), C.fn.extend({
        data: function(n, e) {
            var t, i, o, r = this[0],
                a = r && r.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() { Y.set(this, n) }) : W(this, function(e) { var t; return r && void 0 === e ? void 0 !== (t = Y.get(r, n)) || void 0 !== (t = J(r, n)) ? t : void 0 : void this.each(function() { Y.set(this, n, e) }) }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = Y.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = $(i.slice(5)), J(r, i, o[i]));
                K.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) { return this.each(function() { Y.remove(this, e) }) }
    }), C.extend({
        queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, C.makeArray(n)) : i.push(n)), i || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = C._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() { C.dequeue(e, t) }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return K.get(e, n) || K.access(e, n, { empty: C.Callbacks("once memory").add(function() { K.remove(e, [t + "queue", n]) }) }) }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { C.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            function n() {--o || r.resolveWith(a, [a]) }
            var i, o = 1,
                r = C.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = K.get(a[s], e + "queueHooks")) && i.empty && (o++, i.empty.add(n));
            return n(), r.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = T.documentElement,
        oe = function(e) { return C.contains(e.ownerDocument, e) },
        re = { composed: !0 };
    ie.getRootNode && (oe = function(e) { return C.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument });

    function ae(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display") }

    function se(e, t, n, i) {
        var o, r, a = 20,
            s = i ? function() { return i.cur() } : function() { return C.css(e, t, "") },
            l = s(),
            u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && te.exec(C.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--;) C.style(e, t, c + u), (1 - r) * (1 - (r = s() / l || .5)) <= 0 && (a = 0), c /= r;
            c *= 2, C.style(e, t, c + u), n = n || []
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o
    }
    var le = {};

    function ue(e, t) { for (var n, i, o, r, a, s, l = [], u = 0, c = e.length; u < c; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (l[u] = K.get(i, "display") || null, l[u] || (i.style.display = "")), "" === i.style.display && ae(i) && (l[u] = (s = r = o = void 0, r = i.ownerDocument, a = i.nodeName, (s = le[a]) || (o = r.body.appendChild(r.createElement(a)), s = C.css(o, "display"), o.parentNode.removeChild(o), "none" === s && (s = "block"), le[a] = s)))) : "none" !== n && (l[u] = "none", K.set(i, "display", n))); for (u = 0; u < c; u++) null != l[u] && (e[u].style.display = l[u]); return e }
    C.fn.extend({ show: function() { return ue(this, !0) }, hide: function() { return ue(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ae(this) ? C(this).show() : C(this).hide() }) } });
    var ce = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        de = /^$|^module$|\/(?:java|ecma)script/i,
        f = T.createDocumentFragment().appendChild(T.createElement("div"));
    (h = T.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), f.appendChild(h), y.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked, f.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!f.cloneNode(!0).lastChild.defaultValue, f.innerHTML = "<option></option>", y.option = !!f.lastChild;
    var he = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function pe(e, t) { var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []; return void 0 === t || t && k(e, t) ? C.merge([e], n) : n }

    function ge(e, t) { for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval")) }
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead, he.th = he.td, y.option || (he.optgroup = he.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function ve(e, t, n, i, o) {
        for (var r, a, s, l, u, c = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++)
            if ((r = e[d]) || 0 === r)
                if ("object" === p(r)) C.merge(f, r.nodeType ? [r] : r);
                else if (me.test(r)) {
            for (a = a || c.appendChild(t.createElement("div")), s = (fe.exec(r) || ["", ""])[1].toLowerCase(), s = he[s] || he._default, a.innerHTML = s[1] + C.htmlPrefilter(r) + s[2], u = s[0]; u--;) a = a.lastChild;
            C.merge(f, a.childNodes), (a = c.firstChild).textContent = ""
        } else f.push(t.createTextNode(r));
        for (c.textContent = "", d = 0; r = f[d++];)
            if (i && -1 < C.inArray(r, i)) o && o.push(r);
            else if (l = oe(r), a = pe(c.appendChild(r), "script"), l && ge(a), n)
            for (u = 0; r = a[u++];) de.test(r.type || "") && n.push(r);
        return c
    }
    var ye = /^([^.]*)(?:\.(.+)|)/;

    function be() { return !0 }

    function _e() { return !1 }

    function we(e, t) { return e === function() { try { return T.activeElement } catch (e) {} }() == ("focus" === t) }

    function Ee(e, t, n, i, o, r) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (i = i || n, n = void 0), t) Ee(e, s, n, i, t[s], r); return e }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = _e;
        else if (!o) return e;
        return 1 === r && (a = o, (o = function(e) { return C().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = C.guid++)), e.each(function() { C.event.add(this, t, o, i, n) })
    }

    function xe(e, o, r) {
        r ? (K.set(e, o, !1), C.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = K.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (i.length)(C.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (i = s.call(arguments), K.set(this, o, i), t = r(this, o), this[o](), i !== (n = K.get(this, o)) || t ? K.set(this, o, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else i.length && (K.set(this, o, { value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, o) && C.event.add(e, o, be)
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, a, s, l, u, c, f, d, h, p = K.get(t);
            if (V(t))
                for (n.handler && (n = (r = n).handler, o = r.selector), o && C.find.matchesSelector(ie, o), n.guid || (n.guid = C.guid++), (s = p.events) || (s = p.events = Object.create(null)), (a = p.handle) || (a = p.handle = function(e) { return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(P) || [""]).length; l--;) f = h = (u = ye.exec(e[l]) || [])[1], d = (u[2] || "").split(".").sort(), f && (c = C.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = C.event.special[f] || {}, u = C.extend({ type: f, origType: h, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && C.expr.match.needsContext.test(o), namespace: d.join(".") }, r), (h = s[f]) || ((h = s[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, d, a) || t.addEventListener && t.addEventListener(f, a)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), C.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, u, c, f, d, h, p, g, m = K.hasData(e) && K.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(P) || [""]).length; u--;)
                    if (h = g = (s = ye.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
                        for (f = C.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = d.length; r--;) c = d[r], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(r, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) C.event.remove(e, h + t[u], n, i, !0);
                C.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, a = new Array(arguments.length),
                s = C.event.fix(e),
                l = (K.get(this, "events") || Object.create(null))[s.type] || [],
                e = C.event.special[s.type] || {};
            for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (s.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                for (r = C.event.handlers.call(this, s, l), t = 0;
                    (i = r[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (r = [], a = {}, n = 0; n < l; n++) void 0 === a[o = (i = t[n]).selector + " "] && (a[o] = i.needsContext ? -1 < C(o, this).index(u) : C.find(o, this, null, [u]).length), a[o] && r.push(i);
                        r.length && s.push({ elem: u, handlers: r })
                    }
            return u = this, l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s
        },
        addProp: function(t, e) { Object.defineProperty(C.Event.prototype, t, { enumerable: !0, configurable: !0, get: b(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[C.expando] ? e : new C.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { e = this || e; return ce.test(e.type) && e.click && k(e, "input") && xe(e, "click", be), !1 }, trigger: function(e) { e = this || e; return ce.test(e.type) && e.click && k(e, "input") && xe(e, "click"), !0 }, _default: function(e) { e = e.target; return ce.test(e.type) && e.click && k(e, "input") && K.get(e, "click") || k(e, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, C.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : _e, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: _e,
        isPropagationStopped: _e,
        isImmediatePropagationStopped: _e,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = be, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = be, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = be, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, C.event.addProp), C.each({ focus: "focusin", blur: "focusout" }, function(e, t) { C.event.special[e] = { setup: function() { return xe(this, e, we), !1 }, trigger: function() { return xe(this, e), !0 }, _default: function() { return !0 }, delegateType: t } }), C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, o) {
        C.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), C.fn.extend({ on: function(e, t, n, i) { return Ee(this, e, t, n, i) }, one: function(e, t, n, i) { return Ee(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = _e), this.each(function() { C.event.remove(this, e, n, t) }); for (o in e) this.off(o, t, e[o]); return this } });
    var Te = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ke(e, t) { return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e }

    function Ne(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Ae(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function De(e, t) {
        var n, i, o, r;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (r = K.get(e).events))
                for (o in K.remove(t, "handle events"), r)
                    for (n = 0, i = r[o].length; n < i; n++) C.event.add(t, o, r[o][n]);
            Y.hasData(e) && (e = Y.access(e), e = C.extend({}, e), Y.set(t, e))
        }
    }

    function Ie(n, i, o, r) {
        i = m(i);
        var e, t, a, s, l, u, c = 0,
            f = n.length,
            d = f - 1,
            h = i[0],
            p = b(h);
        if (p || 1 < f && "string" == typeof h && !y.checkClone && Ce.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), Ie(t, i, o, r)
        });
        if (f && (t = (e = ve(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (s = (a = C.map(pe(e, "script"), Ne)).length; c < f; c++) l = e, c !== d && (l = C.clone(l, !0, !0), s && C.merge(a, pe(l, "script"))), o.call(n[c], l, c);
            if (s)
                for (u = a[a.length - 1].ownerDocument, C.map(a, Ae), c = 0; c < s; c++) l = a[c], de.test(l.type || "") && !K.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u) : _(l.textContent.replace(Se, ""), l, u))
        }
        return n
    }

    function Le(e, t, n) { for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(pe(i)), i.parentNode && (n && oe(i) && ge(pe(i, "script")), i.parentNode.removeChild(i)); return e }
    C.extend({
        htmlPrefilter: function(e) { return e },
        clone: function(e, t, n) {
            var i, o, r, a, s, l, u, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = pe(c), i = 0, o = (r = pe(e)).length; i < o; i++) s = r[i], "input" === (u = (l = a[i]).nodeName.toLowerCase()) && ce.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (r = r || pe(e), a = a || pe(c), i = 0, o = r.length; i < o; i++) De(r[i], a[i]);
                else De(e, c);
            return 0 < (a = pe(c, "script")).length && ge(a, !f && pe(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (V(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) { return Le(this, e, !0) },
        remove: function(e) { return Le(this, e) },
        text: function(e) { return W(this, function(e) { return void 0 === e ? C.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Ie(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e) }) },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = ke(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(pe(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return C.clone(this, e, t) }) },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Te.test(e) && !he[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { C.fn[e] = function(e) { for (var t, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), C(i[r])[a](t), l.apply(n, t.get()); return this.pushStack(n) } });

    function Oe(e, t, n) { var i, o = {}; for (i in t) o[i] = e.style[i], e.style[i] = t[i]; for (i in n = n.call(e), t) e.style[i] = o[i]; return n }
    var je, Pe, qe, He, Me, Fe, Re, Be, We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        ze = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = x), t.getComputedStyle(e) },
        Ue = new RegExp(ne.join("|"), "i");

    function Qe(e, t, n) { var i, o, r = e.style; return (n = n || ze(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || oe(e) || (o = C.style(e, t)), !y.pixelBoxStyles() && We.test(o) && Ue.test(t) && (i = r.width, e = r.minWidth, t = r.maxWidth, r.minWidth = r.maxWidth = r.width = o, o = n.width, r.width = i, r.minWidth = e, r.maxWidth = t)), void 0 !== o ? o + "" : o }

    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Ve() {
        var e;
        Be && (Re.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Be.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Re).appendChild(Be), e = x.getComputedStyle(Be), je = "1%" !== e.top, Fe = 12 === Xe(e.marginLeft), Be.style.right = "60%", He = 36 === Xe(e.right), Pe = 36 === Xe(e.width), Be.style.position = "absolute", qe = 12 === Xe(Be.offsetWidth / 3), ie.removeChild(Re), Be = null)
    }

    function Xe(e) { return Math.round(parseFloat(e)) }
    Re = T.createElement("div"), (Be = T.createElement("div")).style && (Be.style.backgroundClip = "content-box", Be.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Be.style.backgroundClip, C.extend(y, { boxSizingReliable: function() { return Ve(), Pe }, pixelBoxStyles: function() { return Ve(), He }, pixelPosition: function() { return Ve(), je }, reliableMarginLeft: function() { return Ve(), Fe }, scrollboxSize: function() { return Ve(), qe }, reliableTrDimensions: function() { var e, t, n; return null == Me && (e = T.createElement("table"), t = T.createElement("tr"), n = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ie.appendChild(e).appendChild(t).appendChild(n), n = x.getComputedStyle(t), Me = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, ie.removeChild(e)), Me } }));
    var Ke = ["Webkit", "Moz", "ms"],
        Ye = T.createElement("div").style,
        Ge = {};

    function Ze(e) {
        return C.cssProps[e] || Ge[e] || (e in Ye ? e : Ge[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ke.length; n--;)
                if ((e = Ke[n] + t) in Ye) return e
        }(e) || e)
    }
    var Je = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };

    function it(e, t, n) { var i = te.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function ot(e, t, n, i, o, r) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += C.css(e, n + ne[a], !0, o)), i ? ("content" === n && (l -= C.css(e, "padding" + ne[a], !0, o)), "margin" !== n && (l -= C.css(e, "border" + ne[a] + "Width", !0, o))) : (l += C.css(e, "padding" + ne[a], !0, o), "padding" !== n ? l += C.css(e, "border" + ne[a] + "Width", !0, o) : s += C.css(e, "border" + ne[a] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - s - .5)) || 0), l
    }

    function rt(e, t, n) {
        var i = ze(e),
            o = (!y.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
            r = o,
            a = Qe(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && o || !y.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, i), (r = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ot(e, t, n || (o ? "border" : "content"), r, i, a) + "px"
    }

    function at(e, t, n, i, o) { return new at.prototype.init(e, t, n, i, o) }
    C.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { e = Qe(e, "opacity"); return "" === e ? "1" : e } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = $(t),
                    l = et.test(t),
                    u = e.style;
                if (l || (t = Ze(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : u[t];
                "string" == (r = typeof n) && (o = te.exec(n)) && o[1] && (n = se(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, i) { var o, r = $(t); return et.test(t) || (t = Ze(r)), (r = C.cssHooks[t] || C.cssHooks[r]) && "get" in r && (o = r.get(e, !0, n)), void 0 === o && (o = Qe(e, t, i)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (t = parseFloat(o), !0 === n || isFinite(t) ? t || 0 : o) : o }
    }), C.each(["height", "width"], function(e, s) {
        C.cssHooks[s] = {
            get: function(e, t, n) { if (t) return !Je.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, s, n) : Oe(e, tt, function() { return rt(e, s, n) }) },
            set: function(e, t, n) {
                var i, o = ze(e),
                    r = !y.scrollboxSize() && "absolute" === o.position,
                    a = (r || n) && "border-box" === C.css(e, "boxSizing", !1, o),
                    n = n ? ot(e, s, n, a, o) : 0;
                return a && r && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(o[s]) - ot(e, s, "border", !1, o) - .5)), n && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = C.css(e, s)), it(0, t, n)
            }
        }
    }), C.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), C.each({ margin: "", padding: "", border: "Width" }, function(o, r) { C.cssHooks[o + r] = { expand: function(e) { for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ne[t] + r] = i[t] || i[t - 2] || i[0]; return n } }, "margin" !== o && (C.cssHooks[o + r].set = it) }), C.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var i, o, r = {},
                    a = 0;
                if (Array.isArray(t)) { for (i = ze(e), o = t.length; a < o; a++) r[t[a]] = C.css(e, t[a], !1, i); return r }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = at).prototype = { constructor: at, init: function(e, t, n, i, o, r) { this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px") }, cur: function() { var e = at.propHooks[this.prop]; return (e && e.get ? e : at.propHooks._default).get(this) }, run: function(e) { var t, n = at.propHooks[this.prop]; return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : at.propHooks._default).set(this), this } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e) { return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0 }, set: function(e) { C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, C.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, C.fx = at.prototype.init, C.fx.step = {};
    var st, lt, ut = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function ft() { lt && (!1 === T.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(ft) : x.setTimeout(ft, C.fx.interval), C.fx.tick()) }

    function dt() { return x.setTimeout(function() { st = void 0 }), st = Date.now() }

    function ht(e, t) {
        var n, i = 0,
            o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ne[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function pt(e, t, n) {
        for (var i, o = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), r = 0, a = o.length; r < a; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function gt(o, e, t) {
        var n, r, i = 0,
            a = gt.prefilters.length,
            s = C.Deferred().always(function() { delete l.elem }),
            l = function() { if (r) return !1; for (var e = st || dt(), e = Math.max(0, u.startTime + u.duration - e), t = 1 - (e / u.duration || 0), n = 0, i = u.tweens.length; n < i; n++) u.tweens[n].run(t); return s.notifyWith(o, [u, t, e]), t < 1 && i ? e : (i || s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u]), !1) },
            u = s.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: st || dt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { e = C.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(e), e },
                stop: function(e) {
                    var t = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; t < n; t++) u.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u, e])) : s.rejectWith(o, [u, e]), this
                }
            }),
            c = u.props;
        for (function(e, t) {
                var n, i, o, r, a;
                for (n in e)
                    if (o = t[i = $(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = C.cssHooks[i]) && "expand" in a)
                        for (n in r = a.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(c, u.opts.specialEasing); i < a; i++)
            if (n = gt.prefilters[i].call(u, o, c, u.opts)) return b(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(c, pt, u), b(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, { elem: o, anim: u, queue: u.opts.queue })), u
    }
    C.Animation = C.extend(gt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return se(n.elem, e, te.exec(t), n), n }] },
        tweener: function(e, t) { for (var n, i = 0, o = (e = b(e) ? (t = e, ["*"]) : e.match(P)).length; i < o; i++) n = e[i], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var i, o, r, a, s, l, u, c = "width" in t || "height" in t,
                f = this,
                d = {},
                h = e.style,
                p = e.nodeType && ae(e),
                g = K.get(e, "fxshow");
            for (i in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, f.always(function() { f.always(function() { a.unqueued--, C.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (o = t[i], ut.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        p = !0
                    }
                    d[i] = g && g[i] || C.style(e, i)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                for (i in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = g && g.display) && (u = K.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (ue([e], !0), u = e.style.display || u, c = C.css(e, "display"), ue([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (f.done(function() { h.display = u }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), l = !1, d) l || (g ? "hidden" in g && (p = g.hidden) : g = K.access(e, "fxshow", { display: u }), r && (g.hidden = !p), p && ue([e], !0), f.done(function() { for (i in p || ue([e]), K.remove(e, "fxshow"), d) C.style(e, i, d[i]) })), l = pt(p ? g[i] : 0, i, f), i in g || (g[i] = l.start, p && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) { t ? gt.prefilters.unshift(e) : gt.prefilters.push(e) }
    }), C.speed = function(e, t, n) { var i = e && "object" == typeof e ? C.extend({}, e) : { complete: n || !n && t || b(e) && e, duration: e, easing: n && t || t && !b(t) && t }; return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { b(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue) }, i }, C.fn.extend({
        fadeTo: function(e, t, n, i) { return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
        animate: function(t, e, n, i) {
            var o = C.isEmptyObject(t),
                r = C.speed(e, n, i),
                i = function() {
                    var e = gt(this, C.extend({}, t), r);
                    (o || K.get(this, "finish")) && e.stop(!0)
                };
            return i.finish = i, o || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
        },
        stop: function(o, e, r) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof o && (r = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = C.timers,
                    i = K.get(this);
                if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && ct.test(t) && a(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || C.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = K.get(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    o = C.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, i) {
        var o = C.fn[i];
        C.fn[i] = function(e, t, n) { return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ht(i, !0), e, t, n) }
    }), C.each({ slideDown: ht("show"), slideUp: ht("hide"), slideToggle: ht("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, i) { C.fn[e] = function(e, t, n) { return this.animate(i, e, t, n) } }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), st = void 0
    }, C.fx.timer = function(e) { C.timers.push(e), C.fx.start() }, C.fx.interval = 13, C.fx.start = function() { lt || (lt = !0, ft()) }, C.fx.stop = function() { lt = null }, C.fx.speeds = { slow: 600, fast: 200, _default: 400 }, C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = x.setTimeout(e, i);
            t.stop = function() { x.clearTimeout(n) }
        })
    }, f = T.createElement("input"), ee = T.createElement("select").appendChild(T.createElement("option")), f.type = "checkbox", y.checkOn = "" !== f.value, y.optSelected = ee.selected, (f = T.createElement("input")).value = "t", f.type = "radio", y.radioValue = "t" === f.value;
    var mt, vt = C.expr.attrHandle;
    C.fn.extend({ attr: function(e, t) { return W(this, C.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { C.removeAttr(this, e) }) } }), C.extend({
        attr: function(e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === r && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (i = o.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && k(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(P);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), mt = { set: function(e, t, n) { return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n } }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = vt[t] || C.find.attr;
        vt[t] = function(e, t, n) { var i, o, r = t.toLowerCase(); return n || (o = vt[r], vt[r] = i, i = null != a(e, t, n) ? r : null, vt[r] = o), i }
    });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;

    function _t(e) { return (e.match(P) || []).join(" ") }

    function wt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function Et(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [] }
    C.fn.extend({ prop: function(e, t) { return W(this, C.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[C.propFix[e] || e] }) } }), C.extend({ prop: function(e, t, n) { var i, o, r = e.nodeType; if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = C.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), y.optSelected || (C.propHooks.selected = {
        get: function(e) { e = e.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { C.propFix[this.toLowerCase()] = this }), C.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, a, s = 0;
            if (b(t)) return this.each(function(e) { C(this).addClass(t.call(this, e, wt(this))) });
            if ((e = Et(t)).length)
                for (; n = this[s++];)
                    if (a = wt(n), i = 1 === n.nodeType && " " + _t(a) + " ") {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a !== (a = _t(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a, s = 0;
            if (b(t)) return this.each(function(e) { C(this).removeClass(t.call(this, e, wt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Et(t)).length)
                for (; n = this[s++];)
                    if (a = wt(n), i = 1 === n.nodeType && " " + _t(a) + " ") {
                        for (r = 0; o = e[r++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        a !== (a = _t(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(o, t) {
            var r = typeof o,
                a = "string" == r || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(e) { C(this).toggleClass(o.call(this, e, wt(this), t), t) }) : this.each(function() {
                var e, t, n, i;
                if (a)
                    for (t = 0, n = C(this), i = Et(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" != r || ((e = wt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + _t(wt(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    C.fn.extend({ val: function(t) { var n, e, i, o = this[0]; return arguments.length ? (i = b(t), this.each(function(e) { 1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) { return null == e ? "" : e + "" })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e)) })) : o ? (n = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(xt, "") : null == e ? "" : e : void 0 } }), C.extend({
        valHooks: {
            option: { get: function(e) { var t = C.find.attr(e, "value"); return null != t ? t : _t(C.text(e)) } },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, o = "select-one" === e.type, r = o ? null : [], a = o ? i + 1 : n.length, s = i < 0 ? a : o ? i : 0; s < a; s++)
                        if (((t = n[s]).selected || s === i) && !t.disabled && (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))) {
                            if (t = C(t).val(), o) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) { for (var n, i, o = e.options, r = C.makeArray(t), a = o.length; a--;)((i = o[a]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0); return n || (e.selectedIndex = -1), r }
            }
        }
    }), C.each(["radio", "checkbox"], function() { C.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t) } }, y.checkOn || (C.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in x;

    function Tt(e) { e.stopPropagation() }
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var o, r, a, s, l, u, c, f = [n || T],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [],
                p = c = r = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(d + C.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), s = d.indexOf(":") < 0 && "on" + d, (e = e[C.expando] ? e : new C.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[d] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !g(n)) {
                    for (a = u.delegateType || d, Ct.test(a + d) || (p = p.parentNode); p; p = p.parentNode) f.push(p), r = p;
                    r === (n.ownerDocument || T) && f.push(r.defaultView || r.parentWindow || x)
                }
                for (o = 0;
                    (p = f[o++]) && !e.isPropagationStopped();) c = p, e.type = 1 < o ? a : u.bindType || d, (l = (K.get(p, "events") || Object.create(null))[e.type] && K.get(p, "handle")) && l.apply(p, t), (l = s && p[s]) && l.apply && V(p) && (e.result = l.apply(p, t), !1 === e.result && e.preventDefault());
                return e.type = d, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !V(n) || s && b(n[d]) && !g(n) && ((r = n[s]) && (n[s] = null), C.event.triggered = d, e.isPropagationStopped() && c.addEventListener(d, Tt), n[d](), e.isPropagationStopped() && c.removeEventListener(d, Tt), C.event.triggered = void 0, r && (n[s] = r)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = C.extend(new C.Event, n, { type: e, isSimulated: !0 });
            C.event.trigger(e, null, t)
        }
    }), C.fn.extend({ trigger: function(e, t) { return this.each(function() { C.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return C.event.trigger(e, t, n, !0) } }), y.focusin || C.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
        function o(e) { C.event.simulate(i, e.target, C.event.fix(e)) }
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = K.access(e, i);
                t || e.addEventListener(n, o, !0), K.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = K.access(e, i) - 1;
                t ? K.access(e, i, t) : (e.removeEventListener(n, o, !0), K.remove(e, i))
            }
        }
    });
    var St = x.location,
        kt = { guid: Date.now() },
        Nt = /\?/;
    C.parseXML = function(e) { var t, n; if (!e || "string" != typeof e) return null; try { t = (new x.DOMParser).parseFromString(e, "text/xml") } catch (e) {} return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function(e) { return e.textContent }).join("\n") : e)), t };
    var At = /\[\]$/,
        Dt = /\r?\n/g,
        It = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    C.param = function(e, t) {
        function n(e, t) { t = b(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t) }
        var i, o = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() { n(this.name, this.value) });
        else
            for (i in e) ! function n(i, e, o, r) {
                if (Array.isArray(e)) C.each(e, function(e, t) { o || At.test(i) ? r(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, r) });
                else if (o || "object" !== p(e)) r(i, e);
                else
                    for (var t in e) n(i + "[" + t + "]", e[t], o, r)
            }(i, e[i], t, n);
        return o.join("&")
    }, C.fn.extend({ serialize: function() { return C.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = C.prop(this, "elements"); return e ? C.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !C(this).is(":disabled") && Lt.test(this.nodeName) && !It.test(e) && (this.checked || !ce.test(e)) }).map(function(e, t) { var n = C(this).val(); return null == n ? null : Array.isArray(n) ? C.map(n, function(e) { return { name: t.name, value: e.replace(Dt, "\r\n") } }) : { name: t.name, value: n.replace(Dt, "\r\n") } }).get() } });
    var Ot = /%20/g,
        jt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Ft = {},
        Rt = {},
        Bt = "*/".concat("*"),
        Wt = T.createElement("a");

    function zt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(P) || [];
            if (b(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function Ut(t, i, o, r) {
        var a = {},
            s = t === Rt;

        function l(e) { var n; return a[e] = !0, C.each(t[e] || [], function(e, t) { t = t(i, o, r); return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1) }), n }
        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }

    function Qt(e, t) { var n, i, o = C.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((o[n] ? e : i = i || {})[n] = t[n]); return i && C.extend(!0, e, i), e }
    Wt.href = St.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: St.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? Qt(Qt(e, C.ajaxSettings), t) : Qt(C.ajaxSettings, e) },
        ajaxPrefilter: zt(Ft),
        ajaxTransport: zt(Rt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var l, u, c, n, f, i, d, h, o, r, p = C.ajaxSetup({}, t),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                v = C.Deferred(),
                y = C.Callbacks("once memory"),
                b = p.statusCode || {},
                a = {},
                s = {},
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (d) {
                            if (!n)
                                for (n = {}; t = qt.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return d ? c : null },
                    setRequestHeader: function(e, t) { return null == d && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == d && (p.mimeType = e), this },
                    statusCode: function(e) {
                        if (e)
                            if (d) w.always(e[w.status]);
                            else
                                for (var t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) { e = e || _; return l && l.abort(e), E(0, e), this }
                };
            if (v.promise(w), p.url = ((e || p.url || St.href) + "").replace(Mt, St.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [""], null == p.crossDomain) { i = T.createElement("a"); try { i.href = p.url, i.href = i.href, p.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host } catch (e) { p.crossDomain = !0 } }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)), Ut(Ft, p, t, w), d) return w;
            for (o in (h = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ht.test(p.type), u = p.url.replace(jt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ot, "+")) : (r = p.url.slice(u.length), p.data && (p.processData || "string" == typeof p.data) && (u += (Nt.test(u) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (u = u.replace(Pt, "$1"), r = (Nt.test(u) ? "&" : "?") + "_=" + kt.guid++ + r), p.url = u + r), p.ifModified && (C.lastModified[u] && w.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && w.setRequestHeader("If-None-Match", C.etag[u])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : p.accepts["*"]), p.headers) w.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, w, p) || d)) return w.abort();
            if (_ = "abort", y.add(p.complete), w.done(p.success), w.fail(p.error), l = Ut(Rt, p, t, w)) {
                if (w.readyState = 1, h && m.trigger("ajaxSend", [w, p]), d) return w;
                p.async && 0 < p.timeout && (f = x.setTimeout(function() { w.abort("timeout") }, p.timeout));
                try { d = !1, l.send(a, E) } catch (e) {
                    if (d) throw e;
                    E(-1, e)
                }
            } else E(-1, "No Transport");

            function E(e, t, n, i) {
                var o, r, a, s = t;
                d || (d = !0, f && x.clearTimeout(f), l = void 0, c = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in s)
                            if (s[o] && s[o].test(i)) { l.unshift(o); break }
                    if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) { r = o; break }
                            a = a || o
                        }
                        r = r || a
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, w, n)), !i && -1 < C.inArray("script", p.dataTypes) && C.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}), a = function(e, t, n, i) {
                    var o, r, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (r = c.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(a = u[l + " " + r] || u["* " + r]))
                            for (o in u)
                                if ((s = o.split(" "))[1] === r && (a = u[l + " " + s[0]] || u["* " + s[0]])) {!0 === a ? a = u[o] : !0 !== u[o] && (r = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + r } }
                    }
                    return { state: "success", data: t }
                }(p, a, w, i), i ? (p.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (C.lastModified[u] = n), (n = w.getResponseHeader("etag")) && (C.etag[u] = n)), 204 === e || "HEAD" === p.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, o = a.data, i = !(r = a.error))) : (r = s, !e && s || (s = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || s) + "", i ? v.resolveWith(g, [o, s, w]) : v.rejectWith(g, [w, s, r]), w.statusCode(b), b = void 0, h && m.trigger(i ? "ajaxSuccess" : "ajaxError", [w, p, i ? o : r]), y.fireWith(g, [w, s]), h && (m.trigger("ajaxComplete", [w, p]), --C.active || C.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) { return C.get(e, t, n, "json") },
        getScript: function(e, t) { return C.get(e, void 0, t, "script") }
    }), C.each(["get", "post"], function(e, o) { C[o] = function(e, t, n, i) { return b(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({ url: e, type: o, dataType: i, data: t, success: n }, C.isPlainObject(e) && e)) } }), C.ajaxPrefilter(function(e) { for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "") }), C._evalUrl = function(e, t, n) { return C.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { C.globalEval(e, t, n) } }) }, C.fn.extend({
        wrapAll: function(e) { return this[0] && (b(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) { C(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = b(t); return this.each(function(e) { C(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { C(this).replaceWith(this.childNodes) }), this }
    }), C.expr.pseudos.hidden = function(e) { return !C.expr.pseudos.visible(e) }, C.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, C.ajaxSettings.xhr = function() { try { return new x.XMLHttpRequest } catch (e) {} };
    var $t = { 0: 200, 1223: 204 },
        Vt = C.ajaxSettings.xhr();
    y.cors = !!Vt && "withCredentials" in Vt, y.ajax = Vt = !!Vt, C.ajaxTransport(function(o) {
        var r, a;
        if (y.cors || Vt && !o.crossDomain) return {
            send: function(e, t) {
                var n, i = o.xhr();
                if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) i[n] = o.xhrFields[n];
                for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                r = function(e) { return function() { r && (r = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t($t[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders())) } }, i.onload = r(), a = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() { 4 === i.readyState && x.setTimeout(function() { r && a() }) }, r = r("abort");
                try { i.send(o.hasContent && o.data || null) } catch (e) { if (r) throw e }
            },
            abort: function() { r && r() }
        }
    }), C.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), C.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return C.globalEval(e), e } } }), C.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), C.ajaxTransport("script", function(n) { var i, o; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { i = C("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", o = function(e) { i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type) }), T.head.appendChild(i[0]) }, abort: function() { o && o() } } });
    var Xt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Xt.pop() || C.expando + "_" + kt.guid++; return this[e] = !0, e } }), C.ajaxPrefilter("json jsonp", function(e, t, n) { var i, o, r, a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Kt, "$1" + i) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() { return r || C.error(i + " was not called"), r[0] }, e.dataTypes[0] = "json", o = x[i], x[i] = function() { r = arguments }, n.always(function() { void 0 === o ? C(x).removeProp(i) : x[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), r && b(o) && o(r[0]), r = o = void 0 }), "script" }), y.createHTMLDocument = ((f = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === f.childNodes.length), C.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), i = !n && [], (n = N.exec(e)) ? [t.createElement(n[1])] : (n = ve([e], t, i), i && i.length && C(i).remove(), C.merge([], n.childNodes))); var i }, C.fn.load = function(e, t, n) {
        var i, o, r, a = this,
            s = e.indexOf(" ");
        return -1 < s && (i = _t(e.slice(s)), e = e.slice(0, s)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && C.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function(e) { r = arguments, a.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, r || [e.responseText, t, e]) }) }), this
    }, C.expr.pseudos.animated = function(t) { return C.grep(C.timers, function(e) { return t === e.elem }).length }, C.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s = C.css(e, "position"),
                l = C(e),
                u = {};
            "static" === s && (e.style.position = "relative"), r = l.offset(), i = C.css(e, "top"), a = C.css(e, "left"), a = ("absolute" === s || "fixed" === s) && -1 < (i + a).indexOf("auto") ? (o = (s = l.position()).top, s.left) : (o = parseFloat(i) || 0, parseFloat(a) || 0), b(t) && (t = t.call(e, n, C.extend({}, r))), null != t.top && (u.top = t.top - r.top + o), null != t.left && (u.left = t.left - r.left + a), "using" in t ? t.using.call(e, u) : l.css(u)
        }
    }, C.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { C.offset.setOffset(this, t, e) }); var e, n = this[0]; return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = { top: 0, left: 0 };
                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - o.top - C.css(i, "marginTop", !0), left: t.left - o.left - C.css(i, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent; return e || ie }) }
    }), C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, o) {
        var r = "pageYOffset" === o;
        C.fn[t] = function(e) { return W(this, function(e, t, n) { var i; return g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[o] : e[t] : void(i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n) }, t, e, arguments.length) }
    }), C.each(["top", "left"], function(e, n) { C.cssHooks[n] = $e(y.pixelPosition, function(e, t) { if (t) return t = Qe(e, n), We.test(t) ? C(e).position()[n] + "px" : t }) }), C.each({ Height: "height", Width: "width" }, function(a, s) {
        C.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(i, r) {
            C.fn[r] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, n) { var i; return g(e) ? 0 === r.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o) }, s, n ? e : void 0, n)
            }
        })
    }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { C.fn[t] = function(e) { return this.on(t, e) } }), C.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { C.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } });
    var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    C.proxy = function(e, t) { var n, i; if ("string" == typeof t && (i = e[t], t = e, e = i), b(e)) return n = s.call(arguments, 2), (i = function() { return e.apply(t || this, n.concat(s.call(arguments))) }).guid = e.guid = e.guid || C.guid++, i }, C.holdReady = function(e) { e ? C.readyWait++ : C.ready(!0) }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = b, C.isWindow = g, C.camelCase = $, C.type = p, C.now = Date.now, C.isNumeric = function(e) { var t = C.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, C.trim = function(e) { return null == e ? "" : (e + "").replace(Yt, "") }, "function" == typeof define && define.amd && define("jquery", [], function() { return C });
    var Gt = x.jQuery,
        Zt = x.$;
    return C.noConflict = function(e) { return x.$ === C && (x.$ = Zt), e && x.jQuery === C && (x.jQuery = Gt), C }, void 0 === e && (x.jQuery = x.$ = C), C
}),
function(e, o) {
    "use strict";

    function t(e, t) { this.el_ = this.isString_(e) ? o.querySelectorAll(e) : [e], this.config_ = [], this.options_ = t, this.selectors_ = [], this.init_(), this.destroy = function() { this.loop_(function(e) { e.removeEventListener("reset", this.events.reset), this.removeClasses_(e) }, function(e) { this.reset_(e) }) }, this.rebuild = function() { this.loop_(null, function(e) { this.floatLabel_(e, !0) }) } }
    t.prototype = {
        defaults_: { customEvent: null, customLabel: null, customPlaceholder: null, exclude: ".no-label", inputRegex: /email|number|password|search|tel|text|url/, prefix: "fl-", prioritize: "label", requiredClass: "required", style: 0, transform: "input,select,textarea" },
        init_: function() {
            var n = this;
            n.initEvents_(), n.loop_(function(e, t) {
                t = n.config_[t].style;
                e.addEventListener("reset", n.events.reset), e.classList.add(n.prefixed_("form")), t && e.classList.add(n.prefixed_("style-" + t))
            }, function(e) { n.floatLabel_(e) })
        },
        initEvents_: function() {
            var e = this;
            e.events = { blur: e.onBlur_.bind(e), change: e.onInput_.bind(e), focus: e.onFocus_.bind(e), input: e.onInput_.bind(e), reset: e.onReset_.bind(e) }
        },
        addRemove_: function(e) { return e ? "add" : "remove" },
        build_: function(e) {
            var t = this,
                n = t.getLabel_(e);
            n && (e.classList.add(t.prefixed_(e.tagName.toLowerCase())), t.setLabel_(n, e), t.setPlaceholder_(n, e), t.wrapLabel_(n, e), t.handleEvents_(e, "add"), "function" == typeof t.config_[t.current_].customEvent && t.config_[t.current_].customEvent.call(t, e))
        },
        createEl_: function(e, t) { var n, i = "string" == typeof e ? o.createElement(e) : e; for (n in t = t || {}) t.hasOwnProperty(n) && i.setAttribute(n, t[n]); return i },
        extend_: function() {
            var e = [].slice.call(arguments),
                n = e[0],
                i = e.slice(1);
            return Object.keys(i).forEach(function(e) { for (var t in i[e]) i[e].hasOwnProperty(t) && (n[t] = i[e][t]) }), n
        },
        floatLabel_: function(e, t) {
            if (this.isValidField_(e)) {
                if (this.hasParent_(e)) {
                    if (!0 !== t) return;
                    this.reset_(e)
                }
                this.build_(e)
            }
        },
        getLabel_: function(e) {
            var t = 'label[for="' + e.getAttribute("id") + '"]',
                n = this.el_[this.current_].querySelectorAll(t);
            return 1 < n.length && (n = e.parentNode.querySelectorAll(t)), 1 === n.length && n[0]
        },
        getLabelText_: function(e, t) { e = e.textContent.replace("*", "").trim(), t = t.getAttribute("placeholder"); return (!e || e && t && "placeholder" === this.config_[this.current_].prioritize) && (e = t), e },
        handleEvents_: function(t, n) {
            var i = this.events;
            ["blur", "input", "focus"].forEach(function(e) { "input" !== e || "file" !== t.type && "SELECT" !== t.nodeName || (e = "change"), t[n + "EventListener"](e, i[e]) })
        },
        hasParent_: function(e) { return e.parentNode.classList.contains(this.prefixed_("wrap")) },
        isString_: function(e) { return "[object String]" === Object.prototype.toString.call(e) },
        isValidField_: function(e) {
            var t = "INPUT" === e.tagName && !this.config_[this.current_].inputRegex.test(e.getAttribute("type")),
                n = "SELECT" === e.tagName && null !== e.getAttribute("multiple");
            return e.getAttribute("id") && !t && !n
        },
        loop_: function(e, t) {
            for (var n, i, o = this, r = 0; r < o.el_.length; ++r) {
                void 0 === o.selectors_[r] && (i = ":not(" + (n = o.extend_({}, o.defaults_, o.options_, o.el_[r].getAttribute("data-options"))).exclude.split(/[\s,]+/).join("):not(") + ")", o.selectors_[r] = n.transform.replace(/,/g, i + ",") + i, o.config_[r] = n);
                var a = o.el_[r].querySelectorAll(o.selectors_[r]);
                o.current_ = r, "function" == typeof e && e.call(o, o.el_[r], r);
                for (var s = 0; s < a.length; ++s) "function" == typeof t && t.call(o, a[s], r)
            }
        },
        onBlur_: function(e) { e.target.parentNode.classList.remove(this.prefixed_("has-focus")) },
        onInput_: function(e) { e.target.parentNode.classList[this.addRemove_(e.target.value.length)](this.prefixed_("is-active")) },
        onFocus_: function(e) { e.target.parentNode.classList.add(this.prefixed_("has-focus")) },
        onReset_: function() { setTimeout(this.resetFields_.bind(this)) },
        prefixed_: function(e) { return this.config_[this.current_].prefix + e },
        removeClasses_: function(e) {
            var t = this.config_[this.current_].prefix,
                n = e.className.split(" ").filter(function(e) { return 0 !== e.lastIndexOf(t, 0) });
            e.className = n.join(" ").trim()
        },
        reset_: function(e) {
            var t = e.parentNode;
            if (this.hasParent_(e)) {
                for (var n = o.createDocumentFragment(); t.firstElementChild;) {
                    var i = t.firstElementChild;
                    this.removeClasses_(i), n.appendChild(i)
                }
                t.parentNode.replaceChild(n, t), this.resetPlaceholder_(e), this.handleEvents_(e, "remove")
            }
        },
        resetFields_: function() { for (var e = this, t = e.el_[e.current_].querySelectorAll(e.selectors_[e.current_]), n = 0; n < t.length; ++n) t[n].parentNode.classList[e.addRemove_("SELECT" === t[n].tagName && "" !== t[n].value)](e.prefixed_("is-active")) },
        resetPlaceholder_: function(e) {
            var t = "data-placeholder",
                n = e.getAttribute(t);
            null !== n && (e.removeAttribute(t), e.setAttribute("placeholder", n))
        },
        setLabel_: function(e, t) {
            var n = this;
            e.classList.add(n.prefixed_("label")), e.textContent = n.getLabelText_(e, t), "function" == typeof n.config_[n.current_].customLabel && (e.textContent = n.config_[n.current_].customLabel.call(n, e, t))
        },
        setPlaceholder_: function(e, t) {
            var n = this,
                i = t.getAttribute("placeholder");
            "label" !== n.config_[n.current_].prioritize && i || (i && t.setAttribute("data-placeholder", i), i = n.getLabelText_(e, t)), "function" == typeof n.config_[n.current_].customPlaceholder && (i = n.config_[n.current_].customPlaceholder.call(n, i, t, e)), "SELECT" === t.tagName ? n.setSelectPlaceholder_(t, i) : t.setAttribute("placeholder", i)
        },
        setSelectPlaceholder_: function(e, t) {
            var n = e.firstElementChild;
            n.hasAttribute("value") && n.value ? (e.insertBefore(new Option(t, ""), n), !1 === e.options[e.selectedIndex].defaultSelected && (e.selectedIndex = 0)) : n.setAttribute("value", ""), "" === n.textContent && (n.textContent = t)
        },
        wrapLabel_: function(e, t) {
            var n = this,
                i = n.createEl_("div", { class: n.prefixed_("wrap") + " " + n.prefixed_("wrap-" + t.tagName.toLowerCase()) });
            void 0 !== t.value && t.value.length && i.classList.add(n.prefixed_("is-active")), null === t.getAttribute("required") && !t.classList.contains(n.config_[n.current_].requiredClass) || i.classList.add(n.prefixed_("is-required")), t.parentNode.insertBefore(i, t), i.appendChild(e), i.appendChild(t)
        }
    }, "function" == typeof define && define.amd ? define([], function() { return t }) : "object" == typeof module && module.exports ? module.exports = t : e.FloatLabels = t
}(window, document),
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto) }(function(u) {
    function e() {}

    function c(e, t) { p.ev.on("mfp" + e + _, t) }

    function f(e, t, n, i) { var o = document.createElement("div"); return o.className = "mfp-" + e, n && (o.innerHTML = n), i ? t && t.appendChild(o) : (o = u(o), t && o.appendTo(t)), o }

    function d(e, t) { p.ev.triggerHandler("mfp" + e, t), p.st.callbacks && (e = e.charAt(0).toLowerCase() + e.slice(1), p.st.callbacks[e] && p.st.callbacks[e].apply(p, u.isArray(t) ? t : [t])) }

    function h(e) { return e === t && p.currTemplate.closeBtn || (p.currTemplate.closeBtn = u(p.st.closeMarkup.replace("%title%", p.st.tClose)), t = e), p.currTemplate.closeBtn }

    function r() { u.magnificPopup.instance || ((p = new e).init(), u.magnificPopup.instance = p) }
    var p, i, g, o, m, t, l = "Close",
        v = "BeforeClose",
        y = "MarkupParse",
        b = "Open",
        _ = ".mfp",
        w = "mfp-ready",
        n = "mfp-removing",
        a = "mfp-prevent-close",
        s = !!window.jQuery,
        E = u(window);
    e.prototype = {
        constructor: e,
        init: function() {
            var e = navigator.appVersion;
            p.isLowIE = p.isIE8 = document.all && !document.addEventListener, p.isAndroid = /android/gi.test(e), p.isIOS = /iphone|ipad|ipod/gi.test(e), p.supportsTransition = function() {
                var e = document.createElement("p").style,
                    t = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== e.transition) return !0;
                for (; t.length;)
                    if (t.pop() + "Transition" in e) return !0;
                return !1
            }(), p.probablyMobile = p.isAndroid || p.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), g = u(document), p.popupsCache = {}
        },
        open: function(e) {
            if (!1 === e.isObj) {
                p.items = e.items.toArray(), p.index = 0;
                for (var t, n = e.items, i = 0; i < n.length; i++)
                    if ((t = n[i]).parsed && (t = t.el[0]), t === e.el[0]) { p.index = i; break }
            } else p.items = u.isArray(e.items) ? e.items : [e.items], p.index = e.index || 0;
            if (!p.isOpen) {
                p.types = [], m = "", e.mainEl && e.mainEl.length ? p.ev = e.mainEl.eq(0) : p.ev = g, e.key ? (p.popupsCache[e.key] || (p.popupsCache[e.key] = {}), p.currTemplate = p.popupsCache[e.key]) : p.currTemplate = {}, p.st = u.extend(!0, {}, u.magnificPopup.defaults, e), p.fixedContentPos = "auto" === p.st.fixedContentPos ? !p.probablyMobile : p.st.fixedContentPos, p.st.modal && (p.st.closeOnContentClick = !1, p.st.closeOnBgClick = !1, p.st.showCloseBtn = !1, p.st.enableEscapeKey = !1), p.bgOverlay || (p.bgOverlay = f("bg").on("click" + _, function() { p.close() }), p.wrap = f("wrap").attr("tabindex", -1).on("click" + _, function(e) { p._checkIfClose(e.target) && p.close() }), p.container = f("container", p.wrap)), p.contentContainer = f("content"), p.st.preloader && (p.preloader = f("preloader", p.container, p.st.tLoading));
                var o = u.magnificPopup.modules;
                for (i = 0; i < o.length; i++) {
                    var r = (r = o[i]).charAt(0).toUpperCase() + r.slice(1);
                    p["init" + r].call(p)
                }
                d("BeforeOpen"), p.st.showCloseBtn && (p.st.closeBtnInside ? (c(y, function(e, t, n, i) { n.close_replaceWith = h(i.type) }), m += " mfp-close-btn-in") : p.wrap.append(h())), p.st.alignTop && (m += " mfp-align-top"), p.fixedContentPos ? p.wrap.css({ overflow: p.st.overflowY, overflowX: "hidden", overflowY: p.st.overflowY }) : p.wrap.css({ top: E.scrollTop(), position: "absolute" }), !1 !== p.st.fixedBgPos && ("auto" !== p.st.fixedBgPos || p.fixedContentPos) || p.bgOverlay.css({ height: g.height(), position: "absolute" }), p.st.enableEscapeKey && g.on("keyup" + _, function(e) { 27 === e.keyCode && p.close() }), E.on("resize" + _, function() { p.updateSize() }), p.st.closeOnContentClick || (m += " mfp-auto-cursor"), m && p.wrap.addClass(m);
                var a = p.wH = E.height(),
                    s = {};
                p.fixedContentPos && (!p._hasScrollBar(a) || (l = p._getScrollbarSize()) && (s.marginRight = l)), p.fixedContentPos && (p.isIE7 ? u("body, html").css("overflow", "hidden") : s.overflow = "hidden");
                var l = p.st.mainClass;
                return p.isIE7 && (l += " mfp-ie7"), l && p._addClassToMFP(l), p.updateItemHTML(), d("BuildControls"), u("html").css(s), p.bgOverlay.add(p.wrap).prependTo(p.st.prependTo || u(document.body)), p._lastFocusedEl = document.activeElement, setTimeout(function() { p.content ? (p._addClassToMFP(w), p._setFocus()) : p.bgOverlay.addClass(w), g.on("focusin" + _, p._onFocusIn) }, 16), p.isOpen = !0, p.updateSize(a), d(b), e
            }
            p.updateItemHTML()
        },
        close: function() { p.isOpen && (d(v), p.isOpen = !1, p.st.removalDelay && !p.isLowIE && p.supportsTransition ? (p._addClassToMFP(n), setTimeout(function() { p._close() }, p.st.removalDelay)) : p._close()) },
        _close: function() {
            d(l);
            var e = n + " " + w + " ";
            p.bgOverlay.detach(), p.wrap.detach(), p.container.empty(), p.st.mainClass && (e += p.st.mainClass + " "), p._removeClassFromMFP(e), p.fixedContentPos && (e = { marginRight: "" }, p.isIE7 ? u("body, html").css("overflow", "") : e.overflow = "", u("html").css(e)), g.off("keyup.mfp focusin" + _), p.ev.off(_), p.wrap.attr("class", "mfp-wrap").removeAttr("style"), p.bgOverlay.attr("class", "mfp-bg"), p.container.attr("class", "mfp-container"), !p.st.showCloseBtn || p.st.closeBtnInside && !0 !== p.currTemplate[p.currItem.type] || p.currTemplate.closeBtn && p.currTemplate.closeBtn.detach(), p.st.autoFocusLast && p._lastFocusedEl && u(p._lastFocusedEl).focus(), p.currItem = null, p.content = null, p.currTemplate = null, p.prevHeight = 0, d("AfterClose")
        },
        updateSize: function(e) {
            var t;
            p.isIOS ? (t = document.documentElement.clientWidth / window.innerWidth, t = window.innerHeight * t, p.wrap.css("height", t), p.wH = t) : p.wH = e || E.height(), p.fixedContentPos || p.wrap.css("height", p.wH), d("Resize")
        },
        updateItemHTML: function() {
            var e = p.items[p.index];
            p.contentContainer.detach(), p.content && p.content.detach(), e.parsed || (e = p.parseEl(p.index));
            var t = e.type;
            d("BeforeChange", [p.currItem ? p.currItem.type : "", t]), p.currItem = e, p.currTemplate[t] || (n = !!p.st[t] && p.st[t].markup, d("FirstMarkupParse", n), p.currTemplate[t] = !n || u(n)), o && o !== e.type && p.container.removeClass("mfp-" + o + "-holder");
            var n = p["get" + t.charAt(0).toUpperCase() + t.slice(1)](e, p.currTemplate[t]);
            p.appendContent(n, t), e.preloaded = !0, d("Change", e), o = e.type, p.container.prepend(p.contentContainer), d("AfterChange")
        },
        appendContent: function(e, t) {
            (p.content = e) ? p.st.showCloseBtn && p.st.closeBtnInside && !0 === p.currTemplate[t] ? p.content.find(".mfp-close").length || p.content.append(h()) : p.content = e: p.content = "", d("BeforeAppend"), p.container.addClass("mfp-" + t + "-holder"), p.contentContainer.append(p.content)
        },
        parseEl: function(e) {
            var t, n = p.items[e];
            if ((n = n.tagName ? { el: u(n) } : (t = n.type, { data: n, src: n.src })).el) {
                for (var i = p.types, o = 0; o < i.length; o++)
                    if (n.el.hasClass("mfp-" + i[o])) { t = i[o]; break }
                n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
            }
            return n.type = t || p.st.type || "inline", n.index = e, n.parsed = !0, p.items[e] = n, d("ElementParse", n), p.items[e]
        },
        addGroup: function(t, n) {
            function e(e) { e.mfpEl = this, p._openClick(e, t, n) }
            var i = "click.magnificPopup";
            (n = n || {}).mainEl = t, n.items ? (n.isObj = !0, t.off(i).on(i, e)) : (n.isObj = !1, n.delegate ? t.off(i).on(i, n.delegate, e) : (n.items = t).off(i).on(i, e))
        },
        _openClick: function(e, t, n) {
            if ((void 0 !== n.midClick ? n : u.magnificPopup.defaults).midClick || !(2 === e.which || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                var i = (void 0 !== n.disableOn ? n : u.magnificPopup.defaults).disableOn;
                if (i)
                    if (u.isFunction(i)) { if (!i.call(p)) return !0 } else if (E.width() < i) return !0;
                e.type && (e.preventDefault(), p.isOpen && e.stopPropagation()), n.el = u(e.mfpEl), n.delegate && (n.items = t.find(n.delegate)), p.open(n)
            }
        },
        updateStatus: function(e, t) {
            var n;
            p.preloader && (i !== e && p.container.removeClass("mfp-s-" + i), t || "loading" !== e || (t = p.st.tLoading), d("UpdateStatus", n = { status: e, text: t }), e = n.status, t = n.text, p.preloader.html(t), p.preloader.find("a").on("click", function(e) { e.stopImmediatePropagation() }), p.container.addClass("mfp-s-" + e), i = e)
        },
        _checkIfClose: function(e) {
            if (!u(e).hasClass(a)) {
                var t = p.st.closeOnContentClick,
                    n = p.st.closeOnBgClick;
                if (t && n) return !0;
                if (!p.content || u(e).hasClass("mfp-close") || p.preloader && e === p.preloader[0]) return !0;
                if (e === p.content[0] || u.contains(p.content[0], e)) { if (t) return !0 } else if (n && u.contains(document, e)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) { p.bgOverlay.addClass(e), p.wrap.addClass(e) },
        _removeClassFromMFP: function(e) { this.bgOverlay.removeClass(e), p.wrap.removeClass(e) },
        _hasScrollBar: function(e) { return (p.isIE7 ? g.height() : document.body.scrollHeight) > (e || E.height()) },
        _setFocus: function() {
            (p.st.focus ? p.content.find(p.st.focus).eq(0) : p.wrap).focus()
        },
        _onFocusIn: function(e) { if (e.target !== p.wrap[0] && !u.contains(p.wrap[0], e.target)) return p._setFocus(), !1 },
        _parseMarkup: function(o, e, t) {
            var r;
            t.data && (e = u.extend(t.data, e)), d(y, [o, e, t]), u.each(e, function(e, t) { return void 0 === t || !1 === t || void(1 < (r = e.split("_")).length ? 0 < (n = o.find(_ + "-" + r[0])).length && ("replaceWith" === (i = r[1]) ? n[0] !== t[0] && n.replaceWith(t) : "img" === i ? n.is("img") ? n.attr("src", t) : n.replaceWith(u("<img>").attr("src", t).attr("class", n.attr("class"))) : n.attr(r[1], t)) : o.find(_ + "-" + e).html(t)); var n, i })
        },
        _getScrollbarSize: function() { var e; return void 0 === p.scrollbarSize && ((e = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), p.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), p.scrollbarSize }
    }, u.magnificPopup = { instance: null, proto: e.prototype, modules: [], open: function(e, t) { return r(), (e = e ? u.extend(!0, {}, e) : {}).isObj = !0, e.index = t || 0, this.instance.open(e) }, close: function() { return u.magnificPopup.instance && u.magnificPopup.instance.close() }, registerModule: function(e, t) { t.options && (u.magnificPopup.defaults[e] = t.options), u.extend(this.proto, t.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, u.fn.magnificPopup = function(e) { r(); var t, n, i, o = u(this); return "string" == typeof e ? "open" === e ? (t = s ? o.data("magnificPopup") : o[0].magnificPopup, n = parseInt(arguments[1], 10) || 0, i = t.items ? t.items[n] : (i = o, t.delegate && (i = i.find(t.delegate)), i.eq(n)), p._openClick({ mfpEl: i }, o, t)) : p.isOpen && p[e].apply(p, Array.prototype.slice.call(arguments, 1)) : (e = u.extend(!0, {}, e), s ? o.data("magnificPopup", e) : o[0].magnificPopup = e, p.addGroup(o, e)), o };

    function x() { S && (C.after(S.addClass(T)).detach(), S = null) }
    var T, C, S, k = "inline";
    u.magnificPopup.registerModule(k, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function() { p.types.push(k), c(l + "." + k, function() { x() }) },
            getInline: function(e, t) {
                if (x(), e.src) {
                    var n, i = p.st.inline,
                        o = u(e.src);
                    return o.length ? ((n = o[0].parentNode) && n.tagName && (C || (T = i.hiddenClass, C = f(T), T = "mfp-" + T), S = o.after(C).detach().removeClass(T)), p.updateStatus("ready")) : (p.updateStatus("error", i.tNotFound), o = u("<div>")), e.inlineElement = o
                }
                return p.updateStatus("ready"), p._parseMarkup(t, {}, e), t
            }
        }
    });

    function N() { D && u(document.body).removeClass(D) }

    function A() { N(), p.req && p.req.abort() }
    var D, I = "ajax";
    u.magnificPopup.registerModule(I, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function() { p.types.push(I), D = p.st.ajax.cursor, c(l + "." + I, A), c("BeforeChange." + I, A) },
            getAjax: function(i) {
                D && u(document.body).addClass(D), p.updateStatus("loading");
                var e = u.extend({
                    url: i.src,
                    success: function(e, t, n) {
                        n = { data: e, xhr: n };
                        d("ParseAjax", n), p.appendContent(u(n.data), I), i.finished = !0, N(), p._setFocus(), setTimeout(function() { p.wrap.addClass(w) }, 16), p.updateStatus("ready"), d("AjaxContentAdded")
                    },
                    error: function() { N(), i.finished = i.loadError = !0, p.updateStatus("error", p.st.ajax.tError.replace("%url%", i.src)) }
                }, p.st.ajax.settings);
                return p.req = u.ajax(e), ""
            }
        }
    });
    var L;
    u.magnificPopup.registerModule("image", {
        options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' },
        proto: {
            initImage: function() {
                var e = p.st.image,
                    t = ".image";
                p.types.push("image"), c(b + t, function() { "image" === p.currItem.type && e.cursor && u(document.body).addClass(e.cursor) }), c(l + t, function() { e.cursor && u(document.body).removeClass(e.cursor), E.off("resize" + _) }), c("Resize" + t, p.resizeImage), p.isLowIE && c("AfterChange", p.resizeImage)
            },
            resizeImage: function() {
                var e, t = p.currItem;
                t && t.img && p.st.image.verticalFit && (e = 0, p.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", p.wH - e))
            },
            _onImageHasSize: function(e) { e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, d("ImageHasSize", e), e.imgHidden && (p.content && p.content.removeClass("mfp-loading"), e.imgHidden = !1)) },
            findImageSize: function(t) {
                var n = 0,
                    i = t.img[0],
                    o = function(e) { L && clearInterval(L), L = setInterval(function() { 0 < i.naturalWidth ? p._onImageHasSize(t) : (200 < n && clearInterval(L), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)) }, e) };
                o(1)
            },
            getImage: function(e, t) {
                var n, i = 0,
                    o = function() { e && (e.img[0].complete ? (e.img.off(".mfploader"), e === p.currItem && (p._onImageHasSize(e), p.updateStatus("ready")), e.hasSize = !0, e.loaded = !0, d("ImageLoadComplete")) : ++i < 200 ? setTimeout(o, 100) : r()) },
                    r = function() { e && (e.img.off(".mfploader"), e === p.currItem && (p._onImageHasSize(e), p.updateStatus("error", a.tError.replace("%url%", e.src))), e.hasSize = !0, e.loaded = !0, e.loadError = !0) },
                    a = p.st.image,
                    s = t.find(".mfp-img");
                return s.length && ((n = document.createElement("img")).className = "mfp-img", e.el && e.el.find("img").length && (n.alt = e.el.find("img").attr("alt")), e.img = u(n).on("load.mfploader", o).on("error.mfploader", r), n.src = e.src, s.is("img") && (e.img = e.img.clone()), 0 < (n = e.img[0]).naturalWidth ? e.hasSize = !0 : n.width || (e.hasSize = !1)), p._parseMarkup(t, { title: function(e) { if (e.data && void 0 !== e.data.title) return e.data.title; var t = p.st.image.titleSrc; if (t) { if (u.isFunction(t)) return t.call(p, e); if (e.el) return e.el.attr(t) || "" } return "" }(e), img_replaceWith: e.img }, e), p.resizeImage(), e.hasSize ? (L && clearInterval(L), e.loadError ? (t.addClass("mfp-loading"), p.updateStatus("error", a.tError.replace("%url%", e.src))) : (t.removeClass("mfp-loading"), p.updateStatus("ready"))) : (p.updateStatus("loading"), e.loading = !0, e.hasSize || (e.imgHidden = !0, t.addClass("mfp-loading"), p.findImageSize(e))), t
            }
        }
    });
    var O;
    u.magnificPopup.registerModule("zoom", {
        options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(e) { return e.is("img") ? e : e.find("img") } },
        proto: {
            initZoom: function() {
                var e, t, n, i, o, r, a = p.st.zoom,
                    s = ".zoom";
                a.enabled && p.supportsTransition && (t = a.duration, n = function(e) {
                    var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                        n = "all " + a.duration / 1e3 + "s " + a.easing,
                        i = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                        e = "transition";
                    return i["-webkit-" + e] = i["-moz-" + e] = i["-o-" + e] = i[e] = n, t.css(i), t
                }, i = function() { p.content.css("visibility", "visible") }, c("BuildControls" + s, function() { p._allowZoom() && (clearTimeout(o), p.content.css("visibility", "hidden"), (e = p._getItemToZoom()) ? ((r = n(e)).css(p._getOffset()), p.wrap.append(r), o = setTimeout(function() { r.css(p._getOffset(!0)), o = setTimeout(function() { i(), setTimeout(function() { r.remove(), e = r = null, d("ZoomAnimationEnded") }, 16) }, t) }, 16)) : i()) }), c(v + s, function() {
                    if (p._allowZoom()) {
                        if (clearTimeout(o), p.st.removalDelay = t, !e) {
                            if (!(e = p._getItemToZoom())) return;
                            r = n(e)
                        }
                        r.css(p._getOffset(!0)), p.wrap.append(r), p.content.css("visibility", "hidden"), setTimeout(function() { r.css(p._getOffset()) }, 16)
                    }
                }), c(l + s, function() { p._allowZoom() && (i(), r && r.remove(), e = null) }))
            },
            _allowZoom: function() { return "image" === p.currItem.type },
            _getItemToZoom: function() { return !!p.currItem.hasSize && p.currItem.img },
            _getOffset: function(e) {
                var t = e ? p.currItem.img : p.st.zoom.opener(p.currItem.el || p.currItem),
                    n = t.offset(),
                    i = parseInt(t.css("padding-top"), 10),
                    e = parseInt(t.css("padding-bottom"), 10);
                n.top -= u(window).scrollTop() - i;
                i = { width: t.width(), height: (s ? t.innerHeight() : t[0].offsetHeight) - e - i };
                return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O ? i["-moz-transform"] = i.transform = "translate(" + n.left + "px," + n.top + "px)" : (i.left = n.left, i.top = n.top), i
            }
        }
    });

    function j(e) { var t;!p.currTemplate[P] || (t = p.currTemplate[P].find("iframe")).length && (e || (t[0].src = "//about:blank"), p.isIE8 && t.css("display", e ? "block" : "none")) }
    var P = "iframe";
    u.magnificPopup.registerModule(P, {
        options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } },
        proto: {
            initIframe: function() { p.types.push(P), c("BeforeChange", function(e, t, n) { t !== n && (t === P ? j() : n === P && j(!0)) }), c(l + "." + P, function() { j() }) },
            getIframe: function(e, t) {
                var n = e.src,
                    i = p.st.iframe;
                u.each(i.patterns, function() { if (-1 < n.indexOf(this.index)) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1 });
                var o = {};
                return i.srcAction && (o[i.srcAction] = n), p._parseMarkup(t, o, e), p.updateStatus("ready"), t
            }
        }
    });

    function q(e) { var t = p.items.length; return t - 1 < e ? e - t : e < 0 ? t + e : e }

    function H(e, t, n) { return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n) }
    u.magnificPopup.registerModule("gallery", {
        options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" },
        proto: {
            initGallery: function() {
                var r = p.st.gallery,
                    e = ".mfp-gallery";
                if (p.direction = !0, !r || !r.enabled) return !1;
                m += " mfp-gallery", c(b + e, function() { r.navigateByImgClick && p.wrap.on("click" + e, ".mfp-img", function() { if (1 < p.items.length) return p.next(), !1 }), g.on("keydown" + e, function(e) { 37 === e.keyCode ? p.prev() : 39 === e.keyCode && p.next() }) }), c("UpdateStatus" + e, function(e, t) { t.text && (t.text = H(t.text, p.currItem.index, p.items.length)) }), c(y + e, function(e, t, n, i) {
                    var o = p.items.length;
                    n.counter = 1 < o ? H(r.tCounter, i.index, o) : ""
                }), c("BuildControls" + e, function() {
                    var e, t;
                    1 < p.items.length && r.arrows && !p.arrowLeft && (t = r.arrowMarkup, e = p.arrowLeft = u(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(a), t = p.arrowRight = u(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(a), e.click(function() { p.prev() }), t.click(function() { p.next() }), p.container.append(e.add(t)))
                }), c("Change" + e, function() { p._preloadTimeout && clearTimeout(p._preloadTimeout), p._preloadTimeout = setTimeout(function() { p.preloadNearbyImages(), p._preloadTimeout = null }, 16) }), c(l + e, function() { g.off(e), p.wrap.off("click" + e), p.arrowRight = p.arrowLeft = null })
            },
            next: function() { p.direction = !0, p.index = q(p.index + 1), p.updateItemHTML() },
            prev: function() { p.direction = !1, p.index = q(p.index - 1), p.updateItemHTML() },
            goTo: function(e) { p.direction = e >= p.index, p.index = e, p.updateItemHTML() },
            preloadNearbyImages: function() { for (var e = p.st.gallery.preload, t = Math.min(e[0], p.items.length), n = Math.min(e[1], p.items.length), i = 1; i <= (p.direction ? n : t); i++) p._preloadItem(p.index + i); for (i = 1; i <= (p.direction ? t : n); i++) p._preloadItem(p.index - i) },
            _preloadItem: function(e) {
                var t;
                e = q(e), p.items[e].preloaded || ((t = p.items[e]).parsed || (t = p.parseEl(e)), d("LazyLoad", t), "image" === t.type && (t.img = u('<img class="mfp-img" />').on("load.mfploader", function() { t.hasSize = !0 }).on("error.mfploader", function() { t.hasSize = !0, t.loadError = !0, d("LazyLoadError", t) }).attr("src", t.src)), t.preloaded = !0)
            }
        }
    });
    var M = "retina";
    u.magnificPopup.registerModule(M, {
        options: { replaceSrc: function(e) { return e.src.replace(/\.\w+$/, function(e) { return "@2x" + e }) }, ratio: 1 },
        proto: {
            initRetina: function() {
                var n, i;
                1 < window.devicePixelRatio && (n = p.st.retina, i = n.ratio, 1 < (i = isNaN(i) ? i() : i) && (c("ImageHasSize." + M, function(e, t) { t.img.css({ "max-width": t.img[0].naturalWidth / i, width: "100%" }) }), c("ElementParse." + M, function(e, t) { t.src = n.replaceSrc(t, i) })))
            }
        }
    }), r()
}),
function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery) }(function(r, i) {
    var n = "plugin_hideShowPassword",
        o = ["show", "innerToggle"],
        t = {
            show: "infer",
            innerToggle: !1,
            enable: function() {
                var e = document.body,
                    t = document.createElement("input"),
                    n = !0,
                    t = (e = e || document.createElement("body")).appendChild(t);
                try { t.setAttribute("type", "text") } catch (e) { n = !1 }
                return e.removeChild(t), n
            }(),
            triggerOnToggle: !1,
            className: "hideShowPassword-field",
            initEvent: "hideShowPasswordInit",
            changeEvent: "passwordVisibilityChange",
            props: { autocapitalize: "off", autocomplete: "off", autocorrect: "off", spellcheck: "false" },
            toggle: { element: '<button type="button">', className: "hideShowPassword-toggle", touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents, attachToEvent: "click.hideShowPassword", attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword", attachToKeyEvent: "keyup", attachToKeyCodes: !0, styles: { position: "absolute" }, touchStyles: { pointerEvents: "none" }, position: "infer", verticalAlign: "middle", offset: 0, attr: { role: "button", "aria-label": "Show Password", title: "Show Password", tabIndex: 0 } },
            wrapper: { element: "<div>", className: "hideShowPassword-wrapper", enforceWidth: !1, styles: { position: "relative" }, inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"], innerElementStyles: { marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0 } },
            states: { shown: { className: "hideShowPassword-shown", changeEvent: "passwordShown", props: { type: "text" }, toggle: { className: "hideShowPassword-toggle-hide", content: "Hide", attr: { "aria-pressed": "true", title: "Hide Password" } } }, hidden: { className: "hideShowPassword-hidden", changeEvent: "passwordHidden", props: { type: "password" }, toggle: { className: "hideShowPassword-toggle-show", content: "Show", attr: { "aria-pressed": "false", title: "Show Password" } } } }
        };

    function a(e, t) { this.element = r(e), this.wrapperElement = r(), this.toggleElement = r(), this.init(t) }
    a.prototype = {
        init: function(e) { this.update(e, t) && (this.element.addClass(this.options.className), this.options.innerToggle && (this.wrapElement(this.options.wrapper), this.initToggle(this.options.toggle), "string" == typeof this.options.innerToggle && (this.toggleElement.hide(), this.element.one(this.options.innerToggle, r.proxy(function() { this.toggleElement.show() }, this)))), this.element.trigger(this.options.initEvent, [this])) },
        update: function(e, t) { return this.options = this.prepareOptions(e, t), this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]), this.options.enable },
        toggle: function(e) { return e = e || "toggle", this.update({ show: e }) },
        prepareOptions: function(e, t) {
            var n, i = e || {},
                o = [];
            if (t = t || this.options, e = r.extend(!0, {}, t, e), i.hasOwnProperty("wrapper") && i.wrapper.hasOwnProperty("inheritStyles") && (e.wrapper.inheritStyles = i.wrapper.inheritStyles), e.enable && ("toggle" === e.show ? e.show = this.isType("hidden", e.states) : "infer" === e.show && (e.show = this.isType("shown", e.states)), "infer" === e.toggle.position && (e.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"), !r.isArray(e.toggle.attachToKeyCodes))) {
                if (!0 === e.toggle.attachToKeyCodes) switch ((n = r(e.toggle.element)).prop("tagName").toLowerCase()) {
                    case "button":
                    case "input":
                        break;
                    case "a":
                        if (n.filter("[href]").length) { o.push(32); break }
                    default:
                        o.push(32, 13)
                }
                e.toggle.attachToKeyCodes = o
            }
            return e
        },
        updateElement: function() { return !(!this.options.enable || this.isType()) && (this.element.prop(r.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className), this.options.triggerOnToggle && this.element.trigger(this.options.triggerOnToggle, [this]), this.updateToggle(), !0) },
        isType: function(e, t) { return (t = t || this.options.states)[e = e || this.state(i, i, t).props.type] && (e = t[e].props.type), this.element.prop("type") === e },
        state: function(e, t, n) { return n = n || this.options.states, e === i && (e = this.options.show), "boolean" == typeof e && (e = e ? "shown" : "hidden"), t && (e = "shown" === e ? "hidden" : "shown"), n[e] },
        otherState: function(e) { return this.state(e, !0) },
        wrapElement: function(n) { var e, t = n.enforceWidth; return this.wrapperElement.length || (e = this.element.outerWidth(), r.each(n.inheritStyles, r.proxy(function(e, t) { n.styles[t] = this.element.css(t) }, this)), this.element.css(n.innerElementStyles).wrap(r(n.element).addClass(n.className).css(n.styles)), this.wrapperElement = this.element.parent(), !0 === t && (t = this.wrapperElement.outerWidth() !== e && e), !1 !== t && this.wrapperElement.css("width", t)), this.wrapperElement },
        initToggle: function(e) { return this.toggleElement.length || (this.toggleElement = r(e.element).attr(e.attr).addClass(e.className).css(e.styles).appendTo(this.wrapperElement), this.updateToggle(), this.positionToggle(e.position, e.verticalAlign, e.offset), e.touchSupport ? (this.toggleElement.css(e.touchStyles), this.element.on(e.attachToTouchEvent, r.proxy(this.toggleTouchEvent, this))) : this.toggleElement.on(e.attachToEvent, r.proxy(this.toggleEvent, this)), e.attachToKeyCodes.length && this.toggleElement.on(e.attachToKeyEvent, r.proxy(this.toggleKeyEvent, this))), this.toggleElement },
        positionToggle: function(e, t, n) {
            var i = {};
            switch (i[e] = n, t) {
                case "top":
                case "bottom":
                    i[t] = n;
                    break;
                case "middle":
                    i.top = "50%", i.marginTop = this.toggleElement.outerHeight() / -2
            }
            return this.toggleElement.css(i)
        },
        updateToggle: function(e, t) { var n; return this.toggleElement.length && (n = "padding-" + this.options.toggle.position, e = e || this.state().toggle, t = t || this.otherState().toggle, this.toggleElement.attr(e.attr).addClass(e.className).removeClass(t.className).html(e.content), e = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset, this.element.css(n) !== e && this.element.css(n, e)), this.toggleElement },
        toggleEvent: function(e) { e.preventDefault(), this.toggle() },
        toggleKeyEvent: function(n) { r.each(this.options.toggle.attachToKeyCodes, r.proxy(function(e, t) { if (n.which === t) return this.toggleEvent(n), !1 }, this)) },
        toggleTouchEvent: function(e) {
            var t, n, i = this.toggleElement.offset().left;
            i && (n = e.pageX || e.originalEvent.pageX, n = "left" === this.options.toggle.position ? (t = n, i += this.toggleElement.outerWidth()) : (t = i, n), t <= n && this.toggleEvent(e))
        }
    }, r.fn.hideShowPassword = function() {
        var i = {};
        return r.each(arguments, function(e, t) {
            var n = {};
            if ("object" == typeof t) n = t;
            else {
                if (!o[e]) return !1;
                n[o[e]] = t
            }
            r.extend(!0, i, n)
        }), this.each(function() {
            var e = r(this),
                t = e.data(n);
            t ? t.update(i) : e.data(n, new a(this, i))
        })
    }, r.each({ show: !0, hide: !1, toggle: "toggle" }, function(e, n) { r.fn[e + "Password"] = function(e, t) { return this.hideShowPassword(n, e, t) } })
}),
function(e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery) }(this, function(e, t) {
    "use strict";

    function n(e) { return e && "object" == typeof e && "default" in e ? e : { default: e } }
    var c = n(t);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function a(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e }

    function s() { return (s = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, i = arguments[t]; for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e }).apply(this, arguments) }
    var o = "transitionend";

    function r(e) {
        var t = this,
            n = !1;
        return c.default(this).one(f.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || f.triggerTransitionEnd(t) }, e), this
    }
    var f = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) { for (; e += ~~(1e6 * Math.random()), document.getElementById(e);); return e },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            t && "#" !== t || (t = (e = e.getAttribute("href")) && "#" !== e ? e.trim() : "");
            try { return document.querySelector(t) ? t : null } catch (e) { return null }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = c.default(e).css("transition-duration"),
                n = c.default(e).css("transition-delay"),
                i = parseFloat(t),
                e = parseFloat(n);
            return i || e ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) { return e.offsetHeight },
        triggerTransitionEnd: function(e) { c.default(e).trigger(o) },
        supportsTransitionEnd: function() { return Boolean(o) },
        isElement: function(e) { return (e[0] || e).nodeType },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = t[i],
                        a = r && f.isElement(r) ? "element" : null == (a = r) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? f.findShadowRoot(e.parentNode) : null;
            e = e.getRootNode();
            return e instanceof ShadowRoot ? e : null
        },
        jQueryDetection: function() { if (void 0 === c.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = c.default.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }
    };
    f.jQueryDetection(), c.default.fn.emulateTransitionEnd = r, c.default.event.special[f.TRANSITION_END] = { bindType: o, delegateType: o, handle: function(e) { if (c.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } };
    var l = "alert",
        u = "bs.alert",
        d = "." + u,
        h = c.default.fn[l],
        p = function() {
            function i(e) { this._element = e }
            var e = i.prototype;
            return e.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function() { c.default.removeData(this._element, u), this._element = null }, e._getRootElement = function(e) {
                var t = f.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n = n || c.default(e).closest(".alert")[0]
            }, e._triggerCloseEvent = function(e) { var t = c.default.Event("close.bs.alert"); return c.default(e).trigger(t), t }, e._removeElement = function(t) {
                var e, n = this;
                c.default(t).removeClass("show"), c.default(t).hasClass("fade") ? (e = f.getTransitionDurationFromElement(t), c.default(t).one(f.TRANSITION_END, function(e) { return n._destroyElement(t, e) }).emulateTransitionEnd(e)) : this._destroyElement(t)
            }, e._destroyElement = function(e) { c.default(e).detach().trigger("closed.bs.alert").remove() }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = c.default(this),
                        t = e.data(u);
                    t || (t = new i(this), e.data(u, t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, a(i, null, [{ key: "VERSION", get: function() { return "4.6.0" } }]), i
        }();
    c.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', p._handleDismiss(new p)), c.default.fn[l] = p._jQueryInterface, c.default.fn[l].Constructor = p, c.default.fn[l].noConflict = function() { return c.default.fn[l] = h, p._jQueryInterface };
    var g = "button",
        m = "bs.button",
        v = "." + m,
        t = ".data-api",
        y = c.default.fn[g],
        b = "active",
        d = '[data-toggle^="button"]',
        _ = 'input:not([type="hidden"])',
        w = function() {
            function o(e) { this._element = e, this.shouldAvoidTriggerChange = !1 }
            var e = o.prototype;
            return e.toggle = function() {
                var e, t = !0,
                    n = !0,
                    i = c.default(this._element).closest('[data-toggle="buttons"]')[0];
                !i || (e = this._element.querySelector(_)) && ("radio" === e.type && (e.checked && this._element.classList.contains(b) ? t = !1 : (i = i.querySelector(".active")) && c.default(i).removeClass(b)), t && ("checkbox" !== e.type && "radio" !== e.type || (e.checked = !this._element.classList.contains(b)), this.shouldAvoidTriggerChange || c.default(e).trigger("change")), e.focus(), n = !1), this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), t && c.default(this._element).toggleClass(b))
            }, e.dispose = function() { c.default.removeData(this._element, m), this._element = null }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var e = c.default(this),
                        t = e.data(m);
                    t || (t = new o(this), e.data(m, t)), t.shouldAvoidTriggerChange = i, "toggle" === n && t[n]()
                })
            }, a(o, null, [{ key: "VERSION", get: function() { return "4.6.0" } }]), o
        }();
    c.default(document).on("click.bs.button.data-api", d, function(e) {
        var t, n = e.target,
            i = n;
        c.default(n).hasClass("btn") || (n = c.default(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled") || (t = n.querySelector(_)) && (t.hasAttribute("disabled") || t.classList.contains("disabled")) ? e.preventDefault() : "INPUT" !== i.tagName && "LABEL" === n.tagName || w._jQueryInterface.call(c.default(n), "toggle", "INPUT" === i.tagName)
    }).on("focus.bs.button.data-api blur.bs.button.data-api", d, function(e) {
        var t = c.default(e.target).closest(".btn")[0];
        c.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), c.default(window).on("load.bs.button.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t],
                o = i.querySelector(_);
            o.checked || o.hasAttribute("checked") ? i.classList.add(b) : i.classList.remove(b)
        }
        for (var r = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < a; r++) { var s = e[r]; "true" === s.getAttribute("aria-pressed") ? s.classList.add(b) : s.classList.remove(b) }
    }), c.default.fn[g] = w._jQueryInterface, c.default.fn[g].Constructor = w, c.default.fn[g].noConflict = function() { return c.default.fn[g] = y, w._jQueryInterface };
    var E = "carousel",
        x = "bs.carousel",
        T = "." + x,
        v = ".data-api",
        C = c.default.fn[E],
        S = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
        k = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
        N = "next",
        A = "prev",
        D = "slid" + T,
        I = "active",
        L = ".active.carousel-item",
        O = { TOUCH: "touch", PEN: "pen" },
        j = function() {
            function o(e, t) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners() }
            var e = o.prototype;
            return e.next = function() { this._isSliding || this._slide(N) }, e.nextWhenVisible = function() { var e = c.default(this._element);!document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next() }, e.prev = function() { this._isSliding || this._slide(A) }, e.pause = function(e) { e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, e.cycle = function(e) { e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, e.to = function(e) {
                var t = this;
                this._activeElement = this._element.querySelector(L);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) c.default(this._element).one(D, function() { return t.to(e) });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        n = n < e ? N : A;
                        this._slide(n, this._items[e])
                    }
            }, e.dispose = function() { c.default(this._element).off(T), c.default.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, e._getConfig = function(e) { return e = s({}, S, e), f.typeCheckConfig(E, e, k), e }, e._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                e <= 40 || (e = e / this.touchDeltaX, (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next())
            }, e._addEventListeners = function() {
                var t = this;
                this._config.keyboard && c.default(this._element).on("keydown.bs.carousel", function(e) { return t._keydown(e) }), "hover" === this._config.pause && c.default(this._element).on("mouseenter.bs.carousel", function(e) { return t.pause(e) }).on("mouseleave.bs.carousel", function(e) { return t.cycle(e) }), this._config.touch && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function() {
                var e, t, n = this;
                this._touchSupported && (e = function(e) { n._pointerEvent && O[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX) }, t = function(e) { n._pointerEvent && O[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) { return n.cycle(e) }, 500 + n._config.interval)) }, c.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function(e) { return e.preventDefault() }), this._pointerEvent ? (c.default(this._element).on("pointerdown.bs.carousel", e), c.default(this._element).on("pointerup.bs.carousel", t), this._element.classList.add("pointer-event")) : (c.default(this._element).on("touchstart.bs.carousel", e), c.default(this._element).on("touchmove.bs.carousel", function(e) {
                    (e = e).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                }), c.default(this._element).on("touchend.bs.carousel", t)))
            }, e._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function(e) { return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e) }, e._getItemByDirection = function(e, t) {
                var n = e === N,
                    i = e === A,
                    o = this._getItemIndex(t),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                e = (o + (e === A ? -1 : 1)) % this._items.length;
                return -1 == e ? this._items[this._items.length - 1] : this._items[e]
            }, e._triggerSlideEvent = function(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(L)),
                    n = c.default.Event("slide.bs.carousel", { relatedTarget: e, direction: t, from: i, to: n });
                return c.default(this._element).trigger(n), n
            }, e._setActiveIndicatorElement = function(e) {
                var t;
                this._indicatorsElement && (t = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), c.default(t).removeClass(I), (e = this._indicatorsElement.children[this._getItemIndex(e)]) && c.default(e).addClass(I))
            }, e._updateInterval = function() {
                var e = this._activeElement || this._element.querySelector(L);
                e && ((e = parseInt(e.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval)
            }, e._slide = function(e, t) {
                var n, i, o, r = this,
                    a = this._element.querySelector(L),
                    s = this._getItemIndex(a),
                    l = t || a && this._getItemByDirection(e, a),
                    u = this._getItemIndex(l),
                    t = Boolean(this._interval),
                    e = e === N ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right");
                l && c.default(l).hasClass(I) ? this._isSliding = !1 : this._triggerSlideEvent(l, e).isDefaultPrevented() || a && l && (this._isSliding = !0, t && this.pause(), this._setActiveIndicatorElement(l), this._activeElement = l, o = c.default.Event(D, { relatedTarget: l, direction: e, from: s, to: u }), c.default(this._element).hasClass("slide") ? (c.default(l).addClass(i), f.reflow(l), c.default(a).addClass(n), c.default(l).addClass(n), u = f.getTransitionDurationFromElement(a), c.default(a).one(f.TRANSITION_END, function() { c.default(l).removeClass(n + " " + i).addClass(I), c.default(a).removeClass(I + " " + i + " " + n), r._isSliding = !1, setTimeout(function() { return c.default(r._element).trigger(o) }, 0) }).emulateTransitionEnd(u)) : (c.default(a).removeClass(I), c.default(l).addClass(I), this._isSliding = !1, c.default(this._element).trigger(o)), t && this.cycle())
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = c.default(this).data(x),
                        t = s({}, S, c.default(this).data());
                    "object" == typeof i && (t = s({}, t, i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new o(this, t), c.default(this).data(x, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && t.ride && (e.pause(), e.cycle())
                })
            }, o._dataApiClickHandler = function(e) { var t, n, i = f.getSelectorFromElement(this);!i || (t = c.default(i)[0]) && c.default(t).hasClass("carousel") && (n = s({}, c.default(t).data(), c.default(this).data()), (i = this.getAttribute("data-slide-to")) && (n.interval = !1), o._jQueryInterface.call(c.default(t), n), i && c.default(t).data(x).to(i), e.preventDefault()) }, a(o, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "Default", get: function() { return S } }]), o
        }();
    c.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", j._dataApiClickHandler), c.default(window).on("load.bs.carousel.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var i = c.default(e[t]);
            j._jQueryInterface.call(i, i.data())
        }
    }), c.default.fn[E] = j._jQueryInterface, c.default.fn[E].Constructor = j, c.default.fn[E].noConflict = function() { return c.default.fn[E] = C, j._jQueryInterface };
    var P = "collapse",
        q = "bs.collapse",
        t = "." + q,
        H = c.default.fn[P],
        M = { toggle: !0, parent: "" },
        F = { toggle: "boolean", parent: "(string|element)" },
        R = "show",
        B = "collapse",
        W = "collapsing",
        z = "collapsed",
        U = '[data-toggle="collapse"]',
        Q = function() {
            function r(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(U)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        a = f.getSelectorFromElement(r),
                        s = [].slice.call(document.querySelectorAll(a)).filter(function(e) { return e === t });
                    null !== a && 0 < s.length && (this._selector = a, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = r.prototype;
            return e.toggle = function() { c.default(this._element).hasClass(R) ? this.hide() : this.show() }, e.show = function() {
                var e, t, n, i, o = this;
                this._isTransitioning || c.default(this._element).hasClass(R) || (this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) { return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(B) })).length && (i = null), i && (n = c.default(i).not(this._selector).data(q)) && n._isTransitioning || (e = c.default.Event("show.bs.collapse"), c.default(this._element).trigger(e), e.isDefaultPrevented() || (i && (r._jQueryInterface.call(c.default(i).not(this._selector), "hide"), n || c.default(i).data(q, null)), t = this._getDimension(), c.default(this._element).removeClass(B).addClass(W), this._element.style[t] = 0, this._triggerArray.length && c.default(this._triggerArray).removeClass(z).attr("aria-expanded", !0), this.setTransitioning(!0), n = "scroll" + (t[0].toUpperCase() + t.slice(1)), i = f.getTransitionDurationFromElement(this._element), c.default(this._element).one(f.TRANSITION_END, function() { c.default(o._element).removeClass(W).addClass(B + " " + R), o._element.style[t] = "", o.setTransitioning(!1), c.default(o._element).trigger("shown.bs.collapse") }).emulateTransitionEnd(i), this._element.style[t] = this._element[n] + "px")))
            }, e.hide = function() {
                var e = this;
                if (!this._isTransitioning && c.default(this._element).hasClass(R)) {
                    var t = c.default.Event("hide.bs.collapse");
                    if (c.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                        t = this._getDimension();
                        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f.reflow(this._element), c.default(this._element).addClass(W).removeClass(B + " " + R);
                        var n = this._triggerArray.length;
                        if (0 < n)
                            for (var i = 0; i < n; i++) {
                                var o = this._triggerArray[i],
                                    r = f.getSelectorFromElement(o);
                                null !== r && (c.default([].slice.call(document.querySelectorAll(r))).hasClass(R) || c.default(o).addClass(z).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0);
                        this._element.style[t] = "";
                        t = f.getTransitionDurationFromElement(this._element);
                        c.default(this._element).one(f.TRANSITION_END, function() { e.setTransitioning(!1), c.default(e._element).removeClass(W).addClass(B).trigger("hidden.bs.collapse") }).emulateTransitionEnd(t)
                    }
                }
            }, e.setTransitioning = function(e) { this._isTransitioning = e }, e.dispose = function() { c.default.removeData(this._element, q), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, e._getConfig = function(e) { return (e = s({}, M, e)).toggle = Boolean(e.toggle), f.typeCheckConfig(P, e, F), e }, e._getDimension = function() { return c.default(this._element).hasClass("width") ? "width" : "height" }, e._getParent = function() {
                var e, n = this;
                f.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    t = [].slice.call(e.querySelectorAll(t));
                return c.default(t).each(function(e, t) { n._addAriaAndCollapsedClass(r._getTargetFromElement(t), [t]) }), e
            }, e._addAriaAndCollapsedClass = function(e, t) {
                e = c.default(e).hasClass(R);
                t.length && c.default(t).toggleClass(z, !e).attr("aria-expanded", e)
            }, r._getTargetFromElement = function(e) { e = f.getSelectorFromElement(e); return e ? document.querySelector(e) : null }, r._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = c.default(this),
                        t = e.data(q),
                        n = s({}, M, e.data(), "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && "string" == typeof i && /show|hide/.test(i) && (n.toggle = !1), t || (t = new r(this, n), e.data(q, t)), "string" == typeof i) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, a(r, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "Default", get: function() { return M } }]), r
        }();
    c.default(document).on("click.bs.collapse.data-api", U, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = c.default(this),
            e = f.getSelectorFromElement(this),
            e = [].slice.call(document.querySelectorAll(e));
        c.default(e).each(function() {
            var e = c.default(this),
                t = e.data(q) ? "toggle" : n.data();
            Q._jQueryInterface.call(e, t)
        })
    }), c.default.fn[P] = Q._jQueryInterface, c.default.fn[P].Constructor = Q, c.default.fn[P].noConflict = function() { return c.default.fn[P] = H, Q._jQueryInterface };
    var $ = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        V = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if ($ && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0
        }();
    var X = $ && window.Promise ? function(e) { var t = !1; return function() { t || (t = !0, window.Promise.resolve().then(function() { t = !1, e() })) } } : function(e) { var t = !1; return function() { t || (t = !0, setTimeout(function() { t = !1, e() }, V)) } };

    function K(e) { return e && "[object Function]" === {}.toString.call(e) }

    function Y(e, t) {
        if (1 !== e.nodeType) return [];
        e = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? e[t] : e
    }

    function G(e) { return "HTML" === e.nodeName ? e : e.parentNode || e.host }

    function Z(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = Y(e),
            n = t.overflow,
            i = t.overflowX,
            t = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + t + i) ? e : Z(G(e))
    }

    function J(e) { return e && e.referenceNode ? e.referenceNode : e }
    var ee = $ && !(!window.MSInputMethodContext || !document.documentMode),
        te = $ && /MSIE 10/.test(navigator.userAgent);

    function ne(e) { return 11 === e ? ee : 10 !== e && ee || te }

    function ie(e) { if (!e) return document.documentElement; for (var t = ne(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === Y(n, "position") ? ie(n) : n : (e ? e.ownerDocument : document).documentElement }

    function oe(e) { return null !== e.parentNode ? oe(e.parentNode) : e }

    function re(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            n = document.createRange();
        n.setStart(i, 0), n.setEnd(o, 0);
        n = n.commonAncestorContainer;
        if (e !== n && t !== n || i.contains(o)) return "BODY" === (o = (i = n).nodeName) || "HTML" !== o && ie(i.firstElementChild) !== i ? ie(n) : n;
        n = oe(e);
        return n.host ? re(n.host, t) : re(e, oe(t).host)
    }

    function ae(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            t = e.nodeName;
        if ("BODY" !== t && "HTML" !== t) return e[n];
        t = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || t)[n]
    }

    function se(e, t) {
        var n = "x" === t ? "Left" : "Top",
            t = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + t + "Width"])
    }

    function le(e, t, n, i) { return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], ne(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0) }

    function ue(e) {
        var t = e.body,
            n = e.documentElement,
            e = ne(10) && getComputedStyle(n);
        return { height: le("Height", t, n, e), width: le("Width", t, n, e) }
    }
    var ce = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") },
        d = function(e, t, n) { return t && fe(e.prototype, t), n && fe(e, n), e };

    function fe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function de(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
    var he = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n, i = arguments[t]; for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]) } return e };

    function pe(e) { return he({}, e, { right: e.left + e.width, bottom: e.top + e.height }) }

    function ge(e) {
        var t, n, i = {};
        try { ne(10) ? (i = e.getBoundingClientRect(), t = ae(e, "top"), n = ae(e, "left"), i.top += t, i.left += n, i.bottom += t, i.right += n) : i = e.getBoundingClientRect() } catch (e) {}
        var o = { left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top },
            r = "HTML" === e.nodeName ? ue(e.ownerDocument) : {},
            a = r.width || e.clientWidth || o.width,
            s = r.height || e.clientHeight || o.height,
            r = e.offsetWidth - a,
            a = e.offsetHeight - s;
        return (r || a) && (r -= se(s = Y(e), "x"), a -= se(s, "y"), o.width -= r, o.height -= a), pe(o)
    }

    function me(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n,
            o = ne(10),
            r = "HTML" === t.nodeName,
            a = ge(e),
            s = ge(t),
            l = Z(e),
            u = Y(t),
            n = parseFloat(u.borderTopWidth),
            e = parseFloat(u.borderLeftWidth);
        i && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        a = pe({ top: a.top - s.top - n, left: a.left - s.left - e, width: a.width, height: a.height });
        return a.marginTop = 0, a.marginLeft = 0, !o && r && (r = parseFloat(u.marginTop), u = parseFloat(u.marginLeft), a.top -= n - r, a.bottom -= n - r, a.left -= e - u, a.right -= e - u, a.marginTop = r, a.marginLeft = u), (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (a = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n,
                n = ae(t, "top"),
                t = ae(t, "left"),
                i = i ? -1 : 1;
            return e.top += n * i, e.bottom += n * i, e.left += t * i, e.right += t * i, e
        }(a, t)), a
    }

    function ve(e) { if (!e || !e.parentElement || ne()) return document.documentElement; for (var t = e.parentElement; t && "none" === Y(t, "transform");) t = t.parentElement; return t || document.documentElement }

    function ye(e, t, n, i, o) {
        var r = 4 < arguments.length && void 0 !== o && o,
            a = { top: 0, left: 0 },
            s = r ? ve(e) : re(e, J(t));
        "viewport" === i ? a = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t,
                i = e.ownerDocument.documentElement,
                o = me(e, i),
                r = Math.max(i.clientWidth, window.innerWidth || 0),
                t = Math.max(i.clientHeight, window.innerHeight || 0),
                e = n ? 0 : ae(i),
                i = n ? 0 : ae(i, "left");
            return pe({ top: e - o.top + o.marginTop, left: i - o.left + o.marginLeft, width: r, height: t })
        }(s, r) : (o = void 0, "scrollParent" === i ? "BODY" === (o = Z(G(t))).nodeName && (o = e.ownerDocument.documentElement) : o = "window" === i ? e.ownerDocument.documentElement : i, l = me(o, s, r), "HTML" !== o.nodeName || function e(t) {
            var n = t.nodeName;
            if ("BODY" === n || "HTML" === n) return !1;
            if ("fixed" === Y(t, "position")) return !0;
            t = G(t);
            return !!t && e(t)
        }(s) ? a = l : (e = (s = ue(e.ownerDocument)).height, s = s.width, a.top += l.top - l.marginTop, a.bottom = e + l.top, a.left += l.left - l.marginLeft, a.right = s + l.left));
        var l = "number" == typeof(n = n || 0);
        return a.left += l ? n : n.left || 0, a.top += l ? n : n.top || 0, a.right -= l ? n : n.right || 0, a.bottom -= l ? n : n.bottom || 0, a
    }

    function be(e, t, n, i, o, r) {
        r = 5 < arguments.length && void 0 !== r ? r : 0;
        if (-1 === e.indexOf("auto")) return e;
        var o = ye(n, i, r, o),
            a = { top: { width: o.width, height: t.top - o.top }, right: { width: o.right - t.right, height: o.height }, bottom: { width: o.width, height: o.bottom - t.bottom }, left: { width: t.left - o.left, height: o.height } },
            t = Object.keys(a).map(function(e) { return he({ key: e }, a[e], { area: (e = a[e]).width * e.height }) }).sort(function(e, t) { return t.area - e.area }),
            o = t.filter(function(e) {
                var t = e.width,
                    e = e.height;
                return t >= n.clientWidth && e >= n.clientHeight
            }),
            t = (0 < o.length ? o : t)[0].key,
            e = e.split("-")[1];
        return t + (e ? "-" + e : "")
    }

    function _e(e, t, n, i) { i = 3 < arguments.length && void 0 !== i ? i : null; return me(n, i ? ve(t) : re(t, J(n)), i) }

    function we(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            t = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return { width: e.offsetWidth + t, height: e.offsetHeight + n }
    }

    function Ee(e) { var t = { left: "right", right: "left", bottom: "top", top: "bottom" }; return e.replace(/left|right|bottom|top/g, function(e) { return t[e] }) }

    function xe(e, t, n) {
        n = n.split("-")[0];
        var i = we(e),
            o = { width: i.width, height: i.height },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            e = r ? "height" : "width",
            r = r ? "width" : "height";
        return o[a] = t[a] + t[e] / 2 - i[e] / 2, o[s] = n === s ? t[s] - i[r] : t[Ee(s)], o
    }

    function Te(e, t) { return Array.prototype.find ? e.find(t) : e.filter(t)[0] }

    function Ce(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) { if (Array.prototype.findIndex) return e.findIndex(function(e) { return e[t] === n }); var i = Te(e, function(e) { return e[t] === n }); return e.indexOf(i) }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && K(t) && (n.offsets.popper = pe(n.offsets.popper), n.offsets.reference = pe(n.offsets.reference), n = t(n, e))
        }), n
    }

    function Se(e, n) { return e.some(function(e) { var t = e.name; return e.enabled && t === n }) }

    function ke(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i],
                o = o ? "" + o + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function Ne(e) { e = e.ownerDocument; return e ? e.defaultView : window }

    function Ae(e, t, n, i) {
        n.updateBound = i, Ne(e).addEventListener("resize", n.updateBound, { passive: !0 });
        e = Z(e);
        return function e(t, n, i, o) {
            var r = "BODY" === t.nodeName,
                t = r ? t.ownerDocument.defaultView : t;
            t.addEventListener(n, i, { passive: !0 }), r || e(Z(t.parentNode), n, i, o), o.push(t)
        }(e, "scroll", n.updateBound, n.scrollParents), n.scrollElement = e, n.eventsEnabled = !0, n
    }

    function De() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Ne(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) { e.removeEventListener("scroll", t.updateBound) }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function Ie(e) { return "" !== e && !isNaN(parseFloat(e)) && isFinite(e) }

    function Le(n, i) { Object.keys(i).forEach(function(e) { var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && Ie(i[e]) && (t = "px"), n.style[e] = i[e] + t }) }
    var Oe = $ && /Firefox/i.test(navigator.userAgent);

    function je(e, t, n) {
        var i, o = Te(e, function(e) { return e.name === t }),
            r = !!o && e.some(function(e) { return e.name === n && e.enabled && e.order < o.order });
        return r || (i = "`" + t + "`", e = "`" + n + "`", console.warn(e + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")), r
    }
    var v = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Pe = v.slice(3);

    function qe(e, t) { t = 1 < arguments.length && void 0 !== t && t, e = Pe.indexOf(e), e = Pe.slice(e + 1).concat(Pe.slice(0, e)); return t ? e.reverse() : e }
    var He = "flip",
        Me = "clockwise",
        Fe = "counterclockwise";

    function Re(e, o, r, t) {
        var a = [0, 0],
            s = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function(e) { return e.trim() }),
            t = n.indexOf(Te(n, function(e) { return -1 !== e.search(/,|\s/) }));
        n[t] && -1 === n[t].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        e = /\s*,\s*|\s+/;
        return (-1 !== t ? [n.slice(0, t).concat([n[t].split(e)[0]]), [n[t].split(e)[1]].concat(n.slice(t + 1))] : [n]).map(function(e, t) {
            var n = (1 === t ? !s : s) ? "height" : "width",
                i = !1;
            return e.reduce(function(e, t) { return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t) }, []).map(function(e) {
                return function(e, t, n, i) {
                    var o = +(r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1],
                        r = r[2];
                    if (!o) return e;
                    if (0 !== r.indexOf("%")) return "vh" !== r && "vw" !== r ? o : ("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    var a = void 0;
                    switch (r) {
                        case "%p":
                            a = n;
                            break;
                        case "%":
                        case "%r":
                        default:
                            a = i
                    }
                    return pe(a)[t] / 100 * o
                }(e, n, o, r)
            })
        }).forEach(function(n, i) { n.forEach(function(e, t) { Ie(e) && (a[i] += e * ("-" === n[t - 1] ? -1 : 1)) }) }), a
    }
    var t = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t, n, i = e.placement,
                            o = i.split("-")[0],
                            r = i.split("-")[1];
                        return r && (t = (n = e.offsets).reference, i = n.popper, o = (n = -1 !== ["bottom", "top"].indexOf(o)) ? "width" : "height", o = { start: de({}, n = n ? "left" : "top", t[n]), end: de({}, n, t[n] + t[o] - i[o]) }, e.offsets.popper = he({}, i, o[r])), e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.offset,
                            i = e.placement,
                            o = (r = e.offsets).popper,
                            t = r.reference,
                            r = i.split("-")[0],
                            i = void 0,
                            i = Ie(+n) ? [+n, 0] : Re(n, o, t, r);
                        return "left" === r ? (o.top += i[0], o.left -= i[1]) : "right" === r ? (o.top += i[0], o.left += i[1]) : "top" === r ? (o.left += i[0], o.top -= i[1]) : "bottom" === r && (o.left += i[0], o.top += i[1]), e.popper = o, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || ie(e.instance.popper);
                        e.instance.reference === t && (t = ie(t));
                        var n = ke("transform"),
                            o = e.instance.popper.style,
                            r = o.top,
                            a = o.left,
                            s = o[n];
                        o.top = "", o.left = "", o[n] = "";
                        var l = ye(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        o.top = r, o.left = a, o[n] = s, i.boundaries = l;
                        var s = i.priority,
                            u = e.offsets.popper,
                            c = {
                                primary: function(e) { var t = u[e]; return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), de({}, e, t) },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), de({}, t, n)
                                }
                            };
                        return s.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = he({}, u, c[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = (r = e.offsets).popper,
                            n = r.reference,
                            i = e.placement.split("-")[0],
                            o = Math.floor,
                            r = (a = -1 !== ["top", "bottom"].indexOf(i)) ? "right" : "bottom",
                            i = a ? "left" : "top",
                            a = a ? "width" : "height";
                        return t[r] < o(n[i]) && (e.offsets.popper[i] = o(n[i]) - t[a]), t[i] > o(n[r]) && (e.offsets.popper[i] = o(n[r])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        if (!je(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var n = t.element;
                        if ("string" == typeof n) { if (!(n = e.instance.popper.querySelector(n))) return e } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var i = e.placement.split("-")[0],
                            o = (c = e.offsets).popper,
                            r = c.reference,
                            a = -1 !== ["left", "right"].indexOf(i),
                            s = a ? "height" : "width",
                            l = a ? "Top" : "Left",
                            u = l.toLowerCase(),
                            t = a ? "left" : "top",
                            c = a ? "bottom" : "right",
                            i = we(n)[s];
                        return r[c] - i < o[u] && (e.offsets.popper[u] -= o[u] - (r[c] - i)), r[u] + i > o[c] && (e.offsets.popper[u] += r[u] + i - o[c]), e.offsets.popper = pe(e.offsets.popper), a = r[u] + r[s] / 2 - i / 2, c = Y(e.instance.popper), r = parseFloat(c["margin" + l]), l = parseFloat(c["border" + l + "Width"]), l = a - e.offsets.popper[u] - r - l, l = Math.max(Math.min(o[s] - i, l), 0), e.arrowElement = n, e.offsets.arrow = (de(n = {}, u, Math.round(l)), de(n, t, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(u, c) {
                        if (Se(u.instance.modifiers, "inner")) return u;
                        if (u.flipped && u.placement === u.originalPlacement) return u;
                        var f = ye(u.instance.popper, u.instance.reference, c.padding, c.boundariesElement, u.positionFixed),
                            d = u.placement.split("-")[0],
                            h = Ee(d),
                            p = u.placement.split("-")[1] || "",
                            g = [];
                        switch (c.behavior) {
                            case He:
                                g = [d, h];
                                break;
                            case Me:
                                g = qe(d);
                                break;
                            case Fe:
                                g = qe(d, !0);
                                break;
                            default:
                                g = c.behavior
                        }
                        return g.forEach(function(e, t) {
                            if (d !== e || g.length === t + 1) return u;
                            d = u.placement.split("-")[0], h = Ee(d);
                            var n = u.offsets.popper,
                                i = u.offsets.reference,
                                o = Math.floor,
                                r = "left" === d && o(n.right) > o(i.left) || "right" === d && o(n.left) < o(i.right) || "top" === d && o(n.bottom) > o(i.top) || "bottom" === d && o(n.top) < o(i.bottom),
                                a = o(n.left) < o(f.left),
                                s = o(n.right) > o(f.right),
                                l = o(n.top) < o(f.top),
                                e = o(n.bottom) > o(f.bottom),
                                i = "left" === d && a || "right" === d && s || "top" === d && l || "bottom" === d && e,
                                n = -1 !== ["top", "bottom"].indexOf(d),
                                o = !!c.flipVariations && (n && "start" === p && a || n && "end" === p && s || !n && "start" === p && l || !n && "end" === p && e),
                                l = !!c.flipVariationsByContent && (n && "start" === p && s || n && "end" === p && a || !n && "start" === p && e || !n && "end" === p && l),
                                l = o || l;
                            (r || i || l) && (u.flipped = !0, (r || i) && (d = g[t + 1]), l && (p = "end" === (l = p) ? "start" : "start" === l ? "end" : l), u.placement = d + (p ? "-" + p : ""), u.offsets.popper = he({}, u.offsets.popper, xe(u.instance.popper, u.offsets.reference, u.placement)), u = Ce(u.instance.modifiers, u, "flip"))
                        }), u
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = (a = e.offsets).popper,
                            o = a.reference,
                            r = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return i[r ? "left" : "top"] = o[n] - (a ? i[r ? "width" : "height"] : 0), e.placement = Ee(t), e.offsets.popper = pe(i), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!je(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = Te(e.instance.modifiers, function(e) { return "preventOverflow" === e.name }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            i = t.y,
                            o = e.offsets.popper;
                        void 0 !== (p = Te(e.instance.modifiers, function(e) { return "applyStyle" === e.name }).gpuAcceleration) && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var r, a, s, l, u = void 0 !== p ? p : t.gpuAcceleration,
                            c = ie(e.instance.popper),
                            f = ge(c),
                            d = { position: o.position },
                            h = (r = e, h = window.devicePixelRatio < 2 || !Oe, g = (l = r.offsets).popper, a = l.reference, s = Math.round, p = Math.floor, t = function(e) { return e }, o = s(a.width), l = s(g.width), a = -1 !== ["left", "right"].indexOf(r.placement), r = -1 !== r.placement.indexOf("-"), p = h ? a || r || o % 2 == l % 2 ? s : p : t, t = h ? s : t, { left: p(o % 2 == 1 && l % 2 == 1 && !r && h ? g.left - 1 : g.left), top: t(g.top), bottom: t(g.bottom), right: p(g.right) }),
                            t = "bottom" === n ? "top" : "bottom",
                            p = "right" === i ? "left" : "right",
                            g = ke("transform"),
                            n = void 0,
                            i = void 0,
                            i = "bottom" == t ? "HTML" === c.nodeName ? -c.clientHeight + h.bottom : -f.height + h.bottom : h.top,
                            n = "right" == p ? "HTML" === c.nodeName ? -c.clientWidth + h.right : -f.width + h.right : h.left;
                        return u && g ? (d[g] = "translate3d(" + n + "px, " + i + "px, 0)", d[t] = 0, d[p] = 0, d.willChange = "transform") : (u = "bottom" == t ? -1 : 1, g = "right" == p ? -1 : 1, d[t] = i * u, d[p] = n * g, d.willChange = t + ", " + p), p = { "x-placement": e.placement }, e.attributes = he({}, p, e.attributes), e.styles = he({}, d, e.styles), e.arrowStyles = he({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: { order: 900, enabled: !0, fn: function(e) { var t, n; return Le(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {!1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e) }), e.arrowElement && Object.keys(e.arrowStyles).length && Le(e.arrowElement, e.arrowStyles), e }, onLoad: function(e, t, n, i, o) { return o = _e(o, t, e, n.positionFixed), e = be(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding), t.setAttribute("x-placement", e), Le(t, { position: n.positionFixed ? "fixed" : "absolute" }), n }, gpuAcceleration: void 0 }
            }
        },
        Be = (d(We, [{
            key: "update",
            value: function() {
                return function() {
                    var e;
                    this.state.isDestroyed || ((e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }).offsets.reference = _e(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = be(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = xe(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = Ce(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)))
                }.call(this)
            }
        }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, Se(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[ke("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return function() { this.state.eventsEnabled || (this.state = Ae(this.reference, this.options, this.state, this.scheduleUpdate)) }.call(this) } }, { key: "disableEventListeners", value: function() { return De.call(this) } }]), We);

    function We(e, t) {
        var n = this,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ce(this, We), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = X(this.update.bind(this)), this.options = he({}, We.Defaults, i), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(he({}, We.Defaults.modifiers, i.modifiers)).forEach(function(e) { n.options.modifiers[e] = he({}, We.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) { return he({ name: e }, n.options.modifiers[e]) }).sort(function(e, t) { return e.order - t.order }), this.modifiers.forEach(function(e) { e.enabled && K(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state) }), this.update();
        t = this.options.eventsEnabled;
        t && this.enableEventListeners(), this.state.eventsEnabled = t
    }
    Be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Be.placements = v, Be.Defaults = t;
    var ze = "dropdown",
        Ue = "bs.dropdown",
        Qe = "." + Ue,
        d = ".data-api",
        $e = c.default.fn[ze],
        Ve = new RegExp("38|40|27"),
        Xe = "hide" + Qe,
        Ke = "hidden" + Qe,
        v = "click" + Qe + d,
        t = "keydown" + Qe + d,
        Ye = "disabled",
        Ge = "show",
        Ze = "dropdown-menu-right",
        Je = '[data-toggle="dropdown"]',
        et = ".dropdown-menu",
        tt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
        nt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
        it = function() {
            function u(e, t) { this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
            var e = u.prototype;
            return e.toggle = function() {
                var e;
                this._element.disabled || c.default(this._element).hasClass(Ye) || (e = c.default(this._menu).hasClass(Ge), u._clearMenus(), e || this.show(!0))
            }, e.show = function(e) {
                if (void 0 === e && (e = !1), !(this._element.disabled || c.default(this._element).hasClass(Ye) || c.default(this._menu).hasClass(Ge))) {
                    var t = { relatedTarget: this._element },
                        n = c.default.Event("show.bs.dropdown", t),
                        i = u._getParentFromElement(this._element);
                    if (c.default(i).trigger(n), !n.isDefaultPrevented()) {
                        if (!this._inNavbar && e) {
                            if (void 0 === Be) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                            e = this._element;
                            "parent" === this._config.reference ? e = i : f.isElement(this._config.reference) && (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])), "scrollParent" !== this._config.boundary && c.default(i).addClass("position-static"), this._popper = new Be(e, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === c.default(i).closest(".navbar-nav").length && c.default(document.body).children().on("mouseover", null, c.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), c.default(this._menu).toggleClass(Ge), c.default(i).toggleClass(Ge).trigger(c.default.Event("shown.bs.dropdown", t))
                    }
                }
            }, e.hide = function() {
                var e, t, n;
                this._element.disabled || c.default(this._element).hasClass(Ye) || !c.default(this._menu).hasClass(Ge) || (e = { relatedTarget: this._element }, t = c.default.Event(Xe, e), n = u._getParentFromElement(this._element), c.default(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), c.default(this._menu).toggleClass(Ge), c.default(n).toggleClass(Ge).trigger(c.default.Event(Ke, e))))
            }, e.dispose = function() { c.default.removeData(this._element, Ue), c.default(this._element).off(Qe), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null) }, e.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, e._addEventListeners = function() {
                var t = this;
                c.default(this._element).on("click.bs.dropdown", function(e) { e.preventDefault(), e.stopPropagation(), t.toggle() })
            }, e._getConfig = function(e) { return e = s({}, this.constructor.Default, c.default(this._element).data(), e), f.typeCheckConfig(ze, e, this.constructor.DefaultType), e }, e._getMenuElement = function() { var e; return this._menu || (e = u._getParentFromElement(this._element)) && (this._menu = e.querySelector(et)), this._menu }, e._getPlacement = function() {
                var e = c.default(this._element.parentNode),
                    t = "bottom-start";
                return e.hasClass("dropup") ? t = c.default(this._menu).hasClass(Ze) ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : c.default(this._menu).hasClass(Ze) && (t = "bottom-end"), t
            }, e._detectNavbar = function() { return 0 < c.default(this._element).closest(".navbar").length }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = s({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function() { var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }; return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), s({}, e, this._config.popperConfig) }, u._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = c.default(this).data(Ue);
                    if (e || (e = new u(this, "object" == typeof t ? t : null), c.default(this).data(Ue, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, u._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Je)), n = 0, i = t.length; n < i; n++) {
                        var o, r, a = u._getParentFromElement(t[n]),
                            s = c.default(t[n]).data(Ue),
                            l = { relatedTarget: t[n] };
                        e && "click" === e.type && (l.clickEvent = e), s && (o = s._menu, c.default(a).hasClass(Ge) && (e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && c.default.contains(a, e.target) || (r = c.default.Event(Xe, l), c.default(a).trigger(r), r.isDefaultPrevented() || ("ontouchstart" in document.documentElement && c.default(document.body).children().off("mouseover", null, c.default.noop), t[n].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), c.default(o).removeClass(Ge), c.default(a).removeClass(Ge).trigger(c.default.Event(Ke, l))))))
                    }
            }, u._getParentFromElement = function(e) { var t, n = f.getSelectorFromElement(e); return n && (t = document.querySelector(n)), t || e.parentNode }, u._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || c.default(e.target).closest(et).length)) : Ve.test(e.which)) && !this.disabled && !c.default(this).hasClass(Ye)) {
                    var t = u._getParentFromElement(this),
                        n = c.default(t).hasClass(Ge);
                    if (n || 27 !== e.which) {
                        if (e.preventDefault(), e.stopPropagation(), !n || 27 === e.which || 32 === e.which) return 27 === e.which && c.default(t.querySelector(Je)).trigger("focus"), void c.default(this).trigger("click");
                        n = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) { return c.default(e).is(":visible") });
                        0 !== n.length && (t = n.indexOf(e.target), 38 === e.which && 0 < t && t--, 40 === e.which && t < n.length - 1 && t++, t < 0 && (t = 0), n[t].focus())
                    }
                }
            }, a(u, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "Default", get: function() { return tt } }, { key: "DefaultType", get: function() { return nt } }]), u
        }();
    c.default(document).on(t, Je, it._dataApiKeydownHandler).on(t, et, it._dataApiKeydownHandler).on(v + " keyup.bs.dropdown.data-api", it._clearMenus).on(v, Je, function(e) { e.preventDefault(), e.stopPropagation(), it._jQueryInterface.call(c.default(this), "toggle") }).on(v, ".dropdown form", function(e) { e.stopPropagation() }), c.default.fn[ze] = it._jQueryInterface, c.default.fn[ze].Constructor = it, c.default.fn[ze].noConflict = function() { return c.default.fn[ze] = $e, it._jQueryInterface };
    var ot = "modal",
        rt = "bs.modal",
        at = "." + rt,
        st = c.default.fn[ot],
        lt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        ut = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        ct = "hidden" + at,
        ft = "show" + at,
        dt = "focusin" + at,
        ht = "resize" + at,
        pt = "click.dismiss" + at,
        gt = "keydown.dismiss" + at,
        mt = "mousedown.dismiss" + at,
        vt = "modal-open",
        yt = "fade",
        bt = "show",
        _t = "modal-static",
        wt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Et = ".sticky-top",
        xt = function() {
            function o(e, t) { this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0 }
            var e = o.prototype;
            return e.toggle = function(e) { return this._isShown ? this.hide() : this.show(e) }, e.show = function(e) {
                var t, n = this;
                this._isShown || this._isTransitioning || (c.default(this._element).hasClass(yt) && (this._isTransitioning = !0), t = c.default.Event(ft, { relatedTarget: e }), c.default(this._element).trigger(t), this._isShown || t.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), c.default(this._element).on(pt, '[data-dismiss="modal"]', function(e) { return n.hide(e) }), c.default(this._dialog).on(mt, function() { c.default(n._element).one("mouseup.dismiss.bs.modal", function(e) { c.default(e.target).is(n._element) && (n._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return n._showElement(e) })))
            }, e.hide = function(e) {
                var t = this;
                e && e.preventDefault(), this._isShown && !this._isTransitioning && (e = c.default.Event("hide.bs.modal"), c.default(this._element).trigger(e), this._isShown && !e.isDefaultPrevented() && (this._isShown = !1, (e = c.default(this._element).hasClass(yt)) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), c.default(document).off(dt), c.default(this._element).removeClass(bt), c.default(this._element).off(pt), c.default(this._dialog).off(mt), e ? (e = f.getTransitionDurationFromElement(this._element), c.default(this._element).one(f.TRANSITION_END, function(e) { return t._hideModal(e) }).emulateTransitionEnd(e)) : this._hideModal()))
            }, e.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) { return c.default(e).off(at) }), c.default(document).off(dt), c.default.removeData(this._element, rt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function() { this._adjustDialog() }, e._getConfig = function(e) { return e = s({}, lt, e), f.typeCheckConfig(ot, e, ut), e }, e._triggerBackdropTransition = function() {
                var e, t, n = this,
                    i = c.default.Event("hidePrevented.bs.modal");
                c.default(this._element).trigger(i), i.isDefaultPrevented() || ((e = this._element.scrollHeight > document.documentElement.clientHeight) || (this._element.style.overflowY = "hidden"), this._element.classList.add(_t), t = f.getTransitionDurationFromElement(this._dialog), c.default(this._element).off(f.TRANSITION_END), c.default(this._element).one(f.TRANSITION_END, function() { n._element.classList.remove(_t), e || c.default(n._element).one(f.TRANSITION_END, function() { n._element.style.overflowY = "" }).emulateTransitionEnd(n._element, t) }).emulateTransitionEnd(t), this._element.focus())
            }, e._showElement = function(e) {
                var t = this,
                    n = c.default(this._element).hasClass(yt),
                    i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), c.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && f.reflow(this._element), c.default(this._element).addClass(bt), this._config.focus && this._enforceFocus();
                var o = c.default.Event("shown.bs.modal", { relatedTarget: e }),
                    e = function() { t._config.focus && t._element.focus(), t._isTransitioning = !1, c.default(t._element).trigger(o) };
                n ? (n = f.getTransitionDurationFromElement(this._dialog), c.default(this._dialog).one(f.TRANSITION_END, e).emulateTransitionEnd(n)) : e()
            }, e._enforceFocus = function() {
                var t = this;
                c.default(document).off(dt).on(dt, function(e) { document !== e.target && t._element !== e.target && 0 === c.default(t._element).has(e.target).length && t._element.focus() })
            }, e._setEscapeEvent = function() {
                var t = this;
                this._isShown ? c.default(this._element).on(gt, function(e) { t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition() }) : this._isShown || c.default(this._element).off(gt)
            }, e._setResizeEvent = function() {
                var t = this;
                this._isShown ? c.default(window).on(ht, function(e) { return t.handleUpdate(e) }) : c.default(window).off(ht)
            }, e._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function() { c.default(document.body).removeClass(vt), e._resetAdjustments(), e._resetScrollbar(), c.default(e._element).trigger(ct) })
            }, e._removeBackdrop = function() { this._backdrop && (c.default(this._backdrop).remove(), this._backdrop = null) }, e._showBackdrop = function(e) {
                var t, n = this,
                    i = c.default(this._element).hasClass(yt) ? yt : "";
                this._isShown && this._config.backdrop ? (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), c.default(this._backdrop).appendTo(document.body), c.default(this._element).on(pt, function(e) { n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._triggerBackdropTransition() : n.hide()) }), i && f.reflow(this._backdrop), c.default(this._backdrop).addClass(bt), e && (i ? (t = f.getTransitionDurationFromElement(this._backdrop), c.default(this._backdrop).one(f.TRANSITION_END, e).emulateTransitionEnd(t)) : e())) : !this._isShown && this._backdrop ? (c.default(this._backdrop).removeClass(bt), i = function() { n._removeBackdrop(), e && e() }, c.default(this._element).hasClass(yt) ? (t = f.getTransitionDurationFromElement(this._backdrop), c.default(this._backdrop).one(f.TRANSITION_END, i).emulateTransitionEnd(t)) : i()) : e && e()
            }, e._adjustDialog = function() { var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, e._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, e._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function() {
                var e, t, o = this;
                this._isBodyOverflowing && (e = [].slice.call(document.querySelectorAll(wt)), t = [].slice.call(document.querySelectorAll(Et)), c.default(e).each(function(e, t) {
                    var n = t.style.paddingRight,
                        i = c.default(t).css("padding-right");
                    c.default(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }), c.default(t).each(function(e, t) {
                    var n = t.style.marginRight,
                        i = c.default(t).css("margin-right");
                    c.default(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                }), e = document.body.style.paddingRight, t = c.default(document.body).css("padding-right"), c.default(document.body).data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")), c.default(document.body).addClass(vt)
            }, e._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(wt));
                c.default(e).each(function(e, t) {
                    var n = c.default(t).data("padding-right");
                    c.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                e = [].slice.call(document.querySelectorAll(Et));
                c.default(e).each(function(e, t) {
                    var n = c.default(t).data("margin-right");
                    void 0 !== n && c.default(t).css("margin-right", n).removeData("margin-right")
                });
                e = c.default(document.body).data("padding-right");
                c.default(document.body).removeData("padding-right"), document.body.style.paddingRight = e || ""
            }, e._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, o._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var e = c.default(this).data(rt),
                        t = s({}, lt, c.default(this).data(), "object" == typeof n && n ? n : {});
                    if (e || (e = new o(this, t), c.default(this).data(rt, e)), "string" == typeof n) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, a(o, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "Default", get: function() { return lt } }]), o
        }();
    c.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t, n = this,
            i = f.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        i = c.default(t).data(rt) ? "toggle" : s({}, c.default(t).data(), c.default(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = c.default(t).one(ft, function(e) { e.isDefaultPrevented() || o.one(ct, function() { c.default(n).is(":visible") && n.focus() }) });
        xt._jQueryInterface.call(c.default(t), i, this)
    }), c.default.fn[ot] = xt._jQueryInterface, c.default.fn[ot].Constructor = xt, c.default.fn[ot].noConflict = function() { return c.default.fn[ot] = st, xt._jQueryInterface };
    var Tt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        v = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
        Ct = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        St = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function kt(e, r, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var e = (new window.DOMParser).parseFromString(e, "text/html"), a = Object.keys(r), s = [].slice.call(e.body.querySelectorAll("*")), n = function(e, t) {
                var n = s[e],
                    i = n.nodeName.toLowerCase();
                if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var e = [].slice.call(n.attributes),
                    o = [].concat(r["*"] || [], r[i] || []);
                e.forEach(function(e) {
                    ! function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Tt.indexOf(n) || Boolean(e.nodeValue.match(Ct) || e.nodeValue.match(St));
                        for (var i = t.filter(function(e) { return e instanceof RegExp }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return 1
                    }(e, o) && n.removeAttribute(e.nodeName)
                })
            }, i = 0, o = s.length; i < o; i++) n(i);
        return e.body.innerHTML
    }
    var Nt = "tooltip",
        At = "bs.tooltip",
        Dt = "." + At,
        It = c.default.fn[Nt],
        Lt = "bs-tooltip",
        Ot = new RegExp("(^|\\s)" + Lt + "\\S+", "g"),
        jt = ["sanitize", "whiteList", "sanitizeFn"],
        Pt = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
        qt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
        Ht = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: !0, sanitizeFn: null, whiteList: v, popperConfig: null },
        Mt = "show",
        Ft = { HIDE: "hide" + Dt, HIDDEN: "hidden" + Dt, SHOW: "show" + Dt, SHOWN: "shown" + Dt, INSERTED: "inserted" + Dt, CLICK: "click" + Dt, FOCUSIN: "focusin" + Dt, FOCUSOUT: "focusout" + Dt, MOUSEENTER: "mouseenter" + Dt, MOUSELEAVE: "mouseleave" + Dt },
        Rt = "fade",
        Bt = "show",
        Wt = "hover",
        zt = "focus",
        Ut = function() {
            function o(e, t) {
                if (void 0 === Be) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = o.prototype;
            return e.enable = function() { this._isEnabled = !0 }, e.disable = function() { this._isEnabled = !1 }, e.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, e.toggle = function(e) {
                var t, n;
                this._isEnabled && (e ? (t = this.constructor.DATA_KEY, (n = c.default(e.currentTarget).data(t)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), c.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)) : c.default(this.getTipElement()).hasClass(Bt) ? this._leave(null, this) : this._enter(null, this))
            }, e.dispose = function() { clearTimeout(this._timeout), c.default.removeData(this.element, this.constructor.DATA_KEY), c.default(this.element).off(this.constructor.EVENT_KEY), c.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && c.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, e.show = function() {
                var t = this;
                if ("none" === c.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e, n, i = c.default.Event(this.constructor.Event.SHOW);
                this.isWithContent() && this._isEnabled && (c.default(this.element).trigger(i), n = f.findShadowRoot(this.element), e = c.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element), !i.isDefaultPrevented() && e && (n = this.getTipElement(), i = f.getUID(this.constructor.NAME), n.setAttribute("id", i), this.element.setAttribute("aria-describedby", i), this.setContent(), this.config.animation && c.default(n).addClass(Rt), e = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement, i = this._getAttachment(e), this.addAttachmentClass(i), e = this._getContainer(), c.default(n).data(this.constructor.DATA_KEY, this), c.default.contains(this.element.ownerDocument.documentElement, this.tip) || c.default(n).appendTo(e), c.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Be(this.element, n, this._getPopperConfig(i)), c.default(n).addClass(Bt), c.default(n).addClass(this.config.customClass), "ontouchstart" in document.documentElement && c.default(document.body).children().on("mouseover", null, c.default.noop), i = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, c.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                }, c.default(this.tip).hasClass(Rt) ? (n = f.getTransitionDurationFromElement(this.tip), c.default(this.tip).one(f.TRANSITION_END, i).emulateTransitionEnd(n)) : i()))
            }, e.hide = function(e) {
                function t() { n._hoverState !== Mt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), c.default(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e() }
                var n = this,
                    i = this.getTipElement(),
                    o = c.default.Event(this.constructor.Event.HIDE);
                c.default(this.element).trigger(o), o.isDefaultPrevented() || (c.default(i).removeClass(Bt), "ontouchstart" in document.documentElement && c.default(document.body).children().off("mouseover", null, c.default.noop), this._activeTrigger.click = !1, this._activeTrigger[zt] = !1, this._activeTrigger[Wt] = !1, c.default(this.tip).hasClass(Rt) ? (o = f.getTransitionDurationFromElement(i), c.default(i).one(f.TRANSITION_END, t).emulateTransitionEnd(o)) : t(), this._hoverState = "")
            }, e.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, e.isWithContent = function() { return Boolean(this.getTitle()) }, e.addAttachmentClass = function(e) { c.default(this.getTipElement()).addClass(Lt + "-" + e) }, e.getTipElement = function() { return this.tip = this.tip || c.default(this.config.template)[0], this.tip }, e.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(c.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), c.default(e).removeClass(Rt + " " + Bt)
            }, e.setElementContent = function(e, t) { "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = kt(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? c.default(t).parent().is(e) || e.empty().append(t) : e.text(c.default(t).text()) }, e.getTitle = function() { return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title) }, e._getPopperConfig = function(e) { var t = this; return s({}, { placement: e, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(e) { e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e) }, onUpdate: function(e) { return t._handlePopperPlacementChange(e) } }, this.config.popperConfig) }, e._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) { return e.offsets = s({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e } : e.offset = this.config.offset, e
            }, e._getContainer = function() { return !1 === this.config.container ? document.body : f.isElement(this.config.container) ? c.default(this.config.container) : c.default(document).find(this.config.container) }, e._getAttachment = function(e) { return qt[e.toUpperCase()] }, e._setListeners = function() {
                var n = this;
                this.config.trigger.split(" ").forEach(function(e) { var t; "click" === e ? c.default(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(e) { return n.toggle(e) }) : "manual" !== e && (t = e === Wt ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN, e = e === Wt ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT, c.default(n.element).on(t, n.config.selector, function(e) { return n._enter(e) }).on(e, n.config.selector, function(e) { return n._leave(e) })) }), this._hideModalHandler = function() { n.element && n.hide() }, c.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
            }, e._fixTitle = function() { var e = typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", "")) }, e._enter = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || c.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), c.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? zt : Wt] = !0), c.default(t.getTipElement()).hasClass(Bt) || t._hoverState === Mt ? t._hoverState = Mt : (clearTimeout(t._timeout), t._hoverState = Mt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() { t._hoverState === Mt && t.show() }, t.config.delay.show) : t.show())
            }, e._leave = function(e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || c.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), c.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? zt : Wt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() { "out" === t._hoverState && t.hide() }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function(e) { var t = c.default(this.element).data(); return Object.keys(t).forEach(function(e) {-1 !== jt.indexOf(e) && delete t[e] }), "number" == typeof(e = s({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), f.typeCheckConfig(Nt, e, this.constructor.DefaultType), e.sanitize && (e.template = kt(e.template, e.whiteList, e.sanitizeFn)), e }, e._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function() {
                var e = c.default(this.getTipElement()),
                    t = e.attr("class").match(Ot);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function(e) { this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement)) }, e._fixTransition = function() {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (c.default(e).removeClass(Rt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, o._jQueryInterface = function(i) {
                return this.each(function() {
                    var e = c.default(this),
                        t = e.data(At),
                        n = "object" == typeof i && i;
                    if ((t || !/dispose|hide/.test(i)) && (t || (t = new o(this, n), e.data(At, t)), "string" == typeof i)) {
                        if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, a(o, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "Default", get: function() { return Ht } }, { key: "NAME", get: function() { return Nt } }, { key: "DATA_KEY", get: function() { return At } }, { key: "Event", get: function() { return Ft } }, { key: "EVENT_KEY", get: function() { return Dt } }, { key: "DefaultType", get: function() { return Pt } }]), o
        }();
    c.default.fn[Nt] = Ut._jQueryInterface, c.default.fn[Nt].Constructor = Ut, c.default.fn[Nt].noConflict = function() { return c.default.fn[Nt] = It, Ut._jQueryInterface };
    var Qt = "popover",
        $t = "bs.popover",
        Vt = "." + $t,
        Xt = c.default.fn[Qt],
        Kt = "bs-popover",
        Yt = new RegExp("(^|\\s)" + Kt + "\\S+", "g"),
        Gt = s({}, Ut.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        Zt = s({}, Ut.DefaultType, { content: "(string|element|function)" }),
        Jt = { HIDE: "hide" + Vt, HIDDEN: "hidden" + Vt, SHOW: "show" + Vt, SHOWN: "shown" + Vt, INSERTED: "inserted" + Vt, CLICK: "click" + Vt, FOCUSIN: "focusin" + Vt, FOCUSOUT: "focusout" + Vt, MOUSEENTER: "mouseenter" + Vt, MOUSELEAVE: "mouseleave" + Vt },
        en = function(e) {
            var t;

            function i() { return e.apply(this, arguments) || this }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var n = i.prototype;
            return n.isWithContent = function() { return this.getTitle() || this._getContent() }, n.addAttachmentClass = function(e) { c.default(this.getTipElement()).addClass(Kt + "-" + e) }, n.getTipElement = function() { return this.tip = this.tip || c.default(this.config.template)[0], this.tip }, n.setContent = function() {
                var e = c.default(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, n._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, n._cleanTipClass = function() {
                var e = c.default(this.getTipElement()),
                    t = e.attr("class").match(Yt);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = c.default(this).data($t),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), c.default(this).data($t, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, a(i, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "Default", get: function() { return Gt } }, { key: "NAME", get: function() { return Qt } }, { key: "DATA_KEY", get: function() { return $t } }, { key: "Event", get: function() { return Jt } }, { key: "EVENT_KEY", get: function() { return Vt } }, { key: "DefaultType", get: function() { return Zt } }]), i
        }(Ut);
    c.default.fn[Qt] = en._jQueryInterface, c.default.fn[Qt].Constructor = en, c.default.fn[Qt].noConflict = function() { return c.default.fn[Qt] = Xt, en._jQueryInterface };
    var tn = "scrollspy",
        nn = "bs.scrollspy",
        on = "." + nn,
        rn = c.default.fn[tn],
        an = { offset: 10, method: "auto", target: "" },
        sn = { offset: "number", method: "string", target: "(string|element)" },
        ln = "active",
        un = ".nav, .list-group",
        cn = ".nav-link",
        fn = ".list-group-item",
        dn = "position",
        hn = function() {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + cn + "," + this._config.target + " " + fn + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, c.default(this._scrollElement).on("scroll.bs.scrollspy", function(e) { return n._process(e) }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : dn,
                    i = "auto" === this._config.method ? e : this._config.method,
                    o = i === dn ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) { var t, n = f.getSelectorFromElement(e); if (n && (t = document.querySelector(n)), t) { e = t.getBoundingClientRect(); if (e.width || e.height) return [c.default(t)[i]().top + o, n] } return null }).filter(function(e) { return e }).sort(function(e, t) { return e[0] - t[0] }).forEach(function(e) { t._offsets.push(e[0]), t._targets.push(e[1]) })
            }, e.dispose = function() { c.default.removeData(this._element, nn), c.default(this._scrollElement).off(on), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, e._getConfig = function(e) { var t; return "string" != typeof(e = s({}, an, "object" == typeof e && e ? e : {})).target && f.isElement(e.target) && ((t = c.default(e.target).attr("id")) || (t = f.getUID(tn), c.default(e.target).attr("id", t)), e.target = "#" + t), f.typeCheckConfig(tn, e, sn), e }, e._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, e._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, e._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, e._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else { if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear(); for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i]) }
            }, e._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function(e) { return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]' }),
                    e = c.default([].slice.call(document.querySelectorAll(e.join(","))));
                e.hasClass("dropdown-item") ? (e.closest(".dropdown").find(".dropdown-toggle").addClass(ln), e.addClass(ln)) : (e.addClass(ln), e.parents(un).prev(cn + ", " + fn).addClass(ln), e.parents(un).prev(".nav-item").children(cn).addClass(ln)), c.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t })
            }, e._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) { return e.classList.contains(ln) }).forEach(function(e) { return e.classList.remove(ln) })
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = c.default(this).data(nn);
                    if (e || (e = new n(this, "object" == typeof t && t), c.default(this).data(nn, e)), "string" == typeof t) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, a(n, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "Default", get: function() { return an } }]), n
        }();
    c.default(window).on("load.bs.scrollspy.data-api", function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = c.default(e[t]);
            hn._jQueryInterface.call(n, n.data())
        }
    }), c.default.fn[tn] = hn._jQueryInterface, c.default.fn[tn].Constructor = hn, c.default.fn[tn].noConflict = function() { return c.default.fn[tn] = rn, hn._jQueryInterface };
    var pn = "bs.tab",
        v = "." + pn,
        gn = c.default.fn.tab,
        mn = "active",
        vn = ".active",
        yn = "> li > .active",
        bn = function() {
            function i(e) { this._element = e }
            var e = i.prototype;
            return e.show = function() {
                var e, t, n, i, o, r, a = this;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && c.default(this._element).hasClass(mn) || c.default(this._element).hasClass("disabled") || (r = c.default(this._element).closest(".nav, .list-group")[0], t = f.getSelectorFromElement(this._element), r && (o = "UL" === r.nodeName || "OL" === r.nodeName ? yn : vn, n = (n = c.default.makeArray(c.default(r).find(o)))[n.length - 1]), i = c.default.Event("hide.bs.tab", { relatedTarget: this._element }), o = c.default.Event("show.bs.tab", { relatedTarget: n }), n && c.default(n).trigger(i), c.default(this._element).trigger(o), o.isDefaultPrevented() || i.isDefaultPrevented() || (t && (e = document.querySelector(t)), this._activate(this._element, r), r = function() {
                    var e = c.default.Event("hidden.bs.tab", { relatedTarget: a._element }),
                        t = c.default.Event("shown.bs.tab", { relatedTarget: n });
                    c.default(n).trigger(e), c.default(a._element).trigger(t)
                }, e ? this._activate(e, e.parentNode, r) : r()))
            }, e.dispose = function() { c.default.removeData(this._element, pn), this._element = null }, e._activate = function(e, t, n) {
                var i = this,
                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? c.default(t).children(vn) : c.default(t).find(yn))[0],
                    r = n && o && c.default(o).hasClass("fade"),
                    t = function() { return i._transitionComplete(e, o, n) };
                o && r ? (r = f.getTransitionDurationFromElement(o), c.default(o).removeClass("show").one(f.TRANSITION_END, t).emulateTransitionEnd(r)) : t()
            }, e._transitionComplete = function(e, t, n) {
                var i;
                t && (c.default(t).removeClass(mn), (i = c.default(t.parentNode).find("> .dropdown-menu .active")[0]) && c.default(i).removeClass(mn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)), c.default(e).addClass(mn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), f.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && c.default(e.parentNode).hasClass("dropdown-menu") && ((t = c.default(e).closest(".dropdown")[0]) && (t = [].slice.call(t.querySelectorAll(".dropdown-toggle")), c.default(t).addClass(mn)), e.setAttribute("aria-expanded", !0)), n && n()
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = c.default(this),
                        t = e.data(pn);
                    if (t || (t = new i(this), e.data(pn, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, a(i, null, [{ key: "VERSION", get: function() { return "4.6.0" } }]), i
        }();
    c.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) { e.preventDefault(), bn._jQueryInterface.call(c.default(this), "show") }), c.default.fn.tab = bn._jQueryInterface, c.default.fn.tab.Constructor = bn, c.default.fn.tab.noConflict = function() { return c.default.fn.tab = gn, bn._jQueryInterface };
    var _n = "toast",
        wn = "bs.toast",
        v = "." + wn,
        En = c.default.fn[_n],
        xn = "click.dismiss" + v,
        Tn = "show",
        Cn = "showing",
        Sn = { animation: "boolean", autohide: "boolean", delay: "number" },
        kn = { animation: !0, autohide: !0, delay: 500 },
        Nn = function() {
            function i(e, t) { this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners() }
            var e = i.prototype;
            return e.show = function() {
                var e, t = this,
                    n = c.default.Event("show.bs.toast");
                c.default(this._element).trigger(n), n.isDefaultPrevented() || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), e = function() { t._element.classList.remove(Cn), t._element.classList.add(Tn), c.default(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function() { t.hide() }, t._config.delay)) }, this._element.classList.remove("hide"), f.reflow(this._element), this._element.classList.add(Cn), this._config.animation ? (n = f.getTransitionDurationFromElement(this._element), c.default(this._element).one(f.TRANSITION_END, e).emulateTransitionEnd(n)) : e())
            }, e.hide = function() {
                var e;
                this._element.classList.contains(Tn) && (e = c.default.Event("hide.bs.toast"), c.default(this._element).trigger(e), e.isDefaultPrevented() || this._close())
            }, e.dispose = function() { this._clearTimeout(), this._element.classList.contains(Tn) && this._element.classList.remove(Tn), c.default(this._element).off(xn), c.default.removeData(this._element, wn), this._element = null, this._config = null }, e._getConfig = function(e) { return e = s({}, kn, c.default(this._element).data(), "object" == typeof e && e ? e : {}), f.typeCheckConfig(_n, e, this.constructor.DefaultType), e }, e._setListeners = function() {
                var e = this;
                c.default(this._element).on(xn, '[data-dismiss="toast"]', function() { return e.hide() })
            }, e._close = function() {
                function e() { n._element.classList.add("hide"), c.default(n._element).trigger("hidden.bs.toast") }
                var t, n = this;
                this._element.classList.remove(Tn), this._config.animation ? (t = f.getTransitionDurationFromElement(this._element), c.default(this._element).one(f.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
            }, e._clearTimeout = function() { clearTimeout(this._timeout), this._timeout = null }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = c.default(this),
                        t = e.data(wn);
                    if (t || (t = new i(this, "object" == typeof n && n), e.data(wn, t)), "string" == typeof n) {
                        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n](this)
                    }
                })
            }, a(i, null, [{ key: "VERSION", get: function() { return "4.6.0" } }, { key: "DefaultType", get: function() { return Sn } }, { key: "Default", get: function() { return kn } }]), i
        }();
    c.default.fn[_n] = Nn._jQueryInterface, c.default.fn[_n].Constructor = Nn, c.default.fn[_n].noConflict = function() { return c.default.fn[_n] = En, Nn._jQueryInterface }, e.Alert = p, e.Button = w, e.Carousel = j, e.Collapse = Q, e.Dropdown = it, e.Modal = xt, e.Popover = en, e.Scrollspy = hn, e.Tab = bn, e.Toast = Nn, e.Tooltip = Ut, e.Util = f, Object.defineProperty(e, "__esModule", { value: !0 })
}),
function(e) {
    "use strict";

    function n(e) { return new RegExp("(^|\\s+)" + e + "(\\s+|$)") }

    function t(e, t) {
        (i(e, t) ? r : o)(e, t)
    }
    var i, o, r = "classList" in document.documentElement ? (i = function(e, t) { return e.classList.contains(t) }, o = function(e, t) { e.classList.add(t) }, function(e, t) { e.classList.remove(t) }) : (i = function(e, t) { return n(t).test(e.className) }, o = function(e, t) { i(e, t) || (e.className = e.className + " " + t) }, function(e, t) { e.className = e.className.replace(n(t), " ") }),
        a = { hasClass: i, addClass: o, removeClass: r, toggleClass: t, has: i, add: o, remove: r, toggle: t };
    "function" == typeof define && define.amd ? define(a) : e.classie = a
}(window);