/*!
 * a-color-picker (https://github.com/narsenico/a-color-picker)
 * 
 * Copyright (c) 2017-2018, Gianfranco Caldi.
 * Released under the MIT License.
 */
! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("AColorPicker", [], t) : "object" == typeof exports ? exports.AColorPicker = t() : e.AColorPicker = t()
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var i = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }
        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var i in e) r.d(n, i, function (t) {
                    return e[t]
                }.bind(null, i));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 6)
    }([function (e, t, r) {
        "use strict";
        /*!
         * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        var n = r(4);

        function i(e) {
            return !0 === n(e) && "[object Object]" === Object.prototype.toString.call(e)
        }
        e.exports = function (e) {
            var t, r;
            return !1 !== i(e) && "function" == typeof (t = e.constructor) && !1 !== i(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf")
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var r = function (e, t) {
                        var r, n = e[1] || "",
                            i = e[3];
                        if (!i) return n;
                        if (t && "function" == typeof btoa) {
                            var o = (r = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                                s = i.sources.map(function (e) {
                                    return "/*# sourceURL=" + i.sourceRoot + e + " */"
                                });
                            return [n].concat(s).concat([o]).join("\n")
                        }
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + r + "}" : r
                }).join("")
            }, t.i = function (e, r) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var n = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    "number" == typeof o && (n[o] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var s = e[i];
                    "number" == typeof s[0] && n[s[0]] || (r && !s[2] ? s[2] = r : r && (s[2] = "(" + s[2] + ") and (" + r + ")"), t.push(s))
                }
            }, t
        }
    }, function (e, t, r) {
        (e.exports = r(1)(void 0)).push([e.i, "/*!\n * a-color-picker\n * https://github.com/narsenico/a-color-picker\n * \n * Copyright (c) 2017-2018, Gianfranco Caldi.\n * Released under the MIT License.\n */\n\n.a-color-picker {\n    background-color: #FFFFFF;\n    padding: 0px;\n    box-sizing: border-box;\n    display: inline-flex;\n    flex-direction: column;\n    user-select: none;\n    width: 232px;\n    font: 400 10px Helvetica,Arial,sans-serif;\n    border-radius: 3px;\n    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.05), 0px 2px 4px rgba(0,0,0,0.25);\n}\n\n.a-color-picker input {\n    box-sizing: border-box;\n}\n\n.a-color-picker-row {\n    padding: 15px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    user-select: none;\n}\n\n.a-color-picker-row-top {\n    padding: 0;\n}\n\n.a-color-picker-row:not(:first-child) {\n    border-top: solid 1px #F5F5F5;\n}\n\n.a-color-picker-column {\n    display: flex;\n    flex-direction: column;\n}\n\n.a-color-picker-cell {\n    flex: 1 1 auto;\n    margin-bottom: 4px;\n}\n\n.a-color-picker-cell:last-child {\n    margin-bottom: 0;\n}\n\n.a-color-picker-stack {\n    position: relative;\n}\n\n.a-color-picker-dot {\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    top: 0px;\n    left: 0px;\n    background: #ffffff;\n    pointer-events: none;\n    border-radius: 50px;\n    z-index: 1000;\n    box-shadow: 0px 1px 2px rgba(0,0,0,0.75);\n}\n\n.a-color-picker-a, .a-color-picker-h, .a-color-picker-sl {\n    cursor: cell;\n}\n\n.a-color-picker-h+.a-color-picker-dot,\n.a-color-picker-a+.a-color-picker-dot {\n    top: -2px;\n}\n\n.a-color-picker-h,\n.a-color-picker-a {\n    border-radius: 2px;\n}\n\n.a-color-picker-preview {\n    box-sizing: border-box;\n    width: 30px;\n    height: 30px;\n    user-select: none;\n    border-radius: 15px;\n}\n\n.a-color-picker-circle {\n    border-radius: 50px;\n    border: solid 1px #eee;    \n}\n\n.a-color-picker-hsl,\n.a-color-picker-rgb,\n.a-color-picker-single-input {\n    justify-content: space-evenly;\n}\n\n.a-color-picker-hsl>label,\n.a-color-picker-rgb>label,\n.a-color-picker-single-input>label {\n    padding: 0 8px;\n    flex: 0 0 auto;\n    color: #969696;\n}\n\n.a-color-picker-hsl>input,\n.a-color-picker-rgb>input,\n.a-color-picker-single-input>input {\n    text-align: center;\n    padding: 2px 0px;\n    width: 0;\n    flex: 1 1 auto;\n    border: 1px solid #e0e0e0;\n    line-height: 20px;\n}\n\n.a-color-picker-hsl>input::-webkit-inner-spin-button,\n.a-color-picker-rgb>input::-webkit-inner-spin-button,\n.a-color-picker-single-input>input::-webkit-inner-spin-button,\n.a-color-picker-hsl>input::-webkit-inner-spin-button,\n.a-color-picker-rgb>input::-webkit-inner-spin-button,\n.a-color-picker-single-input>input::-webkit-inner-spin-button {\n    -webkit-appearance: none; \n    margin: 0; \n}\n\n.a-color-picker-hsl>input:focus,\n.a-color-picker-rgb>input:focus,\n.a-color-picker-single-input>input:focus {\n    border-color: #04a9f4;\n    outline: none;\n}\n\n.a-color-picker-transparent {\n    background-image: linear-gradient(-45deg, #cdcdcd 25%, transparent 25%), linear-gradient(45deg, #cdcdcd 25%, transparent 25%), linear-gradient(-45deg, transparent 75%, #cdcdcd 75%), linear-gradient(45deg, transparent 75%, #cdcdcd 75%);\n    background-size: 11px 11px;\n    background-position: 0 0, 0 -5.5px, -5.5px 5.5px, 5.5px 0px;\n\n}\n\n.a-color-picker-sl {\n    border-radius: 3px 3px 0px 0px;\n}\n\n.a-color-picker.hide-hsl [show-on-hsl],\n.a-color-picker.hide-rgb [show-on-rgb],\n.a-color-picker.hide-single-input [show-on-single-input],\n.a-color-picker.hide-alpha [show-on-alpha] {\n    display: none;\n}\n\n.a-color-picker-clipbaord {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.a-color-picker-palette {\n    flex-flow: wrap;\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 10px;\n}\n\n.a-color-picker-palette-color {\n    width: 15px;\n    height: 15px;\n    flex: 0 1 15px;\n    margin: 3px;\n    box-sizing: border-box;\n    cursor: pointer;\n    border-radius: 3px;\n    box-shadow: 0px 0px 0px 1px inset rgba(0,0,0,0.10);\n}\n\n.a-color-picker-palette-add {\n    text-align: center;\n    line-height: 13px;\n    color: #607D8B;\n}", ""])
    }, function (e, t, r) {
        var n = r(2);
        e.exports = "string" == typeof n ? n : n.toString()
    }, function (e, t, r) {
        "use strict";
        /*!
         * isobject <https://github.com/jonschlinkert/isobject>
         *
         * Copyright (c) 2014-2017, Jon Schlinkert.
         * Released under the MIT License.
         */
        e.exports = function (e) {
            return null != e && "object" == typeof e && !1 === Array.isArray(e)
        }
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.nvl = t.ensureArray = t.limit = t.getLuminance = t.parseColor = t.parseColorToHsla = t.parseColorToHsl = t.cssHslaToHsla = t.cssHslToHsl = t.parseColorToRgba = t.parseColorToRgb = t.cssRgbaToRgba = t.cssRgbToRgb = t.cssColorToRgba = t.cssColorToRgb = t.intToRgb = t.rgbToInt = t.rgbToHsv = t.rgbToHsl = t.hslToRgb = t.rgbToHex = t.PALETTE_MATERIAL_CHROME = t.PALETTE_MATERIAL_500 = t.COLOR_NAMES = void 0;
        var n, i = function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var r = [],
                    n = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return r
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
            o = (n = r(0)) && n.__esModule ? n : {
                default: n
            };

        function s(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        var a = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgrey: "#A9A9A9",
            darkgreen: "#006400",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            grey: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            "indianred ": "#CD5C5C",
            "indigo ": "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgrey: "#D3D3D3",
            lightgreen: "#90EE90",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function l(e, t, r) {
            return e = +e, isNaN(e) ? t : e < t ? t : e > r ? r : e
        }

        function c(e, t) {
            return null === e || void 0 === e ? t : e
        }

        function u(e, t, r) {
            var n = [l(e, 0, 255), l(t, 0, 255), l(r, 0, 255)];
            return "#" + ("000000" + ((e = n[0]) << 16 | (t = n[1]) << 8 | (r = n[2])).toString(16)).slice(-6)
        }

        function h(e, t, r) {
            var n = void 0,
                i = void 0,
                o = void 0,
                s = [l(e, 0, 360) / 360, l(t, 0, 100) / 100, l(r, 0, 100) / 100];
            if (e = s[0], r = s[2], 0 == (t = s[1])) n = i = o = r;
            else {
                var a = function (e, t, r) {
                    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
                },
                    c = r < .5 ? r * (1 + t) : r + t - r * t,
                    u = 2 * r - c;
                n = a(u, c, e + 1 / 3), i = a(u, c, e), o = a(u, c, e - 1 / 3)
            }
            return [255 * n, 255 * i, 255 * o].map(Math.round)
        }

        function p(e, t, r) {
            var n = [l(e, 0, 255) / 255, l(t, 0, 255) / 255, l(r, 0, 255) / 255];
            e = n[0], t = n[1], r = n[2];
            var i = Math.max(e, t, r),
                o = Math.min(e, t, r),
                s = void 0,
                a = void 0,
                c = (i + o) / 2;
            if (i == o) s = a = 0;
            else {
                var u = i - o;
                switch (a = c > .5 ? u / (2 - i - o) : u / (i + o), i) {
                    case e:
                        s = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        s = (r - e) / u + 2;
                        break;
                    case r:
                        s = (e - t) / u + 4
                }
                s /= 6
            }
            return [360 * s, 100 * a, 100 * c].map(Math.round)
        }

        function d(e, t, r) {
            return e << 16 | t << 8 | r
        }

        function g(e) {
            if (e) {
                var t = a[e.toString().toLowerCase()],
                    r = /^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F]))|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})))\s*$/i.exec(t || e) || [],
                    n = i(r, 10),
                    o = n[3],
                    s = n[4],
                    l = n[5],
                    c = n[7],
                    u = n[8],
                    h = n[9];
                if (void 0 !== o) return [parseInt(o + o, 16), parseInt(s + s, 16), parseInt(l + l, 16)];
                if (void 0 !== c) return [parseInt(c, 16), parseInt(u, 16), parseInt(h, 16)]
            }
        }

        function f(e) {
            if (e) {
                var t = a[e.toString().toLowerCase()],
                    r = /^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])?)|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?))\s*$/i.exec(t || e) || [],
                    n = i(r, 12),
                    o = n[3],
                    s = n[4],
                    l = n[5],
                    c = n[6],
                    u = n[8],
                    h = n[9],
                    p = n[10],
                    d = n[11];
                if (void 0 !== o) return [parseInt(o + o, 16), parseInt(s + s, 16), parseInt(l + l, 16), c ? +(parseInt(c + c, 16) / 255).toFixed(2) : 1];
                if (void 0 !== u) return [parseInt(u, 16), parseInt(h, 16), parseInt(p, 16), d ? +(parseInt(d, 16) / 255).toFixed(2) : 1]
            }
        }

        function b(e) {
            if (e) {
                var t = /^rgb\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e) || [],
                    r = i(t, 4),
                    n = r[0],
                    o = r[1],
                    s = r[2],
                    a = r[3];
                return n ? [l(o, 0, 255), l(s, 0, 255), l(a, 0, 255)] : void 0
            }
        }

        function v(e) {
            if (e) {
                var t = /^rgba?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e) || [],
                    r = i(t, 6),
                    n = r[0],
                    o = r[1],
                    s = r[2],
                    a = r[3],
                    u = r[5];
                return n ? [l(o, 0, 255), l(s, 0, 255), l(a, 0, 255), l(c(u, 1), 0, 1)] : void 0
            }
        }

        function m(e) {
            if (Array.isArray(e)) return [l(e[0], 0, 255), l(e[1], 0, 255), l(e[2], 0, 255), l(c(e[3], 1), 0, 1)];
            var t = f(e) || v(e);
            return t && 3 === t.length && t.push(1), t
        }

        function A(e) {
            if (e) {
                var t = /^hsl\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e) || [],
                    r = i(t, 4),
                    n = r[0],
                    o = r[1],
                    s = r[2],
                    a = r[3];
                return n ? [l(o, 0, 360), l(s, 0, 100), l(a, 0, 100)] : void 0
            }
        }

        function y(e) {
            if (e) {
                var t = /^hsla?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e) || [],
                    r = i(t, 6),
                    n = r[0],
                    o = r[1],
                    s = r[2],
                    a = r[3],
                    u = r[5];
                return n ? [l(o, 0, 255), l(s, 0, 255), l(a, 0, 255), l(c(u, 1), 0, 1)] : void 0
            }
        }

        function F(e) {
            if (Array.isArray(e)) return [l(e[0], 0, 360), l(e[1], 0, 100), l(e[2], 0, 100), l(c(e[3], 1), 0, 1)];
            var t = y(e);
            return t && 3 === t.length && t.push(1), t
        }

        function k(e, t) {
            switch (t) {
                case "rgb":
                default:
                    return e.slice(0, 3);
                case "rgbcss":
                    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
                case "rgbcss4":
                    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
                case "rgba":
                    return e;
                case "rgbacss":
                    return "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
                case "hsl":
                    return p.apply(void 0, s(e));
                case "hslcss":
                    return "hsl(" + (e = p.apply(void 0, s(e)))[0] + ", " + e[1] + ", " + e[2] + ")";
                case "hslcss4":
                    var r = p.apply(void 0, s(e));
                    return "hsl(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + e[3] + ")";
                case "hsla":
                    return [].concat(s(p.apply(void 0, s(e))), [e[3]]);
                case "hslacss":
                    var n = p.apply(void 0, s(e));
                    return "hsla(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + e[3] + ")";
                case "hex":
                    return u.apply(void 0, s(e));
                case "hexcss4":
                    return u.apply(void 0, s(e)) + ("00" + parseInt(255 * e[3]).toString(16)).slice(-2);
                case "int":
                    return d.apply(void 0, s(e))
            }
        }
        t.COLOR_NAMES = a, t.PALETTE_MATERIAL_500 = ["#F44336", "#E91E63", "#E91E63", "#9C27B0", "#9C27B0", "#673AB7", "#673AB7", "#3F51B5", "#3F51B5", "#2196F3", "#2196F3", "#03A9F4", "#03A9F4", "#00BCD4", "#00BCD4", "#009688", "#009688", "#4CAF50", "#4CAF50", "#8BC34A", "#8BC34A", "#CDDC39", "#CDDC39", "#FFEB3B", "#FFEB3B", "#FFC107", "#FFC107", "#FF9800", "#FF9800", "#FF5722", "#FF5722", "#795548", "#795548", "#9E9E9E", "#9E9E9E", "#607D8B", "#607D8B"], t.PALETTE_MATERIAL_CHROME = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"], t.rgbToHex = u, t.hslToRgb = h, t.rgbToHsl = p, t.rgbToHsv = function (e, t, r) {
            var n = [l(e, 0, 255) / 255, l(t, 0, 255) / 255, l(r, 0, 255) / 255];
            e = n[0], t = n[1], r = n[2];
            var i, o = Math.max(e, t, r),
                s = Math.min(e, t, r),
                a = void 0,
                c = o,
                u = o - s;
            if (i = 0 === o ? 0 : u / o, o == s) a = 0;
            else {
                switch (o) {
                    case e:
                        a = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        a = (r - e) / u + 2;
                        break;
                    case r:
                        a = (e - t) / u + 4
                }
                a /= 6
            }
            return [a, i, c]
        }, t.rgbToInt = d, t.intToRgb = function (e) {
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }, t.cssColorToRgb = g, t.cssColorToRgba = f, t.cssRgbToRgb = b, t.cssRgbaToRgba = v, t.parseColorToRgb = function (e) {
            return Array.isArray(e) ? e = [l(e[0], 0, 255), l(e[1], 0, 255), l(e[2], 0, 255)] : g(e) || b(e)
        }, t.parseColorToRgba = m, t.cssHslToHsl = A, t.cssHslaToHsla = y, t.parseColorToHsl = function (e) {
            return Array.isArray(e) ? e = [l(e[0], 0, 360), l(e[1], 0, 100), l(e[2], 0, 100)] : A(e)
        }, t.parseColorToHsla = F, t.parseColor = function (e, t) {
            if (t = t || "rgb", null !== e && void 0 !== e) {
                var r = void 0;
                if ((r = m(e)) || (r = F(e)) && (r = [].concat(s(h.apply(void 0, s(r))), [r[3]]))) return (0, o.default)(t) ? ["rgb", "rgbcss", "rgbcss4", "rgba", "rgbacss", "hsl", "hslcss", "hslcss4", "hsla", "hslacss", "hex", "hexcss4", "int"].reduce(function (e, t) {
                    return e[t] = k(r, t), e
                }, t || {}) : k(r, t.toString().toLowerCase())
            }
        }, t.getLuminance = function (e, t, r) {
            return .2126 * (e = (e /= 255) < .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t = (t /= 255) < .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * ((r /= 255) < .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4))
        }, t.limit = l, t.ensureArray = function (e) {
            return e ? Array.from(e) : []
        }, t.nvl = c
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.VERSION = t.PALETTE_MATERIAL_CHROME = t.PALETTE_MATERIAL_500 = t.COLOR_NAMES = t.getLuminance = t.intToRgb = t.rgbToInt = t.rgbToHsv = t.rgbToHsl = t.hslToRgb = t.rgbToHex = t.parseColor = t.parseColorToHsla = t.parseColorToHsl = t.parseColorToRgba = t.parseColorToRgb = t.from = t.createPicker = void 0;
        var n, i = function () {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
            o = function (e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return function (e, t) {
                    var r = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = r(5),
            a = (n = r(0)) && n.__esModule ? n : {
                default: n
            };

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function c(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        /*!
         * a-color-picker
         * https://github.com/narsenico/a-color-picker
         * 
         * Copyright (c) 2017-2018, Gianfranco Caldi.
         * Released under the MIT License.
         */
        var u = "undefined" != typeof window && window.navigator.userAgent.indexOf("Edge") > -1,
            h = "undefined" != typeof window && window.navigator.userAgent.indexOf("rv:") > -1,
            p = {
                id: null,
                attachTo: "body",
                showHSL: !0,
                showRGB: !0,
                showHEX: !0,
                showAlpha: !1,
                color: "#ff0000",
                palette: null,
                paletteEditable: !1,
                useAlphaInPalette: "auto"
            },
            d = [232, 150],
            g = [150, 11],
            f = g,
            b = "COLOR",
            v = "RGBA_USER",
            m = "HSLA_USER",
            A = '<div class="a-color-picker-row a-color-picker-stack a-color-picker-row-top">\n                            <canvas class="a-color-picker-sl a-color-picker-transparent"></canvas>\n                            <div class="a-color-picker-dot"></div>\n                        </div>\n                        <div class="a-color-picker-row">\n                            <div class="a-color-picker-stack a-color-picker-transparent a-color-picker-circle">\n                                <div class="a-color-picker-preview">\n                                    <input class="a-color-picker-clipbaord" type="text">\n                                </div>\n                            </div>\n                            <div class="a-color-picker-column">\n                                <div class="a-color-picker-cell a-color-picker-stack">\n                                    <canvas class="a-color-picker-h"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                                <div class="a-color-picker-cell a-color-picker-alpha a-color-picker-stack" show-on-alpha>\n                                    <canvas class="a-color-picker-a a-color-picker-transparent"></canvas>\n                                    <div class="a-color-picker-dot"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-hsl" show-on-hsl>\n                            <label>H</label>\n                            <input nameref="H" type="number" maxlength="3" min="0" max="360" value="0">\n                            <label>S</label>\n                            <input nameref="S" type="number" maxlength="3" min="0" max="100" value="0">\n                            <label>L</label>\n                            <input nameref="L" type="number" maxlength="3" min="0" max="100" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-rgb" show-on-rgb>\n                            <label>R</label>\n                            <input nameref="R" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>G</label>\n                            <input nameref="G" type="number" maxlength="3" min="0" max="255" value="0">\n                            <label>B</label>\n                            <input nameref="B" type="number" maxlength="3" min="0" max="255" value="0">\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-rgbhex a-color-picker-single-input" show-on-single-input>\n                            <label>HEX</label>\n                            <input nameref="RGBHEX" type="text" select-on-focus>\n                        </div>\n                        <div class="a-color-picker-row a-color-picker-palette"></div>';

        function y(e, t, r) {
            return e ? e instanceof HTMLElement ? e : e instanceof NodeList ? e[0] : "string" == typeof e ? document.querySelector(e) : e.jquery ? e.get(0) : r ? t : null : t
        }

        function F(e) {
            var t = e.getContext("2d"),
                r = +e.width,
                n = +e.height,
                i = t.createLinearGradient(1, 1, 1, n - 1);
            return i.addColorStop(0, "white"), i.addColorStop(1, "black"), {
                setHue: function (e) {
                    var o = t.createLinearGradient(0, 0, r - 1, 0);
                    o.addColorStop(0, "hsla(" + e + ", 100%, 50%, 0)"), o.addColorStop(1, "hsla(" + e + ", 100%, 50%, 1)"), t.fillStyle = i, t.fillRect(0, 0, r, n), t.fillStyle = o, t.globalCompositeOperation = "multiply", t.fillRect(0, 0, r, n), t.globalCompositeOperation = "source-over"
                },
                grabColor: function (e, r) {
                    return t.getImageData(e, r, 1, 1).data
                },
                findColor: function (e, t, i) {
                    var a = (0, s.rgbToHsv)(e, t, i),
                        l = o(a, 3),
                        c = l[1],
                        u = l[2];
                    return [c * r, n - u * n]
                }
            }
        }

        function k(e, t, r) {
            return null === e ? t : /^\s*$/.test(e) ? r : !!/true|yes|1/i.test(e) || !/false|no|0/i.test(e) && t
        }
        var E = function () {
            function e(t, r) {
                if (l(this, e), r ? (t = y(t), this.options = Object.assign({}, p, r)) : t && (0, a.default)(t) ? (this.options = Object.assign({}, p, t), t = y(this.options.attachTo)) : (this.options = Object.assign({}, p), t = y((0, s.nvl)(t, this.options.attachTo))), !t) throw new Error("Container not found: " + this.options.attachTo);
                ! function (e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "acp-";
                    if (t.hasAttribute(r + "show-hsl") && (e.showHSL = k(t.getAttribute(r + "show-hsl"), p.showHSL, !0)), t.hasAttribute(r + "show-rgb") && (e.showRGB = k(t.getAttribute(r + "show-rgb"), p.showRGB, !0)), t.hasAttribute(r + "show-hex") && (e.showHEX = k(t.getAttribute(r + "show-hex"), p.showHEX, !0)), t.hasAttribute(r + "show-alpha") && (e.showAlpha = k(t.getAttribute(r + "show-alpha"), p.showAlpha, !0)), t.hasAttribute(r + "palette-editable") && (e.paletteEditable = k(t.getAttribute(r + "palette-editable"), p.paletteEditable, !0)), t.hasAttribute(r + "palette")) {
                        var n = t.getAttribute(r + "palette");
                        switch (n) {
                            case "PALETTE_MATERIAL_500":
                                e.palette = s.PALETTE_MATERIAL_500;
                                break;
                            case "PALETTE_MATERIAL_CHROME":
                            case "":
                                e.palette = s.PALETTE_MATERIAL_CHROME;
                                break;
                            default:
                                e.palette = n.split(/[;\|]/)
                        }
                    }
                    t.hasAttribute(r + "color") && (e.color = t.getAttribute(r + "color"))
                }(this.options, t), this.H = 0, this.S = 0, this.L = 0, this.R = 0, this.G = 0, this.B = 0, this.A = 1, this.palette = {}, this.element = document.createElement("div"), this.options.id && (this.element.id = this.options.id), this.element.className = "a-color-picker", this.element.innerHTML = A, t.appendChild(this.element);
                var n = this.element.querySelector(".a-color-picker-h");
                this.setupHueCanvas(n), this.hueBarHelper = F(n), this.huePointer = this.element.querySelector(".a-color-picker-h+.a-color-picker-dot");
                var i = this.element.querySelector(".a-color-picker-sl");
                this.setupSlCanvas(i), this.slBarHelper = F(i), this.slPointer = this.element.querySelector(".a-color-picker-sl+.a-color-picker-dot"), this.preview = this.element.querySelector(".a-color-picker-preview"), this.setupClipboard(this.preview.querySelector(".a-color-picker-clipbaord")), this.options.showHSL ? (this.setupInput(this.inputH = this.element.querySelector(".a-color-picker-hsl>input[nameref=H]")), this.setupInput(this.inputS = this.element.querySelector(".a-color-picker-hsl>input[nameref=S]")), this.setupInput(this.inputL = this.element.querySelector(".a-color-picker-hsl>input[nameref=L]"))) : this.element.querySelector(".a-color-picker-hsl").remove(), this.options.showRGB ? (this.setupInput(this.inputR = this.element.querySelector(".a-color-picker-rgb>input[nameref=R]")), this.setupInput(this.inputG = this.element.querySelector(".a-color-picker-rgb>input[nameref=G]")), this.setupInput(this.inputB = this.element.querySelector(".a-color-picker-rgb>input[nameref=B]"))) : this.element.querySelector(".a-color-picker-rgb").remove(), this.options.showHEX ? this.setupInput(this.inputRGBHEX = this.element.querySelector("input[nameref=RGBHEX]")) : this.element.querySelector(".a-color-picker-rgbhex").remove(), this.options.paletteEditable || this.options.palette && this.options.palette.length > 0 ? this.setPalette(this.element.querySelector(".a-color-picker-palette")) : this.element.querySelector(".a-color-picker-palette").remove(), this.options.showAlpha ? (this.setupAlphaCanvas(this.element.querySelector(".a-color-picker-a")), this.alphaPointer = this.element.querySelector(".a-color-picker-a+.a-color-picker-dot")) : this.element.querySelector(".a-color-picker-alpha").remove(), this.onValueChanged(b, this.options.color)
            }
            return i(e, [{
                key: "setupHueCanvas",
                value: function (e) {
                    var t = this;
                    e.width = g[0], e.height = g[1];
                    for (var r = e.getContext("2d"), n = r.createLinearGradient(0, 0, g[0], 0), i = 0; i <= 1; i += 1 / 360) n.addColorStop(i, "hsl(" + 360 * i + ", 100%, 50%)");
                    r.fillStyle = n, r.fillRect(0, 0, g[0], g[1]);
                    var o = function (r) {
                        var n = (0, s.limit)(r.clientX - e.getBoundingClientRect().left, 0, g[0]),
                            i = Math.round(360 * n / g[0]);
                        t.huePointer.style.left = n - 7 + "px", t.onValueChanged("H", i)
                    },
                        a = function e() {
                            document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", e)
                        };
                    e.addEventListener("mousedown", function (e) {
                        o(e), document.addEventListener("mousemove", o), document.addEventListener("mouseup", a)
                    })
                }
            }, {
                key: "setupSlCanvas",
                value: function (e) {
                    var t = this;
                    e.width = d[0], e.height = d[1];
                    var r = function (r) {
                        var n = (0, s.limit)(r.clientX - e.getBoundingClientRect().left, 0, d[0] - 1),
                            i = (0, s.limit)(r.clientY - e.getBoundingClientRect().top, 0, d[1] - 1),
                            o = t.slBarHelper.grabColor(n, i);
                        t.slPointer.style.left = n - 7 + "px", t.slPointer.style.top = i - 7 + "px", t.onValueChanged("RGB", o)
                    },
                        n = function e() {
                            document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", e)
                        };
                    e.addEventListener("mousedown", function (e) {
                        r(e), document.addEventListener("mousemove", r), document.addEventListener("mouseup", n)
                    })
                }
            }, {
                key: "setupAlphaCanvas",
                value: function (e) {
                    var t = this;
                    e.width = f[0], e.height = f[1];
                    var r = e.getContext("2d"),
                        n = r.createLinearGradient(0, 0, e.width - 1, 0);
                    n.addColorStop(0, "hsla(0, 0%, 50%, 0)"), n.addColorStop(1, "hsla(0, 0%, 50%, 1)"), r.fillStyle = n, r.fillRect(0, 0, f[0], f[1]);
                    var i = function (r) {
                        var n = (0, s.limit)(r.clientX - e.getBoundingClientRect().left, 0, f[0]),
                            i = +(n / f[0]).toFixed(2);
                        t.alphaPointer.style.left = n - 7 + "px", t.onValueChanged("ALPHA", i)
                    },
                        o = function e() {
                            document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", e)
                        };
                    e.addEventListener("mousedown", function (e) {
                        i(e), document.addEventListener("mousemove", i), document.addEventListener("mouseup", o)
                    })
                }
            }, {
                key: "setupInput",
                value: function (e) {
                    var t = this,
                        r = +e.min,
                        n = +e.max,
                        i = e.getAttribute("nameref");
                    e.hasAttribute("select-on-focus") && e.addEventListener("focus", function () {
                        e.select()
                    }), "text" === e.type ? e.addEventListener("change", function () {
                        t.onValueChanged(i, e.value)
                    }) : ((u || h) && e.addEventListener("keydown", function (o) {
                        "Up" === o.key ? (e.value = (0, s.limit)(+e.value + 1, r, n), t.onValueChanged(i, e.value), o.returnValue = !1) : "Down" === o.key && (e.value = (0, s.limit)(+e.value - 1, r, n), t.onValueChanged(i, e.value), o.returnValue = !1)
                    }), e.addEventListener("change", function () {
                        var o = +e.value;
                        t.onValueChanged(i, (0, s.limit)(o, r, n))
                    }))
                }
            }, {
                key: "setupClipboard",
                value: function (e) {
                    var t = this;
                    e.title = "click to copy", e.addEventListener("click", function () {
                        e.value = (0, s.parseColor)([t.R, t.G, t.B, t.A], "hexcss4"), e.select(), document.execCommand("copy")
                    })
                }
            }, {
                key: "setPalette",
                value: function (e) {
                    var t = this,
                        r = "auto" === this.options.useAlphaInPalette ? this.options.showAlpha : this.options.useAlphaInPalette,
                        n = void 0;
                    switch (this.options.palette) {
                        case "PALETTE_MATERIAL_500":
                            n = s.PALETTE_MATERIAL_500;
                            break;
                        case "PALETTE_MATERIAL_CHROME":
                            n = s.PALETTE_MATERIAL_CHROME;
                            break;
                        default:
                            n = (0, s.ensureArray)(this.options.palette)
                    }
                    if (this.options.paletteEditable || n.length > 0) {
                        var i = function (r, n, i) {
                            var o = e.querySelector('.a-color-picker-palette-color[data-color="' + r + '"]') || document.createElement("div");
                            o.className = "a-color-picker-palette-color", o.style.backgroundColor = r, o.setAttribute("data-color", r), o.title = r, e.insertBefore(o, n), t.palette[r] = !0, i && t.onPaletteColorAdd(r)
                        },
                            o = function (r, n) {
                                r ? (e.removeChild(r), t.palette[r.getAttribute("data-color")] = !1, n && t.onPaletteColorRemove(r.getAttribute("data-color"))) : (e.querySelectorAll(".a-color-picker-palette-color[data-color]").forEach(function (t) {
                                    e.removeChild(t)
                                }), Object.keys(t.palette).forEach(function (e) {
                                    t.palette[e] = !1
                                }), n && t.onPaletteColorRemove())
                            };
                        if (n.map(function (e) {
                            return (0, s.parseColor)(e, r ? "rgbcss4" : "hex")
                        }).filter(function (e) {
                            return !!e
                        }).forEach(function (e) {
                            return i(e)
                        }), this.options.paletteEditable) {
                            var a = document.createElement("div");
                            a.className = "a-color-picker-palette-color a-color-picker-palette-add", a.innerHTML = "+", e.appendChild(a), e.addEventListener("click", function (e) {
                                /a-color-picker-palette-add/.test(e.target.className) ? e.shiftKey ? o(null, !0) : i(r ? (0, s.parseColor)([t.R, t.G, t.B, t.A], "rgbcss4") : (0, s.rgbToHex)(t.R, t.G, t.B), e.target, !0) : /a-color-picker-palette-color/.test(e.target.className) && (e.shiftKey ? o(e.target, !0) : t.onValueChanged(b, e.target.getAttribute("data-color")))
                            })
                        } else e.addEventListener("click", function (e) {
                            /a-color-picker-palette-color/.test(e.target.className) && t.onValueChanged(b, e.target.getAttribute("data-color"))
                        })
                    } else e.style.display = "none"
                }
            }, {
                key: "onValueChanged",
                value: function (e, t) {
                    switch (e) {
                        case "H":
                            this.H = t;
                            var r = (0, s.hslToRgb)(this.H, this.S, this.L),
                                n = o(r, 3);
                            this.R = n[0], this.G = n[1], this.B = n[2], this.slBarHelper.setHue(t), this.updatePointerH(this.H), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "S":
                            this.S = t;
                            var i = (0, s.hslToRgb)(this.H, this.S, this.L),
                                a = o(i, 3);
                            this.R = a[0], this.G = a[1], this.B = a[2], this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "L":
                            this.L = t;
                            var l = (0, s.hslToRgb)(this.H, this.S, this.L),
                                c = o(l, 3);
                            this.R = c[0], this.G = c[1], this.B = c[2], this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "R":
                            this.R = t;
                            var u = (0, s.rgbToHsl)(this.R, this.G, this.B),
                                h = o(u, 3);
                            this.H = h[0], this.S = h[1], this.L = h[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "G":
                            this.G = t;
                            var p = (0, s.rgbToHsl)(this.R, this.G, this.B),
                                d = o(p, 3);
                            this.H = d[0], this.S = d[1], this.L = d[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "B":
                            this.B = t;
                            var g = (0, s.rgbToHsl)(this.R, this.G, this.B),
                                f = o(g, 3);
                            this.H = f[0], this.S = f[1], this.L = f[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "RGB":
                            var A = o(t, 3);
                            this.R = A[0], this.G = A[1], this.B = A[2];
                            var y = (0, s.rgbToHsl)(this.R, this.G, this.B),
                                F = o(y, 3);
                            this.H = F[0], this.S = F[1], this.L = F[2], this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case v:
                            var k = o(t, 4);
                            this.R = k[0], this.G = k[1], this.B = k[2], this.A = k[3];
                            var E = (0, s.rgbToHsl)(this.R, this.G, this.B),
                                H = o(E, 3);
                            this.H = H[0], this.S = H[1], this.L = H[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case m:
                            var C = o(t, 4);
                            this.H = C[0], this.S = C[1], this.L = C[2], this.A = C[3];
                            var R = (0, s.hslToRgb)(this.H, this.S, this.L),
                                x = o(R, 3);
                            this.R = x[0], this.G = x[1], this.B = x[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case "RGBHEX":
                            var B = (0, s.cssColorToRgb)(t) || [this.R, this.G, this.B],
                                L = o(B, 3);
                            this.R = L[0], this.G = L[1], this.B = L[2];
                            var w = (0, s.rgbToHsl)(this.R, this.G, this.B),
                                T = o(w, 3);
                            this.H = T[0], this.S = T[1], this.L = T[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B);
                            break;
                        case b:
                            var S = (0, s.parseColor)(t, "rgba") || [0, 0, 0, 1],
                                G = o(S, 4);
                            this.R = G[0], this.G = G[1], this.B = G[2], this.A = G[3];
                            var I = (0, s.rgbToHsl)(this.R, this.G, this.B),
                                P = o(I, 3);
                            this.H = P[0], this.S = P[1], this.L = P[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case "ALPHA":
                            this.A = t
                    }
                    this.onColorChanged(this.R, this.G, this.B, this.A)
                }
            }, {
                key: "onColorChanged",
                value: function (e, t, r, n) {
                    this.preview.style.backgroundColor = 1 === n ? "rgb(" + e + "," + t + "," + r + ")" : "rgba(" + e + "," + t + "," + r + "," + n + ")", this.onchange && this.onchange(this.preview.style.backgroundColor)
                }
            }, {
                key: "onPaletteColorAdd",
                value: function (e) {
                    this.oncoloradd && this.oncoloradd(e)
                }
            }, {
                key: "onPaletteColorRemove",
                value: function (e) {
                    this.oncolorremove && this.oncolorremove(e)
                }
            }, {
                key: "updateInputHSL",
                value: function (e, t, r) {
                    this.options.showHSL && (this.inputH.value = e, this.inputS.value = t, this.inputL.value = r)
                }
            }, {
                key: "updateInputRGB",
                value: function (e, t, r) {
                    this.options.showRGB && (this.inputR.value = e, this.inputG.value = t, this.inputB.value = r)
                }
            }, {
                key: "updateInputRGBHEX",
                value: function (e, t, r) {
                    this.options.showHEX && (this.inputRGBHEX.value = (0, s.rgbToHex)(e, t, r))
                }
            }, {
                key: "updatePointerH",
                value: function (e) {
                    var t = g[0] * e / 360;
                    this.huePointer.style.left = t - 7 + "px"
                }
            }, {
                key: "updatePointerSL",
                value: function (e, t, r) {
                    var n = (0, s.hslToRgb)(e, t, r),
                        i = o(n, 3),
                        a = i[0],
                        l = i[1],
                        c = i[2],
                        u = this.slBarHelper.findColor(a, l, c),
                        h = o(u, 2),
                        p = h[0],
                        d = h[1];
                    p >= 0 && (this.slPointer.style.left = p - 7 + "px", this.slPointer.style.top = d - 7 + "px")
                }
            }, {
                key: "updatePointerA",
                value: function (e) {
                    if (this.options.showAlpha) {
                        var t = f[0] * e;
                        this.alphaPointer.style.left = t - 7 + "px"
                    }
                }
            }]), e
        }(),
            H = function () {
                function e(t) {
                    l(this, e), this.name = t, this.listeners = []
                }
                return i(e, [{
                    key: "on",
                    value: function (e) {
                        e && this.listeners.push(e)
                    }
                }, {
                    key: "off",
                    value: function (e) {
                        this.listeners = e ? this.listeners.filter(function (t) {
                            return t !== e
                        }) : []
                    }
                }, {
                    key: "emit",
                    value: function (e, t) {
                        for (var r = this.listeners.slice(0), n = 0; n < r.length; n++) r[n].apply(t, e)
                    }
                }]), e
            }();

        function C(e, t) {
            var r = new E(e, t),
                n = {
                    change: new H("change"),
                    coloradd: new H("coloradd"),
                    colorremove: new H("colorremove")
                },
                i = !0,
                a = {},
                l = {
                    get element() {
                        return r.element
                    },
                    get rgb() {
                        return [r.R, r.G, r.B]
                    },
                    set rgb(e) {
                        var t = o(e, 3),
                            n = t[0],
                            i = t[1],
                            a = t[2],
                            l = [(0, s.limit)(n, 0, 255), (0, s.limit)(i, 0, 255), (0, s.limit)(a, 0, 255)];
                        n = l[0], i = l[1], a = l[2], r.onValueChanged(v, [n, i, a, 1])
                    },
                    get hsl() {
                        return [r.H, r.S, r.L]
                    },
                    set hsl(e) {
                        var t = o(e, 3),
                            n = t[0],
                            i = t[1],
                            a = t[2],
                            l = [(0, s.limit)(n, 0, 360), (0, s.limit)(i, 0, 100), (0, s.limit)(a, 0, 100)];
                        n = l[0], i = l[1], a = l[2], r.onValueChanged(m, [n, i, a, 1])
                    },
                    get rgbhex() {
                        return this.all.hex
                    },
                    get rgba() {
                        return [r.R, r.G, r.B, r.A]
                    },
                    set rgba(e) {
                        var t = o(e, 4),
                            n = t[0],
                            i = t[1],
                            a = t[2],
                            l = t[3],
                            c = [(0, s.limit)(n, 0, 255), (0, s.limit)(i, 0, 255), (0, s.limit)(a, 0, 255), (0, s.limit)(l, 0, 1)];
                        n = c[0], i = c[1], a = c[2], l = c[3], r.onValueChanged(v, [n, i, a, l])
                    },
                    get hsla() {
                        return [r.H, r.S, r.L, r.A]
                    },
                    set hsla(e) {
                        var t = o(e, 4),
                            n = t[0],
                            i = t[1],
                            a = t[2],
                            l = t[3],
                            c = [(0, s.limit)(n, 0, 360), (0, s.limit)(i, 0, 100), (0, s.limit)(a, 0, 100), (0, s.limit)(l, 0, 1)];
                        n = c[0], i = c[1], a = c[2], l = c[3], r.onValueChanged(m, [n, i, a, l])
                    },
                    get color() {
                        return this.all.toString()
                    },
                    set color(e) {
                        r.onValueChanged(b, e)
                    },
                    get all() {
                        if (i) {
                            var e = [r.R, r.G, r.B, r.A],
                                t = r.A < 1 ? "rgba(" + r.R + "," + r.G + "," + r.B + "," + r.A + ")" : s.rgbToHex.apply(void 0, e);
                            (a = (0, s.parseColor)(e, a)).toString = function () {
                                return t
                            }, i = !1
                        }
                        return Object.assign({}, a)
                    },
                    get onchange() {
                        return n.change && n.change.listeners[0]
                    },
                    set onchange(e) {
                        this.off("change").on("change", e)
                    },
                    get oncoloradd() {
                        return n.coloradd && n.coloradd.listeners[0]
                    },
                    set oncoloradd(e) {
                        this.off("coloradd").on("coloradd", e)
                    },
                    get oncolorremove() {
                        return n.colorremove && n.colorremove.listeners[0]
                    },
                    set oncolorremove(e) {
                        this.off("colorremove").on("colorremove", e)
                    },
                    get palette() {
                        return Object.keys(r.palette).filter(function (e) {
                            return r.palette[e]
                        })
                    },
                    on: function (e, t) {
                        return e && n[e] && n[e].on(t), this
                    },
                    off: function (e, t) {
                        return e && n[e] && n[e].off(t), this
                    },
                    destroy: function () {
                        n.change.off(), n.coloradd.off(), n.colorremove.off(), r.element.remove(), n = null, r = null
                    }
                };
            return r.onchange = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                i = !0, n.change.emit([l].concat(t), l)
            }, r.oncoloradd = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                n.coloradd.emit([l].concat(t), l)
            }, r.oncolorremove = function () {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                n.colorremove.emit([l].concat(t), l)
            }, r.element.ctrl = l, l
        }
        if ("undefined" != typeof window && !document.querySelector('head>style[data-source="a-color-picker"]')) {
            var R = r(3).toString(),
                x = document.createElement("style");
            x.setAttribute("type", "text/css"), x.setAttribute("data-source", "a-color-picker"), x.innerHTML = R, document.querySelector("head").appendChild(x)
        }
        t.createPicker = C, t.from = function (e, t) {
            var r = function (e) {
                return e ? Array.isArray(e) ? e : e instanceof HTMLElement ? [e] : e instanceof NodeList ? [].concat(c(e)) : "string" == typeof e ? [].concat(c(document.querySelectorAll(e))) : e.jquery ? e.get() : [] : []
            }(e).map(function (e, r) {
                var n = C(e, t);
                return n.index = r, n
            });
            return r.on = function (e, t) {
                return r.forEach(function (r) {
                    return r.on(e, t)
                }), this
            }, r.off = function (e) {
                return r.forEach(function (t) {
                    return t.off(e)
                }), this
            }, r
        }, t.parseColorToRgb = s.parseColorToRgb, t.parseColorToRgba = s.parseColorToRgba, t.parseColorToHsl = s.parseColorToHsl, t.parseColorToHsla = s.parseColorToHsla, t.parseColor = s.parseColor, t.rgbToHex = s.rgbToHex, t.hslToRgb = s.hslToRgb, t.rgbToHsl = s.rgbToHsl, t.rgbToHsv = s.rgbToHsv, t.rgbToInt = s.rgbToInt, t.intToRgb = s.intToRgb, t.getLuminance = s.getLuminance, t.COLOR_NAMES = s.COLOR_NAMES, t.PALETTE_MATERIAL_500 = s.PALETTE_MATERIAL_500, t.PALETTE_MATERIAL_CHROME = s.PALETTE_MATERIAL_CHROME, t.VERSION = "1.1.6"
    }])
});