!function () {
    "use strict";
    var u = !0, n = "_MeiTuanALogObject", l = 1, r = "dianping_nova", h = "waimai", m = "group", c = "demo",
        _ = "4.13.8", g = "lxcuid", y = "uuid", b = "msid", w = "cityid", j = "utm", x = "uid", k = "userid",
        S = "dpid", O = "appnm", s = "union_id", v = "web_env", q = "wxmp_env", p = "pd_data",
        I = /^(([^? \r\n]*)\?)?([^?# \r\n]+)(#\S+)?$/, A = setTimeout, f = clearTimeout, d = 1, a = 2, D = 3, E = 4,
        e = 5, i = 6, o = 20, T = 7;

    function C(t) {
        var n = t;
        return t && t.code && (n = t.code), n === d ? "E_TIME_OUT" : n === a ? "E_NO_JSBRIDGE" : n === D ? "E_KNB_FAIL" : n === E ? "E_KNB_CB_FAIL" : n === e ? "E_KNB_NOT_EXIST" : n === o ? "ERR_PARAMS" : n === i ? "E_KNB_METHOD_NOT_SUPPORT" : "unknown error: " + n
    }

    var M = 200, N = 100, F = 500, R = 600, P = -1, L = "PV", V = "PD", B = "MC", U = "SC", J = "MV", Q = "MVL",
        K = "ME", W = "BO", X = "BP", $ = "event_type", z = "val_act", H = "val_cid", Z = "index", G = "element_id",
        Y = "pageView", tt = "systemCheck", nt = "moduleClick", et = "order", rt = "order_id", it = 1e3, ot = 2, at = 0,
        ut = 6, ct = -1, st = 0, ft = 1, dt = 10080, lt = 1576800, vt = 30, pt = "_lx_utm", ht = "_lxsdk",
        mt = "_lxsdk_cuid", gt = "_lxsdk_dpid", _t = "_lxsdk_s", yt = "latlng", bt = "_lxsdk_rr", wt = "_lxsdk_rc",
        xt = "msid", kt = "ms", St = "category", Ot = "c", qt = "login_type", It = "lt", jt = "locate_city_id",
        At = "lci", Dt = "sdk_ver", Et = "sv", Tt = "lxcuid", Ct = "lxid", Mt = "val_lab", Nt = "val_bid",
        Ft = "val_val", Rt = "sf", Pt = "__$lx_beacon_", Lt = {
            category: u,
            union_id: u,
            lxcuid: u,
            app: u,
            sdk_ver: u,
            appnm: u,
            ch: u,
            lch: u,
            ct: u,
            did: u,
            dm: u,
            ua: u,
            msid: u,
            uuid: u,
            lat: u,
            log: u,
            net: u,
            os: u,
            idfa: u,
            pushid: u,
            subcid: u,
            mac: u,
            imsi: u,
            uid: u,
            logintype: u,
            cityid: u,
            apn: u,
            mno: u,
            pushSetting: u,
            wifi: u,
            bht: u,
            ip: u,
            vendorid: u,
            geohash: u,
            dtk: u,
            sns: u,
            android_id: u,
            version_code: u,
            brand: u,
            utm: u
        }, Vt = "post", Bt = "__lxvalidation", Ut = "report.meituan.com", Jt = "hreport.meituan.com", Qt = -3,
        Kt = function () {
        };

    function t() {
        return window
    }

    function Wt() {
        return t().XMLHttpRequest
    }

    var Xt, $t, zt = (Xt = Wt(), $t = Xt && "withCredentials" in new Xt, function () {
        return $t
    }), Ht = /__lxvalidation=([\w.]+)/i, Zt = 10, Gt = !1, Yt = void 0, tn = void 0, nn = {};

    function en(t) {
        var n, e = 0 === xe().indexOf("http:") ? "http:" : "https:", r = e + "//" + t + "/",
            i = Fn.search.match(Ht) || [], o = function () {
                var t = se.get(Bt);
                if (t) {
                    var n = t.split("|");
                    return {mis: n[0], env: n[1] || ""}
                }
                return t || {}
            }();
        return (n = i && i[1] || o.mis || "") && (se.top(Bt, n + "|", Zt), r = e + "//" + t + "/?mis=" + n, rn.debug = n), r
    }

    var rn = {
        inWXMP: !1,
        pageValLab: null,
        pageEnv: null,
        use_post: !1,
        cid: null,
        appnm: null,
        quit: null,
        useQR: !1,
        onWebviewAppearAutoPV: !0,
        positiveLab: !0,
        nativeSDKVer: null,
        cacheRetryMinutes: 5,
        debug: !1
    }, on = [];
    rn.on = function (t, n) {
        on.push({name: t, fn: n})
    };
    var an = {
        MVL: !(rn.emit = function (r, i, o, a, u) {
            oe.each(on, function (t) {
                var n = t.name, e = t.fn;
                n === r && e(i, o, a, u)
            })
        }), QR: !1, getReqId: !1
    };

    function un(t) {
        return !!an[t]
    }

    var cn = {st: 0, web: 1};

    function sn(t, n) {
        cn[t] = n
    }

    function fn(t) {
        return t ? cn[t] : cn
    }

    function dn(t, n) {
        ne.isStr(t) && (nn[t] = n)
    }

    function ln(t) {
        Gt = t
    }

    function vn() {
        return Gt === l
    }

    function pn(t) {
        return Yt && !t || (Yt = en(Ut)), Yt
    }

    var hn = ["wreport.meituan.net", "wreport1.meituan.net", "wreport2.meituan.net"], mn = 0;

    function gn(t) {
        if (!tn || t) {
            var n = hn[parseInt(mn++ % 18 / 6)];
            tn = en(n)
        }
        return tn
    }

    var _n = void 0;

    function yn() {
        if (Bn !== _n) return _n;
        var t = Rn.getElementsByTagName("meta");
        return _n = "off" === he(t, "lx:native-report")
    }

    var bn = at;

    function wn() {
        return bn
    }

    function xn(t) {
        yn() || (bn = t)
    }

    var kn = !1;

    function Sn(t) {
        kn = !!t
    }

    var On = 5e3, qn = 50, In = {MVL: {}}, jn = void 0, An = void 0;

    function Dn(t, n, e, r) {
        r = r || {};
        var i = n.category, o = e.req_id, a = e.val_cid, u = e.val_bid, c = r.tag;
        if (In[t] && ne.isStr(t) && ne.isStr(i) && ne.isStr(o) && ne.isStr(a) && ne.isStr(u)) {
            var s = i + "_" + o + "_" + a + "_" + u, f = In[t];
            ne.isObj(f[s]) || (f[s] = {env: ne.extend(!0, {}, n), evs: e, lab: []}), ne.isObj(c) && (f[s].evs.tag = c);
            var d = ne.extend(!0, e.val_lab, {_seq: e.seq, _tm: e.tm});
            f[s].lab.push(d), function () {
                var t = 0;
                for (var n in In) {
                    var e = In[n];
                    for (var r in e) {
                        var i = e[r].lab;
                        t += i.length || 0
                    }
                }
                qn < t && Cn()
            }()
        }
    }

    function En(t, n) {
        var e = (n || {}).withUnload, r = In[t];
        if (ne.isObj(r)) {
            var i = [];
            for (var o in r) {
                var a = r[o], u = !1;
                if (a.lab && a.lab.length) {
                    var c = a.env, s = a.evs, f = {mv_list: a.lab, custom: {_withUnload: !!e}};
                    s.val_lab = f;
                    for (var d = 0, l = i.length; d < l; d++) {
                        var v = i[d];
                        if (!Tn(v, c)) {
                            v.evs.push(s), u = !0;
                            break
                        }
                    }
                    u || (c.evs = [s], i.push(c))
                }
            }
            i.length && An.send(i), In[t] = {}
        }
    }

    function Tn(t, n) {
        var e = 0, r = 0;
        for (var i in t) t.hasOwnProperty(i) && e++;
        for (var o in n) n.hasOwnProperty(o) && r++;
        var a = r < e ? t : n, u = e <= r ? t : n;
        for (var c in a) {
            if (!(-1 < "evs|".indexOf(c + "|"))) if (ne.isObj(a[c]) && ne.isObj(u[c])) {
                if (Tn(a[c], u[c])) return !0
            } else if (a[c] !== u[c]) return !0
        }
        return !1
    }

    function Cn(t) {
        var n = (t || {}).withUnload;
        for (var e in In) En(e, {withUnload: n})
    }

    A(function t() {
        clearTimeout(jn);
        try {
            Cn()
        } catch (t) {
        } finally {
            wn() === at ? jn = A(t, On) : clearTimeout(jn)
        }
    }, 100);
    var Mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Nn = t(), Fn = location, Rn = document, Pn = Rn.domain, Ln = navigator, Vn = Ln.userAgent.toString(),
        Bn = void 0, Un = Array.prototype, Jn = Object.prototype, Qn = decodeURIComponent, Kn = encodeURIComponent,
        Wn = Gn(), Xn = Jn.toString, $n = Jn.hasOwnProperty;

    function zn() {
    }

    function Hn(t) {
        return void 0 === t ? "undefined" : Mn(t)
    }

    function Zn(t, n) {
        return Hn(t) === n
    }

    function Gn() {
        return +new Date
    }

    function Yn() {
        return Math.random()
    }

    function te(t) {
        return Zn(t, "number")
    }

    var ne = {};

    function ee(t, e, r) {
        var i = void 0, o = !0 === t;
        return o || (r = e, e = t), e && ne.isObj(e) || (e = {}), r && ne.isObj(r) || (r = {}), oe.each(r, function (t, n) {
            o && ne.isObj(r[n]) ? (i = e[n], e[n] = ne.isObj(i) ? i : {}, ee(o, e[n], r[n])) : e[n] = r[n]
        }), e
    }

    ne.trim = function (t) {
        return t.replace(/^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g, "")
    }, ne.now = Gn, ne.rnd = Yn, ne.hasOwn = function (t, n) {
        return $n.call(t, n)
    }, ne.extend = ee;
    var re = function (t) {
        return t && "[object Object]" === Xn.call(t)
    };
    ne.isObj = re;
    var ie = function (t) {
        return Zn(t, "string")
    };
    ne.isStr = ie, ne.isFunc = function (t) {
        return Zn(t, "function")
    }, ne.attr = function (t, n) {
        return t.getAttribute(n)
    }, ne.parseQuery = function (t) {
        var i = {};
        if (t) {
            var n = t.replace(I, function (t, n, e, r) {
                return r || ""
            }).split("&");
            return oe.each(n, function (t) {
                var n = t.split("="), e = n[0], r = n.slice(1).join("") || "";
                e && !$n.call(i, e) && (i[e] = Qn(r))
            }), i
        }
    }, ne.stringifyQuery = function (t) {
        var r = [];
        return ne.isObj(t) && oe.each(t, function (t, n) {
            var e;
            ne.isFunc(t) || (Bn !== t && ((e = t) || !Zn(e, "object")) || (t = t || ""), r.push(Kn(n) + "=" + Kn(t)))
        }), r.join("&")
    }, ne.genReqId = function () {
        return "" + 1e3 * Gn() + parseInt(1e3 * Yn())
    }, ne.run = function (t, n) {
        ae(t) ? oe.each(t, n) : n(t)
    }, ne.on = function (t, n, e) {
        t.addEventListener ? t.addEventListener(n, e, !1) : t.attachEvent && t.attachEvent("on" + n, e)
    }, ne.off = function (t, n, e) {
        t.removeEventListener ? t.removeEventListener(n, e, !1) : t.detachEvent && t.detachEvent("on" + n, e)
    };
    var oe = {
        isArray: function (t) {
            return "[object Array]" === Xn.call(t)
        }
    }, ae = function (t) {
        if (!t) return !1;
        var n = t.length;
        return !!oe.isArray(t) || !!(t && te(n) && 0 <= n) && (!ne.isObj(t) || (!(1 < n) || n - 1 in t))
    };
    oe.isArrayLike = ae, oe.find = function (e, r, i) {
        var o = void 0;
        return ae(e) && oe.each(e, function (t, n) {
            if (!0 === r.call(i, t, n, e)) return o = t, !1
        }), o
    }, oe.filter = function (e, r, i) {
        var o = [];
        return ae(e) && oe.each(e, function (t, n) {
            r.call(i, t, n, e) && o.push(t)
        }), o
    }, oe.toArray = function (t, n, e) {
        var r = [];
        return ae(t) && oe.each(t, function (t) {
            r.push(n ? n.call(e, t) : t)
        }, e), r
    };
    var ue = function (t, n, e) {
        if (t) {
            var r = void 0, i = void 0, o = void 0;
            if (ae(t)) for (i = 0, o = t.length; i < o && !1 !== n.call(e, t[i], i, t); i++) ; else for (r in t) if (ne.hasOwn(t, r) && !1 === n.call(e, t[r], r, t)) break
        }
    };
    oe.each = ue;
    var ce = function (t, n, e) {
        if (t) {
            for (var r = [], i = 0, o = t.length; i < o; i++) {
                var a = n.call(e, t[i], i, t);
                r.push(a)
            }
            return r
        }
    };
    oe.slice = function (t, n, e) {
        return Un.slice.call(oe.toArray(t), n, e)
    }, oe.reduce = function (t, n) {
        if (ae(t) && ne.isFunc(n)) {
            var e = t, r = e.length >>> 0, i = 0, o = void 0, a = arguments;
            if (3 === a.length) o = a[2]; else {
                for (; i < r && !(i in e);) i++;
                if (r <= i) return;
                o = e[i++]
            }
            for (; i < r;) i in e && (o = n(o, e[i], i, e)), i++;
            return o
        }
    };
    var se = {};

    function fe(t) {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", e = void 0, r = void 0, i = void 0,
            o = void 0, a = void 0, u = 0, c = 0, s = "", f = [];
        if (!t) return t;
        for (t = de(t); e = (a = t.charCodeAt(u++) << 16 | t.charCodeAt(u++) << 8 | t.charCodeAt(u++)) >> 18 & 63, r = a >> 12 & 63, i = a >> 6 & 63, o = 63 & a, f[c++] = n.charAt(e) + n.charAt(r) + n.charAt(i) + n.charAt(o), u < t.length;) ;
        switch (s = f.join(""), t.length % 3) {
            case 1:
                s = s.slice(0, -2) + "==";
                break;
            case 2:
                s = s.slice(0, -1) + "="
        }
        return s
    }

    function de(t) {
        var n, e = "", r = void 0, i = void 0, o = void 0;
        for (r = i = 0, n = (t = (t + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, o = 0; o < n; o++) {
            var a = t.charCodeAt(o), u = null;
            a < 128 ? i++ : u = 127 < a && a < 2048 ? String.fromCharCode(a >> 6 | 192, 63 & a | 128) : String.fromCharCode(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128), null !== u && (r < i && (e += t.substring(r, i)), e += u, r = i = o + 1)
        }
        return r < i && (e += t.substring(r, t.length)), e
    }

    se.del = function (t, n) {
        var e = t + "=;path=/;domain=" + n, r = new Date;
        return r.setFullYear(1970), e += ";expires=" + r.toUTCString(), Rn.cookie = e, !0
    }, se.get = function (t) {
        var n = Rn.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
        return Qn(n ? n[1] : "")
    }, se.set = function (t, n, e, r) {
        r = r || Rn.domain;
        var i = void 0, o = void 0, a = void 0, u = t + "=" + Kn(n) + ";path=/;domain=" + r;
        Bn === e || isNaN(e) || (i = new Date, o = 60 * parseInt(e, 10) * 1e3, a = i.getTime() + o, i.setTime(a), u += ";expires=" + i.toUTCString());
        try {
            return Rn.cookie = u, !0
        } catch (t) {
            return !1
        }
    }, se.top = function (t, n, e) {
        var r = Rn.domain, i = r.split("."), o = i.length, a = o - 1, u = void 0, c = !1;
        for (n = "" + n; !c && 0 <= a && (r = i.slice(a, o).join("."), se.set(t, n, e, r), u = se.get(t), Bn !== u && (c = u === n), a--, !c);) ;
    }, se.del = function (t) {
        return se.top(t, "", -100)
    };
    var le = window.btoa, ve = fe;
    try {
        ne.isFunc(le) && le(de(Vn)) === fe(Vn) ? (ve = function (t) {
            return le(de(t))
        }, sn("btoa", "0")) : sn("btoa", "1")
    } catch (t) {
    }
    var pe = ve;

    function he(t, n) {
        var e = void 0, r = oe.find(t, function (t) {
            return ne.attr(t, "name") === n
        });
        return r && (e = ne.attr(r, "content")), e
    }

    function me() {
        var t = Nn[n];
        return Nn[t]
    }

    var ge, _e = (ge = void 0, {
        update: function (t) {
            ge = t
        }, get: function () {
            return ge
        }
    });

    function ye(t) {
        var n = {
            duration: function (t) {
                var n = void 0, e = _e.get(), r = Gn();
                if (t && e) n = e, _e.update(r); else {
                    var i = me(), o = Nn.performance && Nn.performance.timing;
                    (n = o && o.requestStart) || (n = i ? i.l : Wn), _e.update(r)
                }
                return r - n
            }(!0 === t)
        }, e = void 0, r = rn.quit;
        return ne.isFunc(r) && (e = r() || {}), n = ne.extend(n, e || {})
    }

    function be(t, n) {
        n[rt]
    }

    var we = 2032;

    function xe() {
        return Fn.protocol
    }

    /trident/i.test(Vn) || /msie/i.test(Vn) || !/mozilla.+webkit.+chrome.+/i.test(Vn) || (we = 6e3);
    var ke = 0;

    function Se(t, n) {
        var e = /^((\d+\.)+\d+).*$/;
        if ("string" !== Hn(t) || "string" !== Hn(n)) return NaN;
        if (!e.test(t) || !e.test(n)) return NaN;
        for (var r = t.replace(e, "$1").split("."), i = n.replace(e, "$1").split("."), o = 0, a = Math.max(r.length, i.length); o < a; o++) {
            if (!r[o] || !i[o]) (!r[o] && r || !i[o] && i).push("0");
            var u = r[o].toString().length, c = i[o].toString().length;
            if (u !== c) {
                var s = c < u ? i : r;
                s[o] = Array(Math.abs(u - c) + 1).join("0") + s[o].toString()
            }
        }
        var f = parseInt(r.join("")), d = parseInt(i.join(""));
        return f == d ? 0 : d < f ? 1 : -1
    }

    function Oe(e, r, i, o, a, u, c) {
        return function (t) {
            if (!e) {
                e = !0;
                try {
                    if (r && new Date - i < 50) return;
                    if (o) return;
                    if (o = !1, !c()) {
                        var n = ye();
                        a("pageDisappear", n, {shouldStore: !0})
                    }
                    Cn({withUnload: !0})
                } catch (t) {
                }
                u && u(t)
            }
        }
    }

    var qe = 4, Ie = "", je = function (t) {
        qe = t
    }, Ae = function () {
        return Ie && 3 === qe
    }, De = function (t) {
        Ie = t
    }, Ee = function () {
        return Ie
    }, Te = void 0;
    try {
        Te = Nn.sessionStorage
    } catch (t) {
        Te = null
    }
    var Ce = void 0;
    Ce = ne.isFunc(Nn.atob) ? Nn.atob : function (t) {
        return t
    };
    var Me = {}, Ne = function (t, n) {
            if (Me[t]) try {
                Me[t](n), A(function () {
                    delete Me[t]
                }, 0)
            } catch (t) {
            }
        }, Fe = Vn,
        Re = [{n: c, r: /lingxi\/demo\/\d+/i, v: Fe}, {n: r, r: /dp\/com\.dianping\.[\w.]+\/([\d.]+)/i, v: Fe}, {
            n: h,
            r: /\bmeituanwaimai-c\/\d+\./i,
            v: Fe
        }, {n: "moviepro", r: /\bmoviepro/i, v: Fe}, {n: "movie", r: /\bmaoyan\b/i, v: Fe}, {
            n: m,
            r: /\bmeituan \d+|meituangroup\/\d+\./i,
            v: Fe
        }], Pe = /android/i.test(Fe), Le = "", Ve = Pe, Be = !1, Ue = !1, Je = "www", Qe = !1;
    if (/\bandroid|mobile\b|\bhtc\b/i.test(Fe)) {
        Je = "i", Ve = !0, oe.each(Re, function (t) {
            if (t.r.test(t.v)) return Le = t.n, !1
        }), /\btitans(no){0,1}x\b/i.test(Fe) && (Be = !0);
        var Ke = /iphone/i.test(Fe), We = /ipad/i.test(Fe);
        (Ke || We) && (Ue = !0), Le && (Ke ? Je = "iphone" : /android/i.test(Fe) ? Je = "android" : We && (Je = "ipad"))
    } else {
        var Xe = Fe.match(/(msie) (\d+)|Trident\/(d+)/i);
        Xe && (Qe = !0, Xe && parseInt(Xe[2], 10))
    }
    var $e = Nn.screen.width + "*" + Nn.screen.height, ze = Be || / knb\/\d+/i.test(Vn), He = function () {
            return Ve && ze
        }, Ze = Vn.replace(/^.*TitansX\/([\d.]+)\s.*$/i, "$1"), Ge = !(!Ve || !/\sMicroMessenger/.test(Fe)),
        Ye = j + "_source", tr = j + "_medium", nr = j + "_term", er = j + "_campaign", rr = j + "_content",
        ir = void 0, or = !1;

    function ar(t) {
        if (!t) return Bn;
        var e = Bn, r = /^utm_(source|medium|term|content|campaign)$/;
        return oe.each(t, function (t, n) {
            r.test(n) && (!e && (e = {}), e[n] = t)
        }), e
    }

    function ur(t) {
        if (t) {
            ir = t;
            var n = ne.stringifyQuery(t);
            return se.del(pt, Pn), se.top(pt, n, dt, Pn), !0
        }
        return !1
    }

    function cr(t, n) {
        var o, e, r, i, a;
        return (!ir && !or || t) && (t = t || Fn.href, n = n || Rn.referrer, a = t, (ir = ar(ne.parseQuery(a)) || function (t) {
            var n = Bn, e = t.match(/^[\w-]+:\/\/([^/]+)(?:\/([^?]+)?)?/), a = e && e[1];
            if (a) {
                var u = ne.parseQuery(t),
                    r = "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q m.baidu:word wap.baidu:word baidu:word Baidu:bs www.soso:w wap.soso:key www.sogou:query wap.sogou:keyword m.so:q m.sogou:keyword so.com:pq youdao:q sm.cn:q sm.cn:keyword haosou:q".split(" "),
                    c = "", s = "";
                oe.each(r, function (t) {
                    var n = t.split(":"), e = n[0], r = n[1], i = u[r], o = -1 < e.indexOf(".") ? e : "." + e + ".";
                    if (-1 < a.indexOf(o.toLowerCase()) && (s = e, c = i)) return !1
                }), s && ((n = {})[Ye] = s, n[tr] = "organic", c && (n[nr] = c))
            }
            return n
        }(n)) ? ur(ir) : (i = se.get(pt), ir = I.test(i) ? ar(ne.isStr(i) ? ne.parseQuery(i) : null) : ir), ir || (o = void 0, e = se.get("__utmz"), (r = e && e.match(/(utmc(tr|sr|cn|md|ct))=([^|()]+)/g)) && oe.each(r, function (t) {
            var n = t.split("="), e = n[0], r = void 0, i = n[1] || "";
            "utmcsr" === e ? r = Ye : "utmccn" === e ? r = er : "utmcmd" === e ? r = tr : "utmcct" === e ? r = rr : "utmctr" === e && (r = nr), r && ((o = o || {})[r] = i)
        }), ur(ir = o)), or = u), ir
    }

    var sr, fr, dr, lr, vr = Nn.JSON;
    vr || (vr = {
        parse: function (t) {
            return new Function("return (" + t + ")")()
        },
        stringify: (sr = oe.isArray, fr = {
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t"
        }, dr = function (t) {
            return fr[t] || "\\u" + (t.charCodeAt(0) + 65536).toString(16).substr(1)
        }, lr = /[\\"\u0000-\u001F\u2028\u2029]/g, function t(n) {
            if (null == n) return "null";
            if (Zn(n, "number")) return isFinite(n) ? n.toString() : "null";
            if (Zn(n, "boolean")) return n.toString();
            if (Zn(n, "object")) {
                if ("function" === Hn(n.toJSON)) return t(n.toJSON());
                if (sr(n)) {
                    for (var e = "[", r = 0; r < n.length; r++) e += (r ? ", " : "") + t(n[r]);
                    return e + "]"
                }
                if (ne.isObj(n)) {
                    var i = [];
                    for (var o in n) n.hasOwnProperty(o) && i.push(t(o) + ": " + t(n[o]));
                    return "{" + i.join(", ") + "}"
                }
            }
            return '"' + n.toString().replace(lr, dr) + '"'
        })
    });
    var pr = vr, hr = "__lxsdk_", mr = void 0;
    try {
        mr = Nn.localStorage
    } catch (t) {
        mr = null
    }

    function gr(t) {
        return hr + t
    }

    function _r() {
        return {
            length: 0, _data: {}, setItem: function (t, n) {
                return this.length++, this._data[t] = String(n)
            }, getItem: function (t) {
                return this._data.hasOwnProperty(t) ? this._data[t] : Bn
            }, removeItem: function (t) {
                return this.length--, delete this._data[t]
            }, clear: function () {
                return this.length = 0, this._data = {}
            }, key: function (t) {
                var n = [], e = this._data;
                return oe.each(e, function (t) {
                    ne.hasOwn(e, t) && n.push(t)
                }), n[t]
            }
        }
    }

    var yr = {
        get: function (t) {
            t = gr(t);
            var n = mr.getItem(t);
            return n = Bn !== n ? pr.parse(n) : n
        }, set: function (t, n) {
            return yr.del(t), mr.setItem(gr(t), pr.stringify(n))
        }, keys: function () {
            for (var t = [], n = void 0, e = 0; e < mr.length; e++) 0 === (n = mr.key(e)).indexOf(hr) && t.push(n.replace(hr, ""));
            return t
        }, del: function (t) {
            try {
                return mr.removeItem(gr(t))
            } catch (t) {
            }
        }, clear: function () {
            for (var t = this.keys(), n = 0; n < t.length; n++) this.del(t[n])
        }
    };
    if (mr) {
        if (mr) {
            var br = "___lxtest";
            yr.nt = !0;
            try {
                yr.set(br, 1), 1 !== yr.get(br) ? yr.clear() : yr.del(br)
            } catch (t) {
                try {
                    yr.clear(), mr.setItem(br, 1), mr.removeItem(br)
                } catch (t) {
                    mr = _r(), yr.nt = !1
                }
            }
        }
    } else mr = _r(), yr.nt = !1;
    var wr = "tag", xr = 18e5;

    function kr(t, n, e, r, i, o) {
        var a = {};
        a.c = t, a.k = n, a.v = e, a.t = r || +new Date, a.u = i || "", a.r = o || "", this.toJSON = function () {
            return ne.extend(!0, {}, a)
        }
    }

    var Sr = {
        set: function (t, n, e) {
            var r = void 0, i = [], o = yr.get(wr) || [];
            if (!ne.isStr(n) || "" === n) return !1;
            for (var a = 0, u = o.length; a < u; a++) Or(r = o[a]) || (t === r.c ? n !== r.k && i.push(r) : i.push(r));
            return r = new kr(t, n, e, +new Date), i.push(r.toJSON()), yr.set(wr, i), !0
        }, get: function (t, n) {
            var e = void 0, r = yr.get(wr);
            if (r && r.length) return e = {}, oe.each(r, function (t) {
                var n = {};
                n[t.k] = t.v, Or(t) || (e[t.c] = ne.extend(!0, e[t.c] || {}, n))
            }), t && n ? e[t] && e[t][n] : t ? e[t] : e
        }, getAll: function () {
            var t = yr.get(wr), e = {}, r = void 0;
            return oe.each(t, function (t) {
                var n = void 0;
                !Or(t) && t.v && (r = !0, (n = {})[t.k] = t.v, e[t.c] = ne.extend(!0, e[t.c], n))
            }), r && e
        }, clear: function (n, e) {
            if (!arguments.length) return yr.set(wr, []);
            if (ne.isStr(n)) {
                var t = yr.get(wr), r = [];
                oe.each(t, function (t) {
                    (e !== Bn && t.k !== e || n !== t.c) && r.push(t)
                }), yr.set(wr, r)
            }
        }
    };

    function Or(t) {
        var n = ne.now();
        return xr < n - t.t
    }

    function qr(t) {
        return t
    }

    function Ir(t) {
        try {
            t(Cr(this, Ar), Cr(this, jr))
        } catch (t) {
            if (this._state === Dr) return Nr(new Ir(qr), jr, t)
        }
    }

    Ir.prototype.then = function (t, n) {
        return function (t, n, e, r) {
            Hn(e) === Er && (n._onFulfilled = e);
            Hn(r) === Er && (n._onRejected = r);
            t._state === Dr ? t[t._pCount++] = n : Mr(t, n);
            return n
        }(this, new Ir(qr), t, n)
    }, Ir.all = function (l) {
        return new Ir(function (r, e) {
            for (var t, n, i, o = 0, a = l.length, u = [], c = 0, s = void 0, f = function (e) {
                return function (t) {
                    if (e.value = t, e.state = Ar, ++c === e.len && !s) {
                        var n = function (t) {
                            var n = [];
                            for (o = 0; o < a; o++) n.push(t[o] ? t[o].value : void 0);
                            return n
                        }(u);
                        r(n)
                    }
                }
            }, d = function (n) {
                return function (t) {
                    n.value = t, n.state = jr, c++, s || (s = !0, e(t))
                }
            }; o < a; o++) n = t = void 0, n = l[o], i = {
                value: null,
                index: o,
                state: null,
                len: a
            }, u.push(i), t = i, n.then ? n.then(f(t), d(t)) : Ir.resolve(n).then(f(t), d(t))
        })
    }, Ir.resolve = function (n) {
        if (n instanceof Ir) return n;
        if (ne.isFunc(n.then)) {
            var e = n.then.bind(n);
            return new Ir(function (t, n) {
                e(t, n)
            })
        }
        return new Ir(function (t) {
            t(n)
        })
    }, Ir.reject = function (e) {
        return new Ir(function (t, n) {
            n(e)
        })
    };
    var jr = 0, Ar = 1, Dr = 2, Er = "function", Tr = "object";

    function Cr(n, e) {
        return function (t) {
            return Nr(n, e, t)
        }
    }

    function Mr(e, r) {
        return setTimeout(function () {
            var t = void 0, n = e._state ? r._onFulfilled : r._onRejected;
            if (void 0 !== n) {
                try {
                    t = n(e._value)
                } catch (t) {
                    return void Nr(r, jr, t)
                }
                Fr(r, t)
            } else Nr(r, e._state, e._value)
        })
    }

    function Nr(t, n, e) {
        if (t._state === Dr) {
            t._state = n, t._value = e;
            for (var r = 0, i = t._pCount; r < i;) Mr(t, t[r++]);
            return t
        }
    }

    function Fr(n, t) {
        if (t !== n || !t) {
            var e = void 0, r = Hn(t);
            if (null === t || r !== Er && r !== Tr) Nr(n, Ar, t); else {
                try {
                    e = t.then
                } catch (t) {
                    return void Nr(n, jr, t)
                }
                Hn(e) === Er ? function (n, e, t) {
                    try {
                        t.call(e, function (t) {
                            e && (e = null, Fr(n, t))
                        }, function (t) {
                            e && (e = null, Nr(n, jr, t))
                        })
                    } catch (t) {
                        e && (Nr(n, jr, t), e = null)
                    }
                }(n, t, e) : Nr(n, Ar, t)
            }
            return n
        }
        Nr(n, jr, new Error("promise_circular_chain"))
    }

    Ir.prototype._state = Dr, Ir.prototype._pCount = 0;
    var Rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Pr = function () {
        var t = !("undefined" == typeof window || !window.navigator || !window.navigator.userAgent);

        function e() {
            return t ? navigator.userAgent.toLowerCase() : ""
        }

        function r(t) {
            for (var n = {}, e = t.replace(/\([^)]+\)/g, "").split(/\s+/), r = "", i = 0; i < e.length; i += 1) {
                var o = e[i], a = o.lastIndexOf("/");
                if (a < 0) r = o; else {
                    var u = o.slice(0, a);
                    r && (u = r + " " + u, r = ""), n[u] = o.slice(a - o.length + 1)
                }
            }
            return n
        }

        function c(t) {
            var n = t || "0", e = n.match(/^(\d*)/);
            return e ? Number(e[1]) : 0
        }

        function o(t, n) {
            for (var e = "string" == typeof t ? t.split(".") : ["0"], r = "string" == typeof n ? n.split(".") : ["0"], i = Math.max(e.length, r.length), o = 0; o < i; o += 1) {
                var a = c(e[o]), u = c(r[o]);
                if (u < a) return 1;
                if (a < u) return -1
            }
            return 0
        }

        function a(t) {
            var n = -1, e = document.createElement("iframe");

            function r() {
                clearTimeout(n);
                var t = e.parentNode;
                t && t.removeChild(e), e.onload = null, e.onerror = null, e = null
            }

            e.style.display = "none", e.onload = r, e.onerror = r, e.src = t, (document.body || document.documentElement).appendChild(e), n = setTimeout(r, 3e3)
        }

        function u(t) {
            window.KNBTitansX && window.KNBTitansX.sendMessage ? window.KNBTitansX.sendMessage(t) : window.prompt(t)
        }

        function s(t) {
            window.prompt(t)
        }

        var n, i = {
                getDefaultSender: function () {
                    var i = Function.prototype, t = e();
                    if (/ios|iphone|ipod|ipad/.test(t)) i = a; else if (/android/.test(t)) {
                        var n = r(t);
                        i = 0 < o(n.android, "4.2.0") ? u : s
                    }
                    return function (t, n, e) {
                        var r = "js://_?method=" + t + "&callbackId=" + e + "&args=" + encodeURIComponent(n);
                        i(r)
                    }
                }, compareVersion: o, parseUserAgent: r, canUseSlot: (n = r(e()), 0 <= o(n.titansx || n.titansnox, "11.13"))
            }, f = i.getDefaultSender, d = i.compareVersion, l = i.parseUserAgent, v = i.canUseSlot,
            p = "function" == typeof Symbol && "symbol" === Rr(Symbol.iterator) ? function (t) {
                return void 0 === t ? "undefined" : Rr(t)
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : Rr(t)
            }, h = {sender: null};

        function m(t) {
            return "DPApp_callback_" + t
        }

        function g(t, n) {
            var e = m(t), r = window[e];
            r && (r(n), r.isSafeDelete && (window[e] = void 0))
        }

        function _(t) {
            var n = t || "DPApp";
            if (!window[n] || !window[n].KNBCore) {
                var e = {dequeue: window[n] && window[n].dequeue || Function.prototype, KNBCore: !0, callback: g};
                window[n] = function (t, n) {
                    if (t && "object" === (void 0 === t ? "undefined" : p(t))) {
                        var e = t;
                        return Object.keys(n).forEach(function (t) {
                            e[t] = n[t]
                        }), e
                    }
                    return n
                }(window[n], e)
            }
        }

        var y, b = {
            bindSender: function (t) {
                "function" == typeof t && (h.sender = t)
            }, sendMessage: function (t, n, e, r) {
                var i = v && r ? "KNBSlot" + r : void 0;
                _(i);
                var o = function (t) {
                    if (!/^[a-zA-Z0-9]*$/.test(t)) throw new Error("illegal slot name");
                    var n = Math.floor(1e3 * Math.random());
                    return +(Date.now().toString().slice(-5) + "" + n) + (t ? "_" + t : "")
                }(i), a = m(o), u = e || {};
                window[a] = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = t.status,
                        e = "action" === n ? "handle" : n;
                    "0" === String(e) && (e = "success");
                    var r = u[e] || u.fail;
                    if ("function" == typeof r) return r(t)
                }, u.handle || (window[a].isSafeDelete = !0), h.sender && h.sender(t || "", JSON.stringify(n || {}), o)
            }, fireCallback: g, compareVersion: d, parseUserAgent: l
        };
        return y = b, "undefined" != typeof window && (h.sender = f(), window.KNBCore || (window.KNBCore = y)), b
    }(), Lr = !1, Vr = [], Br = void 0, Ur = void 0;

    function Jr(t) {
        He() ? c === Le ? t(Bn, Ur) : Lr ? t(Br, Ur) : (Vr.push(t), Lr ? t(Bn, Ur) : new Promise(function (t) {
            t({
                ready: function (t) {
                    return t()
                }, use: function (t, n) {
                    n = n || {}, Pr.sendMessage(t, {data: n.data || {}}, n, "LXAnalyticsSDK")
                }
            }), Lr = !0
        }).then(function (t) {
            var n, e, r = Ur = t;
            n = Br, e = r, oe.each(Vr, function (t) {
                t(n, e)
            }), Vr = []
        })) : t(e, Ur)
    }

    var Qr = 500, Kr = "getUserInfo";

    function Wr() {
        return new Ir(function (o, r) {
            Jr(function (t, n) {
                var e = Nn.DPApp, i = A(function () {
                    o({})
                }, Qr);
                n ? n.ready(function () {
                    n.use(Kr, {
                        success: function (t) {
                            var n, e, r;
                            f(i), o((e = {}, (r = (n = t)[S]) && "0" !== r || "dp" !== n.type ? n[S] && (e[S] = n[S]) : e[S] = n[y], "dp" !== n.type && n[y] && (e[y] = n[y]), n.unionId && (e.unionId = n.unionId), n.userId && (e.userId = n.userId), e))
                        }, fail: function (t) {
                            f(i), r({code: D})
                        }
                    })
                }) : e && e[Kr] ? e.ready(function () {
                    e[Kr]({
                        success: function (t) {
                            f(i);
                            var n = {};
                            (t.dpid || t.userId) && (n.dpid = t.dpid, n.userId = t.userId, n.unionId = t.unionId), o(n)
                        }, fail: function (t) {
                            f(i), r({code: a, res: t})
                        }
                    })
                }) : r({code: a})
            })
        })
    }

    var Xr, $r = (Xr = function () {
        for (var t = 1 * new Date, n = 0; t === 1 * new Date && n < 200;) n++;
        return t.toString(16) + n.toString(16)
    }, function () {
        var t = (screen.height * screen.width).toString(16);
        return Xr() + "-" + Math.random().toString(16).replace(".", "") + "-" + function () {
            var t = Fe, n = void 0, e = void 0, i = [], r = 0;

            function o(t, n) {
                var e = void 0, r = 0;
                for (e = 0; e < n.length; e++) r |= i[e] << 8 * e;
                return t ^ r
            }

            for (n = 0; n < t.length; n++) e = t.charCodeAt(n), i.unshift(255 & e), 4 <= i.length && (r = o(r, i), i = []);
            return 0 < i.length && (r = o(r, i)), r.toString(16)
        }() + "-" + t + "-" + Xr()
    });

    function zr() {
        var t, n = se.get(mt) || $r();
        return (t = n) && se.top(mt, t, lt), n
    }

    function Hr() {
        return Math.floor(1 + 65535 * ne.rnd()).toString(16).substring(1)
    }

    function Zr() {
        var t = [], n = +new Date;
        return t.push(n.toString(16)), t.push(Hr()), t.push(Hr()), t.push(Hr()), t.join("-")
    }

    function Gr(t) {
        var n = t.match(/(\d+)(?:\.(\d+)(?:\.(\d+))?)?/), e = [];
        if (n) for (var r = 1; r < n.length; r++) e.push(parseInt(n[r] || 0));
        return e
    }

    function Yr(t, n) {
        var e = Gr(t), r = Gr(n);
        return !(e[0] < r[0]) && (!(e[0] === r[0] && e[1] < r[1]) && !(e[0] === r[0] && e[1] === r[1] && e[2] < r[2]))
    }

    var ti = "getEnv", ni = N, ei = !1, ri = !1, ii = !1, oi = !1, ai = [], ui = 0, ci = void 0, si = ne.now();

    function fi(t) {
        var n = (t._opts || {}).nativeOptions || {};
        return {cb: "_lx" + (100 * ne.now() + ui++), mn: t._mn, cn: t._cn, data: t._d || {}, options: n, ver: 4}
    }

    function di(t, n, e, r, i) {
        i = i || {};
        var o = this;
        o._cn = t, o._mn = n, o._d = e, o._cb = r, o._opts = i
    }

    function li(t, n, e, r, i) {
        if (F === ni || R === ni) return r(ni);
        var o = new di(t, n, e, Kt, i);
        if (M === ni) o.send(function (t, n) {
            r(t, n)
        }); else if (N === ni) {
            if (ai.push([o, r]), !ei) {
                ei = !0;
                new Date;
                new di(t, ti, {}).send(function (r, t) {
                    if (new Date, r && C(r), r) ni = F; else {
                        if (ni = M, xn(ot), ne.isStr(t)) try {
                            t = pr.parse(t)
                        } catch (t) {
                        }
                        var n = (ci = t).sdk_ver || "";
                        ri = Yr(n, "4.0.0"), ii = Yr(n, "4.3.0"), oi = !Yr(n, "4.8.0")
                    }
                    oe.each(ai, function (t) {
                        var n = t[0], e = t[1];
                        r ? (C(r), e(r)) : n.send(function (t, n) {
                            e(t, n)
                        })
                    })
                })
            }
        } else r(P)
    }

    function vi() {
        return ri
    }

    di.prototype.send = function (e) {
        var r = this, i = fi(r), t = "statistics://_lx/?data=" + Kn(pr.stringify(i)), n = ne.now();
        ci && 5e3 < n - si && r._mn === ti && ni === M ? (r._mn, e(0, ci)) : (r._mn, i.cb, function (i, o, a) {
            if (Le !== c || !window.JavaScriptBridge) return Jr(function (t, n) {
                if (t) return a(t);
                var e = !1, r = A(function () {
                    e = !0, a(d)
                }, 5e3);
                n.use(i, {
                    data: o, success: function (t) {
                        if (f(r), !e) if ("success" === t.status) {
                            var n = t.data || {};
                            try {
                                ne.isStr(n) && (n = pr.parse(n)), a(Bn, n.data ? n.data : t)
                            } catch (t) {
                                a(t)
                            }
                        } else a(E)
                    }, fail: function () {
                        f(r), e || a(E)
                    }
                })
            });
            window.JavaScriptBridge.log(o, function (t) {
                var n = t.data;
                try {
                    ne.isStr(n) && (n = pr.parse(n)), a(Bn, n.data ? n.data : n)
                } catch (t) {
                    a(t)
                }
            })
        }("lxlog", t, function (t, n) {
            t ? (r._mn, i.cb, new Date, C(t)) : (r._mn, i.cb, new Date), e(t, n)
        }))
    };
    var pi, hi = !Qe && Nn.indexedDB, mi = Nn.IDBFactory, gi = hi && ne.isFunc(hi.open) && hi.constructor === mi,
        _i = !1, yi = void 0, bi = void 0, wi = void 0, xi = 60 * (parseInt(rn.cacheRetryMinutes) || 5), ki = !1,
        Si = 0;

    function Oi() {
        return new Ir(function (n, e) {
            if (!gi) return e();
            if (_i) return n();
            try {
                (yi = hi.open("_lxsdk_db", 1e3)).onsuccess = function (t) {
                    _i = !0, bi = t.target.result, n()
                }, yi.onupgradeneeded = function (t) {
                    bi = t.target.result, (wi = bi.createObjectStore("cache", {
                        keyPath: "id",
                        autoIncrement: !0
                    })).createIndex("evs", "evs", {unique: !1}), wi.createIndex("type", "type", {unique: !1})
                }
            } catch (t) {
                _i = !1, e()
            }
        })
    }

    function qi() {
        Oi().then(function () {
            var e = bi.transaction(["cache"], "readwrite").objectStore("cache"), t = e.openCursor(), r = [];
            t.onsuccess = function (t) {
                var n = t.target.result;
                n ? (r.push(n.value), n.continue()) : (Si = r.length, r.forEach(function (t) {
                    !function (t) {
                        if ("get" === t.type) {
                            var n = document.createElement("img"), e = Math.random();
                            n.src = "//wreport.meituan.net/?d=" + pe("[" + t.evs + "]") + "&t=1&r=" + e + "&_lxsdk_rnd=" + e, n.id = e, window["img_" + e] = n
                        } else try {
                            window.navigator.sendBeacon("//report.meituan.com", t)
                        } catch (t) {
                        }
                    }(t), e.delete(t.id)
                }))
            }
        })
    }

    Oi();
    var Ii = {
            add: function (t, e) {
                Oi().then(function () {
                    var n = bi.transaction(["cache"], "readwrite").objectStore("cache");
                    100 < Si && n.clear(), t.forEach(function (t) {
                        t.evs.forEach(function (t) {
                            t.lx_inner_data = t.lx_inner_data || {}, t.lx_inner_data.fc = 1
                        }), n.add({type: e, evs: JSON.stringify(t)})
                    })
                })
            }, size: function () {
            }, remove: function () {
            }, check: qi, startPoll: function () {
                !ki && gi && (ki = !0, pi = +new Date, Oi().then(function () {
                    setTimeout(function t() {
                        var n = "_lxsdk_rc_img", e = Nn[n] = new Image;
                        e.onload = function () {
                            qi(), ki = !1, Nn[n] = null
                        }, e.onabort = e.onerror = function () {
                            +new Date - pi > 1e3 * xi || (setTimeout(t, 6e3), Nn[n] = null)
                        }, e.src = "//wreport.meituan.net/?r=" + Math.random()
                    }, 6e3)
                }))
            }
        }, ji = 3, Ai = 150, Di = 5e3, Ei = 3500, Ti = !1, Ci = [], Mi = [], Ni = 0, Fi = 0, Ri = !rn.use_post,
        Pi = /Mozilla.+AppleWebKit.+Chrome.+Safari.+/i.test(Fe) && !Ve, Li = !Qe && ne.isFunc(Ln.sendBeacon);

    function Vi(t, n, e, r, i) {
        var o = [{
            project: "web-lx-sdk",
            pageUrl: Fn.href,
            resourceUrl: t,
            category: i ? "jsError" : "ajaxError",
            sec_category: n,
            level: "error",
            unionId: e,
            timestamp: ne.now(),
            content: "" + r || ""
        }], a = Wi("//catfront.dianping.com/api/log?v=1", Vt, "application/x-www-form-urlencoded");
        a && (a.onerror = a.onreadystatechange = function () {
        }, a.send("c=" + encodeURIComponent(pr.stringify(o))))
    }

    function Bi(t, n) {
        if (ji <= Fi) return !1;
        n = ne.extend({cb: zn}, n || {});
        var e = pn();
        Ri = !rn.use_post;
        try {
            Ri ? function (e, r) {
                var t = Gn().toString(16) + Ni++, i = pn(), o = !1, a = !1, u = void 0, c = void 0,
                    s = (n = e, f = [], d = [{l: Dt, s: Et}, {l: xt, s: kt}, {l: St, s: Ot}, {l: qt, s: It}, {
                        l: Tt,
                        s: Ct
                    }, {l: jt, s: At}], oe.each(n, function (t) {
                        var n = ne.extend(!0, {}, t);
                        oe.each(d, function (t) {
                            Xi(n, t.l, t.s)
                        });
                        var e = [];
                        oe.each(t.evs, function (r) {
                            r = ne.extend(!0, {}, r), oe.each(r, function (t, n) {
                                if (-1 < n.indexOf("val_") && (r[n.replace("val_", "")] = r[n], delete r[n]), Xi(r, "refer_url", "urlr"), r[n] && "url" === n) {
                                    var e = Fn.hash;
                                    e && (r.urlh = e), delete r[n]
                                }
                            }), e.push(r)
                        }), n.evs = e, n[Ct] === n.uuid && delete n.uuid;
                        var r = n[Ot];
                        r && (n[Ot] = r.replace("data_sdk_", "")), delete n.ua, f.push(n)
                    }), f);
                var n, f, d;
                if (oe.each(s, function (t) {
                    c = t.uuid || t.lxid, delete t.ua
                }), !function (t) {
                    for (var n = t.length, e = n, r = 0; r < n; r++) 127 < t.charCodeAt(r) && e++;
                    return 1.5 * e < we
                }(u = pr.stringify(s))) return oe.each(e, function (t) {
                    oe.each(t.evs, function (t) {
                        var n = t.val_lab;
                        t.val_lab = ne.extend(!0, {custom: {_s: 1}}, n || {})
                    })
                }), Qi(i, e, {
                    cb: function (t, n) {
                        try {
                            r(t, n, "ajax-post")
                        } catch (t) {
                        }
                        t !== M && (!o && Li && (o = !0, Ui(i, e)), a || (a = !0, Vi(location.host + location.pathname, "web-report-fail-ajax-post-" + t + "-" + n, c, u)))
                    }
                });
                var l = pe(u), v = Kn(l), p = gn(!0);
                p += -1 < p.indexOf("?") ? "&d=" + v : "?d=" + v, v.length, p = p + "&t=1&r=" + t, Pi ? Qi(p, null, {
                    method: "get",
                    cb: function (t, n) {
                        try {
                            r(t, n, "ajax-get")
                        } catch (t) {
                        }
                        t !== M && (!o && Li && (o = !0, Ui(i, e), Ii.add(s, "get"), Ii.startPoll()), a || (a = !0, Vi(location.host + location.pathname, "web-report-fail-ajax-get-" + t + "-" + n, c, u)))
                    }
                }) : function t(n, e, r) {
                    var i = void 0, o = Pt + ke++;
                    if (e = e || {}, !(2 < (r = r || 0))) return Nn[o] = i = new Image, i.onload = function () {
                        ne.isFunc(e.cb) && e.cb(!0), Nn[o] = null
                    }, i.onabort = i.onerror = function () {
                        Nn[o] = null, A(function () {
                            t(n, e, ++r)
                        }, 100)
                    }, i.src = n, i;
                    ne.isFunc(e.cb) && e.cb(!1)
                }(p, {
                    cb: function (t) {
                        if (t) try {
                            r(M, 200, "image-get")
                        } catch (t) {
                        } else {
                            try {
                                r(Qt, 0, "ajax-get-to-image-get")
                            } catch (t) {
                            }
                            !o && Li && (o = !0, Ui(i, e), Ii.add(s, "get"), Ii.startPoll()), a || (a = !0, Vi(location.host + location.pathname, "web-report-fail-image-get-500-0", c, u))
                        }
                    }
                })
            }(t, n.cb) : Qi(e, t, n) || Qe && Ji(e, t, n) || Ui(e, t) && n.cb(M)
        } catch (t) {
            return Vi(Fn.path, "report-ajax", 0, t.message, !0), !1
        }
        return !0
    }

    function Ui(t, n) {
        var e = Ln.sendBeacon;
        return !!e && (oe.each(n, function (t) {
            oe.each(t.evs, function (t) {
                t.lx_inner_data = ne.extend(!0, {}, t.lx_inner_data), t.lx_inner_data.beacon = "1"
            })
        }), t = Ki(t), e && e.call(Ln, t, pr.stringify(n)))
    }

    function Ji(t, n, e, r) {
        if (!Nn.XDomainRequest) return !1;
        try {
            var i = new XDomainRequest;
            return i.open(Vt, Ki(t), !0), i.onload = function () {
                Fi = 0, e && e.cb(M, 200, "IEXDR-post"), Ci = []
            }, i.onerror = function () {
                Fi++, e && e.cb(F, 0, "IEXDR-post")
            }, i.ontimeout = function () {
                Fi++, r || (!function (t, n, e, r) {
                    Ci = Ci.concat(n);
                    var i = void 0, o = oe.reduce(Ci, function (t, n) {
                        return n.evs = t.evs.concat(n.evs), i = n.evs.length, Ai < i && oe.slice(n.evs, i - Ai, i), n
                    });
                    if (Ci = [o], Mi.push(r), !Ti) var a = setInterval(function () {
                        if (ji <= Fi) return clearInterval(a), !1;
                        e(t, Ci, function (n) {
                            clearInterval(a), Ti = !1, oe.each(Mi, function (t) {
                                t && t(n)
                            })
                        }, !0)
                    }, Ei)
                }(t, n, Ji, e), Ti = !0)
            }, i.timeout = Di, i.send(pr.stringify(n)), !0
        } catch (t) {
            return !1
        }
    }

    function Qi(n, e, r, i) {
        if (!zt()) return !1;
        try {
            var o = r && r.method || Vt, a = ne.isFunc(r.cb) && r.cb || Kt, u = Wi(n, o, "text/plain");
            return u.onreadystatechange = function () {
                if (4 === u.readyState) {
                    var t = u.status;
                    200 <= t && t < 400 ? (Fi = 0, a(M, u.status, "ajax-" + o), Ci = []) : i ? a(P, u.status, "ajax-" + o) : Qi(n, e, r, !0), u.onreadystatechange = null
                }
            }, u.onerror = function () {
                a(F, u.status, "ajax-" + o)
            }, u.send(o === Vt && pr.stringify(e) || null), !0
        } catch (t) {
            return Vi(n, "web-report-fail-runtime", 0, t.stack || t.message), !1
        }
    }

    function Ki(t) {
        var n = "_lxsdk_rnd=" + (Gn().toString(16) + Ni);
        return -1 === t.indexOf("?") ? t + "?" + n : t + "&" + n
    }

    function Wi(t, n, e) {
        var r = new (Wt());
        return r.open(n || Vt, Ki(t), !0), r.timeout = Di, r.setRequestHeader("Content-Type", e), r
    }

    function Xi(t, n, e) {
        return $n.call(t, n) && t[n] && (t[e] = t[n], delete t[n]), t
    }

    var $i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, zi = {}, Hi = ct, Zi = [], Gi = null, Yi = {s: b, l: g, a: O, w: "wxid"}, to = "_lxsdk_wxenv_",
        no = ["sdk_ver", "ua"];

    function eo(t) {
        var n = /(^\w+-\w+-\w+-\w+-\w+)/;
        if (n.test(t)) {
            var e = t.match(n);
            se.top(ht, e[1], lt)
        } else t && !/(^\w+\.\d+\.\d+\.\d+\.\d+)/.test(t) && t.length < 100 ? se.top(ht, t, lt) : se.top(ht, "", -1)
    }

    var ro = 0, io = 1, oo = 2, ao = "|";

    function uo(t) {
        var n = se.get(_t);
        return n ? n.split(ao)[t] : ""
    }

    function co(t, n, e) {
        var r, i, o;
        se.top(_t, (r = n, i = e, (o = []).push(t || so()), o.push(r || fo()), o.push(i || lo()), o.join(ao)), vt)
    }

    function so() {
        return uo(ro)
    }

    function fo() {
        return uo(io)
    }

    function lo() {
        var t = 0, n = uo(oo);
        return isNaN(n) || (t = parseInt(n)), t < 0 ? 0 : t
    }

    var vo, po = void 0, ho = (vo = "_lxsdk_test", se.set(vo, "1"), !(-1 < Rn.cookie.indexOf(vo) && (se.del(vo), 1)));

    function mo() {
        if (ho) return po = po || 0, ++po;
        var t = lo();
        return t = t || 0, co(Bn, Bn, ++t), t
    }

    function go(t, c) {
        return new Ir(function (a, u) {
            A(function () {
                u({code: d})
            }, 3e3), li(t, "getEnv", {}, function (t, n) {
                if (t) u(t); else {
                    Gi = rn.nativeSDKVer = n.sdk_ver, o = rn.nativeSDKVer, ne.isStr(o) && (an.MVL = -1 < Se(o, "4.14.0"), an.QR = -1 < Se(o, "4.14.0"), an.getReqId = -1 < Se(o, "4.12.0"));
                    var e = {uuid: y, msid: b, uid: x, dpid: S, appnm: O, union_id: s};
                    for (var r in c = c || {}, e) {
                        var i = e[r];
                        n[r] && (c[i] = n[r])
                    }
                    a(c)
                }
                var o
            })
        })
    }

    function _o() {
        var t = se.get(yt);
        if (t) {
            var n = t.split(","), e = /^\d+\.\d{5,}$/;
            return 3 !== n.length ? null : e.test(n[0]) && e.test(n[1]) ? {lat: n[0], lng: n[1], tm: n[2]} : null
        }
        return null
    }

    function yo(t) {
        return ne.extend(!0, {}, t)
    }

    function bo(t) {
        var n = Rn.getElementsByTagName("meta"), e = he(n, "lx:appnm"), r = he(n, "lx:defaultAppnm"), i = Le,
            o = Rn.domain, a = wn();
        return dn("appnm", e), dn("defaultAppnm", r), Ve && De(Le || e || r || o), Be ? e || (2 === a ? t : i || (r || o)) : e || (i || (r || o))
    }

    function wo() {
        var t, n, e, r, i, o, a = Le === m || Le === h || Ge,
            u = (t = se.get(ht), n = se.get("iuuid") || se.get("uuid") || t, e = so(), r = fo(), i = se.get(gt) || se.get(S), o = {}, n && (o[y] = n), e && (o[b] = e), t && (o[g] = t), r && (o[x] = r), i && (o[S] = i), o),
            c = void 0, s = {};
        a && (s = function (t) {
            var n = {};
            if (I.test(t)) {
                var e = ne.parseQuery(t);
                if (e[y] && (n[y] = e[y]), e[w] && (n[w] = e[w]), e[k] && (n[x] = e[k]), e.__lxsdk_params) {
                    var i = {}, r = decodeURIComponent(decodeURIComponent(e.__lxsdk_params)).split(";");
                    oe.each(r, function (t) {
                        var n = t.split(":"), e = n[0], r = n[1];
                        if (r) {
                            if (!Yi[e]) try {
                                r = Ce(r)
                            } catch (t) {
                            }
                            i[e] = r
                        }
                    }), n[q] = i
                }
                return n
            }
            return n
        }(Fn.href)), Le === m && (s[y] ? (u[y] ? s[y] !== u[y] ? sn("uuidState", "2") : sn("uuidState", "3") : (u[y] = s[y], sn("uuidState", "1")), delete s[y]) : sn("uuidState", "0")), (c = ne.extend(u, s)).ct = Je;
        var f = cr();
        f && (c[j] = f);
        var d = zr();
        c[g] = d, c[y] || (c[y] = d), c[b] || (c[b] = Zr(), co(c[b], c.uid || "")), c[y] && eo(c[y]);
        var l = bo();
        ne.isStr(l) && (c[O] = l);
        var v,
            p = (v = Vn.replace(/^.*([A-Za-z-]+)\/com\.(sankuai(?!\.meituan\.)|meituan(?!\.sankuai\.)|dianping|sankuai\.meituan|meituan\.sankuai)\.([.A-Za-z0-9-]+)\/(\d+[.\d]+).*$/, "$4"), /^\d+(\.\d+)+$/.test(v) ? v : null);
        return p && (c.app = p), c
    }

    function xo(n) {
        return function (t) {
            var e = t;
            return n !== t && (e = ne.extend(n, t)), e.dpid && e.uid ? e : Wr().then(function (t) {
                var n = {};
                return t.dpid && (n.dpid = t.dpid, t.userId && (n.uid = "" + t.userId), t.unionId && (n.union_id = t.unionId)), e = ne.extend(e, n)
            }, function (t) {
                return C(t), e
            })
        }
    }

    var ko = function (t) {
        en();
        var a = wo();
        if (t && Le || He()) {
            var n = go(t, a);
            return r === Le && (n = n.then(xo(a), function (t) {
                return C(t), xo(a)()
            })), n.then(function (t) {
                var n = bo(t[O]), e = t[S], r = t[y], i = t[s], o = t;
                return t !== a && (o = ne.extend(a, t)), ne.isStr(n) && (o[O] = n), r && eo(r), e && se.top(gt, e, lt), i && se.top("_lxsdk_unoinid", i, lt), o
            }, function (t) {
                return t && C(t), a
            })
        }
        var e, o = yo(a), u = o[q];
        return (e = ne.now(), new Ir(function (t) {
            if (Ge) if (/miniProgram/i.test(Vn)) t(!0); else if (Nn.WeixinJSBridge && Nn.WeixinJSBridge.invoke) t("miniprogram" === Nn.__wxjs_environment); else {
                var n = setTimeout(function () {
                    rn.wx_t = ne.now() - e, t(!1)
                }, 5e3);
                Rn.addEventListener("WeixinJSBridgeReady", function () {
                    clearTimeout(n), rn.wx_t = ne.now() - e, t("miniprogram" === Nn.__wxjs_environment)
                })
            } else t(!1)
        })).then(function (t) {
            if (rn.inWXMP = t) {
                if ("object" === (void 0 === Te ? "undefined" : $i(Te)) && !ne.isObj(u)) for (var n in u = {}, Te) {
                    var e = Te[n];
                    0 === n.indexOf(to) && (u[n.slice(to.length)] = e)
                }
                var r = function (t) {
                    var n = Yi[t] || t, e = u[t];
                    e && (o[v] = o[v] || {}, o[n] && (o[v][n] = o[n]), oe.find(no, function (t) {
                        return t === n
                    }) || (o[n] = e));
                    try {
                        Te.setItem(to + n, e || "")
                    } catch (t) {
                    }
                };
                for (var i in u) r(i)
            }
            return delete o[q], Ir.resolve(o)
        })
    };

    function So(t) {
        return ft === Hi ? Ir.resolve(yo(zi)) : st === Hi ? new Ir(function (n) {
            var t;
            t = function (t) {
                n(t)
            }, Zi.push(t)
        }) : (Hi = st, ko(t).then(function (e) {
            return zi = ne.extend(!0, {}, e || {}), Hi = ft, oe.each(Zi, function (t, n) {
                ne.isFunc(t) && Zi[n](e)
            }), e
        }))
    }

    var Oo = /([a-fA-F0-9-]+)(\.\d+)/, qo = "_hc.v", Io = 525600, jo = "", Ao = /(dper|dianping|51ping)\.com/.test(Pn);

    function Do() {
        return function () {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
        }() + "." + Math.round(+new Date / 1e3)
    }

    function Eo() {
        return !jo && Ao && (jo = function () {
            var t = se.get(qo);
            if (t || (t = Do(), se.top(qo, t, Io)), t) {
                var n = t.match(Oo);
                return n ? n[1] : ""
            }
            return ""
        }()), jo
    }

    var To = function () {
        var t = void 0;
        try {
            var n = document;
            if (n.querySelectorAll) {
                var e = n.querySelectorAll("head script"), r = n.querySelectorAll("body script"), i = [];
                oe.each(e, function (t) {
                    i.push(t)
                }), oe.each(r, function (t) {
                    i.push(t)
                });
                for (var o = 0; o < i.length; o++) {
                    var a = i[o].innerHTML.match(/\[['"]\s*_setPageId\s*['"]\s*,\s*(\d+)\s*\]/);
                    if (a) {
                        t = a[1];
                        break
                    }
                }
            }
        } catch (t) {
        }
        return function () {
            return t
        }
    }();

    function Co(t) {
        var n = this;
        n.s = t;
        var e = void 0, r = yr.get(Rt) || {s: t, d: n.d};
        r.s !== t ? (yr.del(Rt), e = n.d = []) : e = n.d = r.d || [], n.l = e && e.length || 0
    }

    var Mo = null;

    function No() {
        return Mo
    }

    function Fo(t) {
        return Te && ne.isFunc(Te.getItem) ? Te.getItem(t) : se.get(t)
    }

    function Ro(t, n) {
        return Te && ne.isFunc(Te.setItem) ? Te.setItem(t, n) : se.top(t, n, vt)
    }

    function Po(t) {
        Ro(wt, t)
    }

    function Lo() {
        var t = Fo(wt);
        return t || ""
    }

    function Vo(t) {
        Ro(bt, t)
    }

    function Bo() {
        var t = Fo(bt);
        return t || ""
    }

    var Uo = "QR", Jo = 20480 / 30, Qo = 2592e5, Ko = {}, Wo = void 0, Xo = !(Co.prototype = {
            constructor: Co, set: function (t, n, e) {
                var r = this, i = r.l, o = r.d, a = r.indexOf(t),
                    u = {scid: 0 < i ? o[i - 1].scid + 1 : 0, cid: t, bid: n, sf: e};
                -1 < a ? o.splice(a, i - a, u) : o.push(u), r.l = o.length, yr.set(Rt, {s: r.s, d: o})
            }, indexOf: function (t) {
                for (var n = this.d || [], e = 0, r = n.length; e < r; e++) {
                    if (n[e].cid === t) return e
                }
                return -1
            }, toJSON: function () {
                var t = this.d;
                return t && t.length ? t : null
            }
        }), $o = [], zo = !1, Ho = ["ua"].join("|") + "|",
        Zo = ["lxcuid", "category", "sdk_ver", "utm", "uuid", "msid", "ct", "appnm"],
        Go = ["utm", "seq", "tm", "nm", "val_ref", "lng", "val_lab", "req_id", "lat", "s_from", "val_cid", "val_bid"];

    function Yo() {
        if (!Xo) {
            var t = Gn(), n = [Wo.opts.cid], e = 0, r = function (t, n) {
                if (!t) try {
                    var e = n;
                    if (ne.isObj(n) || (e = JSON.parse(n)), 0 === e.code) (function t(n) {
                        var e = 0, r = 0;
                        var i = [];
                        var o = Gn() - Qo;
                        for (var a in n) e += n[a].bids.length, r += n[a].bids.length;
                        if (!r) return;
                        for (var u in Ko) e += Ko[u].bids.length, Ko[u].tm < o && i.push(u);
                        Jo < e && (i.length ? (oe.each(i, function (t) {
                            delete Ko[t]
                        }), t(n)) : Ko = {});
                        Ko = ne.extend(Ko, n);
                        setTimeout(function () {
                            yr.set(Uo, Ko)
                        }, 10)
                    })(function (t) {
                        if (!ne.isObj(t)) return;
                        var i = {}, o = Gn();
                        return oe.each(t, function (n, r) {
                            i[r] = i[r] || {
                                cid: r,
                                tm: o,
                                bids: [],
                                envInfo: (n.envInfo || {}).quickReport || [],
                                evsInfo: (n.evsInfo || {}).quickReport || []
                            }, delete n.envInfo, delete n.evsInfo;
                            var t = function (e) {
                                var t = n[e].quickReport || [];
                                oe.each(t, function (t) {
                                    var n = {tp: e, id: t};
                                    i[r].bids.push(n)
                                })
                            };
                            for (var e in n) t(e)
                        }), i
                    }(e.data)), Xo = !0; else {
                        if (304 !== e.code) return void e.message;
                        Xo = !0
                    }
                } catch (t) {
                }
            };
            for (var i in Ko) e++, t = Math.min(Ko[i].tm, t);
            0 === e && (t = 0);
            var o = ("https://ocean.sankuai.com/delivery/api/web-configFile?\n                timestamp=" + t + "\n                &cidList=" + n.join(",") + "\n                &rnd=" + Math.random()).replace(/\s/g, "");
            "https" === xe() && Qi(o, {}, {cb: r}) || function (t, n, e, r) {
                var i = void 0, o = (r = r || {}).outTime || 5e3,
                    a = "__lxsdk_jsonp_callback_" + Math.random().toString(16).slice(2, 10);
                /^([^?]+)\?/.test(t) ? t = t.replace(/^([^?]+)\?/, "$1?" + n + "=" + a + "&") : /^([^#]+)#/.test(t) ? t = t.replace(/^([^#]+)#/, "$1?" + n + "=" + a + "#") : t += "?" + n + "=" + a;
                var u = Rn.createElement("script");
                u.src = t, Nn[a] = function (t) {
                    clearTimeout(i);
                    try {
                        e(Bn, t)
                    } catch (t) {
                    }
                    delete window[a]
                }, u.type = "application/javascript", u.charset = "utf-8", u.setAttribute("async", "true"), Rn.body.appendChild(u), i = A(function () {
                    try {
                        e("timeout")
                    } catch (t) {
                    }
                    delete window[a]
                }, o), A(function () {
                    Rn.body.removeChild(u)
                }, 0)
            }(o, "callback", r)
        }
    }

    function ta(t, n, e) {
        if (!rn.useQR) return !1;
        if (!Ko[n]) return !1;
        for (var r = Ko[n].bids, i = 0, o = r.length; i < o; i++) {
            var a = r[i];
            if (a.tp == t) {
                if (t === L && a.id == n) return !0;
                if (a.id == e) return !0
            }
        }
        return !1
    }

    function na(t, n, e) {
        var r = {}, i = {};
        if (t && Ko[t]) {
            var o = Zo.concat(Ko[t].envInfo || []), a = Go.concat(Ko[t].evsInfo || []);
            oe.each(o, function (t) {
                n.hasOwnProperty(t) && n[t] && (i[t] = n[t])
            }), oe.each(a, function (t) {
                e.hasOwnProperty(t) && Ho.indexOf(t + "|") < 0 && (r["evs." + t] = e[t])
            });
            var u = ne.extend(!0, i, r);
            $o.push(u), f(zo), zo = setTimeout(function () {
                Qi("https://" + Jt + "/?rnd=" + Math.random(), $o, {nm: e.nm, cb: Kt}), $o = []
            }, 0)
        }
    }

    !function () {
        var t = yr.get(Uo);
        if (t) try {
            var n = void 0;
            n = ne.isObj(t) ? t : JSON.parse(t), Ko = ne.extend(!0, Ko, n)
        } catch (t) {
        }
    }(), function n() {
        var e = su();
        return new Ir(function (t) {
            e ? t(e) : setTimeout(function () {
                n().then(t)
            }, 100)
        })
    }().then(function (t) {
        Wo = t, rn.useQR && (xe(), Yo())
    });
    var ea = "category", ra = "setEvs", ia = 5e3, oa = {overlen_cutoff: 1},
        aa = {code: 200, status: 200, type: "native-report"}, ua = {code: Qt, status: 200, type: "native-report"},
        ca = "val_bid", sa = "page", fa = "s_from", da = "lat", la = "lng", va = [], pa = Rn.referrer, ha = [],
        ma = void 0, ga = void 0, _a = {}, ya = 0, ba = 0, wa = function (t, n, e) {
            if (e) {
                var r = {}, i = {custom: r};
                r[n] = e, t = ne.extend(!0, t || {}, i)
            }
            return t
        }, xa = function (t, n) {
            var e, r, i = (e = t, r = "fn_" + parseInt(1e6 * Yn()), Me[r] = e, r);
            return A(function () {
                Ne(i, {code: -1, status: 408, type: "overtime"})
            }, te(n) && n || 2e3), i
        };

    function ka(t, n) {
        var e = this;
        e.env = n || {}, e.currentEvs = {}, e.opts = ne.extend(!0, {}, t), va.push(e), An = e
    }

    var Sa = ka.prototype;

    function Oa(t) {
        return 6 === t._ptpvs
    }

    function qa() {
        return !ya
    }

    function Ia(t) {
        return (t = t || {}) && !ne.isObj(t) && (t = {cid: "" + t}), t
    }

    function ja(e, r, i, o, a) {
        var u = this, c = xa((a = a || {}).callback, a.callbackTimeout), t = a, n = t.isLeave, s = t.currentPageInfo,
            f = t.mvDelay, d = t.sf, l = ta(e, r, i);
        if (wn() === at) {
            var v = Ma(u), p = Va(Sr.getAll()), h = Ra(e, r, i, o), m = h.body, g = h.ev, _ = Ba(v, m, p);
            if (l && na(r, v, g), e === J) {
                if (f) return ne.run(m, function (t) {
                    ha.push(t)
                }), void A(function () {
                    if (ha.length) {
                        var t = Ba(v, ha, p);
                        u.send(t, {cbkey: c}), ha = []
                    }
                }, f * it)
            } else {
                if (e === Q) return void Dn.call(u, Q, v, m[0], {tag: p});
                if (e === B) {
                    if (s && function (t, n) {
                        ne.isObj(t[Mt]) || (t[Mt] = {});
                        t[Mt][sa] = n
                    }(g, u._cpi), _ = Ba(v, m, p), n) {
                        var y = ye(), b = Fa(V, r, Bn, y);
                        _.evs.push(b), Po(r), Vo(ma)
                    }
                    Ve && d && No().set(r, i, d)
                }
            }
            u.send(_, {nm: e, cbkey: c})
        } else {
            var w = u.env, x = void 0, k = Na({isQuickReport: l}), S = [La.call(u, e, r, i, o)];
            if (e === B && (x = {sf: d}, u._cpi && (x.cpi = u._cpi), S = [La.call(u, e, r, i, o, null, x)], n)) {
                var O = ye(), q = La.call(u, V, r, null, O);
                S.push(q), Po(r), Vo(ma)
            }
            w[j] && (S = function (t, n) {
                if (!oe.isArray(t) || !t.length) return t;
                if (!ne.isObj(t[0][Mt])) return t[0][Mt] = {page: {utm: n[j]}}, t;
                if (!ne.isObj(t[0][Mt][sa])) return t[0][Mt][sa] = {utm: n[j]}, t;
                return t[0][Mt][sa] = ne.extend(!0, t[0][Mt][sa], {utm: n[j]}), t
            }(S, w));
            var I = Ca(w[ea]);
            new Date;
            li(I, ra, S, function (t, n) {
                t ? (xn(at), C(t), new Date, Ne(c, ua), ja.call(u, e, r, i, o, a)) : (Ne(c, aa), new Date)
            }, {nativeOptions: k})
        }
    }

    function Aa() {
        return ma || (ma = Ea()), ma
    }

    function Da(t) {
        var n = yr.get(p);
        return n && t && yr.del(p), n
    }

    function Ea() {
        return ne.now().toString(16) + "-" + Math.floor(65535 * ne.rnd()) + "-" + Math.floor(65535 * ne.rnd())
    }

    function Ta(t) {
        var n, e, r = t.nm;
        L === r ? (t.nm = "mpt", t.val_act = "pageview") : V === r ? (t.nm = "report", t.val_act = "quit") : (t.nm = "mge", t.event_type = (n = r, (e = {})[W] = "order", e[X] = "pay", e[B] = "click", e[K] = "return", e[J] = "view", e[U] = "click", e[n] || r)), t.nt = 0, t.isauto = 8
    }

    function Ca(t) {
        var n = "data_sdk_";
        return 0 === t.indexOf(n) && (t = t.replace(n, "")), t
    }

    function Ma(t) {
        var n, e, r = ne.extend(!0, {}, t.env);
        r[ea] = (n = r[ea], e = "data_sdk_", 0 !== n.indexOf(e) && (n = e + n), n);
        var i = so();
        i || co(i = Zr(), r.uid || ""), r[b] = t.env[b] = i;
        var o = r.utm, a = {ua: Fe, sdk_ver: _, ch: o && o.utm_source ? o.utm_source : "web", sc: $e};
        a[Dt] = _, rn.debug && (a._misid = rn.debug);
        var u = ne.extend(!0, a, r);
        return Be && !yn() && delete u.ch, u
    }

    function Na(t) {
        return (t = t || {}).isQuickReport = un("QR") && !!t.isQuickReport, t
    }

    function Fa(t, n, e, r, i) {
        i = i || T;
        var o, a, u, c = mo(), s = _o(), f = ne.isObj(r) && r.custom || {}, d = void 0, l = L === t, v = W === t,
            p = X === t, h = {
                nm: t,
                tm: ne.now(),
                nt: rn.inWXMP ? ut : at,
                isauto: i,
                val_cid: n,
                req_id: Aa(),
                seq: c,
                lx_inner_data: fn()
            };
        if (l) {
            var m = Fn.href;
            h.url = m, (d = pa) && (h.refer_url = d), i === T && (pa = m)
        }
        (v || l || p) && Ve && (o = h, (a = No().toJSON()) && (o[fa] = a), h = o), r = wa(r, "_hguid", Eo()), (u = r) && u.custom && "v3" === u.custom._api && !n && (h.val_cid = Rn.title || Fn.pathname, r = wa(r, "_cid", 1)), ne.isObj(f) && "v3" === f._api && (h.lx_inner_data._api = "v3", delete f._api);
        try {
            h.lx_inner_data.ht = yn()
        } catch (t) {
        }
        return l && (r = wa(r, "_hpid", To()), rn.wx_t && (r = wa(r, "_wx_t", rn.wx_t))), e && (h[ca] = e), s && (h[da] = s.lat, h[la] = s.lng), r && (JSON.stringify(r).length >= ia && (r = oa), (h[Mt] = r).lat && r.lng && (h[da] = r.lat, h[la] = r.lng)), h
    }

    function Ra(t, n, e, r, i) {
        var o = Fa(t, n, e, r, i);
        return {
            body: function (t) {
                {
                    if (ha && 0 < ha.length) {
                        var n = ha;
                        return ha = [], n.push(t), n
                    }
                    return [t]
                }
            }(o), ev: o
        }
    }

    function Pa(t) {
        return Ue ? t : Pe && !oi ? t : Kn(t)
    }

    function La(t, n, e, r, i, o) {
        i = i || T;
        var a = (o = o || {}).fromWA, u = this.env.appnm, c = _o(), s = !kn, f = void 0,
            d = {nm: t, tm: ne.now(), nt: ot, isauto: i, val_cid: n, shouldCover: s, lx_inner_data: fn()};
        d = ne.extend(!0, d, _a), ga && (d.req_id = ga), o.sf && (d._sf = o.sf);
        var l = void 0, v = ne.extend(!0, {}, r || {}), p = L === t;
        if (p) {
            var h = Pa(Fn.href);
            l = {ua: Fe, url: h, _fromWA: !!a};
            var m = cr();
            m && m.utm_source && (l.utm = m), (f = pa) && (l.refer_url = Pa(f)), i === T && (pa = h)
        } else l = {};
        if (d = ne.extend(d, {
            web_cid: n,
            web_req_id: Aa(),
            web_refer_cid: Lo(),
            web_refer_req_id: Bo(),
            web_first_pv: !!(ba <= 1 && Nn.history && 1 === Nn.history.length)
        }), oe.each({web_req_id: Aa(), web_sdk_ver: _, lxcuid: zr(), web_appnm: u}, function (t, n) {
            ne.isStr(t) && (l[n] = t)
        }), ne.isObj(v.custom) && "v3" === v.custom._api && (l.web_appnm = function (t) {
            if (ne.isStr(t)) return t && nn[t] || nn
        }("appnm"), d.lx_inner_data._api = "v3", delete v.custom._api), o.cpi && !v.page && (v.page = o.cpi), v.custom = ne.extend(!0, v.custom, l), v = wa(v, "_hguid", Eo()), p) {
            v = wa(v, "_hpid", To());
            try {
                var g = void 0;
                ue(document.scripts, function (t) {
                    var n = t.src;
                    /\/\/analytics\.meituan\.(net|com)\//.test(n) && (g = n)
                }), v = wa(v, "_lxsdk_url", g)
            } catch (t) {
            }
        }
        return t !== U || ii ? vi() || Ta(d) : vi() ? d.nm = B : Ta(d), c && (d[da] = c.lat, d[la] = c.lng), e && (d[ca] = e), v && JSON.stringify(v).length >= ia && (v = oa), d[Mt] = v, p && !vi() && (d.val_val = v, delete d[Mt]), d
    }

    function Va(t) {
        return t
    }

    function Ba(t, n, e) {
        return oe.isArrayLike(n) || (n = [n]), ne.run(n, function (t) {
            t && e && (t.tag = e)
        }), t.evs = n, t
    }

    function Ua(t, n) {
        var e = {};
        return e[rt] = n, ne.extend(e, t)
    }

    function Ja(e, t, n, r) {
        var i, o, a, u,
            c = (i = t, o = n, a = r, u = null, !ne.isStr(i) || o || a ? ne.isObj(i) && ne.isStr(o) && !a && (u = o, o = null) : (u = i, i = null), u && (a = ne.extend({cid: u}, a || {})), {
                lab: i,
                env: o,
                opts: a
            }), s = c.lab, f = c.env;
        r = Ia(c.opts);
        var d = e.opts.cid = r.cid || e.opts.cid;
        r = ne.extend({cid: d}, r), f && ne.isObj(f) && oe.each(f, function (t, n) {
            e._dt.set(n, t, Bn, !0)
        }), e._dt.pageView(s, r)
    }

    function Qa(t, n) {
        this.env = t || {}, this.opts = n || {}, this._t = []
    }

    Sa.set = function (t, n, e, r) {
        var i = this, o = i.env;
        if (ne.isObj(t)) ue(t, function (t, n) {
            i.set(n, t)
        }); else if (!r && rn.inWXMP && ne.isObj(o[v]) && o[v][t] ? o[v][t] = n : o[t] = n, dn(t, n), O === t && De(n), "utm" === t && ne.isObj(n) && ur(n), ot !== wn() || Lt[t]) ne.isFunc(e) && e(o, i); else {
            var a = {}, u = Ca(o[ea]);
            a[t] = n, li(u, "setEnv", a, function () {
                ne.isFunc(e) && e(o, i)
            })
        }
    }, Sa.get = function (t, n) {
        ne.isFunc(n) && n(this.env[t], this)
    }, Sa.pageView = function (e, r) {
        r = Ia(r) || {};
        var t = void 0, i = this, n = r.fromWA, o = r.withlab, a = xa(r.callback, r.callbackTimeout), u = i.opts.cid,
            c = r.cid || u, s = r.isauto || T, f = r.isAutoInit, d = r.reportStatus, l = u && !(Oa(i) || f) && !qa(),
            v = d === at || at === wn(), p = i.env;
        if (n && o ? (s = 6, e = this._cpi || {}) : this._cpi = e, l && !vn()) {
            var h = ye(!0);
            t = v ? Fa(V, u, null, h) : La.call(i, V, u, null, h), Po(c), Vo(ma), ln(0)
        }
        u && (Oa(i) || qa()) || (ma = Ea()), i.opts.cid = c;
        var m = ta(L, c);
        if (v) {
            var g = Ma(i), _ = Va(Sr.getAll()), y = Ra(L, c, null, e, s), b = y.body;
            l && t && b.unshift(t);
            var w = Ba(g, b, _);
            m && na(c, g, y.ev), this.send(w, {nm: L, cbkey: a}), ba++, f || ya++
        } else {
            var x = Na({isQuickReport: m, shouldCoverCid: !0, needCachePD: !0}),
                k = [La.call(i, L, c, null, e, s, {fromWA: n})];
            l && t && k.push(t), oe.each(k, function (t) {
                t.appnm = p.appnm
            }), li(Ca(p[ea]), ra, k, function (t, n) {
                t ? (xn(at), Ne(a, ua), i.pageView(e, r), Vi(Fn.href, "native-report-error", i.env.union_id, C(t))) : (ba++, f || ya++, Ne(a, aa))
            }, {nativeOptions: x})
        }
        i.currentEvs = {cid: c, req_id: Aa(), refer_cid: Lo(), refer_req_id: Bo()}, i._ptpvs = f ? 6 : T
    }, Sa.pageDisappear = function (e, r) {
        r = ne.extend({}, r);
        var i = this, t = r.cid || i.opts.cid, n = r.getDurationFromLastPV || !1, o = r.shouldStore;
        ln(l);
        var a = ye(n);
        if (e = ne.extend(a, e), Po(t), Vo(ma), at === wn() || o) {
            var u = Ba(Ma(i), Fa(V, t, null, e), Va(Sr.getAll()));
            if (Ve && o && yr.nt) {
                Ae() && (rn.inWXMP && ne.isObj(u[v]) && u[v][O] ? u[v][O] = Ee() : u[O] = Ee());
                var c = Da() || [];
                oe.isArray(c) ? yr.set(p, c.concat(u)) : yr.set(p, [u])
            } else i.send(u)
        } else {
            var s = this.env, f = Na(), d = [La.call(i, V, t, null, e)];
            li(Ca(s[ea]), ra, d, function (t, n) {
                t && (xn(at), i.pageDisappear(e, r))
            }, {nativeOptions: f})
        }
        Cn()
    }, Sa.systemCheck = function (e, r, i) {
        i = ne.extend({}, i);
        var o = this, t = i.cid || o.opts.cid, n = !!i.isLXLog;
        if (at === wn()) {
            var a = Ma(o), u = Ba(a, Ra(U, t, e, r).body, Va(Sr.getAll()));
            n && (a.category = "others"), this.send(u)
        } else {
            var c = o.env, s = Na(), f = [La.call(o, U, t, e, r)], d = Ca(c[ea]);
            n && (d = "others"), li(d, ra, f, function (t, n) {
                t && (xn(at), o.systemCheck(e, r, i))
            }, {nativeOptions: s})
        }
    }, Sa.moduleView = function (t, n, e) {
        var r = (e = ne.extend({}, e)).callback, i = e.callbackTimeout, o = this.opts.mvDelay || e.delay,
            a = e.cid || this.opts.cid;
        ja.call(this, J, a, t, n, {mvDelay: o, callback: r, callbackTimeout: i})
    }, Sa.moduleViewList = function (t, n, e) {
        var r = (e = ne.extend({}, e)).callback, i = e.callbackTimeout, o = this.opts.mvDelay || e.delay,
            a = e.cid || this.opts.cid, u = un("MVL");
        wn() !== ot || u ? ja.call(this, Q, a, t, n) : ja.call(this, J, a, t, n, {
            mvDelay: o,
            callback: r,
            callbackTimeout: i
        })
    }, Sa.moduleClick = function (t, n, e) {
        var r = (e = ne.extend({}, e)).callback, i = e.callbackTimeout, o = e.cid || this.opts.cid, a = e.sf;
        e && e.isLeave && ln(l);
        var u = e.withPageInfo && ne.isObj(this._cpi) ? this._cpi : Bn;
        ja.call(this, B, o, t, n, {currentPageInfo: u, isLeave: e.isLeave, sf: a, callback: r, callbackTimeout: i})
    }, Sa.moduleEdit = function (t, n, e) {
        var r = (e = ne.extend({}, e)).cid || this.opts.cid;
        ja.call(this, K, r, t, n, e)
    }, Sa.order = function (e, r, i) {
        i = ne.extend({}, i);
        var o = this, a = xa(i.callback, i.callbackTimeout), t = i.cid || o.opts.cid;
        be(0, r);
        var n = ta(W, t, e);
        if (at === wn()) {
            var u = Ma(this), c = Ra(W, t, e, r), s = c.body, f = Va(Sr.getAll()), d = Ba(u, s, f);
            n && na(t, u, c.ev), this.send(d, {cbkey: a})
        } else {
            var l = this.env, v = Na({isQuickReport: n}), p = [La.call(o, W, t, e, r)];
            li(Ca(l[ea]), ra, p, function (t, n) {
                t ? (xn(at), Ne(a, ua), o.order(e, r, i)) : Ne(a, aa)
            }, {nativeOptions: v})
        }
    }, Sa.pay = function (e, r, i) {
        i = ne.extend({}, i);
        var o = this, a = xa(i.callback, i.callbackTimeout), t = i.cid || o.opts.cid;
        be(0, r);
        var n = ta(X, t, e);
        if (at === wn()) {
            var u = Ma(o), c = Ra(X, t, e, r), s = c.body, f = Va(Sr.getAll()), d = Ba(u, s, f);
            n && na(t, u, c.ev), this.send(d, {
                cb: function (t, n, e) {
                    Sr.clear(), Ne(a, {code: t, status: n, type: e})
                }
            }), o.clearTag()
        } else {
            var l = this.env, v = Na({isQuickReport: n}), p = [La.call(o, X, t, e, r)];
            li(Ca(l[ea]), ra, p, function (t, n) {
                t ? (xn(at), Ne(a, ua), o.pay(e, r, i)) : Ne(a, aa)
            }, {nativeOptions: v})
        }
    }, Sa.tag = function (e, t, n, i) {
        var r = void 0, o = this.env, a = arguments, u = [], c = function (t) {
            if (!ne.isObj(t)) return t;
            for (var n = t, e = 0, r = u.length; e < r; e++) {
                if (!n) return n;
                n = n[u[e]]
            }
            return n
        }, s = function () {
            oe.each(a, function (t) {
                if (!ne.isStr(t)) return !1;
                u.push(t)
            })
        }, f = function (t, n, e) {
            var r = {};
            r[t] = n, li(Ca(o[ea]), "setTag", r, function (t, n) {
                i && (e && s(), i(t, c(n), !0))
            })
        }, d = function (t) {
            var n = Sr.getAll();
            t || s(), i && i(0, c(n), !1)
        };
        if (oe.each(a, function (t) {
            ne.isFunc(t) && (i = t)
        }), ne.isObj(e)) {
            var l = this;
            oe.each(e, function (t, n) {
                l.tag(n, t)
            })
        } else ne.isStr(e) && ne.isObj(t) ? at !== wn() ? f(e, r = t, !0) : (ue(t, function (t, n) {
            Sr.set(e, n, t)
        }), d(!0)) : (ne.isObj(n) || ne.isStr(n)) && function (t) {
            if (!ne.isStr(t) && !t.length) return !1;
            return !0
        }(e) && ne.isStr(t) ? at !== wn() ? ((r = {})[t] = n, f(e, r, !0)) : (Sr.set(e, t, n), d(!0)) : ne.isFunc(e) || ne.isFunc(t) || ne.isStr(e) && ne.isStr(t) && ne.isFunc(n) ? at !== wn() ? (s(), li(Ca(o[ea]), "getTag", {}, function (t, n) {
            i && i(t, c(n), !0)
        })) : d() : i && i(-1)
    }, Sa.clearTag = function (t, n, e) {
        var r = 0;
        at === wn() ? (ne.isFunc(t) && (e = t, t = Bn), Sr.clear(t, n), e && e(0)) : r = -1, e && e(r)
    }, Sa.sfrom = function (r) {
        var i = void 0, t = this.env;
        at !== wn() ? li(Ca(t[ea]), "getSFrom", {}, function (t, n) {
            if (n) {
                var e = n.data ? n.data : n;
                i = ne.isStr(e) ? JSON.parse(e) : e, r(t, i)
            }
        }) : r(1, [])
    }, Sa.send = function (t, r) {
        var n = [];
        r = ne.extend({
            cb: function (t, n, e) {
                r.cbkey && Ne(r.cbkey, {code: t, status: n, type: e})
            }
        }, r), ne.run(t, function (t) {
            Ae() && (rn.inWXMP && ne.isObj(t[v]) && t[v][O] ? t[v][O] = Ee() : t[O] = Ee()), n.push(t)
        });
        var e = Da(!0);
        e && oe.isArray(e) && (n = e.concat(n)), Bi(n, r)
    }, Sa.getAll = function () {
        return va
    };
    var Ka = Qa.prototype;
    Ka.create = function (t, n) {
        var e = ne.extend({}, this.env);
        e = ne.extend(e, {category: t});
        var r = ne.extend({isDefault: !1}, this.opts), i = new ka(r = ne.extend(r, n || {}), e);
        return this._t.push(i), n.isDefault && (this._dt = i), i
    }, Ka.config = function (t, n) {
        return Bn !== t && (rn[t] = n), "cid" === t && ie(n) && (this.opts.cid = n), rn[t]
    }, Ka._initPV = function (t, n) {
        Ja(this, this.config("pageValLab"), t = ne.extend(t, this.config("pageEnv")), {
            isauto: 6,
            cid: n,
            isAutoInit: !0
        })
    }, Ka.pageView = function (t, n, e) {
        Ja(this, t, n, e)
    }, Ka.moduleView = function (t, n, e) {
        this._dt.moduleView(t, n, e)
    }, Ka.moduleViewList = function (t, n, e) {
        this._dt.moduleViewList(t, n, e)
    }, Ka.systemCheck = function (t, n, e) {
        this._dt.systemCheck(t, n, e)
    }, Ka.moduleClick = function (t, n, e) {
        this._dt.moduleClick(t, n, e)
    }, Ka.moduleEdit = function (t, n, e) {
        this._dt.moduleEdit(t, n, e)
    }, Ka.order = function (t, n, e, r) {
        this._dt.order(t, Ua(e, n), r)
    }, Ka.pay = function (t, n, e, r) {
        this._dt.pay(t, Ua(e, n), r)
    }, Ka.pageDisappear = function (t, n) {
        this._dt.pageDisappear(t, n)
    }, Ka.tag = function (t, n, e, r) {
        this._dt.tag(t, n, e, r)
    }, Ka.sfrom = function (t) {
        this._dt.sfrom(t)
    }, Ka.clearTag = function (t, n, e) {
        this._dt.clearTag(t, n, e)
    }, Ka.getAll = function (t) {
        t && t(this._t)
    }, Ka.getTracker = function (n, t) {
        var e = oe.find(this._t, function (t) {
            return t.env.category === n
        });
        t && t(e)
    }, Ka.get = function (t, n) {
        this._dt.get(t, n)
    }, Ka.set = function (t, n, e) {
        this._dt.set(t, n, e)
    }, Ka._setRequestID = function (t) {
        ga = t
    }, Ka._setNativeEvsData = function (t, n) {
        var e;
        e = n, _a[t] = e
    };
    var Wa = void 0, Xa = !0, $a = function () {
        var t, n, e, r;
        if (!!!rn.onWebviewAppearAutoPV) return t = rn.c, void su().getTracker(t, function (t) {
            var n = t.env.category, e = ne.extend({refer_cid: Lo(), refer_req_id: Bo()}, t.currentEvs);
            oe.each(e, function (t, n) {
                e["web_" + n] = t, delete e[n]
            }), li(n, "setWebPageData", e, function (t, n) {
            })
        });
        e = n || Gn(), r = me(), _e.update(e), Wn = e, r && (r.l = e), fu(), Wa.pageView(Bn, Bn, {
            fromWA: !0,
            withlab: !!rn.positiveLab
        }), ln(0)
    }, za = function () {
        !!rn.onWebviewAppearAutoPV && (vn() || (ln(l), Wa.pageDisappear({}, {getDurationFromLastPV: !0})))
    }, Ha = function () {
        Xa = !0, $a()
    }, Za = function () {
        Xa = !1, za(), Cn()
    }, Ga = function () {
        Xa && $a()
    }, Ya = function () {
        Xa && (za(), Cn())
    }, tu = void 0, nu = !!/\d\.\d\.\d/.test(Ze) && 0 <= Se(Ze, "11.3.0");

    function eu(t, n) {
        ne.isStr(t) && (n = ne.isFunc(n) && n || function () {
        }, "on" + t in Nn || "KNB:" + t in Nn ? ne.on(window, t, function (t) {
            n(t)
        }) : (tu = window.KNB) && ne.isFunc(tu.subscribe) && tu.subscribe({
            action: t, handle: function () {
                n()
            }, success: function () {
            }, fail: function (t) {
            }
        }))
    }

    var ru = {
        hook: function () {
            try {
                eu("appear", Ha), eu("disappear", Za), nu && (eu("foreground", Ga), eu("background", Ya))
            } catch (t) {
                Vi("sdk", "api-error", "", t.stack, !0)
            }
            Wa = su()
        }
    }, iu = [], ou = ct, au = void 0, uu = void 0;

    function cu(t, n) {
        return {cb: t, cmd: n}
    }

    function su() {
        return au
    }

    function fu() {
        var n, r;
        Sn(!1), (n = uu, r = {none: !0}, new Ir(function (e) {
            try {
                var t = Se(Gi, "4.12.0");
                !Gi || !te(t) || t < 0 ? e(r) : n && Le || He() ? li(n, "getReqId", {}, function (t, n) {
                    e(t ? r : n)
                }) : e(r)
            } catch (t) {
                e(r), Vi("sdk", "api-error", "", t.stack, !0)
            }
        })).then(function (t) {
            var n = t || {}, e = n.val_ref, r = n.req_id, i = n.refer_req_id, o = !!(r || e || i);
            r && au._setRequestID(r), e && au._setNativeEvsData("val_ref", e), i && au._setNativeEvsData("refer_req_id", i), Sn(o)
        })
    }

    function du(t, n) {
        if (ft === ou) t && t(au); else if (st === ou) t && iu.push(cu(t, n)); else {
            ne.now();
            iu = iu.concat(cu(t, n));
            var e = Rn.getElementsByTagName("meta"), o = he(e, "lx:cid") || rn.cid;
            if (!(uu = rn.c = he(e, "lx:category"))) return void (ou = ct);
            ou = st;
            var a = he(e, "lx:mvDelay");
            a = isNaN(a) ? 0 : parseInt(a, 10);
            var u = "off" !== he(e, "lx:autopv");
            rn.autoPV = u, A(fu, 1e3), Ir.all([So(uu)]).then(function (t) {
                var n, r = t[0], e = r.appnm;
                !ne.isStr(e) || Rn.domain, au = new Qa(r, {
                    cid: o,
                    isDefault: !0,
                    mvDelay: a
                }), uu && au.create(uu, {isDefault: !0}), r = ne.extend(!0, au._dt.env, r), au._dt.env = r, ne.now();
                try {
                    var i = [];
                    oe.each(iu, function (t) {
                        var n = t.cb, e = t.cmd;
                        "config" === e || "set" === e ? n(au, r) : i.push(t)
                    }), Ve && (n = r.msid, Mo || (Mo = new Co(n))), u && uu && o && o && au._initPV(r, o), ru.hook(function () {
                    }), oe.each(i, function (t) {
                        t && t.cb && t.cb(au, r)
                    })
                } catch (t) {
                }
            }).then(function () {
                ou = ft, Ii.check()
            }, function (t) {
                throw ou = ft, t
            })
        }
    }

    var lu = [["click", nt], ["tap", nt], ["view", "moduleView"], ["return", "moduleEdit"], ["order", et], ["pay", "pay"]],
        vu = oe.reduce(lu, function (t, n) {
            return t[n[0]] = n[1], t
        }, {}), pu = [["mpt", Y], ["report", "pageDisappear"]], hu = oe.reduce(pu, function (t, n) {
            return t[n[0]] = n[1], t
        }, {}), mu = oe.reduce(["config", "event", "send", "use"], function (t, n) {
            return t[n] = !0, t
        }, {}), gu = function (t, n) {
            var e = Rn.getElementsByTagName("head")[0], r = Rn.createElement("meta");
            r.setAttribute("name", t), r.setAttribute("content", n), e.appendChild(r)
        }, _u = function (e, t) {
            return e = e || {}, ue(t, function (t, n) {
                1 === {act: 1, cid: 1, val: 1, lab: 1, bid: 1}[n] ? e["val_" + n] = t : e[n] = t
            }), e
        }, yu = function (t, n, e) {
            (t && !re(t) && (t = {custom: {_lab: t}}), !t && e && (t = {}), e) && ((t.custom = t.custom || {})[n] = e);
            return t
        }, bu = function (t, n, e) {
            return t && !re(t) && (t = {custom: {_lab: t}}), t && (t[n] = e), t
        }, wu = function (t, n) {
            var e = t[Mt], r = t[Ft];
            if (e && e === r && (r = ee(!0, {}, r)), n && (r || e)) {
                var i = e;
                e = r || {}, i && (e = yu(e || {}, "_lab", i))
            } else if (!n && (r || e)) {
                if (ie(r) && (r = {analyse_val: r}), ie(e)) e = {val_lab: e};
                r && (e = bu(e || {}, "page", r))
            }
            return Bn !== t[z] && (e = yu(e || {}, "_act", t[z])), Bn !== t[$] && (e = yu(e || {}, "_et", t[$])), Bn !== t[Z] && (e = bu(e || {}, Z, t[Z])), Bn !== t[G] && (e = yu(e || {}, "_el_id", t[G])), e
        };

    function xu(t) {
        var n, e, r, i = (e = (n = t).split("."), r = void 0, 2 === e.length && (n = e[1], r = e[0]), [n, r]),
            o = void 0;
        return i[1] && (o = i[1]), [t = i[0], o]
    }

    var ku = function n(e, t) {
        var r = xu(e);
        e = r[0];
        var i = r[1], o = t[0], a = t[1];
        if (oe.isArray(o)) return ce(o, function (t) {
            return n(i ? i + "." + e : e, [t, a])
        });
        var u, c, s = (o.nm || "mge").toLowerCase();
        o.nm = s, (c = (u = o).val) && (_u(u, c), delete u.val), o = u;
        var f = "mge" === s;
        if ("mpt" === s) return function (t) {
            t = _u(t, t.val);
            var n = wu(t, !0);
            return [Y, n, null, t[H]]
        }.apply(null, t);
        var d, l, v = et === s, p = "pay" === s, h = o[$], m = o[z], g = wu(o, !1);
        v || p || h || !f || !m ? p || v ? e = s : (l = h, e = "mge" === (d = s) ? l ? vu[l] || tt : nt : "mpt" === d || "report" === d ? hu[d] : tt, f || (g = yu(g || {}, "_nm", s))) : e = nt;
        var _ = o[H];
        return _ && ((a = a || {}).cid = _), i && yu(g, "_logchannel", i), yu(g = g || {}, "_api", "v3"), e === et || "pay" === e ? [e, o[Nt], g.order_id, g, a] : [e, o[Nt], g, a]
    }, Su = function t() {
        if (!t.f) {
            gu("lx:autopv", "off"), t.f = !0
        }
    }, Ou = function (t) {
        if (!t || !t.length) return t;
        try {
            var n = t[0];
            0 < (a = (o = n).indexOf(".")) && (o = o.substr(a + 1)), mu[o] && (t = oe.slice(t, 1), qu(n) ? (je(3), Su(), t = ku(n, t)) : Iu(n) ? (je(3), Su(), t = function (t, n) {
                var e = xu(t)[1];
                t = Y;
                var r = n[1], i = n[2], o = e ? {custom: {_logchannel: e}} : Bn, a = {};
                if (ie(r)) re(i) ? o = i : ie(i) && (o = yu({}, "analyse_val", i)); else if (re(r)) {
                    i = (a = _u(a, r))[Ft], ie(i) && (i = yu({}, "analyse_val", i)), o = i;
                    var u = a[Mt];
                    u && yu(o, "_lab", u), r = a[H]
                }
                var c = void 0;
                return r && ((c = {}).cid = r), [t, o = yu(o, "_api", "v3"), Bn, c]
            }(n, t)) : ju(n) ? (je(3), Su(), t = function (t, n) {
                var e = n[0], r = n[1];
                if (e && (e = e.replace(/^data_sdk_/i, ""), gu("lx:category", e)), re(r)) return ["set", r]
            }(0, t)) : Au(n, t[0], t[1]) ? (Su(), e = n, r = t[0], i = t[1], t = "appnm" === r && ie(i) ? void gu("lx:appnm", i) : ("cid" === r && ie(i) && gu("lx:cid", i), [e, r, i])) : t.unshift(n))
        } catch (t) {
        }
        var e, r, i, o, a;
        return t
    }, qu = function (t) {
        var n = t.indexOf(".");
        return 0 < n && (t = t.substr(n + 1)), "event" === t
    }, Iu = function (t) {
        var n = t.indexOf(".");
        return 0 < n && (t = t.substr(n + 1)), "send" === t
    }, ju = function (t) {
        return "use" === t
    }, Au = function (t, n) {
        var e = !1;
        return "cid" !== n && "appnm" !== n || (je(3), e = !0), "config" === t && e
    }, Du = void 0, Eu = void 0;

    function Tu(t, n, e, r, i) {
        if (ne.isFunc(n)) n.call(t, t, r, i); else if (!i && ne.isStr(n)) {
            if (ne.isFunc(t[n])) return t[n].apply(t, e);
            if ("onLoad" === n) try {
                e[0](ne.extend(!0, {}, r))
            } catch (t) {
            }
        }
    }

    function Cu() {
        if (!Eu) {
            Eu = !0;
            var r = void 0;
            Qe && ne.on(Rn, "mouseup", function (t) {
                var n = t.target || t.srcElement, e = n.tagName + n.href;
                e = e.toLocaleLowerCase(), 1 === n.nodeType && /^ajavascript:/i.test(e) && (r = new Date)
            });
            var t = Nn.onbeforeunload;
            Ve && Ue ? Nn.addEventListener("pagehide", Oe(!1, Qe, r, void 0, Mu, Bn, vn)) : Nn.onbeforeunload = Oe(!1, Qe, r, void 0, Mu, t, vn)
        }
    }

    function Mu(r) {
        var t = arguments;
        if (t.length) {
            var i = oe.slice(t, 1, t.length);
            try {
                Du ? Tu(Du, r, i, Du._dt ? Du._dt.env : null) : du(function (t, n, e) {
                    Tu(Du = t, r, i, n, e), Cu()
                }, r)
            } catch (t) {
                try {
                    Vi("sdk", "api-error", "", t.message + "\n" + t.stack, !0)
                } catch (t) {
                }
            }
        }
    }

    window._lxsdk_isDOMReady || (window._lxsdk_isDOMReady = !0, function () {
        var s = !0, f = !1, d = function () {
            var t = me();
            t && (t.q.push = function n(t) {
                try {
                    var e, r = (e = Ou(t)) ? e[0] : "";
                    if (oe.isArray(r)) return void ue(e, function (t) {
                        n(t)
                    });
                    "start" === r ? (s = !0, f || l(d)) : !1 === s ? e && d.push(e) : Mu.apply(Bn, e)
                } catch (t) {
                    try {
                        Vi("sdk", "api-error", "", t.stack, !0)
                    } catch (t) {
                    }
                }
            });
            for (var n = void 0, e = void 0, r = [], i = [], o = [], a = t && oe.isArray(t.q) ? t.q : [], u = 0, c = a.length; u < c; u++) "config" === (e = a[u][0]) ? i.push(a[u]) : n || "use" !== e ? o.push(a[u]) : (r.push(a[u]), n = !0);
            return a = i.concat(r.concat(o))
        }();

        function l(t) {
            f || (t && oe.each(t, function (t) {
                var n, e = (n = Ou(t)) ? n[0] : "";
                oe.isArray(e) ? ue(n, function (t) {
                    Mu.apply(Bn, t)
                }) : e ? Mu.apply(Bn, n) : t && t && t[0]
            }), Mu(function () {
                Cu()
            }), f = !0)
        }

        if (0 === d.length) du(function (t) {
            Du = t, Cu()
        }); else try {
            d = ce(d, function (t) {
                var n;
                if ("config" === ((n = Ou(t)) ? n[0] : "")) {
                    var e = n[1], r = n[2];
                    "autoStart" === e && !1 === r && (s = !1)
                }
                return n
            }), s && l(d)
        } catch (t) {
        }
    }())
}();
