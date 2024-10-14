self.vars = {
    "ver": "5.4.73",
    "dataVer": 1,
    "branch": "Walbrook",
    "cdn": "collection.decibelinsight.net",
    "app": "app.decibelinsight.com",
    "proxy": "proxy.decibelinsight.net",
    "proxyStyle": "_di_standard_",
    "qa": {},
    "hasStor": true,
    "isAC": false,
    "isFF": false,
    "isMac": false,
    "isMob": false,
    "isSa": false,
    "dAR": null,
    "igQH": true,
    "pES": true,
    "hasSoc": true,
    "xhrTO": 10000,
    "jEList": {
        "GenericError": 0,
        "Error": 1,
        "InternalError": 2,
        "RangeError": 3,
        "ReferenceError": 4,
        "SyntaxError": 5,
        "TypeError": 6,
        "URIError": 7,
        "Warning": 8,
        "EvalError": 9,
        "SecurityError": 10,
        "DOMException": 11
    },
    "evtKeyCodes": {
        "f0": {
            "str": "",
            "keys": [8, 9, 13, 33, 34, 35, 36, 37, 38, 39, 40, 116]
        },
        "f2": {
            "str": "c",
            "keys": [65, 67, 68, 70, 76, 80, 82, 83, 86, 88, 90, 116]
        },
        "f4": {
            "str": "s",
            "keys": [8]
        },
        "f6": {
            "str": "cs",
            "keys": [82]
        },
        "f8": {
            "str": "a",
            "keys": [37, 39]
        }
    }
};
!function() {
    "use strict";
    function a(a, b, c) {
        var d, e;
        if (b)
            for (d = b.length,
            e = 0; d > e; e++)
                if (e in b && (c ? b[e][c] : b[e]) === a)
                    return e;
        return -1
    }
    function b(a) {
        return "undefined" == typeof a || null === a || "" === a
    }
    function c(a) {
        return !(!a || !a.nodeName)
    }
    function d() {
        var a, b, c, d = [];
        for (b = 0; 256 > b; b++) {
            for (a = b,
            c = 0; 8 > c; c++)
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            d[b] = a
        }
        return d
    }
    function e(a) {
        for (var b = self._da_crcTable || (self._da_crcTable = d()), c = -1, e = 0, f = a.length; f > e; e++)
            c = c >>> 8 ^ b[255 & (c ^ a.charCodeAt(e))];
        return (-1 ^ c) >>> 0
    }
    function f(a) {
        return a = "" + (b(a) ? "" : a),
        e(a.substr(0, a.length / 2)).toString(16) + "-" + e(a.substr(a.length / 2)).toString(16)
    }
    function g(a, b) {
        return a && a.hasOwnProperty(b)
    }
    function h() {
        for (var a = [], b = 0; b < arguments.length; b++)
            a[b] = arguments[b];
        var c, d, e, f = a.length;
        if (0 === f)
            return {};
        for (e = a[0],
        c = 1; f > c; c++)
            for (d in a[c])
                g(a[c], d) && (e[d] = a[c][d]);
        return a[0]
    }
    function i(a) {
        return null !== a && "object" == typeof a
    }
    function j(a, b, c) {
        var d;
        if (i(a))
            for (d in a)
                g(a, d) && b.call(c, a[d], d, a)
    }
    function k(a) {
        if (!a)
            return [];
        for (var b = a.split("\n"), c = [], d = 1; d < b.length; d++) {
            var e = b[d]
              , f = w.stack.exec(e);
            f && f.length >= 5 && c.push({
                "function": f[1],
                line: parseInt(f[3]),
                col: parseInt(f[4])
            })
        }
        return c
    }
    function l(a) {
        var b = !1;
        if (a.name)
            b = a.name.trim();
        else if (a.stack) {
            var c = a.stack.match(w.jsEType);
            b = c ? c[1] : !1
        }
        return b
    }
    function m(a, b, c, d) {
        try {
            b = h({}, b);
            var e = new XMLHttpRequest
              , f = function(a) {
                a = a || {
                    type: "error"
                },
                d && d(e.status || a.type)
            }
              , g = function(a) {
                200 === e.status ? c && c(e.responseText) : f(a)
            };
            return "onload"in e ? (e.onload = g,
            e.onerror = f,
            e.onabort = f,
            e.ontimeout = f) : e.onreadystatechange = function() {
                4 === e.readyState && g()
            }
            ,
            e.open(b.method || (b.data ? "POST" : "GET"), a, b.async !== !1),
            b.async !== !1 && ("number" == typeof b.timeout ? e.timeout = b.timeout : e.timeout = self.vars.xhrTO),
            e.withCredentials = !0,
            b.nocache && (e.setRequestHeader("Cache-Control", "no-cache"),
            e.setRequestHeader("Pragma", "no-cache"),
            self.vars.isFF && e.setRequestHeader("If-None-Match", "")),
            j(b.extraHeader, function(a, b) {
                e.setRequestHeader(b, a)
            }),
            e.send(b.data),
            e
        } catch (i) {
            y.processError("AJAX", i, v.ERROR, x.AJAX)
        }
    }
    function n(a) {
        return "function" == typeof a
    }
    function o(a, b) {
        for (var c = [], d = 2; d < arguments.length; d++)
            c[d - 2] = arguments[d];
        if (!n(a))
            return null;
        var e = Array.prototype.slice.call(arguments, 2);
        return function() {
            return a.apply(b || this, e.concat(Array.prototype.slice.call(arguments)))
        }
    }
    function p(a) {
        return w.nat.test(a)
    }
    function q(a) {
        var b = typeof a
          , d = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }
          , e = function(a) {
            return a.match(w.escape) ? a.replace(w.escape, function(a) {
                var b = d[a];
                return "string" == typeof b ? b : (b = a.charCodeAt(),
                "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16))
            }) : a
        };
        if (i(a)) {
            var f = []
              , g = a.constructor === Array;
            return j(a, function(a, d) {
                b = typeof a,
                "string" === b ? a = '"' + e(a) + '"' : c(a) ? a = '"[object HTMLElement]"' : i(b) && null !== a && (a = q(a)),
                f.push((g ? "" : q(d) + ":") + String(a))
            }),
            (g ? "[" : "{") + String(f) + (g ? "]" : "}")
        }
        return "string" === b && (a = '"' + e(a) + '"'),
        String(a)
    }
    function r() {
        return "undefined" != typeof JSON && JSON.stringify && p(JSON.stringify) ? JSON.stringify : q
    }
    function s(a) {
        return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
    }
    function t(a, b) {
        var c, d, e, f, g, h, i, j;
        for (c = 3 & a.length,
        d = a.length - c,
        e = b,
        g = 3432918353,
        h = 461845907,
        j = 0; d > j; )
            i = 255 & a[j] | (255 & a[++j]) << 8 | (255 & a[++j]) << 16 | (255 & a[++j]) << 24,
            ++j,
            i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295,
            i = i << 15 | i >>> 17,
            i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295,
            e ^= i,
            e = e << 13 | e >>> 19,
            f = 5 * (65535 & e) + ((5 * (e >>> 16) & 65535) << 16) & 4294967295,
            e = (65535 & f) + 27492 + (((f >>> 16) + 58964 & 65535) << 16);
        switch (i = 0,
        c) {
        case 3:
            i ^= (255 & a[j + 2]) << 16;
        case 2:
            i ^= (255 & a[j + 1]) << 8;
        case 1:
            i ^= 255 & a[j],
            i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295,
            i = i << 15 | i >>> 17,
            i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295,
            e ^= i
        }
        return e ^= a.length,
        e ^= e >>> 16,
        e = 2246822507 * (65535 & e) + ((2246822507 * (e >>> 16) & 65535) << 16) & 4294967295,
        e ^= e >>> 13,
        e = 3266489909 * (65535 & e) + ((3266489909 * (e >>> 16) & 65535) << 16) & 4294967295,
        e ^= e >>> 16,
        e >>> 0
    }
    function u(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b.push(d) : 2048 > d ? b.push(192 | d >> 6, 128 | 63 & d) : 55296 > d || d >= 57344 ? b.push(224 | d >> 12, 128 | d >> 6 & 63, 128 | 63 & d) : (c++,
            d = 65536 + ((1023 & d) << 10 | 1023 & a.charCodeAt(c)),
            b.push(240 | d >> 18, 128 | d >> 12 & 63, 128 | d >> 6 & 63, 128 | 63 & d))
        }
        return b
    }
    var v, w = {
        attrSel: /\[\s*class\s*\$\=/,
        boolFalse: /^(false|0)$/i,
        boolTrue: /^(true|1)$/i,
        bot: /(sp[iy]der|[a-z\/_]bot|crawler|slurp|teoma)/i,
        canvasCss: /(^|\s+|>|,|}|{)\bcanvas\b/gi,
        cc: /\b(\d{4}([\s-]?)\d{4}\2\d{4}\2(?:(?:\d{4}\2\d{3})|(?:\d{2,4})))\b/g,
        comment: /<!\-\-(.|[\r\n])*?\-\->/gi,
        commentFrag: /(<\!\-\-|\-\->)/gi,
        css: /\.css$/i,
        cssComment: /\/\*(.|[\r\n])*?\*\//gi,
        cssUrl: /url[\s]*\([\s]*(['"]?)(.*?)(\1)[\s]*\)/g,
        cssEscaped: /(\\([0-9a-fA-F]{6}))|(\\([0-9a-fA-F]+)(\s+|(?=[^0-9a-fA-F])))/g,
        diTest: /\/i\/([0-9]+\/)?[0-9]+\/di\.js$/i,
        dU: /^data\:[a-zA-Z]{2,6}\/([a-zA-Z]{2,4})(\+[a-zA-Z]{2,4})?;base64/,
        dWidthHeight: /device-(width|height)[\s]*:/gi,
        email: /(^|[>\s({\[\|\,;:\"\'])([a-z0-9][a-z0-9._\-]{0,30}@[a-z0-9\-]{1,30}\.+[a-z0-9]{2,5})/gi,
        eProt: /^\/\//,
        erTest: /^Script error\.?$/i,
        escape: /["\\\x00-\x1f\x7f-\x9f]/g,
        fSel: /(name\=\"|field\-id\=\")/,
        hasProt: /^[a-z]+\:/i,
        hrefC: /^javascript: ?(void|;)/i,
        hUrlFix: /^.+?(\.app\/|\/files\/)/,
        hAssetFix: /^file:\/\/\/(.+?\.app\/|(android_asset\/)|(android_res\/))/,
        hoverQueryFix: /(\(| )hover(\s*)\.di-hover/gi,
        idFix: /(:|\.|\[|\]|,|\{|\})/g,
        igQH: /[\?#].*$/,
        importIgnore: /@import [^;]+;/gi,
        importUrl: /\@import[\s]+(['"])(.*?)(\1)/g,
        inValAttr: /\(\)\{\}\[\]\$/,
        invalidInput: /^(datetime\-local|datetime|time|week|month|date|number)$/i,
        js: /\.js(\?.*|$)/i,
        jsO: /(\.js|\/[^\.]+)$/i,
        jsEType: /(.+):/i,
        lb: /[\r\n\s]+/g,
        lComSp: /^[, \t\n\r\u000c]+/,
        lNSp: /^[^ \t\n\r\u000c]+/,
        lNCom: /^[^,]+/,
        lowerEncoded: /%([0-9A-F]{2})/gi,
        mask: /[^\s]/g,
        maskReducer: /(\*+)/g,
        media: /all|screen|handheld|min-|max-|resolution|color|aspect-ratio/i,
        nat: /^\s*function[^{]+{\s*\[native code\]\s*}\s*$/,
        newDiPath: /\/i\/[0-9]+\/[0-9]+\/(di\.js|c\.json)$/i,
        protR: /^(https?):\/\//i,
        pseudoFix: /\:(hover|invalid)/gi,
        punctuationEscaped: /\\([:\/.?=])(?![^\[]*\])/g,
        regex: /^\/(.*?)\/([gim]*)$/,
        sp: / {2,}/g,
        stack: /^\s*(?:at)?\s* (.*?)@? ?\(?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        spaceOnly: /^[ \n\t\r]+$/,
        ssn: /\d{3}-\d{2}-\d{4}/gi,
        stW: /(^| )width: /,
        stH: /(^| )height: /,
        tCom: /[,]+$/,
        textarea: /<textarea(.*? data-di-mask.*?)>([\s\S]*?)<\/textarea>/gi,
        trim: /^\s+|\s+$/g,
        trimSpCom: /^[,\s]+|[,\s]+$/g,
        urlFix: /1\.[0-9]\.[0-9]\.[0-9]+\/bmi\//gi,
        val: / value=["']([^"]+)["']/,
        valId: /^[a-z][a-z0-9_\-\:\.]*$/i,
        vartest: /^[a-zA-Z0-9 _$\.\[\]'"]+$/,
        xmlns: /www\.w3\.org\/[0-9]{4}\/([a-zA-Z]+)/i
    };
    !function(a) {
        a.DEBUG = "DEBUG",
        a.CONFIG = "CONFIG",
        a.INFO = "INFO",
        a.WARN = "WARN",
        a.ERROR = "ERROR"
    }(v || (v = {}));
    var x;
    !function(a) {
        a.READY_EXEC = "Error caught in ready function",
        a.GLOBAL_READY = "Error caught in global ready function",
        a.SOCKET_ON_MESSAGE = "Error caught in socket message processing",
        a.AJAX = "Error caught in AJAX method execution",
        a.JSON = "Unable to parse JSON structure",
        a.CAUGHT_ERROR = "JS Execution Error Occured",
        a.C_JSON_CACHE = "Cached c.json is detected"
    }(x || (x = {}));
    var y;
    !function(a) {
        function c(a, c, d, e) {
            if (d || (d = v.INFO),
            !b(c)) {
                var f = l(c) || ""
                  , g = k(c.stack);
                self.workerFunctions.sendToDI({
                    key: ["handleProcessedException"],
                    param: [a, f, g, d, e]
                })
            }
        }
        a.processError = c
    }(y || (y = {}));
    var z = r()
      , A = function() {
        function b() {
            this.socketRAT = [500, 1e3, 2500, 5e3, 1e4, 2e4, 4e4, 6e4],
            this.failedMaxTry = 3,
            this.speedSent = 0,
            this.maxSpeedSent = 25,
            this.status = {
                CONNECTING: 0,
                OPEN: 1,
                CLOSING: 2,
                CLOSED: 3
            },
            this.socket = {},
            this.hasSocket = "function" == typeof WebSocket,
            this.sBuf = [],
            this.socketRTO = null,
            this.socketRT = 0,
            this.socketFailed = !1,
            this.sQ = {}
        }
        return b.prototype.send = function(a) {
            var b = this;
            if (this.socU = a.socU,
            this.xhrU = a.xhrU,
            a.data && !a.retryCount) {
                if (i(a.data) && (a.data = z(a.data)),
                a.dataLength = a.data.length,
                a.preparedParam += "&dl=" + a.dataLength,
                a.dataLength > 144e5)
                    return void self.workerFunctions.sendToDI({
                        key: ["postInfo"],
                        param: ["extra", {
                            entityTooLarge: 1
                        }]
                    });
                self.workerFunctions.sendToDI({
                    key: ["addDSize"],
                    param: [a.dataLength]
                })
            }
            this.xhrSocket(a, function(b) {
                return a.callback && a.callback(b)
            }, function(c) {
                a.retryCode = c,
                a.retryCount = (a.retryCount || 0) + 1,
                b.sendFailedBuffer(a)
            })
        }
        ,
        b.prototype.sendFailedBuffer = function(a) {
            var b = this;
            a.retryCount < this.failedMaxTry && setTimeout(function() {
                a.retryCode && -1 === a.preparedParam.indexOf("&retryCode=") && (a.preparedParam += "&retryCode=" + a.retryCode),
                b.send(a)
            }, 1 === a.retryCount ? 250 : 500)
        }
        ,
        b.prototype.xhrSocket = function(a, b, c) {
            var d = this.socketActive();
            d && a.process !== !1 ? this.socketTry(a, b, c) : (!d && this.reconnectSocket(),
            this.ajaxTry(a, b, c))
        }
        ,
        b.prototype.ajaxTry = function(a, b, c, d) {
            d && -1 === a.preparedParam.indexOf("retryCode") && (a.preparedParam += "&retryCode=" + d),
            m(this.xhrU + "?" + a.preparedParam, a, b, c)
        }
        ,
        b.prototype.socketTry = function(a, b, c) {
            var d = this.socket.readyState;
            d === this.status.OPEN ? this.socketSend(a, b, c) : d === this.status.CLOSING || d === this.status.CLOSED ? (this.setSocketFailed(!0),
            this.ajaxTry(a, b, c, "socketDisConnected")) : (this.sBuf.push({
                opt: a,
                sFn: b,
                fFn: c
            }),
            this.socketConnect())
        }
        ,
        b.prototype.socketConnect = function() {
            var a = this.socket.readyState;
            if (a !== this.status.OPEN && a !== this.status.CONNECTING)
                try {
                    this.socket = new WebSocket(this.socU),
                    this.socket.addEventListener("message", o(this.socketOnMessage, this)),
                    this.socket.addEventListener("open", o(this.socketFlush, this)),
                    this.socket.openTimeout = setTimeout(o(this.socketFlush, this, !0), 500)
                } catch (b) {}
        }
        ,
        b.prototype.reconnectSocket = function() {
            var a = this.socket.readyState
              , b = this.hasSocket && a !== this.status.OPEN && a !== this.status.CONNECTING;
            b && null === this.socketRTO && (this.socketRTO = setTimeout(o(this.socketConnect, this), this.socketGetRT()))
        }
        ,
        b.prototype.socketGetRT = function() {
            var b = this.socketRAT[Math.min(a(this.socketRT, this.socketRAT) + 1, this.socketRAT.length - 1)];
            return this.socketRT = b,
            b
        }
        ,
        b.prototype.socketFlush = function(a) {
            var b = this;
            clearTimeout(this.socket.openTimeout),
            a === !0 ? (this.setSocketFailed(!0),
            this.socket.conTimeout = !0,
            this.sBuf.forEach(function(a) {
                return b.ajaxTry(a.opt, a.sFn, a.fFn, "socketNotConnected")
            })) : (this.setSocketFailed(!1),
            this.socketRT = 0,
            this.socketRTO = null,
            this.socket.conTimeout && (this.socket.conTimeout = !1,
            this.socket.slowCon = !0),
            this.sBuf.forEach(function(a) {
                return b.socketSend(a.opt, a.sFn, a.fFn)
            }),
            this.socket.pingTimer = setInterval(o(this.socketPing, this), 2e4)),
            this.sBuf = []
        }
        ,
        b.prototype.socketSend = function(a, b, c) {
            var d = this;
            this.socket.slowCon && -1 === a.preparedParam.indexOf("retryCode") && (a.preparedParam += "&retryCode=socketSlowConnection",
            this.socket.slowCon = !1),
            this.sQ[a.key] = {
                sFn: b,
                fFn: c,
                t: Date.now()
            },
            this.socket.send(a.preparedParam + "&wsReqId=" + a.key.substr(1) + "\n" + a.data),
            setTimeout(function() {
                d.sQ[a.key] && (d.setSocketFailed(!0),
                d.socketFnExe(d.sQ[a.key].fFn, "socketTimeout"),
                delete d.sQ[a.key])
            }, self.vars.xhrTO)
        }
        ,
        b.prototype.socketOnMessage = function(a) {
            var b, c;
            try {
                "pong" !== a.data && (b = JSON.parse(a.data),
                c = "k" + b.id,
                this.sendLiveDXSToDI(b)),
                this.sQ[c] && (b.success ? (this.socketFnExe(this.sQ[c].sFn),
                this.speedSent < this.maxSpeedSent && (self.workerFunctions.sendToDI({
                    key: ["networkSpeedCollection", "collectWSSNetworkSpeed"],
                    param: [b, this.sQ[c].t, Date.now()]
                }),
                ++this.speedSent)) : (this.setSocketFailed(!0),
                this.socketFnExe(this.sQ[c].fFn, "socketError")),
                delete this.sQ[c])
            } catch (a) {
                this.setSocketFailed(!0),
                this.socketClose(),
                this.hasSocket = !1,
                y.processError("DINetwork", a, v.ERROR, x.SOCKET_ON_MESSAGE)
            }
        }
        ,
        b.prototype.socketFnExe = function(a, b) {
            n(a) && a(b)
        }
        ,
        b.prototype.setSocketFailed = function(a) {
            this.socketFailed = a,
            self.workerFunctions.sendToDI({
                key: ["net", "socketFailed"],
                value: a
            })
        }
        ,
        b.prototype.socketPing = function() {
            this.socket.readyState === this.status.OPEN ? this.socket.send("ping") : clearInterval(this.socket.pingTimer)
        }
        ,
        b.prototype.socketActive = function() {
            return this.hasSocket && !this.socketFailed
        }
        ,
        b.prototype.socketClose = function() {
            this.socket.readyState === this.status.OPEN && this.socket.close()
        }
        ,
        b.prototype.sendLiveDXSToDI = function(a) {
            ("live_dxs" === a.type || "live_dxs_ks" === a.type) && self.workerFunctions.sendToDI({
                key: ["realTime", "processRealTime"],
                param: [a]
            })
        }
        ,
        b
    }()
      , B = function() {
        function a() {
            this.version = "1.0",
            this.format = "DJSON",
            this.reset()
        }
        return a.prototype.reset = function() {
            this.dictionary = {},
            this.dictionaryLength = 1
        }
        ,
        a.prototype.recurSerialize = function(a) {
            var b;
            return b = s(a) ? this.convertArray(a) : this.convertObject(a)
        }
        ,
        a.prototype.convertArray = function(a) {
            for (var b = [0], c = a.length, d = 0; c > d; d++) {
                var e = a[d];
                i(e) && (e = this.recurSerialize(e)),
                b.push(e)
            }
            return b
        }
        ,
        a.prototype.convertObject = function(a) {
            for (var b = Object.keys(a), c = b.length, d = "", e = [0], f = 0; c > f; f++) {
                var g = b[f]
                  , h = a[g];
                i(h) && (h = this.recurSerialize(h)),
                d += g + ";",
                e.push(h)
            }
            return e[0] = this.lookupEntryOrAdd(d),
            e
        }
        ,
        a.prototype.lookupEntryOrAdd = function(a) {
            if ("" === a)
                return 0;
            var b = this.dictionary[a];
            return b || (b = this.dictionaryLength,
            this.dictionary[a] = b,
            this.dictionaryLength++),
            b
        }
        ,
        a.prototype.serialize = function(a, b) {
            return this.reset(),
            i(a) && (a = this.recurSerialize(a)),
            b ? a : {
                v: a,
                d: Object.keys(this.dictionary),
                f: this.format,
                vr: this.version
            }
        }
        ,
        a
    }()
      , C = function() {
        function a() {}
        return a.hash = function(a, b) {
            return t(u(a), b)
        }
        ,
        a
    }()
      , D = function() {
        function a(a) {
            this.version = "1.0",
            this.format = "HJSON",
            this.hashes = a,
            this.useHashing = Object.keys(a).length > 0
        }
        return a.prototype.serialize = function(a, b) {
            return i(a) && (a = this.minTree(a)[1]),
            b ? a : {
                f: this.format,
                vr: this.version,
                v: a
            }
        }
        ,
        a.prototype.convertObject = function(a) {
            var b = a;
            if (i(a)) {
                var c = Object.keys(a)
                  , d = c.length;
                b = [];
                for (var e = 0; d > e; e++)
                    b.push([c[e], this.convertObject(a[c[e]])])
            }
            return b
        }
        ,
        a.prototype.minTree = function(a) {
            var b, c = 0, d = a.c;
            if (d && 0 != d.length) {
                for (var e = [], f = 0, g = d.length; g > f; f++) {
                    var h = this.minTree(d[f]);
                    if (this.useHashing) {
                        var i = h[0].toString() + ";";
                        c = C.hash(i, c)
                    }
                    e.push(h[1])
                }
                var j = Object.keys(a)
                  , k = j.length;
                b = [];
                for (var f = 0; k > f; f++) {
                    var l = j[f];
                    if ("c" !== l) {
                        var m = this.convertObject(a[l]);
                        b.push([l, m]),
                        this.useHashing && (c = C.hash(l + ":" + JSON.stringify(m), c))
                    }
                }
                this.hashes[c] ? b = {
                    h: c.toString(36)
                } : b.push(["c", e])
            } else if (b = this.convertObject(a),
            this.useHashing)
                if (c = C.hash(JSON.stringify(b), 0),
                this.hashes[c])
                    b = {
                        h: c.toString(36)
                    };
                else if (a.a && "string" == typeof a.a[8] && a.a[8].length > 1e4) {
                    var n = C.hash(a.a[8], 0);
                    this.hashes[n] && (a.a[8] = {
                        h: n.toString(36)
                    },
                    b = this.convertObject(a))
                }
            return [c, b]
        }
        ,
        a
    }();
    self.workerFunctions = {},
    self.workerFunctions.DJSON = new B,
    self.workerFunctions.DJSONSerialize = function(a) {
        return self.workerFunctions.DJSON.serialize(a.data, a.partialDom)
    }
    ,
    self.workerFunctions.HJSONInit = function(a) {
        self.workerFunctions.HJSON = new D(a)
    }
    ,
    self.workerFunctions.HJSONSerialize = function(a) {
        return self.workerFunctions.HJSON.serialize(a.data, a.partialDom)
    }
    ,
    self.workerFunctions.ajaxExecute = function(a, b) {
        m(a.url, a.options, function(a) {
            b({
                success: !0,
                responseText: a
            })
        }, function(a) {
            b({
                success: !1,
                status: a
            })
        })
    }
    ,
    self.workerFunctions.diNetwork = new A,
    self.workerFunctions.diNetworkSend = function(a, b) {
        a.callback = b,
        self.workerFunctions.diNetwork.send(a)
    }
    ,
    self.workerFunctions.diNetworkSocketClose = function() {
        self.workerFunctions.diNetwork.socketClose()
    }
    ,
    self.workerFunctions.hash = f,
    self.workerFunctions.sendToDI = function(a) {
        try {
            postMessage({
                id: "DI",
                message: a
            })
        } catch (b) {}
    }
    ,
    onmessage = function(a) {
        if (!self.workerFunctions[a.data.procMethodName])
            throw new Error("No such processing method defined in worker: " + a.data.procMethodName);
        var b = {
            id: a.data.id,
            message: null,
            procMethodName: a.data.procMethodName
        }
          , c = self.workerFunctions[a.data.procMethodName](a.data.message, function(a) {
            b.message = a,
            postMessage(b)
        });
        void 0 !== c && (b.message = c,
        postMessage(b))
    }
}();
