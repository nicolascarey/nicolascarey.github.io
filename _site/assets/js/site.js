/*!
 * Modernizr v2.6.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(e, t, n) {
        function r(e) {
            b.cssText = e
        }

        function o(e, t) {
            return r(k.join(e + ";") + (t || ""))
        }

        function i(e, t) {
            return typeof e === t
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function c(e, t) {
            for (var r in e) {
                var o = e[r];
                if (!a(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
            }
            return !1
        }

        function l(e, t, r) {
            for (var o in e) {
                var a = t[e[o]];
                if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(r || t) : a
            }
            return !1
        }

        function s(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + C.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), l(o, t, n))
        }

        function u() {
            p.input = function(n) {
                for (var r = 0, o = n.length; o > r; r++) P[n[r]] = !!(n[r] in w);
                return P.list && (P.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), P
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function(e) {
                for (var r, o, i, a = 0, c = e.length; c > a; a++) w.setAttribute("type", o = e[a]), r = "text" !== w.type, r && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (v.appendChild(w), i = t.defaultView, r = i.getComputedStyle && "textfield" !== i.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, v.removeChild(w)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != x)), j[e[a]] = !!r;
                return j
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var f, d, h = "2.6.3",
            p = {},
            m = !0,
            v = t.documentElement,
            g = "modernizr",
            y = t.createElement(g),
            b = y.style,
            w = t.createElement("input"),
            x = ":)",
            S = {}.toString,
            k = " -webkit- -moz- -o- -ms- ".split(" "),
            E = "Webkit Moz O ms",
            C = E.split(" "),
            T = E.toLowerCase().split(" "),
            $ = {
                svg: "http://www.w3.org/2000/svg"
            },
            z = {},
            j = {},
            P = {},
            _ = [],
            M = _.slice,
            N = function(e, n, r, o) {
                var i, a, c, l, s = t.createElement("div"),
                    u = t.body,
                    f = u || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : g + (r + 1), s.appendChild(c);
                return i = ["&#173;", '<style id="s', g, '">', e, "</style>"].join(""), s.id = g, (u ? s : f).innerHTML += i, f.appendChild(s), u || (f.style.background = "", f.style.overflow = "hidden", l = v.style.overflow, v.style.overflow = "hidden", v.appendChild(f)), a = n(s, e), u ? s.parentNode.removeChild(s) : (f.parentNode.removeChild(f), v.style.overflow = l), !!a
            },
            W = function(t) {
                var n = e.matchMedia || e.msMatchMedia;
                if (n) return n(t).matches;
                var r;
                return N("@media " + t + " { #" + g + " { position: absolute; } }", function(t) {
                    r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), r
            },
            D = function() {
                function e(e, o) {
                    o = o || t.createElement(r[e] || "div"), e = "on" + e;
                    var a = e in o;
                    return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = i(o[e], "function"), i(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a
                }
                var r = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            F = {}.hasOwnProperty;
        d = i(F, "undefined") || i(F.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return F.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = M.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var o = function() {};
                        o.prototype = t.prototype;
                        var i = new o,
                            a = t.apply(i, n.concat(M.call(arguments)));
                        return Object(a) === a ? a : i
                    }
                    return t.apply(e, n.concat(M.call(arguments)))
                };
            return r
        }), z.flexbox = function() {
            return s("flexWrap")
        }, z.flexboxlegacy = function() {
            return s("boxDirection")
        }, z.canvas = function() {
            var e = t.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }, z.canvastext = function() {
            return !(!p.canvas || !i(t.createElement("canvas").getContext("2d").fillText, "function"))
        }, z.webgl = function() {
            return !!e.WebGLRenderingContext
        }, z.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : N(["@media (", k.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, z.geolocation = function() {
            return "geolocation" in navigator
        }, z.postmessage = function() {
            return !!e.postMessage
        }, z.websqldatabase = function() {
            return !!e.openDatabase
        }, z.indexedDB = function() {
            return !!s("indexedDB", e)
        }, z.hashchange = function() {
            return D("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
        }, z.history = function() {
            return !(!e.history || !history.pushState)
        }, z.draganddrop = function() {
            var e = t.createElement("div");
            return "draggable" in e || "ondragstart" in e && "ondrop" in e
        }, z.websockets = function() {
            return "WebSocket" in e || "MozWebSocket" in e
        }, z.rgba = function() {
            return r("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
        }, z.hsla = function() {
            return r("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
        }, z.multiplebgs = function() {
            return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, z.backgroundsize = function() {
            return s("backgroundSize")
        }, z.borderimage = function() {
            return s("borderImage")
        }, z.borderradius = function() {
            return s("borderRadius")
        }, z.boxshadow = function() {
            return s("boxShadow")
        }, z.textshadow = function() {
            return "" === t.createElement("div").style.textShadow
        }, z.opacity = function() {
            return o("opacity:.55"), /^0.55$/.test(b.opacity)
        }, z.cssanimations = function() {
            return s("animationName")
        }, z.csscolumns = function() {
            return s("columnCount")
        }, z.cssgradients = function() {
            var e = "background-image:",
                t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return r((e + "-webkit- ".split(" ").join(t + e) + k.join(n + e)).slice(0, -e.length)), a(b.backgroundImage, "gradient")
        }, z.cssreflections = function() {
            return s("boxReflect")
        }, z.csstransforms = function() {
            return !!s("transform")
        }, z.csstransforms3d = function() {
            var e = !!s("perspective");
            return e && "webkitPerspective" in v.style && N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, z.csstransitions = function() {
            return s("transition")
        }, z.fontface = function() {
            var e;
            return N('@font-face {font-family:"font";src:url("https://")}', function(n, r) {
                var o = t.getElementById("smodernizr"),
                    i = o.sheet || o.styleSheet,
                    a = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
                e = /src/i.test(a) && 0 === a.indexOf(r.split(" ")[0])
            }), e
        }, z.generatedcontent = function() {
            var e;
            return N(["#", g, "{font:0/0 a}#", g, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                e = t.offsetHeight >= 3
            }), e
        }, z.video = function() {
            var e = t.createElement("video"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, z.audio = function() {
            var e = t.createElement("audio"),
                n = !1;
            try {
                (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (r) {}
            return n
        }, z.localstorage = function() {
            try {
                return localStorage.setItem(g, g), localStorage.removeItem(g), !0
            } catch (e) {
                return !1
            }
        }, z.sessionstorage = function() {
            try {
                return sessionStorage.setItem(g, g), sessionStorage.removeItem(g), !0
            } catch (e) {
                return !1
            }
        }, z.webworkers = function() {
            return !!e.Worker
        }, z.applicationcache = function() {
            return !!e.applicationCache
        }, z.svg = function() {
            return !!t.createElementNS && !!t.createElementNS($.svg, "svg").createSVGRect
        }, z.inlinesvg = function() {
            var e = t.createElement("div");
            return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == $.svg
        }, z.smil = function() {
            return !!t.createElementNS && /SVGAnimate/.test(S.call(t.createElementNS($.svg, "animate")))
        }, z.svgclippaths = function() {
            return !!t.createElementNS && /SVGClipPath/.test(S.call(t.createElementNS($.svg, "clipPath")))
        };
        for (var O in z) d(z, O) && (f = O.toLowerCase(), p[f] = z[O](), _.push((p[f] ? "" : "no-") + f));
        return p.input || u(), p.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) d(e, r) && p.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), p[e] !== n) return p;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof m && m && (v.className += " " + (t ? "" : "no-") + e), p[e] = t
                }
                return p
            }, r(""), y = w = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = g.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function o(e) {
                    var t = v[e[p]];
                    return t || (t = {}, m++, e[p] = m, v[m] = t), t
                }

                function i(e, n, r) {
                    if (n || (n = t), u) return n.createElement(e);
                    r || (r = o(n));
                    var i;
                    return i = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), i.canHaveChildren && !d.test(e) ? r.frag.appendChild(i) : i
                }

                function a(e, n) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    n = n || o(e);
                    for (var i = n.frag.cloneNode(), a = 0, c = r(), l = c.length; l > a; a++) i.createElement(c[a]);
                    return i
                }

                function c(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return g.shivMethods ? i(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(g, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var r = o(e);
                    return !g.shivCSS || s || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || c(e, r), e
                }
                var s, u, f = e.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    m = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", s = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        s = !0, u = !0
                    }
                }();
                var g = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: i,
                    createDocumentFragment: a
                };
                e.html5 = g, l(t)
            }(this, t), p._version = h, p._prefixes = k, p._domPrefixes = T, p._cssomPrefixes = C, p.mq = W, p.hasEvent = D, p.testProp = function(e) {
                return c([e])
            }, p.testAllProps = s, p.testStyles = N, p.prefixed = function(e, t, n) {
                return t ? s(e, t, n) : s(e, "pfx")
            }, v.className = v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + _.join(" ") : ""), p
    }(this, this.document),
    /*
    jQuery Waypoints - v2.0.3
    Copyright (c) 2011-2013 Caleb Troughton
    Dual licensed under the MIT license and GPL license.
    https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
    */
    function() {
        var e = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            },
            t = [].slice;
        ! function(e, t) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(n) {
                return t(n, e)
            }) : t(e.jQuery, e)
        }(this, function(n, r) {
            var o, i, a, c, l, s, u, f, d, h, p, m, v, g, y, b;
            return o = n(r), f = e.call(r, "ontouchstart") >= 0, c = {
                horizontal: {},
                vertical: {}
            }, l = 1, u = {}, s = "waypoints-context-id", p = "resize.waypoints", m = "scroll.waypoints", v = 1, g = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", i = function() {
                function e(e) {
                    var t = this;
                    this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: e.scrollLeft(),
                        y: e.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, e.data(s, this.id), u[this.id] = this, e.bind(m, function() {
                        var e;
                        return t.didScroll || f ? void 0 : (t.didScroll = !0, e = function() {
                            return t.doScroll(), t.didScroll = !1
                        }, r.setTimeout(e, n[b].settings.scrollThrottle))
                    }), e.bind(p, function() {
                        var e;
                        return t.didResize ? void 0 : (t.didResize = !0, e = function() {
                            return n[b]("refresh"), t.didResize = !1
                        }, r.setTimeout(e, n[b].settings.resizeThrottle))
                    })
                }
                return e.prototype.doScroll = function() {
                    var e, t = this;
                    return e = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !f || e.vertical.oldScroll && e.vertical.newScroll || n[b]("refresh"), n.each(e, function(e, r) {
                        var o, i, a;
                        return a = [], i = r.newScroll > r.oldScroll, o = i ? r.forward : r.backward, n.each(t.waypoints[e], function(e, t) {
                            var n, o;
                            return r.oldScroll < (n = t.offset) && n <= r.newScroll ? a.push(t) : r.newScroll < (o = t.offset) && o <= r.oldScroll ? a.push(t) : void 0
                        }), a.sort(function(e, t) {
                            return e.offset - t.offset
                        }), i || a.reverse(), n.each(a, function(e, t) {
                            return t.options.continuous || e === a.length - 1 ? t.trigger([o]) : void 0
                        })
                    }), this.oldScroll = {
                        x: e.horizontal.newScroll,
                        y: e.vertical.newScroll
                    }
                }, e.prototype.refresh = function() {
                    var e, t, r, o = this;
                    return r = n.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                        horizontal: {
                            contextOffset: r ? 0 : t.left,
                            contextScroll: r ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: r ? 0 : t.top,
                            contextScroll: r ? 0 : this.oldScroll.y,
                            contextDimension: r ? n[b]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, n.each(e, function(e, t) {
                        return n.each(o.waypoints[e], function(e, r) {
                            var o, i, a, c, l;
                            return o = r.options.offset, a = r.offset, i = n.isWindow(r.element) ? 0 : r.$element.offset()[t.offsetProp], n.isFunction(o) ? o = o.apply(r.element) : "string" == typeof o && (o = parseFloat(o), r.options.offset.indexOf("%") > -1 && (o = Math.ceil(t.contextDimension * o / 100))), r.offset = i - t.contextOffset + t.contextScroll - o, r.options.onlyOnScroll && null != a || !r.enabled ? void 0 : null !== a && a < (c = t.oldScroll) && c <= r.offset ? r.trigger([t.backward]) : null !== a && a > (l = t.oldScroll) && l >= r.offset ? r.trigger([t.forward]) : null === a && t.oldScroll >= r.offset ? r.trigger([t.forward]) : void 0
                        })
                    })
                }, e.prototype.checkEmpty = function() {
                    return n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([p, m].join(" ")), delete u[this.id]) : void 0
                }, e
            }(), a = function() {
                function e(e, t, r) {
                    var o, i;
                    r = n.extend({}, n.fn[y].defaults, r), "bottom-in-view" === r.offset && (r.offset = function() {
                        var e;
                        return e = n[b]("viewportHeight"), n.isWindow(t.element) || (e = t.$element.height()), e - n(this).outerHeight()
                    }), this.$element = e, this.element = e[0], this.axis = r.horizontal ? "horizontal" : "vertical", this.callback = r.handler, this.context = t, this.enabled = r.enabled, this.id = "waypoints" + v++, this.offset = null, this.options = r, t.waypoints[this.axis][this.id] = this, c[this.axis][this.id] = this, o = null != (i = e.data(g)) ? i : [], o.push(this.id), e.data(g, o)
                }
                return e.prototype.trigger = function(e) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, e.prototype.disable = function() {
                    return this.enabled = !1
                }, e.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, e.prototype.destroy = function() {
                    return delete c[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, e.getWaypointsByElement = function(e) {
                    var t, r;
                    return (r = n(e).data(g)) ? (t = n.extend({}, c.horizontal, c.vertical), n.map(r, function(e) {
                        return t[e]
                    })) : []
                }, e
            }(), h = {
                init: function(e, t) {
                    var r;
                    return null == t && (t = {}), null == (r = t.handler) && (t.handler = e), this.each(function() {
                        var e, r, o, c;
                        return e = n(this), o = null != (c = t.context) ? c : n.fn[y].defaults.context, n.isWindow(o) || (o = e.closest(o)), o = n(o), r = u[o.data(s)], r || (r = new i(o)), new a(e, r, t)
                    }), n[b]("refresh"), this
                },
                disable: function() {
                    return h._invoke(this, "disable")
                },
                enable: function() {
                    return h._invoke(this, "enable")
                },
                destroy: function() {
                    return h._invoke(this, "destroy")
                },
                prev: function(e, t) {
                    return h._traverse.call(this, e, t, function(e, t, n) {
                        return t > 0 ? e.push(n[t - 1]) : void 0
                    })
                },
                next: function(e, t) {
                    return h._traverse.call(this, e, t, function(e, t, n) {
                        return t < n.length - 1 ? e.push(n[t + 1]) : void 0
                    })
                },
                _traverse: function(e, t, o) {
                    var i, a;
                    return null == e && (e = "vertical"), null == t && (t = r), a = d.aggregate(t), i = [], this.each(function() {
                        var t;
                        return t = n.inArray(this, a[e]), o(i, t, a[e])
                    }), this.pushStack(i)
                },
                _invoke: function(e, t) {
                    return e.each(function() {
                        var e;
                        return e = a.getWaypointsByElement(this), n.each(e, function(e, n) {
                            return n[t](), !0
                        })
                    }), this
                }
            }, n.fn[y] = function() {
                var e, r;
                return r = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], h[r] ? h[r].apply(this, e) : n.isFunction(r) ? h.init.apply(this, arguments) : n.isPlainObject(r) ? h.init.apply(this, [null, r]) : n.error(r ? "The " + r + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
            }, n.fn[y].defaults = {
                context: r,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, d = {
                refresh: function() {
                    return n.each(u, function(e, t) {
                        return t.refresh()
                    })
                },
                viewportHeight: function() {
                    var e;
                    return null != (e = r.innerHeight) ? e : o.height()
                },
                aggregate: function(e) {
                    var t, r, o;
                    return t = c, e && (t = null != (o = u[n(e).data(s)]) ? o.waypoints : void 0), t ? (r = {
                        horizontal: [],
                        vertical: []
                    }, n.each(r, function(e, o) {
                        return n.each(t[e], function(e, t) {
                            return o.push(t)
                        }), o.sort(function(e, t) {
                            return e.offset - t.offset
                        }), r[e] = n.map(o, function(e) {
                            return e.element
                        }), r[e] = n.unique(r[e])
                    }), r) : []
                },
                above: function(e) {
                    return null == e && (e = r), d._filter(e, "vertical", function(e, t) {
                        return t.offset <= e.oldScroll.y
                    })
                },
                below: function(e) {
                    return null == e && (e = r), d._filter(e, "vertical", function(e, t) {
                        return t.offset > e.oldScroll.y
                    })
                },
                left: function(e) {
                    return null == e && (e = r), d._filter(e, "horizontal", function(e, t) {
                        return t.offset <= e.oldScroll.x
                    })
                },
                right: function(e) {
                    return null == e && (e = r), d._filter(e, "horizontal", function(e, t) {
                        return t.offset > e.oldScroll.x
                    })
                },
                enable: function() {
                    return d._invoke("enable")
                },
                disable: function() {
                    return d._invoke("disable")
                },
                destroy: function() {
                    return d._invoke("destroy")
                },
                extendFn: function(e, t) {
                    return h[e] = t
                },
                _invoke: function(e) {
                    var t;
                    return t = n.extend({}, c.vertical, c.horizontal), n.each(t, function(t, n) {
                        return n[e](), !0
                    })
                },
                _filter: function(e, t, r) {
                    var o, i;
                    return (o = u[n(e).data(s)]) ? (i = [], n.each(o.waypoints[t], function(e, t) {
                        return r(o, t) ? i.push(t) : void 0
                    }), i.sort(function(e, t) {
                        return e.offset - t.offset
                    }), n.map(i, function(e) {
                        return e.element
                    })) : []
                }
            }, n[b] = function() {
                var e, n;
                return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], d[n] ? d[n].apply(null, e) : d.aggregate.call(null, n)
            }, n[b].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, o.load(function() {
                return n[b]("refresh")
            })
        })
    }.call(this), $(document).ready(function() {
        screenWidth = $(window).width(), $(".intro, .chapters").css({
            height: $(window).height()
        }), $(".chapter").waypoint(function(e) {
            screenWidth > 768 && ("down" == e && $(this).find(".side-right").addClass("current"), "up" == e && $(this).find(".side-right").removeClass("current"))
        }, {
            offset: "20%"
        })
    }), $(window).resize(function() {
        screenWidth = $(window).width()
    });
    $(document).ready(function() { 
      var myVideo=document.getElementById("video1");

      $('.video-test').waypoint(function() {                
        myVideo.play(); 
        }, {
              offset: '50%',  // middle of the page
              triggerOnce: true // just my preference...
      });
});