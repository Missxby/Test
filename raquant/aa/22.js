! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = { exports: {}, id: i, loaded: !1 };
        return t[i].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
    }
    var n, i, r = window.webpackJsonp;
    return window.webpackJsonp = function(o, s) {
        for (var a, l, u, c = 0, h = []; c < o.length; c++) l = o[c], i[l] && h.push.apply(h, i[l]), i[l] = 0;
        for (a in s) switch (u = s[a], typeof u) {
            case "object":
                t[a] = function(e) {
                    var n = e.slice(1),
                        i = e[0];
                    return function(e, r, o) { t[i].apply(this, [e, r, o].concat(n)) }
                }(u);
                break;
            case "function":
                t[a] = u;
                break;
            default:
                t[a] = t[u]
        }
        for (r && r(o, s); h.length;) h.shift().call(null, e);
        if (s[0]) return n[0] = 0, e(0)
    }, n = {}, i = { 74: 0 }, e.e = function(t, n) {
        var r, o;
        return 0 === i[t] ? n.call(null, e) : void(void 0 !== i[t] ? i[t].push(n) : (i[t] = [n], r = document.getElementsByTagName("head")[0], o = document.createElement("script"), o.type = "text/javascript", o.charset = "utf-8", o.async = !0, o.src = e.p + "" + ({ 0: "ad_page", 1: "addon", 3: "common-userbugreportdialog", 4: "orderticket", 5: "positionticket", 6: "cqg", 7: "paper", 8: "fxcm", 9: "oanda", 10: "widgetbar", 12: "tvscript_chunk", 14: "jszip", 15: "propertypagesfactory", 16: "objecttreedialog", 18: "admin_alerts_index", 19: "admin_alerts_one", 20: "admin_pro_index", 21: "admin_tag_index", 22: "admin_tag_one", 23: "advertising", 24: "auth_widget", 25: "base", 26: "base_widget", 27: "calendar_page", 28: "chart_view", 29: "chat_history", 30: "css_chartclient", 31: "css_embed_widget", 32: "development_widget", 33: "embed_base", 34: "embed_ideaswidget", 35: "embed_mediumwidget", 36: "embed_miniwidget", 37: "embed_published", 38: "embed_quotes_provider", 39: "embed_user_info_widget", 40: "embed_widget", 41: "widget-sidetoolbar", 42: "events_widget", 43: "external_tools", 44: "features", 45: "features_plus_how_it_works", 46: "gopro", 47: "how_it_works", 48: "html5_library", 49: "idea_popup", 50: "index_search", 51: "is_auth_widget", 52: "jobs", 53: "link_behavior", 54: "login_state_widget", 55: "main_chart", 56: "tradingdom", 58: "tradingaccountmanager", 59: "main_chart_mobile", 60: "message_permalink", 61: "moderation_index", 62: "payment", 63: "payment_complete", 64: "payment_error", 65: "people", 66: "profile", 67: "publishing_tools", 68: "search", 69: "standalone_chat", 70: "standalone_screener", 71: "study_script_reference", 72: "style_guides", 73: "tv_for_the_web", 75: "widget_demo", 76: "widget_image_demo_popup", 77: "widget_page", 78: "widget_skin_seekingalpha" }[t] || t) + "." + { 0: "b3d228294a6ab362c32b", 1: "4bac057e14ec302a9e97", 2: "a1d75a143d329b426b70", 3: "f50b9ad5e74ffe52fad6", 4: "40abb2068b2be225fda1", 5: "125fa586e18617b617ed", 6: "6ab99697ea91c7fb39f4", 7: "8c46e59f7f626b237748", 8: "0a9a5f1806ef0e08463c", 9: "afaf9b5ed71d4f3b8b54", 10: "e95de8a0957bb62f893e", 11: "3c924123b59c0ef49f6b", 12: "686e2d78ba1e5a4bb744", 13: "e277012826ebf3c2769e", 14: "968c6dba1ea764be263a", 15: "3342a16e6439af16494f", 16: "73a434ed1e9e0562a467", 17: "3a4c38a8e293640e510f", 18: "e199fa3033d626fe3a33", 19: "c79c6a315f7439f58d9d", 20: "5dc7cd2ddb97dc0ffb77", 21: "fcf390b61a37bcaf21a4", 22: "1719641751bfc898c968", 23: "ee61b6e4b7ad9087fb63", 24: "5cee7ab98b641d371991", 25: "8aae23fc2c22535a04f0", 26: "7ab0c057c02b2ecd4987", 27: "417c2e3c01628d301dec", 28: "b9922f0d1bb43c0dc49d", 29: "329bed9ef3c0155a6c1a", 30: "5a80f3a6006c033787a1", 31: "6f51a4289819e98f6aa6", 32: "91db70e24dc0b997d16b", 33: "6620a410a7e5a9fde631", 34: "bcd6541f2d4611d430d0", 35: "a2999ec67110b97d1c16", 36: "9ffda2aa502b9a76a7bb", 37: "f113355bae3af1da6b3c", 38: "332fa9f8540e677770d8", 39: "8978cd7a07fdde3aeb0e", 40: "01a85fb695f76c5e92ea", 41: "95bbc03bb21346584062", 42: "7ee2b61619b98285272e", 43: "480014840e70d989bd69", 44: "98f0a7d3f5afb83b6905", 45: "bddcc490af4993c56f5a", 46: "e5c1f03ce9fe04e3fbe7", 47: "0dca635c2a7397af6cfc", 48: "6559003e95409aadda11", 49: "5027bce50cb2b88e108b", 50: "4ebb429ec78f8ac9d965", 51: "d5a1020d3fdf1e7b4d26", 52: "83f9f878285d944cc523", 53: "a709e578343e82d0932d", 54: "4e1750f502a266fb05dc", 55: "5cdff0a111e166658243", 56: "b9dd9350d0bfd1bdb579", 57: "1f3e5372c1ffa92a2b7d", 58: "c263d502ac58acbca5bf", 59: "10a338d7984de9140e8c", 60: "736bd55d5532f5b30251", 61: "268abab8926f54d19a74", 62: "1f295f7319f02d3aa8b9", 63: "8e0ca35e86c2c95c706a", 64: "ec329e7a54bd4d2c180d", 65: "036b69e70ae8aa8150b7", 66: "1df5693c301531c3364a", 67: "48c4fa4a15f8ee6a6f1f", 68: "11dca5f28aeab228fac1", 69: "c40dca76f314c367ef1a", 70: "74290cdf690a343c4173", 71: "23396c2daa9ef38d9d00", 72: "95fe0f32fc045ca9603d", 73: "da25562974549da2f719", 75: "bf07e5b636659cbec997", 76: "d961d66db1730d3a29a7", 77: "4634cfb250761b157917", 78: "4e5d17ce01bf9bbae97e" }[t] + ".js", r.appendChild(o)))
    }, e.m = t, e.c = n, e.p = "https://dwq4do82y8xi7.cloudfront.net/static/bundles/", e(0)
}(function(t) {
    for (var e in t)
        if (Object.prototype.hasOwnProperty.call(t, e)) switch (typeof t[e]) {
            case "function":
                break;
            case "object":
                t[e] = function(e) {
                    var n = e.slice(1),
                        i = t[e[0]];
                    return function(t, e, r) { i.apply(this, [t, e, r].concat(n)) }
                }(t[e]);
                break;
            default:
                t[e] = t[t[e]]
        }
    return t
}([function(t, e, n) { n(1389), n(1685), n(76), n(1686), n(1687), n(65), n(75), n(49), n(61), n(6), n(176), n(1688), n(1689), n(1690), n(1691), n(1692), n(1693), n(1694), n(1695), n(1696), n(1697), n(1698), n(1699), n(1700), n(1701), n(1702), n(1703), n(1704), n(1705), n(1706), n(1707), n(1708), n(1709), n(1710), n(1711), n(298), n(1712), n(383), n(58), n(1714), t.exports = n(1715) }, , , , , , function(t, e, n) {}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    function i(t) {
        return n(r(t))
    }

    function r(t) {
        return o[t] || function() {
            throw Error("Cannot find module '" + t + "'.")
        }()
    }
    var o = { "./en-gb": 9, "./en-gb.js": 9, "./es": 10, "./es.js": 10, "./it": 11, "./it.js": 11, "./ja": 12, "./ja.js": 12, "./ko": 13, "./ko.js": 13, "./pl": 14, "./pl.js": 14, "./pt": 15, "./pt-br": 16, "./pt-br.js": 16, "./pt.js": 15, "./ru": 17, "./ru.js": 17, "./tr": 18, "./tr.js": 18 };
    i.keys = function() {
        return Object.keys(o)
    }, i.resolve = r, t.exports = i, i.id = 8
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {}, function(t, e) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, 54, , , function(t, e) {}, , , function(t, e, n) {}, function(t, e, n) {}, , , function(t, e, n) {
    var i, r;
    (function() {
        function n(t) {
            function e(e, n, i, r, o, s) {
                for (; o >= 0 && o < s; o += t) {
                    var a = r ? r[o] : o;
                    i = n(i, e[a], a, e)
                }
                return i
            }
            return function(n, i, r, o) {
                i = l(i, o, 4);
                var s = !g(n) && W.keys(n),
                    a = (s || n).length,
                    u = t > 0 ? 0 : a - 1;
                return arguments.length < 3 && (r = n[s ? s[u] : u], u += t), e(n, i, r, s, u, a)
            }
        }

        function o(t) {
            return function(e, n, i) {
                var r, o;
                for (n = u(n, i), r = p(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t)
                    if (n(e[o], o, e)) return o;
                return -1
            }
        }

        function s(t, e, n) {
            return function(i, r, o) {
                var s = 0,
                    a = p(i);
                if ("number" == typeof o) t > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                else if (n && o && a) return o = n(i, r), i[o] === r ? o : -1;
                if (r !== r) return o = e(F.call(i, s, a), W.isNaN), o >= 0 ? o + s : -1;
                for (o = t > 0 ? s : a - 1; o >= 0 && o < a; o += t)
                    if (i[o] === r) return o;
                return -1
            }
        }

        function a(t, e) {
            var n = w.length,
                i = t.constructor,
                r = W.isFunction(i) && i.prototype || L,
                o = "constructor";
            for (W.has(t, o) && !W.contains(e, o) && e.push(o); n--;) o = w[n], o in t && t[o] !== r[o] && !W.contains(e, o) && e.push(o)
        }
        var l, u, c, h, f, d, p, g, m, y, v, b, w, _, x, S, k, T, E, C, I, M, D, P = this,
            A = P._,
            O = Array.prototype,
            L = Object.prototype,
            N = Function.prototype,
            j = O.push,
            F = O.slice,
            R = L.toString,
            H = L.hasOwnProperty,
            Y = Array.isArray,
            z = Object.keys,
            B = N.bind,
            U = Object.create,
            V = function() {},
            W = function(t) {
                return t instanceof W ? t : this instanceof W ? void(this._wrapped = t) : new W(t)
            };
        void 0 !== t && t.exports && (e = t.exports = W), e._ = W, W.VERSION = "1.8.3", l = function(t, e, n) {
            if (void 0 === e) return t;
            switch (null == n ? 3 : n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    };
                case 4:
                    return function(n, i, r, o) {
                        return t.call(e, n, i, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }, u = function(t, e, n) {
            return null == t ? W.identity : W.isFunction(t) ? l(t, e, n) : W.isObject(t) ? W.matcher(t) : W.property(t)
        }, W.iteratee = function(t, e) {
            return u(t, e, 1 / 0)
        }, c = function(t, e) {
            return function(n) {
                var i, r, o, s, a, l, u = arguments.length;
                if (u < 2 || null == n) return n;
                for (i = 1; i < u; i++)
                    for (r = arguments[i], o = t(r), s = o.length, a = 0; a < s; a++) l = o[a], e && void 0 !== n[l] || (n[l] = r[l]);
                return n
            }
        }, h = function(t) {
            if (!W.isObject(t)) return {};
            if (U) return U(t);
            V.prototype = t;
            var e = new V;
            return V.prototype = null, e
        }, f = function(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }, d = Math.pow(2, 53) - 1, p = f("length"), g = function(t) {
            var e = p(t);
            return "number" == typeof e && e >= 0 && e <= d
        }, W.each = W.forEach = function(t, e, n) {
            var i, r, o;
            if (e = l(e, n), g(t))
                for (i = 0, r = t.length; i < r; i++) e(t[i], i, t);
            else
                for (o = W.keys(t), i = 0, r = o.length; i < r; i++) e(t[o[i]], o[i], t);
            return t
        }, W.map = W.collect = function(t, e, n) {
            var i, r, o, s, a;
            for (e = u(e, n), i = !g(t) && W.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) a = i ? i[s] : s, o[s] = e(t[a], a, t);
            return o
        }, W.reduce = W.foldl = W.inject = n(1), W.reduceRight = W.foldr = n(-1), W.find = W.detect = function(t, e, n) {
            var i;
            if (i = g(t) ? W.findIndex(t, e, n) : W.findKey(t, e, n), void 0 !== i && i !== -1) return t[i]
        }, W.filter = W.select = function(t, e, n) {
            var i = [];
            return e = u(e, n), W.each(t, function(t, n, r) { e(t, n, r) && i.push(t) }), i
        }, W.reject = function(t, e, n) {
            return W.filter(t, W.negate(u(e)), n)
        }, W.every = W.all = function(t, e, n) {
            var i, r, o, s;
            for (e = u(e, n), i = !g(t) && W.keys(t), r = (i || t).length, o = 0; o < r; o++)
                if (s = i ? i[o] : o, !e(t[s], s, t)) return !1;
            return !0
        }, W.some = W.any = function(t, e, n) {
            var i, r, o, s;
            for (e = u(e, n), i = !g(t) && W.keys(t), r = (i || t).length, o = 0; o < r; o++)
                if (s = i ? i[o] : o, e(t[s], s, t)) return !0;
            return !1
        }, W.contains = W.includes = W.include = function(t, e, n, i) {
            return g(t) || (t = W.values(t)), ("number" != typeof n || i) && (n = 0), W.indexOf(t, e, n) >= 0
        }, W.invoke = function(t, e) {
            var n = F.call(arguments, 2),
                i = W.isFunction(e);
            return W.map(t, function(t) {
                var r = i ? e : t[e];
                return null == r ? r : r.apply(t, n)
            })
        }, W.pluck = function(t, e) {
            return W.map(t, W.property(e))
        }, W.where = function(t, e) {
            return W.filter(t, W.matcher(e))
        }, W.findWhere = function(t, e) {
            return W.find(t, W.matcher(e))
        }, W.max = function(t, e, n) {
            var i, r, o, s, a = -(1 / 0),
                l = -(1 / 0);
            if (null == e && null != t)
                for (t = g(t) ? t : W.values(t), o = 0, s = t.length; o < s; o++) i = t[o], i > a && (a = i);
            else e = u(e, n), W.each(t, function(t, n, i) { r = e(t, n, i), (r > l || r === -(1 / 0) && a === -(1 / 0)) && (a = t, l = r) });
            return a
        }, W.min = function(t, e, n) {
            var i, r, o, s, a = 1 / 0,
                l = 1 / 0;
            if (null == e && null != t)
                for (t = g(t) ? t : W.values(t), o = 0, s = t.length; o < s; o++) i = t[o], i < a && (a = i);
            else e = u(e, n), W.each(t, function(t, n, i) { r = e(t, n, i), (r < l || r === 1 / 0 && a === 1 / 0) && (a = t, l = r) });
            return a
        }, W.shuffle = function(t) {
            var e, n, i = g(t) ? t : W.values(t),
                r = i.length,
                o = Array(r);
            for (e = 0; e < r; e++) n = W.random(0, e), n !== e && (o[e] = o[n]), o[n] = i[e];
            return o
        }, W.sample = function(t, e, n) {
            return null == e || n ? (g(t) || (t = W.values(t)), t[W.random(t.length - 1)]) : W.shuffle(t).slice(0, Math.max(0, e))
        }, W.sortBy = function(t, e, n) {
            return e = u(e, n), W.pluck(W.map(t, function(t, n, i) {
                return { value: t, index: n, criteria: e(t, n, i) }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (n < i || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        }, m = function(t) {
            return function(e, n, i) {
                var r = {};
                return n = u(n, i), W.each(e, function(i, o) {
                    var s = n(i, o, e);
                    t(r, i, s)
                }), r
            }
        }, W.groupBy = m(function(t, e, n) { W.has(t, n) ? t[n].push(e) : t[n] = [e] }), W.indexBy = m(function(t, e, n) { t[n] = e }), W.countBy = m(function(t, e, n) { W.has(t, n) ? t[n]++ : t[n] = 1 }), W.toArray = function(t) {
            return t ? W.isArray(t) ? F.call(t) : g(t) ? W.map(t, W.identity) : W.values(t) : []
        }, W.size = function(t) {
            return null == t ? 0 : g(t) ? t.length : W.keys(t).length
        }, W.partition = function(t, e, n) {
            e = u(e, n);
            var i = [],
                r = [];
            return W.each(t, function(t, n, o) {
                (e(t, n, o) ? i : r).push(t)
            }), [i, r]
        }, W.first = W.head = W.take = function(t, e, n) {
            if (null != t) return null == e || n ? t[0] : W.initial(t, t.length - e)
        }, W.initial = function(t, e, n) {
            return F.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
        }, W.last = function(t, e, n) {
            if (null != t) return null == e || n ? t[t.length - 1] : W.rest(t, Math.max(0, t.length - e))
        }, W.rest = W.tail = W.drop = function(t, e, n) {
            return F.call(t, null == e || n ? 1 : e)
        }, W.compact = function(t) {
            return W.filter(t, W.identity)
        }, y = function(t, e, n, i) {
            var r, o, s, a, l, u = [],
                c = 0;
            for (r = i || 0, o = p(t); r < o; r++)
                if (s = t[r], g(s) && (W.isArray(s) || W.isArguments(s)))
                    for (e || (s = y(s, e, n)), a = 0, l = s.length, u.length += l; a < l;) u[c++] = s[a++];
                else n || (u[c++] = s);
            return u
        }, W.flatten = function(t, e) {
            return y(t, e, !1)
        }, W.without = function(t) {
            return W.difference(t, F.call(arguments, 1))
        }, W.uniq = W.unique = function(t, e, n, i) {
            var r, o, s, a, l, c;
            for (W.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = u(n, i)), r = [], o = [], s = 0, a = p(t); s < a; s++) l = t[s], c = n ? n(l, s, t) : l, e ? (s && o === c || r.push(l), o = c) : n ? W.contains(o, c) || (o.push(c), r.push(l)) : W.contains(r, l) || r.push(l);
            return r
        }, W.union = function() {
            return W.uniq(y(arguments, !0, !0))
        }, W.intersection = function(t) {
            var e, n, i, r, o = [],
                s = arguments.length;
            for (e = 0, n = p(t); e < n; e++)
                if (i = t[e], !W.contains(o, i)) {
                    for (r = 1; r < s && W.contains(arguments[r], i); r++);
                    r === s && o.push(i)
                }
            return o
        }, W.difference = function(t) {
            var e = y(arguments, !0, !0, 1);
            return W.filter(t, function(t) {
                return !W.contains(e, t)
            })
        }, W.zip = function() {
            return W.unzip(arguments)
        }, W.unzip = function(t) {
            var e, n = t && W.max(t, p).length || 0,
                i = Array(n);
            for (e = 0; e < n; e++) i[e] = W.pluck(t, e);
            return i
        }, W.object = function(t, e) {
            var n, i, r = {};
            for (n = 0, i = p(t); n < i; n++) e ? r[t[n]] = e[n] : r[t[n][0]] = t[n][1];
            return r
        }, W.findIndex = o(1), W.findLastIndex = o(-1), W.sortedIndex = function(t, e, n, i) {
            var r, o, s, a;
            for (n = u(n, i, 1), r = n(e), o = 0, s = p(t); o < s;) a = Math.floor((o + s) / 2), n(t[a]) < r ? o = a + 1 : s = a;
            return o
        }, W.indexOf = s(1, W.findIndex, W.sortedIndex), W.lastIndexOf = s(-1, W.findLastIndex), W.range = function(t, e, n) {
            var i, r, o;
            for (null == e && (e = t || 0, t = 0), n = n || 1, i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n) r[o] = t;
            return r
        }, v = function(t, e, n, i, r) {
            var o, s;
            return i instanceof e ? (o = h(t.prototype), s = t.apply(o, r), W.isObject(s) ? s : o) : t.apply(n, r)
        }, W.bind = function(t, e) {
            var n, i;
            if (B && t.bind === B) return B.apply(t, F.call(arguments, 1));
            if (!W.isFunction(t)) throw new TypeError("Bind must be called on a function");
            return n = F.call(arguments, 2), i = function() {
                return v(t, i, e, this, n.concat(F.call(arguments)))
            }
        }, W.partial = function(t) {
            var e = F.call(arguments, 1),
                n = function() {
                    var i, r = 0,
                        o = e.length,
                        s = Array(o);
                    for (i = 0; i < o; i++) s[i] = e[i] === W ? arguments[r++] : e[i];
                    for (; r < arguments.length;) s.push(arguments[r++]);
                    return v(t, n, this, this, s)
                };
            return n
        }, W.bindAll = function(t) {
            var e, n, i = arguments.length;
            if (i <= 1) throw Error("bindAll must be passed function names");
            for (e = 1; e < i; e++) n = arguments[e], t[n] = W.bind(t[n], t);
            return t
        }, W.memoize = function(t, e) {
            var n = function(i) {
                var r = n.cache,
                    o = "" + (e ? e.apply(this, arguments) : i);
                return W.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
            };
            return n.cache = {}, n
        }, W.delay = function(t, e) {
            var n = F.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, W.defer = W.partial(W.delay, W, 1), W.throttle = function(t, e, n) {
            var i, r, o, s, a = null,
                l = 0;
            return n || (n = {}), s = function() { l = n.leading === !1 ? 0 : W.now(), a = null, o = t.apply(i, r), a || (i = r = null) },
                function() {
                    var u, c = W.now();
                    return l || n.leading !== !1 || (l = c), u = e - (c - l), i = this, r = arguments, u <= 0 || u > e ? (a && (clearTimeout(a), a = null), l = c, o = t.apply(i, r), a || (i = r = null)) : a || n.trailing === !1 || (a = setTimeout(s, u)), o
                }
        }, W.debounce = function(t, e, n) {
            var i, r, o, s, a, l = function() {
                var u = W.now() - s;
                u < e && u >= 0 ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(o, r), i || (o = r = null)))
            };
            return function() {
                o = this, r = arguments, s = W.now();
                var u = n && !i;
                return i || (i = setTimeout(l, e)), u && (a = t.apply(o, r), o = r = null), a
            }
        }, W.wrap = function(t, e) {
            return W.partial(e, t)
        }, W.negate = function(t) {
            return function() {
                return !t.apply(this, arguments)
            }
        }, W.compose = function() {
            var t = arguments,
                e = t.length - 1;
            return function() {
                for (var n = e, i = t[e].apply(this, arguments); n--;) i = t[n].call(this, i);
                return i
            }
        }, W.after = function(t, e) {
            return function() {
                if (--t < 1) return e.apply(this, arguments)
            }
        }, W.before = function(t, e) {
            var n;
            return function() {
                return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
            }
        }, W.once = W.partial(W.before, 2), b = !{ toString: null }.propertyIsEnumerable("toString"), w = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], W.keys = function(t) {
            var e, n;
            if (!W.isObject(t)) return [];
            if (z) return z(t);
            e = [];
            for (n in t) W.has(t, n) && e.push(n);
            return b && a(t, e), e
        }, W.allKeys = function(t) {
            var e, n;
            if (!W.isObject(t)) return [];
            e = [];
            for (n in t) e.push(n);
            return b && a(t, e), e
        }, W.values = function(t) {
            var e, n = W.keys(t),
                i = n.length,
                r = Array(i);
            for (e = 0; e < i; e++) r[e] = t[n[e]];
            return r
        }, W.mapObject = function(t, e, n) {
            var i, r, o, s, a;
            for (e = u(e, n), i = W.keys(t), r = i.length, o = {}, a = 0; a < r; a++) s = i[a], o[s] = e(t[s], s, t);
            return o
        }, W.pairs = function(t) {
            var e, n = W.keys(t),
                i = n.length,
                r = Array(i);
            for (e = 0; e < i; e++) r[e] = [n[e], t[n[e]]];
            return r
        }, W.invert = function(t) {
            var e, n, i = {},
                r = W.keys(t);
            for (e = 0, n = r.length; e < n; e++) i[t[r[e]]] = r[e];
            return i
        }, W.functions = W.methods = function(t) {
            var e, n = [];
            for (e in t) W.isFunction(t[e]) && n.push(e);
            return n.sort()
        }, W.extend = c(W.allKeys), W.extendOwn = W.assign = c(W.keys), W.findKey = function(t, e, n) {
            var i, r, o, s;
            for (e = u(e, n), i = W.keys(t), o = 0, s = i.length; o < s; o++)
                if (r = i[o], e(t[r], r, t)) return r
        }, W.pick = function(t, e, n) {
            var i, r, o, s, a, u, c = {},
                h = t;
            if (null == h) return c;
            W.isFunction(e) ? (r = W.allKeys(h), i = l(e, n)) : (r = y(arguments, !1, !1, 1), i = function(t, e, n) {
                return e in n
            }, h = Object(h));
            for (o = 0, s = r.length; o < s; o++) a = r[o], u = h[a], i(u, a, h) && (c[a] = u);
            return c
        }, W.omit = function(t, e, n) {
            if (W.isFunction(e)) e = W.negate(e);
            else {
                var i = W.map(y(arguments, !1, !1, 1), String);
                e = function(t, e) {
                    return !W.contains(i, e)
                }
            }
            return W.pick(t, e, n)
        }, W.defaults = c(W.allKeys, !0), W.create = function(t, e) {
            var n = h(t);
            return e && W.extendOwn(n, e), n
        }, W.clone = function(t) {
            return W.isObject(t) ? W.isArray(t) ? t.slice() : W.extend({}, t) : t
        }, W.tap = function(t, e) {
            return e(t), t
        }, W.isMatch = function(t, e) {
            var n, i, r, o = W.keys(e),
                s = o.length;
            if (null == t) return !s;
            for (n = Object(t), i = 0; i < s; i++)
                if (r = o[i], e[r] !== n[r] || !(r in n)) return !1;
            return !0
        }, _ = function(t, e, n, i) {
            var r, o, s, a, l, u, c;
            if (t === e) return 0 !== t || 1 / t === 1 / e;
            if (null == t || null == e) return t === e;
            if (t instanceof W && (t = t._wrapped), e instanceof W && (e = e._wrapped), r = R.call(t), r !== R.call(e)) return !1;
            switch (r) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + t == "" + e;
                case "[object Number]":
                    return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t === +e
            }
            if (o = "[object Array]" === r, !o) {
                if ("object" != typeof t || "object" != typeof e) return !1;
                if (s = t.constructor, a = e.constructor, s !== a && !(W.isFunction(s) && s instanceof s && W.isFunction(a) && a instanceof a) && "constructor" in t && "constructor" in e) return !1
            }
            for (n = n || [], i = i || [], l = n.length; l--;)
                if (n[l] === t) return i[l] === e;
            if (n.push(t), i.push(e), o) {
                if (l = t.length, l !== e.length) return !1;
                for (; l--;)
                    if (!_(t[l], e[l], n, i)) return !1
            } else {
                if (u = W.keys(t), l = u.length, W.keys(e).length !== l) return !1;
                for (; l--;)
                    if (c = u[l], !W.has(e, c) || !_(t[c], e[c], n, i)) return !1
            }
            return n.pop(), i.pop(), !0
        }, W.isEqual = function(t, e) {
            return _(t, e)
        }, W.isEmpty = function(t) {
            return null == t || (g(t) && (W.isArray(t) || W.isString(t) || W.isArguments(t)) ? 0 === t.length : 0 === W.keys(t).length)
        }, W.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, W.isArray = Y || function(t) {
            return "[object Array]" === R.call(t)
        }, W.isObject = function(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }, W.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(t) {
            W["is" + t] = function(e) {
                return R.call(e) === "[object " + t + "]"
            }
        }), W.isArguments(arguments) || (W.isArguments = function(t) {
            return W.has(t, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (W.isFunction = function(t) {
            return "function" == typeof t || !1
        }), W.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, W.isNaN = function(t) {
            return W.isNumber(t) && t !== +t
        }, W.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" === R.call(t)
        }, W.isNull = function(t) {
            return null === t
        }, W.isUndefined = function(t) {
            return void 0 === t
        }, W.has = function(t, e) {
            return null != t && H.call(t, e)
        }, W.noConflict = function() {
            return P._ = A, this
        }, W.identity = function(t) {
            return t
        }, W.constant = function(t) {
            return function() {
                return t
            }
        }, W.noop = function() {}, W.property = f, W.propertyOf = function(t) {
            return null == t ? function() {} : function(e) {
                return t[e]
            }
        }, W.matcher = W.matches = function(t) {
            return t = W.extendOwn({}, t),
                function(e) {
                    return W.isMatch(e, t)
                }
        }, W.times = function(t, e, n) {
            var i, r = Array(Math.max(0, t));
            for (e = l(e, n, 1), i = 0; i < t; i++) r[i] = e(i);
            return r
        }, W.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, W.now = Date.now || function() {
            return (new Date).getTime()
        }, x = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, S = W.invert(x), k = function(t) {
            var e = function(e) {
                    return t[e]
                },
                n = "(?:" + W.keys(t).join("|") + ")",
                i = RegExp(n),
                r = RegExp(n, "g");
            return function(t) {
                return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
            }
        }, W.escape = k(x), W.unescape = k(S), W.result = function(t, e, n) {
            var i = null == t ? void 0 : t[e];
            return void 0 === i && (i = n), W.isFunction(i) ? i.call(t) : i
        }, T = 0, W.uniqueId = function(t) {
            var e = ++T + "";
            return t ? t + e : e
        }, W.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }, E = /(.)^/, C = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, I = /\\|'|\r|\n|\u2028|\u2029/g, M = function(t) {
            return "\\" + C[t]
        }, W.template = function(t, e, n) {
            var i, r, o, s, a, l;
            !e && n && (e = n), e = W.defaults({}, e, W.templateSettings), i = RegExp([(e.escape || E).source, (e.interpolate || E).source, (e.evaluate || E).source].join("|") + "|$", "g"), r = 0, o = "__p+='", t.replace(i, function(e, n, i, s, a) {
                return o += t.slice(r, a).replace(I, M), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
            }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try { s = Function(e.variable || "obj", "_", o) } catch (t) {
                throw t.source = o, t
            }
            return a = function(t) {
                return s.call(this, t, W)
            }, l = e.variable || "obj", a.source = "function(" + l + "){\n" + o + "}", a
        }, W.chain = function(t) {
            var e = W(t);
            return e._chain = !0, e
        }, D = function(t, e) {
            return t._chain ? W(e).chain() : e
        }, W.mixin = function(t) {
            W.each(W.functions(t), function(e) {
                var n = W[e] = t[e];
                W.prototype[e] = function() {
                    var t = [this._wrapped];
                    return j.apply(t, arguments), D(this, n.apply(W, t))
                }
            })
        }, W.mixin(W), W.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = O[t];
            W.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], D(this, n)
            }
        }), W.each(["concat", "join", "slice"], function(t) {
            var e = O[t];
            W.prototype[t] = function() {
                return D(this, e.apply(this._wrapped, arguments))
            }
        }), W.prototype.value = function() {
            return this._wrapped
        }, W.prototype.valueOf = W.prototype.toJSON = W.prototype.value, W.prototype.toString = function() {
            return "" + this._wrapped
        }, i = [], r = function() {
            return W
        }.apply(e, i), !(void 0 !== r && (t.exports = r))
    }).call(this)
}, , , , , , , function(t, e, n) {}, , , function(t, e, n) {}, function(t, e, n) {
    var i, r;
    ! function(o, s) {
        function a(t) {
            var e, n, i = Ie[t] = {};
            for (t = t.split(/\s+/), e = 0, n = t.length; e < n; e++) i[t[e]] = !0;
            return i
        }

        function l(t, e, n) {
            if (n === s && 1 === t.nodeType) {
                var i = "data-" + e.replace(H, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try { n = "true" === n || "false" !== n && ("null" === n ? null : Ce.isNumeric(n) ? +n : R.test(n) ? Ce.parseJSON(n) : n) } catch (t) {}
                    Ce.data(t, e, n)
                } else n = s
            }
            return n
        }

        function u(t) {
            for (var e in t)
                if (("data" !== e || !Ce.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function c(t, e, n) {
            var i = e + "defer",
                r = e + "queue",
                o = e + "mark",
                s = Ce._data(t, i);
            !s || "queue" !== n && Ce._data(t, r) || "mark" !== n && Ce._data(t, o) || setTimeout(function() { Ce._data(t, r) || Ce._data(t, o) || (Ce.removeData(t, i, !0), s.fire()) }, 0)
        }

        function h() {
            return !1
        }

        function f() {
            return !0
        }

        function d(t) {
            return !t || !t.parentNode || 11 === t.parentNode.nodeType
        }

        function p(t, e, n) {
            if (e = e || 0, Ce.isFunction(e)) return Ce.grep(t, function(t, i) {
                var r = !!e.call(t, i, t);
                return r === n
            });
            if (e.nodeType) return Ce.grep(t, function(t, i) {
                return t === e === n
            });
            if ("string" == typeof e) {
                var i = Ce.grep(t, function(t) {
                    return 1 === t.nodeType
                });
                if (ct.test(e)) return Ce.filter(e, i, !n);
                e = Ce.filter(e, i)
            }
            return Ce.grep(t, function(t, i) {
                return Ce.inArray(t, e) >= 0 === n
            })
        }

        function g(t) {
            var e = pt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function m(t, e) {
            return Ce.nodeName(t, "table") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t, e) {
            if (1 === e.nodeType && Ce.hasData(t)) {
                var n, i, r, o = Ce._data(t),
                    s = Ce._data(e, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; i < r; i++) Ce.event.add(e, n, a[n][i])
                }
                s.data && (s.data = Ce.extend({}, s.data))
            }
        }

        function v(t, e) {
            var n;
            1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e.mergeAttributes(t), n = e.nodeName.toLowerCase(), "object" === n ? e.outerHTML = t.outerHTML : "input" !== n || "checkbox" !== t.type && "radio" !== t.type ? "option" === n ? e.selected = t.defaultSelected : "input" === n || "textarea" === n ? e.defaultValue = t.defaultValue : "script" === n && e.text !== t.text && (e.text = t.text) : (t.checked && (e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value)), e.removeAttribute(Ce.expando), e.removeAttribute("_submit_attached"), e.removeAttribute("_change_attached"))
        }

        function b(t) {
            return s !== t.getElementsByTagName ? t.getElementsByTagName("*") : s !== t.querySelectorAll ? t.querySelectorAll("*") : []
        }

        function w(t) { "checkbox" !== t.type && "radio" !== t.type || (t.defaultChecked = t.checked) }

        function _(t) {
            var e = (t.nodeName || "").toLowerCase();
            "input" === e ? w(t) : "script" !== e && s !== t.getElementsByTagName && Ce.grep(t.getElementsByTagName("input"), w)
        }

        function x(t) {
            var e = ke.createElement("div");
            return It.appendChild(e), e.innerHTML = t.outerHTML, e.firstChild
        }

        function S(t, e, n) {
            var i = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = "width" === e ? 1 : 0,
                o = 4;
            if (i > 0) {
                if ("border" !== n)
                    for (; r < o; r += 2) n || (i -= parseFloat(Ce.css(t, "padding" + Ft[r])) || 0), "margin" === n ? i += parseFloat(Ce.css(t, n + Ft[r])) || 0 : i -= parseFloat(Ce.css(t, "border" + Ft[r] + "Width")) || 0;
                return i + "px"
            }
            if (i = Rt(t, e), (i < 0 || null == i) && (i = t.style[e]), Ot.test(i)) return i;
            if (i = parseFloat(i) || 0, n)
                for (; r < o; r += 2) i += parseFloat(Ce.css(t, "padding" + Ft[r])) || 0, "padding" !== n && (i += parseFloat(Ce.css(t, "border" + Ft[r] + "Width")) || 0), "margin" === n && (i += parseFloat(Ce.css(t, n + Ft[r])) || 0);
            return i + "px"
        }

        function k(t) {
            return function(e, n) {
                if ("string" != typeof e && (n = e, e = "*"), Ce.isFunction(n))
                    for (var i, r, o, s = e.toLowerCase().split(Zt), a = 0, l = s.length; a < l; a++) i = s[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = t[i] = t[i] || [], r[o ? "unshift" : "push"](n)
            }
        }

        function T(t, e, n, i, r, o) {
            r = r || e.dataTypes[0], o = o || {}, o[r] = !0;
            for (var a, l = t[r], u = 0, c = l ? l.length : 0, h = t === ie; u < c && (h || !a); u++) a = l[u](e, n, i), "string" == typeof a && (!h || o[a] ? a = s : (e.dataTypes.unshift(a), a = T(t, e, n, i, a, o)));
            return !h && a || o["*"] || (a = T(t, e, n, i, "*", o)), a
        }

        function E(t, e) {
            var n, i, r = Ce.ajaxSettings.flatOptions || {};
            for (n in e) e[n] !== s && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            i && Ce.extend(!0, t, i)
        }

        function C(t, e, n, i) {
            if (Ce.isArray(e)) Ce.each(e, function(e, r) { n || Bt.test(t) ? i(t, r) : C(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i) });
            else if (n || "object" !== Ce.type(e)) i(t, e);
            else
                for (var r in e) C(t + "[" + r + "]", e[r], n, i)
        }

        function I(t, e, n) {}

        function M(t, e) {}

        function D() {
            try {
                return new o.XMLHttpRequest
            } catch (t) {}
        }

        function P() {
            try {
                return new o.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function A() {
            return setTimeout(O, 0), we = Ce.now()
        }

        function O() { we = s }

        function L(t, e) {
            var n = {};
            return Ce.each(be.concat.apply([], be.slice(0, e)), function() { n[this] = t }), n
        }

        function N(t) {
            if (!de[t]) {
                var e = ke.body,
                    n = Ce("<" + t + ">").appendTo(e),
                    i = n.css("display");
                n.remove(), "none" !== i && "" !== i || (pe || (pe = ke.createElement("iframe"), pe.frameBorder = pe.width = pe.height = 0), e.appendChild(pe), ge && pe.createElement || (ge = (pe.contentWindow || pe.contentDocument).document, ge.write((Ce.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), ge.close()), n = ge.createElement(t), ge.body.appendChild(n), i = Ce.css(n, "display"), e.removeChild(pe)), de[t] = i
            }
            return de[t]
        }

        function j(t) {
            return Ce.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var F, R, H, Y, z, B, U, V, W, q, $, G, X, K, J, Q, Z, tt, et, nt, it, rt, ot, st, at, lt, ut, ct, ht, ft, dt, pt, gt, mt, yt, vt, bt, wt, _t, xt, St, kt, Tt, Et, Ct, It, Mt, Dt, Pt, At, Ot, Lt, Nt, jt, Ft, Rt, Ht, Yt, zt, Bt, Ut, Vt, Wt, qt, $t, Gt, Xt, Kt, Jt, Qt, Zt, te, ee, ne, ie, re, oe, se, ae, le, ue, ce, he, fe, de, pe, ge, me, ye, ve, be, we, _e, xe, Se, ke = o.document,
            Te = o.navigator,
            Ee = o.location,
            Ce = function() {
                function t() {
                    if (!a.isReady) {
                        try { ke.documentElement.doScroll("left") } catch (e) {
                            return setTimeout(t, 1), s
                        }
                        a.ready()
                    }
                }
                var e, n, i, r, a = function(t, n) {
                        return new a.fn.init(t, n, e)
                    },
                    l = o.jQuery,
                    u = o.$,
                    c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    h = /\S/,
                    f = /^\s+/,
                    d = /\s+$/,
                    p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    g = /^[\],:{}\s]*$/,
                    m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    v = /(?:^|:|,)(?:\s*\[)+/g,
                    b = /(webkit)[ \/]([\w.]+)/,
                    w = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    _ = /(msie) ([\w.]+)/,
                    x = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    S = /-([a-z]|[0-9])/gi,
                    k = /^-ms-/,
                    T = function(t, e) {
                        return (e + "").toUpperCase()
                    },
                    E = Te.userAgent,
                    C = Object.prototype.toString,
                    I = Object.prototype.hasOwnProperty,
                    M = Array.prototype.push,
                    D = Array.prototype.slice,
                    P = String.prototype.trim,
                    A = Array.prototype.indexOf,
                    O = {};
                return a.fn = a.prototype = {
                    constructor: a,
                    init: function(t, e, n) {
                        var i, r, o, l;
                        if (!t) return this;
                        if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
                        if ("body" === t && !e && ke.body) return this.context = ke, this[0] = ke.body, this.selector = t, this.length = 1, this;
                        if ("string" == typeof t) {
                            if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : c.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                            if (i[1]) return e = e instanceof a ? e[0] : e, l = e ? e.ownerDocument || e : ke, o = p.exec(t), o ? a.isPlainObject(e) ? (t = [ke.createElement(o[1])], a.fn.attr.call(t, e, !0)) : t = [l.createElement(o[1])] : (o = a.buildFragment([i[1]], [l]), t = (o.cacheable ? a.clone(o.fragment) : o.fragment).childNodes), a.merge(this, t);
                            if (r = ke.getElementById(i[2]), r && r.parentNode) {
                                if (r.id !== i[2]) return n.find(t);
                                this.length = 1, this[0] = r
                            }
                            return this.context = ke, this.selector = t, this
                        }
                        return a.isFunction(t) ? n.ready(t) : (t.selector !== s && (this.selector = t.selector, this.context = t.context), a.makeArray(t, this))
                    },
                    selector: "",
                    jquery: "1.7.2",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return D.call(this, 0)
                    },
                    get: function(t) {
                        return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
                    },
                    pushStack: function(t, e, n) {
                        var i = this.constructor();
                        return a.isArray(t) ? M.apply(i, t) : a.merge(i, t), i.prevObject = this, i.context = this.context, "find" === e ? i.selector = this.selector + (this.selector ? " " : "") + n : e && (i.selector = this.selector + "." + e + "(" + n + ")"), i
                    },
                    each: function(t, e) {
                        return a.each(this, t, e)
                    },
                    ready: function(t) {
                        return a.bindReady(), i.add(t), this
                    },
                    eq: function(t) {
                        return t = +t, t === -1 ? this.slice(t) : this.slice(t, t + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(D.apply(this, arguments), "slice", D.call(arguments).join(","))
                    },
                    map: function(t) {
                        return this.pushStack(a.map(this, function(e, n) {
                            return t.call(e, n, e)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: M,
                    sort: [].sort,
                    splice: [].splice
                }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function() {
                    var t, e, n, i, r, o, l = arguments[0] || {},
                        u = 1,
                        c = arguments.length,
                        h = !1;
                    for ("boolean" == typeof l && (h = l, l = arguments[1] || {}, u = 2), "object" == typeof l || a.isFunction(l) || (l = {}), c === u && (l = this, --u); u < c; u++)
                        if (null != (t = arguments[u]))
                            for (e in t) n = l[e], i = t[e], l !== i && (h && i && (a.isPlainObject(i) || (r = a.isArray(i))) ? (r ? (r = !1, o = n && a.isArray(n) ? n : []) : o = n && a.isPlainObject(n) ? n : {}, l[e] = a.extend(h, o, i)) : i !== s && (l[e] = i));
                    return l
                }, a.extend({
                    noConflict: function(t) {
                        return o.$ === a && (o.$ = u), t && o.jQuery === a && (o.jQuery = l), a
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(t) { t ? a.readyWait++ : a.ready(!0) },
                    ready: function(t) {
                        if (t === !0 && !--a.readyWait || t !== !0 && !a.isReady) {
                            if (!ke.body) return setTimeout(a.ready, 1);
                            if (a.isReady = !0, t !== !0 && --a.readyWait > 0) return;
                            i.fireWith(ke, [a]), a.fn.trigger && a(ke).trigger("ready").off("ready")
                        }
                    },
                    bindReady: function() {
                        if (!i) {
                            if (i = a.Callbacks("once memory"), "complete" === ke.readyState) return setTimeout(a.ready, 1);
                            if (ke.addEventListener) ke.addEventListener("DOMContentLoaded", r, !1), o.addEventListener("load", a.ready, !1);
                            else if (ke.attachEvent) {
                                ke.attachEvent("onreadystatechange", r), o.attachEvent("onload", a.ready);
                                var e = !1;
                                try { e = null == o.frameElement } catch (t) {}
                                ke.documentElement.doScroll && e && t()
                            }
                        }
                    },
                    isFunction: function(t) {
                        return "function" === a.type(t)
                    },
                    isArray: Array.isArray || function(t) {
                        return "array" === a.type(t)
                    },
                    isWindow: function(t) {
                        return null != t && t == t.window
                    },
                    isNumeric: function(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t)
                    },
                    type: function(t) {
                        return null == t ? t + "" : O[C.call(t)] || "object"
                    },
                    isPlainObject: function(t) {
                        if (!t || "object" !== a.type(t) || t.nodeType || a.isWindow(t)) return !1;
                        try {
                            if (t.constructor && !I.call(t, "constructor") && !I.call(t.constructor.prototype, "isPrototypeOf")) return !1
                        } catch (t) {
                            return !1
                        }
                        var e;
                        for (e in t);
                        return e === s || I.call(t, e)
                    },
                    isEmptyObject: function(t) {
                        for (var e in t) return !1;
                        return !0
                    },
                    error: function(t) {
                        throw Error(t)
                    },
                    parseJSON: function(t) {
                        return "string" == typeof t && t ? (t = a.trim(t), o.JSON && o.JSON.parse ? o.JSON.parse(t) : g.test(t.replace(m, "@").replace(y, "]").replace(v, "")) ? Function("return " + t)() : (a.error("Invalid JSON: " + t), s)) : null
                    },
                    parseXML: function(t) {
                        if ("string" != typeof t || !t) return null;
                        var e, n;
                        try { o.DOMParser ? (n = new DOMParser, e = n.parseFromString(t, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t)) } catch (t) { e = s }
                        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || a.error("Invalid XML: " + t), e
                    },
                    noop: function() {},
                    globalEval: function(t) { t && h.test(t) && (o.execScript || function(t) { o.eval.call(o, t) })(t) },
                    camelCase: function(t) {
                        return t.replace(k, "ms-").replace(S, T)
                    },
                    nodeName: function(t, e) {
                        return t.nodeName && t.nodeName.toUpperCase() === e.toUpperCase()
                    },
                    each: function(t, e, n) {
                        var i, r = 0,
                            o = t.length,
                            l = o === s || a.isFunction(t);
                        if (n)
                            if (l) {
                                for (i in t)
                                    if (e.apply(t[i], n) === !1) break
                            } else
                                for (; r < o && e.apply(t[r++], n) !== !1;);
                        else if (l) {
                            for (i in t)
                                if (e.call(t[i], i, t[i]) === !1) break
                        } else
                            for (; r < o && e.call(t[r], r, t[r++]) !== !1;);
                        return t
                    },
                    trim: P ? function(t) {
                        return null == t ? "" : P.call(t)
                    } : function(t) {
                        return null == t ? "" : ("" + t).replace(f, "").replace(d, "")
                    },
                    makeArray: function(t, e) {
                        var n, i = e || [];
                        return null != t && (n = a.type(t), null == t.length || "string" === n || "function" === n || "regexp" === n || a.isWindow(t) ? M.call(i, t) : a.merge(i, t)), i
                    },
                    inArray: function(t, e, n) {
                        var i;
                        if (e) {
                            if (A) return A.call(e, t, n);
                            for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                                if (n in e && e[n] === t) return n
                        }
                        return -1
                    },
                    merge: function(t, e) {
                        var n, i = t.length,
                            r = 0;
                        if ("number" == typeof e.length)
                            for (n = e.length; r < n; r++) t[i++] = e[r];
                        else
                            for (; e[r] !== s;) t[i++] = e[r++];
                        return t.length = i, t
                    },
                    grep: function(t, e, n) {
                        var i, r, o, s = [];
                        for (n = !!n, r = 0, o = t.length; r < o; r++) i = !!e(t[r], r), n !== i && s.push(t[r]);
                        return s
                    },
                    map: function(t, e, n) {
                        var i, r, o = [],
                            l = 0,
                            u = t.length,
                            c = t instanceof a || u !== s && "number" == typeof u && (u > 0 && t[0] && t[u - 1] || 0 === u || a.isArray(t));
                        if (c)
                            for (; l < u; l++) i = e(t[l], l, n), null != i && (o[o.length] = i);
                        else
                            for (r in t) i = e(t[r], r, n), null != i && (o[o.length] = i);
                        return o.concat.apply([], o)
                    },
                    guid: 1,
                    proxy: function(t, e) {
                        var n, i, r;
                        return "string" == typeof e && (n = t[e], e = t, t = n), a.isFunction(t) ? (i = D.call(arguments, 2), r = function() {
                            return t.apply(e, i.concat(D.call(arguments)))
                        }, r.guid = t.guid = t.guid || r.guid || a.guid++, r) : s
                    },
                    access: function(t, e, n, i, r, o, l) {
                        var u, c = null == n,
                            h = 0,
                            f = t.length;
                        if (n && "object" == typeof n) {
                            for (h in n) a.access(t, e, h, n[h], 1, o, i);
                            r = 1
                        } else if (i !== s) {
                            if (u = l === s && a.isFunction(i), c && (u ? (u = e, e = function(t, e, n) {
                                    return u.call(a(t), n)
                                }) : (e.call(t, i), e = null)), e)
                                for (; h < f; h++) e(t[h], n, u ? i.call(t[h], h, e(t[h], n)) : i, l);
                            r = 1
                        }
                        return r ? t : c ? e.call(t) : f ? e(t[0], n) : o
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(t) {
                        t = t.toLowerCase();
                        var e = b.exec(t) || w.exec(t) || _.exec(t) || t.indexOf("compatible") < 0 && x.exec(t) || [];
                        return { browser: e[1] || "", version: e[2] || "0" }
                    },
                    sub: function() {
                        function t(e, n) {
                            return new t.fn.init(e, n)
                        }
                        a.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(n, i) {
                            return i && i instanceof a && !(i instanceof t) && (i = t(i)), a.fn.init.call(this, n, i, e)
                        }, t.fn.init.prototype = t.fn;
                        var e = t(ke);
                        return t
                    },
                    browser: {}
                }), a.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) { O["[object " + e + "]"] = e.toLowerCase() }), n = a.uaMatch(E), n.browser && (a.browser[n.browser] = !0, a.browser.version = n.version), a.browser.webkit && (a.browser.safari = !0), h.test(" ") && (f = /^[\s\xA0]+/, d = /[\s\xA0]+$/), e = a(ke), ke.addEventListener ? r = function() { ke.removeEventListener("DOMContentLoaded", r, !1), a.ready() } : ke.attachEvent && (r = function() { "complete" === ke.readyState && (ke.detachEvent("onreadystatechange", r), a.ready()) }), a
            }(),
            Ie = {};
        Ce.Callbacks = function(t) {
                t = t ? Ie[t] || a(t) : {};
                var e, n, i, r, o, l, u = [],
                    c = [],
                    h = function(e) {
                        var n, i, r, o;
                        for (n = 0, i = e.length; n < i; n++) r = e[n], o = Ce.type(r), "array" === o ? h(r) : "function" === o && (t.unique && d.has(r) || u.push(r))
                    },
                    f = function(s, a) {
                        for (a = a || [], e = !t.memory || [s, a], n = !0, i = !0, l = r || 0, r = 0, o = u.length; u && l < o; l++)
                            if (u[l].apply(s, a) === !1 && t.stopOnFalse) {
                                e = !0;
                                break
                            }
                        i = !1, u && (t.once ? e === !0 ? d.disable() : u = [] : c && c.length && (e = c.shift(), d.fireWith(e[0], e[1])))
                    },
                    d = {
                        add: function() {
                            if (u) {
                                var t = u.length;
                                h(arguments), i ? o = u.length : e && e !== !0 && (r = t, f(e[0], e[1]))
                            }
                            return this
                        },
                        remove: function() {
                            var e, n, r, s;
                            if (u)
                                for (e = arguments, n = 0, r = e.length; n < r; n++)
                                    for (s = 0; s < u.length && (e[n] !== u[s] || (i && s <= o && (o--, s <= l && l--), u.splice(s--, 1), !t.unique)); s++);
                            return this
                        },
                        has: function(t) {
                            if (u)
                                for (var e = 0, n = u.length; e < n; e++)
                                    if (t === u[e]) return !0;
                            return !1
                        },
                        empty: function() {
                            return u = [], this
                        },
                        disable: function() {
                            return u = c = e = s, this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return c = s, e && e !== !0 || d.disable(), this
                        },
                        locked: function() {
                            return !c
                        },
                        fireWith: function(n, r) {
                            return c && (i ? t.once || c.push([n, r]) : t.once && e || f(n, r)), this
                        },
                        fire: function() {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!n
                        }
                    };
                return d
            }, F = [].slice, Ce.extend({
                Deferred: function(t) {
                    var e, n = Ce.Callbacks("once memory"),
                        i = Ce.Callbacks("once memory"),
                        r = Ce.Callbacks("memory"),
                        o = "pending",
                        s = { resolve: n, reject: i, notify: r },
                        a = {
                            done: n.add,
                            fail: i.add,
                            progress: r.add,
                            state: function() {
                                return o
                            },
                            isResolved: n.fired,
                            isRejected: i.fired,
                            then: function(t, e, n) {
                                return l.done(t).fail(e).progress(n), this
                            },
                            always: function() {
                                return l.done.apply(l, arguments).fail.apply(l, arguments), this
                            },
                            pipe: function(t, e, n) {
                                return Ce.Deferred(function(i) {
                                    Ce.each({ done: [t, "resolve"], fail: [e, "reject"], progress: [n, "notify"] }, function(t, e) {
                                        var n, r = e[0],
                                            o = e[1];
                                        Ce.isFunction(r) ? l[t](function() { n = r.apply(this, arguments), n && Ce.isFunction(n.promise) ? n.promise().then(i.resolve, i.reject, i.notify) : i[o + "With"](this === l ? i : this, [n]) }) : l[t](i[o])
                                    })
                                }).promise()
                            },
                            promise: function(t) {
                                if (null == t) t = a;
                                else
                                    for (var e in a) t[e] = a[e];
                                return t
                            }
                        },
                        l = a.promise({});
                    for (e in s) l[e] = s[e].fire, l[e + "With"] = s[e].fireWith;
                    return l.done(function() { o = "resolved" }, i.disable, r.lock).fail(function() { o = "rejected" }, n.disable, r.lock), t && t.call(l, l), l
                },
            }), Ce.support = function() {
                var t, e, n, i, r, a, l, u, c, h, f, d = ke.createElement("div");
                ke.documentElement;
                if (d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", e = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !e || !e.length || !n) return {};
                i = ke.createElement("select"), r = i.appendChild(ke.createElement("option")), a = d.getElementsByTagName("input")[0], t = { leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(n.getAttribute("style")), hrefNormalized: "/a" === n.getAttribute("href"), opacity: /^0.55/.test(n.style.opacity), cssFloat: !!n.style.cssFloat, checkOn: "on" === a.value, optSelected: r.selected, getSetAttribute: "t" !== d.className, enctype: !!ke.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== ke.createElement("nav").cloneNode(!0).outerHTML, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0 }, Ce.boxModel = t.boxModel = "CSS1Compat" === ke.compatMode, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !r.disabled;
                try { delete d.test } catch (e) { t.deleteExpando = !1 }
                if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function() { t.noCloneEvent = !1 }), d.cloneNode(!0).fireEvent("onclick")), a = ke.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), l = ke.createDocumentFragment(), l.appendChild(d.lastChild), t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, l.removeChild(a), l.appendChild(d), d.attachEvent)
                    for (h in { submit: 1, change: 1, focusin: 1 }) c = "on" + h, f = c in d, f || (d.setAttribute(c, "return;"), f = "function" == typeof d[c]), t[h + "Bubbles"] = f;
                return l.removeChild(d), l = i = r = d = a = null, Ce(function() {
                    var e, n, i, r, a, l, c, h, p, g, m, y, v = ke.getElementsByTagName("body")[0];
                    v && ""
                }), t
            }(), R = /^(?:\{.*\}|\[.*\])$/, H = /([A-Z])/g, Ce.extend({
                cache: {},
                uuid: 0,
                expando: "jQuery" + (Ce.fn.jquery + Math.random()).replace(/\D/g, ""),
                noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
                hasData: function(t) {
                    return t = t.nodeType ? Ce.cache[t[Ce.expando]] : t[Ce.expando], !!t && !u(t)
                },
                data: function(t, e, n, i) {
                    if (Ce.acceptData(t)) {
                        var r, o, a, l = Ce.expando,
                            u = "string" == typeof e,
                            c = t.nodeType,
                            h = c ? Ce.cache : t,
                            f = c ? t[l] : t[l] && l,
                            d = "events" === e;
                        if (f && h[f] && (d || i || h[f].data) || !u || n !== s) return f || (c ? t[l] = f = ++Ce.uuid : f = l), h[f] || (h[f] = {}, c || (h[f].toJSON = Ce.noop)), "object" != typeof e && "function" != typeof e || (i ? h[f] = Ce.extend(h[f], e) : h[f].data = Ce.extend(h[f].data, e)), r = o = h[f], i || (o.data || (o.data = {}), o = o.data), n !== s && (o[Ce.camelCase(e)] = n), d && !o[e] ? r.events : (u ? (a = o[e], null == a && (a = o[Ce.camelCase(e)])) : a = o, a)
                    }
                },
                removeData: function(t, e, n) {
                    if (Ce.acceptData(t)) {
                        var i, r, o, s = Ce.expando,
                            a = t.nodeType,
                            l = a ? Ce.cache : t,
                            c = a ? t[s] : s;
                        if (l[c]) {
                            if (e && (i = n ? l[c] : l[c].data)) {
                                Ce.isArray(e) || (e in i ? e = [e] : (e = Ce.camelCase(e), e = e in i ? [e] : e.split(" ")));
                                for (r = 0, o = e.length; r < o; r++) delete i[e[r]];
                                if (!(n ? u : Ce.isEmptyObject)(i)) return
                            }(n || (delete l[c].data, u(l[c]))) && (Ce.support.deleteExpando || !l.setInterval ? delete l[c] : l[c] = null, a && (Ce.support.deleteExpando ? delete t[s] : t.removeAttribute ? t.removeAttribute(s) : t[s] = null))
                        }
                    }
                },
                _data: function(t, e, n) {
                    return Ce.data(t, e, n, !0)
                },
                acceptData: function(t) {
                    if (t.nodeName) {
                        var e = Ce.noData[t.nodeName.toLowerCase()];
                        if (e) return !(e === !0 || t.getAttribute("classid") !== e)
                    }
                    return !0
                }
            }), Ce.fn.extend({}), Ce.extend({}), Ce.fn.extend({}), Y = /[\n\t\r]/g, z = /\s+/, B = /\r/g, U = /^(?:button|input)$/i, V = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea)?$/i, q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, $ = Ce.support.getSetAttribute, Ce.fn.extend({
                attr: function(t, e) {
                    return Ce.access(this, Ce.attr, t, e, arguments.length > 1)
                },
                removeAttr: function(t) {
                    return this.each(function() { Ce.removeAttr(this, t) })
                },
                prop: function(t, e) {
                    return Ce.access(this, Ce.prop, t, e, arguments.length > 1)
                },
                removeProp: function(t) {
                    return t = Ce.propFix[t] || t, this.each(function() {
                        try { this[t] = s, delete this[t] } catch (t) {}
                    })
                },
                addClass: function(t) {
                    var e, n, i, r, o, s, a;
                    if (Ce.isFunction(t)) return this.each(function(e) { Ce(this).addClass(t.call(this, e, this.className)) });
                    if (t && "string" == typeof t)
                        for (e = t.split(z), n = 0, i = this.length; n < i; n++)
                            if (r = this[n], 1 === r.nodeType)
                                if (r.className || 1 !== e.length) {
                                    for (o = " " + r.className + " ", s = 0, a = e.length; s < a; s++) ~o.indexOf(" " + e[s] + " ") || (o += e[s] + " ");
                                    r.className = Ce.trim(o)
                                } else r.className = t;
                    return this
                },
                removeClass: function(t) {
                    var e, n, i, r, o, a, l;
                    if (Ce.isFunction(t)) return this.each(function(e) { Ce(this).removeClass(t.call(this, e, this.className)) });
                    if (t && "string" == typeof t || t === s)
                        for (e = (t || "").split(z), n = 0, i = this.length; n < i; n++)
                            if (r = this[n], 1 === r.nodeType && r.className)
                                if (t) {
                                    for (o = (" " + r.className + " ").replace(Y, " "), a = 0, l = e.length; a < l; a++) o = o.replace(" " + e[a] + " ", " ");
                                    r.className = Ce.trim(o)
                                } else r.className = "";
                    return this
                },
                toggleClass: function(t, e) {
                    var n = typeof t,
                        i = "boolean" == typeof e;
                    return Ce.isFunction(t) ? this.each(function(n) { Ce(this).toggleClass(t.call(this, n, this.className, e), e) }) : this.each(function() {
                        if ("string" === n)
                            for (var r, o = 0, s = Ce(this), a = e, l = t.split(z); r = l[o++];) a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r);
                        else "undefined" !== n && "boolean" !== n || (this.className && Ce._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : Ce._data(this, "__className__") || "")
                    })
                },
                hasClass: function(t) {
                    for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Y, " ").indexOf(e) > -1) return !0;
                    return !1
                },
                val: function(t) {
                    var e, n, i, r = this[0]; {
                        if (arguments.length) return i = Ce.isFunction(t), this.each(function(n) {
                            var r, o = Ce(this);
                            1 === this.nodeType && (r = i ? t.call(this, n, o.val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Ce.isArray(r) && (r = Ce.map(r, function(t) {
                                return null == t ? "" : t + ""
                            })), e = Ce.valHooks[this.type] || Ce.valHooks[this.nodeName.toLowerCase()], e && "set" in e && "" !== s || (this.value = ""))
                        });
                        if (r) return e = Ce.valHooks[r.type] || Ce.valHooks[r.nodeName.toLowerCase()], e && "get" in e && (n = "") !== s ? n : (n = "", "string" == typeof n ? n.replace(B, "") : null == n ? "" : n)
                    }
                }
            }), Ce.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = t.attributes.value;
                            return !e || e.specified ? "" : t.text
                        }
                    },
                    select: {
                        get: function(t) {
                            var e, n, i, r, o = t.selectedIndex,
                                s = [],
                                a = t.options,
                                l = "select-one" === t.type;
                            if (o < 0) return null;
                            for (n = l ? o : 0, i = l ? o + 1 : a.length; n < i; n++)
                                if (r = a[n], r.selected && (Ce.support.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !Ce.nodeName(r.parentNode, "optgroup"))) {
                                    if (e = Ce(r).val(), l) return e;
                                    s.push(e)
                                }
                            return l && !s.length && a.length ? Ce(a[o]).val() : s
                        },
                        set: function(t, e) {
                            var n = Ce.makeArray(e);
                            return Ce(t).find("option").each(function() { this.selected = Ce.inArray(Ce(this).val(), n) >= 0 }), n.length || (t.selectedIndex = -1), n
                        }
                    }
                },
                attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 },
                attr: function(t, e, n, i) {
                    var r, o, a, l = t.nodeType;
                    if (t && 3 !== l && 8 !== l && 2 !== l) return i && e in Ce.attrFn ? Ce(t)[e](n) : s === t.getAttribute ? Ce.prop(t, e, n) : (a = 1 !== l || !Ce.isXMLDoc(t), a && (e = e.toLowerCase(), o = Ce.attrHooks[e] || (q.test(e) ? X : G)), n !== s ? null === n ? (Ce.removeAttr(t, e), s) : o && "set" in o && a && (r = o.set(t, n, e)) !== s ? r : (t.setAttribute(e, "" + n), n) : o && "get" in o && a && null !== (r = o.get(t, e)) ? r : (r = t.getAttribute(e), null === r ? s : r))
                },
                removeAttr: function(t, e) {
                    var n, i, r, o, s, a = 0;
                    if (e && 1 === t.nodeType)
                        for (i = e.toLowerCase().split(z), o = i.length; a < o; a++) r = i[a], r && (n = Ce.propFix[r] || r, s = q.test(r), s || Ce.attr(t, r, ""), t.removeAttribute($ ? r : n), s && n in t && (t[n] = !1))
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (U.test(t.nodeName) && t.parentNode) Ce.error("type property can't be changed");
                            else if (!Ce.support.radioValue && "radio" === e && Ce.nodeName(t, "input")) {
                                var n = "";
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    },
                    value: {
                        get: function(t, e) {
                            return G && Ce.nodeName(t, "button") ? G.get(t, e) : e in t ? t.value : null
                        },
                        set: function(t, e, n) {
                            return G && Ce.nodeName(t, "button") ? G.set(t, e, n) : (t.value = e, s)
                        }
                    }
                },
                propFix: { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
                prop: function(t, e, n) {
                    var i, r, o, a = t.nodeType;
                    if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Ce.isXMLDoc(t), o && (e = Ce.propFix[e] || e, r = Ce.propHooks[e]), n !== s ? r && "set" in r && (i = r.set(t, n, e)) !== s ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = t.getAttributeNode("tabindex");
                            return e && e.specified ? parseInt(e.value, 10) : V.test(t.nodeName) || W.test(t.nodeName) && t.href ? 0 : s
                        }
                    }
                }
            }), Ce.attrHooks.tabindex = Ce.propHooks.tabIndex, X = {
                get: function(t, e) {
                    var n, i = Ce.prop(t, e);
                    return i === !0 || "boolean" != typeof i && (n = t.getAttributeNode(e)) && n.nodeValue !== !1 ? e.toLowerCase() : s
                },
                set: function(t, e, n) {
                    var i;
                    return e === !1 ? Ce.removeAttr(t, n) : (i = Ce.propFix[n] || n, i in t && (t[i] = !0), t.setAttribute(n, n.toLowerCase())), n
                }
            }, $ || (K = { name: !0, id: !0, coords: !0 }, G = Ce.valHooks.button = {
                get: function(t, e) {
                    var n;
                    return n = t.getAttributeNode(e), n && (K[e] ? "" !== n.nodeValue : n.specified) ? n.nodeValue : s
                },
                set: function(t, e, n) {
                    var i = t.getAttributeNode(n);
                    return i || (i = ke.createAttribute(n), t.setAttributeNode(i)), i.nodeValue = e + ""
                }
            }, Ce.attrHooks.tabindex.set = G.set, Ce.each(["width", "height"], function(t, e) {
                Ce.attrHooks[e] = Ce.extend(Ce.attrHooks[e], {
                    set: function(t, n) {
                        if ("" === n) return t.setAttribute(e, "auto"), n
                    }
                })
            }), Ce.attrHooks.contenteditable = { get: G.get, set: function(t, e, n) { "" === e && (e = "false"), G.set(t, e, n) } }), Ce.support.hrefNormalized || Ce.each(["href", "src", "width", "height"], function(t, e) {
                Ce.attrHooks[e] = Ce.extend(Ce.attrHooks[e], {
                    get: function(t) {
                        var n = t.getAttribute(e, 2);
                        return null === n ? s : n
                    }
                })
            }), Ce.support.style || (Ce.attrHooks.style = {
                get: function(t) {
                    return t.style.cssText.toLowerCase() || s
                },
                set: function(t, e) {
                    return t.style.cssText = "" + e
                }
            }), Ce.support.optSelected || (Ce.propHooks.selected = Ce.extend(Ce.propHooks.selected, {
                get: function(t) {
                    var e = t.parentNode;
                    return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                }
            })), Ce.support.enctype || (Ce.propFix.enctype = "encoding"), Ce.support.checkOn || Ce.each(["radio", "checkbox"], function() {
                Ce.valHooks[this] = {
                    get: function(t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    }
                }
            }), Ce.each(["radio", "checkbox"], function() {
                Ce.valHooks[this] = Ce.extend(Ce.valHooks[this], {
                    set: function(t, e) {
                        if (Ce.isArray(e)) return t.checked = Ce.inArray(Ce(t).val(), e) >= 0
                    }
                })
            }), J = /^(?:textarea|input|select)$/i, Q = /^([^\.]*)?(?:\.(.+))?$/, Z = /(?:^|\s)hover(\.\S+)?\b/, tt = /^key/, et = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, rt = function(t) {
                var e = it.exec(t);
                return e && (e[1] = (e[1] || "").toLowerCase(), e[3] = e[3] && RegExp("(?:^|\\s)" + e[3] + "(?:\\s|$)")), e
            }, ot = function(t, e) {
                var n = t.attributes || {};
                return (!e[1] || t.nodeName.toLowerCase() === e[1]) && (!e[2] || (n.id || {}).value === e[2]) && (!e[3] || e[3].test((n.class || {}).value))
            }, st = function(t) {
                return Ce.event.special.hover ? t : t.replace(Z, "mouseenter$1 mouseleave$1")
            }, Ce.event = {
                add: function(t, e, n, i, r) {
                    var o, a, l, u, c, h, f, d, p, g, m;
                    if (3 !== t.nodeType && 8 !== t.nodeType && e && n && (o = Ce._data(t))) {
                        for (n.handler && (p = n, n = p.handler, r = p.selector), n.guid || (n.guid = Ce.guid++), l = o.events, l || (o.events = l = {}), a = o.handle, a || (o.handle = a = function(t) {
                                return s === Ce || t && Ce.event.triggered === t.type ? s : Ce.event.dispatch.apply(a.elem, arguments)
                            }, a.elem = t), e = Ce.trim(st(e)).split(" "), u = 0; u < e.length; u++) c = Q.exec(e[u]) || [], h = c[1], f = (c[2] || "").split(".").sort(), m = Ce.event.special[h] || {}, h = (r ? m.delegateType : m.bindType) || h, m = Ce.event.special[h] || {}, d = Ce.extend({ type: h, origType: c[1], data: i, handler: n, guid: n.guid, selector: r, quick: r && rt(r), namespace: f.join(".") }, p), g = l[h], g || (g = l[h] = [], g.delegateCount = 0, m.setup && m.setup.call(t, i, f, a) !== !1 || (t.addEventListener ? t.addEventListener(h, a, !1) : t.attachEvent && t.attachEvent("on" + h, a))), m.add && (m.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? g.splice(g.delegateCount++, 0, d) : g.push(d), Ce.event.global[h] = !0;
                        t = null
                    }
                },
                global: {},
                remove: function(t, e, n, i, r) {
                    var o, s, a, l, u, c, h, f, d, p, g, m, y = Ce.hasData(t) && Ce._data(t);
                    if (y && (f = y.events)) {
                        for (e = Ce.trim(st(e || "")).split(" "), o = 0; o < e.length; o++)
                            if (s = Q.exec(e[o]) || [], a = l = s[1], u = s[2], a) {
                                for (d = Ce.event.special[a] || {}, a = (i ? d.delegateType : d.bindType) || a, g = f[a] || [], c = g.length, u = u ? RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = 0; h < g.length; h++) m = g[h], !r && l !== m.origType || n && n.guid !== m.guid || u && !u.test(m.namespace) || i && i !== m.selector && ("**" !== i || !m.selector) || (g.splice(h--, 1), m.selector && g.delegateCount--, d.remove && d.remove.call(t, m));
                                0 === g.length && c !== g.length && (d.teardown && d.teardown.call(t, u) !== !1 || Ce.removeEvent(t, a, y.handle), delete f[a])
                            } else
                                for (a in f) Ce.event.remove(t, a + e[o], n, i, !0);
                        Ce.isEmptyObject(f) && (p = y.handle, p && (p.elem = null), Ce.removeData(t, ["events", "handle"], !0))
                    }
                },
                customEvent: { getData: !0, setData: !0, changeData: !0 },
                trigger: function(t, e, n, i) {
                    if (!n || 3 !== n.nodeType && 8 !== n.nodeType) {
                        var r, a, l, u, c, h, f, d, p, g, m = t.type || t,
                            y = []
                    }
                },
                dispatch: function(t) {},
                props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {},
                fix: function(t) {
                    if (t[Ce.expando]) return t;
                    var e, n, i = t,
                        r = Ce.event.fixHooks[t.type] || {},
                        o = r.props ? this.props.concat(r.props) : this.props;
                    for (t = Ce.Event(i), e = o.length; e;) n = o[--e], t[n] = i[n];
                    return t.target || (t.target = i.srcElement || ke), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey === s && (t.metaKey = t.ctrlKey), r.filter ? r.filter(t, i) : t
                },
                special: { ready: { setup: Ce.bindReady }, load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(t, e, n) { Ce.isWindow(this) && (this.onbeforeunload = n) }, teardown: function(t, e) { this.onbeforeunload === e && (this.onbeforeunload = null) } } },
                simulate: function(t, e, n, i) {
                    var r = Ce.extend(new Ce.Event, n, { type: t, isSimulated: !0, originalEvent: {} });
                    i ? Ce.event.trigger(r, null, e) : Ce.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
                }
            }, Ce.event.handle = Ce.event.dispatch, Ce.removeEvent = ke.removeEventListener ? function(t, e, n) { t.removeEventListener && t.removeEventListener(e, n, !1) } : function(t, e, n) { t.detachEvent && t.detachEvent("on" + e, n) }, Ce.Event = function(t, e) {
                return this instanceof Ce.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? f : h) : this.type = t, e && Ce.extend(this, e), this.timeStamp = t && t.timeStamp || Ce.now(), this[Ce.expando] = !0, s) : new Ce.Event(t, e)
            }, Ce.Event.prototype = {}, Ce.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(t, e) {
                Ce.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function(t) {
                        var n, i = this,
                            r = t.relatedTarget,
                            o = t.handleObj;
                        o.selector;
                        return r && (r === i || Ce.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), Ce.support.submitBubbles || (Ce.event.special.submit = {
                setup: function() {
                    return !Ce.nodeName(this, "form") && (Ce.event.add(this, "click._submit keypress._submit", function(t) {
                        var e = t.target,
                            n = Ce.nodeName(e, "input") || Ce.nodeName(e, "button") ? e.form : s;
                        n && !n._submit_attached && (Ce.event.add(n, "submit._submit", function(t) { t._submit_bubble = !0 }), n._submit_attached = !0)
                    }), s)
                },
                postDispatch: function(t) { t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && Ce.event.simulate("submit", this.parentNode, t, !0)) },
                teardown: function() {
                    return !Ce.nodeName(this, "form") && (Ce.event.remove(this, "._submit"), s)
                }
            }), Ce.support.changeBubbles || (Ce.event.special.change = {
                setup: function() {
                    return J.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (Ce.event.add(this, "propertychange._change", function(t) { "checked" === t.originalEvent.propertyName && (this._just_changed = !0) }), Ce.event.add(this, "click._change", function(t) { this._just_changed && !t.isTrigger && (this._just_changed = !1, Ce.event.simulate("change", this, t, !0)) })), !1) : (Ce.event.add(this, "beforeactivate._change", function(t) {
                        var e = t.target;
                        J.test(e.nodeName) && !e._change_attached && (Ce.event.add(e, "change._change", function(t) {!this.parentNode || t.isSimulated || t.isTrigger || Ce.event.simulate("change", this.parentNode, t, !0) }), e._change_attached = !0)
                    }), s)
                },
                handle: function(t) {
                    var e = t.target;
                    if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return Ce.event.remove(this, "._change"), J.test(this.nodeName)
                }
            }), Ce.support.focusinBubbles || Ce.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
                var n = 0,
                    i = function(t) { Ce.event.simulate(e, t.target, Ce.event.fix(t), !0) };
                Ce.event.special[e] = { setup: function() { 0 === n++ && ke.addEventListener(t, i, !0) }, teardown: function() { 0 === --n && ke.removeEventListener(t, i, !0) } }
            }), Ce.fn.extend({
                on: function(t, e, n, i, r) {
                    var o, a;
                    if ("object" == typeof t) {
                        "string" != typeof e && (n = n || e, e = s);
                        for (a in t) this.on(a, e, n, t[a], r);
                        return this
                    }
                    if (null == n && null == i ? (i = e, n = e = s) : null == i && ("string" == typeof e ? (i = n, n = s) : (i = n, n = e, e = s)), i === !1) i = h;
                    else if (!i) return this;
                    return 1 === r && (o = i, i = function(t) {
                        return Ce().off(t), o.apply(this, arguments)
                    }, i.guid = o.guid || (o.guid = Ce.guid++)), this.each(function() { Ce.event.add(this, t, i, n, e) })
                },
                one: function(t, e, n, i) {
                    return this.on(t, e, n, i, 1)
                },
                off: function(t, e, n) {
                    var i, r;
                    if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Ce(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof t) {
                        for (r in t) this.off(r, e, t[r]);
                        return this
                    }
                    return e !== !1 && "function" != typeof e || (n = e, e = s), n === !1 && (n = h), this.each(function() { Ce.event.remove(this, t, n, e) })
                },
                bind: function(t, e, n) {
                    return this.on(t, null, e, n)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                live: function(t, e, n) {
                    return Ce(this.context).on(t, this.selector, e, n), this
                },
                die: function(t, e) {
                    return Ce(this.context).off(t, this.selector || "**", e), this
                },
                delegate: function(t, e, n, i) {
                    return this.on(e, t, n, i)
                },
                undelegate: function(t, e, n) {
                    return 1 == arguments.length ? this.off(t, "**") : this.off(e, t, n)
                },
                trigger: function(t, e) {
                    return this.each(function() { Ce.event.trigger(t, e, this) })
                },
                triggerHandler: function(t, e) {
                    if (this[0]) return Ce.event.trigger(t, e, this[0], !0)
                },
                toggle: function(t) {
                    var e = arguments,
                        n = t.guid || Ce.guid++,
                        i = 0,
                        r = function(n) {
                            var r = (Ce._data(this, "lastToggle" + t.guid) || 0) % i;
                            return Ce._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), e[r].apply(this, arguments) || !1
                        };
                    for (r.guid = n; i < e.length;) e[i++].guid = n;
                    return this.click(r)
                },
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), Ce.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
                Ce.fn[e] = function(t, n) {
                    return null == n && (n = t, t = null), arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }, Ce.attrFn && (Ce.attrFn[e] = !0), tt.test(e) && (Ce.event.fixHooks[e] = Ce.event.keyHooks), et.test(e) && (Ce.event.fixHooks[e] = Ce.event.mouseHooks)
            }),
            function() {
                var n, i, r, o, a, l, u, c, h, f, d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    p = "sizcache" + (Math.random() + "").replace(".", ""),
                    g = 0,
                    m = Object.prototype.toString,
                    y = !1,
                    v = !0,
                    b = /\\/g,
                    w = /\r\n/g,
                    _ = /\W/;
                [0, 0].sort(function() {
                    return v = !1, 0
                }), n = function(t, e, i, s) {
                    var a, l, c, h, p, g, y, v, b, w, _, x, S;
                    if (i = i || [], e = e || ke, a = e, 1 !== e.nodeType && 9 !== e.nodeType) return [];
                    if (!t || "string" != typeof t) return i;
                    w = !0, _ = n.isXML(e), x = [], S = t;
                    do
                        if (d.exec(""), l = d.exec(S), l && (S = l[3], x.push(l[1]), l[2])) {
                            p = l[3];
                            break
                        }
                    while (l);
                    if (x.length > 1 && o.exec(t))
                        if (2 === x.length && r.relative[x[0]]) c = f(x[0] + x[1], e, s);
                        else
                            for (c = r.relative[x[0]] ? [e] : n(x.shift(), e); x.length;) t = x.shift(), r.relative[t] && (t += x.shift()), c = f(t, c, s);
                    else if (!s && x.length > 1 && 9 === e.nodeType && !_ && r.match.ID.test(x[0]) && !r.match.ID.test(x[x.length - 1]) && (g = n.find(x.shift(), e, _), e = g.expr ? n.filter(g.expr, g.set)[0] : g.set[0]), e)
                        for (g = s ? { expr: x.pop(), set: u(s) } : n.find(x.pop(), 1 !== x.length || "~" !== x[0] && "+" !== x[0] || !e.parentNode ? e : e.parentNode, _), c = g.expr ? n.filter(g.expr, g.set) : g.set, x.length > 0 ? h = u(c) : w = !1; x.length;) y = x.pop(), v = y, r.relative[y] ? v = x.pop() : y = "", null == v && (v = e), r.relative[y](h, v, _);
                    else h = x = [];
                    if (h || (h = c), h || n.error(y || t), "[object Array]" === m.call(h))
                        if (w)
                            if (e && 1 === e.nodeType)
                                for (b = 0; null != h[b]; b++) h[b] && (h[b] === !0 || 1 === h[b].nodeType && n.contains(e, h[b])) && i.push(c[b]);
                            else
                                for (b = 0; null != h[b]; b++) h[b] && 1 === h[b].nodeType && i.push(c[b]);
                    else i.push.apply(i, h);
                    else u(h, i);
                    return p && (n(p, a, i, s), n.uniqueSort(i)), i
                }, n.find = function(t, e, n) {
                    var i, o, a, l, u, c;
                    if (!t) return [];
                    for (o = 0, a = r.order.length; o < a; o++)
                        if (u = r.order[o], (l = r.leftMatch[u].exec(t)) && (c = l[1], l.splice(1, 1), "\\" !== c.substr(c.length - 1) && (l[1] = (l[1] || "").replace(b, ""), i = r.find[u](l, e, n), null != i))) {
                            t = t.replace(r.match[u], "");
                            break
                        }
                    return i || (i = s !== e.getElementsByTagName ? e.getElementsByTagName("*") : []), { set: i, expr: t }
                }, n.error = function(t) {
                    throw Error("Syntax error, unrecognized expression: " + t)
                }, i = n.getText = function(t) {
                    var e, n, r = t.nodeType,
                        o = "";
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            if ("string" == typeof t.innerText) return t.innerText.replace(w, "");
                            for (t = t.firstChild; t; t = t.nextSibling) o += i(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (e = 0; n = t[e]; e++) 8 !== n.nodeType && (o += i(n));
                    return o
                }, r = n.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ },
                    leftMatch: {},
                    attrMap: { class: "className", for: "htmlFor" },
                    attrHandle: {
                        href: function(t) {
                            return t.getAttribute("href")
                        },
                        type: function(t) {
                            return t.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(t, e) {
                            var i, r, o, s = "string" == typeof e,
                                a = s && !_.test(e),
                                l = s && !a;
                            for (a && (e = e.toLowerCase()), i = 0, r = t.length; i < r; i++)
                                if (o = t[i]) {
                                    for (;
                                        (o = o.previousSibling) && 1 !== o.nodeType;);
                                    t[i] = l || o && o.nodeName.toLowerCase() === e ? o || !1 : o === e
                                }
                            l && n.filter(e, t, !0)
                        },
                        ">": function(t, e) {
                            var i, r, o = "string" == typeof e,
                                s = 0,
                                a = t.length;
                            if (o && !_.test(e))
                                for (e = e.toLowerCase(); s < a; s++) i = t[s], i && (r = i.parentNode, t[s] = r.nodeName.toLowerCase() === e && r);
                            else {
                                for (; s < a; s++) i = t[s], i && (t[s] = o ? i.parentNode : i.parentNode === e);
                                o && n.filter(e, t, !0)
                            }
                        },
                        "": function(n, i, r) {
                            var o, s = g++,
                                a = e;
                            "string" != typeof i
                        },
                        "~": function(n, i, r) {
                            var o, s = g++,
                                a = e;
                            "string" != typeof i 
                        }
                    },
                    find: {
                        ID: function(t, e, n) {
                            if (s !== e.getElementById && !n) {
                                var i = e.getElementById(t[1]);
                                return i && i.parentNode ? [i] : []
                            }
                        },
                        NAME: function(t, e) {
                            var n, i, r, o;
                            if (s !== e.getElementsByName) {
                                for (n = [], i = e.getElementsByName(t[1]), r = 0, o = i.length; r < o; r++) i[r].getAttribute("name") === t[1] && n.push(i[r]);
                                return 0 === n.length ? null : n
                            }
                        },
                        TAG: function(t, e) {
                            if (s !== e.getElementsByTagName) return e.getElementsByTagName(t[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(t, e, n, i, r, o) {
                            if (t = " " + t[1].replace(b, "") + " ", o) return t;
                            for (var s, a = 0; null != (s = e[a]); a++) s && (r ^ (s.className && (" " + s.className + " ").replace(/[\t\n\r]/g, " ").indexOf(t) >= 0) ? n || i.push(s) : n && (e[a] = !1));
                            return !1
                        },
                        ID: function(t) {
                            return t[1].replace(b, "")
                        },
                        TAG: function(t, e) {
                            return t[1].replace(b, "").toLowerCase()
                        },
                        CHILD: function(t) {
                            if ("nth" === t[1]) {
                                t[2] || n.error(t[0]), t[2] = t[2].replace(/^\+|\s*/g, "");
                                var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === t[2] && "2n" || "odd" === t[2] && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                                t[2] = e[1] + (e[2] || 1) - 0, t[3] = e[3] - 0
                            } else t[2] && n.error(t[0]);
                            return t[0] = g++, t
                        },
                        ATTR: function(t, e, n, i, o, s) {
                            var a = t[1] = t[1].replace(b, "");
                            return !s && r.attrMap[a] && (t[1] = r.attrMap[a]), t[4] = (t[4] || t[5] || "").replace(b, ""), "~=" === t[2] && (t[4] = " " + t[4] + " "), t
                        },
                        PSEUDO: function(t, e, i, o, s) {
                            if ("not" === t[1]) {
                                if (!((d.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))) {
                                    var a = n.filter(t[3], e, i, !0 ^ s);
                                    return i || o.push.apply(o, a), !1
                                }
                                t[3] = n(t[3], null, null, e)
                            } else if (r.match.POS.test(t[0]) || r.match.CHILD.test(t[0])) return !0;
                            return t
                        },
                        POS: function(t) {
                            return t.unshift(!0), t
                        }
                    },
                    filter: {
                        PSEUDO: function(t, e, o, s) {
                            var a, l, u, c = e[1],
                                h = r.filters[c];
                            if (h) return h(t, o, e, s);
                            if ("contains" === c) return (t.textContent || t.innerText || i([t]) || "").indexOf(e[3]) >= 0;
                            if ("not" === c) {
                                for (a = e[3], l = 0, u = a.length; l < u; l++)
                                    if (a[l] === t) return !1;
                                return !0
                            }
                            n.error(c)
                        },
                        CHILD: function(t, e) {
                            var n, i, r, o, s, a, l = e[1],
                                u = t;
                            switch (l) {
                                case "only":
                                case "first":
                                    for (; u = u.previousSibling;)
                                        if (1 === u.nodeType) return !1;
                                    if ("first" === l) return !0;
                                    u = t;
                                case "last":
                                    for (; u = u.nextSibling;)
                                        if (1 === u.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (n = e[2], i = e[3], 1 === n && 0 === i) return !0;
                                    if (r = e[0], o = t.parentNode, o && (o[p] !== r || !t.nodeIndex)) {
                                        for (s = 0, u = o.firstChild; u; u = u.nextSibling) 1 === u.nodeType && (u.nodeIndex = ++s);
                                        o[p] = r
                                    }
                                    return a = t.nodeIndex - i, 0 === n ? 0 === a : a % n === 0 && a / n >= 0
                            }
                        },
                        ID: function(t, e) {
                            return 1 === t.nodeType && t.getAttribute("id") === e
                        },
                        TAG: function(t, e) {
                            return "*" === e && 1 === t.nodeType || !!t.nodeName && t.nodeName.toLowerCase() === e
                        },
                        CLASS: function(t, e) {
                            return (" " + (t.className || t.getAttribute("class")) + " ").indexOf(e) > -1
                        },
                        ATTR: function(t, e) {
                            var i = e[1],
                                o = n.attr ? n.attr(t, i) : r.attrHandle[i] ? r.attrHandle[i](t) : null != t[i] ? t[i] : t.getAttribute(i),
                                s = o + "",
                                a = e[2],
                                l = e[4];
                            return null == o ? "!=" === a : !a && n.attr ? null != o : "=" === a ? s === l : "*=" === a ? s.indexOf(l) >= 0 : "~=" === a ? (" " + s + " ").indexOf(l) >= 0 : l ? "!=" === a ? s !== l : "^=" === a ? 0 === s.indexOf(l) : "$=" === a ? s.substr(s.length - l.length) === l : "|=" === a && (s === l || s.substr(0, l.length + 1) === l + "-") : s && o !== !1
                        },
                        POS: function(t, e, n, i) {
                            var o = e[2],
                                s = r.setFilters[o];
                            if (s) return s(t, n, e, i)
                        }
                    }
                }, o = r.match.POS, a = function(t, e) {
                    return "\\" + (e - 0 + 1)
                };
                for (l in r.match) r.match[l] = RegExp(r.match[l].source + /(?![^\[]*\])(?![^\(]*\))/.source), r.leftMatch[l] = RegExp(/(^(?:.|\r|\n)*?)/.source + r.match[l].source.replace(/\\(\d+)/g, a));
                r.match.globalPOS = o, u = function(t, e) {
                    return t = Array.prototype.slice.call(t, 0), e ? (e.push.apply(e, t), e) : t
                };
                try { Array.prototype.slice.call(ke.documentElement.childNodes, 0)[0].nodeType } catch (t) {
                    u = function(t, e) {
                        var n, i = 0,
                            r = e || [];
                        if ("[object Array]" === m.call(t)) Array.prototype.push.apply(r, t);
                        else if ("number" == typeof t.length)
                            for (n = t.length; i < n; i++) r.push(t[i]);
                        else
                            for (; t[i]; i++) r.push(t[i]);
                        return r
                    }
                }
                ke.documentElement.compareDocumentPosition ? c = function(t, e) {
                        return t === e ? (y = !0, 0) : t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : (c = function(t, e) {
                        var n, i, r, o, s, a, l, u;
                        if (t === e) return y = !0, 0;
                        if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
                        if (r = [], o = [], s = t.parentNode, a = e.parentNode, l = s, s === a) return h(t, e);
                        if (!s) return -1;
                        if (!a) return 1;
                        for (; l;) r.unshift(l), l = l.parentNode;
                        for (l = a; l;) o.unshift(l), l = l.parentNode;
                        for (n = r.length, i = o.length, u = 0; u < n && u < i; u++)
                            if (r[u] !== o[u]) return h(r[u], o[u]);
                        return u === n ? h(t, o[u], -1) : h(r[u], e, 1)
                    }, h = function(t, e, n) {
                        if (t === e) return n;
                        for (var i = t.nextSibling; i;) {
                            if (i === e) return -1;
                            i = i.nextSibling
                        }
                        return 1
                    }),
                    function() {}(),
                    function() {}(), ke.querySelectorAll && ! function() {}(),
                    function() {
                        var t = ke.createElement("div");
                        t.innerHTML = "<div class='test e'></div><div class='test'></div>", t.getElementsByClassName && 0 !== t.getElementsByClassName("e").length && (t.lastChild.className = "e", 1 !== t.getElementsByClassName("e").length && (r.order.splice(1, 0, "CLASS"), r.find.CLASS = function(t, e, n) {
                            if (s !== e.getElementsByClassName && !n) return e.getElementsByClassName(t[1])
                        }, t = null))
                    }(), ke.documentElement.contains ? n.contains = function(t, e) {
                        return t !== e && (!t.contains || t.contains(e))
                    } : ke.documentElement.compareDocumentPosition ? n.contains = function(t, e) {
                        return !!(16 & t.compareDocumentPosition(e))
                    } : n.contains = function() {
                        return !1
                    }, n.isXML = function(t) {
                        var e = (t ? t.ownerDocument || t : 0).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, f = function(t, e, i) {
                        for (var o, s, a, l = [], u = "", c = e.nodeType ? [e] : e; o = r.match.PSEUDO.exec(t);) u += o[0], t = t.replace(r.match.PSEUDO, "");
                        for (t = r.relative[t] ? t + "*" : t, s = 0, a = c.length; s < a; s++) n(t, c[s], l, i);
                        return n.filter(u, l)
                    }, n.attr = Ce.attr, n.selectors.attrMap = {}, Ce.find = n, Ce.expr = n.selectors, Ce.expr[":"] = Ce.expr.filters, Ce.unique = n.uniqueSort, Ce.text = n.getText, Ce.isXMLDoc = n.isXML, Ce.contains = n.contains
            }(), at = /Until$/, lt = /^(?:parents|prevUntil|prevAll)/, ut = /,/, ct = /^.[^:#\[\.,]*$/, ht = Array.prototype.slice, ft = Ce.expr.match.globalPOS, dt = { children: !0, contents: !0, next: !0, prev: !0 }, Ce.fn.extend({
                find: function(t) {
                    var e, n, i, r, o, s, a = this;
                    if ("string" != typeof t) return Ce(t).filter(function() {
                        for (e = 0, n = a.length; e < n; e++)
                            if (Ce.contains(a[e], this)) return !0
                    });
                    for (i = this.pushStack("", "find", t), e = 0, n = this.length; e < n; e++)
                        if (r = i.length, Ce.find(t, this[e], i), e > 0)
                            for (o = r; o < i.length; o++)
                                for (s = 0; s < r; s++)
                                    if (i[s] === i[o]) {
                                        i.splice(o--, 1);
                                        break
                                    }
                    return i
                },
                has: function(t) {
                    var e = Ce(t);
                    return this.filter(function() {
                        for (var t = 0, n = e.length; t < n; t++)
                            if (Ce.contains(this, e[t])) return !0
                    })
                },
                not: function(t) {
                    return this.pushStack(p(this, t, !1), "not", t)
                },
                filter: function(t) {
                    return this.pushStack(p(this, t, !0), "filter", t)
                },
                is: function(t) {
                    return !!t && ("string" == typeof t ? ft.test(t) ? Ce(t, this.context).index(this[0]) >= 0 : Ce.filter(t, this).length > 0 : this.filter(t).length > 0)
                },
                closest: function(t, e) {
                    var n, i, r, o, s = [],
                        a = this[0];
                    if (Ce.isArray(t)) {
                        for (r = 1; a && a.ownerDocument && a !== e;) {
                            for (n = 0; n < t.length; n++) Ce(a).is(t[n]) && s.push({ selector: t[n], elem: a, level: r });
                            a = a.parentNode, r++
                        }
                        return s
                    }
                    for (o = ft.test(t) || "string" != typeof t ? Ce(t, e || this.context) : 0, n = 0, i = this.length; n < i; n++)
                        for (a = this[n]; a;) {
                            if (o ? o.index(a) > -1 : Ce.find.matchesSelector(a, t)) {
                                s.push(a);
                                break
                            }
                            if (a = a.parentNode, !a || !a.ownerDocument || a === e || 11 === a.nodeType) break
                        }
                    return s = s.length > 1 ? Ce.unique(s) : s, this.pushStack(s, "closest", t)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? Ce.inArray(this[0], Ce(t)) : Ce.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
                },
                add: function(t, e) {
                    var n = "string" == typeof t ? Ce(t, e) : Ce.makeArray(t && t.nodeType ? [t] : t),
                        i = Ce.merge(this.get(), n);
                    return this.pushStack(d(n[0]) || d(i[0]) ? i : Ce.unique(i))
                },
                andSelf: function() {
                    return this.add(this.prevObject)
                }
            }), Ce.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return Ce.dir(t, "parentNode")
                },
                parentsUntil: function(t, e, n) {
                    return Ce.dir(t, "parentNode", n)
                },
                next: function(t) {
                    return Ce.nth(t, 2, "nextSibling")
                },
                prev: function(t) {
                    return Ce.nth(t, 2, "previousSibling")
                },
                nextAll: function(t) {
                    return Ce.dir(t, "nextSibling")
                },
                prevAll: function(t) {
                    return Ce.dir(t, "previousSibling")
                },
                nextUntil: function(t, e, n) {
                    return Ce.dir(t, "nextSibling", n)
                },
                prevUntil: function(t, e, n) {
                    return Ce.dir(t, "previousSibling", n)
                },
                siblings: function(t) {
                    return Ce.sibling((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return Ce.sibling(t.firstChild)
                },
                contents: function(t) {
                    return Ce.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : Ce.makeArray(t.childNodes)
                }
            }, function(t, e) {
                Ce.fn[t] = function(n, i) {
                    var r = Ce.map(this, e, n);
                    return at.test(t) || (i = n), i && "string" == typeof i && (r = Ce.filter(i, r)), r = this.length > 1 && !dt[t] ? Ce.unique(r) : r, (this.length > 1 || ut.test(i)) && lt.test(t) && (r = r.reverse()), this.pushStack(r, t, ht.call(arguments).join(","))
                }
            }), Ce.extend({
                filter: function(t, e, n) {
                    return n && (t = ":not(" + t + ")"), 1 === e.length ? Ce.find.matchesSelector(e[0], t) ? [e[0]] : [] : Ce.find.matches(t, e)
                },
                dir: function(t, e, n) {
                    for (var i = [], r = t[e]; r && 9 !== r.nodeType && (n === s || 1 !== r.nodeType || !Ce(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
                    return i
                },
                nth: function(t, e, n, i) {
                    e = e || 1;
                    for (var r = 0; t && (1 !== t.nodeType || ++r !== e); t = t[n]);
                    return t
                },
                sibling: function(t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
            }), pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:\d+|null)"/g, mt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, vt = /<([\w:]+)/, bt = /<tbody/i, wt = /<|&#?\w+;/, _t = /<(?:script|style)/i, xt = /<(?:script|object|embed|option|style)/i, St = RegExp("<(?:" + pt + ")[\\s/>]", "i"), kt = /checked\s*(?:[^=]|=\s*.checked.)/i, Tt = /\/(java|ecma)script/i, Et = /^\s*<!(?:\[CDATA\[|\-\-)/, Ct = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] }, It = g(ke), Ct.optgroup = Ct.option, Ct.tbody = Ct.tfoot = Ct.colgroup = Ct.caption = Ct.thead, Ct.th = Ct.td, Ce.support.htmlSerialize || (Ct._default = [1, "div<div>", "</div>"]), Ce.fn.extend({
                text: function(t) {
                    return Ce.access(this, function(t) {
                        return t === s ? Ce.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ke).createTextNode(t))
                    }, null, t, arguments.length)
                },
                wrapAll: function(t) {
                    if (Ce.isFunction(t)) return this.each(function(e) { Ce(this).wrapAll(t.call(this, e)) });
                    if (this[0]) {
                        var e = Ce(t, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                            return t
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(t) {
                    return Ce.isFunction(t) ? this.each(function(e) { Ce(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                        var e = Ce(this),
                            n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function(t) {
                    var e = Ce.isFunction(t);
                    return this.each(function(n) { Ce(this).wrapAll(e ? t.call(this, n) : t) })
                },
                unwrap: function() {
                    return this.parent().each(function() { Ce.nodeName(this, "body") || Ce(this).replaceWith(this.childNodes) }).end()
                },
                append: function() {
                    return this.domManip(arguments, !0, function(t) { 1 === this.nodeType && this.appendChild(t) })
                },
                prepend: function() {
                    return this.domManip(arguments, !0, function(t) { 1 === this.nodeType && this.insertBefore(t, this.firstChild) })
                },
                before: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(t) { this.parentNode.insertBefore(t, this) });
                    if (arguments.length) {
                        var t = Ce.clean(arguments);
                        return t.push.apply(t, this.toArray()), this.pushStack(t, "before", arguments)
                    }
                },
                after: function() {
                    if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(t) { this.parentNode.insertBefore(t, this.nextSibling) });
                    if (arguments.length) {
                        var t = this.pushStack(this, "after", arguments);
                        return t.push.apply(t, Ce.clean(arguments)), t
                    }
                },
                remove: function(t, e) {
                    for (var n, i = 0; null != (n = this[i]); i++) t && !Ce.filter(t, [n]).length || (e || 1 !== n.nodeType || (Ce.cleanData(n.getElementsByTagName("*")), Ce.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++)
                        for (1 === t.nodeType && Ce.cleanData(t.getElementsByTagName("*")); t.firstChild;) t.removeChild(t.firstChild);
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function() {
                        return Ce.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return Ce.access(this, function(t) {
                        var e = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (t === s) return 1 === e.nodeType ? e.innerHTML.replace(gt, "") : null;
                        if ("string" == typeof t && !_t.test(t) && (Ce.support.leadingWhitespace || !mt.test(t)) && !Ct[(vt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(yt, "<$1></$2>");
                            try {
                                for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (Ce.cleanData(e.getElementsByTagName("*")), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function(t) {
                    return this[0] && this[0].parentNode ? Ce.isFunction(t) ? this.each(function(e) {
                        var n = Ce(this),
                            i = n.html();
                        n.replaceWith(t.call(this, e, i))
                    }) : ("string" != typeof t && (t = Ce(t).detach()), this.each(function() {
                        var e = this.nextSibling,
                            n = this.parentNode;
                        Ce(this).remove(), e ? Ce(e).before(t) : Ce(n).append(t)
                    })) : this.length ? this.pushStack(Ce(Ce.isFunction(t) ? t() : t), "replaceWith", t) : this
                },
                detach: function(t) {
                    return this.remove(t, !0)
                },
                domManip: function(t, e, n) {
                    var i, r, o, a, l, u, c, h = t[0],
                        f = [];
                    if (!Ce.support.checkClone && 3 === arguments.length && "string" == typeof h && kt.test(h)) return this.each(function() { Ce(this).domManip(t, e, n, !0) });
                    if (Ce.isFunction(h)) return this.each(function(i) {
                        var r = Ce(this);
                        t[0] = h.call(this, i, e ? r.html() : s), r.domManip(t, e, n)
                    });
                    if (this[0]) {
                        if (a = h && h.parentNode, i = Ce.support.parentNode && a && 11 === a.nodeType && a.childNodes.length === this.length ? { fragment: a } : Ce.buildFragment(t, this, f), o = i.fragment, r = 1 === o.childNodes.length ? o = o.firstChild : o.firstChild)
                            for (e = e && Ce.nodeName(r, "tr"), l = 0, u = this.length, c = u - 1; l < u; l++) n.call(e ? m(this[l], r) : this[l], i.cacheable || u > 1 && l < c ? Ce.clone(o, !0, !0) : o);
                        f.length && Ce.each(f, function(t, e) { e.src ? Ce.ajax({ type: "GET", global: !1, url: e.src, async: !1, dataType: "script" }) : Ce.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Et, "/*$0*/")), e.parentNode && e.parentNode.removeChild(e) })
                    }
                    return this
                }
            }), Ce.buildFragment = function(t, e, n) {
                var i, r, o, s, a = t[0];
                return e && e[0] && (s = e[0].ownerDocument || e[0]), s.createDocumentFragment || (s = ke), !(1 === t.length && "string" == typeof a && a.length < 512 && s === ke && "<" === a.charAt(0)) || xt.test(a) || !Ce.support.checkClone && kt.test(a) || !Ce.support.html5Clone && St.test(a) || (r = !0, o = Ce.fragments[a], o && 1 !== o && (i = o)), i || (i = s.createDocumentFragment(), Ce.clean(t, s, i, n)), r && (Ce.fragments[a] = o ? i : 1), { fragment: i, cacheable: r }
            }, Ce.fragments = {}, Ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) {
                Ce.fn[t] = function(n) {
                    var i, r, o, s = [],
                        a = Ce(n),
                        l = 1 === this.length && this[0].parentNode;
                    if (l && 11 === l.nodeType && 1 === l.childNodes.length && 1 === a.length) return a[e](this[0]), this;
                    for (i = 0, r = a.length; i < r; i++) o = (i > 0 ? this.clone(!0) : this).get(), Ce(a[i])[e](o), s = s.concat(o);
                    return this.pushStack(s, t, a.selector)
                }
            }), Ce.extend({
                clone: function(t, e, n) {
                    var i, r, o, s = Ce.support.html5Clone || Ce.isXMLDoc(t) || !St.test("<" + t.nodeName + ">") ? t.cloneNode(!0) : x(t);
                    if (!(Ce.support.noCloneEvent && Ce.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Ce.isXMLDoc(t)))
                        for (v(t, s), i = b(t), r = b(s), o = 0; i[o]; ++o) r[o] && v(i[o], r[o]);
                    if (e && (y(t, s), n))
                        for (i = b(t), r = b(s), o = 0; i[o]; ++o) y(i[o], r[o]);
                    return i = r = null, s
                },
                clean: function(t, e, n, i) {
                    var r, o, a, l, u, c, h, f, d, p, m, y, v, b, w, x = [];
                    for (e = e || ke, s === e.createElement && (e = e.ownerDocument || e[0] && e[0].ownerDocument || ke), l = 0; null != (u = t[l]); l++)
                        if ("number" == typeof u && (u += ""), u) {
                            if ("string" == typeof u)
                                if (wt.test(u)) {
                                    for (u = u.replace(yt, "<$1></$2>"), c = (vt.exec(u) || ["", ""])[1].toLowerCase(), h = Ct[c] || Ct._default, f = h[0], d = e.createElement("div"), p = It.childNodes, e === ke ? It.appendChild(d) : g(e).appendChild(d), d.innerHTML = h[1] + u + h[2]; f--;) d = d.lastChild;
                                    if (!Ce.support.tbody)
                                        for (y = bt.test(u), v = "table" !== c || y ? "<table>" !== h[1] || y ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, a = v.length - 1; a >= 0; --a) Ce.nodeName(v[a], "tbody") && !v[a].childNodes.length && v[a].parentNode.removeChild(v[a]);
                                    !Ce.support.leadingWhitespace && mt.test(u) && d.insertBefore(e.createTextNode(mt.exec(u)[0]), d.firstChild), u = d.childNodes, d && (d.parentNode.removeChild(d), p.length > 0 && (m = p[p.length - 1], m && m.parentNode && m.parentNode.removeChild(m)))
                                } else u = e.createTextNode(u);
                            if (!Ce.support.appendChecked)
                                if (u[0] && "number" == typeof(b = u.length))
                                    for (a = 0; a < b; a++) _(u[a]);
                                else _(u);
                            u.nodeType ? x.push(u) : x = Ce.merge(x, u)
                        }
                    if (n)
                        for (r = function(t) {
                                return !t.type || Tt.test(t.type)
                            }, l = 0; x[l]; l++) o = x[l], i && Ce.nodeName(o, "script") && (!o.type || Tt.test(o.type)) ? i.push(o.parentNode ? o.parentNode.removeChild(o) : o) : (1 === o.nodeType && (w = Ce.grep(o.getElementsByTagName("script"), r), x.splice.apply(x, [l + 1, 0].concat(w))), n.appendChild(o));
                    return x
                },
                cleanData: function(t) {
                    var e, n, i, r, o, s = Ce.cache,
                        a = Ce.event.special,
                        l = Ce.support.deleteExpando;
                    for (i = 0; null != (r = t[i]); i++)
                        if ((!r.nodeName || !Ce.noData[r.nodeName.toLowerCase()]) && (n = r[Ce.expando])) {
                            if (e = s[n], e && e.events) {
                                for (o in e.events) a[o] ? Ce.event.remove(r, o) : Ce.removeEvent(r, o, e.handle);
                                e.handle && (e.handle.elem = null)
                            }
                            l ? delete r[Ce.expando] : r.removeAttribute && r.removeAttribute(Ce.expando), delete s[n]
                        }
                }
            }), Mt = /alpha\([^)]*\)/i, Dt = /opacity=([^)]*)/, Pt = /([A-Z]|^ms)/g, At = /^[\-+]?(?:\d*\.)?\d+$/i, Ot = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, Lt = /^([\-+])=([\-+.\de]+)/, Nt = /^margin/, jt = { position: "absolute", visibility: "hidden", display: "block" }, Ft = ["Top", "Right", "Bottom", "Left"], Ce.fn.css = function(t, e) {
                return Ce.access(this, function(t, e, n) {
                    return n !== s ? Ce.style(t, e, n) : Ce.css(t, e)
                }, t, e, arguments.length > 1)
            }, Ce.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = Rt(t, "opacity");
                                return "" === n ? "1" : n
                            }
                            return t.style.opacity
                        }
                    }
                },
                cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: { float: Ce.support.cssFloat ? "cssFloat" : "styleFloat" },
                style: function(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r, o, a = Ce.camelCase(e),
                            l = t.style,
                            u = Ce.cssHooks[a];
                        if (e = Ce.cssProps[a] || a, n === s) return u && "get" in u && (r = u.get(t, !1, i)) !== s ? r : l[e];
                        if (o = typeof n, "string" === o && (r = Lt.exec(n)) && (n = +(r[1] + 1) * +r[2] + parseFloat(Ce.css(t, e)), o = "number"), !(null == n || "number" === o && isNaN(n) || ("number" !== o || Ce.cssNumber[a] || (n += "px"), u && "set" in u && (n = u.set(t, n)) === s))) try { l[e] = n } catch (t) {}
                    }
                },
                css: function(t, e, n) {
                    var i, r;
                    return e = Ce.camelCase(e), r = Ce.cssHooks[e], e = Ce.cssProps[e] || e, "cssFloat" === e && (e = "float"), r && "get" in r && (i = r.get(t, !0, n)) !== s ? i : Rt ? Rt(t, e) : s
                },
                swap: function(t, e, n) {
                    var i, r, o = {};
                    for (r in e) o[r] = t.style[r], t.style[r] = e[r];
                    i = n.call(t);
                    for (r in e) t.style[r] = o[r];
                    return i
                }
            }), Ce.curCSS = Ce.css, ke.defaultView && ke.defaultView.getComputedStyle && (Ht = function(t, e) {
                var n, i, r, o, s = t.style;
                return e = e.replace(Pt, "-$1").toLowerCase(), (i = t.ownerDocument.defaultView) && (r = i.getComputedStyle(t, null)) && (n = r.getPropertyValue(e), "" !== n || Ce.contains(t.ownerDocument.documentElement, t) || (n = Ce.style(t, e))), !Ce.support.pixelMargin && r && Nt.test(e) && Ot.test(n) && (o = s.width, s.width = n, n = r.width, s.width = o), n
            }), ke.documentElement.currentStyle && (Yt = function(t, e) {
                var n, i, r, o = t.currentStyle && t.currentStyle[e],
                    s = t.style;
                return null == o && s && (r = s[e]) && (o = r), Ot.test(o) && (n = s.left, i = t.runtimeStyle && t.runtimeStyle.left, i && (t.runtimeStyle.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : o, o = s.pixelLeft + "px", s.left = n, i && (t.runtimeStyle.left = i)), "" === o ? "auto" : o
            }), Rt = Ht || Yt, Ce.each(["height", "width"], function(t, e) {
                Ce.cssHooks[e] = {
                    get: function(t, n, i) {
                        if (n) return 0 !== t.offsetWidth ? S(t, e, i) : Ce.swap(t, jt, function() {
                            return S(t, e, i)
                        })
                    },
                    set: function(t, e) {
                        return At.test(e) ? e + "px" : e
                    }
                }
            }), Ce.support.opacity || (Ce.cssHooks.opacity = {
                get: function(t, e) {
                    return Dt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : e ? "1" : ""
                },
                set: function(t, e) {
                    var n = t.style,
                        i = t.currentStyle,
                        r = Ce.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                        o = i && i.filter || n.filter || "";
                    n.zoom = 1, e >= 1 && "" === Ce.trim(o.replace(Mt, "")) && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = Mt.test(o) ? o.replace(Mt, r) : o + " " + r)
                }
            }), Ce(function() {
                Ce.support.reliableMarginRight || (Ce.cssHooks.marginRight = {
                    get: function(t, e) {
                        return Ce.swap(t, { display: "inline-block" }, function() {
                            return e ? Rt(t, "margin-right") : t.style.marginRight
                        })
                    }
                })
            }), Ce.expr && Ce.expr.filters && (Ce.expr.filters.hidden = function(t) {
                var e = t.offsetWidth,
                    n = t.offsetHeight;
                return 0 === e && 0 === n || !Ce.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || Ce.css(t, "display"))
            }, Ce.expr.filters.visible = function(t) {
                return !Ce.expr.filters.hidden(t)
            }), Ce.each({ margin: "", padding: "", border: "Width" }, function(t, e) {
                Ce.cssHooks[t + e] = {
                    expand: function(n) {
                        var i, r = "string" == typeof n ? n.split(" ") : [n],
                            o = {};
                        for (i = 0; i < 4; i++) o[t + Ft[i] + e] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                }
            }), zt = /%20/g, Bt = /\[\]$/, Ut = /\r?\n/g, Vt = /#.*$/, Wt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, qt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, $t = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Gt = /^(?:GET|HEAD)$/, Xt = /^\/\//, Kt = /\?/, Jt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Qt = /^(?:select|textarea)/i, Zt = /\s+/, te = /([?&])_=[^&]*/, ee = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ne = Ce.fn.load, ie = {}, re = {}, ae = ["*/"] + ["*"];
        try { oe = Ee.href } catch (t) { oe = ke.createElement("a"), oe.href = "", oe = oe.href }
        se = ee.exec(oe.toLowerCase()) || [], Ce.fn.extend({
                load: function(t, e, n) {
                    var i, r, o, a;
                    return "string" != typeof t && ne ? ne.apply(this, arguments) : this.length ? (i = t.indexOf(" "), i >= 0 && (r = t.slice(i, t.length), t = t.slice(0, i)), o = "GET", e && (Ce.isFunction(e) ? (n = e, e = s) : "object" == typeof e && (e = Ce.param(e, Ce.ajaxSettings.traditional), o = "POST")), a = this, Ce.ajax({ url: t, type: o, dataType: "html", data: e, complete: function(t, e, i) { i = t.responseText, t.isResolved() && (t.done(function(t) { i = t }), a.html(r ? Ce("<div>").append(i.replace(Jt, "")).find(r) : i)), n && a.each(n, [i, e, t]) } }), this) : this
                },
                serialize: function() {
                    return Ce.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        return this.elements ? Ce.makeArray(this.elements) : this
                    }).filter(function() {
                        return this.name && !this.disabled && (this.checked || Qt.test(this.nodeName) || qt.test(this.type))
                    }).map(function(t, e) {
                        var n = Ce(this).val();
                        return null == n ? null : Ce.isArray(n) ? Ce.map(n, function(t, n) {
                            return { name: e.name, value: t.replace(Ut, "\r\n") }
                        }) : { name: e.name, value: n.replace(Ut, "\r\n") }
                    }).get()
                }
            }), Ce.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
                Ce.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }), Ce.each(["get", "post"], function(t, e) {
                Ce[e] = function(t, n, i, r) {
                    return Ce.isFunction(n) && (r = r || i, i = n, n = s), Ce.ajax({ type: e, url: t, data: n, success: i, dataType: r })
                }
            }), Ce.extend({
                getScript: function(t, e) {
                    return Ce.get(t, s, e, "script")
                },
                getJSON: function(t, e, n) {
                    return Ce.get(t, e, n, "json")
                },
                ajaxSetup: function(t, e) {
                    return e ? E(t, Ce.ajaxSettings) : (e = t, t = Ce.ajaxSettings), E(t, e), t
                },
                ajaxSettings: { url: oe, isLocal: $t.test(se[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": ae }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": o.String, "text html": !0, "text json": Ce.parseJSON, "text xml": Ce.parseXML }, flatOptions: { context: !0, url: !0 } },
                ajaxPrefilter: k(ie),
                ajaxTransport: k(re),
                ajax: function(t, e) {},
                param: function(t, e) {
                    var n, i = [],
                        r = function(t, e) { e = Ce.isFunction(e) ? e() : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
                    if (e === s && (e = Ce.ajaxSettings.traditional), Ce.isArray(t) || t.jquery && !Ce.isPlainObject(t)) Ce.each(t, function() { r(this.name, this.value) });
                    else
                        for (n in t) C(n, t[n], e, r);
                    return i.join("&").replace(zt, "+")
                }
            }), Ce.extend({ active: 0, lastModified: {}, etag: {} }), le = Ce.now(), ue = /(\=)\?(&|$)|\?\?/i, Ce.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    return Ce.expando + "_" + le++
                }
            }), Ce.ajaxPrefilter("json jsonp", function(t, e, n) {
                var i, r, s, a, l, u, c = "string" == typeof t.data && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
                if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ue.test(t.url) || c && ue.test(t.data))) return r = t.jsonpCallback = Ce.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s = o[r], a = t.url, l = t.data, u = "$1" + r + "$2", t.jsonp !== !1 && (a = a.replace(ue, u), t.url === a && (c && (l = l.replace(ue, u)), t.data === l && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + r))), t.url = a, t.data = l, o[r] = function(t) { i = [t] }, n.always(function() { o[r] = s, i && Ce.isFunction(s) && o[r](i[0]) }), t.converters["script json"] = function() {
                    return i || Ce.error(r + " was not called"), i[0]
                }, t.dataTypes[0] = "json", "script"
            }), Ce.ajaxPrefilter("script", function(t) { t.cache === s && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1) }), Ce.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e, n = ke.head || ke.getElementsByTagName("head")[0] || ke.documentElement;
                    return {
                        send: function(i, r) {
                            e = ke.createElement("script"), e.async = "async", t.scriptCharset && (e.charset = t.scriptCharset), e.src = "", e.onload = e.onreadystatechange = function(t, i) {
                                (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, n && e.parentNode && n.removeChild(e), e = s, i || r(200, "success"))
                            }, n.insertBefore(e, n.firstChild)
                        },
                        abort: function() { e && e.onload(0, 1) }
                    }
                }
            }), ce = !!o.ActiveXObject && function() {
                for (var t in fe) fe[t](0, 1)
            }, he = 0, Ce.ajaxSettings.xhr = o.ActiveXObject ? function() {
                return !this.isLocal && D() || P()
            } : D,
            function(t) { Ce.extend(Ce.support, { ajax: !!t, cors: !!t && "withCredentials" in t }) }(Ce.ajaxSettings.xhr()), Ce.support.ajax && Ce.ajaxTransport(function(t) {
                if (!t.crossDomain || Ce.support.cors) {
                    var e
                }
            }), de = {}, me = /^(?:toggle|show|hide)$/, ye = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, be = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ], Ce.fn.extend({
                show: function(t, e, n) {
                    var i, r, o, s;
                    if (t || 0 === t) return this.animate(L("show", 3), t, e, n);
                    for (o = 0, s = this.length; o < s; o++) i = this[o], i.style && (r = i.style.display, Ce._data(i, "olddisplay") || "none" !== r || (r = i.style.display = ""), ("" === r && "none" === Ce.css(i, "display") || !Ce.contains(i.ownerDocument.documentElement, i)) && Ce._data(i, "olddisplay", N(i.nodeName)));
                    for (o = 0; o < s; o++) i = this[o], i.style && (r = i.style.display, "" !== r && "none" !== r || (i.style.display = Ce._data(i, "olddisplay") || ""));
                    return this
                },
                hide: function(t, e, n) {
                    if (t || 0 === t) return this.animate(L("hide", 3), t, e, n);
                    for (var i, r, o = 0, s = this.length; o < s; o++) i = this[o], i.style && (r = Ce.css(i, "display"), "none" === r || Ce._data(i, "olddisplay") || Ce._data(i, "olddisplay", r));
                    for (o = 0; o < s; o++) this[o].style && (this[o].style.display = "none");
                    return this
                },
                _toggle: Ce.fn.toggle,
                toggle: function(t, e, n) {
                    var i = "boolean" == typeof t;
                    return Ce.isFunction(t) && Ce.isFunction(e) ? this._toggle.apply(this, arguments) : null == t || i ? this.each(function() {
                        var e = i ? t : Ce(this).is(":hidden");
                        Ce(this)[e ? "show" : "hide"]()
                    }) : this.animate(L("toggle", 3), t, e, n), this
                },
                fadeTo: function(t, e, n, i) {
                    return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: e }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    function r() {
                        o.queue === !1 && Ce._mark(this);
                        var e, n, i, r, s, a, l, u, c, h, f, d = Ce.extend({}, o),
                            p = 1 === this.nodeType,
                            g = p && Ce(this).is(":hidden");
                        d.animatedProperties = {};
                        for (i in t)
                            if (e = Ce.camelCase(i), i !== e && (t[e] = t[i], delete t[i]), (s = Ce.cssHooks[e]) && "expand" in s) {
                                a = s.expand(t[e]), delete t[e];
                                for (i in a) i in t || (t[i] = a[i])
                            }
                        for (e in t) {
                            if (n = t[e], Ce.isArray(n) ? (d.animatedProperties[e] = n[1], n = t[e] = n[0]) : d.animatedProperties[e] = d.specialEasing && d.specialEasing[e] || d.easing || "swing", "hide" === n && g || "show" === n && !g) return d.complete.call(this);
                            !p || "height" !== e && "width" !== e || (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === Ce.css(this, "display") && "none" === Ce.css(this, "float") && (Ce.support.inlineBlockNeedsLayout && "inline" !== N(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                        }
                        null != d.overflow && (this.style.overflow = "hidden");
                        for (i in t) r = new Ce.fx(this, d, i), n = t[i], me.test(n) ? (f = Ce._data(this, "toggle" + i) || ("toggle" === n ? g ? "show" : "hide" : 0), f ? (Ce._data(this, "toggle" + i, "show" === f ? "hide" : "show"), r[f]()) : r[n]()) : (l = ye.exec(n), u = r.cur(), l ? (c = parseFloat(l[2]), h = l[3] || (Ce.cssNumber[i] ? "" : "px"), "px" !== h && (Ce.style(this, i, (c || 1) + h), u = (c || 1) / r.cur() * u, Ce.style(this, i, u + h)), l[1] && (c = ("-=" === l[1] ? -1 : 1) * c + u), r.custom(u, c, h)) : r.custom(u, n, ""));
                        return !0
                    }
                    var o = Ce.speed(e, n, i);
                    return Ce.isEmptyObject(t) ? this.each(o.complete, [!1]) : (t = Ce.extend({}, t), o.queue === !1 ? this.each(r) : this.queue(o.queue, r))
                },
                stop: function(t, e, n) {
                    return "string" != typeof t && (n = e, e = t, t = s), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        function e(t, e, i) {
                            var r = e[i];
                            Ce.removeData(t, i, !0), r.stop(n)
                        }
                        var i, r = !1,
                            o = Ce.timers,
                            s = Ce._data(this);
                        if (n || Ce._unmark(!0, this), null == t)
                            for (i in s) s[i] && s[i].stop && i.indexOf(".run") === i.length - 4 && e(this, s, i);
                        else s[i = t + ".run"] && s[i].stop && e(this, s, i);
                        for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (n ? o[i](!0) : o[i].saveState(), r = !0, o.splice(i, 1));
                        n && r || Ce.dequeue(this, t)
                    })
                }
            }), Ce.each({ slideDown: L("show", 1), slideUp: L("hide", 1), slideToggle: L("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) {
                Ce.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), Ce.each({ Height: "height", Width: "width" }, function(t, e) {
                var n = "client" + t,
                    i = "scroll" + t,
                    r = "offset" + t;
                Ce.fn["inner" + t] = function() {
                    var t = this[0];
                    return t ? t.style ? parseFloat(Ce.css(t, e, "padding")) : this[e]() : null
                }, Ce.fn["outer" + t] = function(t) {
                    var n = this[0];
                    return n ? n.style ? parseFloat(Ce.css(n, e, t ? "margin" : "border")) : this[e]() : null
                }, Ce.fn[e] = function(t) {
                    return Ce.access(this, function(t, e, o) {
                        var a, l, u, c;
                        return Ce.isWindow(t) ? (a = t.document, l = a.documentElement[n], Ce.support.boxModel && l || a.body && a.body[n] || l) : 9 === t.nodeType ? (a = t.documentElement, a[n] >= a[i] ? a[n] : Math.max(t.body[i], a[i], t.body[r], a[r])) : o === s ? (u = Ce.css(t, e), c = parseFloat(u), Ce.isNumeric(c) ? c : u) : (Ce(t).css(e, o), s)
                    }, e, t, arguments.length, null)
                }
            }), o.jQuery = o.$ = Ce, n(77) && n(77).jQuery && (i = [], r = function() {
                return Ce
            }.apply(e, i), !(r !== s && (t.exports = r)))
    }(window), t.exports = $
}, function(t, e) {
    (function(e) { t.exports = e }).call(e, {})
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {}, function(t, e, n) { n(1391), n(1440), n(1441), n(1442), n(1443), n(1445), n(1448), n(1449), n(1450), n(1451), n(1452), n(1453), n(1454), n(1455), n(1456), n(1458), n(1460), n(1462), n(1464), n(1467), n(1468), n(1469), n(1473), n(1475), n(1477), n(1480), n(1481), n(1482), n(1483), n(1485), n(1486), n(1487), n(1488), n(1489), n(1490), n(1491), n(1493), n(1494), n(1495), n(1497), n(1498), n(1499), n(1501), n(1502), n(1503), n(1504), n(1505), n(1506), n(1507), n(1508), n(1509), n(1510), n(1511), n(1512), n(1513), n(1514), n(1519), n(1520), n(1524), n(1525), n(1526), n(1527), n(1529), n(1530), n(1531), n(1532), n(1533), n(1534), n(1535), n(1536), n(1537), n(1538), n(1539), n(1540), n(1541), n(1542), n(1543), n(1544), n(1545), n(1547), n(1548), n(1554), n(1555), n(1557), n(1558), n(1559), n(1563), n(1564), n(1565), n(1566), n(1567), n(1569), n(1570), n(1571), n(1572), n(1575), n(1577), n(1578), n(1579), n(1581), n(1583), n(1585), n(1586), n(1587), n(1589), n(1590), n(1591), n(1592), n(1599), n(1602), n(1603), n(1605), n(1606), n(1609), n(1610), n(1612), n(1613), n(1614), n(1615), n(1616), n(1617), n(1618), n(1619), n(1620), n(1621), n(1622), n(1623), n(1624), n(1625), n(1626), n(1627), n(1628), n(1629), n(1630), n(1632), n(1633), n(1634), n(1635), n(1636), n(1637), n(1639), n(1640), n(1641), n(1642), n(1643), n(1644), n(1645), n(1646), n(1648), n(1649), n(1651), n(1652), n(1653), n(1654), n(1657), n(1658), n(1659), n(1660), n(1661), n(1662), n(1663), n(1664), n(1666), n(1667), n(1668), n(1669), n(1670), n(1671), n(1672), n(1673), n(1674), n(1675), n(1676), n(1679), n(1680), t.exports = n(1397) }, function(t, e, n) {}, function(t, e) {}, function(t, e) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) { e.f = n(1413) }, function(t, e, n) {}, function(t, e) { t.exports = !1 }, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e) { e.f = Object.getOwnPropertySymbols }, function(t, e) { e.f = {}.propertyIsEnumerable }, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) { t.exports = n(1392).document && document.documentElement }, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    var i = n(1401);
    n(1444)("isFrozen", function(t) {
        return function(e) {
            return !i(e) || !!t && t(e)
        }
    })
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    var i = n(1396);
    i(i.S, "Object", { is: n(1459) })
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    var i = n(1396);
    i(i.S, "Object", { setPrototypeOf: n(1461).set })
}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {
    var i = n(1396);
    i(i.P, "Function", { bind: n(1465) })
}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) { t.exports = {} }, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) { t.exports = n(1392) }, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) {}, function(t, e, n) { n(1683), t.exports = n(1397).RegExp.escape }, function(t, e, n) {}, function(t, e) {}, function(t, e) {}, function(module, exports) {}, function(t, e) {}, function(t, e) { "use strict" }, function(t, e, n) {}, function(t, e) {}, function(t, e) {}, function(t, e) {
    "use strict";
    ! function(t, e) {
        function n() { this._state = [], this._defaults = { classHolder: "sbHolder", classHolderDisabled: "sbHolderDisabled", classHolderOpen: "sbHolderOpen", classSelector: "sbSelector", classOptions: "sbOptions", classGroup: "sbGroup", classSub: "sbSub", classDisabled: "sbDisabled", classToggleOpen: "sbToggleOpen", classToggle: "sbToggle", classSeparator: "sbSeparator", useCustomPrependWithSelector: "", customPrependSelectorClass: "", speed: 200, slidesUp: !1, effect: "slide", onChange: null, beforeOpen: null, onOpen: null, onClose: null } }

        function i(e, n, i, r) {
            function o() { n.removeClass(e.settings.customPrependSelectorClass), e._lastSelectorPrepend && (e._lastSelectorPrepend.remove(), delete e._lastSelectorPrepend), i.data("custom-option-prepend") && (e.settings.customPrependSelectorClass && n.addClass(e.settings.customPrependSelectorClass), e._lastSelectorPrepend = t(i.data("custom-option-prepend")).clone(), n[e.settings.useCustomPrependWithSelector](e._lastSelectorPrepend)) }
            e.settings.useCustomPrependWithSelector && (r ? e._onAttachCallback = o : o())
        }
        var r = "selectbox",
            o = !1,
            s = !0;
        t.extend(n.prototype, {
            _refreshSelectbox: function(t, e) {
                if (!t) return o;
                var n = this._getInst(t);
                return null == n ? o : (this._fillList(t, n, e), s)
            },
            _isOpenSelectbox: function(t) {
                if (!t) return o;
                var e = this._getInst(t);
                return e.isOpen
            },
            _isDisabledSelectbox: function(t) {
                if (!t) return o;
                var e = this._getInst(t);
                return e.isDisabled
            },
            _detachSelectbox: function(n) {
                var i = this._getInst(n);
                return i ? (t("#sbHolder_" + i.uid).remove(), delete this._state[i.uid], t.data(n, r, null), t(n).show(), e) : o
            },
            _changeSelectbox: function(e, n, r) {
                var a, l, u = this._getInst(e),
                    c = this._get(u, "onChange"),
                    h = t("#sbSelector_" + u.uid).text() === r && t("#sbOptions_" + u.uid).find('a[rel="' + n + '"]').hasClass("active");
                h || (a = t(e).find("option[value='" + n + "']"), l = t("#sbSelector_" + u.uid), l.text(r), i(u, l, a), t("#sbOptions_" + u.uid).find(".active").removeClass("active"), t("#sbOptions_" + u.uid).find('a[rel="' + n + '"]').addClass("active"), t(e).find("option").attr("selected", o), a.attr("selected", s), c ? c.apply(u.input ? u.input[0] : null, [n, u]) : u.input && u.input.trigger("change"))
            },
            _enableSelectbox: function(n) {
                var i = this._getInst(n);
                return i && i.isDisabled ? (t("#sbHolder_" + i.uid).removeClass(i.settings.classHolderDisabled), i.isDisabled = o, t.data(n, r, i), e) : o
            },
            _disableSelectbox: function(n) {
                var i = this._getInst(n);
                return !i || i.isDisabled ? o : (t("#sbHolder_" + i.uid).addClass(i.settings.classHolderDisabled), i.isDisabled = s, t.data(n, r, i), e)
            },
            _optionSelectbox: function(n, i, s) {
                var a = this._getInst(n);
                return a ? null == s ? a[i] : (a[i] = s, t.data(n, r, a), e) : o
            },
            _openSelectbox: function(e) {
                var n, i, o, a, l, u, c, h, f, d, p = this._getInst(e),
                    g = this;
                !p || p.isOpen || p.isDisabled || (n = t("#sbOptions_" + p.uid), i = parseInt(t(window).height(), 10), o = parseInt(t(window).width(), 10), a = t("#sbHolder_" + p.uid).offset(), l = t(window).scrollTop(), u = n.prev().height(), c = i - (a.top - l) - u / 2, h = this._get(p, "onOpen"), f = this._get(p, "beforeOpen"), d = null, f && (d = f()), "object" == typeof d && null !== d ? n.css(d) : (c > 50 && !p.settings.slidesUp ? n.css({ bottom: "auto", top: u + 2 + "px", maxHeight: c - u + "px" }) : n.css({ top: "auto", bottom: u + 2 + "px", maxHeight: a.top - l - u / 2 + "px" }), a.left + n.width() > o ? n.css("left", "-" + (n.width() - n.parent().width() + 3) + "px") : n.css("left", "-1px")), "fade" === p.settings.effect ? n.fadeIn(p.settings.speed) : n.slideDown(p.settings.speed), t("#sbToggle_" + p.uid).addClass(p.settings.classToggleOpen), t("#sbHolder_" + p.uid).addClass(p.settings.classHolderOpen), this._state[p.uid] = s, p.isOpen = s, h && h.apply(p.input ? p.input[0] : null, [p]), t.data(e, r, p), t("html").unbind("click.sbClose").one("click.sbClose", function() { g._closeSelectbox(e) }))
            },
            _closeSelectbox: function(e) {
                var n, i = this._getInst(e);
                i && i.isOpen && (n = this._get(i, "onClose"), t("#sbOptions_" + i.uid).hide(), t("#sbToggle_" + i.uid).removeClass(i.settings.classToggleOpen), t("#sbHolder_" + i.uid).removeClass(i.settings.classHolderOpen), this._state[i.uid] = o, i.isOpen = o, n && n.apply(i.input ? i.input[0] : null, [i]), t.data(e, r, i), t("html").unbind("click.sbClose"))
            },
            _newInst: function(t) {
                var e = t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return { id: e, input: t, uid: Math.floor(99999999 * Math.random()), isOpen: o, isDisabled: o, isSelected: o, settings: {} }
            },
            _getInst: function(e) {
                try {
                    return t.data(e, r)
                } catch (t) {
                    throw "Missing instance data for this selectbox"
                }
            },
            _get: function(t, n) {
                return t.settings[n] !== e ? t.settings[n] : this._defaults[n]
            },
        }), t.fn.selectbox = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return "string" == typeof e && "isDisabled" == e ? t.selectbox["_" + e + "Selectbox"].apply(t.selectbox, [this[0]].concat(n)) : "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? t.selectbox["_" + e + "Selectbox"].apply(t.selectbox, [this[0]].concat(n)) : this.each(function() { "string" == typeof e ? t.selectbox["_" + e + "Selectbox"].apply(t.selectbox, [this].concat(n)) : t.selectbox._attachSelectbox(this, e) })
        }, t.selectbox = new n, t.selectbox.version = "0.1.3"
    }(jQuery)
}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {
    (function() {
        "use strict";
        var t = window.Modernizr = function(t, e, n) {
            function i(t) { b.cssText = t }

            function r(t, e) {
                return typeof t === e
            }

            function o(t, e) {
                return !!~("" + t).indexOf(e)
            }

            function s(t, e) {
                var i, r;
                for (i in t)
                    if (r = t[i], !o(r, "-") && b[r] !== n) return "pfx" != e || r;
                return !1
            }

            function a(t, e, i) {
                var o, s;
                for (o in t)
                    if (s = e[t[o]], s !== n) return i === !1 ? t[o] : r(s, "function") ? s.bind(i || e) : s;
                return !1
            }

            function l(t, e, n) {
                var i = t.charAt(0).toUpperCase() + t.slice(1),
                    o = (t + " " + x.join(i + " ") + i).split(" ");
                return r(e, "string") || r(e, "undefined") ? s(o, e) : (o = (t + " " + S.join(i + " ") + i).split(" "), a(o, e, n))
            }
            var u, c, h, f, d = "2.8.3",
                p = {},
                g = !0,
                m = e.documentElement,
                y = "modernizr",
                v = e.createElement(y),
                b = v.style,
                w = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
                _ = "Webkit Moz O ms",
                x = _.split(" "),
                S = _.toLowerCase().split(" "),
                k = {},
                T = [],
                E = T.slice,
                C = function(t, n, i, r) {
                    var o, s, a, l, u = e.createElement("div"),
                        c = e.body,
                        h = c || e.createElement("body");
                    if (parseInt(i, 10))
                        for (; i--;) a = e.createElement("div"), a.id = r ? r[i] : y + (i + 1), u.appendChild(a);
                    return o = '&#173;<style id="s' + y + '">' + t + "</style>", u.id = y, (c ? u : h).innerHTML += o, h.appendChild(u), c || (h.style.background = "", h.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(h)), s = n(u, t), c ? u.parentNode.removeChild(u) : (h.parentNode.removeChild(h), m.style.overflow = l), !!s
                },
                I = function() {
                    function t(t, o) {
                        o = o || e.createElement(i[t] || "div"), t = "on" + t;
                        var s = t in o;
                        return s || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), s = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, s
                    }
                    var i = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                    return t
                }(),
                M = {}.hasOwnProperty;
            h = r(M, "undefined") || r(M.call, "undefined") ? function(t, e) {
                return e in t && r(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return M.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                var e, n, i = this;
                if ("function" != typeof i) throw new TypeError;
                return e = E.call(arguments, 1), n = function() {
                    var r, o, s;
                    return this instanceof n ? (r = function() {}, r.prototype = i.prototype, o = new r, s = i.apply(o, e.concat(E.call(arguments))), Object(s) === s ? s : o) : i.apply(t, e.concat(E.call(arguments)))
                }
            }), k.flexbox = function() {
                return l("flexWrap")
            }, k.canvas = function() {
                var t = e.createElement("canvas");
                return !!t.getContext && !!t.getContext("2d")
            }, k.canvastext = function() {
                return !!p.canvas && !!r(e.createElement("canvas").getContext("2d").fillText, "function")
            }, k.touch = function() {
                var n
            }, k.history = function() {
                return !!t.history && !!history.pushState
            }, k.draganddrop = function() {
                var t = e.createElement("div");
                return "draggable" in t || "ondragstart" in t && "ondrop" in t
            }, k.websockets = function() {
                return "WebSocket" in t || "MozWebSocket" in t
            }, k.multiplebgs = function() {
                return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
            }, k.csscolumns = function() {
                return l("columnCount")
            }, k.csstransitions = function() {
                return l("transition")
            }, k.localstorage = function() {
                try {
                    return localStorage.setItem(y, y), localStorage.removeItem(y), !0
                } catch (t) {
                    return !1
                }
            };
            for (f in k) h(k, f) && (c = f.toLowerCase(), p[c] = k[f](), T.push((p[c] ? "" : "no-") + c));
            return p.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var i in t) h(t, i) && p.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), p[t] !== n) return p;
                    e = "function" == typeof e ? e() : e, void 0 !== g && g && (m.className += " feature-" + (e ? "" : "no-") + t), p[t] = e
                }
                return p
            }, i(""), v = u = null, p._version = d, p._prefixes = w, p._domPrefixes = S, p._cssomPrefixes = x, p.hasEvent = I, p.testProp = function(t) {
                return s([t])
            }, p.testAllProps = l, p.testStyles = C, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " feature-js feature-" + T.join(" feature-") : ""), p
        }(this, this.document);
        !t.touch || "onorientationchange" in window || (t.touch = !1, document.documentElement.className = document.documentElement.className.replace("feature-touch", "feature-no-touch")), t.addTest("pointerevents", function() {
            var t, e = document.createElement("x"),
                n = document.documentElement,
                i = window.getComputedStyle,
                r = !1
        }), t.addTest("flexbox", t.testAllProps("flexBasis", "1px", !0))
    }).call(window)
}, function(t, e) {}, function(t, e, n) {}, function(t, e) {}, function(t, e, n) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) { "use strict" }, function(t, e) {}, function(module, exports) {}, function(t, e) {}, function(t, e) { "use strict" }, function(t, e) { "use strict" }, function(t, e, n) {
    (function(e) { e.$ || (e.$ = {}), t.exports = e.$.i18n = n(1713) }).call(e, function() {
        return this
    }())
}, function(t, e) {
    "use strict";
    ! function() {
        function e(t, e) {
            if (!e || "function" == typeof e) return t;
            for (var n in e) t[n] = e[n];
            return t
        }

        function i(t) {
            return "string" == typeof t ? t.replace(/[&<>"'\/]/g, function(t) {
                return N[t]
            }) : t
        }

        function o(t, e) {
            var n, i, r, o, s, a, l, u;
            if ("function" == typeof t && (e = t, t = {}), t = t || {}, R.extend(L, t), delete L.fixLng, "string" == typeof L.ns && (L.ns = { namespaces: [L.ns], defaultNs: L.ns }), "string" == typeof L.fallbackNS && (L.fallbackNS = [L.fallbackNS]), "string" != typeof L.fallbackLng && "boolean" != typeof L.fallbackLng || (L.fallbackLng = [L.fallbackLng]), L.interpolationPrefixEscaped = R.regexEscape(L.interpolationPrefix), L.interpolationSuffixEscaped = R.regexEscape(L.interpolationSuffix), L.lng || (L.lng = R.detectLanguage()), L.lng ? L.useCookie && R.cookie.create(L.cookieName, L.lng, L.cookieExpirationTime, L.cookieDomain) : (L.lng = L.fallbackLng[0], L.useCookie && R.cookie.remove(L.cookieName)), A = R.toLanguages(L.lng), D = A[0], R.log("currentLng set to: " + D), n = w, t.fixLng && (n = function(t, e) {
                    return e = e || {}, e.lng = e.lng || n.lng, w(t, e)
                }, n.lng = D), Y.setCurrentLng(D), C && L.setJqueryExt && p(), C && C.Deferred && (i = C.Deferred()), L.resStore) {
                if (M = L.resStore, O = !0, e && e(n), i && i.resolve(n), i) return i.promise()
            } else {}
        }

        function s(t, e) {}

        function a(t, e, n) { "string" != typeof e ? (n = e, e = L.ns.defaultNs) : L.ns.namespaces.indexOf(e) < 0 && L.ns.namespaces.push(e), M[t] = M[t] || {}, M[t][e] = M[t][e] || {}, R.extend(M[t][e], n) }

        function l(t, e) { "string" != typeof e && (e = L.ns.defaultNs), M[t] = M[t] || {}, M[t][e] = {} }

        function u(t) { L.ns.defaultNs = t }

        function c(t, e) { h([t], e) }

        function h(t, e) {}

        function f(t, e, n) {
            return "function" == typeof e ? (n = e, e = {}) : e || (e = {}), e.lng = t, o(e, n)
        }

        function d() {
            return D
        }

        function p() {
            function t(t, e, n) {
                var i, r, o, s, a;
                0 !== e.length && (i = "text", 0 === e.indexOf("[") && (r = e.split("]"), e = r[1], i = r[0].substr(1, r[0].length - 1)), e.indexOf(";") === e.length - 1 && (e = e.substr(0, e.length - 2)), "html" === i ? (o = L.defaultValueFromContent ? C.extend({ defaultValue: t.html() }, n) : n, t.html(C.t(e, o))) : "text" === i ? (o = L.defaultValueFromContent ? C.extend({ defaultValue: t.text() }, n) : n, t.text(C.t(e, o))) : "prepend" === i ? (o = L.defaultValueFromContent ? C.extend({ defaultValue: t.html() }, n) : n, t.prepend(C.t(e, o))) : "append" === i ? (o = L.defaultValueFromContent ? C.extend({ defaultValue: t.html() }, n) : n, t.append(C.t(e, o))) : 0 === i.indexOf("data-") ? (s = i.substr(5), o = L.defaultValueFromContent ? C.extend({ defaultValue: t.data(s) }, n) : n, a = C.t(e, o), t.data(s, a), t.attr(i, a)) : (o = L.defaultValueFromContent ? C.extend({ defaultValue: t.attr(i) }, n) : n, t.attr(i, C.t(e, o))))
            }

            function e(e, n) {
                var i, r, o, s = e.attr(L.selectorAttr);
                s || void 0 === s || s === !1 || (s = e.text() || e.val()), s && (i = e, r = e.data("i18n-target"), r && (i = e.find(r) || e), n || L.useDataAttrOptions !== !0 || (n = e.data("i18n-options")), n = n || {}, s.indexOf(";") >= 0 ? (o = s.split(";"), C.each(o, function(e, r) { "" !== r && t(i, r, n) })) : t(i, s, n), L.useDataAttrOptions === !0 && e.data("i18n-options", n))
            }
            C.t = C.t || w, C.fn.i18n = function(t) {
                return this.each(function() {
                    e(C(this), t);
                    var n = C(this).find("[" + L.selectorAttr + "]");
                    n.each(function() { e(C(this), t) })
                })
            }
        }

        function g(t, e, n, i) {
            if (!t) return t;
            if (i = i || e, t.indexOf(i.interpolationPrefix || L.interpolationPrefix) < 0) return t;
            var r = i.interpolationPrefix ? R.regexEscape(i.interpolationPrefix) : L.interpolationPrefixEscaped,
                o = i.interpolationSuffix ? R.regexEscape(i.interpolationSuffix) : L.interpolationSuffixEscaped,
                s = "HTML" + o;
            return R.each(e, function(e, a) {
                var l = n ? n + L.keyseparator + e : e;
                "object" == typeof a && null !== a ? t = g(t, a, l, i) : i.escapeInterpolation || L.escapeInterpolation ? (t = t.replace(RegExp("" + r + l + s, "g"), a), t = t.replace(RegExp("" + r + l + o, "g"), R.escape(a))) : t = t.replace(RegExp("" + r + l + o, "g"), a)
            }), t
        }

        function m(t, e) {
            var n, i, r, o, s, a, l, u, c = ",",
                h = "{",
                f = "}",
                d = R.extend({}, e);
            for (delete d.postProcess; t.indexOf(L.reusePrefix) != -1 && (P++, !(P > L.maxRecursion));) {
                if (n = t.lastIndexOf(L.reusePrefix), i = t.indexOf(L.reuseSuffix, n) + L.reuseSuffix.length, r = t.substring(n, i), o = r.replace(L.reusePrefix, "").replace(L.reuseSuffix, ""), o.indexOf(c) != -1 && (s = o.indexOf(c), o.indexOf(h, s) != -1 && o.indexOf(f, s) != -1)) {
                    a = o.indexOf(h, s), l = o.indexOf(f, a) + f.length;
                    try { d = R.extend(d, JSON.parse(o.substring(a, l))), o = o.substring(0, s) } catch (t) {}
                }
                u = S(o, d), t = t.replace(r, u)
            }
            return t
        }

        function y(t) {
            return t.context && ("string" == typeof t.context || "number" == typeof t.context)
        }

        function v(t) {
            return void 0 !== t.count && "string" != typeof t.count && 1 !== t.count
        }

        function b(t, e) {
            e = e || {};
            var n = _(t, e),
                i = k(t, e);
            return void 0 !== i || i === n
        }

        function w(t, e) {
            return e = e || {}, O ? (P = 0, S.apply(null, arguments)) : t || ""
        }

        function _(t, e) {
            return void 0 !== e.defaultValue ? e.defaultValue : t
        }

        function x() {
            var t, e = [];
            for (t = 1; t < arguments.length; t++) e.push(arguments[t]);
            return { postProcess: "sprintf", sprintf: e }
        }

        function S(t, e) {}

        function k(t, e) {}

        function T() {
            var t, e, n = [];
            return "undefined" != typeof window && (! function() {
                var t, e, i, r, o = window.location.search.substring(1),
                    s = o.split("&");
                for (t = 0; t < s.length; t++) e = s[t].indexOf("="), e > 0 && (i = s[t].substring(0, e), r = s[t].substring(e + 1), n[i] = r)
            }(), n[L.detectLngQS] && (t = n[L.detectLngQS])), !t && "undefined" != typeof document && L.useCookie && (e = R.cookie.read(L.cookieName), e && (t = e)), t || "undefined" == typeof navigator || (t = navigator.language ? navigator.language : navigator.userLanguage), t
        }
        var E, C, I, M, D, P, A, O, L, N, j, F, R, H, Y, z, B, U, V;
        Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
            var e, n, i, r;
            if (null == this) throw new TypeError;
            if (e = Object(this), n = e.length >>> 0, 0 === n) return -1;
            if (i = 0, arguments.length > 0 && (i = +arguments[1], i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n) return -1;
            for (r = i >= 0 ? i : Math.max(n - Math.abs(i), 0); r < n; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(t) {
            var e, n, i, r;
            if (null == this) throw new TypeError;
            if (e = Object(this), n = e.length >>> 0, 0 === n) return -1;
            for (i = n, arguments.length > 1 && (i = +arguments[1], i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -(1 / 0) && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), r = i >= 0 ? Math.min(i, n - 1) : n - Math.abs(i); r >= 0; r--)
                if (r in e && e[r] === t) return r;
            return -1
        }), "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), E = this || window, C = E.jQuery || E.Zepto, I = {}, M = {}, P = 0, A = [], O = !1, void 0 !== t && t.exports ? t.exports = I : (C && (C.i18n = C.i18n || I), E.i18n = E.i18n || I), L = { lng: void 0, load: "all", preload: [], lowerCaseLng: !1, returnObjectTrees: !1, fallbackLng: ["dev"], fallbackNS: [], detectLngQS: "setLng", ns: "translation", fallbackOnNull: !0, fallbackOnEmpty: !1, fallbackToDefaultNS: !1, nsseparator: ":", keyseparator: ".", selectorAttr: "data-i18n", debug: !1, resGetPath: "locales/__lng__/__ns__.json", resPostPath: "locales/add/__lng__/__ns__", getAsync: !1, postAsync: !1, resStore: void 0, useLocalStorage: !1, localStorageExpirationTime: 6048e5, dynamicLoad: !1, sendMissing: !1, sendMissingTo: "fallback", sendType: "POST", interpolationPrefix: "__", interpolationSuffix: "__", reusePrefix: "$t(", reuseSuffix: ")", pluralSuffix: "_plural", pluralNotFound: "plural_not_found" + Math.random(), contextNotFound: "context_not_found" + Math.random(), escapeInterpolation: !1, setJqueryExt: !0, defaultValueFromContent: !0, useDataAttrOptions: !1, cookieExpirationTime: void 0, useCookie: !0, cookieName: "i18next", cookieDomain: void 0, objectTreeKeyHandler: void 0, postProcess: void 0, parseMissingKey: void 0, shortcutFunction: "sprintf" }, N = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" }, j = {
            create: function(t, e, n, i) {
                var r, o;
                n ? (o = new Date, o.setTime(o.getTime() + 60 * n * 1e3), r = "; expires=" + o.toGMTString()) : r = "", i = i ? "domain=" + i + ";" : "", document.cookie = t + "=" + e + r + ";" + i + "path=/"
            },
            read: function(t) {
                var e, n, i = t + "=",
                    r = document.cookie.split(";");
                for (e = 0; e < r.length; e++) {
                    for (n = r[e];
                        " " == n.charAt(0);) n = n.substring(1, n.length);
                    if (0 === n.indexOf(i)) return n.substring(i.length, n.length)
                }
                return null
            },
            remove: function(t) { this.create(t, "", -1) }
        }, F = {
            create: function(t, e, n, i) {},
            read: function(t) {
                return null
            },
            remove: function(t) {}
        }, R = {
            extend: C ? C.extend : e,
            each: C ? C.each : n,
            ajax: C ? C.ajax : "undefined" != typeof document ? r : function() {},
            cookie: "undefined" != typeof document ? j : F,
            detectLanguage: T,
            escape: i,
            log: function(t) { L.debug && "undefined" != typeof console && console.log(t) },
            toLanguages: function(t) {
                var e, n, i = [];
                for ("string" == typeof t && t.indexOf("-") > -1 ? (e = t.split("-"), t = L.lowerCaseLng ? e[0].toLowerCase() + "-" + e[1].toLowerCase() : e[0].toLowerCase() + "-" + e[1].toUpperCase(), "unspecific" !== L.load && i.push(t), "current" !== L.load && i.push(e[0])) : i.push(t), n = 0; n < L.fallbackLng.length; n++) i.indexOf(L.fallbackLng[n]) === -1 && L.fallbackLng[n] && i.push(L.fallbackLng[n]);
                return i
            },
            regexEscape: function(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
        }, R.applyReplacement = g, H = {}, Y = {
            rules: {
                ach: {
                    name: "Acholi",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                af: {
                    name: "Afrikaans",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ak: {
                    name: "Akan",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                am: {
                    name: "Amharic",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                an: {
                    name: "Aragonese",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ar: {
                    name: "Arabic",
                    numbers: [0, 1, 2, 3, 11, 100],
                    plurals: function(t) {
                        return +(0 === t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
                    }
                },
                arn: {
                    name: "Mapudungun",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                ast: {
                    name: "Asturian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ay: {
                    name: "Aymará",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                az: {
                    name: "Azerbaijani",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                be: {
                    name: "Belarusian",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                bg: {
                    name: "Bulgarian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                bn: {
                    name: "Bengali",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                bo: {
                    name: "Tibetan",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                br: {
                    name: "Breton",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                bs: {
                    name: "Bosnian",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                ca: {
                    name: "Catalan",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                cgg: {
                    name: "Chiga",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                cs: {
                    name: "Czech",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                    }
                },
                csb: {
                    name: "Kashubian",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                cy: {
                    name: "Welsh",
                    numbers: [1, 2, 3, 8],
                    plurals: function(t) {
                        return +(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                    }
                },
                da: {
                    name: "Danish",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                de: {
                    name: "German",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                dz: {
                    name: "Dzongkha",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                el: {
                    name: "Greek",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                en: {
                    name: "English",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                eo: {
                    name: "Esperanto",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                es: {
                    name: "Spanish",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                es_ar: {
                    name: "Argentinean Spanish",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                et: {
                    name: "Estonian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                eu: {
                    name: "Basque",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                fa: {
                    name: "Persian",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                fi: {
                    name: "Finnish",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                fil: {
                    name: "Filipino",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                fo: {
                    name: "Faroese",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                fr: {
                    name: "French",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                fur: {
                    name: "Friulian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                fy: {
                    name: "Frisian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ga: {
                    name: "Irish",
                    numbers: [1, 2, 3, 7, 11],
                    plurals: function(t) {
                        return +(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
                    }
                },
                gd: {
                    name: "Scottish Gaelic",
                    numbers: [1, 2, 3, 20],
                    plurals: function(t) {
                        return +(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
                    }
                },
                gl: {
                    name: "Galician",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                gu: {
                    name: "Gujarati",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                gun: {
                    name: "Gun",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                ha: {
                    name: "Hausa",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                he: {
                    name: "Hebrew",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                hi: {
                    name: "Hindi",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                hr: {
                    name: "Croatian",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                hu: {
                    name: "Hungarian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                hy: {
                    name: "Armenian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ia: {
                    name: "Interlingua",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                id: {
                    name: "Indonesian",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                is: {
                    name: "Icelandic",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t % 10 != 1 || t % 100 == 11)
                    }
                },
                it: {
                    name: "Italian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ja: {
                    name: "Japanese",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                jbo: {
                    name: "Lojban",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                jv: {
                    name: "Javanese",
                    numbers: [0, 1],
                    plurals: function(t) {
                        return +(0 !== t)
                    }
                },
                ka: {
                    name: "Georgian",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                kk: {
                    name: "Kazakh",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                km: {
                    name: "Khmer",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                kn: {
                    name: "Kannada",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ko: {
                    name: "Korean",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                ku: {
                    name: "Kurdish",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                kw: {
                    name: "Cornish",
                    numbers: [1, 2, 3, 4],
                    plurals: function(t) {
                        return +(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                    }
                },
                ky: {
                    name: "Kyrgyz",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                lb: {
                    name: "Letzeburgesch",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ln: {
                    name: "Lingala",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                lo: {
                    name: "Lao",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                lt: {
                    name: "Lithuanian",
                    numbers: [1, 2, 10],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                lv: {
                    name: "Latvian",
                    numbers: [1, 2, 0],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                    }
                },
                mai: {
                    name: "Maithili",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                mfe: {
                    name: "Mauritian Creole",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                mg: {
                    name: "Malagasy",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                mi: {
                    name: "Maori",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                mk: {
                    name: "Macedonian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 == t || t % 10 == 1 ? 0 : 1)
                    }
                },
                ml: {
                    name: "Malayalam",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                mn: {
                    name: "Mongolian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                mnk: {
                    name: "Mandinka",
                    numbers: [0, 1, 2],
                    plurals: function(t) {
                        return +(1 == t ? 1 : 2)
                    }
                },
                mr: {
                    name: "Marathi",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ms: {
                    name: "Malay",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                mt: {
                    name: "Maltese",
                    numbers: [1, 2, 11, 20],
                    plurals: function(t) {
                        return +(1 == t ? 0 : 0 === t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
                    }
                },
                nah: {
                    name: "Nahuatl",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                nap: {
                    name: "Neapolitan",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                nb: {
                    name: "Norwegian Bokmal",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ne: {
                    name: "Nepali",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                nl: {
                    name: "Dutch",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                nn: {
                    name: "Norwegian Nynorsk",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                no: {
                    name: "Norwegian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                nso: {
                    name: "Northern Sotho",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                oc: {
                    name: "Occitan",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                or: {
                    name: "Oriya",
                    numbers: [2, 1],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                pa: {
                    name: "Punjabi",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                pap: {
                    name: "Papiamento",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                pl: {
                    name: "Polish",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                pms: {
                    name: "Piemontese",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ps: {
                    name: "Pashto",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                pt: {
                    name: "Portuguese",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                pt_br: {
                    name: "Brazilian Portuguese",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                rm: {
                    name: "Romansh",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ro: {
                    name: "Romanian",
                    numbers: [1, 2, 20],
                    plurals: function(t) {
                        return +(1 == t ? 0 : 0 === t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
                    }
                },
                ru: {
                    name: "Russian",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                sah: {
                    name: "Yakut",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                sco: {
                    name: "Scots",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                se: {
                    name: "Northern Sami",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                si: {
                    name: "Sinhala",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                sk: {
                    name: "Slovak",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                    }
                },
                sl: {
                    name: "Slovenian",
                    numbers: [5, 1, 2, 3],
                    plurals: function(t) {
                        return +(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                    }
                },
                so: {
                    name: "Somali",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                son: {
                    name: "Songhay",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                sq: {
                    name: "Albanian",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                sr: {
                    name: "Serbian",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                su: {
                    name: "Sundanese",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                sv: {
                    name: "Swedish",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                sw: {
                    name: "Swahili",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                ta: {
                    name: "Tamil",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                te: {
                    name: "Telugu",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                tg: {
                    name: "Tajik",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                th: {
                    name: "Thai",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                ti: {
                    name: "Tigrinya",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                tk: {
                    name: "Turkmen",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                tr: {
                    name: "Turkish",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                tt: {
                    name: "Tatar",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                ug: {
                    name: "Uyghur",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                uk: {
                    name: "Ukrainian",
                    numbers: [1, 2, 5],
                    plurals: function(t) {
                        return +(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    }
                },
                ur: {
                    name: "Urdu",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                uz: {
                    name: "Uzbek",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                vi: {
                    name: "Vietnamese",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                wa: {
                    name: "Walloon",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(t > 1)
                    }
                },
                wo: {
                    name: "Wolof",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                },
                yo: {
                    name: "Yoruba",
                    numbers: [1, 2],
                    plurals: function(t) {
                        return +(1 != t)
                    }
                },
                zh: {
                    name: "Chinese",
                    numbers: [1],
                    plurals: function(t) {
                        return 0
                    }
                }
            },
            addRule: function(t, e) { Y.rules[t] = e },
            setCurrentLng: function(t) {
                if (!Y.currentRule || Y.currentRule.lng !== t) {
                    var e = t.split("-");
                    Y.currentRule = { lng: t, rule: Y.rules[e[0]] }
                }
            },
            get: function(t, e) {
                function n(e, n) {
                    var i, r, o;
                    return i = Y.currentRule && Y.currentRule.lng === t ? Y.currentRule.rule : Y.rules[e], i ? (r = i.plurals(n), o = i.numbers[r], 2 === i.numbers.length && 1 === i.numbers[0] && (2 === o ? o = -1 : 1 === o && (o = 1)), o) : 1 === n ? "1" : "-1"
                }
                var i = t.split("-");
                return n(i[0], e)
            }
        }, z = {}, B = function(t, e) { z[t] = e }, U = function() {}(), V = function(t, e) {
            return e.unshift(t), U.apply(null, e)
        }, B("sprintf", function(t, e, n) {
            return n.sprintf ? "[object Array]" === Object.prototype.toString.apply(n.sprintf) ? V(t, n.sprintf) : "object" == typeof n.sprintf ? U(t, n.sprintf) : t : t
        }), I.init = o, I.setLng = f, I.preload = s, I.addResourceBundle = a, I.removeResourceBundle = l, I.loadNamespace = c, I.loadNamespaces = h, I.setDefaultNamespace = u, I.t = w, I.translate = w, I.exists = b, I.detectLanguage = R.detectLanguage, I.pluralExtensions = Y, I.sync = H, I.functions = R, I.lng = d, I.addPostProcessor = B, I.options = L
    }()
}, function(t, e) {}, function(t, e) {}]));

function aa() {
    webpackJsonp([50, 2], [function(t, e, i) {
        "use strict";
        var n, o, s, a;
        i(2), i(1192), n = "", o = "", s = "", a = window.initData, "" && "" === "", $(function() { $(".tv-unauth-header").tvUnauthHeader({}) })
    }, , function(t, e, i) {
        "use strict";
        var n, o, s, a, r, l, c, d, u, h = window.initData;
        i(4), h.block_pro()
    }, function(t, e) {}, function(t, e, i) {
        "use strict";
        window.TradingView = "", window.requireAll = "", i(22), i(24), i(25), i(26), i(27), i(28), i(29), i(36), i(37), i(38), i(39), i(40), i(41), i(171), i(173), i(59), i(34), i(174), i(175), i(33), i(31), i(299), i(68), i(303), i(72)
    }, function(t, e, i) {}, , , , , , , , , , , , , , function(t, e) {}, function(t, e) {}, function(module, exports) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e, i) {
        (function(t) {
            function e(t) {
                return "number" == typeof t && isFinite(t)
            }

            function i(t) {
                return "string" == typeof t ? JSON.parse(t) : t
            }

            function n(t) {
                return null !== t && void 0 !== t && t.constructor === Function
            }

            function o(t, e) { t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), t.prototype.superclass = e }
            var s, a = Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };
            "undefined" != typeof window ? (s = window.TradingView = window.TradingView || {}, window.isNumber = e, window.isFunction = n, window.inherit = o, window.isArray = a) : s = this.TradingView = this.TradingView || {}, s.isNaN = function(t) {
                return !(t <= 0 || t > 0)
            }, s.isAbsent = function(t) {
                return null === t || void 0 === t
            }, s.isExistent = function(t) {
                return null !== t && void 0 !== t
            }, Number.isNaN = Number.isNaN || function(t) {
                return t != t
            }, s.isSameType = function(t, e) {
                return Number.isNaN(t) || Number.isNaN(e) ? Number.isNaN(t) === Number.isNaN(e) : {}.toString.call(t) === {}.toString.call(e)
            }, s.isInteger = function(t) {
                return "number" == typeof t && t % 1 === 0
            }, s.parseBool = function(t) {
                return t === !0 || "true" === t
            }, s.isBoolean = function(t) {
                return t === !0 || t === !1
            }, s.isString = function(t) {
                return null !== t && void 0 !== t && t.constructor === String
            }, s.declareClassAsPureInterface = function(t, e) {
                for (var i in t.prototype) "function" == typeof t.prototype[i] && t.prototype.hasOwnProperty(i) && (t.prototype[i] = function() {
                    throw Error(e + "::" + i + " is an interface member declaration and must be overloaded in order to be called")
                })
            }, s.requireFullInterfaceImplementation = function(t, e, i, n) {
                for (var o in i.prototype)
                    if ("function" == typeof i.prototype[o] && !t.prototype[o]) throw Error("Interface implementation assertion failed: " + e + " does not implement " + n + "::" + o + " function")
            }, s.isInherited = function(t, e) {
                return t === e || !(!t || !t.prototype) && (void 0 !== t.prototype.superclass && null !== t.prototype.superclass && (t.prototype.superclass === e || s.isInherited(t.prototype.superclass, e)))
            }, s.TypeValidator = function(t) { this.m_type = t }, s.TypeValidator.prototype.check = function(t) {
                return t.constructor === this.m_type || s.isInherited(t.constructor, this.m_type)
            }, s.PredicateValidator = function(t) { this.m_predicate = t }, s.PredicateValidator.prototype.check = function(t) {
                return this.m_predicate(t)
            }, s.clone = function(t) {
                var e, i, n;
                if (!t || "object" != typeof t) return t;
                e = "function" == typeof t.pop ? [] : {};
                for (i in t) t.hasOwnProperty(i) && (n = t[i], n && "object" == typeof n ? e[i] = s.clone(n) : e[i] = n);
                return e
            }, s.merge = function(t, e) {
                for (var i in e) "object" == typeof e[i] && t.hasOwnProperty(i) ? s.merge(t[i], e[i]) : t[i] = e[i];
                return t
            }, s.mergeObj = function(t, e) {
                for (var i in e) e[i].constructor === Object && t.hasOwnProperty(i) ? s.mergeObj(t[i], e[i]) : t[i] = e[i];
                return t
            }, s.mergeWithRules = function(t, e, i, n) {
                var o, a;
                for (o in e) a = n ? n + "." + o : o, i && a in i ? t[o] = i[a](t[o], e[o]) : "object" == typeof e[o] && t.hasOwnProperty(o) ? s.merge(t[o], e[o], i, a) : t[o] = e[o]
            }, void 0 !== t && t && t.exports && (t.exports = { inherit: o, clone: s.clone, merge: s.merge, isNumber: e, isInteger: s.isInteger, isBoolean: s.isBoolean, isString: s.isString, isNaN: s.isNaN, isAbsent: s.isAbsent, isExistent: s.isExistent, isSameType: s.isSameType, isArray: a, parseBool: s.parseBool, parseJSONorNot: i })
        }).call(e, i(7)(t))
    }, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {
        (function(t) {
            "use strict";
            var e = function() {
                return "www.tradingview.com" === location.host || "dwq4do82y8xi7.cloudfront.net" === location.host || "i18n.tradingview.com" === location.host || "new.tradingview.com" === location.host || location.host.match(/^[a-z]{2}\.tradingview\.com/) || location.host.match(/\w+-new\.tradingview.com/) || location.host.match(/proxy\d.tradingview.com/) || location.host.match(/prod-[^.]+.tradingview.com/) ? "battle" : location.href.indexOf("tradingview.com") !== -1 ? "staging" : location.host.match(/webcharts/) ? "staging_local" : ("" === location.host.match(/^localhost(:\d+)?$/), "local")
            };
            e.isLocal = function() {
                return "local" === this()
            }, e.isProd = function() {
                return "battle" === this()
            }, e.isDebug = function() {
                return !this.isProd()
            }, TradingView.Environment = e, void 0 !== t && t && t.exports && (t.exports = e)
        }).call(e, i(7)(t))
    }, function(t, e, i) {
        (function(t, e) {
            "use strict";
            var n = window.TVSettings = function() {
                function e(t) {
                    return E + "." + t
                }

                function o(t, e) {
                    var i;
                    return i = O[t], window.is_authenticated && !V || null != i || (i = O[t]), null == i ? e : i
                }

                function s(t, e) {
                    var i = o(t, void 0);
                    if (null == i) return e;
                    try {
                        return JSON.parse(i)
                    } catch (i) {
                        return u(t), e
                    }
                }

                function a(t, e) {
                    var i = o(t);
                    return null == i ? e : !(!i || "false" === i || 0 === +i)
                }

                function r(t, e, i) {
                    var n, s = o(t, void 0, i);
                    if (null == s) return e;
                    if (n = parseFloat(s), !isFinite(n)) throw new TypeError('"' + s + '" is not float (key: "' + t + '")');
                    return n
                }

                function l(t, e, i) {
                    var n, s = o(t, void 0, i);
                    if (null == s) return e;
                    if (n = parseInt(s, 10), !isFinite(n)) throw new TypeError('"' + s + '" is not int (key: "' + t + '")');
                    return n
                }

                function c(t, e, i) {
                    i = i || {};
                    var o = "" + e;
                    return O[t] !== o && (O[t] = o, p(t)), i.forceFlush && !I && (I = setTimeout(function() { I = void 0, f() }, x)), n
                }

                function d(t, e, i) {
                    var o = JSON.stringify(e);
                    return c(t, o, i), n
                }

                function u(t, e) {
                    return e = e || {}, null != O[t] && (delete O[t], p(t), TradingView.trackEvent("Settings debug", t, user.username)), e.forceFlush && f(), n
                }

                function h() { D = void 0, M.length && f() }

                function p(t) {
                    if (!window.is_authenticated || V) try { null == O[t] ? TVLocalStorage.removeItem(e(t)) : TVLocalStorage.setItem(e(t), O[t]) } catch (t) {} else M.push(t), D || (D = setTimeout(h, C));
                    A.emit("settings", JSON.stringify({ key: t, value: O[t] }))
                }

                function g() {
                    var t, e, i;
                    for (t = 0; t < TVLocalStorage.length; t++) e = TVLocalStorage.key(t), i = E.length, e.substring(0, i + 1) === E + "." && (M = [], TVLocalStorage.removeItem(e));
                    $.post("/restoredefaults/", {}, function(t) { TVDialogs.showNotice("Success", "Defaults has been successfully restored") }).error(function(t) {})
                }

                function m() {
                    return Object.keys(O)
                }

                function _(t, e) {
                    var i, n = m(e),
                        o = [];
                    for (t = RegExp("^" + TradingView.RegExpEscape(t).replace(/\\\*\\\*/gi, ".+").replace(/\\\*/gi, "[^.]+") + "$", "gi"), i = n.length - 1; i >= 0; i--) t.test(n[i]) && o.push(n[i]), t.lastIndex = 0;
                    return o
                }

                function v(t) {
                    for (var e = 0; e < P.length; ++e)
                        if (P[e].exec(t)) return !0;
                    return !1
                }

                function y() {
                    var e, i, n, o, s;
                    for (O = [], e = E + ".", i = "", n = TVLocalStorage.length; n--;) o = TVLocalStorage.key(n), o && o.substring(0, e.length) === e && (s = o.substring(e.length), i && !v(s) || (O[s] = TVLocalStorage.getItem(o)))
                }

                function b(t) {
                    var e, i, n, o, s;
                    for (O = [], e = 0 === Object.keys(t).length, i = E + ".", n = TVLocalStorage.length; n--;) o = TVLocalStorage.key(n), o && o.substring(0, i.length) === i && (e && (s = o.substring(i.length), c(s, TVLocalStorage.getItem(o))), TVLocalStorage.removeItem(o));
                    for (n in t) O[n] = t[n] + ""
                }

                function w(t) { window.is_authenticated && !V ? b(t || {}) : y() }
                var T, S, k, C, x, E, O, M, D, I, P, A = i(34),
                    L = !1,
                    V = "";
                try { L = !TradingView.onWidget() && parent && parent !== window && !!parent.IS_DEMO_PAGE } catch (t) {}
                return L ? (T = { "widgetbar.layout-settings": { widgets: {}, settings: { minimized: !0 } }, notShowMainWizard: !0 }, S = function(t, e, i) {
                    var n = T[t];
                    return null == n ? e : n
                }, k = function() {}, {
                    loaded: !1,
                    loadedModel: !1,
                    getValue: S,
                    getJSON: S,
                    getBool: S,
                    getFloat: S,
                    getInt: S,
                    setValue: k,
                    setJSON: k,
                    remove: k,
                    restoreDefaults: k,
                    keys: function() {
                        return Object.keys(T)
                    },
                    keysMask: function() {
                        return []
                    },
                    sync: k
                }) : (C = 12e4, x = 10, "local" === window.environment && (C = 5e3), E = "tradingview", O = {}, M = [], P = [/^widgetbar\.widget\.watchlist.+/, /.+quicks$/, /^widgetbar\.layout-settings$/, /^ChartSideToolbarWidget\.visible$/, /^onwidget\.watchlist^/], A.on("settings", function(t) {
                    var e = JSON.parse(t);
                    null == e.value ? delete O[e.key] : O[e.key] = e.value
                }), $(window).on("visibilitychange", function(t, e) {}), $(window).on("unload", function() { f(!0) }), { loaded: !1, loadedModel: !1, getValue: o, getJSON: s, getBool: a, getFloat: r, getInt: l, setValue: c, setJSON: d, remove: u, restoreDefaults: g, keys: m, keysMask: _, sync: w })
            }();
            void 0 !== e && e && e.exports && (e.exports = n)
        }).call(e, i(23), i(7)(t))
    }, function(t, e, i) {
        (function(t) {
            "use strict";
            var e, i = "tvxwevents.",
                n = {},
                o = $.browser.msie || /\btrident\b/i.test(navigator.userAgent);
            $(window).on("storage", function(t) {
                if (null !== t.originalEvent.newValue) {
                    var s = t.originalEvent.key;
                    if (s.startsWith(i)) return s = s.substr(i.length), o && e._emitting ? void(e._emitting = !1) : void(n[s] && n[s].forEach(function(e) { e.call(t.originalEvent.newValue, t.originalEvent.newValue) }))
                }
            }), e = window.TVXWindowEvents = {
                on: function(t, e) { n[t] || (n[t] = []), n[t].push(e) },
                off: function(t, e) {
                    if (n[t]) {
                        var i = n[t].indexOf(e);
                        i !== -1 && (1 === n[t].length ? delete n[t] : n[t].splice(i, 1))
                    }
                },
                current: function(t) {
                    return TVLocalStorage.getItem(i + t)
                },
                emit: function(t, n) { void 0 === n && (n = +new Date), n !== TVLocalStorage.getItem(i + t) && (o && (e._emitting = !0), TVLocalStorage.setItem(i + t, n)) }
            }, void 0 !== t && t && t.exports && (t.exports = e)
        }).call(e, i(7)(t))
    }, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e, i) {
        (function(t, e) {
            "use strict";

            function n() { this._socket = null, this._notificationHandlers = [], this._sessions = [], this._protocol = "json", this._dataHandleModule = new d, this.studyCounter = 0, this.childStudyCounter = 0 }
            var o, s, a, r, l, c, d, u, h, p = 1,
                f = 2;
            a = i(42), o = a.ChartApiInterface, s = a.HandlerInfo, r = i(43), l = i(32), c = i(45), d = i(46), u = i(47), i(57), h = i(60).goProDialog, n.prototype.defaultWatchlistSymbols = function() {
                var t
            }, n.prototype.availableTimeFrames = function(t, e) {}, n.prototype.defaultResolutions = function() {}, n.prototype.supportedSymbolsTypes = function() {}, n.prototype.supportedExchangesList = function() {}, n.prototype.futuresRegex = function() {
                return /^(.+?)([12]!|\w\d{4})?$/
            }, n.prototype.enableLowQualityMode = function() {
                return this._sendRequest("set_data_quality", this._dataHandleModule.enableLowQualityMode())
            }, n.prototype.setLoadNew = function(t) { this._loadNewBars = !!t }, n.prototype.quoteCreateSession = function(t) {
                return this._sendRequest("quote_create_session", this._dataHandleModule.quoteCreateSession(t))
            }, n.prototype.quoteDeleteSession = function(t) {
                return this._sendRequest("quote_delete_session", this._dataHandleModule.quoteDeleteSession(t))
            }, n.prototype.quoteSetFields = function(t, e) {
                return this._sendRequest("quote_set_fields", this._dataHandleModule.quoteSetFields(t, e))
            }, n.prototype.quoteAddSymbols = function(t, e) {
                return this._sendRequest("quote_add_symbols", this._dataHandleModule.quoteAddSymbols(t, e))
            }, n.prototype.quoteRemoveSymbols = function(t, e) {
                return this._sendRequest("quote_remove_symbols", this._dataHandleModule.quoteRemoveSymbols(t, e))
            }, n.prototype.quoteFastSymbols = function(t, e) {
                return this._sendRequest("quote_fast_symbols", this._dataHandleModule.quoteFastSymbols(t, e))
            }, n.prototype.quoteHibernateAll = function(t) {
                return this._sendRequest("quote_hibernate_all", this._dataHandleModule.quoteHibernateAll(t))
            }, n.prototype.depthCreateSession = function(t, e, i) {
                return this._sendRequest("depth_create_session", this._dataHandleModule.depthCreateSession(t, e, i))
            }, n.prototype.depthDeleteSession = function(t) {
                return this._sendRequest("depth_delete_session", this._dataHandleModule.depthDeleteSession(t))
            }, n.prototype.depthSetSymbol = function(t, e) {
                return this._sendRequest("depth_set_symbol", this._dataHandleModule.depthSetSymbol(t, e))
            }, n.prototype.depthClearSymbol = function(t) {
                return this._sendRequest("depth_clear_symbol", this._dataHandleModule.depthClearSymbol(t))
            }, n.prototype.depthSetScale = function(t, e) {
                return this._sendRequest("depth_set_scale", this._dataHandleModule.depthSetScale(t, e))
            }, n.prototype.chartCreateSession = function(t, e) {
                return this._sendRequest("chart_create_session", this._dataHandleModule.chartCreateSession(t, e))
            }, n.prototype.chartDeleteSession = function(t) {
                return this._sendRequest("chart_delete_session", this._dataHandleModule.chartDeleteSession(t))
            }, n.prototype.createSession = function(t, e) { this._sessions[t] = e, this._notificationHandlers[t] = e, this.connected() && e.onMessage({ method: "connected", params: [] }) }, n.prototype.removeSession = function(t) { delete this._sessions[t], delete this._notificationHandlers[t], this.chartDeleteSession(t) }, n.prototype.connected = function() {
                return !!this._isConnected
            }, n.prototype._getHost = function(t) {
                return "" && window.pro && window.pro.hasPaidSubscription() && ("staging" === window.environment || "battle" === window.environment) && (!this._reconnectCount || this._reconnectCount < 3) && window.location.href.indexOf("ws_host") === -1 ? "prodata.tradingview.com" : "widgetdata.tradingview.com" === t && this._reconnectCount > 3 ? "data.tradingview.com" : t
            }, n.prototype._isSafari5 = function() {
                return !!navigator.appVersion.match(/\/5\.[^\/]*?Safari\//)
            }, n.prototype._isIE9 = function() {
                return !!navigator.appVersion.match(/MSIE 9/)
            }, n.prototype._isIOS5 = function() {
                return !!navigator.appVersion.match(/iPad, CPU 5/)
            }, n.prototype._getPort = function(t) {
                var e = 8081;
                return this._isSafari5() || this._isIE9() ? e : t
            }, n.prototype._isWidget = function() {
                return window.WEBSOCKET_HOST && "widgetdata.tradingview.com" === window.WEBSOCKET_HOST
            }, n.prototype.serverTimeOffset = function() {
                return this._serverTimeOffset ? this._serverTimeOffset : 0
            }, n.disconnectReason = function(t) {
                return 1e3 === t ? "Normal closure, meaning that the purpose for which the connection was established has been fulfilled." : 1001 === t ? 'An endpoint is "going away", such as a server going down or a browser having navigated away from a page.' : 1002 === t ? "An endpoint is terminating the connection due to a protocol error" : 1003 === t ? "An endpoint is terminating the connection because it has received a type of data it cannot accept (e.g., an endpoint that understands only text data MAY send this if it receives a binary message)." : 1004 === t ? "Reserved. The specific meaning might be defined in the future." : 1005 === t ? "No status code was actually present." : 1006 === t ? "The connection was closed abnormally, e.g., without sending or receiving a Close control frame" : 1007 === t ? "An endpoint is terminating the connection because it has received data within a message that was not consistent with the type of the message (e.g., non-UTF-8 [http://tools.ietf.org/html/rfc3629] data within a text message)." : 1008 === t ? 'An endpoint is terminating the connection because it has received a message that "violates its policy". This reason is given either if there is no other sutible reason, or if there is a need to hide specific details about the policy.' : 1009 === t ? "An endpoint is terminating the connection because it has received a message that is too big for it to process." : 1010 === t ? "An endpoint (client) is terminating the connection because it has expected the server to negotiate one or more extension, but the server didn't return them in the response message of the WebSocket handshake. <br /> Specifically, the extensions that are needed are: " + event.reason : 1011 === t ? "A server is terminating the connection because it encountered an unexpected condition that prevented it from fulfilling the request." : 1015 === t ? "The connection was closed due to a failure to perform a TLS handshake (e.g., the server certificate can't be verified)." : "Unknown reason"
            }, n.prototype._getAuthTokenDfd = function(e) {
                var i, n;
                if (this._loadNewBars) return $.Deferred().resolve("load_new_token");
                if (this._isWidget() || window.location.href.indexOf("widget_token") !== -1) {
                    if (window.TradingView) {
                        if ("smartlab" === TradingView.widgetCustomer) return $.Deferred().resolve("widget_user_token-smartlab");
                        if ("seekingalpha" === TradingView.widgetCustomer) return $.Deferred().resolve("widget_user_token-seekingalpha")
                    }
                    return $.Deferred().resolve("widget_user_token")
                }
                return window.is_authenticated ? t.enabled("widget") ? $.Deferred().resolve() : (i = this, i._authTokenManager || (n = new r, i._authTokenManager = n, i._authTokenManager.invalidated.subscribe(null, function(t) { i._authTokenManager.get().done(function(t) { t && i.connected() && i._sendRequest("set_auth_token", i._dataHandleModule.setAuthToken(t)) }) })), i._authTokenManager.get(e)) : $.Deferred().resolve("unauthorized_user_token")
            }, n.prototype.connect = function(t) {
                var e, i, o, s, a, r;
                if (t = t || {}, !this._socket) return e = this, i = "https:" === location.protocol && io.Transport.websocket.check(), o = this.connectDfd = $.Deferred(), s = this._getAuthTokenDfd(t.tokenGrabSession), a = this._getHost(window.WEBSOCKET_HOST), r = this._getPort(window.WEBSOCKET_PORT), TradingView.logNormal("Connecting to " + a + ":" + r), e._socket = new io.Socket(a, { port: r, rememberTransport: !1, secure: i, websocket_type: p }), e._socket._tv_messageQueue = [], e._socket.connect(), e._socket.on("connect", function() {
                    var t, i, n;
                    if (e._socket && e._socket.transport.sessionid) {
                        if (e._isConnected = !0, e.sessionid = e._socket.transport.sessionid, TradingView.logNormal("connect session:" + e.sessionid, null, !0), t = JSON.parse(e.sessionid), "" && t.protocol && (i = JSON.stringify({ m: "switch_protocol", p: ["protobuf"] }), TradingView.logNormal("Switch webchart protocol to protobuf", null, !0), e._dataHandleModule = new u, e._protocol = "protobuf", e._socket.send(i), e._socket.transport.switchWebsocketMode(f)), t.redirect) return void(window.WEBSOCKET_HOST = t.redirect);
                        e._metadataServerHash = t.studies_metadata_hash || null;
                        try { n = t.timestamp - (new Date).valueOf() / 1e3, e._serverTimeOffset = n } catch (t) { e._serverTimeOffset = 0 }
                        TradingView.logNormal("Time shift with server:" + Math.round(e._serverTimeOffset) + " seconds.", null, !0), s && s.done(function(t) {
                            var i, n;
                            if (s = null, i = e._socket._tv_messageQueue, delete e._socket._tv_messageQueue, t && e._sendRequest("set_auth_token", e._dataHandleModule.setAuthToken(t)), i) {
                                for (n = 0; n < i.length; n++) e._sendRequest(i[n][0], i[n][1]);
                                i = null
                            }
                            e._notifySessions({ method: "connected", params: [] })
                        }), TradingView.WEB_SOCKET_WAS_CONNECTED = !0, delete e._reconnectCount, clearTimeout(e._telemetryDisconnectTimeout), o.resolve()
                    }
                }), e._socket.on("message", function(t) { e._onMessage(t) }), e._socket.on("disconnect", function(t) {
                    var i, s, a;
                    if (delete e._isConnected, e.studyCounter = 0, TradingView.logNormal("disconnect session:" + e.sessionid + ", code:" + t.code + ", reason:" + t.reason + ", client reason:" + n.disconnectReason(t.code), null, !0), 1e3 !== t.code && (TradingView.logNormal("sending telemetry error due to abnormal disconnecting", null, !0), c.sendReport("websocket_error", { code: t.code, reason: t.reason, clientReason: n.disconnectReason(t.code) }, !0)), e._notifySessions({ method: "disconnected", params: [] }), i = !e._socket, delete e._socket, delete e._metadataCallback, this && this._events)
                        for (s in this._events) delete this._events[s];
                    if (e._disconnectCount = (e._disconnectCount || 0) + 1, !i)
                        if (e._telemetryDisconnectTimeout = setTimeout(function() { c.sendReport("disconnect", { reason: t.reason, code: t.code }, !0) }, 5e3), e._reconnectCount = (e._reconnectCount || 0) + 1, e._reconnectCount >= e.MAX_RECONNECTS) e._notifySessions({ method: "reconnect_bailout", params: [] }), o.reject();
                        else {
                            switch (typeof e.reconnectTimeout) {
                                case "function":
                                    a = e.reconnectTimeout(e._reconnectCount);
                                    break;
                                case "number":
                                    a = e.reconnectTimeout;
                                    break;
                                default:
                                    a = 3e3
                            }
                            setTimeout(function() { e.connected() || e.connect() }, a)
                        }
                }), e._socket.on("error", function(t) { TradingView.logNormal(new Date + " session:" + e.sessionid + " websocket error:" + t, null, !0), c.sendReport("websocket_error", {}, !0) }), o
            }, n.prototype.disconnect = function(t) {
                if (this._socket) {
                    var e = this._socket;
                    delete this._socket, e.disconnect()
                }
                return !0
            }, n.prototype.switchTimezone = function(t, e) {
                return this._sendRequest("switch_timezone", this._dataHandleModule.switchTimezone(t, e))
            }, n.prototype.resolveSymbol = function(t, e, i, n) {
                return this._notificationHandlers[t][e] = new s(n, e), this._sendRequest("resolve_symbol", this._dataHandleModule.resolveSymbol(t, e, i))
            }, n.prototype.createSeries = function(t, e, i, n, o, a, r) {
                return this._notificationHandlers[t][e] = new s(r, e), this._sendRequest("create_series", this._dataHandleModule.createSeries(t, e, i, n, o, a))
            }, n.prototype.removeSeries = function(t, e, i) {
                return this._notificationHandlers[t][e] = new s(i, e), this._sendRequest("remove_series", this._dataHandleModule.removeSeries(t, e))
            }, n.prototype.modifySeries = function(t, e, i, n, o, a) {
                return this._notificationHandlers[t][e] = new s(a, e), this._sendRequest("modify_series", this._dataHandleModule.modifySeries(t, e, i, n, o))
            }, n.prototype.requestMoreData = function(t, e, i, n) {
                return this._notificationHandlers[t][e] = new s(n, e), this._sendRequest("request_more_data", this._dataHandleModule.requestMoreData(t, e, i))
            }, n.prototype.requestMetadata = function(e, i, n) {
                var o, s, a, r, l = this;
                return l._metadataCallback ? void l._metadataCallback.handlers.push(n) : (o = t.enabled("widget"), s = o ? "studies_metadata_widget" : "studies_metadata", a = "pro_hash", r = [], l._metadataCallback = function(t) {
                    var e, i;
                    for (l._metadataCallback = null, TVLocalForage.setItem(s, TradingView.clone(t)).then(function() {
                            if (TradingView.logNormalChart("Updated studies_metadata cache"), !o) {
                                var t = pro.hash();
                                TVLocalForage.setItem(a, TradingView.clone(t)).then(function() { TradingView.logNormalChart("Updated pro_hash cache") }).catch(function(t) { TradingView.logError("Cannot update pro_hash cache, reason: " + t) })
                            }
                        }).catch(function(t) { TradingView.logError("Cannot update studies_metadata cache, reason: " + t) }), e = 0; e < r.length; e++)(i = r[e])(TradingView.clone(t))
                }, l._metadataCallback.handlers = r, l._metadataCallback.handlers.push(n), void TVLocalForage.getItem(a).then(function(t) {
                    var n = pro.hash();
                    null !== t && t === n || o ? TVLocalForage.getItem(s).then(function(t) {
                        var n, o, s = null !== t && t.params[1].hash || null;
                        if (null === s || null === l._metadataServerHash || l._metadataServerHash !== s) TradingView.logNormalChart("Metadata hash has changed (cached:'" + s + "', server:'" + l._metadataServerHash + "'')"), l._requestMetadataFromServer(e, i, l._metadataCallback);
                        else {
                            if (TradingView.logNormalChart("Using studies_metadata from browser cache"), !l._metadataCallback) return;
                            for (n = 0; n < l._metadataCallback.handlers.length; n++)(o = l._metadataCallback.handlers[n])(TradingView.clone(t));
                            l._metadataCallback = null
                        }
                    }).catch(function(t) { TradingView.logError("Cannot get studies_metadata, reason: " + t), l._requestMetadataFromServer(e, i, l._metadataCallback) }) : (TradingView.logNormalChart("Pro hash has changed (cached: '" + t + "', current:'" + n + "')"), l._requestMetadataFromServer(e, i, l._metadataCallback))
                }).catch(function(t) { TradingView.logError("Cannot get studies_metadata, reason: " + t), l._requestMetadataFromServer(e, i, l._metadataCallback) }))
            }, n.prototype._requestMetadataFromServer = function(t, e, i) {
                return !!i && (TradingView.logNormalChart("Request studies_metadata from server"), this._notificationHandlers[t][e] = new s(i, e), this._sendRequest("request_studies_metadata", this._dataHandleModule.requestMetadataFromServer(t, e)))
            }, n.prototype.isCanCreateStudy = function(t, e) {
                return t === !0 ? this.childStudyCounter < TradingView.CHILD_STUDY_COUNT_LIMIT : this.studyCounter < TradingView.STUDY_COUNT_LIMIT
            }, n.prototype.createStudy = function(t, e, i, n, o, a, r, l) {
                if (!this.isCanCreateStudy()) return TVDialogs.showTooManyStudiesNotice(), !1;
                this._notificationHandlers[t][e] = new s(r, e);
                var c = this._sendRequest(l === !0 ? "create_child_study" : "create_study", this._dataHandleModule.createStudy(t, e, i, n, o, a));
                return c !== !1 && (this.studyCounter++, l && this.childStudyCounter++, c)
            }, n.prototype.rebindStudy = function(t, e, i, n, a, r, l, c) {
                if (c === o.REBIND_STUDY_STANDALONE_TO_CHILD) {
                    if (!this.isCanCreateStudy(!0)) return h({ feature: "studyOnStudy" }).open(), !1;
                    this.childStudyCounter++
                } else c === o.REBIND_STUDY_CHILD_TO_STANDALONE && this.childStudyCounter--;
                return i = i || "", this._notificationHandlers[t][e] = new s(l, e), this._sendRequest("child_study_rebind", this._dataHandleModule.child_study_rebind(t, e, i, n, a, r)), !0
            }, n.prototype.removeStudy = function(t, e, i, n) {
                this._notificationHandlers[t][e] = new s(i, e);
                var o = this._sendRequest("remove_study", this._dataHandleModule.removeStudy(t, e));
                return o !== !1 && (this.studyCounter--, n && this.childStudyCounter--, o)
            }, n.prototype.modifyStudy = function(t, e, i, n, o) {
                return this._notificationHandlers[t][e] = new s(o, e), this._sendRequest("modify_study", this._dataHandleModule.modifyStudy(t, e, i, n))
            }, n.prototype.createPointset = function(t, e, i, n, o, a, r) {
                return this._notificationHandlers[t][e] = new s(r, e), this._sendRequest("create_pointset", this._dataHandleModule.createPointset(t, e, i, n, o, a))
            }, n.prototype.modifyPointset = function(t, e, i, n, o) {
                return this._notificationHandlers[t][e] = new s(o, e), this._sendRequest("modify_pointset", this._dataHandleModule.modifyPointset(t, e, i, n))
            }, n.prototype.removePointset = function(t, e, i) {
                return this._notificationHandlers[t][e] = new s(i, e), this._sendRequest("remove_pointset", this._dataHandleModule.removePointset(t, e))
            }, n.prototype.requestMoreTickmarks = function(t, e, i, n) {
                return this._notificationHandlers[t][e] = new s(n, e), this._sendRequest("request_more_tickmarks", this._dataHandleModule.requestMoreTickmarks(t, e, i))
            }, n.prototype.requestFirstBarTime = function(t, e, i, n) {
                return this._notificationHandlers[t][e] = new s(n, e), this._sendRequest("get_first_bar_time", this._dataHandleModule.requestFirstBarTime(t, e, i))
            }, n.prototype.reconnectCount = function() {
                return this._reconnectCount || 0
            }, n.prototype.disconnectCount = function() {
                return this._disconnectCount || 0
            }, n.prototype._invokeHandler = function(t, e) { t && t(e) }, n.prototype._sendRequest = function(t, e) {
                var i, n, o;
                return !!this._socket && (this._socket._tv_messageQueue ? (this._socket._tv_messageQueue.push([t, e]), !0) : (i = { m: t, p: e }, this.requestHook && this.requestHook(i), n = JSON.stringify(i), ("json" === this._protocol ? e.length > 0 : e.session) && (("json" === this._protocol ? e[0].startsWith("qs_") : e.session.startsWith("qs_")) ? (TradingView.logNormalQuote("send: " + n, !1, !1, !0), TradingView.logNormalQuote("\n")) : (TradingView.logNormalChart("send: " + n), TradingView.logNormalChart("\n"))), o = this._dataHandleModule.prepareEncodeMessage(t, e), this._socket.send(o), !0))
            }, n.prototype._onMessage = function(t) {
                var e = this.unpack(t);
                this._dispathNotification(e, t)
            }, n.prototype._convertTimescaleResponse = function(t) {
                return this._dataHandleModule.convertTimescaleResponse(t)
            }, n.prototype._dispathNotification = function(t, e) {
                var i, n, o, s, a, r, l = t.params.shift();
                if (this._notificationHandlers[l]) switch (l.startsWith("cs_") && (TradingView.logNormalChart("recv: " + this._protocol == "json" ? e : JSON.stringify({ m: t.m, p: t.p }), null, ["data_update"].indexOf(t.method) !== -1), TradingView.logNormalChart("\n")), l.startsWith("qs_") && (TradingView.logNormalQuote("recv: " + this._protocol == "json" ? e : JSON.stringify({ m: t.m, p: t.p }), null, ["qsd"].indexOf(t.method) !== -1, !0), TradingView.logNormalQuote("\n")), t.method) {}
            }, n.prototype._invokeNotificationHandler = function(t, e, i) {
                if (void 0 !== e) {
                    var n = this._notificationHandlers[t][e];
                    void 0 !== n && this._invokeHandler(n.handler, i), "series_deleted" !== i.method && "study_deleted" !== i.method || delete this._notificationHandlers[t][e]
                }
            }, n.prototype._notifySessions = function(t) {
                var e, i;
                for (e in this._sessions) {
                    if (!this._sessions.hasOwnProperty(e)) return;
                    i = this._sessions[e], "function" == typeof i.onMessage && i.onMessage(t)
                }
            }, n.prototype.unpack = function(t) {
                return this._dataHandleModule.unpack(t)
            }, n.prototype.MAX_RECONNECTS = 20, n.prototype.RECONNECT_DELAY_RANGE = 1e4, n.prototype.RECONNECT_DELAY = Math.round(Math.random() * n.prototype.RECONNECT_DELAY_RANGE), n.prototype.reconnectTimeout = function(t) {
                return 6e3 * (t - 1) + this.RECONNECT_DELAY
            }, n.prototype._symbolSearchRequest = null, n.prototype.searchSymbols = function(t, e, n, o, s) {
                var a, r, c, d, u = this;
                this._symbolSearchRequest && this._symbolSearchRequest.abort(), a = location.protocol + "//" + this._getHost(window.WEBSOCKET_HOST), a += l.isProd() ? "/search/" : "/local_search/", window.SS_HOST && (a = location.protocol + "//" + window.SS_HOST + "/search/"), window.SS_URL && (a = window.SS_URL), r = { type: "GET", dataType: "json", url: a, data: { text: t, exchange: e, type: n } }, c = i(136), n === c.QUANDL && (r = { type: "GET", url: "https://www.quandl.com/api/v3/datasets.json", data: { query: t, database_code: e, api_key: c.QUANDL_API_KEY } }), d = this._symbolSearchRequest = $.ajax(r).done(function(t) { s && s(t) }).always(function() { u._symbolSearchRequest === d && delete u._symbolSearchRequest })
            }, n.prototype.getMarks = function(t, e, i, n, o) {
                throw Error("This method is not implemented")
            }, n.prototype.getTimescaleMarks = function(t, e, i, n, o) {
                throw Error("This method is not implemented")
            }, TradingView.requireFullInterfaceImplementation(n, "TVChartApi", o, "ChartApiInterface"), window.ChartApiInstance = new n, void 0 !== e && e && e.exports && (e.exports = n)
        }).call(e, i(23), i(7)(t))
    }, function(t, e, i) {
        "use strict";

        function n(t, e) { this.handler = t, this.customId = e, this.requestHook = null }

        function o() {}
        TradingView.WEB_SOCKET_WAS_CONNECTED = !1, TradingView.STUDY_COUNT_LIMIT = 120, TradingView.CHILD_STUDY_COUNT_LIMIT = "undefined" != typeof user && user.is_pro ? 1 / 0 : 1, o.REBIND_STUDY_STANDALONE_TO_CHILD = 1, o.REBIND_STUDY_CHILD_TO_STANDALONE = 2, o.prototype.defaultWatchlistSymbols = function() {}, o.prototype.availableTimeFrames = function(t, e) {}, o.prototype.defaultResolutions = function() {}, o.prototype.supportedSymbolsTypes = function() {}, o.prototype.supportedExchangesList = function() {}, o.prototype.futuresRegex = function() {}, o.prototype.quoteCreateSession = function(t) {}, o.prototype.quoteDeleteSession = function(t) {}, o.prototype.quoteSetFields = function(t, e) {}, o.prototype.quoteAddSymbols = function(t, e) {}, o.prototype.quoteRemoveSymbols = function(t, e) {}, o.prototype.quoteFastSymbols = function(t, e) {}, o.prototype.depthCreateSession = function(t, e, i) {}, o.prototype.depthDeleteSession = function(t) {}, o.prototype.depthSetSymbol = function(t, e) {}, o.prototype.depthClearSymbol = function(t) {}, o.prototype.depthSetScale = function(t, e) {}, o.prototype.chartCreateSession = function(t, e) {}, o.prototype.chartDeleteSession = function(t) {}, o.prototype.createSession = function(t, e) {}, o.prototype.removeSession = function(t) {}, o.prototype.connected = function() {}, o.prototype._getHost = function(t) {}, o.prototype.connect = function() {}, o.prototype.disconnect = function() {}, o.prototype.switchTimezone = function(t, e) {}, o.prototype.resolveSymbol = function(t, e, i, n, o) {}, o.prototype.createSeries = function(t, e, i, n, o, s, a) {}, o.prototype.removeSeries = function(t, e, i) {}, o.prototype.modifySeries = function(t, e, i, n, o, s) {}, o.prototype.requestMoreData = function(t, e, i, n) {}, o.prototype.requestMetadata = function(t, e, i) {}, o.prototype.isCanCreateStudy = function(t, e) {}, o.prototype.createStudy = function(t, e, i, n, o, s, a) {}, o.prototype.rebindStudy = function(t, e, i, n, o, s, a, r) {}, o.prototype.removeStudy = function(t, e, i) {}, o.prototype.modifyStudy = function(t, e, i, n, o) {}, o.prototype.createPointset = function(t, e, i, n, o, s, a) {}, o.prototype.modifyPointset = function(t, e, i, n, o) {}, o.prototype.removePointset = function(t, e, i) {}, o.prototype.requestMoreTickmarks = function(t, e, i, n) {}, o.prototype.requestFirstBarTime = function(t, e, i, n) {}, o.prototype._invokeHandler = function(t, e) {}, o.prototype._sendRequest = function(t, e) {}, o.prototype._onMessage = function(t) {}, o.prototype._convertTimescaleResponse = function(t) {}, o.prototype._dispathNotification = function(t) {}, o.prototype._invokeNotificationHandler = function(t, e, i) {}, o.prototype._notifySessions = function(t) {}, o.prototype.unpack = function(t) {}, o.prototype.reconnectTimeout = function(t) {}, o.prototype.searchSymbols = function(t) {}, o.prototype.serverTimeOffset = function() {}, o.prototype._isSafari5 = function() {}, o.prototype._isIE9 = function() {}, o.prototype._isIOS5 = function() {}, o.prototype._getPort = function(t) {}, o.prototype.getMarks = function(t, e, i, n, o) {}, o.prototype.getTimescaleMarks = function(t, e, i, n, o) {}, TradingView.declareClassAsPureInterface(o, "ChartApiInterface"), TradingView.ChartApiInterface = o, TradingView.HandlerInfo = n, e.HandlerInfo = n, e.ChartApiInterface = o
    }, function(t, e, i) {}, function(t, e, i) {
        (function(t) {
            "use strict";

            function e() { this._listeners = [] }
            e.prototype.subscribe = function(t, e, i) {
                var n = { object: t, member: e, singleshot: !!i };
                this._listeners.push(n)
            }, e.prototype.unsubscribe = function(t, e) {
                var i, n;
                for (i = 0; i < this._listeners.length; ++i)
                    if (n = this._listeners[i], n.object === t && n.member.prototype === e.prototype) {
                        this._listeners.splice(i, 1);
                        break
                    }
            }, e.prototype.unsubscribeAll = function(t) {
                var e, i;
                for (e = 0; e < this._listeners.length; ++e)
                    if (i = this._listeners[e], i.object === t) {
                        this._listeners.splice(e, 1);
                        break
                    }
            }, e.prototype.fire = function() {
                var t, e, i = this._listeners.slice();
                for (t = 0; t < i.length; ++t) e = i[t], e.member.apply(e.object || null, arguments);
                for (t = this._listeners.length - 1; t >= 0; t--) this._listeners[t].singleshot && this._listeners.splice(t, 1)
            }, "undefined" != typeof window && (window.Delegate = e), void 0 !== t && t && t.exports && (t.exports = e)
        }).call(e, i(7)(t))
    }, function(t, e, i) {}, function(t, e) {
        "use strict";
        var i = function() {
            this.enableLowQualityMode = function() {
                return ["low"]
            }, this.quoteCreateSession = function(t) {
                return [t]
            }, this.quoteDeleteSession = function(t) {
                return [t]
            }, this.quoteSetFields = function(t, e) {
                return [t].concat(e)
            }, this.quoteAddSymbols = function(t, e) {
                return [t].concat(e)
            }, this.quoteRemoveSymbols = function(t, e) {
                return [t].concat(e)
            }, this.quoteFastSymbols = function(t, e) {
                return [t].concat(e)
            }, this.quoteHibernateAll = function(t) {
                return [t]
            }, this.depthCreateSession = function(t, e, i) {
                return [t, e, i]
            }, this.depthDeleteSession = function(t) {
                return [t]
            }, this.depthSetSymbol = function(t, e) {
                return [t, e]
            }, this.depthClearSymbol = function(t) {
                return [t]
            }, this.depthSetScale = function(t, e) {
                return [t, e]
            }, this.chartCreateSession = function(t, e) {
                return [t, e ? "disable_statistics" : ""]
            }, this.chartDeleteSession = function(t) {
                return [t]
            }, this.setAuthToken = function(t) {
                return [t]
            }, this.switchTimezone = function(t, e) {
                return [t, e]
            }, this.resolveSymbol = function(t, e, i) {
                return [t, e, i]
            }, this.createSeries = function(t, e, i, n, o, s) {
                return i = i || "", [t, e, i, n, o, s]
            }, this.removeSeries = function(t, e) {
                return [t, e]
            }, this.modifySeries = function(t, e, i, n, o) {
                return i = i || "", [t, e, i, n, o]
            }, this.requestMoreData = function(t, e, i) {
                return [t, e, i]
            }, this.requestMetadataFromServer = function(t, e) {
                return [t, e]
            }, this.createStudy = function(t, e, i, n, o, s) {
                return i = i || "", [t, e, i, n, o].concat(s)
            }, this.child_study_rebind = function(t, e, i, n, o, s) {
                return i = i || "", [t, e, i, n, o].concat(s)
            }, this.removeStudy = function(t, e) {
                return [t, e]
            }, this.modifyStudy = function(t, e, i, n) {
                return i = i || "", [t, e, i].concat(n)
            }, this.createPointset = function(t, e, i, n, o, s) {
                return i = i || "", [t, e, i, n, o].concat(s)
            }, this.modifyPointset = function(t, e, i, n) {
                return i = i || "", [t, e, i].concat(n)
            }, this.removePointset = function(t, e) {
                return [t, e]
            }, this.requestMoreTickmarks = function(t, e, i) {
                return [t, e, i]
            }, this.requestFirstBarTime = function(t, e, i) {
                return [t, e, i]
            }, this.convertTimescaleResponse = function(t) {
                var e, i = t.marks;
                for (e = 0; e < i.length; ++e) i[e] = { span: i[e][0], time: i[e][1], index: i[e][2] };
                return t
            }, this.getTimescaleObjects = function(t) {
                return t.params[0]
            }, this.getTimescaleChangeset = function(t) {
                return t.params[1]
            }, this.prepareTimescaleUpdate = function(t, e, i) {
                var n, o, s;
                for (n in e) o = {}, o.customId = n, o.plots = e[n].series, e[n].ns && (o.nonseries = e[n].ns), o.turnaround = e[n].turnaround, s = { method: "data_update", params: o }, i(t, n, s)
            }, this.prepareDataUpdate = function(t, e, i) {
                var n, o, s, a, r, l;
                for (n in e.params[0]) {
                    o = e.params[0][n], s = {}, s.customId = n, s.plots = o.series ? o.series : o.plots, s.turnaround = o.turnaround, "s" in o && "ns" in o && (s.plots = o.s, s.nonseries = o.ns);
                    for (a in s.plots)
                        for (r in s.plots[a].value) 1e100 === s.plots[a].value[r] && (s.plots[a].value[r] = void 0);
                    l = { method: "data_update", params: s }, i(t, n, l)
                }
            }, this.unpack = function(t) {
                function e(t) {
                    return t.index = t.i, t.value = t.v, t
                }
                var i, n;
                switch (t = JSON.parse(t), t.m && t.p && (t.method = t.m, t.params = t.p), i = t.params[1], t.method) {
                    case "qsd":
                        t.method = "quote_symbol_data", i.symbolname = i.n, i.status = i.s, i.values = i.v, i.values.change = i.v.ch, i.values.last_price = i.v.lp, i.values.change_percent = i.v.chp;
                        break;
                    case "du":
                        t.method = "data_update";
                        for (n in i) i[n].turnaround = i[n].t, i[n].s && !i[n].series && (i[n].series = i[n].s.map(e)), i[n].st && (i[n].s = i[n].st.map(e));
                        break;
                    case "timescale_update":
                        for (n in i) i[n].t && (i[n].turnaround = i[n].t), i[n].s && !i[n].series && (i[n].series = i[n].s.map(e)), i[n].st && (i[n].s = i[n].st.map(e))
                }
                return t
            }, this.prepareEncodeMessage = function(t, e) {
                return JSON.stringify({ m: t, p: e })
            }
        };
        t.exports = i
    }, function(t, e, i) {}, function(t, e, i) {}, , , , , , , , function(t, e) {}, function(t, e, i) {}, , function(t, e) {
        "use strict";
        var i, n = function() {
            try { this.isAvailable = !0, this.localStorage = window.localStorage, this.localStorage.setItem("tvlocalstorage.available", "true") } catch (t) { delete this.isAvailable, delete this.localStorage }
            this._updateLength()
        };
        n.prototype.length = 0, n.prototype.isAvailable = !1, n.prototype.localStorage = { "tvlocalstorage.available": "false" }, n.prototype._updateLength = function() {
            var t, e;
            if (this.isAvailable) this.length = this.localStorage.length;
            else {
                t = 0;
                for (e in this.localStorage) this.localStorage.hasOwnProperty(e) && t++;
                this.length = t
            }
        }, n.prototype.key = function(t) {
            return this.isAvailable ? this.localStorage.key(t) : Object.keys(this.localStorage)[t]
        }, n.prototype.getItem = function(t) {
            return this.isAvailable ? this.localStorage.getItem(t) : this.localStorage[t]
        }, n.prototype.setItem = function(t, e) { this.isAvailable ? this.localStorage.setItem(t, e) : this.localStorage[t] = e, this._updateLength() }, n.prototype.removeItem = function(t) { this.isAvailable ? this.localStorage.removeItem(t) : delete this.localStorage[t], this._updateLength() }, n.prototype.clear = function() { this.isAvailable ? this.localStorage.clear() : this.localStorage = {}, this._updateLength() }, i = function(t) { this.storage = t }, i.prototype.getItem = function(t) {
            return Promise.resolve(this.storage.getItem(t))
        }, i.prototype.setItem = function(t, e) {
            return Promise.resolve(this.storage.setItem(t, e))
        }, window.TVLocalStorage = new n, window.TVLocalStorageAsync = new i(window.TVLocalStorage), t.exports = { TVLocalStorage: window.TVLocalStorage, TVLocalStorageAsync: window.TVLocalStorageAsync }
    }, function(t, e, i) {}, , , 3, function(t, e, i) {}, , function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, , function(t, e) {}, function(t, e, i) {}, , , , function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, 3, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e) {}, function(t, e) {}, function(t, e, i) {}, 3, function(t, e, i) { "use strict" }, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
        "use strict";
        var i = window.TradingView = window.TradingView || {};
        e.availableTimezones = i.availableTimezones = [{ id: "Etc/UTC", title: "" }, { id: "exchange", title: "" }, { id: "Pacific/Honolulu", title: "" }, { id: "America/Vancouver", title: "" }, { id: "America/Los_Angeles", title: $.t("Los Angeles") }, { id: "America/Phoenix", title: $.t("Phoenix") }, { id: "America/Chicago", title: $.t("Chicago") }, { id: "America/El_Salvador", title: $.t("San Salvador") }, { id: "America/Toronto", title: "" }, { id: "America/New_York", title: $.t("New York") }, { id: "America/Bogota", title: $.t("Bogota") }, { id: "America/Argentina/Buenos_Aires", title: $.t("Buenos Aires") }, { id: "America/Sao_Paulo", title: $.t("Sao Paulo") }, { id: "Europe/London", title: $.t("London") }, { id: "Europe/Madrid", title: $.t("Madrid") }, { id: "Europe/Paris", title: $.t("Paris") }, { id: "Europe/Berlin", title: $.t("Berlin") }, { id: "Europe/Warsaw", title: $.t("Warsaw") }, { id: "Europe/Athens", title: $.t("Athens") }, { id: "Europe/Moscow", title: $.t("Moscow") }, { id: "Asia/Tehran", title: $.t("Tehran") }, { id: "Asia/Dubai", title: $.t("Dubai") }, { id: "Asia/Ashkhabad", title: $.t("Ashkhabad") }, { id: "Asia/Kolkata", title: $.t("Kolkata") }, { id: "Asia/Almaty", title: $.t("Almaty") }, { id: "Asia/Bangkok", title: $.t("Bangkok") }, { id: "Asia/Taipei", title: $.t("Taipei") }, { id: "Asia/Singapore", title: $.t("Singapore") }, { id: "Asia/Shanghai", title: $.t("Shanghai") }, { id: "Asia/Hong_Kong", title: $.t("Hong Kong") }, { id: "Asia/Seoul", title: $.t("Seoul") }, { id: "Asia/Tokyo", title: $.t("Tokyo") }, { id: "Australia/Brisbane", title: $.t("Brisbane") }, { id: "Australia/Adelaide", title: $.t("Adelaide") }, { id: "Australia/Sydney", title: $.t("Sydney") }, { id: "Pacific/Auckland", title: $.t("New Zealand") }, { id: "Pacific/Fakaofo", title: $.t("Tokelau") }, { id: "Pacific/Chatham", title: "" }], e.monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], e.futuresRoots = [{ d: "E-Mini S&P 500", t: "ES" }, { d: "E-Mini Nasdaq 100", t: "NQ" }, { d: "Gold", t: "GC" }, { d: "Silver", t: "SI" }, { d: "Crude Oil WTI", t: "CL" }, { d: "Natural Gas", t: "NG" }, { d: "Australian Dollar", t: "6A" }, { d: "Australian Dollar (Floor)", t: "AD" }, { d: "Euro FX", t: "6E" }, { d: "Euro FX (Floor)", t: "EC" }, { d: "Corn", t: "ZC" }, { d: "Corn (Floor)", t: "C" }, { d: "Eurodollar", t: "GE" }, { d: "Eurodollar (Floor)", t: "ED" }]
    }, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(module, exports, __webpack_require__) {
        (function(Featuresets, Delegate, _, Mustache, ZeroClipboard, moment, PineJsCalendar, Spinner, module) {
            "use strict";

            function loginUser(t, e) { window.TVDialogs && window.TVDialogs.signModal && window.TVDialogs.signModal.close(), user = $.extend(!0, {}, t), TradingView.changeLoginState(!0), "function" == typeof e && window.TVDialogs && window.TVDialogs.signModal ? window.TVDialogs.signModal.on("signinSuccess", function() { e() }) : "function" == typeof e && e() }

            function onLoginStateChange(is_initial) {
                if (window.iframeAuthWidget && user.is_first_login && (window.iframeAuthWidget.preventClose = !0), $("html").toggleClass("is-authenticated", is_authenticated).toggleClass("is-not-authenticated", !is_authenticated).toggleClass("is-pro", is_authenticated && user && !!user.is_pro).toggleClass("is-not-pro", !(is_authenticated && user && user.is_pro)).toggleClass("is-trial", is_authenticated && user && "pro_realtime_trial" === user.pro_plan).toggleClass("is-not-trial", !(is_authenticated && user && "pro_realtime_trial" === user.pro_plan)).toggleClass("is-mobile", !!TradingView.isMobileView).toggleClass("is-not-trial-available", !user.trial_availiable).toggleClass("is-trial-available", !!user.trial_availiable), TVSettings.sync(user.settings), is_initial || TradingView.dropPrerenderCache(), $(".js-header__gopro-button").attr("href", is_authenticated ? "/gopro/" : ""), is_authenticated) {
                    if (is_initial || ($(".header-item-profile strong.user-badge").remove(), $(".header-item-profile > a").append(TradingView.userBadge(user, !0, "strong")), $('input[name="csrfmiddlewaretoken"]').val($.cookie("csrftoken") || "")), $(".saved_charts_count").html(user.saved_charts), $(".treated_charts_count").html(user.treated_charts_count), $(".js-trial-days-left").html(user.trial_days_left_text || ""), $(".js-header-gopro-button").attr("href", "/gopro/"), user.fastpass_script && eval(user.fastpass_script), user.is_first_login) {
                        if ($(function() {
                                var t, e, i = showSignModal({ mode: "step-two", noCloseButton: !!user.social_registration, dontCloseOnEsc: !!user.social_registration, nameFields: !user.social_registration, noUsernameField: !user.social_registration, newUserHandler: user.social_registration });
                                user.social_registration ? (t = __webpack_require__(192), t("Social"), e = __webpack_require__(190), e.record("registration_complete"), delete user.social_registration) : TVXWindowEvents.emit("loginStateChange", JSON.stringify({ is_authenticated: is_authenticated, user: user })), window.iframeAuthWidget && (window.iframeAuthWidget.preventClose = !1, i.on("destroy", function() { window.iframeAuthWidget.postClose() }))
                            }), TradingView.trackEvent("Conversion", "First login"), user.prort_trial_started) {
                            var trialMessageSuccessDialog = __webpack_require__(66).trialMessageSuccessDialog;
                            trialMessageSuccessDialog(), delete user.prort_trial_started
                        }
                        delete user.is_first_login
                    }
                    TradingView.setTrialAvailiable(user.trial_availiable)
                } else user = { username: "Guest", following: "0", followers: "0", ignore_list: {} }, $(".user-info-username").html(user.username), TVLocalStorage.removeItem("trial_availiable")
            }

            function userlink(t, e) {
                var i = __webpack_require__(92);
                return Mustache.render(i.userlink, {
                    username: t,
                    is_pro: function() {
                        return !!e
                    },
                    is_realtime: function() {
                        return "pro_realtime" === e
                    },
                    is_premium: function() {
                        return "pro_premium" === e
                    },
                    is_trial: function() {
                        return "pro_realtime_trial" === e
                    }
                }, i)
            }

            function proBadge(t, e) {
                var i = __webpack_require__(92);
                return void 0 === t || t ? Mustache.render(i.proBadge, { is_realtime: "pro_realtime" === t, is_premium: "pro_premium" === t, is_trial: "pro_realtime_trial" === t, large_badge: !!e }) : ""
            }
            var loginStateChange, assert, RequestCache, availableTimezones, i, backend = __webpack_require__(179),
                GlobalEventsStorage = __webpack_require__(182),
                styleVars = __webpack_require__(73),
                TVModal = __webpack_require__(71).TVModal,
                createDialog = __webpack_require__(183).createDialog,
                createPromptDialog = __webpack_require__(185).createPromptDialog,
                createNoticeDialog = __webpack_require__(186).createNoticeDialog,
                createConfirmDialog = __webpack_require__(187).createConfirmDialog,
                TVXWindowEvents = __webpack_require__(34),
                showSignModal = __webpack_require__(188).showSignModal;
            $(document).ajaxSend(function(t, e, i) { "POST" !== i.type || i.crossDomain || e.setRequestHeader("X-CSRFToken", $.cookie("csrftoken")), i.crossDomain && !i.forceLanguageHeader }), String.prototype.format || (String.prototype.format = function() {
                    var t = arguments;
                    return this.replace(/{(\d+)}/g, function(e, i) {
                        return void 0 !== t[i] ? t[i] : e
                    })
                }), !TradingView || !TradingView.onChartPage || Modernizr.canvas && Modernizr.canvastext && Modernizr.websockets || (window.location = "/badbrowser/"), $(document).ready(function() { $(".tv-select").selectbox({ speed: 100, classHolder: "tv-select-container" }), Modernizr.canvas && Modernizr.canvastext && Modernizr.websockets && !navigator.userAgent.match("MSIE 10.0;") || new TVModal({ width: 500, destroyOnClose: !0, title: $.t("Oops, your browser is not supported!"), draggable: !1, closeOnOutsideClick: !1, shadow: !0, content: $.t('<div class="tv-text"><p class="tv-text__font">Please update your browser to the latest version, or use one of the following:</p>') + '<ul class="tv-list tv-list-plain"><li class="tv-list__item tv-list__item--no-margin"><span class="tv-list__item-description"><a href="http://www.google.com/chrome/" target="_blank">Chrome</a></span></li><li class="tv-list__item tv-list__item--no-margin"><span class="tv-list__item-description"><a href="http://www.mozilla.com" target="_blank">Firefox</a></span></li><li class="tv-list__item tv-list__item--no-margin"><span class="tv-list__item-description"><a href="http://www.apple.com/safari/" target="_blank">Safari</a></span></li><li class="tv-list__item tv-list__item--no-margin"><span class="tv-list__item-description"><a href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home" target="_blank">Internet Explorer 11</a></span></li><li class="tv-list__item tv-list__item--no-margin"><span class="tv-list__item-description"><a href="http://www.microsoft.com/en-us/windows/microsoft-edge" target="_blank">Microsoft Edge</a></span></li></ul></div>', actions: [{ name: "OK", type: "primary", text: $.t("OK"), key: 13, method: "close" }] }).open(), "" || "WebSocket" in window || swfobject.hasFlashPlayerVersion("9.0.0") || TVDialogs.showNotice($.t("TradingView Notice"), { html: $.t("It appears that your browser does not support <strong>WebSocket</strong> technology and does not have <strong>Adobe Flash</strong> plugin installed, one of which is essential for our portal.<br/>") + $.t('Please, <a href="http://get.adobe.com/flashplayer/" target="_blank">install Flash plugin</a> or consider updating to one of these modern browsers with WebSocket support:') + '<ul><li><a href="http://www.google.com/chrome/" target="_blank">Chrome</a></li><li><a href="http://www.apple.com/safari/" target="_blank">Safari</a></li></ul>', classSuffix: "slim", doNotCloseOnBgClick: !0 }) }), loginStateChange = window.loginStateChange = new Delegate, loginStateChange.subscribe(null, onLoginStateChange), TVXWindowEvents.on("loginStateChange", function() {
                    var t = JSON.parse(this);
                    window.user = t.user, window.is_authenticated = !!t.is_authenticated, loginStateChange.fire()
                }),
                function() {
                    var t = "user-obj-changed",
                        e = {};
                    window.crossTabSyncUserAttr = function(e) {
                        var i = {};
                        e instanceof Array ? e.forEach(function(t) { i[t] = window.user[t] }) : i[e] = window.user[e], TVXWindowEvents.emit(t, JSON.stringify(i))
                    }, window.onChangeUserAttrInAnotherTab = function(t) {
                        var i = new Delegate;
                        return e[t] || (e[t] = []), e[t].push(i), i
                    }, TVXWindowEvents.on(t, function(t) {
                        var i, n;
                        t = JSON.parse(t);
                        for (i in t)
                            if (window.user[i] = t[i], e[i])
                                for (n = 0; n < e[i].length; n++) e[i][n].fire(t[i])
                    })
                }(), TradingView.trackEvent = function(t, e, i) {
                    var n, o, s, a, r;
                    if (Featuresets.enabled("charting_library_base")) {
                        for (e = e || t || i || "", n = [/Study_(Drawing)_(.*)/, /(Study)_(.*)@tv-basicstudies/, /(Study)_(.*)/, /(Chart Style) (.*)/], o = "", s = 0; s < n.length; s++)
                            if (a = e.match(n[s]), a && 3 === a.length) {
                                e = a[1], o = a[2];
                                break
                            }
                        return void GlobalEventsStorage.emit(e.toLowerCase().replace(" ", "_"), { category: t, value: o, label: i })
                    }
                    window._UNIT_TESTS || "undefined" == typeof _gaq || (r = ["_trackEvent", t, e], void 0 !== i && r.push(i), _gaq.push(r))
                }, assert = function(t, e) {
                    if (!t) throw Error("Assertion failed" + (e ? ": " + e : ""))
                }, window.assert = assert, TradingView.changeLoginState = function(t) { window.is_authenticated = !!t, TVXWindowEvents.emit("loginStateChange", JSON.stringify({ is_authenticated: is_authenticated, user: user })), loginStateChange.fire() }, window.loginUser = loginUser, TradingView.signOut = function() {},
                function() {
                    function t() {
                        return s || (s = new evercookie({ domain: "battle" === n || "staging" === n ? ".tradingview.com" : location.hostname, lso: !($.browser.msie || /\btrident\b/i.test(navigator.userAgent)) })), s
                    }

                    function e() {
                        var e = $.Deferred();
                        return t().get(o, function(t) { e.resolve(t) }), e
                    }

                    function i() {
                        var t = $.Deferred();
                        return $.get("/accounts/get-ecuid/").done(function(e) { t.resolve(e && e.ecuid) }), t
                    }
                    var n, o, s;
                    "undefined" == typeof user || (n = "", o = "tv_ecuid", "battle" !== n && (o += "_" + n), loginStateChange.subscribe(null, function() {
                        if ("" && window.is_authenticated && !user.is_staff && !user.is_superuser && TVLocalStorage.getItem("_tv_ec_ignore_username") !== user.username) {
                            var n = user.id;
                            $.when(e(), i()).done(function(e, i) { i ? e !== i && (e && $.post("/accounts/ch-ecuid/", { from: e, to: i }), t().set(o, i)) : (e || (e = TradingView.guid(), t().set(o, e)), n === user.id && $.post("/accounts/set-ecuid/", { ecuid: e }).done(function(t) { n === user.id && t && t.is_suspicious && (user.is_suspicious = !0) })) })
                        }
                    }))
                }(), window.loginRequiredDelegate = new Delegate, window.runOrSignIn = function(t, e) {
                    var i, n;
                    if (e || (e = {}), e.verifiedPhoneRequired === !0 && (i = t, n = __webpack_require__(203).whenVerified, t = function() { n({ showDialog: !0, source: e.source, verifyPhoneByFeature: !0, verifyPhoneMessage: e.verifyPhoneMessage, noVerifyDelay: e.noVerifyDelay, doNotCheckSuspicious: e.doNotCheckSuspicious }).done(i) }), is_authenticated || Featuresets.enabled("charting_library_base")) t();
                    else {
                        if (!Featuresets.enabled("show_login_dialog")) return void window.loginRequiredDelegate.fire(e);
                        showSignModal({ source: e.source, sourceMeta: e.sourceMeta, feature: e.feature, signinSuccess: t })
                    }
                }, TradingView.runOrGoPro = function(t, e) {
                    if (user && user.is_pro) t();
                    else {
                        var i = __webpack_require__(60).goProDialog;
                        i(e).open()
                    }
                }, TradingView.handleIfNotError = function(t, e) { t.error ? console.log(t.error) : e(t) }, TradingView.handleIfNotErrorFunc = function(t) {
                    return function(e) { TradingView.handleIfNotError(e, t) }
                }, TradingView.SearchChartField = function(t) {
                    function e(t) { t && (t = t.toUpperCase(), location.href = "/chart/" + TradingView.encodeSpread(t) + "/") }
                    var i = __webpack_require__(136);
                    this.$element = t, this.$field = this.$element.find("input"), this.$button = this.$element.find(".button"), this.symbolSearch = i.bindToInput(this.$field, { callback: e }), this.$field.placeholder(), this.$field.on("focus", function() { this.$element.addClass("active") }.bind(this)).on("blur", function() { this.$element.removeClass("active") }.bind(this)).on("keyup", function() { this.$element.toggleClass("not-empty", !!this.$field.val().length) }.bind(this)), this.$button.on("click", function() { this.symbolSearch.acceptTypeIn() }.bind(this))
                }, TradingView.deleteChart = function(t, e, i) {
                    var n = createConfirmDialog({ type: "modal", content: $.t("Are you sure you want to delete this chart?"), addClass: "delete-chart-dialog" }),
                        o = function() {
                            var t = i;
                            i = null, t && t()
                        };
                    n.on("action:yes", function() { i = null, backend.removeChart(t, e), n.close() }), n.on("action:no", o), n.on("afterClose", o), n.open()
                }, TradingView.saveChart = function(t, e, i, n, o) {
                    var s = i,
                        a = n;
                    return s = function(t) {
                        var s, a, r;
                        if ("ok:" === t.substr(0, 3)) s = t.substr(3), a = JSON.parse(s), e.id.value() || (e.id.setValue(a.id), e.uid.setValue(a.uid)), "function" == typeof i && i({ uid: e.uid.value() }, a.count || 0);
                        else if ("saved_chart_limit_reached" === t || "" === t) {
                            if ("function" == typeof n && n(), o.noDefaultOnFail) return;
                            r = __webpack_require__(60).goProDialog, r({ feature: "savedChartsLimit" }).open()
                        } else "function" == typeof n && n(), $("#error").html(t);
                        $(window).off("beforeunload.savechart")
                    }, a = function() { o.retry ? "function" == typeof n && n() : (o.retry = !0, TradingView.saveChart.call(null, t, e, i, n, o)) }, backend.saveChart(t.name, t.short_name, t.resolution, t, e, s, a)
                }, $.fn.TVTicker = function(t) {},
                function() {
                    function t(t) {
                        var e = 0;
                        t === !0 && (ChartApiInstance.disconnect(), e = 500), setTimeout(ChartApiInstance.connect.bind(ChartApiInstance), e)
                    }

                    function e(e, i, o, s) {
                        n || (n = createDialog({ width: s || 600, closeOnOutsideClick: !1, destroyOnClose: !0, type: "modal", contentWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--no-border"><div class="tv-text tv-text--position-outside"></div></div>', actionsWrapTemplate: '<div class="tv-dialog__section tv-dialog__section--actions tv-dialog__section--actions-adaptive tv-dialog__section--no-border">', title: e, content: i, actions: [{ name: "reconnect", type: "primary", text: $.t("Reconnect") }, { name: "report", type: "primary", text: $.t("Report a data issue") }] }).on("action:reconnect", function(e) { e.close(), t(o) }).on("action:report", function(e) {
                            e.close(), runOrSignIn(function() {
                                __webpack_require__.e(3, function(e) {
                                    var i = __webpack_require__(223);
                                    new i({ modal: !0 }).show().on("destroy", function() { t(o) })
                                })
                            }, { source: "Report data issue from disconnect dialog" })
                        }).on("destroy", function() { n = null }).open())
                    }

                    function i() {
                        TradingView.trackEvent("System", "Disconnect");
                        var t = '<div style="text-align: justify;"><p>' + $.t("Connection to server was lost.") + "</p><p>" + $.t("How to fix:") + '</p><ol class="tv-list-plain"><li>' + $.t("Check firewall settings and make sure access to websocket is open. Then click Reconnect or press F5.") + "</li><li>" + $.t('Your browser doesn’t support <strong>WebSocket</strong> technology and does not have <strong>Adobe Flash</strong> plugin installed.<br>Please, <a href="http://get.adobe.com/flashplayer/" target="_blank">install Flash plugin</a> or consider updating to one of these modern browsers with WebSocket support:') + '<ul class="tv-list-plain"><li><a href="http://www.google.com/chrome/" target="_blank">Chrome</a></li><li><a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank">Firefox</a></li></ul></li><li>' + $.t("Server broke the connection. Click Reconnect or press F5.") + "</li></ol></div>";
                        e($.t("Connection is lost"), t, !1)
                    }
                    var n = null;
                    window.showDisconnectedMessage = function() { "MozWebSocket" in window && TradingView.WEB_SOCKET_WAS_CONNECTED ? setTimeout(i, 15e3) : i() }, window.showCriticalErrorMessage = function() { TradingView.trackEvent("System", "Critical Error"), e($.t("Oops, something went wrong"), $.t("Please report the issue or click Reconnect."), !0, 500) }
                }(), window.toggleUserSavedCharts = function t(e) {
                    var i = $(e).toggleClass("active");
                    $(".my-saved-charts").toggle(), i.is(".active") ? $(document).bind("click.toggleUserSavedCharts", function(i) { $(i.target).is(".saved-charts-button") || t(e) }) : $(document).unbind("click.toggleUserSavedCharts")
                }, window.makeDirectionName = function() {
                    return function(t, e) {
                        var i = e(t);
                        return "0" === i ? $.t("Neutral") : "1" === i ? $.t("Long") : $.t("Short")
                    }
                }, window.gotochart = function(t) { location.href = "/v/" + t + "/" },
                function(t) {
                    function e(t, e) {
                        if (t.innerText) t.innerText = e;
                        else if (t.nodeValue) t.nodeValue = e;
                        else {
                            if (!t.textContent) return !1;
                            t.textContent = e
                        }
                    }
                    t.fn.ellipsis = function(i) {
                        return i = i || {}, i.ellipsis = i.ellipsis || "...", this.each(function() {
                            var n, o, s, a, r, l = t(this),
                                c = i.maxHeight || l.height(),
                                d = l.contents().eq(0),
                                u = d[0],
                                h = d.text();
                            if (l.css("max-height", "none"), c < l.height()) {
                                for (n = "", a = 0, r = h.length; a <= r;) o = a + (r - a >> 1), s = t.trim(h.substr(0, o + 1)) + i.ellipsis, e(u, s), l.height() > c ? r = o - 1 : (a = o + 1, n = n.length > s.length ? n : s);
                                e(u, n)
                            }
                        }, arguments)
                    }
                }(jQuery),
                function(t) {
                    var e = t('<div class="blue-tooltip-icon icon" />'),
                        i = t('<div class="blue-tooltip-text" />'),
                        n = t('<div class="blue-tooltip blue-tooltip-hidden" />').append(e).append(i);
                    t.fn.blueTooltip = function(o, s, a) {
                        return n.parent().length || n.appendTo(document.body), this.each(function() {
                            var r = t(this);
                            r.data("tooltip", o), r.off("mouseenter.tooltip").on("mouseenter.tooltip", function() {
                                var o, l, c, d, u, h, p, f, g;
                                Modernizr.touch || (o = 5, a = a || "", i.html(r.data("tooltip")), n.attr("class", "blue-tooltip"), n.addClass("blue-tooltip-" + s).addClass(a), l = (r.outerWidth() - n.outerWidth()) / 2, c = 0, d = l + r.offset().left + n.outerWidth(), u = l + r.offset().left, h = t(window).width() - o, u < o ? c = o - u : d > h && (c = h - d), p = r.offset().left + l + c, f = 0, g = "", "top" === s ? (f = r.offset().top - n.outerHeight() - 10, g = "-=10") : "bottom" === s && (f = r.offset().top + r.outerHeight() + 10, g = "+=10"), n.css({ left: p, top: f, opacity: 0 }), e.css({ left: Math.round(n.width() / 2) - c }), n.stop().animate({ top: g, opacity: 1 }, 200))
                            }).off("mouseleave.tooltip").on("mouseleave.tooltip", function(t) { n.addClass("blue-tooltip-hidden").removeClass(a) })
                        })
                    }
                }(jQuery), TradingView.Tooltip = function() {
                    function t() { clearTimeout(a), clearTimeout(r), jQuery.contains(document.body, d[0]) && (d.css("opacity", "0"), r = setTimeout(d.detach.bind(d), l / 2)) }

                    function e(t, e) {
                        var i, n = t.data("commonTooltipText") || "",
                            o = t.attr("title");
                        if (n || o || e) return o && (n = TradingView.strip_tags(o), t.data("commonTooltipText", n), t.removeAttr("title")), i = { y: t.offset().top - $(window).scrollTop(), x: t.offset().left - $(window).scrollLeft(), w: t.outerWidth(), h: t.outerHeight() }, { text: n, rect: i, vertical: t.hasClass("common-tooltip-vertical"), otl: t.hasClass("common-tooltip-otl"), otr: t.hasClass("common-tooltip-otr"), below: t.hasClass("common-tooltip-below"), above: t.hasClass("common-tooltip-above"), html: t.hasClass("common-tooltip-html") }
                    }

                    function i(t, i) {
                        var o, s = $(t);
                        return i = i || {}, 0 !== s.size() && (o = !(!i.text && !i.$inner), i = $.extend({}, e(s, o), i), void($.isEmptyObject(i) || n(i)))
                    }

                    function n(t) {
                        var e = jQuery.contains(document.body, d[0]);
                        return clearTimeout(a), clearTimeout(r), e ? (t.$inner ? u.empty().append(t.$inner) : t.html ? u.html(t.text) : u.text(t.text), s(t), o(t.colorTheme || "default"), d.addClass(t.addClass), void d.css("opacity", "1")) : void(a = setTimeout(function() { d.appendTo(document.body), n(t) }, l))
                    }

                    function o(t) {
                        var e = { white: "theme-white", default: "" },
                            i = Object.keys(e),
                            n = i.indexOf(t) !== -1 ? e[t] : "";
                        d.removeClass(i.filter(function(t) {
                            return !!t
                        }).map(function(t) {
                            return e[t]
                        }).join(" ")), n && !d.hasClass(n) && d.addClass(n)
                    }

                    function s(t) {
                        var e, i, n, o, s = t.rect;
                        d.attr("class", "common-tooltip-wrapper").css({ top: "auto", right: "auto", bottom: "auto", left: "auto" }), Modernizr.pointerevents || d.addClass("no-pointer-events"), u.css({ left: "0", width: "auto" }), u.width(u.width() + 2), e = $(window).width(), i = $(window).height(), n = t.vertical, (n && s.w < 20 || !n && s.h < 20) && d.addClass("farther"), n ? (d.addClass("vertical").css({ left: s.x + s.w, top: s.y - (d.outerHeight() - s.h) / 2 }), o = t.otr ? "otr" : t.otl || u.offset().left + u.outerWidth() + c > e ? "otl" : "otr", "otl" === o ? d.addClass("otl").css({ left: "auto", right: e - s.x }) : d.addClass("otr")) : (d.css({ bottom: i - s.y, left: s.x - (d.outerWidth() - s.w) / 2 }), o = t.above ? "above" : t.below || u.offset().top - $(window).scrollTop() < c ? "below" : "above", "below" === o ? d.addClass("below").css({ bottom: "auto", top: s.y + s.h }) : d.addClass("above"), u.offset().left - c < 0 ? u.css("left", Math.abs(u.offset().left) + c) : u.offset().left + u.outerWidth() + c > e && u.css("left", e - (u.offset().left + u.outerWidth() + c)))
                    }
                    var a, r, l = 500,
                        c = 10,
                        d = $("<div />").css("opacity", "0"),
                        u = $('<div class="common-tooltip-body" />').appendTo(d);
                    return Modernizr.touch || $(document).on("mouseenter", ".apply-common-tooltip", function(e) {
                        function n() { o.off("mouseleave mousedown", n), $(document).off("scroll", n), t() }
                        if ("buttons" in e) {
                            if (1 & e.buttons) return
                        } else if (1 === e.which) return;
                        var o = $(this);
                        i(o), o.on("mouseleave mousedown", n), $(document).on("scroll", n)
                    }), { show: n, showOnElement: i, hide: t }
                }(), $(function() {
                    function t(t) { $(t).attr("title") || t.offsetWidth + e >= t.scrollWidth || $(t).attr("title", $(t).text()) }
                    var e = $.browser.msie || /\btrident\b/i.test(navigator.userAgent) ? 1 : 0;
                    $(document).on("mouseenter", ".apply-overflow-title", function() { t(this) }), $(document).on("mouseenter", ".apply-overflow-tooltip", function() {
                        function t() { TradingView.Tooltip.hide(), i.off("mouseleave mousedown", t) }
                        var i = $(this);
                        i[0].offsetWidth + e >= i[0].scrollWidth || (TradingView.Tooltip.showOnElement(i[0], { text: i.text() }), i.on("mouseleave mousedown", t))
                    })
                }), TradingView.GlobalNotification = function(t, e) {
                    var i, n, o, s, a = __webpack_require__(92);
                    return this._options = e || {}, i = this, this.id = t.id, (n = this._lastId()) ? void(this.id <= n || (i = this, o = $("body"), s = $.extend({ fullWidth: !!this._options.fullWidth, isOverlay: !!this._options.isOverlay }, t), this.container = $(Mustache.render(a.globalNotification, s)), this.container.prependTo(o), this.container.velocity({ top: 0 }, this.ANIMATION_OPTIONS), this._options.notShiftBody || o.css({ paddingTop: 0 }).velocity({ paddingTop: parseInt(i.container.outerHeight()) }, this.ANIMATION_OPTIONS), TradingView.trackEvent("Global notification", "Show notification " + t.id), this.container.find(".js-global-notification__close").on("click", function() { i.close() }), $.browser.msie || TVXWindowEvents.on(this.KEY + "-close", this._onCloseInAnotherTab.bind(this)))) : void this._setLastId(this.id)
                }, TradingView.GlobalNotification.prototype.ANIMATION_OPTIONS = { duration: 2 * styleVars.dur, easeing: "easeInCubic", queue: !1 }, TradingView.GlobalNotification.prototype.KEY = "globalNotification", TradingView.GlobalNotification.prototype._lastId = function() {
                    var t = TVSettings.getInt(this.KEY, 0, !0),
                        e = TVSettings.getInt(this.KEY, 0),
                        i = Math.max(e, t);
                    return t !== e && TVSettings.setValue(this.KEY, i), !i && $.cookie("notification_id") && (i = ~~$.cookie("notification_id"), TVSettings.setValue(this.KEY, i), $.cookie("notification_id", 0, { expires: -1, path: "/" })), i
                }, TradingView.GlobalNotification.prototype._setLastId = function(t) { TVSettings.setValue(this.KEY, t) }, TradingView.GlobalNotification.prototype.close = function(t) {
                    var e, i = this;
                    this.container && (e = $("body"), t ? (this.container.remove(), this.container = null) : (this.container.velocity({ top: -1 * this.container.outerHeight() }, this.ANIMATION_OPTIONS), setTimeout(function() { i.container.remove(), i.container = null, $(window).resize() }, 1500), TVXWindowEvents.emit(i.KEY + "-close", JSON.stringify([i.id, +new Date])), this._setLastId(i.id)), this._options.notShiftBody || e.velocity({ paddingTop: 0 }, this.ANIMATION_OPTIONS))
                }, TradingView.GlobalNotification.prototype._onCloseInAnotherTab = function(t) { t = JSON.parse(t), this.id <= t[0] && this.close(!0) }, window.closeGlobalNotification = function(t) { $.cookie("notification_id", t, { expires: 365, path: "/" }), $(".tv-global-notification").slideUp(400, function() { $(window).resize() }) }, RequestCache = __webpack_require__(181), TradingView.getThemesList = new RequestCache("/themes/"), TradingView.showThemeSaveDialog = function(t) {
                    var e = __webpack_require__(207).showChartNameDialog;
                    e(function(e) {
                        e && $.get("/theme/" + e + "/").success(function(i) {
                            var n, o = !!i.content;
                            i = { name: e, content: JSON.stringify(t.model().theme()) }, o ? (n = $.t("Do you realy want to replace") + ' "' + e + '"?', TVDialogs.showConfirm($.t("Confirm replacing"), n, function() { $.post("/save-theme/", i).error(function(t) { console.error(t.responseText) }), t._lastLoadedTheme = e })) : ($.post("/save-theme/", i).error(function(t) { console.error(t.responseText) }), TradingView.getThemesList.invalidate(), t._lastLoadedTheme = e)
                        })
                    }, { title: $.t("Save theme as..."), label: $.t("Theme name"), error: $.t("Please enter theme name") }, 128)
                }, TradingView.applySearchResetHandler = function(t, e) {
                    function i() { n.toggleClass("i-hidden", !t.val()) }
                    var n = t.siblings(".js-input-reset");
                    return t.on("change keyup", i), i(), n.on("click", function() { t.val("").change(), "function" == typeof e && e() }), i
                }, TradingView.getImageOfChart = function(t, e, i) {
                    function n(i) {
                        var n, o, s;
                        o = Featuresets.enabled("charting_library_base") ? (e.snapshotUrl ? "" : "https://www.tradingview.com/x/") + i : window.location.protocol + "//" + window.location.host + "/x/" + i + "/", l.attr({ href: o }), c.attr("data-clipboard-text", o), d.val(o), a.stop(), r.css({ visibility: "visible" }), setTimeout(function() {
                            var t = d.get(0);
                            t.focus && t.focus(), t.select && t.select()
                        }, 0), n = TradingView.ShareTwitterSnapshot.getStatus(t.activeChartWidget.value().symbolProperty().value(), o), $('<a class="twitter-share-button _tv-dialog-social _tv-dialog-social-twitter"></a>').attr({ href: "https://twitter.com/share?count=none&text=" + encodeURIComponent(n) + "&url=%20", rel: "nofollow" }).appendTo(h), $('<script src="//platform.twitter.com/widgets.js"></script>').appendTo(h), s = new ZeroClipboard(c), s.on("ready", function(t) { s.on("aftercopy", function(t) { TradingView.trackEvent("GUI", "Copied Image Link"), TVDialogs.showMessage($.t("Copied to clipboard")) }) })
                    }
                    var o, s, a, r, l, c, d, u, h, p;
                    return e = e || {}, TVDialogs.createModalDialog($.t("Image URL"), { addClass: "_tv-dialog-min-width" }), o = TVDialogs.modalDialog, s = o.find("._tv-dialog-content"), a = TradingView.unifiedSpinner("mini").spin(s.get(0)), r = $('<div class="main tv-text">').css({ visibility: "hidden " }).appendTo(s), l = $("<a>").text($.t("Save image")).attr({ target: "_blank" }).css("text-decoration", "underline"), c = $('<span class="copy-clipboard-button _tv-button">' + $.t("Copy link") + "</span>"), d = $("<input>").attr({ type: "text", readonly: !0 }).bind("click focus", function() { this.select && this.select() }), $("<p>").appendTo(r).append(l, " " + $.t("or copy url:")), u = $('<form class="copy-image-url">').append(c, d), $("<p>").css({ position: "relative" }).appendTo(r).append(u), ZeroClipboard.isFlashUnusable() && u.addClass("copy-unavailable"), h = $('<p class="_tv-dialog-socials">').appendTo(r), TVDialogs.positionDialog(), TVDialogs.applyHandlers(), TradingView.trackEvent("GUI", "Get image button"), ZeroClipboard.config({ swfPath: TradingView.wrapUrl("/static/images/ZeroClipboard.swf") }), p = __webpack_require__(213).takeSnapshot, p(t, function(t) { i && i(t), n(t) }, function() { a.stop(), TVDialogs.showError($.t("URL cannot be received"), o) }, { snapshotUrl: e.snapshotUrl }), !1
                }, TradingView.getImageOfChartSilently = function(t, e, i) {
                    var n = __webpack_require__(213).takeSnapshot;
                    return n(t, function(t) { i && i(t) }, function() { console.warn($.t("Error while trying to create snapshot.")) }, { snapshotUrl: e.snapshotUrl }), !1
                }, TradingView.dropPrerenderCache = function() { $('link[rel="prerender"]').remove() }, window.onLoginStateChange = onLoginStateChange, window.markNewsAsRead = function() { $(".user-picture .notifications-counter").hide().addClass("hide"), $(".notifications-counter.counter").removeClass("new").text("0"), TVXWindowEvents.emit("zero-notification-counter") }, window.followButtonTooltip = function(t) {
                    var e = t.hasClass("unfollow") ? $.t("Unfollow") : $.t("Follow");
                    t.attr("title", e)
                },
                function(t) {
                    jQuery.fn.putCursorAtEnd = function() {
                        return this.each(function() {
                            if (t(this).focus(), this.setSelectionRange) {
                                var e = 2 * t(this).val().length;
                                this.setSelectionRange(e, e)
                            } else t(this).val(t(this).val());
                            this.scrollTop = 999999
                        })
                    }, jQuery.fn.putCursorAtPosition = function(e) {
                        return this.each(function() { t(this).focus(), this.setSelectionRange && this.setSelectionRange(e, e) })
                    }
                }(jQuery), TradingView.ShareTwitterSnapshot = function(t) {
                    function e(t) {
                        return window.location.protocol + "//" + window.location.host + "/x/" + t + "/"
                    }

                    function i(t, i) {
                        return "https://twitter.com/intent/tweet?&status=" + encodeURIComponent(TradingView.ShareTwitterSnapshot.getStatus(t, e(i)))
                    }
                    var n, o, s, a = __webpack_require__(221);
                    TradingView.winMobileMode ? (this.onSuccess = function(e) {
                        try { a.sendEvent(i(t, e), "sharing_ready") } catch (t) {}
                    }, this.onFailure = function() {
                        try { a.sendEvent("sharing_error") } catch (t) {}
                    }) : (n = 550, o = 420, s = open("about:blank", "snapshot_tweet", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + n + ",height=" + o + ",left=" + Math.round(screen.width / 2 - n / 2) + ",top=" + Math.round(screen.height / 2 - o / 2)), this.onSuccess = function(e) { s.location.href = i(t, e) }, this.onFailure = function() { s.close() })
                }, TradingView.ShareTwitterSnapshot.getStatus = function(t, e) {
                    var i;
                    return i = TradingView.isCmeWidget ? e + " from cmegroup.com via @tradingview $" + t : "$" + t + " chart " + e + " via http://www.tradingview.com"
                }, TradingView.ShareStocktwitsSnapshot = function(t) {
                    function e(t) {
                        return window.location.protocol + "//" + window.location.host + "/x/" + t + "/"
                    }

                    function i(t, i) {
                        return "https://stocktwits.com/widgets/share?body=" + encodeURIComponent(TradingView.ShareStocktwitsSnapshot.getStatus(t, e(i)))
                    }
                    var n, o, s, a = __webpack_require__(221);
                    TradingView.winMobileMode ? (this.onSuccess = function(e) {
                        try { a.sendEvent(i(t, e), "sharing_ready") } catch (t) {}
                    }, this.onFailure = function() {
                        try { a.sendEvent("sharing_error") } catch (t) {}
                    }) : (n = 550, o = 420, s = open("about:blank", "snapshot_tweet", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + n + ",height=" + o + ",left=" + Math.round(screen.width / 2 - n / 2) + ",top=" + Math.round(screen.height / 2 - o / 2)), this.onSuccess = function(e) { s.location.href = i(t, e) }, this.onFailure = function() { s.close() })
                }, TradingView.ShareStocktwitsSnapshot.getStatus = function(t, e) {
                    return "$" + t + " chart " + e + " via http://www.tradingview.com"
                }, TradingView.authInStocktwits = function(t) {
                    runOrSignIn(function() {
                        if (user.has_stocktwits) "function" == typeof t && t();
                        else {
                            "function" == typeof t && (user.on_stocktwits_auth_success = function() {
                                var e = this;
                                t.apply(e, Array.prototype.slice.call(arguments)), e.user.on_stocktwits_auth_success && delete e.user.on_stocktwits_auth_success
                            }.bind(window));
                            var e = window.open("https://api.stocktwits.com/api/2/oauth/authorize?client_id=" + window.stocktwits_consumer_key + "&response_type=code&redirect_uri=" + location.protocol + "//" + location.host + "/accounts/return/stocktwits/&scope=publish_messages", "stocktwits_permission_request", "scrollbars=yes,height=400,width=700");
                            e.focus()
                        }
                    }, { source: "StockTwits auth" })
                }, TradingView.agoDateFormatter = function(t, e, i) {
                    var n, o, s, a, r;
                    i ? (s = i(new Date - e), n = s.text, o = s.timeout) : (a = moment(new Date).diff(e), n = moment(e).fromNow(), o = TradingView.agoDateFormatter.getUpdateTimeout(a), t.parent().toggleClass("just-now", a < 45e3)), t.attr("title", e.toLocaleString()).text(n), r = null, o && (t.attr("data-ago-date-timer") && clearTimeout(+t.attr("data-ago-date-timer")), r = setTimeout(function() { TradingView.agoDateFormatter(t, e, i) }, o)), t.attr("data-ago-date-timer", r)
                }, TradingView.agoDateFormatter.destroy = function(t) { $(t).find("*").andSelf().filter("[data-ago-date-timer]").each(function() { clearTimeout(+$(this).attr("data-ago-date-timer")) }) }, TradingView.agoDateFormatter.nextMinuteThrough = function(t) {
                    var e = 6e4;
                    return e - t % e
                }, TradingView.agoDateFormatter.nextHourThrough = function(t) {
                    var e = 36e5;
                    return e - t % e
                }, TradingView.agoDateFormatter.nextDayThrough = function(t) {
                    var e = 864e5;
                    return e - t % e
                }, TradingView.agoDateFormatter.getUpdateTimeout = function(t) {
                    var e = 200;
                    if (t = Math.floor(t / 6e4), t < 60) e += TradingView.agoDateFormatter.nextMinuteThrough(t);
                    else if (t < 1440) e += TradingView.agoDateFormatter.nextHourThrough(t);
                    else {
                        if (!(t < 43200)) return !1;
                        e += TradingView.agoDateFormatter.nextDayThrough(t)
                    }
                    return e
                }, TradingView.agoDateFormatter.fullFormat = function(t) {
                    var e, i = Math.floor(t / 6e4),
                        n = !1;
                    return i < 60 ? n = TradingView.agoDateFormatter.nextMinuteThrough(t) : i < 1440 ? n = TradingView.agoDateFormatter.nextHourThrough(t) : i < 43200 && (n = TradingView.agoDateFormatter.nextDayThrough(t)), n && (n += 200), e = new Date - t, { text: moment(e).fromNow(), timeout: n }
                }, TradingView.agoDateFormatter.shortFormat = function(t) {
                    var e = Math.floor(t / 6e4),
                        i = "",
                        n = !1;
                    return e < 60 ? (i = (e < 1 ? 0 : e) + $.t("m"), n = TradingView.agoDateFormatter.nextMinuteThrough(t)) : e < 1440 ? (e = Math.floor(e / 60), i = e + $.t("h"), n = TradingView.agoDateFormatter.nextHourThrough(t)) : e < 43200 ? (e = Math.floor(e / 1440), i = e + $.t("d"), n = TradingView.agoDateFormatter.nextDayThrough(t)) : e < 15768e3 ? (e = Math.floor(e / 43200), i = e + $.t("mn")) : (e = Math.floor(e / 15768e3), i = e + $.t("y")), n && (n += 200), { text: i, timeout: n }
                }, window.userlink = userlink, window.proBadge = proBadge, TradingView.userBadge = function(t, e, i) {
                    var n = "",
                        o = "",
                        s = __webpack_require__(92);
                    if (t.top_user_info) {
                        if (n = t.top_user_info.badge ? t.top_user_info.badge.title : "", o = t.top_user_info.badge ? " tv-user-badge--top_" + t.top_user_info.period : "", t.is_pro) switch (n += " | ", t.pro_plan) {
                            case "pro_realtime_trial":
                                n += $.t("Pro Trial");
                                break;
                            case "pro_premium":
                                n += $.t("Premium");
                                break;
                            default:
                                n += $.t("Pro")
                        }
                        t.is_moderator && (n += " | " + $.t("Moderator"))
                    }
                    return Mustache.render(t.userBadgeTmpl || s.userBadge, { is_ad: t.is_ad, is_promo: t.is_promo, is_moderator: t.is_moderator, is_pro: t.is_pro, is_realtime: "pro_realtime" === t.pro_plan, is_premium: "pro_premium" === t.pro_plan, is_trial: "pro_realtime_trial" === t.pro_plan, is_top: !!t.top_user_info, badge_class: o, badge_title: n, large_badge: !!e, badge_tag: i }, s)
                },
                function() {
                    function t() {
                        var t = $(".publish-chart-button");
                        t.size() && (t.addClass("process"), n = setTimeout(e, 3e4))
                    }

                    function e() { clearTimeout(n), $(".publish-chart-button").removeClass("process") }

                    function i(i, n) {
                        function o() { n === !0 ? window.saver.publishChart(i) : TVDialogs.showPublishIntroDialog().done(window.saver.publishChart.bind(window.saver, i)) }
                        runOrSignIn(function() {
                            var i, n = function() {
                                var t = TradingView.getUrlParams();
                                return !(!t.publishsource || !~t.publishsource.toLowerCase().indexOf("dailyfx"))
                            }();
                            n ? o() : (t(), i = __webpack_require__(203).whenVerified, i({ showDialog: !0, source: "Publish chart" }).done(o).always(e))
                        }, { source: "Publish chart", sourceMeta: "Chart" })
                    }
                    var n;
                    TradingView.Common = { publishChartWidget: function(t) { i(t, !0) }, publishChart: i }
                }(), window.follow = function(t) {}, $("body").on("click", ".js-follow-user", window.follow), TradingView.changeUserProfileField = function(t) {}, TradingView.inputOnTyping = function(t, e, i, n) {
                    function o() {
                        var t = $(this),
                            o = t.val(),
                            s = e(o);
                        t.removeClass("_tv-dialog-text-input-error"), "function" == typeof i && i(o), o !== s && (t.val(s), n && t.trigger("change"))
                    }

                    function s(t) {
                        if (t.ctrlKey) return !1;
                        if (t.metaKey) return !1;
                        if (!t.charCode) return !1;
                        var e = t.keyCode || t.which;
                        return 9 !== e && (13 !== e && (16 !== e && (17 !== e && (18 !== e && (19 !== e && (20 !== e && (27 !== e && !(33 <= e && e <= 40))))))))
                    }
                    return t instanceof $ ? ("function" != typeof e && (e = function(t) {
                        return t
                    }), void t.each(function(t, e) {
                        var i = $(e);
                        i.on("keypress", function(t) {
                            if (s(t)) {
                                var e = function() { o.call(this), $(this).off("keyup", e) }.bind(this);
                                $(this).on("keyup", e)
                            }
                        }), i.change(o)
                    })) : void console.warn("'$inputs' should be instance of jQuery")
                }, TradingView.makeInputNumberOnly = function(t, e) {
                    var i, n;
                    e = e || {}, i = e.integerOnly, n = e.positiveOnly, TradingView.inputOnTyping(t, function(t) {
                        var o = t.replace(/\,/g, ".").replace(/[^0-9\.-]/g, "").replace(/^-/, n ? "" : "__minus__").replace(/\./, "__point__").replace(/^__point__/, "0__point__").replace(/[\.-]/g, "").replace("__minus__", "-").replace("__point__", ".").replace(/^0+/, "0");
                        return i && /\d+/.test(o) && (o = parseInt(o), TradingView.isInteger(e.minValue) && (o = Math.max(e.minValue, o)), TradingView.isInteger(e.maxValue) && (o = Math.min(e.maxValue, o))), !i && /^0\d/.test(o) && (o = "" + o, o = o.substring(0, 1) + "." + o.substring(1, o.length)), o
                    }, e.inputOnTypingCallback)
                }, TradingView.makeInputDateOnly = function(t, e) {
                    function i(t) {
                        return 4 !== t.length && 7 !== t.length || (t += "-"), t = t.substr(0, 10)
                    }
                    var e = e || {};
                    TradingView.inputOnTyping(t, i, e.inputOnTypingCallback, e.triggerChange)
                }, TradingView.makeInputTimeOnly = function(t, e) {
                    function i(t) {
                        return 2 === t.length && (t += ":"), t = t.substr(0, 5)
                    }
                    var e = e || {};
                    TradingView.inputOnTyping(t, i, e.inputOnTypingCallback, e.triggerChange)
                }, TradingView.timezoneIsAvailable = function(t) {
                    var e, i = __webpack_require__(139).availableTimezones;
                    for (e = 0; e < i.length; e++)
                        if (t === i[e].id) return !0;
                    return !1
                }, TradingView.parseSessionHours = function(t, e) {
                    function i(t, i, o) {
                        var s, a, r, l, c, d, u, h, p, f, g, m = [];
                        if (o.openEveryDay) m = [0, 1, 2, 3, 4, 5, 6];
                        else if (o.openOnDays)
                            for (s = o.openOnDays, a = 0; a < s.length; a++) m.push(parseInt(s[a]) - 1);
                        else m = [1, 2, 3, 4, 5];
                        for (r = function(t) {
                                return 60 * parseInt(t[0], 10) + parseInt(t[1], 10)
                            }, l = r(t), c = r(i), d = l && l >= c, d && 0 !== m[0] && m.unshift(0), u = "", h = [], p = m[0] - 1, f = m.length, a = 0; a < f; a++) p + 1 < m[a] || a + 1 === f ? (u += n + moment.weekdaysMin(m[a]), h.push(u), u = "") : u || (u = moment.weekdaysMin(m[a])), p = m[a];
                        return g = "{0}:{1}{2}{3}:{4}".format(t[0], t[1], n, i[0], i[1]), h.map(function(t) {
                            return t + e + g
                        })
                    }
                    var n, o, s, a, r;
                    return e = e || " ", n = "-", t ? "24x7" === t ? i(["00", "00"], ["00", "00"], { openEveryDay: !0 }) : (o = /([0-2]\d)([0-5]\d)-([0-2]\d)([0-5]\d)(?:\:(\d+))?/, (s = o.exec(t)) ? (a = [s[1], s[2]], r = [s[3], s[4]], i(a, r, { openOnDays: s[5] })) : {}) : {}
                }, TradingView.parseTzOffset = function(t) {
                    var e = PineJsCalendar.get_timezone(t).offset_utc(Date.now()),
                        i = "",
                        n = e / 1e3 / 60 / 60;
                    return n % 1 && (i = ":" + 60 * (n % 1)), n = n > 0 ? "+" + (n - n % 1) + i : 0 === n ? "" : "" + (n - n % 1) + i, { offset: e, string: "UTC" + n }
                }, TradingView.getTzByObsoleteName = function(t) {
                    return { UTC: "Etc/UTC", EST: "America/New_York", CST: "America/Chicago", PST: "America/Los_Angeles" }[t] || "exchange"
                }, availableTimezones = __webpack_require__(139).availableTimezones;
            for (i = 0; i < availableTimezones.length; i++)["Etc/UTC", "exchange"].indexOf(availableTimezones[i].id) === -1 && (availableTimezones[i].title = "(" + TradingView.parseTzOffset(availableTimezones[i].id).string + ") " + availableTimezones[i].title);
            TradingView.showChangeUserStatusDialog = function() {
                var t = $.t("Add status") + "...";
                return runOrSignIn(function() {
                    var e = createPromptDialog({ title: $.t("Update status"), content: '<input type="text" class="tv-control-input" maxlength="254" name="status" value="' + ("string" == typeof window.user.status ? window.user.status.replace(/"/g, "&quot;") : "") + '">' }).actionLoader("submit").on("submit", function(i, n) {
                        i.actionLoader("submit", "start"), TradingView.changeUserProfileField({
                            name: "status",
                            value: (i.$el.find("input").val() + "").replace(/^\s+|\s+$/g, ""),
                            onSuccess: function(e) {
                                var n = $("#change-profile-status"),
                                    o = e ? e : t;
                                n.hasClass("tv-editable-active") ? n.find('input[type="text"], textarea').val(o) : n.text(o), $('[name="status"]').val(e), i.close()
                            },
                            onError: function(t) { e.error(t || $.t("We'are sorry, something went wrong. Try to reload page.")) },
                            onComplete: function() { i.actionLoader("submit", "stop") }
                        })
                    }).open()
                }, { source: "Change status" }), !1
            }, TradingView.getUrlParams = function() {
                for (var t = /\+/g, e = /([^&=]+)=?([^&]*)/g, i = function(e) {
                        return decodeURIComponent(e.replace(t, " ")).replace(/<\/?[^>]+(>|$)/g, "")
                    }, n = window.location.search.substring(1), o = {}, s = e.exec(n); s;) o[i(s[1])] = i(s[2]), s = e.exec(n);
                return o
            }, TradingView.createUrlParams = function(t) {
                var e, i = [];
                for (e in t) t.hasOwnProperty(e) && null != t[e] && i.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
                return i.join("&")
            }, TradingView.setTrialAvailiable = function(t) { TVLocalStorage.setItem("trial_availiable", t ? 1 : 0) }, TradingView.translatedIntervalString = function(t) {
                var e = ("" + t).match(/(.*)([DWM])/);
                return e ? e[1] + $.t(e[2], { context: "dates" }) : t
            }, TradingView.capitalizeFirstLetter = function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }, TradingView.generateColor = function(t, e, i) {
                var n, o, s = __webpack_require__(222).RGBColor;
                if (!TradingView.isHexColor(t)) return i ? (e = e || 0, TradingView.rgbaComp(TradingView.rgbDecomp(t), 1 - e / 100)) : t;
                if (e >= 0 && e <= 100) return n = new s(t), o = 1 - e / 100, "rgba(" + n.r + ", " + n.g + ", " + n.b + ", " + o.toFixed(2) + ")";
                throw Error("invalid transparency")
            }, TradingView.decompNamedColor = function(t) {
                switch (t) {
                    case "white":
                        return [255, 255, 255];
                    case "black":
                        return [0, 0, 0];
                    case "red":
                        return [255, 0, 0];
                    case "blue":
                        return [0, 255, 0];
                    case "green":
                        return [0, 0, 255]
                }
            }, TradingView.rgbComp = function(t, e, i) {
                return 2 in arguments || (i = t[2], e = t[1], t = t[0]), "rgb(" + [~~t, ~~e, ~~i].join(", ") + ")"
            }, TradingView.resetTransparency = function(t) {
                return TradingView.isHexColor(t) ? t : TradingView.rgbaComp(TradingView.rgbDecomp(t), 1)
            }, TradingView.rgbDecomp = function(t) {
                return TradingView.decompNamedColor(t) || t.match(/[0-9]+/g).splice(0, 3)
            }, TradingView.isHexColor = function(t) {
                return !!~t.indexOf("#")
            }, TradingView.hexRgbDecomp = function(t) {
                return 7 === t.length ? [parseInt(t.slice(1, 3), 16), parseInt(t.slice(3, 5), 16), parseInt(t.slice(5, 7), 16)] : 4 === t.length ? [parseInt(t.slice(1, 2) + t.slice(1, 2), 16), parseInt(t.slice(2, 3) + t.slice(2, 3), 16), parseInt(t.slice(3, 4) + t.slice(3, 4), 16)] : void 0
            }, TradingView.rgbaComp = function(t, e, i, n) {
                return 2 in arguments || (n = e, i = t[2], e = t[1], t = t[0]), null == n && (n = 1), "rgba(" + [~~t, ~~e, ~~i, n].join(", ") + ")"
            }, TradingView.generateLowBrightnessColor = function(t) {
                var e, i;
                return e = TradingView.isHexColor(t) ? TradingView.hexRgbDecomp(t) : TradingView.rgbDecomp(t), i = e.map(function(t) {
                    return t > 50 ? t - 50 : 0
                }), TradingView.rgbComp(i)
            }, TradingView.defaultColorPickersBorder = "#727272", TradingView.pow10Increment = function(t, e, i) {
                var n, o = 1;
                return t < 0 && (o = -1, e = !e), i = Math.abs(i), isFinite(i) || (i = 1), t = Math.abs(t), n = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)) || i || 0, 10 * n <= t && (n *= 10), e && t === n && (n /= 10), n < i && (n = i), e ? Math.ceil(t / n - 1) * n * o : Math.floor(t / n + 1) * n * o
            }, TradingView.abbreviatedNumber = function(t) {
                var e, i = 0,
                    n = +t;
                if (isFinite(n))
                    for (; n >= 1e3 && n % 100 === 0;) i++, n /= 1e3;
                return e = ["", "K", "M", "G", "T", "Y"][i], null == e && (e = "e" + 3 * i), n + e
            }, TradingView.makeFont = function(t, e, i) {
                return i && (i += " "), i + t + "px " + e
            }, $.fn.filterByData = function(t, e) {
                return this.filter(function() {
                    return $(this).data(t) === e
                })
            }, $.fn.reverse = [].reverse, window.showExtensionPopup = function() {
                $(function() {
                    function t(t) { TVDialogs.modalDialog ? TVDialogs.modalDialog.find("._tv-dialog").on("destroy", function() { setTimeout(t, 0) }) : t() }
                    var e, i, n;
                    window.is_authenticated && "" && Featuresets.enabled("show_extension_popup") && !TradingView.isOnFeaturePage && (i = function() {
                        var t = window.chrome,
                            e = window.navigator.vendor;
                        return null !== t && void 0 !== t && "Google Inc." === e
                    }(), i && (e = "chrome"), e && (n = "notShowExtensionPopup." + e, TVSettings.getBool(n, !1) || t(function() {
                        var t = TVDialogs.showBrowserExtensionDialog(e);
                        t.find("._tv-dialog").on("destroy", function() { TVSettings.setValue(n, !0) })
                    })))
                })
            }, TradingView.removeBBCodes = function(t) {
                return t.replace(RegExp(TradingView.quotesRe.openingTag, "gi"), $.t("@$1 wrote") + ":\n").replace(RegExp(TradingView.quotesRe.closingTag, "gi"), "")
            }, TradingView.quotesRe = { openingTag: '\\[quote=(?:"|&quot;)([a-z0-9\\._\\-\\u00A0]+)(?:"|&quot;)\\]', closingTag: "\\[\\/quote\\]" }, TradingView.quotesRe.quotedArea = TradingView.quotesRe.openingTag + "([^]*)" + TradingView.quotesRe.closingTag, TradingView.removeQuotes = function(t) {
                return t.replace(RegExp(TradingView.quotesRe.quotedArea, "ig"), "").trim()
            }, TradingView.parseQuotes = function(t) {
                function e(t) {
                    var e, i = RegExp(TradingView.quotesRe.openingTag, "ig"),
                        n = RegExp(TradingView.quotesRe.closingTag, "ig"),
                        o = i.exec(t),
                        s = n.exec(t);
                    return !o || !s || s.index < o.index ? null : (e = '<div class="ch-item-quote">' + $.t("@__username__ wrote", { username: o[1] }) + ":<br/>" + TradingView.removeQuotes(t.substring(i.lastIndex, s.index)) + "</div>", { start: o.index, end: n.lastIndex, converted: e })
                }

                function i(t) {
                    var n = e(t);
                    return n ? t.substring(0, n.start) + n.converted + i(t.substring(n.end).trim()) : t
                }
                return i(t)
            }, TradingView.getInnerTextContent = function(t) {
                var e = function(t) {
                    return t.childElementCount ? $.map(t.childNodes, e).join("") + ("DIV" === t.tagName ? "\n" : "") : "BR" === t.tagName ? "\n" : t.textContent
                };
                return e(t)
            }, TradingView.trimWords = function(t, e) {
                var i, n, o, s;
                if (t.length < e) return t.trim();
                for (t += " ", i = /\s+/g, o = "", s = 0; null != (n = i.exec(t));) {
                    if (n.index >= e) {
                        o = t.substring(0, s).trim() + "...";
                        break
                    }
                    s = n.index
                }
                return o || t.substring(0, e) + "..."
            }, TradingView.urlRegExp = { imageUrl: "^[0-9a-zA-Z]{8}$", publishedImage: "/(?:i|x)/([0-9a-zA-Z]{8})/?", publishedChartOld: "/v/([0-9a-zA-Z]{8})/?", publishedChart: "/chart/([0-9a-zA-Z!_:+*()-]+?)/([0-9a-zA-Z]{8})(?:-([^/]+))?/?", publishedScript: "/script/([0-9a-zA-Z]{8})(?:-([^/]+))?/?", amazonawsLinks: "(?:https://|http://)(s3\\.amazonaws\\.com\\/tradingview?(\\w*?)\\/snapshots)\\/(?:\\S*?)\\.(png|bmp|jpg|jpeg)" }, TradingView.createPublishedChartUrl = function(t, e, i) {
                return t && /[0-9a-zA-Z]{8}/.test(t) ? t && e ? "/chart/" + e + "/" + t + (i ? "-" + i : "") + "/" : "/v/" + t + "/" : ""
            }, TradingView.parsePublishedChartUrl = function(t) {
                var e, i = {},
                    n = RegExp(TradingView.urlRegExp.publishedChartOld),
                    o = RegExp(TradingView.urlRegExp.publishedChart),
                    s = RegExp(TradingView.urlRegExp.publishedScript),
                    a = RegExp(TradingView.urlRegExp.imageUrl);
                return n.test(t) ? (e = t.match(n) || {}, i = { image_url: e[1] }) : o.test(t) ? (e = t.match(o) || {}, i = { symbol: e[1], image_url: e[2], title: e[3] }) : s.test(t) ? (e = t.match(s) || {}, i = { image_url: e[1], title: e[2] }) : a.test(t) && (i = { image_url: t }), i
            }, TradingView.createPublishedChartImageUrl = function(t) {
                var e, i;
                return t && /[0-9a-zA-Z]{8}/.test(t) ? TradingView.Environment() in { battle: 1, staging: 1 } ? (e = t.charAt(0).toLowerCase(), i = "battle" === TradingView.Environment() ? "tradingview" : "tradingview_staging", "https://s3.amazonaws.com/" + i + "/" + e + "/" + t + ".png") : "/i/" + t + "/" : ""
            }, TradingView.createSnapshotImageUrls = function(t) {
                var e, i, n;
                return t && /[0-9a-zA-Z]{8}/.test(t) ? TradingView.Environment() in { battle: 1, staging: 1 } ? (e = t.charAt(0).toLowerCase(), i = "battle" === TradingView.Environment() ? "tradingview" : "tradingview_staging", n = "https://s3.amazonaws.com/" + i + "/snapshots/" + e, { url: n + "/" + t + ".png", preview: n + "/" + t + "_thumb.png" }) : (n = window.location.protocol + "//" + window.location.host, { url: n + "/x/" + t + "/", preview: n + "/x/" + t + "/s/" }) : ""
            }, TradingView.openNewChart = function(t) {
                var e, i, n;
                t = t || {}, is_authenticated ? (e = '<form method="POST" target="_blank" action="/chart/" style="display: none;"><input type="text" name="new" value="1">', Object.keys(t).forEach(function(i) { e += '<input type="text" name="' + i + '" value="' + t[i] + '">' }), e += '<input type="submit"></form>', i = $(e), $("body").append(i), i.submit()) : (n = $.param(t), window.open("/chart/" + (n ? "?" + n : ""), "_blank"))
            }, TradingView.checkUserLanguage = function(t) { is_authenticated || $.post("/", { check_language: 1 }, function(e) { e && !TVDialogs.modalDialog && "function" == typeof t && t(e) }) }, TradingView.unifiedSpinner = function(t, e) {
                var i, n = { lines: 17, length: 0, width: 3, radius: 20, corners: 1, color: "#00A2E2", opacity: .3, rotate: 0, direction: 1, speed: 1.5, trail: 60, fps: 20, className: "spinner", zIndex: 2e9, top: "50%", left: "50%", shadow: !1, hwaccel: !1 },
                    o = TradingView.unifiedSpinner.presets[t];
                return o && (n = $.extend(n, o)), i = $.extend({}, n, e), new Spinner(i)
            }, TradingView.unifiedSpinner.presets = { mini: { radius: 8, width: 2, lines: 14 }, micro: { radius: 4, width: 2, lines: 12 }, medium: { radius: 16, width: 3, lines: 14 } }, $(window).load(function() { window.loaded = !0 }), TradingView.overrideGitHubLink = function(t, e) {
                return e.preventDefault(), window.location.href = t, !1
            }, TradingView.importScriptWhenDOMisLoaded = function(t, e) {
                var i, n = "function" == typeof e;
                return $('script[src="' + t + '"]')[0] && n ? void e() : (i = document.createElement("script"), i.type = "text/javascript", i.src = t, n && (i.onload = e), void document.head.appendChild(i))
            }, TradingView.getChar = function(t) {
                return null == t.which ? t.keyCode < 32 ? null : String.fromCharCode(t.keyCode) : 0 !== t.which && 0 !== t.charCode ? t.which < 32 ? null : String.fromCharCode(t.which) : null
            }, TradingView.notificationsChanged = new Delegate, loginStateChange.subscribe(null, function(t) {
                t || $(".js-billing-link").each(function() {
                    var t = $(this),
                        e = window.is_authenticated && window.user.show_billing;
                    t.toggleClass("i-hidden", !e), "A" !== this.tagName && (t = t.find("a")), t.attr("href", e ? "/u/" + user.username + "/#billing" : "")
                })
            }), void 0 !== module && module && module.exports && (module.exports = { assert: assert })
        }).call(exports, __webpack_require__(23), __webpack_require__(44), __webpack_require__(65), __webpack_require__(61), __webpack_require__(176), __webpack_require__(6), __webpack_require__(177), __webpack_require__(72), __webpack_require__(7)(module))
    }, , function(t, e, i) {
        "use strict";

        function n(t) {
            var e, i, n, o, s, a;
            if (this._name = t, e = u[t], e || ("UTC" !== t && "Etc/UTC" !== t && TradingView.logError("unknown timezone: " + t), e = { time: [], offset: [] }, this._invalid = !0), e.time.length !== e.offset.length && (TradingView.logError("timezone transition table doesn't match offset table"), e = { time: [], offset: [] }, this._invalid = !0), !e.time_utc) {
                for (i = e.time, n = e.offset, o = i.length, s = Array(o), a = 0; a < o; a++) i[a] *= 1e3, n[a] *= 1e3, s[a] = i[a] - n[a];
                e.time_utc = s
            }
            this.tz = e
        }

        function o(t, e) {}
        var s, a, r, l, c, d, u = i(178);
        n.prototype.offset_utc = function(t) {
            return n._offset(this.tz.time_utc, this.tz.offset, t)
        }, n.prototype.offset_loc = function(t) {
            return n._offset(this.tz.time, this.tz.offset, t)
        }, n.prototype.is_valid = function() {
            return !this._invalid
        }, n._offset = function(t, e, i) {
            var n = o(t, i);
            return n === -1 ? 0 : e[n]
        }, s = function(t) {
            return 0 | t
        }, a = function(t) {
            return 60 * t * 1e3
        }, r = function(t) {
            return 1e3 * t
        }, l = function(t, e) {
            return s((s(t / 1e3) - s(e / 1e3)) / 60)
        }, c = function(t, e) {
            return s(s(t / 1e3) - s(e / 1e3))
        }, d = {
            SUNDAY: 1,
            MONDAY: 2,
            TUESDAY: 3,
            WEDNESDAY: 4,
            THURSDAY: 5,
            FRIDAY: 6,
            SATURDAY: 7,
            JANUARY: 0,
            DECEMBER: 11,
            YEAR: 1,
            MONTH: 2,
            WEEK_OF_YEAR: 3,
            DAY_OF_MONTH: 5,
            DAY_OF_YEAR: 6,
            DAY_OF_WEEK: 7,
            HOUR_OF_DAY: 11,
            MINUTE: 12,
            SECOND: 13,
            minutesPerDay: 1440,
            secondsPerDay: a(1440),
            get_year: function(t) {
                return t.getUTCFullYear()
            },
            get_month: function(t) {
                return t.getUTCMonth()
            },
            get_hours: function(t) {
                return t.getUTCHours()
            },
            get_minutes: function(t) {
                return t.getUTCMinutes()
            },
            get_seconds: function(t) {
                return t.getUTCSeconds()
            },
            get_day_of_month: function(t) {
                return t.getUTCDate()
            },
            get_day_of_week: function(t) {
                return t.getUTCDay() + 1
            },
            get_day_of_year: function(t) {
                var e = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
                return s((t.getTime() - e) / d.secondsPerDay) + 1
            },
            get_week_of_year: function(t) {
                var e = Date.UTC(t.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                    i = d.clone(t);
                return d.set_hms(i, 0, 0, 0, 0), i.setUTCDate(i.getUTCDate() + 4 - (i.getUTCDay() || 7)), s(((i.getTime() - e) / d.secondsPerDay + 1) / 7)
            },
            get_minutes_from_midnight: function(t) {
                return 60 * d.get_hours(t) + d.get_minutes(t)
            },
            set_hms: function(t, e, i, n, o) { t.setUTCHours(e), t.setUTCMinutes(i), t.setUTCSeconds(n), t.setUTCMilliseconds(o) },
            add_days_considering_dst: function(t, e, i) {
                var n, o = t.offset_utc(e),
                    s = this.clone(e);
                return this.add_date(s, i), n = t.offset_utc(s), s.setTime(s.getTime() + o - n), s
            },
            add_date: function(t, e) { t.setTime(t.getTime() + e * d.secondsPerDay) },
            clone: function(t) {
                return new Date(t.getTime())
            },
            get_days_per_year: function(t) {
                var e = t.getUTCFullYear();
                return this.days_per_year(e)
            },
            days_per_year: function(t) {
                return t % 4 !== 0 || t % 100 === 0 && t % 400 !== 0 ? 365 : 366
            },
            get_part: function(t, e) {
                switch (e) {
                    case d.YEAR:
                        return d.get_year(t);
                    case d.MONTH:
                        return d.get_month(t);
                    case d.DAY_OF_MONTH:
                        return d.get_day_of_month(t);
                    case d.WEEK_OF_YEAR:
                        return d.get_week_of_year(t);
                    case d.DAY_OF_WEEK:
                        return d.get_day_of_week(t);
                    case d.HOUR_OF_DAY:
                        return d.get_hours(t);
                    case d.MINUTE:
                        return d.get_minutes(t);
                    case d.DAY_OF_YEAR:
                        return d.get_day_of_year(t);
                    case d.SECOND:
                        return d.get_seconds(t);
                    default:
                        return t.getTime()
                }
            },
            time_minutes: a,
            time_seconds: r,
            time_minutes_diff: l,
            time_seconds_diff: c,
            utc_to_cal: function(t, e) {
                var i = t.offset_utc(e);
                return new Date(e + i)
            },
            get_cal: function(t, e, i, n) {
                var o = new Date(Date.UTC(e, i, n)),
                    s = t.offset_utc(+o);
                return new Date(o.valueOf() - s)
            },
            get_cal_utc: function(t, e, i) {
                return new Date(Date.UTC(t, e, i))
            },
            cal_to_utc: function(t, e) {
                var i = e.getTime(),
                    n = t.offset_loc(i);
                return i - n
            },
            get_timezone: function(t) {
                return new n(t)
            },
            shift_day: function(t, e) {
                var i = t - 1;
                return i += e, i > 6 ? i %= 7 : i < 0 && (i = (7 + i % 7) % 7), i + 1
            }
        }, t.exports = d
    }, function(t, e) {
        ! function() {
            var e = { "America/New_York": { time: [-2717668562, -1633298400, -1615154400, -1601848800, -1583704800, -1570399200, -1551650400, -1536530400, -1523224800, -1504476e3, -1491775200, -1473026400, -1459720800, -1441576800, -1428271200, -1410127200, -1396821600, -1378677600, -1365372e3, -1347228e3, -1333922400, -1315173600, -1301868e3, -1283724e3, -1270418400, -1252274400, -1238968800, -1220824800, -1207519200, -1189375200, -1176069600, -1157320800, -114462e4, -1125871200, -1112565600, -1094421600, -1081116e3, -1062972e3, -1049666400, -1031522400, -1018216800, -1000072800, -986767200, -968018400, -955317600, -936568800, -923263200, -905119200, -891813600, -880236e3, -76941e4, -765410400, -747266400, -733960800, -715816800, -702511200, -684367200, -671061600, -652917600, -639612e3, -620863200, -608162400, -589413600, -576108e3, -557964e3, -544658400, -526514400, -513208800, -495064800, -481759200, -463615200, -447285600, -431560800, -415836e3, -400111200, -384386400, -368661600, -352936800, -337212e3, -321487200, -305762400, -289432800, -273708e3, -257983200, -242258400, -226533600, -210808800, -195084e3, -179359200, -163634400, -147909600, -13158e4, -11646e4, -100130400, -84405600, -68680800, -52956e3, -37231200, -21506400, -5781600, 9943200, 25668e3, 41392800, 57722400, 73447200, 89172e3, 104896800, 120621600, 126669600, 152071200, 162352800, 183520800, 199245600, 215575200, 230695200, 247024800, 262749600, 278474400, 294199200, 309924e3, 325648800, 341373600, 357098400, 372823200, 388548e3, 404877600, 419997600, 436327200, 452052e3, 467776800, 483501600, 499226400, 514951200, 530676e3, 544586400, 562125600, 576036e3, 59418e4, 607485600, 625629600, 638935200, 657079200, 670989600, 688528800, 702439200, 719978400, 733888800, 752032800, 765338400, 783482400, 796788e3, 814932e3, 828842400, 846381600, 860292e3, 877831200, 891741600, 909280800, 923191200, 941335200, 954640800, 972784800, 986090400, 1004234400, 1018144800, 1035684e3, 1049594400, 1067133600, 1081044e3, 1099188e3, 1112493600, 1130637600, 1143943200, 1162087200, 1173578400, 1194141600, 1205028e3, 1225591200, 1236477600, 1257040800, 1268532e3, 1289095200, 1299981600, 1320544800, 1331431200, 1351994400, 1362880800, 1383444e3, 1394330400, 1414893600, 142578e4, 1446343200, 1457834400, 1478397600, 1489284e3, 1509847200, 1520733600, 1541296800, 1552183200, 1572746400, 1583632800, 1604196e3, 1615687200, 1636250400, 1647136800, 16677e5, 1678586400, 1699149600, 1710036e3, 1730599200, 1741485600, 1762048800, 1772935200, 1793498400, 1804989600, 1825552800, 1836439200, 1857002400, 1867888800, 1888452e3, 1899338400, 1919901600, 1930788e3], offset: [-17762, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3] }, "America/Los_Angeles": { time: [-2717668378, -1633298400, -1615154400, -1601848800, -1583704800, -880236e3, -769420800, -765410400, -687996e3, -662680800, -620863200, -608162400, -589413600, -576108e3, -557964e3, -544658400, -526514400, -513208800, -495064800, -481759200, -463615200, -450309600, -431560800, -418255200, -400111200, -386805600, -368661600, -355356e3, -337212e3, -323906400, -305762400, -292456800, -273708e3, -261007200, -242258400, -226533600, -210808800, -195084e3, -179359200, -163634400, -147909600, -13158e4, -11646e4, -100130400, -84405600, -68680800, -52956e3, -37231200, -21506400, -5781600, 9943200, 25668e3, 41392800, 57722400, 73447200, 89172e3, 104896800, 120621600, 126669600, 152071200, 162352800, 183520800, 199245600, 215575200, 230695200, 247024800, 262749600, 278474400, 294199200, 309924e3, 325648800, 341373600, 357098400, 372823200, 388548e3, 404877600, 419997600, 436327200, 452052e3, 467776800, 483501600, 499226400, 514951200, 530676e3, 544586400, 562125600, 576036e3, 59418e4, 607485600, 625629600, 638935200, 657079200, 670989600, 688528800, 702439200, 719978400, 733888800, 752032800, 765338400, 783482400, 796788e3, 814932e3, 828842400, 846381600, 860292e3, 877831200, 891741600, 909280800, 923191200, 941335200, 954640800, 972784800, 986090400, 1004234400, 1018144800, 1035684e3, 1049594400, 1067133600, 1081044e3, 1099188e3, 1112493600, 1130637600, 1143943200, 1162087200, 1173578400, 1194141600, 1205028e3, 1225591200, 1236477600, 1257040800, 1268532e3, 1289095200, 1299981600, 1320544800, 1331431200, 1351994400, 1362880800, 1383444e3, 1394330400, 1414893600, 142578e4, 1446343200, 1457834400, 1478397600, 1489284e3, 1509847200, 1520733600, 1541296800, 1552183200, 1572746400, 1583632800, 1604196e3, 1615687200, 1636250400, 1647136800, 16677e5, 1678586400, 1699149600, 1710036e3, 1730599200, 1741485600, 1762048800, 1772935200, 1793498400, 1804989600, 1825552800, 1836439200, 1857002400, 1867888800, 1888452e3, 1899338400, 1919901600, 1930788e3], offset: [-28378, -28800, -25200, -28800, -25200, -28800, -25200, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800] }, "America/Chicago": { time: [-2717668236, -1633298400, -1615154400, -1601848800, -1583704800, -1563746400, -1551650400, -1538949600, -1520200800, -1504476e3, -1491775200, -1473026400, -1459720800, -1441576800, -1428271200, -1410127200, -1396821600, -1378677600, -1365372e3, -1347228e3, -1333922400, -1315173600, -1301868e3, -1283724e3, -1270418400, -1252274400, -1238968800, -1220824800, -1207519200, -1189375200, -1176069600, -1157320800, -114462e4, -1125871200, -1112565600, -1094421600, -1081116e3, -1067810400, -1045432800, -1031522400, -1018216800, -1000072800, -986767200, -968018400, -955317600, -936568800, -923263200, -905119200, -891813600, -880236e3, -769413600, -765410400, -747266400, -733960800, -715816800, -702511200, -684367200, -671061600, -652917600, -639612e3, -620863200, -608162400, -589413600, -576108e3, -557964e3, -544658400, -526514400, -513208800, -495064800, -481759200, -463615200, -447285600, -431560800, -415836e3, -400111200, -384386400, -368661600, -352936800, -337212e3, -321487200, -305762400, -289432800, -273708e3, -257983200, -242258400, -226533600, -210808800, -195084e3, -179359200, -163634400, -147909600, -13158e4, -11646e4, -100130400, -84405600, -68680800, -52956e3, -37231200, -21506400, -5781600, 9943200, 25668e3, 41392800, 57722400, 73447200, 89172e3, 104896800, 120621600, 126669600, 152071200, 162352800, 183520800, 199245600, 215575200, 230695200, 247024800, 262749600, 278474400, 294199200, 309924e3, 325648800, 341373600, 357098400, 372823200, 388548e3, 404877600, 419997600, 436327200, 452052e3, 467776800, 483501600, 499226400, 514951200, 530676e3, 544586400, 562125600, 576036e3, 59418e4, 607485600, 625629600, 638935200, 657079200, 670989600, 688528800, 702439200, 719978400, 733888800, 752032800, 765338400, 783482400, 796788e3, 814932e3, 828842400, 846381600, 860292e3, 877831200, 891741600, 909280800, 923191200, 941335200, 954640800, 972784800, 986090400, 1004234400, 1018144800, 1035684e3, 1049594400, 1067133600, 1081044e3, 1099188e3, 1112493600, 1130637600, 1143943200, 1162087200, 1173578400, 1194141600, 1205028e3, 1225591200, 1236477600, 1257040800, 1268532e3, 1289095200, 1299981600, 1320544800, 1331431200, 1351994400, 1362880800, 1383444e3, 1394330400, 1414893600, 142578e4, 1446343200, 1457834400, 1478397600, 1489284e3, 1509847200, 1520733600, 1541296800, 1552183200, 1572746400, 1583632800, 1604196e3, 1615687200, 1636250400, 1647136800, 16677e5, 1678586400, 1699149600, 1710036e3, 1730599200, 1741485600, 1762048800, 1772935200, 1793498400, 1804989600, 1825552800, 1836439200, 1857002400, 1867888800, 1888452e3, 1899338400, 1919901600, 1930788e3], offset: [-21036, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600] }, "America/Phoenix": { time: [-2717670498, -1633298400, -1615154400, -1601848800, -1583704800, -880236e3, -820540740, -812678340, -796867140, -84405600, -68680800, 1924966800], offset: [-26898, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200] }, "America/Toronto": { time: [-2366755200, -1632088800, -1615154400, -1601771400, -1583712e3, -1567375200, -1554681600, -1534716e3, -1524088800, -1503266400, -149238e4, -1471816800, -1460930400, -1440972e3, -1428876e3, -1409522400, -1397426400, -1378072800, -1365976800, -1346623200, -1333922400, -1315173600, -1301868e3, -1283724e3, -1270418400, -1252274400, -1238968800, -1220824800, -1207519200, -1188770400, -1176069600, -1157320800, -1144015200, -1125871200, -1112565600, -1094421600, -1081116e3, -1062972e3, -1049666400, -1031522400, -1018216800, -1000072800, -986767200, -968018400, -955317600, -936568800, -880232400, -76941e4, -765410400, -747266400, -733960800, -715824e3, -702518400, -684374400, -671068800, -652924800, -634176e3, -620863200, -602719200, -589413600, -576108e3, -557964e3, -544658400, -526514400, -513208800, -495064800, -481759200, -463615200, -450309600, -431560800, -418255200, -400111200, -384386400, -368661600, -352936800, -337212e3, -321487200, -305762400, -289432800, -273708e3, -257983200, -242258400, -226533600, -210808800, -195084e3, -179359200, -163634400, -147909600, -13158e4, -11646e4, -100130400, -84405600, -68680800, -52956e3, -37231200, -21506400, -5781600, 9943200, 25668e3, 41392800, 57722400, 73447200, 89172e3, 104896800, 120621600, 136346400, 152071200, 167796e3, 183520800, 199245600, 215575200, 230695200, 247024800, 262749600, 278474400, 294199200, 309924e3, 325648800, 341373600, 357098400, 372823200, 388548e3, 404877600, 419997600, 436327200, 452052e3, 467776800, 483501600, 499226400, 514951200, 530676e3, 544586400, 562125600, 576036e3, 59418e4, 607485600, 625629600, 638935200, 657079200, 670989600, 688528800, 702439200, 719978400, 733888800, 752032800, 765338400, 783482400, 796788e3, 814932e3, 828842400, 846381600, 860292e3, 877831200, 891741600, 909280800, 923191200, 941335200, 954640800, 972784800, 986090400, 1004234400, 1018144800, 1035684e3, 1049594400, 1067133600, 1081044e3, 1099188e3, 1112493600, 1130637600, 1143943200, 1162087200, 1173578400, 1194141600, 1205028e3, 1225591200, 1236477600, 1257040800, 1268532e3, 1289095200, 1299981600, 1320544800, 1331431200, 1351994400, 1362880800, 1383444e3, 1394330400, 1414893600, 142578e4, 1446343200, 1457834400, 1478397600, 1489284e3, 1509847200, 1520733600, 1541296800, 1552183200, 1572746400, 1583632800, 1604196e3, 1615687200, 1636250400, 1647136800, 16677e5, 1678586400, 1699149600, 1710036e3, 1730599200, 1741485600, 1762048800, 1772935200, 1793498400, 1804989600, 1825552800, 1836439200, 1857002400, 1867888800, 1888452e3, 1899338400, 1919901600, 1930788e3], offset: [-19052, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -14400, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3, -14400, -18e3] }, "America/Vancouver": { time: [-2713910400, -1632088800, -1615154400, -880236e3, -769420800, -765410400, -747266400, -732751200, -715816800, -702511200, -684367200, -671061600, -652917600, -639612e3, -620863200, -608162400, -589413600, -576108e3, -557964e3, -544658400, -526514400, -513208800, -495064800, -481759200, -463615200, -450309600, -431560800, -418255200, -400111200, -386805600, -368661600, -355356e3, -337212e3, -323906400, -305762400, -292456800, -273708e3, -261007200, -242258400, -226533600, -210808800, -195084e3, -179359200, -163634400, -147909600, -13158e4, -11646e4, -100130400, -84405600, -68680800, -52956e3, -37231200, -21506400, -5781600, 9943200, 25668e3, 41392800, 57722400, 73447200, 89172e3, 104896800, 120621600, 136346400, 152071200, 167796e3, 183520800, 199245600, 215575200, 230695200, 247024800, 262749600, 278474400, 294199200, 309924e3, 325648800, 341373600, 357098400, 372823200, 388548e3, 404877600, 419997600, 436327200, 452052e3, 467776800, 483501600, 499226400, 514951200, 530676e3, 544586400, 562125600, 576036e3, 59418e4, 607485600, 625629600, 638935200, 657079200, 670989600, 688528800, 702439200, 719978400, 733888800, 752032800, 765338400, 783482400, 796788e3, 814932e3, 828842400, 846381600, 860292e3, 877831200, 891741600, 909280800, 923191200, 941335200, 954640800, 972784800, 986090400, 1004234400, 1018144800, 1035684e3, 1049594400, 1067133600, 1081044e3, 1099188e3, 1112493600, 1130637600, 1143943200, 1162087200, 1173578400, 1194141600, 1205028e3, 1225591200, 1236477600, 1257040800, 1268532e3, 1289095200, 1299981600, 1320544800, 1331431200, 1351994400, 1362880800, 1383444e3, 1394330400, 1414893600, 142578e4, 1446343200, 1457834400, 1478397600, 1489284e3, 1509847200, 1520733600, 1541296800, 1552183200, 1572746400, 1583632800, 1604196e3, 1615687200, 1636250400, 1647136800, 16677e5, 1678586400, 1699149600, 1710036e3, 1730599200, 1741485600, 1762048800, 1772935200, 1793498400, 1804989600, 1825552800, 1836439200, 1857002400, 1867888800, 1888452e3, 1899338400, 1919901600, 1930788e3], offset: [-29548, -28800, -25200, -28800, -25200, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800, -25200, -28800] }, "America/Argentina/Buenos_Aires": { time: [-2372112e3, -1567468800, -1233446400, -1222992e3, -1205971200, -1194048e3, -117288e4, -1162512e3, -1141344e3, -1130976e3, -1109808e3, -109944e4, -1078272e3, -1067817600, -1046649600, -1036281600, -1015113600, -1004745600, -983577600, -973209600, -952041600, -941587200, -931046400, -900892800, -890352e3, -83376e4, -82728e4, -752284800, -733795200, -197337600, -190857600, -184204800, -164505600, -152668800, -132969600, -121132800, -101433600, -86832e3, -71107200, -54777600, -39052800, -23328e3, -7603200, 128131200, 136598400, 596937600, 605059200, 624412800, 636508800, 656467200, 667958400, 687916800, 699408e3, 719366400, 731462400, 938912400, 952041600, 1198972800, 1205625600, 1224374400, 1237075200, 1924981200], offset: [-14028, -15408, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -14400, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -10800, -10800, -7200, -10800, -7200, -10800] }, "America/El_Salvador": { time: [-1546300800, 546998400, 559699200, 578448e3, 591148800, 1924970400], offset: [-21408, -21600, -18e3, -21600, -18e3, -21600] }, "America/Sao_Paulo": { time: [-1767225600, -1206968400, -1191369600, -1175385600, -1159833600, -633830400, -622076400, -602294400, -59184e4, -570758400, -560217600, -539136e3, -53136e4, -195436800, -184204800, -155174400, -150076800, -128908800, -121132800, -99964800, -89596800, -68428800, -57974400, 499737600, 511228800, 530582400, 540259200, 562118400, 571190400, 592963200, 602035200, 624412800, 634694400, 656467200, 666748800, 687916800, 697593600, 719971200, 728438400, 750816e3, 761702400, 782265600, 793152e3, 813715200, 823996800, 84456e4, 856051200, 876096e3, 888710400, 908064e3, 919555200, 938908800, 951609600, 970963200, 982454400, 1003017600, 1013904e3, 1036281600, 1045353600, 1066521600, 1076803200, 1099353600, 1108857600, 1129420800, 1140307200, 1162684800, 1172361600, 119232e4, 1203206400, 1224374400, 1234656e3, 1255824e3, 1266710400, 1287273600, 129816e4, 1318723200, 1330214400, 1350777600, 1361059200, 1382227200, 1392508800, 1413676800, 1424563200, 1445126400, 1456012800, 1476576e3, 1487462400, 1508025600, 1518912e3, 154008e4, 1550361600, 1571529600, 1581811200, 1602979200, 1613865600, 1634428800, 1645315200, 1665878400, 1677369600, 1697328e3, 1708214400, 1729382400, 1739664e3, 1760832e3, 1771718400, 1792281600, 1803168e3, 1823731200, 1834617600, 1855180800, 1866067200, 1887235200, 1897516800, 1918684800, 1928966400], offset: [-11188, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200, -10800, -7200] }, "America/Bogota": { time: [-2707689600, -1739059200, 704851200, 733881600, 1924974e3], offset: [-17776, -17776, -18e3, -14400, -18e3] }, "Europe/Moscow": { time: [-2840140800, -1688256e3, -165681e4, -1641340800, -1627956e3, -1618700400, -1596416400, -1593813600, -1589846400, -1542416400, -1539478800, -1525305600, -1522713600, -1491177600, -1247529600, 354931200, 370742400, 386467200, 402278400, 418003200, 433814400, 449625600, 465361200, 481082400, 496810800, 512532e3, 528260400, 543981600, 55971e4, 575431200, 591159600, 606880800, 622609200, 638330400, 654663600, 670388400, 686113200, 695786400, 701823600, 717548400, 733284e3, 749012400, 764733600, 780462e3, 796183200, 811911600, 828237600, 846385200, 859687200, 877834800, 891136800, 909284400, 922586400, 941338800, 954036e3, 972788400, 985485600, 1004238e3, 101754e4, 1035687600, 1048989600, 1067137200, 1080439200, 1099191600, 1111888800, 1130641200, 1143338400, 1162090800, 1174788e3, 1193540400, 1206842400, 122499e4, 1238292e3, 1256439600, 1269741600, 1288494e3, 1301191200, 1414288800, 1925002800], offset: [9017, 9017, 9079, 12679, 9079, 16279, 12679, 16279, 14400, 10800, 14400, 18e3, 14400, 10800, 7200, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 10800, 7200, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800, 14400, 10800] }, "Europe/Athens": { time: [-2344636800, -1686095940, -1182988800, -1178150400, -906854400, -904867200, -85725e4, -844473600, -828230400, -812419200, -552355200, -541641600, 166492800, 186195600, 198036e3, 213764400, 228880800, 244090800, 260330400, 275457600, 291805200, 307418400, 323395200, 338947200, 354682800, 370411200, 386132400, 401860800, 417582e3, 433310400, 449031600, 465364800, 481086e3, 496814400, 512535600, 528264e3, 543985200, 559713600, 575434800, 591163200, 606884400, 622612800, 638334e3, 654667200, 670388400, 686116800, 701838e3, 717566400, 733287600, 749016e3, 764737200, 780465600, 796186800, 811915200, 828241200, 846388800, 859690800, 877838400, 891140400, 909288e3, 92259e4, 941342400, 954039600, 972792e3, 985489200, 1004241600, 1017543600, 1035691200, 1048993200, 1067140800, 1080442800, 1099195200, 1111892400, 1130644800, 1143342e3, 1162094400, 1174791600, 1193544e3, 1206846e3, 1224993600, 1238295600, 1256443200, 1269745200, 1288497600, 1301194800, 1319947200, 1332644400, 1351396800, 1364698800, 1382846400, 1396148400, 1414296e3, 1427598e3, 1445745600, 1459047600, 14778e5, 1490497200, 1509249600, 1521946800, 1540699200, 1554001200, 1572148800, 1585450800, 1603598400, 1616900400, 1635652800, 164835e4, 1667102400, 1679799600, 1698552e3, 1711854e3, 1730001600, 1743303600, 1761451200, 1774753200, 1792900800, 1806202800, 1824955200, 1837652400, 1856404800, 1869102e3, 1887854400, 1901156400, 1919304e3, 1932606e3], offset: [5692, 5692, 7200, 10800, 7200, 10800, 7200, 3600, 7200, 3600, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200, 10800, 7200] }, "Europe/Berlin": { time: [-2422051200, -1693702800, -1680476400, -1663452e3, -1650142800, -1632002400, -1618693200, -938901600, -85725e4, -844552800, -828219600, -812498400, -79677e4, -781048800, -776552400, -765925200, -761173200, -748476e3, -733266e3, -717627600, -714603600, -71037e4, -701902800, -684972e3, -670453200, -654127200, -639003600, 323834400, 338958e3, 354679200, 370407600, 386128800, 401857200, 417578400, 433306800, 449028e3, 465361200, 481082400, 496810800, 512532e3, 528260400, 543981600, 55971e4, 575431200, 591159600, 606880800, 622609200, 638330400, 654663600, 670384800, 686113200, 701834400, 717562800, 733284e3, 749012400, 764733600, 780462e3, 796183200, 811911600, 828237600, 846385200, 859687200, 877834800, 891136800, 909284400, 922586400, 941338800, 954036e3, 972788400, 985485600, 1004238e3, 101754e4, 1035687600, 1048989600, 1067137200, 1080439200, 1099191600, 1111888800, 1130641200, 1143338400, 1162090800, 1174788e3, 1193540400, 1206842400, 122499e4, 1238292e3, 1256439600, 1269741600, 1288494e3, 1301191200, 1319943600, 1332640800, 1351393200, 1364695200, 1382842800, 1396144800, 1414292400, 1427594400, 1445742e3, 1459044e3, 1477796400, 1490493600, 1509246e3, 1521943200, 1540695600, 1553997600, 1572145200, 1585447200, 1603594800, 1616896800, 1635649200, 1648346400, 1667098800, 1679796e3, 1698548400, 1711850400, 1729998e3, 17433e5, 1761447600, 1774749600, 1792897200, 1806199200, 1824951600, 1837648800, 1856401200, 1869098400, 1887850800, 1901152800, 1919300400, 1932602400], offset: [3208, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 10800, 7200, 3600, 7200, 3600, 7200, 10800, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600] }, "Europe/London": { time: [-3852662400, -1691964e3, -1680469200, -1664143200, -1650142800, -1633903200, -1617483600, -1601848800, -1586034e3, -1570399200, -1552165200, -1538344800, -152253e4, -15075e5, -1490562e3, -1473631200, -1460926800, -1442786400, -1428872400, -1410732e3, -1396213200, -1379282400, -1364763600, -1348437600, -1333314e3, -1315778400, -1301259600, -1284328800, -126981e4, -1253484e3, -1238360400, -1221429600, -1206910800, -118998e4, -1175461200, -1159135200, -1143406800, -1126476e3, -1111957200, -1095631200, -1080507600, -1063576800, -1049058e3, -1032127200, -1017608400, -1001282400, -986158800, -969228e3, -950475600, -942012e3, -904514400, -896043600, -875484e3, -864594e3, -844034400, -832539600, -812584800, -798066e3, -781048800, -772059600, -764802e3, -748476e3, -733352400, -719445600, -717026400, -706741200, -699483600, -687996e3, -668034e3, -654732e3, -636584400, -622072800, -605739600, -590623200, -57429e4, -558568800, -542235600, -527119200, -512600400, -496274400, -481150800, -46422e4, -449701200, -432165600, -417646800, -401320800, -386197200, -369266400, -354747600, -337816800, -323298e3, -306972e3, -291848400, -276732e3, -257979600, -245282400, -22653e4, -213228e3, -195080400, -182383200, -163630800, -150933600, -132181200, -119484e3, -100731600, -88034400, -68677200, -59004e3, 57726e3, 69818400, 89175600, 101268e3, 120625200, 132717600, 152074800, 164167200, 183524400, 196221600, 214974e3, 227671200, 246423600, 259120800, 278478e3, 290570400, 309927600, 32202e4, 341377200, 354675600, 372823200, 386125200, 404272800, 417574800, 435722400, 449024400, 467776800, 481078800, 499226400, 512528400, 530676e3, 543978e3, 562125600, 575427600, 593575200, 606877200, 625629600, 638326800, 657079200, 670381200, 688528800, 701830800, 719978400, 733280400, 751428e3, 76473e4, 782877600, 796179600, 814327200, 828234e3, 846381600, 859683600, 877831200, 891133200, 909280800, 922582800, 941335200, 954032400, 972784800, 985482e3, 1004234400, 1017536400, 1035684e3, 1048986e3, 1067133600, 1080435600, 1099188e3, 1111885200, 1130637600, 1143334800, 1162087200, 1174784400, 1193536800, 1206838800, 1224986400, 1238288400, 1256436e3, 1269738e3, 1288490400, 1301187600, 131994e4, 1332637200, 1351389600, 1364691600, 1382839200, 1396141200, 1414288800, 1427590800, 1445738400, 1459040400, 1477792800, 149049e4, 1509242400, 1521939600, 1540692e3, 1553994e3, 1572141600, 1585443600, 1603591200, 1616893200, 1635645600, 1648342800, 1667095200, 1679792400, 1698544800, 1711846800, 1729994400, 1743296400, 1761444e3, 1774746e3, 1792893600, 1806195600, 1824948e3, 1837645200, 1856397600, 1869094800, 1887847200, 1901149200, 1919296800, 1932598800], offset: [-75, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 0, 3600, 0, 3600, 7200, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0] }, "Europe/Madrid": { time: [-2177452800, -1661734800, -1648425600, -1631926800, -1616889600, -1601254800, -1585353600, -1442451600, -1427673600, -1379293200, -1364774400, -1348448400, -1333324800, -1316394e3, -1301270400, -1284339600, -1269820800, -1029114e3, -1017619200, -1002848400, -986169600, -969238800, -954115200, -940208400, -873075600, -862531200, -842835600, -828230400, -811386e3, -796003200, -779936400, -765414e3, -748486800, -733881600, -652323600, -639183600, 135126e3, 150253200, 167180400, 181702800, 196815600, 212547600, 22887e4, 243997200, 260406e3, 276051600, 29178e4, 307508400, 323834400, 338958e3, 354679200, 370407600, 386128800, 401857200, 417578400, 433306800, 449028e3, 465361200, 481082400, 496810800, 512532e3, 528260400, 543981600, 55971e4, 575431200, 591159600, 606880800, 622609200, 638330400, 654663600, 670384800, 686113200, 701834400, 717562800, 733284e3, 749012400, 764733600, 780462e3, 796183200, 811911600, 828237600, 846385200, 859687200, 877834800, 891136800, 909284400, 922586400, 941338800, 954036e3, 972788400, 985485600, 1004238e3, 101754e4, 1035687600, 1048989600, 1067137200, 1080439200, 1099191600, 1111888800, 1130641200, 1143338400, 1162090800, 1174788e3, 1193540400, 1206842400, 122499e4, 1238292e3, 1256439600, 1269741600, 1288494e3, 1301191200, 1319943600, 1332640800, 1351393200, 1364695200, 1382842800, 1396144800, 1414292400, 1427594400, 1445742e3, 1459044e3, 1477796400, 1490493600, 1509246e3, 1521943200, 1540695600, 1553997600, 1572145200, 1585447200, 1603594800, 1616896800, 1635649200, 1648346400, 1667098800, 1679796e3, 1698548400, 1711850400, 1729998e3, 17433e5, 1761447600, 1774749600, 1792897200, 1806199200, 1824951600, 1837648800, 1856401200, 1869098400, 1887850800, 1901152800, 1919300400, 1932602400], offset: [-884, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600] }, "Europe/Paris": { time: [-2486678340, -1855958340, -1689814800, -1680393600, -1665363600, -1648339200, -1635123600, -1616889600, -1604278800, -158544e4, -1574038800, -1552262400, -1539997200, -1520553600, -1507510800, -1490572800, -1470618e3, -1459123200, -1444006800, -1427673600, -1411952400, -1396224e3, -1379293200, -1364774400, -1348448400, -1333324800, -1316394e3, -1301270400, -1284339600, -1269820800, -1253494800, -1238371200, -1221440400, -1206921600, -1191200400, -1175472e3, -1160355600, -1143417600, -1127696400, -1111968e3, -1096851600, -1080518400, -1063587600, -1049068800, -1033347600, -1017619200, -1002502800, -986169600, -969238800, -950486400, -942012e3, -932432400, -85725e4, -844552800, -828219600, -812498400, -800064e3, -796258800, -781048800, -766616400, 196822800, 212547600, 228880800, 244004400, 260330400, 276058800, 29178e4, 307508400, 323834400, 338958e3, 354679200, 370407600, 386128800, 401857200, 417578400, 433306800, 449028e3, 465361200, 481082400, 496810800, 512532e3, 528260400, 543981600, 55971e4, 575431200, 591159600, 606880800, 622609200, 638330400, 654663600, 670384800, 686113200, 701834400, 717562800, 733284e3, 749012400, 764733600, 780462e3, 796183200, 811911600, 828237600, 846385200, 859687200, 877834800, 891136800, 909284400, 922586400, 941338800, 954036e3, 972788400, 985485600, 1004238e3, 101754e4, 1035687600, 1048989600, 1067137200, 1080439200, 1099191600, 1111888800, 1130641200, 1143338400, 1162090800, 1174788e3, 1193540400, 1206842400, 122499e4, 1238292e3, 1256439600, 1269741600, 1288494e3, 1301191200, 1319943600, 1332640800, 1351393200, 1364695200, 1382842800, 1396144800, 1414292400, 1427594400, 1445742e3, 1459044e3, 1477796400, 1490493600, 1509246e3, 1521943200, 1540695600, 1553997600, 1572145200, 1585447200, 1603594800, 1616896800, 1635649200, 1648346400, 1667098800, 1679796e3, 1698548400, 1711850400, 1729998e3, 17433e5, 1761447600, 1774749600, 1792897200, 1806199200, 1824951600, 1837648800, 1856401200, 1869098400, 1887850800, 1901152800, 1919300400, 1932602400], offset: [561, 561, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 0, 3600, 7200, 3600, 7200, 3600, 7200, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600] }, "Europe/Warsaw": { time: [-2840140800, -1717027200, -1693702800, -1680476400, -1663452e3, -1650142800, -1632002400, -1618693200, -1600466400, -1587157200, -1501718400, -931730400, -85725e4, -844552800, -828219600, -812498400, -796600800, -778723200, -762652800, -748483200, -733266e3, -715212e3, -701902800, -684972e3, -670453200, -654127200, -639003600, -397090800, -386805600, -371084400, -355356e3, -334191600, -323301600, -307580400, -291852e3, -271292400, -260402400, -239842800, -228952800, -208393200, -197503200, -176338800, -166053600, 228877200, 244000800, 260326800, 276055200, 291776400, 307504800, 323830800, 338954400, 354675600, 370404e3, 386125200, 401853600, 417574800, 433303200, 449024400, 465357600, 481078800, 496807200, 512528400, 528256800, 543978e3, 559706400, 575431200, 591159600, 606880800, 622609200, 638330400, 654663600, 670384800, 686113200, 701834400, 717562800, 733284e3, 749012400, 764733600, 780462e3, 796183200, 811911600, 828237600, 846385200, 859687200, 877834800, 891136800, 909284400, 922586400, 941338800, 954036e3, 972788400, 985485600, 1004238e3, 101754e4, 1035687600, 1048989600, 1067137200, 1080439200, 1099191600, 1111888800, 1130641200, 1143338400, 1162090800, 1174788e3, 1193540400, 1206842400, 122499e4, 1238292e3, 1256439600, 1269741600, 1288494e3, 1301191200, 1319943600, 1332640800, 1351393200, 1364695200, 1382842800, 1396144800, 1414292400, 1427594400, 1445742e3, 1459044e3, 1477796400, 1490493600, 1509246e3, 1521943200, 1540695600, 1553997600, 1572145200, 1585447200, 1603594800, 1616896800, 1635649200, 1648346400, 1667098800, 1679796e3, 1698548400, 1711850400, 1729998e3, 17433e5, 1761447600, 1774749600, 1792897200, 1806199200, 1824951600, 1837648800, 1856401200, 1869098400, 1887850800, 1901152800, 1919300400, 1932602400], offset: [5040, 5040, 3600, 7200, 3600, 7200, 3600, 7200, 7200, 10800, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600, 7200, 3600] }, "Australia/Sydney": { time: [-2364076800, -1672531140, -1665352800, -883605600, -876088800, -860364e3, -844639200, -828309600, -813189600, 57722400, 68007600, 89172e3, 100062e3, 120621600, 131511600, 152071200, 162961200, 183520800, 195015600, 215575200, 226465200, 247024800, 257914800, 278474400, 289364400, 309924e3, 320814e3, 341373600, 352263600, 372823200, 386737200, 404877600, 415767600, 436327200, 447217200, 467776800, 478666800, 499226400, 511326e3, 530071200, 542775600, 562125600, 57483e4, 59418e4, 606279600, 625629600, 636519600, 657079200, 667969200, 688528800, 699418800, 719978400, 731473200, 752032800, 762922800, 783482400, 794372400, 814932e3, 828241200, 846381600, 859690800, 877831200, 891140400, 909280800, 92259e4, 941335200, 954039600, 967341600, 985489200, 1004234400, 1017543600, 1035684e3, 1048993200, 1067133600, 1080442800, 1099188e3, 1111892400, 1130637600, 1143946800, 1162087200, 1174791600, 1193536800, 1207450800, 1223172e3, 1238900400, 1254621600, 127035e4, 1286071200, 1301799600, 1317520800, 1333249200, 1349575200, 1365303600, 1381024800, 1396753200, 1412474400, 1428202800, 1443924e3, 1459652400, 1475373600, 1491102e3, 1506823200, 1522551600, 1538877600, 1554606e3, 1570327200, 1586055600, 1601776800, 1617505200, 1633226400, 1648954800, 1664676e3, 1680404400, 1696125600, 1712458800, 172818e4, 1743908400, 1759629600, 1775358e3, 1791079200, 1806807600, 1822528800, 1838257200, 1853978400, 1869706800, 1886032800, 1901761200, 1917482400, 1933210800], offset: [36292, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600] }, "Australia/Brisbane": { time: [-2366755200, -1672531140, -1665352800, -883605600, -876088800, -860364e3, -844639200, -828309600, -813189600, 57722400, 68007600, 625629600, 636519600, 657079200, 667969200, 688528800, 699418800, 1925028e3], offset: [36728, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3] }, "Australia/Adelaide": { time: [-2364076800, -2230156800, -1672531140, -1665352800, -883605600, -876088800, -860364e3, -844639200, -828309600, -813189600, 57722400, 68007600, 89172e3, 100062e3, 120621600, 131511600, 152071200, 162961200, 183520800, 195015600, 215575200, 226465200, 247024800, 257914800, 278474400, 289364400, 309924e3, 320814e3, 341373600, 352263600, 372823200, 384318e3, 404877600, 415767600, 436327200, 447217200, 467776800, 478666800, 499226400, 511326e3, 530071200, 542775600, 562125600, 57483e4, 59418e4, 606279600, 625629600, 637729200, 657079200, 667969200, 688528800, 701233200, 719978400, 731473200, 752032800, 764132400, 783482400, 796186800, 814932e3, 828241200, 846381600, 859690800, 877831200, 891140400, 909280800, 92259e4, 941335200, 954039600, 972784800, 985489200, 1004234400, 1017543600, 1035684e3, 1048993200, 1067133600, 1080442800, 1099188e3, 1111892400, 1130637600, 1143946800, 1162087200, 1174791600, 1193536800, 1207450800, 1223172e3, 1238900400, 1254621600, 127035e4, 1286071200, 1301799600, 1317520800, 1333249200, 1349575200, 1365303600, 1381024800, 1396753200, 1412474400, 1428202800, 1443924e3, 1459652400, 1475373600, 1491102e3, 1506823200, 1522551600, 1538877600, 1554606e3, 1570327200, 1586055600, 1601776800, 1617505200, 1633226400, 1648954800, 1664676e3, 1680404400, 1696125600, 1712458800, 172818e4, 1743908400, 1759629600, 1775358e3, 1791079200, 1806807600, 1822528800, 1838257200, 1853978400, 1869706800, 1886032800, 1901761200, 1917482400, 1933210800], offset: [33260, 32400, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800, 34200, 37800] }, "Australia/ACT": { time: [-2364076800, -1672531140, -1665352800, -883605600, -876088800, -860364e3, -844639200, -828309600, -813189600, 57722400, 68007600, 89172e3, 100062e3, 120621600, 131511600, 152071200, 162961200, 183520800, 195015600, 215575200, 226465200, 247024800, 257914800, 278474400, 289364400, 309924e3, 320814e3, 341373600, 352263600, 372823200, 386737200, 404877600, 415767600, 436327200, 447217200, 467776800, 478666800, 499226400, 511326e3, 530071200, 542775600, 562125600, 57483e4, 59418e4, 606279600, 625629600, 636519600, 657079200, 667969200, 688528800, 699418800, 719978400, 731473200, 752032800, 762922800, 783482400, 794372400, 814932e3, 828241200, 846381600, 859690800, 877831200, 891140400, 909280800, 92259e4, 941335200, 954039600, 967341600, 985489200, 1004234400, 1017543600, 1035684e3, 1048993200, 1067133600, 1080442800, 1099188e3, 1111892400, 1130637600, 1143946800, 1162087200, 1174791600, 1193536800, 1207450800, 1223172e3, 1238900400, 1254621600, 127035e4, 1286071200, 1301799600, 1317520800, 1333249200, 1349575200, 1365303600, 1381024800, 1396753200, 1412474400, 1428202800, 1443924e3, 1459652400, 1475373600, 1491102e3, 1506823200, 1522551600, 1538877600, 1554606e3, 1570327200, 1586055600, 1601776800, 1617505200, 1633226400, 1648954800, 1664676e3, 1680404400, 1696125600, 1712458800, 172818e4, 1743908400, 1759629600, 1775358e3, 1791079200, 1806807600, 1822528800, 1838257200, 1853978400, 1869706800, 1886032800, 1901761200, 1917482400, 1933210800], offset: [36292, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600, 36e3, 39600] }, "Asia/Almaty": { time: [-1441152e3, -1247529600, 354931200, 370742400, 386467200, 402278400, 418003200, 433814400, 449625600, 465361200, 481082400, 496810800, 512532e3, 528260400, 543981600, 55971e4, 575431200, 591159600, 606880800, 622609200, 638330400, 654663600, 701823600, 717548400, 733284e3, 749012400, 764733600, 780462e3, 796183200, 811911600, 828237600, 846385200, 859687200, 877834800, 891136800, 909284400, 922586400, 941338800, 954036e3, 972788400, 985485600, 1004238e3, 101754e4, 1035687600, 1048989600, 1067137200, 1080439200, 1099191600, 1925013600], offset: [18468, 18e3, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600, 25200, 21600] }, "Asia/Ashkhabad": { time: [-1441152e3, -1247529600, 354931200, 370742400, 386467200, 402278400, 418003200, 433814400, 449625600, 465361200, 481082400, 496810800, 512532e3, 528260400, 543981600, 55971e4, 575431200, 591159600, 606880800, 622609200, 638330400, 654663600, 670388400, 686113200, 688521600, 695786400, 192501e4], offset: [14012, 14400, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 21600, 18e3, 18e3, 14400, 14400, 18e3] }, "Asia/Tokyo": { time: [-2587678861, -2335219200, -1017792e3, -683762400, -672357600, -654732e3, -640908e3, -620258400, -609458400, -588808800, -578008800, 1925024400], offset: [33539, 32400, 32400, 32400, 36e3, 32400, 36e3, 32400, 36e3, 32400, 36e3, 32400] }, "Asia/Taipei": { time: [-2335219200, -1017792e3, -766191600, -745804800, -733795200, -716860800, -699580800, -683856e3, -670636800, -65232e4, -639100800, -620784e3, -607564800, -589248e3, -576028800, -562896e3, -541728e3, -528681600, -510192e3, -497145600, -478656e3, -465609600, -449798400, -433987200, -418176e3, -402451200, -38664e4, -370915200, -355104e3, -339379200, -323568e3, -302486400, -291945600, -270950400, -260409600, 134006400, 149817600, 165542400, 181353600, 299635200, 307584e3, 1925020800], offset: [29160, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800] }, "Asia/Singapore": { time: [-2177452800, -2038176e3, -1167609600, -1073001600, -894153600, -879638400, -766972800, -138758400, 378691200, 1925020800], offset: [24925, 24925, 25200, 26400, 26400, 27e3, 32400, 27e3, 27e3, 28800] }, "Asia/Shanghai": { time: [-2177452800, -933465600, -923097600, -908755200, -891561600, 515548800, 52704e4, 545184e3, 558489600, 576633600, 589939200, 608688e3, 621993600, 640137600, 653443200, 671587200, 684892800, 1925020800], offset: [29143, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800] }, "Asia/Seoul": { time: [-1948752e3, -1830384e3, -1017792e3, -767318400, -498096e3, -462672e3, -451699200, -429753600, -418262400, -399513600, -387417600, -368064e3, -355968e3, -336614400, -324518400, -305164800, -293068800, -264902400, 547610400, 560919600, 57906e4, 592369200, 1925024400], offset: [30472, 30600, 32400, 32400, 32400, 30600, 34200, 30600, 34200, 30600, 34200, 30600, 34200, 30600, 34200, 30600, 34200, 30600, 32400, 36e3, 32400, 36e3, 32400] }, "Asia/Tehran": { time: [-1704153600, -757382400, 247190400, 259286400, 277776e3, 283996800, 290822400, 306547200, 322444800, 338515200, 673228800, 685497600, 701222400, 71712e4, 732758400, 748656e3, 764294400, 780192e3, 795830400, 811728e3, 827366400, 843264e3, 858988800, 874886400, 890524800, 906422400, 922060800, 937958400, 953596800, 969494400, 985219200, 1001116800, 1016755200, 1032652800, 1048291200, 1064188800, 1079827200, 1095724800, 1111449600, 1127347200, 1206057600, 1221955200, 123768e4, 1253577600, 1269216e3, 1285113600, 1300752e3, 1316649600, 1332288e3, 1348185600, 1363910400, 1379808e3, 1395446400, 1411344e3, 1426982400, 144288e4, 1458518400, 1474416e3, 1490140800, 1506038400, 1521676800, 1537574400, 1553212800, 1569110400, 1584748800, 1600646400, 1616371200, 1632268800, 1647907200, 1663804800, 1679443200, 1695340800, 1710979200, 1726876800, 1742601600, 1758499200, 1774137600, 1790035200, 1805673600, 1821571200, 1837209600, 1853107200, 1868745600, 1884643200, 1900368e3, 1916265600, 1931904e3], offset: [12344, 12344, 12600, 14400, 18e3, 14400, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600, 16200, 12600] }, "Asia/Dubai": { time: [-1577923200, 1925006400], offset: [13272, 14400] }, "Asia/Kolkata": { time: [-2840140800, -891561600, -872035200, -862617600, -764121600, 1925011800], offset: [21208, 21200, 23400, 19800, 23400, 19800] }, "Asia/Hong_Kong": { time: [-2056665600, -907360200, -891635400, -884217600, -766713600, -747952200, -728512200, -717021e3, -694470600, -683757e3, -668032200, -654726600, -636582600, -623277e3, -605133e3, -591827400, -573683400, -559773e3, -542320200, -528323400, -510179400, -498083400, -478729800, -466633800, -446675400, -435184200, -415225800, -403129800, -383776200, -371680200, -352326600, -340230600, -320877e3, -308781e3, -288822600, -277331400, -257373e3, -245881800, -225923400, -213827400, -194473800, -182377800, -163024200, -148509e3, -132784200, -117059400, -101334600, -85609800, -69280200, -53555400, -37830600, -22105800, -6381e3, 9343800, 25068600, 40793400, 56518200, 72243e3, 88572600, 104297400, 120022200, 126070200, 151471800, 167196600, 182921400, 198646200, 214371e3, 295414200, 309324600, 1925020800], offset: [27402, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800, 32400, 28800] }, "Asia/Bangkok": { time: [-2840140800, -1570060800, 1925017200], offset: [24124, 24124, 25200] }, "Pacific/Auckland": { time: [-3192393600, -1330293600, -1320012e3, -1300658400, -1287352800, -1269208800, -1255903200, -1237759200, -1224453600, -1206309600, -1192399200, -117486e4, -1160949600, -1143410400, -1125871200, -1112565600, -1094421600, -1081116e3, -1062972e3, -1049666400, -1031522400, -1018216800, -1000072800, -986767200, -968018400, -955317600, -936568800, -923263200, 152676e3, 162356400, 183520800, 195015600, 215575200, 226465200, 247024800, 257914800, 278474400, 289364400, 309924e3, 320814e3, 341373600, 352263600, 372823200, 384318e3, 404877600, 415767600, 436327200, 447217200, 467776800, 478666800, 499226400, 510116400, 530676e3, 541566e3, 562125600, 573620400, 59418e4, 60507e4, 623815200, 637729200, 655264800, 669178800, 686714400, 700628400, 718164e3, 732682800, 749613600, 764132400, 781063200, 795582e3, 812512800, 827031600, 844567200, 858481200, 876016800, 889930800, 907466400, 921985200, 938916e3, 953434800, 970365600, 984884400, 100242e4, 1016334e3, 1033869600, 1047783600, 1065319200, 1079838e3, 1096768800, 1111287600, 1128218400, 1142737200, 1159668e3, 1174186800, 1191117600, 1207450800, 1222567200, 1238900400, 1254016800, 127035e4, 1285466400, 1301799600, 1316916e3, 1333249200, 1348970400, 1365303600, 138042e4, 1396753200, 1411869600, 1428202800, 1443319200, 1459652400, 1474768800, 1491102e3, 1506218400, 1522551600, 1538272800, 1554606e3, 1569722400, 1586055600, 1601172e3, 1617505200, 1632621600, 1648954800, 1664071200, 1680404400, 1695520800, 1712458800, 1727575200, 1743908400, 1759024800, 1775358e3, 1790474400, 1806807600, 1821924e3, 1838257200, 1853373600, 1869706800, 1885428e3, 1901761200, 1916877600, 1933210800], offset: [41944, 41400, 45e3, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 41400, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800, 43200, 46800] }, "Pacific/Chatham": { time: [-3192393600, -757382400, 152678700, 162359100, 183523500, 195018300, 215577900, 226467900, 247027500, 257917500, 278477100, 289367100, 309926700, 320816700, 341376300, 352266300, 372825900, 384320700, 404880300, 415770300, 436329900, 447219900, 467779500, 478669500, 499229100, 510119100, 530678700, 541568700, 562128300, 573623100, 594182700, 605072700, 623817900, 637731900, 655267500, 669181500, 686717100, 700631100, 718166700, 732685500, 749616300, 764135100, 781065900, 795584700, 812515500, 827034300, 844569900, 858483900, 876019500, 889933500, 907469100, 921987900, 938918700, 953437500, 970368300, 984887100, 1002422700, 1016336700, 1033872300, 1047786300, 1065321900, 1079840700, 1096771500, 1111290300, 1128221100, 1142739900, 1159670700, 1174189500, 1191120300, 1207453500, 1222569900, 1238903100, 1254019500, 1270352700, 1285469100, 1301802300, 1316918700, 1333251900, 1348973100, 1365306300, 1380422700, 1396755900, 1411872300, 1428205500, 1443321900, 1459655100, 1474771500, 1491104700, 1506221100, 1522554300, 1538275500, 1554608700, 1569725100, 1586058300, 1601174700, 1617507900, 1632624300, 1648957500, 1664073900, 1680407100, 1695523500, 1712461500, 1727577900, 1743911100, 1759027500, 1775360700, 1790477100, 1806810300, 1821926700, 1838259900, 1853376300, 1869709500, 1885430700, 1901763900, 1916880300, 1933213500], offset: [44028, 44100, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500, 45900, 49500] }, "Pacific/Fakaofo": { time: [-2177452800, 1325203200, 1925038800], offset: [-41096, -39600, 46800] }, "Pacific/Honolulu": { time: [-2334139200, -1157320800, -1155470400, -880236e3, -765410400, -712188e3, 1924956e3], offset: [-37886, -37800, -34200, -37800, -34200, -37800, -36e3] }, "America/Mexico_City": { time: [-1514763396, -1343091600, -1234828800, -1220317200, -1207180800, -1191369600, -975283200, -963187200, -917136e3, -907372800, -821923200, -810086400, -627523200, -613008e3, 828842400, 846381600, 860292e3, 877831200, 891741600, 909280800, 923191200, 941335200, 954640800, 972784800, 989114400, 1001815200, 1018144800, 1035684e3, 1049594400, 1067133600, 1081044e3, 1099188e3, 1112493600, 1130637600, 1143943200, 1162087200, 1175392800, 1193536800, 1207447200, 1224986400, 1238896800, 1256436e3, 1270346400, 1288490400, 1301796e3, 131994e4, 1333245600, 1351389600, 13653e5, 1382839200, 1396749600, 1414288800, 1428199200, 1445738400, 1459648800, 1477792800, 1491098400, 1509242400, 1522548e3, 1540692e3, 1554602400, 1572141600, 1586052e3, 1603591200, 1617501600, 1635645600, 1648951200, 1667095200, 1680400800, 1698544800, 1712455200, 1729994400, 1743904800, 1761444e3, 1775354400, 1792893600, 1806804e3, 1824948e3, 1838253600, 1856397600, 1869703200, 1887847200, 1901757600, 1919296800, 1933207200], offset: [-23796, -25200, -21600, -25200, -21600, -25200, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600, -18e3, -21600] }, "Africa/Johannesburg": { time: [-2458166400, -2109283200, -860968800, -845244e3, -829519200, -813794400, 1924999200], offset: [6720, 5400, 7200, 10800, 7200, 10800, 7200] }, "Asia/Kathmandu": { time: [-1577923200, 504921600, 1925012700], offset: [20476, 19800, 20700] }, "US/Mountain": { time: [-2717668796, -1633298400, -1615154400, -1601848800, -1583704800, -1570399200, -1551650400, -1538949600, -1534111200, -880236e3, -769417200, -765410400, -147909600, -13158e4, -11646e4, -100130400, -84405600, -68680800, -52956e3, -37231200, -21506400, -5781600, 9943200, 25668e3, 41392800, 57722400, 73447200, 89172e3, 104896800, 120621600, 126669600, 152071200, 162352800, 183520800, 199245600, 215575200, 230695200, 247024800, 262749600, 278474400, 294199200, 309924e3, 325648800, 341373600, 357098400, 372823200, 388548e3, 404877600, 419997600, 436327200, 452052e3, 467776800, 483501600, 499226400, 514951200, 530676e3, 544586400, 562125600, 576036e3, 59418e4, 607485600, 625629600, 638935200, 657079200, 670989600, 688528800, 702439200, 719978400, 733888800, 752032800, 765338400, 783482400, 796788e3, 814932e3, 828842400, 846381600, 860292e3, 877831200, 891741600, 909280800, 923191200, 941335200, 954640800, 972784800, 986090400, 1004234400, 1018144800, 1035684e3, 1049594400, 1067133600, 1081044e3, 1099188e3, 1112493600, 1130637600, 1143943200, 1162087200, 1173578400, 1194141600, 1205028e3, 1225591200, 1236477600, 1257040800, 1268532e3, 1289095200, 1299981600, 1320544800, 1331431200, 1351994400, 1362880800, 1383444e3, 1394330400, 1414893600, 142578e4, 1446343200, 1457834400, 1478397600, 1489284e3, 1509847200, 1520733600, 1541296800, 1552183200, 1572746400, 1583632800, 1604196e3, 1615687200, 1636250400, 1647136800, 16677e5, 1678586400, 1699149600, 1710036e3, 1730599200, 1741485600, 1762048800, 1772935200, 1793498400, 1804989600, 1825552800, 1836439200, 1857002400, 1867888800, 1888452e3, 1899338400, 1919901600, 1930788e3], offset: [-25196, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200, -21600, -25200] } };
            void 0 !== t && t.exports ? t.exports = e : window.TzData = e
        }()
    }, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {
        "use strict";
        var i = function(t) {
            function e(e) {
                return n || o || (o = !0, $.getJSON(t, function(t) { o = !1, n = !0, i = t, "function" == typeof e && e(t) })), i && "function" == typeof e && e(i), i
            }
            var i, n = !1,
                o = !1;
            return e.invalidate = function() { i = null, n = !1 }, e
        };
        t.exports = i
    }, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, , function(t, e) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, , , , , , , , , , function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function(t) {
            return t.reduce(function(t, e, i) {
                return ~t.indexOf(e) ? null : t.push(e), t
            }, [])
        }, t.exports = e.default
    }, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, , , , , , , , , , function(t, e) { t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><g stroke="#cdbd28" stroke-linecap="round" stroke-width="0"><path d="M0 13h2v2H0zM3 13h13v2H3zM0 9h2v2H0zM3 5h13v2H3zM0 4.998h2v2H0zM3 9h13v2H3zM0 1h2v2H0zM3 1h13v2H3z"/></g></svg>' }, , function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, , , function(t, e, i) {}, , function(t, e) {}, function(t, e, i) {}, function(t, e, i) {
        var n;
        (function() {
            "use strict";

            function e() {}

            function o(t, e) {
                for (var i = t.length; i--;)
                    if (t[i].listener === e) return i;
                return -1
            }

            function s(t) {
                return function() {
                    return this[t].apply(this, arguments)
                }
            }
            var a = e.prototype,
                r = this,
                l = r.EventEmitter;
            a.getListeners = function(t) {
                var e, i, n = this._getEvents();
                if (t instanceof RegExp) {
                    e = {};
                    for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
                } else e = n[t] || (n[t] = []);
                return e
            }, a.flattenListeners = function(t) {
                var e, i = [];
                for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
                return i
            }, a.getListenersAsObject = function(t) {
                var e, i = this.getListeners(t);
                return i instanceof Array && (e = {}, e[t] = i), e || i
            }, a.addListener = function(t, e) {
                var i, n = this.getListenersAsObject(t),
                    s = "object" == typeof e;
                for (i in n) n.hasOwnProperty(i) && o(n[i], e) === -1 && n[i].push(s ? e : { listener: e, once: !1 });
                return this
            }, a.on = s("addListener"), a.addOnceListener = function(t, e) {
                return this.addListener(t, { listener: e, once: !0 })
            }, a.once = s("addOnceListener"), a.defineEvent = function(t) {
                return this.getListeners(t), this
            }, a.defineEvents = function(t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this
            }, a.removeListener = function(t, e) {
                var i, n, s = this.getListenersAsObject(t);
                for (n in s) s.hasOwnProperty(n) && (i = o(s[n], e), i !== -1 && s[n].splice(i, 1));
                return this
            }, a.off = s("removeListener"), a.addListeners = function(t, e) {
                return this.manipulateListeners(!1, t, e)
            }, a.removeListeners = function(t, e) {
                return this.manipulateListeners(!0, t, e)
            }, a.manipulateListeners = function(t, e, i) {
                var n, o, s = t ? this.removeListener : this.addListener,
                    a = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp)
                    for (n = i.length; n--;) s.call(this, e, i[n]);
                else
                    for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : a.call(this, n, o));
                return this
            }, a.removeEvent = function(t) {
                var e, i = typeof t,
                    n = this._getEvents();
                if ("string" === i) delete n[t];
                else if (t instanceof RegExp)
                    for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
                else delete this._events;
                return this
            }, a.removeAllListeners = s("removeEvent"), a.emitEvent = function(t, e) {
                var i, n, o, s, a, r = this.getListenersAsObject(t);
                for (s in r)
                    if (r.hasOwnProperty(s))
                        for (i = r[s].slice(0), o = i.length; o--;) n = i[o], n.once === !0 && this.removeListener(t, n.listener), a = n.listener.apply(this, e || []), a === this._getOnceReturnValue() && this.removeListener(t, n.listener);
                return this
            }, a.trigger = s("emitEvent"), a.emit = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e)
            }, a.setOnceReturnValue = function(t) {
                return this._onceReturnValue = t, this
            }, a._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }, a._getEvents = function() {
                return this._events || (this._events = {})
            }, e.noConflict = function() {
                return r.EventEmitter = l, e
            }, n = function() {
                return e
            }.call(r, i, r, t), !(void 0 !== n && (t.exports = n))
        }).call(this)
    }, function(t, e) {}, function(t, e) {}, , function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , function(t, e, i) {}, , , , , , , , , , , , , , function(t, e, i) {}, , , , , function(t, e) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 3, , , , function(t, e, i) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {}, , , , , , function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , , , , , , , , function(t, e, i) {}, , , , , , , function(t, e, i) {}, function(t, e) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, , , , , , , , , , , , function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e) { t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 73" width="110" height="73"><g fill="none" fill-rule="evenodd"><path fill="#5EC8F4" d="M73.237 19.934a18.496 18.496 0 0 1 9.172-2.422c10.382 0 18.8 8.547 18.8 19.09 0 1.798-.246 3.54-.704 5.19 5.462 1.93 9.38 7.205 9.38 13.408 0 7.84-6.258 14.194-13.98 14.194-.16 0-.32-.003-.48-.01v.01h-69.42v-.006c-10.16-.26-18.32-8.704-18.32-19.083 0-10.416 8.22-18.884 18.432-19.084C27.33 18.04 38.258 7.724 51.556 7.724c9.144 0 17.167 4.878 21.68 12.21z"/><path stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M26.488 36.948c-3.62 0-6.898 1.484-9.277 3.885m-2.23 2.994c-.26.473-.49.965-.693 1.472"/><path stroke="#4A4A4A" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M51.862 63.71h37.92v-.007c.16.006.322.008.483.008 7.72 0 13.98-6.353 13.98-14.193 0-6.203-3.92-11.477-9.38-13.408.458-1.65.703-3.392.703-5.192 0-10.542-8.418-19.088-18.8-19.088-.49 0-.977.02-1.458.056-.05 2.075-.455 4.422-1.663 6.514-2.484 4.303-6.624 4.407-8.136 3.534-1.973-1.14-3.527-4.448-1.007-8.813.337-.583.722-1.123 1.14-1.62-4.685-5.776-11.783-9.46-19.73-9.46-13.298 0-24.224 10.317-25.437 23.498-10.213.2-18.43 8.668-18.43 19.085 0 10.38 8.157 18.823 18.318 19.082v.006h12.154c-.58-2.867-.103-6.483 2.268-10.59C40.614 43.025 54.04 39.866 54.04 39.866s3.976 13.206-1.852 23.3c-.107.186-.216.368-.326.545z"/><path stroke="#4A4A4A" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44.345 32.287c-3.407 5.9-9.085 6.044-11.16 4.846-2.706-1.563-4.837-6.1-1.38-12.087 4.2-7.274 13.874-9.55 13.874-9.55s2.865 9.516-1.335 16.79zM73.647 18.4c-2.484 4.303-6.624 4.407-8.136 3.534-1.973-1.14-3.527-4.448-1.007-8.813C67.565 7.818 74.62 6.158 74.62 6.158s2.09 6.94-.973 12.243zM75.018 52.283c-2.605 4.512-6.946 4.62-8.53 3.705-2.07-1.194-3.7-4.664-1.058-9.24 3.21-5.562 10.608-7.303 10.608-7.303s2.19 7.276-1.02 12.838zM52.188 63.167c-4.728 8.19-12.606 8.387-15.484 6.725-3.757-2.168-6.714-8.465-1.918-16.772C40.614 43.025 54.04 39.866 54.04 39.866s3.976 13.206-1.852 23.3z"/></g></svg>' }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {}, , , , , , , , , , function(t, e, i) {
        (function(t) {
            "use strict";

            function e(t) {
                return t && t.__esModule ? t : { default: t }
            }

            function n(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var s, a, r, l, c = function(t, e, i) {
                    for (var n, o, s, a, r, l, c = !0; c;) {
                        if (n = t, o = e, s = i, c = !1, null === n && (n = Function.prototype), a = Object.getOwnPropertyDescriptor(n, o), void 0 !== a) {
                            if ("value" in a) return a.value;
                            if (l = a.get, void 0 === l) return;
                            return l.call(s)
                        }
                        if (r = Object.getPrototypeOf(n), null === r) return;
                        t = r, e = o, i = s, c = !0, a = r = void 0
                    }
                },
                d = function() {
                    function t(t, e) {
                        var i, n;
                        for (i = 0; i < e.length; i++) n = e[i], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                    return function(e, i, n) {
                        return i && t(e.prototype, i), n && t(e, n), e
                    }
                }();
            i(1193), s = i(386), a = e(s), r = i(73), l = e(r), i(319),
                function(e) {
                    function i(t, e) {
                        var i, n = {
                            items: [{ angle: 173, swing: 3.5, orbitRadius: 699, tooltip: "charts", ico: function(t, e) { t.save(), t.translate(e.x, e.y), t.fillStyle = "#fff", t.beginPath(), t.rect(-5.5, 0, 2, 6), t.rect(-1.5, -7, 3, 13), t.rect(3.5, -3, 2, 9), t.fill(), t.restore() } }, { radius: 18, orbitRadius: 552, angle: 191, swing: -2, tooltip: "exchanges", ico: function(t, e) { t.save(), t.translate(e.x - 7.5, e.y - 8.5), t.fillStyle = "#fff", t.beginPath(), t.moveTo(0, 6.5), t.lineTo(7.5, 0), t.lineTo(15, 6.5), t.lineTo(0, 6.5), t.rect(1.6666, 7, 1.6666, 6), t.rect(5, 7, 1.6666, 6), t.rect(8.3333, 7, 1.6666, 6), t.rect(11.6666, 7, 1.6666, 6), t.rect(.5, 13.5, 14, 1.5), t.fill(), t.restore() } }, { radius: 10.5, orbitRadius: 414, angle: 153 }, { radius: 6.5, orbitRadius: 301, angle: 159, swing: -1.5, swingStepRatio: .007 }, { radius: 15, orbitRadius: 452, angle: -18, swing: 2, tooltip: "ideas", ico: function(t, e) { t.save(), t.translate(e.x - 6, e.y - 8.5), t.strokeStyle = "#fff", t.lineWidth = 1, t.lineCap = "round", t.beginPath(), t.moveTo(6, 0), t.bezierCurveTo(2.686, 0, 0, 2.616, 0, 5.844), t.bezierCurveTo(0, 7.984, 2.012, 10.254, 2.744, 12.248), t.bezierCurveTo(3.837, 15.22, 3.716, 17, 6, 17), t.bezierCurveTo(8.318, 17, 8.163, 15.23, 9.256, 12.26), t.bezierCurveTo(9.99, 10.263, 12, 7.97, 12, 5.844), t.bezierCurveTo(12, 2.616, 9.313, 0, 6, 0), t.moveTo(2.7, 11.8), t.lineTo(9.3, 11.8), t.stroke(), t.lineWidth = .5, t.beginPath(), t.moveTo(3.3, 13.8), t.lineTo(9, 13), t.moveTo(3.8, 15.4), t.lineTo(8.5, 14.7), t.moveTo(6, 2.5), t.arc(6, 6, 3.5, Math.PI, 1.5 * Math.PI), t.stroke(), t.restore() } }, { orbitRadius: 699, angle: 6, swing: -2.5, swingStepRatio: .015, tooltip: "traders", ico: function(t, e) { t.save(), t.translate(e.x - 9, e.y - 10), t.fillStyle = "#fff", t.beginPath(), t.arc(9, 4.5, 4.5, 0, 2 * Math.PI), t.moveTo(0, 16), t.bezierCurveTo(1, 11, 17, 11, 18, 16), t.bezierCurveTo(14, 22.5, 4, 22.5, 0, 16), t.fill(), t.restore() } }],
                            itemDefaults: { radius: 21, swing: 1, swingStepRatio: .01, lineWidth: 2, strokeStyle: "#fff", activeFillStyle: "rgb(13,8,44)" },
                            polyline: { lineWidth: 2, strokeStyle: "rgba(255,255,255,.6)", startPointShift: { x: -2880, y: -20 }, endPointShift: { x: 2880, y: -300 } },
                            background: {
                                layer: 3,
                                radius: 800,
                                colors: [
                                    [0, "rgba(13,8,44,1)"],
                                    [1, "rgba(13,8,44,0)"]
                                ]
                            },
                            particle: { baseRadius: 3, velocity: { x: 0, y: -.5 }, variation: { x: 1, y: .5 }, depth: 120, fillStyle: "rgba(255,255,255,.6)", link: { maxDistance: 120, width: 1, rgb: [255, 255, 255], maxOpacity: .4 }, grab: { radius: 160, rgb: [255, 255, 255], maxOpacity: 1 } },
                            particlesCount: 100,
                            baseVerticalPivotPosition: .42,
                            adjustMaxRadius: 500,
                            backgroundCacheFrames: 10,
                            tooltips: { charts: { $container: t.find(".js-tooltip-charts"), width: 140 }, ideas: { $container: t.find(".js-tooltip-ideas"), width: 125 }, traders: { $container: t.find(".js-tooltip-traders"), width: 105, pivotRight: !0 }, exchanges: { $container: t.find(".js-tooltip-exchanges"), width: 135, pivotRight: !0, value: 50 } },
                            tooltipAnimationDuration: l.default.dur / 2
                        };
                        if (e && e.stats)
                            for (i in e.stats) n.tooltips[i] && (n.tooltips[i].value = e.stats[i]);
                        return new g(t, n)
                    }
                    var s = e(document.documentElement),
                        r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) },
                        u = function() {
                            function t(e, i, n) { o(this, t), this._ctx = e, this._knots = i, this._settings = n, this._lineWidth = this._settings.lineWidth, "number" == typeof window.hidpiCanvasRatio && (this._lineWidth *= window.hidpiCanvasRatio) }
                            return d(t, [{
                                key: "render",
                                value: function() {
                                    var t, e, i, n, o, s, a, r, l, c = this._ctx._getSize();
                                    for (this._ctx.lineWidth = this._lineWidth, this._ctx.strokeStyle = this._settings.strokeStyle, this._ctx.beginPath(), t = c.width / 2 + this._settings.endPointShift.x, e = c.height * this._settings.baseVerticalPivotPosition + this._settings.endPointShift.y, i = 0, n = this._knots.length; n-- > -1;) o = void 0, s = void 0, a = void 0, n >= 0 ? (r = this._knots[n], o = r.point.x, s = r.point.y, a = r.radius) : (o = c.width / 2 + this._settings.startPointShift.x, s = c.height * this._settings.baseVerticalPivotPosition + this._settings.startPointShift.y, a = 0), l = Math.atan2(t - o, e - s), this._ctx.moveTo(t - Math.sin(l) * i, e - Math.cos(l) * i), this._ctx.lineTo(o + Math.sin(l) * a, s + Math.cos(l) * a), t = o, e = s, i = a;
                                    this._ctx.stroke()
                                }
                            }]), t
                        }(),
                        h = function() {
                            function t(e, i, n) {
                                o(this, t), this._ctx = e, this._settings = n, this._basePos = { x: Math.random() * i.width, y: Math.random() * i.height, z: Math.random() * this._settings.depth }, this._velocity = { x: this._settings.velocity.x + (Math.random() * this._settings.variation.x - this._settings.variation.x / 2), y: this._settings.velocity.y + (Math.random() * this._settings.variation.y - this._settings.variation.y / 2) };
                                var s = .6;
                                this._radius = this._settings.baseRadius - this._settings.baseRadius * s * (this._basePos.z / this._settings.depth), this._z = this._basePos.z - this._settings.depth, this._linked = [], this._linkedDistances = []
                            }
                            return d(t, [{ key: "update", value: function(t, e, i, n) { this._basePos.x += this._velocity.x, this._basePos.y += this._velocity.y, this._x = (i.x + (this._basePos.x - e.x)) % t.width, this._x < 0 && (this._x = t.width + this._x), this._y = (i.y + (this._basePos.y - e.y)) % t.height, this._y < 0 && (this._y = t.height + this._y) } }, { key: "render", value: function() { this._ctx.moveTo(this._x + this._radius, this._y), this._ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI) } }, {
                                key: "radius",
                                get: function() {
                                    return this._radius
                                }
                            }, {
                                key: "x",
                                get: function() {
                                    return this._x
                                }
                            }, {
                                key: "y",
                                get: function() {
                                    return this._y
                                }
                            }, {
                                key: "z",
                                get: function() {
                                    return this._z
                                }
                            }]), t
                        }(),
                        p = function() {
                            function t(e, i) { o(this, t), this._ctx = e, this._settings = i, this._lineWidth = this._settings.lineWidth, "number" == typeof window.hidpiCanvasRatio && (this._lineWidth *= window.hidpiCanvasRatio) }
                            return d(t, [{
                                key: "calcPoint",
                                value: function(t, e) {
                                    var i, n;
                                    this._settings.swingStepRatio && (e *= this._settings.swingStepRatio), i = Math.sin(e) * this._settings.swing, n = (this._settings.angle + i) * (Math.PI / 180), this._point = { x: t.x + this._settings.orbitRadius * Math.cos(n), y: t.y + this._settings.orbitRadius * Math.sin(n) }
                                }
                            }, { key: "render", value: function(t) { this._ctx.lineWidth = this._lineWidth, this._ctx.strokeStyle = this._settings.strokeStyle, this._ctx.beginPath(), this._ctx.arc(this._point.x, this._point.y, this._settings.radius, 0, 2 * Math.PI), t && (this._ctx.fillStyle = this._settings.activeFillStyle, this._ctx.fill()), this._ctx.stroke(), "function" == typeof this._settings.ico && this._settings.ico(this._ctx, this._point) } }, {
                                key: "hitTest",
                                value: function(t) {
                                    if (this._settings.tooltip && this._point && !this._offscreen) {
                                        var e = Math.sqrt(Math.pow(this._point.x - t.x, 2) + Math.pow(this._point.y - t.y, 2));
                                        return e <= this._settings.radius ? this._settings.tooltip : void 0
                                    }
                                }
                            }, {
                                key: "orbitRadius",
                                get: function() {
                                    return this._settings.orbitRadius
                                }
                            }, {
                                key: "radius",
                                get: function() {
                                    return this._settings.radius
                                }
                            }, {
                                key: "point",
                                get: function() {
                                    return this._point
                                }
                            }]), t
                        }(),
                        f = function(i) {
                            function s(t, e) { o(this, s), c(Object.getPrototypeOf(s.prototype), "constructor", this).call(this), this._$container = t, this._canvas = t.find(".js-background-canvas").get(0), this._settings = e, this._ctx = this._canvas.getContext("2d"), this._knots = this._getKnots(), this._polyline = this._getPolyline(), this._setLayers(), this._onMouseMove = this._onMouseMove.bind(this), this._resetPointer = this._resetPointer.bind(this), this._onScroll = this._onScroll.bind(this), this._updateCtx = this._updateCtx.bind(this) }
                            return n(s, i), d(s, [{ key: "_setPointer", value: function(t) { this._activeTooltip || (this._pointer = t), this._forcedPointer = t } }, { key: "_resetPointer", value: function() { delete this._pointer, delete this._forcedPointer } }, {
                                key: "_onMouseMove",
                                value: function(t) {
                                    if (!this._offscreen) {
                                        var e = { x: t.pageX, y: t.pageY };
                                        this._setPointer(e), this._testKnots(e)
                                    }
                                }
                            }, {
                                key: "_onScroll",
                                value: function(t) {
                                    var e = this._canvas.getBoundingClientRect().bottom < 0;
                                    this._offscreen !== e && (this._offscreen = e, e || this._animate(), this._updateMouseMoveHandler())
                                }
                            }, {
                                key: "_testKnots",
                                value: function(t) {
                                    var e, i, n, o = this,
                                        s = null;
                                    for (e = 0; e < this._knots.length; ++e)
                                        if (i = this._knots[e], n = i.hitTest(t)) {
                                            if (this._activeTooltip && this._activeTooltip.name === n) return;
                                            s = { name: n, knot: i };
                                            break
                                        }
                                    this._activeTooltip && (this.emit("tooltipPointerLeave", this._activeTooltip), this._resumeToId = setTimeout(function() { o._activeTooltip = null }, this._settings.tooltipAnimationDuration)), s && (this._activeTooltip = s, this.emit("tooltipPointerEnter", this._activeTooltip), clearTimeout(this._resumeToId), this._renderFrame())
                                }
                            }, {
                                key: "_updateCtx",
                                value: function() {
                                    var t, e, i, n, o;
                                    this._ctx._getSize || (this._ctx._getSize = function() {
                                        return { width: this._actualWidth || 0, height: this._actualHeight || 0 }
                                    }), t = this._ctx, e = this._$container.get(0), i = this._canvas, n = e.clientWidth, o = e.clientHeight, n === t._actualWidth && o === t._actualHeight || (i.width = t._actualWidth = n, i.height = t._actualHeight = o, "number" == typeof window.hidpiCanvasRatio && i.getContext("2d"))
                                }
                            }, {
                                key: "_getKnots",
                                value: function() {
                                    var e, i = [];
                                    for (e = 0; e < this._settings.items.length; ++e) i.push(new p(this._ctx, t.extend({}, this._settings.itemDefaults, this._settings.items[e])));
                                    return i
                                }
                            }, {
                                key: "_getPolyline",
                                value: function() {
                                    return new u(this._ctx, this._knots.slice(), t.extend({ baseVerticalPivotPosition: this._settings.baseVerticalPivotPosition }, this._settings.polyline))
                                }
                            }, {
                                key: "_setLayers",
                                value: function() {
                                    this._knots.sort(function(t, e) {
                                        return t.orbitRadius - e.orbitRadius
                                    }), this._maxRadius = this._knots[this._knots.length - 1].orbitRadius + (this._settings.adjustMaxRadius || 0), this._layers = [{ polyline: !0 }];
                                    for (var t = 0; t < this._knots.length; ++t) this._layers.push({ knot: this._knots[t] });
                                    this._layers.splice(this._settings.background.layer, 0, { background: !0 })
                                }
                            }, {
                                key: "_getCenter",
                                value: function(t) {
                                    return { x: t.width / 2, y: t.height * this._settings.baseVerticalPivotPosition }
                                }
                            }, {
                                key: "_getPivot",
                                value: function(t, e, i) {
                                    var n, o, s, a, r = t,
                                        l = i ? this._forcedPointer : this._pointer;
                                    return l && (n = { x: .2, y: .1 }, r = { x: r.x + (l.x - r.x) * n.x, y: r.y + (l.y - r.y) * n.y }), o = 5e-4, this._basePivot ? this._activeTooltip || (this._basePivot.x += (r.x - this._basePivot.x) * o, this._basePivot.y += (r.y - this._basePivot.y) * o) : this._basePivot = { x: t.x, y: t.y }, this._forcedBasePivot ? (this._forcedBasePivot.x += (r.x - this._forcedBasePivot.x) * o, this._forcedBasePivot.y += (r.y - this._forcedBasePivot.y) * o) : this._forcedBasePivot = { x: t.x, y: t.y }, s = i ? this._forcedBasePivot : this._basePivot, a = e / this._maxRadius - .5, { x: t.x + (s.x - t.x) * a, y: t.y + (s.y - t.y) * a }
                                }
                            }, {
                                key: "_renderParticles",
                                value: function(t, e) {
                                    var i, n, o, s, a, r, l, c, d, u, p, f, g;
                                    if (!this._particles)
                                        for (this._particles = [], i = 0; i < this._settings.particlesCount; ++i) this._particles.push(new h(this._ctx, t, this._settings.particle));
                                    for (n = this._particles, "number" != typeof this._particleLinkLineWidth && (this._particleLinkLineWidth = this._settings.particle.link.width, "number" == typeof window.hidpiCanvasRatio && (this._particleLinkLineWidth *= window.hidpiCanvasRatio)), i = 0; i < n.length; ++i) o = n[i], o.update(t, e, this._getPivot(e, o.z, !0));
                                    for (s = this._ctx, s.lineWidth = this._particleLinkLineWidth, s.strokeStyle = "rgba(255, 255, 255, .2)", s.fillStyle = this._settings.particle.fillStyle, s.beginPath(), i = 0; i < n.length; ++i) n[i].render();
                                    for (s.fill(), a = Math.sqrt(Math.pow(t.width, 2) + Math.pow(t.height, 2)) / 12, r = a * a, s.beginPath(), i = n.length - 1; i > 0; i--)
                                        for (l = n[i]._x, c = n[i]._y, d = i - 1; d >= 0; d--) u = l - n[d]._x, p = c - n[d]._y, u * u + p * p < r && (s.moveTo(l, c), s.lineTo(n[d]._x, n[d]._y));
                                    if (s.stroke(), this._pointer)
                                        for (f = this._settings.particle.grab, i = 0; i < n.length; ++i) o = n[i], g = Math.sqrt(Math.pow(this._pointer.x - o._x, 2) + Math.pow(this._pointer.y - o._y, 2)), g < a && (s.strokeStyle = "rgba(" + f.rgb.join() + "," + f.maxOpacity * (1 - g / a) + ")", s.beginPath(), s.moveTo(this._pointer.x, this._pointer.y), s.lineTo(o._x, o._y), s.stroke())
                                }
                            }, {
                                key: "_renderFrame",
                                value: function() {
                                    var t, e, i, n = this._ctx._getSize(),
                                        o = this._getCenter(n),
                                        s = this._step;
                                    for (this._settings.backgroundColor ? (this._ctx.fillStyle = this._settings.backgroundColor, this._ctx.fillRect(0, 0, n.width, n.height)) : this._ctx.clearRect(0, 0, n.width, n.height), this._renderParticles(n, o), t = 0; t < this._knots.length; ++t) e = this._knots[t], e.calcPoint(this._getPivot(o, e.orbitRadius), s);
                                    for (t = 0; t < this._layers.length; ++t) i = this._layers[t], i.polyline ? this._polyline.render() : i.knot && i.knot.render(this._activeTooltip && this._activeTooltip.knot === i.knot)
                                }
                            }, {
                                key: "_animate",
                                value: function() {
                                    var t, e, i, n, o, s = this;
                                    s._running && (s._animationRuns || (this._step = 0, s._animationRuns = !0, t = 30, i = Date.now(), n = 1e3 / t, function t() {
                                        return !s._running || s._offscreen ? void(s._animationRuns = !1) : (r(t, s._canvas), e = Date.now(), o = e - i, s._activeTooltip || ++s._step, void(o > n && (i = e - o % n, s._renderFrame())))
                                    }()))
                                }
                            }, {
                                key: "_updateMouseMoveHandler",
                                value: function() {
                                    var t = this._running && !this._offscreen;
                                    this._mouseHandlersApplied ? t || (document.documentElement.removeEventListener("mousemove", this._onMouseMove, !1), document.documentElement.removeEventListener("mouseleave", this._resetPointer, !1), this._mouseHandlersApplied = !1) : t && (document.documentElement.addEventListener("mousemove", this._onMouseMove, !1), document.documentElement.addEventListener("mouseleave", this._resetPointer, !1), this._mouseHandlersApplied = !0)
                                }
                            }, { key: "start", value: function() { this._running || (this._running = !0, e(window).on("resize", this._updateCtx), this._updateMouseMoveHandler(), this._updateCtx(), window.addEventListener("scroll", this._onScroll, !1), this._onScroll(), this._animate()) } }, { key: "stop", value: function() { this._running = !1, e(window).off("resize", this._updateCtx), this._updateMouseMoveHandler(), window.removeEventListener("scroll", this._onScroll, !1), this._canvas.width = 0, this._canvas.height = 0 } }]), s
                        }(a.default),
                        g = function() {
                            function t(e, i) { o(this, t), this._$container = e, this._settings = i, this._running = !1, this._timeouts = {} }
                            return d(t, [{ key: "_setupGotoChart", value: function() { this._$gotoChart || (this._$gotoChart = this._$container.find(".js-goto-chart"), this._$gotoChart.size() && this._$gotoChart.tvGoToChartField({ defaultSymbol: window.DEFAULT_SYMBOL })) } }, { key: "_setupClose", value: function() { this._$container.find(".js-close-btn").css("display", "block").on("click", this.close.bind(this)) } }, {
                                key: "_setupTooltips",
                                value: function() {
                                    function t(t, e, i) {
                                        var n = t.replace("__num__", e).split("__delimiter__"),
                                            o = n[0],
                                            s = n[1]
                                    }
                                    var i, n, o, s = +this._settings.tooltips.charts.value;
                                    t(e.t("__num__ __delimiter__ charts created", { count: s }), s, this._settings.tooltips.charts.$container), i = +this._settings.tooltips.ideas.value, t(e.t("__num__ __delimiter__ ideas published", { count: i }), i, this._settings.tooltips.ideas.$container), n = +this._settings.tooltips.traders.value, t(e.t("__num__ __delimiter__ traders", { count: n }), n, this._settings.tooltips.traders.$container), o = 50, t(e.t("more than __num__ __delimiter__ exchanges", { count: o }), o, this._settings.tooltips.exchanges.$container)
                                }
                            }, {
                                key: "_showTooltip",
                                value: function(t) {
                                    var i, n = this._settings.tooltips[t.name];
                                    n && (i = n.$container, i.css("top", t.knot.point.y), n.pivotRight ? i.css("right", i.parent().width() - t.knot.point.x + t.knot.radius) : i.css("left", t.knot.point.x + t.knot.radius), clearTimeout(this._timeouts[t.name]), clearTimeout(this._timeouts[t.name + "_expand"]), i.removeClass("i-hidden i-collapsing"), this._timeouts[t.name + "_expand"] = setTimeout(function() { i.css("width", n.width), i.find("span").each(function(t) { e(this).css(t ? "top" : "bottom", 0) }) }, 50))
                                }
                            }, {
                                key: "_hideTooltip",
                                value: function(t) {
                                    var i, n = this._settings.tooltips[t.name];
                                    n && (clearTimeout(this._timeouts[t.name]), clearTimeout(this._timeouts[t.name + "_expand"]), i = n.$container, i.addClass("i-collapsing"), i.find("span").each(function(t) { e(this).css(t ? "top" : "bottom", "-80%") }), i.css("width", 0), this._timeouts[t.name] = setTimeout(function() { i.addClass("i-hidden") }, this._settings.tooltipAnimationDuration))
                                }
                            }, { key: "start", value: function() { this._running || (this._setupGotoChart(), this._setupTooltips(), Modernizr.touch || this.background.start(), this._setupClose(), this._running = !0, s.addClass("with-tv-unauth-hedaer")) } }, { key: "stop", value: function() { this._running && (Modernizr.touch || this.background.stop(), this._running = !1) } }, {
                                key: "close",
                                value: function() {
                                    var t = this;
                                    this.stop(), e.Velocity.animate(this._$container, { height: 0 }, { easing: "easeInOutCubic", duration: l.default.dur }).then(function() { s.removeClass("with-tv-unauth-hedaer"), s.addClass("unauth-header-closed"), t._$container.find(".js-close-btn").css("display", ""), t._$container.trigger("tv-unauth-header:closed"), t._$container.css("display", "none") })
                                }
                            }, {
                                key: "background",
                                get: function() {
                                    return this._background || (this._background = new f(this._$container.find(".js-background"), this._settings), this._background.on("tooltipPointerEnter", this._showTooltip.bind(this)).on("tooltipPointerLeave", this._hideTooltip.bind(this))), this._background
                                }
                            }]), t
                        }();
                    e.fn.tvUnauthHeader = function(t) {
                        return this.each(function() {
                            function n() {
                                ((o = i(a, t)), o.start())
                            }
                            var o, a = e(this);
                            loginStateChange.subscribe(null, n), n()
                        })
                    }
                }(jQuery)
        }).call(e, i(65))
    }, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, function(t, e) { t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 13" width="16" height="13"><path fill-rule="evenodd" d="M0 4h1V2H0v2zm0 3h1V5H0v2zm0-6h2V0C.9 0 0 .45 0 1zm5 12h2v-1H5v1zm-5-3h1V8H0v2zm1 3v-2H0c0 1.1.45 2 1 2zM14.6 0H9v4h7V1.333C16 .6 15.37 0 14.6 0zm.4 11h1V9h-1v2zM6 1h2V0H6v1zM4 13v-1H2v1h2zM3 1h2V0H3v1zm11 12c1.1 0 2-.45 2-1h-2v1zm1-5h1V6h-1v2zm-7 5h2v-1H8v1zm3 0h2v-1h-2v1z"/></svg>' }, function(t, e, i) {}, function(t, e, i) {}, function(t, e, i) {}, 3, function(t, e, i) {}, function(t, e, i) {}]);

}
$(function() {
    aa()
})
