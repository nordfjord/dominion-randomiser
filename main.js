/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function _isPlaceholder(a) {
       return a != null && (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a['@@functional/placeholder'] === true;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isPlaceholder = __webpack_require__(0);

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(17);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var m = __webpack_require__(7);
var f = __webpack_require__(11);

__webpack_require__(15);
__webpack_require__(18);

var cards = __webpack_require__(20);

var expansions = [].concat(_toConsumableArray(new Set(cards.map(function (d) {
	return d.set;
}))));

var stored_expansions = (localStorage.getItem('expansions') || 'Base').split(',');

var filtered_expansions = f.stream(stored_expansions);

f.on(function (expansions) {
	return localStorage.setItem('expansions', expansions.join(','));
}, filtered_expansions);

var filtered_cards = filtered_expansions.map(function (sets) {
	return cards.filter(function (card) {
		return ~sets.indexOf(card.set);
	});
});

var gen_random_indexes = function gen_random_indexes(size, from, to) {
	var res = [];
	var range = to - from;
	if (range < size) size = range;
	for (var i = 0; i < size; ++i) {
		var idx = from + Math.round(Math.random() * range);
		while (res.indexOf(idx) > -1) {
			idx = from + Math.round(Math.random() * range);
		}
		res.push(idx);
	}
	return res;
};

var selected_cards = filtered_cards.map(function (cards) {
	return gen_random_indexes(10, 0, cards.length).map(function (idx) {
		return cards[idx];
	}).sort(function (a, b) {
		return a.cost - b.cost;
	});
});

var MainFilters = {
	filtered_cards: filtered_cards,
	expansions: filtered_expansions
};

var Filters = {
	view: function view() {
		return m('.flex.items-center.justify-center.flex-wrap', [expansions.map(function (set) {
			return m('', m('label', [set, m('input[type=checkbox]', {
				checked: !!~filtered_expansions().indexOf(set),
				onchange: m.withAttr('checked', function (checked) {
					if (checked) {
						filtered_expansions(filtered_expansions().concat([set]));
					} else {
						filtered_expansions(filtered_expansions().filter(function (d) {
							return d !== set;
						}));
					}
				})
			})]));
		})]);
	}
};

var Cards = {
	view: function view() {
		return m('.flex.items-center.justify-center', m('.overflow-scroll.fit', m('table.table-light', [m('thead', m('tr.border-bottom', [m('th.p1', 'Card'), m('th.p1', 'Set'), m('th.p1.cost', 'Cost')])), m('tbody', selected_cards().map(function (card) {
			return card && m('tr.card-row.' + card.type.join('.'), [m('td.p1.name', card.name), m('td.p1.set', card.set), m('td.p1.cost', card.cost)]
			// m('td.p1', card.type.join(', ')),
			// m('td.p1', m.trust(card.description)),
			);
		}))])));
	}
};

var main = {
	view: function view() {
		return m('.dominion-randomizer.container', [m('h1.h1.center', 'Dominion Randomizer'), m('.flex.items-center.justify-center.mb2', m('button[type=button].btn.btn-primary', {
			onclick: function onclick() {
				filtered_expansions(filtered_expansions());
			}
		}, 'Get new cards')), m(Filters), m('hr.border-bottom'), m(Cards)]);
	}
};

m.mount(document.body, main);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate, global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function () {
	"use strict";

	function Vnode(tag, key, attrs0, children, text, dom) {
		return { tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false };
	}
	Vnode.normalize = function (node) {
		if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);
		if (node != null && (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined);
		return node;
	};
	Vnode.normalizeChildren = function normalizeChildren(children) {
		for (var i = 0; i < children.length; i++) {
			children[i] = Vnode.normalize(children[i]);
		}
		return children;
	};
	var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
	var selectorCache = {};
	var hasOwn = {}.hasOwnProperty;
	function compileSelector(selector) {
		var match,
		    tag = "div",
		    classes = [],
		    attrs = {};
		while (match = selectorParser.exec(selector)) {
			var type = match[1],
			    value = match[2];
			if (type === "" && value !== "") tag = value;else if (type === "#") attrs.id = value;else if (type === ".") classes.push(value);else if (match[3][0] === "[") {
				var attrValue = match[6];
				if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
				if (match[4] === "class") classes.push(attrValue);else attrs[match[4]] = attrValue || true;
			}
		}
		if (classes.length > 0) attrs.className = classes.join(" ");
		return selectorCache[selector] = { tag: tag, attrs: attrs };
	}
	function execSelector(state, attrs, children) {
		var hasAttrs = false,
		    childList,
		    text;
		var className = attrs.className || attrs.class;
		for (var key in state.attrs) {
			if (hasOwn.call(state.attrs, key)) {
				attrs[key] = state.attrs[key];
			}
		}
		if (className !== undefined) {
			if (attrs.class !== undefined) {
				attrs.class = undefined;
				attrs.className = className;
			}
			if (state.attrs.className != null) {
				attrs.className = state.attrs.className + " " + className;
			}
		}
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && key !== "key") {
				hasAttrs = true;
				break;
			}
		}
		if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
			text = children[0].children;
		} else {
			childList = children;
		}
		return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text);
	}
	function hyperscript(selector) {
		// Because sloppy mode sucks
		var attrs = arguments[1],
		    start = 2,
		    children;
		if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
			throw Error("The selector must be either a string or a component.");
		}
		if (typeof selector === "string") {
			var cached = selectorCache[selector] || compileSelector(selector);
		}
		if (attrs == null) {
			attrs = {};
		} else if ((typeof attrs === "undefined" ? "undefined" : _typeof(attrs)) !== "object" || attrs.tag != null || Array.isArray(attrs)) {
			attrs = {};
			start = 1;
		}
		if (arguments.length === start + 1) {
			children = arguments[start];
			if (!Array.isArray(children)) children = [children];
		} else {
			children = [];
			while (start < arguments.length) {
				children.push(arguments[start++]);
			}
		}
		var normalized = Vnode.normalizeChildren(children);
		if (typeof selector === "string") {
			return execSelector(cached, attrs, normalized);
		} else {
			return Vnode(selector, attrs.key, attrs, normalized);
		}
	}
	hyperscript.trust = function (html) {
		if (html == null) html = "";
		return Vnode("<", undefined, undefined, html, undefined, undefined);
	};
	hyperscript.fragment = function (attrs1, children) {
		return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined);
	};
	var m = hyperscript;
	/** @constructor */
	var PromisePolyfill = function PromisePolyfill(executor) {
		if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`");
		if (typeof executor !== "function") throw new TypeError("executor must be a function");
		var self = this,
		    resolvers = [],
		    rejectors = [],
		    resolveCurrent = handler(resolvers, true),
		    rejectCurrent = handler(rejectors, false);
		var instance = self._instance = { resolvers: resolvers, rejectors: rejectors };
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
		function handler(list, shouldAbsorb) {
			return function execute(value) {
				var then;
				try {
					if (shouldAbsorb && value != null && ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
						if (value === self) throw new TypeError("Promise can't be resolved w/ itself");
						executeOnce(then.bind(value));
					} else {
						callAsync(function () {
							if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value);
							for (var i = 0; i < list.length; i++) {
								list[i](value);
							}resolvers.length = 0, rejectors.length = 0;
							instance.state = shouldAbsorb;
							instance.retry = function () {
								execute(value);
							};
						});
					}
				} catch (e) {
					rejectCurrent(e);
				}
			};
		}
		function executeOnce(then) {
			var runs = 0;
			function run(fn) {
				return function (value) {
					if (runs++ > 0) return;
					fn(value);
				};
			}
			var onerror = run(rejectCurrent);
			try {
				then(run(resolveCurrent), onerror);
			} catch (e) {
				onerror(e);
			}
		}
		executeOnce(executor);
	};
	PromisePolyfill.prototype.then = function (onFulfilled, onRejection) {
		var self = this,
		    instance = self._instance;
		function handle(callback, list, next, state) {
			list.push(function (value) {
				if (typeof callback !== "function") next(value);else try {
					resolveNext(callback(value));
				} catch (e) {
					if (rejectNext) rejectNext(e);
				}
			});
			if (typeof instance.retry === "function" && state === instance.state) instance.retry();
		}
		var resolveNext, rejectNext;
		var promise = new PromisePolyfill(function (resolve, reject) {
			resolveNext = resolve, rejectNext = reject;
		});
		handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
		return promise;
	};
	PromisePolyfill.prototype.catch = function (onRejection) {
		return this.then(null, onRejection);
	};
	PromisePolyfill.resolve = function (value) {
		if (value instanceof PromisePolyfill) return value;
		return new PromisePolyfill(function (resolve) {
			resolve(value);
		});
	};
	PromisePolyfill.reject = function (value) {
		return new PromisePolyfill(function (resolve, reject) {
			reject(value);
		});
	};
	PromisePolyfill.all = function (list) {
		return new PromisePolyfill(function (resolve, reject) {
			var total = list.length,
			    count = 0,
			    values = [];
			if (list.length === 0) resolve([]);else for (var i = 0; i < list.length; i++) {
				(function (i) {
					function consume(value) {
						count++;
						values[i] = value;
						if (count === total) resolve(values);
					}
					if (list[i] != null && (_typeof(list[i]) === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
						list[i].then(consume, reject);
					} else consume(list[i]);
				})(i);
			}
		});
	};
	PromisePolyfill.race = function (list) {
		return new PromisePolyfill(function (resolve, reject) {
			for (var i = 0; i < list.length; i++) {
				list[i].then(resolve, reject);
			}
		});
	};
	if (typeof window !== "undefined") {
		if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill;
		var PromisePolyfill = window.Promise;
	} else if (typeof global !== "undefined") {
		if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill;
		var PromisePolyfill = global.Promise;
	} else {}
	var buildQueryString = function buildQueryString(object) {
		if (Object.prototype.toString.call(object) !== "[object Object]") return "";
		var args = [];
		for (var key0 in object) {
			destructure(key0, object[key0]);
		}
		return args.join("&");
		function destructure(key0, value) {
			if (Array.isArray(value)) {
				for (var i = 0; i < value.length; i++) {
					destructure(key0 + "[" + i + "]", value[i]);
				}
			} else if (Object.prototype.toString.call(value) === "[object Object]") {
				for (var i in value) {
					destructure(key0 + "[" + i + "]", value[i]);
				}
			} else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
		}
	};
	var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i");
	var _8 = function _8($window, Promise) {
		var callbackCount = 0;
		var oncompletion;
		function setCompletionCallback(callback) {
			oncompletion = callback;
		}
		function finalizer() {
			var count = 0;
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion();
			}
			return function finalize(promise0) {
				var then0 = promise0.then;
				promise0.then = function () {
					count++;
					var next = then0.apply(promise0, arguments);
					next.then(complete, function (e) {
						complete();
						if (count === 0) throw e;
					});
					return finalize(next);
				};
				return promise0;
			};
		}
		function normalize(args, extra) {
			if (typeof args === "string") {
				var url = args;
				args = extra || {};
				if (args.url == null) args.url = url;
			}
			return args;
		}
		function request(args, extra) {
			var finalize = finalizer();
			args = normalize(args, extra);
			var promise0 = new Promise(function (resolve, reject) {
				if (args.method == null) args.method = "GET";
				args.method = args.method.toUpperCase();
				var useBody = args.method === "GET" || args.method === "TRACE" ? false : typeof args.useBody === "boolean" ? args.useBody : true;
				if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function (value) {
					return value;
				} : JSON.stringify;
				if (typeof args.deserialize !== "function") args.deserialize = deserialize;
				if (typeof args.extract !== "function") args.extract = extract;
				args.url = interpolate(args.url, args.data);
				if (useBody) args.data = args.serialize(args.data);else args.url = assemble(args.url, args.data);
				var xhr = new $window.XMLHttpRequest(),
				    aborted = false,
				    _abort = xhr.abort;
				xhr.abort = function abort() {
					aborted = true;
					_abort.call(xhr);
				};
				xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);
				if (args.serialize === JSON.stringify && useBody) {
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				}
				if (args.deserialize === deserialize) {
					xhr.setRequestHeader("Accept", "application/json, text/*");
				}
				if (args.withCredentials) xhr.withCredentials = args.withCredentials;
				for (var key in args.headers) {
					if ({}.hasOwnProperty.call(args.headers, key)) {
						xhr.setRequestHeader(key, args.headers[key]);
					}
				}if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr;
				xhr.onreadystatechange = function () {
					// Don't throw errors on xhr.abort().
					if (aborted) return;
					if (xhr.readyState === 4) {
						try {
							var response = args.extract !== extract ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args));
							if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
								resolve(cast(args.type, response));
							} else {
								var error = new Error(xhr.responseText);
								for (var key in response) {
									error[key] = response[key];
								}reject(error);
							}
						} catch (e) {
							reject(e);
						}
					}
				};
				if (useBody && args.data != null) xhr.send(args.data);else xhr.send();
			});
			return args.background === true ? promise0 : finalize(promise0);
		}
		function jsonp(args, extra) {
			var finalize = finalizer();
			args = normalize(args, extra);
			var promise0 = new Promise(function (resolve, reject) {
				var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++;
				var script = $window.document.createElement("script");
				$window[callbackName] = function (data) {
					script.parentNode.removeChild(script);
					resolve(cast(args.type, data));
					delete $window[callbackName];
				};
				script.onerror = function () {
					script.parentNode.removeChild(script);
					reject(new Error("JSONP request failed"));
					delete $window[callbackName];
				};
				if (args.data == null) args.data = {};
				args.url = interpolate(args.url, args.data);
				args.data[args.callbackKey || "callback"] = callbackName;
				script.src = assemble(args.url, args.data);
				$window.document.documentElement.appendChild(script);
			});
			return args.background === true ? promise0 : finalize(promise0);
		}
		function interpolate(url, data) {
			if (data == null) return url;
			var tokens = url.match(/:[^\/]+/gi) || [];
			for (var i = 0; i < tokens.length; i++) {
				var key = tokens[i].slice(1);
				if (data[key] != null) {
					url = url.replace(tokens[i], data[key]);
				}
			}
			return url;
		}
		function assemble(url, data) {
			var querystring = buildQueryString(data);
			if (querystring !== "") {
				var prefix = url.indexOf("?") < 0 ? "?" : "&";
				url += prefix + querystring;
			}
			return url;
		}
		function deserialize(data) {
			try {
				return data !== "" ? JSON.parse(data) : null;
			} catch (e) {
				throw new Error(data);
			}
		}
		function extract(xhr) {
			return xhr.responseText;
		}
		function cast(type0, data) {
			if (typeof type0 === "function") {
				if (Array.isArray(data)) {
					for (var i = 0; i < data.length; i++) {
						data[i] = new type0(data[i]);
					}
				} else return new type0(data);
			}
			return data;
		}
		return { request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback };
	};
	var requestService = _8(window, PromisePolyfill);
	var coreRenderer = function coreRenderer($window) {
		var $doc = $window.document;
		var $emptyFragment = $doc.createDocumentFragment();
		var onevent;
		function setEventCallback(callback) {
			return onevent = callback;
		}
		//create
		function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					createNode(parent, vnode, hooks, ns, nextSibling);
				}
			}
		}
		function createNode(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag;
			if (typeof tag === "string") {
				vnode.state = {};
				if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
				switch (tag) {
					case "#":
						return createText(parent, vnode, nextSibling);
					case "<":
						return createHTML(parent, vnode, nextSibling);
					case "[":
						return createFragment(parent, vnode, hooks, ns, nextSibling);
					default:
						return createElement(parent, vnode, hooks, ns, nextSibling);
				}
			} else return createComponent(parent, vnode, hooks, ns, nextSibling);
		}
		function createText(parent, vnode, nextSibling) {
			vnode.dom = $doc.createTextNode(vnode.children);
			insertNode(parent, vnode.dom, nextSibling);
			return vnode.dom;
		}
		function createHTML(parent, vnode, nextSibling) {
			var match1 = vnode.children.match(/^\s*?<(\w+)/im) || [];
			var parent1 = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" }[match1[1]] || "div";
			var temp = $doc.createElement(parent1);
			temp.innerHTML = vnode.children;
			vnode.dom = temp.firstChild;
			vnode.domSize = temp.childNodes.length;
			var fragment = $doc.createDocumentFragment();
			var child;
			while (child = temp.firstChild) {
				fragment.appendChild(child);
			}
			insertNode(parent, fragment, nextSibling);
			return fragment;
		}
		function createFragment(parent, vnode, hooks, ns, nextSibling) {
			var fragment = $doc.createDocumentFragment();
			if (vnode.children != null) {
				var children = vnode.children;
				createNodes(fragment, children, 0, children.length, hooks, null, ns);
			}
			vnode.dom = fragment.firstChild;
			vnode.domSize = fragment.childNodes.length;
			insertNode(parent, fragment, nextSibling);
			return fragment;
		}
		function createElement(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag;
			switch (vnode.tag) {
				case "svg":
					ns = "http://www.w3.org/2000/svg";break;
				case "math":
					ns = "http://www.w3.org/1998/Math/MathML";break;
			}
			var attrs2 = vnode.attrs;
			var is = attrs2 && attrs2.is;
			var element = ns ? is ? $doc.createElementNS(ns, tag, { is: is }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, { is: is }) : $doc.createElement(tag);
			vnode.dom = element;
			if (attrs2 != null) {
				setAttrs(vnode, attrs2, ns);
			}
			insertNode(parent, element, nextSibling);
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode);
			} else {
				if (vnode.text != null) {
					if (vnode.text !== "") element.textContent = vnode.text;else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
				}
				if (vnode.children != null) {
					var children = vnode.children;
					createNodes(element, children, 0, children.length, hooks, null, ns);
					setLateAttrs(vnode);
				}
			}
			return element;
		}
		function initComponent(vnode, hooks) {
			var sentinel;
			if (typeof vnode.tag.view === "function") {
				vnode.state = Object.create(vnode.tag);
				sentinel = vnode.state.view;
				if (sentinel.$$reentrantLock$$ != null) return $emptyFragment;
				sentinel.$$reentrantLock$$ = true;
			} else {
				vnode.state = void 0;
				sentinel = vnode.tag;
				if (sentinel.$$reentrantLock$$ != null) return $emptyFragment;
				sentinel.$$reentrantLock$$ = true;
				vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
			}
			vnode._state = vnode.state;
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
			initLifecycle(vnode._state, vnode, hooks);
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode));
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
			sentinel.$$reentrantLock$$ = null;
		}
		function createComponent(parent, vnode, hooks, ns, nextSibling) {
			initComponent(vnode, hooks);
			if (vnode.instance != null) {
				var element = createNode(parent, vnode.instance, hooks, ns, nextSibling);
				vnode.dom = vnode.instance.dom;
				vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
				insertNode(parent, element, nextSibling);
				return element;
			} else {
				vnode.domSize = 0;
				return $emptyFragment;
			}
		}
		//update
		function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
			if (old === vnodes || old == null && vnodes == null) return;else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, undefined);else if (vnodes == null) removeNodes(old, 0, old.length, vnodes);else {
				if (old.length === vnodes.length) {
					var isUnkeyed = false;
					for (var i = 0; i < vnodes.length; i++) {
						if (vnodes[i] != null && old[i] != null) {
							isUnkeyed = vnodes[i].key == null && old[i].key == null;
							break;
						}
					}
					if (isUnkeyed) {
						for (var i = 0; i < old.length; i++) {
							if (old[i] === vnodes[i]) continue;else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling));else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes);else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns);
						}
						return;
					}
				}
				recycling = recycling || isRecyclable(old, vnodes);
				if (recycling) {
					var pool = old.pool;
					old = old.concat(old.pool);
				}
				var oldStart = 0,
				    start = 0,
				    oldEnd = old.length - 1,
				    end = vnodes.length - 1,
				    map;
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldStart],
					    v = vnodes[start];
					if (o === v && !recycling) oldStart++, start++;else if (o == null) oldStart++;else if (v == null) start++;else if (o.key === v.key) {
						var shouldRecycle = pool != null && oldStart >= old.length - pool.length || pool == null && recycling;
						oldStart++, start++;
						updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns);
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
					} else {
						var o = old[oldEnd];
						if (o === v && !recycling) oldEnd--, start++;else if (o == null) oldEnd--;else if (v == null) start++;else if (o.key === v.key) {
							var shouldRecycle = pool != null && oldEnd >= old.length - pool.length || pool == null && recycling;
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns);
							if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling));
							oldEnd--, start++;
						} else break;
					}
				}
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldEnd],
					    v = vnodes[end];
					if (o === v && !recycling) oldEnd--, end--;else if (o == null) oldEnd--;else if (v == null) end--;else if (o.key === v.key) {
						var shouldRecycle = pool != null && oldEnd >= old.length - pool.length || pool == null && recycling;
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns);
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
						if (o.dom != null) nextSibling = o.dom;
						oldEnd--, end--;
					} else {
						if (!map) map = getKeyMap(old, oldEnd);
						if (v != null) {
							var oldIndex = map[v.key];
							if (oldIndex != null) {
								var movable = old[oldIndex];
								var shouldRecycle = pool != null && oldIndex >= old.length - pool.length || pool == null && recycling;
								updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
								insertNode(parent, toFragment(movable), nextSibling);
								old[oldIndex].skip = true;
								if (movable.dom != null) nextSibling = movable.dom;
							} else {
								var dom = createNode(parent, v, hooks, undefined, nextSibling);
								nextSibling = dom;
							}
						}
						end--;
					}
					if (end < start) break;
				}
				createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
				removeNodes(old, oldStart, oldEnd + 1, vnodes);
			}
		}
		function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			var oldTag = old.tag,
			    tag = vnode.tag;
			if (oldTag === tag) {
				vnode.state = old.state;
				vnode._state = old._state;
				vnode.events = old.events;
				if (!recycling && shouldNotUpdate(vnode, old)) return;
				if (typeof oldTag === "string") {
					if (vnode.attrs != null) {
						if (recycling) {
							vnode.state = {};
							initLifecycle(vnode.attrs, vnode, hooks);
						} else updateLifecycle(vnode.attrs, vnode, hooks);
					}
					switch (oldTag) {
						case "#":
							updateText(old, vnode);break;
						case "<":
							updateHTML(parent, old, vnode, nextSibling);break;
						case "[":
							updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns);break;
						default:
							updateElement(old, vnode, recycling, hooks, ns);
					}
				} else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns);
			} else {
				removeNode(old, null);
				createNode(parent, vnode, hooks, ns, nextSibling);
			}
		}
		function updateText(old, vnode) {
			if (old.children.toString() !== vnode.children.toString()) {
				old.dom.nodeValue = vnode.children;
			}
			vnode.dom = old.dom;
		}
		function updateHTML(parent, old, vnode, nextSibling) {
			if (old.children !== vnode.children) {
				toFragment(old);
				createHTML(parent, vnode, nextSibling);
			} else vnode.dom = old.dom, vnode.domSize = old.domSize;
		}
		function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
			updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns);
			var domSize = 0,
			    children = vnode.children;
			vnode.dom = null;
			if (children != null) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i];
					if (child != null && child.dom != null) {
						if (vnode.dom == null) vnode.dom = child.dom;
						domSize += child.domSize || 1;
					}
				}
				if (domSize !== 1) vnode.domSize = domSize;
			}
		}
		function updateElement(old, vnode, recycling, hooks, ns) {
			var element = vnode.dom = old.dom;
			switch (vnode.tag) {
				case "svg":
					ns = "http://www.w3.org/2000/svg";break;
				case "math":
					ns = "http://www.w3.org/1998/Math/MathML";break;
			}
			if (vnode.tag === "textarea") {
				if (vnode.attrs == null) vnode.attrs = {};
				if (vnode.text != null) {
					vnode.attrs.value = vnode.text; //FIXME handle0 multiple children
					vnode.text = undefined;
				}
			}
			updateAttrs(vnode, old.attrs, vnode.attrs, ns);
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode);
			} else if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text;
			} else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)];
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
				updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns);
			}
		}
		function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			if (recycling) {
				initComponent(vnode, hooks);
			} else {
				vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode));
				if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
				if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
				updateLifecycle(vnode._state, vnode, hooks);
			}
			if (vnode.instance != null) {
				if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns);
				vnode.dom = vnode.instance.dom;
				vnode.domSize = vnode.instance.domSize;
			} else if (old.instance != null) {
				removeNode(old.instance, null);
				vnode.dom = undefined;
				vnode.domSize = 0;
			} else {
				vnode.dom = old.dom;
				vnode.domSize = old.domSize;
			}
		}
		function isRecyclable(old, vnodes) {
			if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
				var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0;
				var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0;
				var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0;
				if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
					return true;
				}
			}
			return false;
		}
		function getKeyMap(vnodes, end) {
			var map = {},
			    i = 0;
			for (var i = 0; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					var key2 = vnode.key;
					if (key2 != null) map[key2] = i;
				}
			}
			return map;
		}
		function toFragment(vnode) {
			var count0 = vnode.domSize;
			if (count0 != null || vnode.dom == null) {
				var fragment = $doc.createDocumentFragment();
				if (count0 > 0) {
					var dom = vnode.dom;
					while (--count0) {
						fragment.appendChild(dom.nextSibling);
					}fragment.insertBefore(dom, fragment.firstChild);
				}
				return fragment;
			} else return vnode.dom;
		}
		function getNextSibling(vnodes, i, nextSibling) {
			for (; i < vnodes.length; i++) {
				if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
			}
			return nextSibling;
		}
		function insertNode(parent, dom, nextSibling) {
			if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling);else parent.appendChild(dom);
		}
		function setContentEditable(vnode) {
			var children = vnode.children;
			if (children != null && children.length === 1 && children[0].tag === "<") {
				var content = children[0].children;
				if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
			} else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted");
		}
		//remove
		function removeNodes(vnodes, start, end, context) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i];
				if (vnode != null) {
					if (vnode.skip) vnode.skip = false;else removeNode(vnode, context);
				}
			}
		}
		function removeNode(vnode, context) {
			var expected = 1,
			    called = 0;
			if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
				var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode);
				if (result != null && typeof result.then === "function") {
					expected++;
					result.then(continuation, continuation);
				}
			}
			if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
				var result = vnode._state.onbeforeremove.call(vnode.state, vnode);
				if (result != null && typeof result.then === "function") {
					expected++;
					result.then(continuation, continuation);
				}
			}
			continuation();
			function continuation() {
				if (++called === expected) {
					onremove(vnode);
					if (vnode.dom) {
						var count0 = vnode.domSize || 1;
						if (count0 > 1) {
							var dom = vnode.dom;
							while (--count0) {
								removeNodeFromDOM(dom.nextSibling);
							}
						}
						removeNodeFromDOM(vnode.dom);
						if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") {
							//TODO test custom elements
							if (!context.pool) context.pool = [vnode];else context.pool.push(vnode);
						}
					}
				}
			}
		}
		function removeNodeFromDOM(node) {
			var parent = node.parentNode;
			if (parent != null) parent.removeChild(node);
		}
		function onremove(vnode) {
			if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode);
			if (typeof vnode.tag !== "string" && typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode);
			if (vnode.instance != null) onremove(vnode.instance);else {
				var children = vnode.children;
				if (Array.isArray(children)) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i];
						if (child != null) onremove(child);
					}
				}
			}
		}
		//attrs2
		function setAttrs(vnode, attrs2, ns) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, null, attrs2[key2], ns);
			}
		}
		function setAttr(vnode, key2, old, value, ns) {
			var element = vnode.dom;
			if (key2 === "key" || key2 === "is" || old === value && !isFormAttribute(vnode, key2) && (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return;
			var nsLastIndex = key2.indexOf(":");
			if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
				element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value);
			} else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value);else if (key2 === "style") updateStyle(element, old, value);else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if (vnode.tag === "input" && key2 === "value" && vnode.dom.value == value && vnode.dom === $doc.activeElement) return;
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && key2 === "value" && vnode.dom.value == value && vnode.dom === $doc.activeElement) return;
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && key2 === "value" && vnode.dom.value == value) return;
				// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
				if (vnode.tag === "input" && key2 === "type") {
					element.setAttribute(key2, value);
					return;
				}
				element[key2] = value;
			} else {
				if (typeof value === "boolean") {
					if (value) element.setAttribute(key2, "");else element.removeAttribute(key2);
				} else element.setAttribute(key2 === "className" ? "class" : key2, value);
			}
		}
		function setLateAttrs(vnode) {
			var attrs2 = vnode.attrs;
			if (vnode.tag === "select" && attrs2 != null) {
				if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined);
				if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined);
			}
		}
		function updateAttrs(vnode, old, attrs2, ns) {
			if (attrs2 != null) {
				for (var key2 in attrs2) {
					setAttr(vnode, key2, old && old[key2], attrs2[key2], ns);
				}
			}
			if (old != null) {
				for (var key2 in old) {
					if (attrs2 == null || !(key2 in attrs2)) {
						if (key2 === "className") key2 = "class";
						if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined);else if (key2 !== "key") vnode.dom.removeAttribute(key2);
					}
				}
			}
		}
		function isFormAttribute(vnode, attr) {
			return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement;
		}
		function isLifecycleMethod(attr) {
			return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
		}
		function isAttribute(attr) {
			return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"; // || attr === "type"
		}
		function isCustomElement(vnode) {
			return vnode.attrs.is || vnode.tag.indexOf("-") > -1;
		}
		function hasIntegrationMethods(source) {
			return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove);
		}
		//style
		function updateStyle(element, old, style) {
			if (old === style) element.style.cssText = "", old = null;
			if (style == null) element.style.cssText = "";else if (typeof style === "string") element.style.cssText = style;else {
				if (typeof old === "string") element.style.cssText = "";
				for (var key2 in style) {
					element.style[key2] = style[key2];
				}
				if (old != null && typeof old !== "string") {
					for (var key2 in old) {
						if (!(key2 in style)) element.style[key2] = "";
					}
				}
			}
		}
		//event
		function updateEvent(vnode, key2, value) {
			var element = vnode.dom;
			var callback = typeof onevent !== "function" ? value : function (e) {
				var result = value.call(element, e);
				onevent.call(element, e);
				return result;
			};
			if (key2 in element) element[key2] = typeof value === "function" ? callback : null;else {
				var eventName = key2.slice(2);
				if (vnode.events === undefined) vnode.events = {};
				if (vnode.events[key2] === callback) return;
				if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false);
				if (typeof value === "function") {
					vnode.events[key2] = callback;
					element.addEventListener(eventName, vnode.events[key2], false);
				}
			}
		}
		//lifecycle
		function initLifecycle(source, vnode, hooks) {
			if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode);
			if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode));
		}
		function updateLifecycle(source, vnode, hooks) {
			if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode));
		}
		function shouldNotUpdate(vnode, old) {
			var forceVnodeUpdate, forceComponentUpdate;
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old);
			if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old);
			if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
				vnode.dom = old.dom;
				vnode.domSize = old.domSize;
				vnode.instance = old.instance;
				return true;
			}
			return false;
		}
		function render(dom, vnodes) {
			if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
			var hooks = [];
			var active = $doc.activeElement;
			// First time0 rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = "";
			if (!Array.isArray(vnodes)) vnodes = [vnodes];
			updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, undefined);
			dom.vnodes = vnodes;
			for (var i = 0; i < hooks.length; i++) {
				hooks[i]();
			}if ($doc.activeElement !== active) active.focus();
		}
		return { render: render, setEventCallback: setEventCallback };
	};
	function throttle(callback) {
		//60fps translates to 16.6ms, round it down since setTimeout requires int
		var time = 16;
		var last = 0,
		    pending = null;
		var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout;
		return function () {
			var now = Date.now();
			if (last === 0 || now - last >= time) {
				last = now;
				callback();
			} else if (pending === null) {
				pending = timeout(function () {
					pending = null;
					callback();
					last = Date.now();
				}, time - (now - last));
			}
		};
	}
	var _11 = function _11($window) {
		var renderService = coreRenderer($window);
		renderService.setEventCallback(function (e) {
			if (e.redraw !== false) redraw();
		});
		var callbacks = [];
		function subscribe(key1, callback) {
			unsubscribe(key1);
			callbacks.push(key1, throttle(callback));
		}
		function unsubscribe(key1) {
			var index = callbacks.indexOf(key1);
			if (index > -1) callbacks.splice(index, 2);
		}
		function redraw() {
			for (var i = 1; i < callbacks.length; i += 2) {
				callbacks[i]();
			}
		}
		return { subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render };
	};
	var redrawService = _11(window);
	requestService.setCompletionCallback(redrawService.redraw);
	var _16 = function _16(redrawService0) {
		return function (root, component) {
			if (component === null) {
				redrawService0.render(root, []);
				redrawService0.unsubscribe(root);
				return;
			}

			if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode");

			var run0 = function run0() {
				redrawService0.render(root, Vnode(component));
			};
			redrawService0.subscribe(root, run0);
			redrawService0.redraw();
		};
	};
	m.mount = _16(redrawService);
	var Promise = PromisePolyfill;
	var parseQueryString = function parseQueryString(string) {
		if (string === "" || string == null) return {};
		if (string.charAt(0) === "?") string = string.slice(1);
		var entries = string.split("&"),
		    data0 = {},
		    counters = {};
		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i].split("=");
			var key5 = decodeURIComponent(entry[0]);
			var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";
			if (value === "true") value = true;else if (value === "false") value = false;
			var levels = key5.split(/\]\[?|\[/);
			var cursor = data0;
			if (key5.indexOf("[") > -1) levels.pop();
			for (var j = 0; j < levels.length; j++) {
				var level = levels[j],
				    nextLevel = levels[j + 1];
				var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
				var isValue = j === levels.length - 1;
				if (level === "") {
					var key5 = levels.slice(0, j).join();
					if (counters[key5] == null) counters[key5] = 0;
					level = counters[key5]++;
				}
				if (cursor[level] == null) {
					cursor[level] = isValue ? value : isNumber ? [] : {};
				}
				cursor = cursor[level];
			}
		}
		return data0;
	};
	var coreRouter = function coreRouter($window) {
		var supportsPushState = typeof $window.history.pushState === "function";
		var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout;
		function normalize1(fragment0) {
			var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);
			if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data;
			return data;
		}
		var asyncId;
		function debounceAsync(callback0) {
			return function () {
				if (asyncId != null) return;
				asyncId = callAsync0(function () {
					asyncId = null;
					callback0();
				});
			};
		}
		function parsePath(path, queryData, hashData) {
			var queryIndex = path.indexOf("?");
			var hashIndex = path.indexOf("#");
			var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length;
			if (queryIndex > -1) {
				var queryEnd = hashIndex > -1 ? hashIndex : path.length;
				var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd));
				for (var key4 in queryParams) {
					queryData[key4] = queryParams[key4];
				}
			}
			if (hashIndex > -1) {
				var hashParams = parseQueryString(path.slice(hashIndex + 1));
				for (var key4 in hashParams) {
					hashData[key4] = hashParams[key4];
				}
			}
			return path.slice(0, pathEnd);
		}
		var router = { prefix: "#!" };
		router.getPath = function () {
			var type2 = router.prefix.charAt(0);
			switch (type2) {
				case "#":
					return normalize1("hash").slice(router.prefix.length);
				case "?":
					return normalize1("search").slice(router.prefix.length) + normalize1("hash");
				default:
					return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash");
			}
		};
		router.setPath = function (path, data, options) {
			var queryData = {},
			    hashData = {};
			path = parsePath(path, queryData, hashData);
			if (data != null) {
				for (var key4 in data) {
					queryData[key4] = data[key4];
				}path = path.replace(/:([^\/]+)/g, function (match2, token) {
					delete queryData[token];
					return data[token];
				});
			}
			var query = buildQueryString(queryData);
			if (query) path += "?" + query;
			var hash = buildQueryString(hashData);
			if (hash) path += "#" + hash;
			if (supportsPushState) {
				var state = options ? options.state : null;
				var title = options ? options.title : null;
				$window.onpopstate();
				if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path);else $window.history.pushState(state, title, router.prefix + path);
			} else $window.location.href = router.prefix + path;
		};
		router.defineRoutes = function (routes, resolve, reject) {
			function resolveRoute() {
				var path = router.getPath();
				var params = {};
				var pathname = parsePath(path, params, params);
				var state = $window.history.state;
				if (state != null) {
					for (var k in state) {
						params[k] = state[k];
					}
				}
				for (var route0 in routes) {
					var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");
					if (matcher.test(pathname)) {
						pathname.replace(matcher, function () {
							var keys = route0.match(/:[^\/]+/g) || [];
							var values = [].slice.call(arguments, 1, -2);
							for (var i = 0; i < keys.length; i++) {
								params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i]);
							}
							resolve(routes[route0], params, path, route0);
						});
						return;
					}
				}
				reject(path, params);
			}
			if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute);else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute;
			resolveRoute();
		};
		return router;
	};
	var _20 = function _20($window, redrawService0) {
		var routeService = coreRouter($window);
		var identity = function identity(v) {
			return v;
		};
		var render1, component, attrs3, currentPath, _lastUpdate;
		var route = function route(root, defaultRoute, routes) {
			if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
			var run1 = function run1() {
				if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)));
			};
			var bail = function bail(path) {
				if (path !== defaultRoute) routeService.setPath(defaultRoute, null, { replace: true });else throw new Error("Could not resolve default route " + defaultRoute);
			};
			routeService.defineRoutes(routes, function (payload, params, path) {
				var update = _lastUpdate = function lastUpdate(routeResolver, comp) {
					if (update !== _lastUpdate) return;
					component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
					attrs3 = params, currentPath = path, _lastUpdate = null;
					render1 = (routeResolver.render || identity).bind(routeResolver);
					run1();
				};
				if (payload.view || typeof payload === "function") update({}, payload);else {
					if (payload.onmatch) {
						Promise.resolve(payload.onmatch(params, path)).then(function (resolved) {
							update(payload, resolved);
						}, bail);
					} else update(payload, "div");
				}
			}, bail);
			redrawService0.subscribe(root, run1);
		};
		route.set = function (path, data, options) {
			if (_lastUpdate != null) options = { replace: true };
			_lastUpdate = null;
			routeService.setPath(path, data, options);
		};
		route.get = function () {
			return currentPath;
		};
		route.prefix = function (prefix0) {
			routeService.prefix = prefix0;
		};
		route.link = function (vnode1) {
			vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href);
			vnode1.dom.onclick = function (e) {
				if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return;
				e.preventDefault();
				e.redraw = false;
				var href = this.getAttribute("href");
				if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length);
				route.set(href, undefined, undefined);
			};
		};
		route.param = function (key3) {
			if (typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3];
			return attrs3;
		};
		return route;
	};
	m.route = _20(window, redrawService);
	m.withAttr = function (attrName, callback1, context) {
		return function (e) {
			callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName));
		};
	};
	var _28 = coreRenderer(window);
	m.render = _28.render;
	m.redraw = redrawService.redraw;
	m.request = requestService.request;
	m.jsonp = requestService.jsonp;
	m.parseQueryString = parseQueryString;
	m.buildQueryString = buildQueryString;
	m.version = "1.1.1";
	m.vnode = Vnode;
	if (true) module["exports"] = m;else window.m = m;
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8).setImmediate, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(9);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(10)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var curryN = __webpack_require__(12);

// Utility
function isFunction(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}
function trueFn() {
  return true;
}

// Globals
var toUpdate = [];
var inStream;
var order = [];
var orderNextIdx = -1;
var flushing = false;

/** @namespace */
var flyd = {};

// /////////////////////////// API ///////////////////////////////// //

/**
 * Creates a new stream
 *
 * __Signature__: `a -> Stream a`
 *
 * @name flyd.stream
 * @param {*} initialValue - (Optional) the initial value of the stream
 * @return {stream} the stream
 *
 * @example
 * var n = flyd.stream(1); // Stream with initial value `1`
 * var s = flyd.stream(); // Stream with no initial value
 */
flyd.stream = function (initialValue) {
  var endStream = createDependentStream([], trueFn);
  var s = createStream();
  s.end = endStream;
  s.fnArgs = [];
  endStream.listeners.push(s);
  s.toJSON = function () {
    return s();
  };
  if (arguments.length > 0) s(initialValue);
  return s;
};

/**
 * Create a new dependent stream
 *
 * __Signature__: `(...Stream * -> Stream b -> b) -> [Stream *] -> Stream b`
 *
 * @name flyd.combine
 * @param {Function} fn - the function used to combine the streams
 * @param {Array<stream>} dependencies - the streams that this one depends on
 * @return {stream} the dependent stream
 *
 * @example
 * var n1 = flyd.stream(0);
 * var n2 = flyd.stream(0);
 * var max = flyd.combine(function(n1, n2, self, changed) {
 *   return n1() > n2() ? n1() : n2();
 * }, [n1, n2]);
 */
flyd.combine = curryN(2, combine);
function combine(fn, streams) {
  var i, s, deps, depEndStreams;
  var endStream = createDependentStream([], trueFn);
  deps = [];depEndStreams = [];
  for (i = 0; i < streams.length; ++i) {
    if (streams[i] !== undefined) {
      deps.push(streams[i]);
      if (streams[i].end !== undefined) depEndStreams.push(streams[i].end);
    }
  }
  s = createDependentStream(deps, fn);
  s.depsChanged = [];
  s.fnArgs = s.deps.concat([s, s.depsChanged]);
  s.end = endStream;
  endStream.listeners.push(s);
  addListeners(depEndStreams, endStream);
  endStream.deps = depEndStreams;
  updateStream(s);
  return s;
}

/**
 * Returns `true` if the supplied argument is a Flyd stream and `false` otherwise.
 *
 * __Signature__: `* -> Boolean`
 *
 * @name flyd.isStream
 * @param {*} value - the value to test
 * @return {Boolean} `true` if is a Flyd streamn, `false` otherwise
 *
 * @example
 * var s = flyd.stream(1);
 * var n = 1;
 * flyd.isStream(s); //=> true
 * flyd.isStream(n); //=> false
 */
flyd.isStream = function (stream) {
  return isFunction(stream) && 'hasVal' in stream;
};

/**
 * Invokes the body (the function to calculate the value) of a dependent stream
 *
 * By default the body of a dependent stream is only called when all the streams
 * upon which it depends has a value. `immediate` can circumvent this behaviour.
 * It immediately invokes the body of a dependent stream.
 *
 * __Signature__: `Stream a -> Stream a`
 *
 * @name flyd.immediate
 * @param {stream} stream - the dependent stream
 * @return {stream} the same stream
 *
 * @example
 * var s = flyd.stream();
 * var hasItems = flyd.immediate(flyd.combine(function(s) {
 *   return s() !== undefined && s().length > 0;
 * }, [s]);
 * console.log(hasItems()); // logs `false`. Had `immediate` not been
 *                          // used `hasItems()` would've returned `undefined`
 * s([1]);
 * console.log(hasItems()); // logs `true`.
 * s([]);
 * console.log(hasItems()); // logs `false`.
 */
flyd.immediate = function (s) {
  if (s.depsMet === false) {
    s.depsMet = true;
    updateStream(s);
  }
  return s;
};

/**
 * Changes which `endsStream` should trigger the ending of `s`.
 *
 * __Signature__: `Stream a -> Stream b -> Stream b`
 *
 * @name flyd.endsOn
 * @param {stream} endStream - the stream to trigger the ending
 * @param {stream} stream - the stream to be ended by the endStream
 * @param {stream} the stream modified to be ended by endStream
 *
 * @example
 * var n = flyd.stream(1);
 * var killer = flyd.stream();
 * // `double` ends when `n` ends or when `killer` emits any value
 * var double = flyd.endsOn(flyd.merge(n.end, killer), flyd.combine(function(n) {
 *   return 2 * n();
 * }, [n]);
*/
flyd.endsOn = function (endS, s) {
  detachDeps(s.end);
  endS.listeners.push(s.end);
  s.end.deps.push(endS);
  return s;
};

/**
 * Map a stream
 *
 * Returns a new stream consisting of every value from `s` passed through
 * `fn`. I.e. `map` creates a new stream that listens to `s` and
 * applies `fn` to every new value.
 * __Signature__: `(a -> result) -> Stream a -> Stream result`
 *
 * @name flyd.map
 * @param {Function} fn - the function that produces the elements of the new stream
 * @param {stream} stream - the stream to map
 * @return {stream} a new stream with the mapped values
 *
 * @example
 * var numbers = flyd.stream(0);
 * var squaredNumbers = flyd.map(function(n) { return n*n; }, numbers);
 */
// Library functions use self callback to accept (null, undefined) update triggers.
flyd.map = curryN(2, function (f, s) {
  return combine(function (s, self) {
    self(f(s.val));
  }, [s]);
});

/**
 * Listen to stream events
 *
 * Similar to `map` except that the returned stream is empty. Use `on` for doing
 * side effects in reaction to stream changes. Use the returned stream only if you
 * need to manually end it.
 *
 * __Signature__: `(a -> result) -> Stream a -> Stream undefined`
 *
 * @name flyd.on
 * @param {Function} cb - the callback
 * @param {stream} stream - the stream
 * @return {stream} an empty stream (can be ended)
 */
flyd.on = curryN(2, function (f, s) {
  return combine(function (s) {
    f(s.val);
  }, [s]);
});

/**
 * Creates a new stream with the results of calling the function on every incoming
 * stream with and accumulator and the incoming value.
 *
 * __Signature__: `(a -> b -> a) -> a -> Stream b -> Stream a`
 *
 * @name flyd.scan
 * @param {Function} fn - the function to call
 * @param {*} val - the initial value of the accumulator
 * @param {stream} stream - the stream source
 * @return {stream} the new stream
 *
 * @example
 * var numbers = flyd.stream();
 * var sum = flyd.scan(function(sum, n) { return sum+n; }, 0, numbers);
 * numbers(2)(3)(5);
 * sum(); // 10
 */
flyd.scan = curryN(3, function (f, acc, s) {
  var ns = combine(function (s, self) {
    self(acc = f(acc, s.val));
  }, [s]);
  if (!ns.hasVal) ns(acc);
  return ns;
});

/**
 * Creates a new stream down which all values from both `stream1` and `stream2`
 * will be sent.
 *
 * __Signature__: `Stream a -> Stream a -> Stream a`
 *
 * @name flyd.merge
 * @param {stream} source1 - one stream to be merged
 * @param {stream} source2 - the other stream to be merged
 * @return {stream} a stream with the values from both sources
 *
 * @example
 * var btn1Clicks = flyd.stream();
 * button1Elm.addEventListener(btn1Clicks);
 * var btn2Clicks = flyd.stream();
 * button2Elm.addEventListener(btn2Clicks);
 * var allClicks = flyd.merge(btn1Clicks, btn2Clicks);
 */
flyd.merge = curryN(2, function (s1, s2) {
  var s = flyd.immediate(combine(function (s1, s2, self, changed) {
    if (changed[0]) {
      self(changed[0]());
    } else if (s1.hasVal) {
      self(s1.val);
    } else if (s2.hasVal) {
      self(s2.val);
    }
  }, [s1, s2]));
  flyd.endsOn(combine(function () {
    return true;
  }, [s1.end, s2.end]), s);
  return s;
});

/**
 * Creates a new stream resulting from applying `transducer` to `stream`.
 *
 * __Signature__: `Transducer -> Stream a -> Stream b`
 *
 * @name flyd.transduce
 * @param {Transducer} xform - the transducer transformation
 * @param {stream} source - the stream source
 * @return {stream} the new stream
 *
 * @example
 * var t = require('transducers.js');
 *
 * var results = [];
 * var s1 = flyd.stream();
 * var tx = t.compose(t.map(function(x) { return x * 2; }), t.dedupe());
 * var s2 = flyd.transduce(tx, s1);
 * flyd.combine(function(s2) { results.push(s2()); }, [s2]);
 * s1(1)(1)(2)(3)(3)(3)(4);
 * results; // => [2, 4, 6, 8]
 */
flyd.transduce = curryN(2, function (xform, source) {
  xform = xform(new StreamTransformer());
  return combine(function (source, self) {
    var res = xform['@@transducer/step'](undefined, source.val);
    if (res && res['@@transducer/reduced'] === true) {
      self.end(true);
      return res['@@transducer/value'];
    } else {
      return res;
    }
  }, [source]);
});

/**
 * Returns `fn` curried to `n`. Use this function to curry functions exposed by
 * modules for Flyd.
 *
 * @name flyd.curryN
 * @function
 * @param {Integer} arity - the function arity
 * @param {Function} fn - the function to curry
 * @return {Function} the curried function
 *
 * @example
 * function add(x, y) { return x + y; };
 * var a = flyd.curryN(2, add);
 * a(2)(4) // => 6
 */
flyd.curryN = curryN;

/**
 * Returns a new stream identical to the original except every
 * value will be passed through `f`.
 *
 * _Note:_ This function is included in order to support the fantasy land
 * specification.
 *
 * __Signature__: Called bound to `Stream a`: `(a -> b) -> Stream b`
 *
 * @name stream.map
 * @param {Function} function - the function to apply
 * @return {stream} a new stream with the values mapped
 *
 * @example
 * var numbers = flyd.stream(0);
 * var squaredNumbers = numbers.map(function(n) { return n*n; });
 */
function boundMap(f) {
  return flyd.map(f, this);
}

/**
 * Returns a new stream which is the result of applying the
 * functions from `this` stream to the values in `stream` parameter.
 *
 * `this` stream must be a stream of functions.
 *
 * _Note:_ This function is included in order to support the fantasy land
 * specification.
 *
 * __Signature__: Called bound to `Stream (a -> b)`: `a -> Stream b`
 *
 * @name stream.ap
 * @param {stream} stream - the values stream
 * @return {stream} a new stream with the functions applied to values
 *
 * @example
 * var add = flyd.curryN(2, function(x, y) { return x + y; });
 * var numbers1 = flyd.stream();
 * var numbers2 = flyd.stream();
 * var addToNumbers1 = flyd.map(add, numbers1);
 * var added = addToNumbers1.ap(numbers2);
 */
function ap(s2) {
  var s1 = this;
  return combine(function (s1, s2, self) {
    self(s1.val(s2.val));
  }, [s1, s2]);
}

/**
 * Get a human readable view of a stream
 * @name stream.toString
 * @return {String} the stream string representation
 */
function streamToString() {
  return 'stream(' + this.val + ')';
}

/**
 * @name stream.end
 * @memberof stream
 * A stream that emits `true` when the stream ends. If `true` is pushed down the
 * stream the parent stream ends.
 */

/**
 * @name stream.of
 * @function
 * @memberof stream
 * Returns a new stream with `value` as its initial value. It is identical to
 * calling `flyd.stream` with one argument.
 *
 * __Signature__: Called bound to `Stream (a)`: `b -> Stream b`
 *
 * @param {*} value - the initial value
 * @return {stream} the new stream
 *
 * @example
 * var n = flyd.stream(1);
 * var m = n.of(1);
 */

// /////////////////////////// PRIVATE ///////////////////////////////// //
/**
 * @private
 * Create a stream with no dependencies and no value
 * @return {Function} a flyd stream
 */
function createStream() {
  function s(n) {
    if (arguments.length === 0) return s.val;
    updateStreamValue(s, n);
    return s;
  }
  s.hasVal = false;
  s.val = undefined;
  s.vals = [];
  s.listeners = [];
  s.queued = false;
  s.end = undefined;
  s.map = boundMap;
  s.ap = ap;
  s.of = flyd.stream;
  s.toString = streamToString;
  return s;
}

/**
 * @private
 * Create a dependent stream
 * @param {Array<stream>} dependencies - an array of the streams
 * @param {Function} fn - the function used to calculate the new stream value
 * from the dependencies
 * @return {stream} the created stream
 */
function createDependentStream(deps, fn) {
  var s = createStream();
  s.fn = fn;
  s.deps = deps;
  s.depsMet = false;
  s.depsChanged = deps.length > 0 ? [] : undefined;
  s.shouldUpdate = false;
  addListeners(deps, s);
  return s;
}

/**
 * @private
 * Check if all the dependencies have values
 * @param {stream} stream - the stream to check depencencies from
 * @return {Boolean} `true` if all dependencies have vales, `false` otherwise
 */
function initialDepsNotMet(stream) {
  stream.depsMet = stream.deps.every(function (s) {
    return s.hasVal;
  });
  return !stream.depsMet;
}

/**
 * @private
 * Update a dependent stream using its dependencies in an atomic way
 * @param {stream} stream - the stream to update
 */
function updateStream(s) {
  if (s.depsMet !== true && initialDepsNotMet(s) || s.end !== undefined && s.end.val === true) return;
  if (inStream !== undefined) {
    toUpdate.push(s);
    return;
  }
  inStream = s;
  if (s.depsChanged) s.fnArgs[s.fnArgs.length - 1] = s.depsChanged;
  var returnVal = s.fn.apply(s.fn, s.fnArgs);
  if (returnVal !== undefined) {
    s(returnVal);
  }
  inStream = undefined;
  if (s.depsChanged !== undefined) s.depsChanged = [];
  s.shouldUpdate = false;
  if (flushing === false) flushUpdate();
}

/**
 * @private
 * Update the dependencies of a stream
 * @param {stream} stream
 */
function updateDeps(s) {
  var i, o, list;
  var listeners = s.listeners;
  for (i = 0; i < listeners.length; ++i) {
    list = listeners[i];
    if (list.end === s) {
      endStream(list);
    } else {
      if (list.depsChanged !== undefined) list.depsChanged.push(s);
      list.shouldUpdate = true;
      findDeps(list);
    }
  }
  for (; orderNextIdx >= 0; --orderNextIdx) {
    o = order[orderNextIdx];
    if (o.shouldUpdate === true) updateStream(o);
    o.queued = false;
  }
}

/**
 * @private
 * Add stream dependencies to the global `order` queue.
 * @param {stream} stream
 * @see updateDeps
 */
function findDeps(s) {
  var i;
  var listeners = s.listeners;
  if (s.queued === false) {
    s.queued = true;
    for (i = 0; i < listeners.length; ++i) {
      findDeps(listeners[i]);
    }
    order[++orderNextIdx] = s;
  }
}

/**
 * @private
 */
function flushUpdate() {
  flushing = true;
  while (toUpdate.length > 0) {
    var s = toUpdate.shift();
    if (s.vals.length > 0) s.val = s.vals.shift();
    updateDeps(s);
  }
  flushing = false;
}

/**
 * @private
 * Push down a value into a stream
 * @param {stream} stream
 * @param {*} value
 */
function updateStreamValue(s, n) {
  if (n !== undefined && n !== null && isFunction(n.then)) {
    n.then(s);
    return;
  }
  s.val = n;
  s.hasVal = true;
  if (inStream === undefined) {
    flushing = true;
    updateDeps(s);
    if (toUpdate.length > 0) flushUpdate();else flushing = false;
  } else if (inStream === s) {
    markListeners(s, s.listeners);
  } else {
    s.vals.push(n);
    toUpdate.push(s);
  }
}

/**
 * @private
 */
function markListeners(s, lists) {
  var i, list;
  for (i = 0; i < lists.length; ++i) {
    list = lists[i];
    if (list.end !== s) {
      if (list.depsChanged !== undefined) {
        list.depsChanged.push(s);
      }
      list.shouldUpdate = true;
    } else {
      endStream(list);
    }
  }
}

/**
 * @private
 * Add dependencies to a stream
 * @param {Array<stream>} dependencies
 * @param {stream} stream
 */
function addListeners(deps, s) {
  for (var i = 0; i < deps.length; ++i) {
    deps[i].listeners.push(s);
  }
}

/**
 * @private
 * Removes an stream from a dependency array
 * @param {stream} stream
 * @param {Array<stream>} dependencies
 */
function removeListener(s, listeners) {
  var idx = listeners.indexOf(s);
  listeners[idx] = listeners[listeners.length - 1];
  listeners.length--;
}

/**
 * @private
 * Detach a stream from its dependencies
 * @param {stream} stream
 */
function detachDeps(s) {
  for (var i = 0; i < s.deps.length; ++i) {
    removeListener(s, s.deps[i].listeners);
  }
  s.deps.length = 0;
}

/**
 * @private
 * Ends a stream
 */
function endStream(s) {
  if (s.deps !== undefined) detachDeps(s);
  if (s.end !== undefined) detachDeps(s.end);
}

/**
 * @private
 * transducer stream transformer
 */
function StreamTransformer() {}
StreamTransformer.prototype['@@transducer/init'] = function () {};
StreamTransformer.prototype['@@transducer/result'] = function () {};
StreamTransformer.prototype['@@transducer/step'] = function (s, v) {
  return v;
};

module.exports = flyd;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arity = __webpack_require__(2);
var _curry1 = __webpack_require__(3);
var _curry2 = __webpack_require__(13);
var _curryN = __webpack_require__(14);

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _curry1 = __webpack_require__(3);
var _isPlaceholder = __webpack_require__(0);

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arity = __webpack_require__(2);
var _isPlaceholder = __webpack_require__(0);

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./ace.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./ace.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "/*! ace.css | https://github.com/basscss/ace | MIT License */*{box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,sans-serif;line-height:1.5;margin:0;color:#111;background-color:#fff}img{max-width:100%;height:auto}svg{max-height:100%}a{color:#07c}h1,h2,h3,h4,h5,h6{font-weight:600;line-height:1.25;margin-top:1em;margin-bottom:.5em}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.25rem}h4{font-size:1rem}h5{font-size:.875rem}h6{font-size:.75rem}blockquote,dl,ol,p,pre,ul{margin-top:1em;margin-bottom:1em}code,pre,samp{font-family:Roboto Mono,Source Code Pro,Menlo,Consolas,Liberation Mono,monospace}code,samp{padding:.125em}code,pre,samp{font-size:87.5%}pre{overflow:scroll}blockquote{font-size:1.25rem;font-style:italic;margin-left:0}hr{margin-top:1.5em;margin-bottom:1.5em;border:0;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#ccc}.label{font-size:.875rem;font-weight:700;display:block;margin-bottom:.5rem}.input,.select{height:2.5rem}.input,.select,.textarea{font-family:inherit;font-size:inherit;display:block;width:100%;padding:.5rem;margin-bottom:1rem;border:1px solid #ccc;border-radius:3px;box-sizing:border-box}.input-range{vertical-align:middle;padding-top:.5rem;padding-bottom:.5rem;color:inherit;background-color:transparent;-webkit-appearance:none}.input-range::-webkit-slider-thumb{position:relative;width:.5rem;height:1.25rem;cursor:pointer;margin-top:-.5rem;border-radius:3px;background-color:currentcolor;-webkit-appearance:none}.input-range::-webkit-slider-thumb:before{content:'';display:block;position:absolute;top:-.5rem;left:-.875rem;width:2.25rem;height:2.25rem;opacity:0}.input-range::-moz-range-thumb{width:.5rem;height:1.25rem;cursor:pointer;border-radius:3px;border-color:transparent;border-width:0;background-color:currentcolor}.input-range::-webkit-slider-runnable-track{height:.25rem;cursor:pointer;border-radius:3px;background-color:rgba(0,0,0,.25)}.input-range::-moz-range-track{height:.25rem;cursor:pointer;border-radius:3px;background-color:rgba(0,0,0,.25)}.input-range:focus{outline:none}.progress{display:block;width:100%;height:.5625rem;margin:.5rem 0;overflow:hidden;background-color:rgba(0,0,0,.125);border:0;border-radius:10000px;-webkit-appearance:none}.progress::-webkit-progress-bar{-webkit-appearance:none;background-color:rgba(0,0,0,.125)}.progress::-webkit-progress-value{-webkit-appearance:none;background-color:currentcolor}.progress::-moz-progress-bar{background-color:currentcolor}.btn{font-family:inherit;font-size:inherit;font-weight:700;cursor:pointer;display:inline-block;line-height:1.125rem;padding:.5rem 1rem;margin:0;height:auto;border:1px solid transparent;vertical-align:middle;-webkit-appearance:none;color:inherit;background-color:transparent}.btn,.btn:hover{text-decoration:none}.btn:focus{outline:none;border-color:rgba(0,0,0,.125);box-shadow:0 0 0 3px rgba(0,0,0,.25)}::-moz-focus-inner{border:0;padding:0}.btn-small{padding:.25rem .5rem}.btn-big{padding:1rem 1.25rem}.btn-narrow{padding-left:.5rem;padding-right:.5rem}.btn-primary{color:#fff;background-color:#0074d9;border-radius:3px}.btn-primary:hover{box-shadow:inset 0 0 0 20rem rgba(0,0,0,.0625)}.btn-primary:active{box-shadow:inset 0 0 0 20rem rgba(0,0,0,.125),inset 0 3px 4px 0 rgba(0,0,0,.25),0 0 1px rgba(0,0,0,.125)}.btn-primary.is-disabled,.btn-primary:disabled{opacity:.5}.btn-outline,.btn-outline:hover{border-color:currentcolor}.btn-outline{border-radius:3px}.btn-outline:hover{box-shadow:inset 0 0 0 20rem rgba(0,0,0,.0625)}.btn-outline:active{box-shadow:inset 0 0 0 20rem rgba(0,0,0,.125),inset 0 3px 4px 0 rgba(0,0,0,.25),0 0 1px rgba(0,0,0,.125)}.btn-outline.is-disabled,.btn-outline:disabled{opacity:.5}.lg-media,.md-media,.media,.sm-media{margin-left:-.5rem;margin-right:-.5rem}.media{display:-webkit-box;display:-ms-flexbox;display:flex}.media-center{-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.media-bottom{-webkit-box-align:end;-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end}.media-body,.media-img{padding-left:.5rem;padding-right:.5rem}.media-body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}@media (min-width:40em){.sm-media{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (min-width:52em){.md-media{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (min-width:64em){.lg-media{display:-webkit-box;display:-ms-flexbox;display:flex}}\n\n/*! Basscss | http://basscss.com | MIT License */.h1{font-size:2rem}.h2{font-size:1.5rem}.h3{font-size:1.25rem}.h4{font-size:1rem}.h5{font-size:.875rem}.h6{font-size:.75rem}.font-family-inherit{font-family:inherit}.font-size-inherit{font-size:inherit}.text-decoration-none{text-decoration:none}.bold{font-weight:700}.regular{font-weight:400}.italic{font-style:italic}.caps{text-transform:uppercase;letter-spacing:.2em}.left-align{text-align:left}.center{text-align:center}.right-align{text-align:right}.justify{text-align:justify}.nowrap{white-space:nowrap}.break-word{word-wrap:break-word}.line-height-1{line-height:1}.line-height-2{line-height:1.125}.line-height-3{line-height:1.25}.line-height-4{line-height:1.5}.list-style-none{list-style:none}.underline{text-decoration:underline}.truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.list-reset{list-style:none;padding-left:0}.inline{display:inline}.block{display:block}.inline-block{display:inline-block}.table{display:table}.table-cell{display:table-cell}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.clearfix:after,.clearfix:before{content:\" \";display:table}.clearfix:after{clear:both}.left{float:left}.right{float:right}.fit{max-width:100%}.max-width-1{max-width:24rem}.max-width-2{max-width:32rem}.max-width-3{max-width:48rem}.max-width-4{max-width:64rem}.border-box{box-sizing:border-box}.align-baseline{vertical-align:baseline}.align-top{vertical-align:top}.align-middle{vertical-align:middle}.align-bottom{vertical-align:bottom}.m0{margin:0}.mt0{margin-top:0}.mr0{margin-right:0}.mb0{margin-bottom:0}.ml0,.mx0{margin-left:0}.mx0{margin-right:0}.my0{margin-top:0;margin-bottom:0}.m1{margin:.5rem}.mt1{margin-top:.5rem}.mr1{margin-right:.5rem}.mb1{margin-bottom:.5rem}.ml1,.mx1{margin-left:.5rem}.mx1{margin-right:.5rem}.my1{margin-top:.5rem;margin-bottom:.5rem}.m2{margin:1rem}.mt2{margin-top:1rem}.mr2{margin-right:1rem}.mb2{margin-bottom:1rem}.ml2,.mx2{margin-left:1rem}.mx2{margin-right:1rem}.my2{margin-top:1rem;margin-bottom:1rem}.m3{margin:2rem}.mt3{margin-top:2rem}.mr3{margin-right:2rem}.mb3{margin-bottom:2rem}.ml3,.mx3{margin-left:2rem}.mx3{margin-right:2rem}.my3{margin-top:2rem;margin-bottom:2rem}.m4{margin:4rem}.mt4{margin-top:4rem}.mr4{margin-right:4rem}.mb4{margin-bottom:4rem}.ml4,.mx4{margin-left:4rem}.mx4{margin-right:4rem}.my4{margin-top:4rem;margin-bottom:4rem}.mxn1{margin-left:-.5rem;margin-right:-.5rem}.mxn2{margin-left:-1rem;margin-right:-1rem}.mxn3{margin-left:-2rem;margin-right:-2rem}.mxn4{margin-left:-4rem;margin-right:-4rem}.ml-auto{margin-left:auto}.mr-auto,.mx-auto{margin-right:auto}.mx-auto{margin-left:auto}.p0{padding:0}.pt0{padding-top:0}.pr0{padding-right:0}.pb0{padding-bottom:0}.pl0,.px0{padding-left:0}.px0{padding-right:0}.py0{padding-top:0;padding-bottom:0}.p1{padding:.5rem}.pt1{padding-top:.5rem}.pr1{padding-right:.5rem}.pb1{padding-bottom:.5rem}.pl1{padding-left:.5rem}.py1{padding-top:.5rem;padding-bottom:.5rem}.px1{padding-left:.5rem;padding-right:.5rem}.p2{padding:1rem}.pt2{padding-top:1rem}.pr2{padding-right:1rem}.pb2{padding-bottom:1rem}.pl2{padding-left:1rem}.py2{padding-top:1rem;padding-bottom:1rem}.px2{padding-left:1rem;padding-right:1rem}.p3{padding:2rem}.pt3{padding-top:2rem}.pr3{padding-right:2rem}.pb3{padding-bottom:2rem}.pl3{padding-left:2rem}.py3{padding-top:2rem;padding-bottom:2rem}.px3{padding-left:2rem;padding-right:2rem}.p4{padding:4rem}.pt4{padding-top:4rem}.pr4{padding-right:4rem}.pb4{padding-bottom:4rem}.pl4{padding-left:4rem}.py4{padding-top:4rem;padding-bottom:4rem}.px4{padding-left:4rem;padding-right:4rem}.col{float:left}.col,.col-right{box-sizing:border-box}.col-right{float:right}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}@media (min-width:40em){.sm-col{float:left;box-sizing:border-box}.sm-col-right{float:right;box-sizing:border-box}.sm-col-1{width:8.33333%}.sm-col-2{width:16.66667%}.sm-col-3{width:25%}.sm-col-4{width:33.33333%}.sm-col-5{width:41.66667%}.sm-col-6{width:50%}.sm-col-7{width:58.33333%}.sm-col-8{width:66.66667%}.sm-col-9{width:75%}.sm-col-10{width:83.33333%}.sm-col-11{width:91.66667%}.sm-col-12{width:100%}}@media (min-width:52em){.md-col{float:left;box-sizing:border-box}.md-col-right{float:right;box-sizing:border-box}.md-col-1{width:8.33333%}.md-col-2{width:16.66667%}.md-col-3{width:25%}.md-col-4{width:33.33333%}.md-col-5{width:41.66667%}.md-col-6{width:50%}.md-col-7{width:58.33333%}.md-col-8{width:66.66667%}.md-col-9{width:75%}.md-col-10{width:83.33333%}.md-col-11{width:91.66667%}.md-col-12{width:100%}}@media (min-width:64em){.lg-col{float:left;box-sizing:border-box}.lg-col-right{float:right;box-sizing:border-box}.lg-col-1{width:8.33333%}.lg-col-2{width:16.66667%}.lg-col-3{width:25%}.lg-col-4{width:33.33333%}.lg-col-5{width:41.66667%}.lg-col-6{width:50%}.lg-col-7{width:58.33333%}.lg-col-8{width:66.66667%}.lg-col-9{width:75%}.lg-col-10{width:83.33333%}.lg-col-11{width:91.66667%}.lg-col-12{width:100%}}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}@media (min-width:40em){.sm-flex{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (min-width:52em){.md-flex{display:-webkit-box;display:-ms-flexbox;display:flex}}@media (min-width:64em){.lg-flex{display:-webkit-box;display:-ms-flexbox;display:flex}}.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.items-start{-webkit-box-align:start;-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start}.items-end{-webkit-box-align:end;-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end}.items-center{-webkit-box-align:center;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}.items-baseline{-webkit-box-align:baseline;-ms-flex-align:baseline;-ms-grid-row-align:baseline;align-items:baseline}.items-stretch{-webkit-box-align:stretch;-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}.self-start{-ms-flex-item-align:start;align-self:flex-start}.self-end{-ms-flex-item-align:end;align-self:flex-end}.self-center{-ms-flex-item-align:center;align-self:center}.self-baseline{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch{-ms-flex-item-align:stretch;align-self:stretch}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around{-ms-flex-pack:distribute;justify-content:space-around}.content-start{-ms-flex-line-pack:start;align-content:flex-start}.content-end{-ms-flex-line-pack:end;align-content:flex-end}.content-center{-ms-flex-line-pack:center;align-content:center}.content-between{-ms-flex-line-pack:justify;align-content:space-between}.content-around{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch{-ms-flex-line-pack:stretch;align-content:stretch}.flex-auto{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none{-webkit-box-flex:0;-ms-flex:none;flex:none}.order-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-last{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.z1{z-index:1}.z2{z-index:2}.z3{z-index:3}.z4{z-index:4}.border{border-style:solid;border-width:1px}.border-top{border-top-style:solid;border-top-width:1px}.border-right{border-right-style:solid;border-right-width:1px}.border-bottom{border-bottom-style:solid;border-bottom-width:1px}.border-left{border-left-style:solid;border-left-width:1px}.border-none{border:0}.rounded{border-radius:3px}.circle{border-radius:50%}.rounded-top{border-radius:3px 3px 0 0}.rounded-right{border-radius:0 3px 3px 0}.rounded-bottom{border-radius:0 0 3px 3px}.rounded-left{border-radius:3px 0 0 3px}.not-rounded{border-radius:0}.hide{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}@media (max-width:40em){.xs-hide{display:none!important}}@media (min-width:40em) and (max-width:52em){.sm-hide{display:none!important}}@media (min-width:52em) and (max-width:64em){.md-hide{display:none!important}}@media (min-width:64em){.lg-hide{display:none!important}}.display-none{display:none!important}@media (min-width:40em){.sm-m0{margin:0}.sm-mt0{margin-top:0}.sm-mr0{margin-right:0}.sm-mb0{margin-bottom:0}.sm-ml0,.sm-mx0{margin-left:0}.sm-mx0{margin-right:0}.sm-my0{margin-top:0;margin-bottom:0}.sm-m1{margin:.5rem}.sm-mt1{margin-top:.5rem}.sm-mr1{margin-right:.5rem}.sm-mb1{margin-bottom:.5rem}.sm-ml1,.sm-mx1{margin-left:.5rem}.sm-mx1{margin-right:.5rem}.sm-my1{margin-top:.5rem;margin-bottom:.5rem}.sm-m2{margin:1rem}.sm-mt2{margin-top:1rem}.sm-mr2{margin-right:1rem}.sm-mb2{margin-bottom:1rem}.sm-ml2,.sm-mx2{margin-left:1rem}.sm-mx2{margin-right:1rem}.sm-my2{margin-top:1rem;margin-bottom:1rem}.sm-m3{margin:2rem}.sm-mt3{margin-top:2rem}.sm-mr3{margin-right:2rem}.sm-mb3{margin-bottom:2rem}.sm-ml3,.sm-mx3{margin-left:2rem}.sm-mx3{margin-right:2rem}.sm-my3{margin-top:2rem;margin-bottom:2rem}.sm-m4{margin:4rem}.sm-mt4{margin-top:4rem}.sm-mr4{margin-right:4rem}.sm-mb4{margin-bottom:4rem}.sm-ml4,.sm-mx4{margin-left:4rem}.sm-mx4{margin-right:4rem}.sm-my4{margin-top:4rem;margin-bottom:4rem}.sm-mxn1{margin-left:-.5rem;margin-right:-.5rem}.sm-mxn2{margin-left:-1rem;margin-right:-1rem}.sm-mxn3{margin-left:-2rem;margin-right:-2rem}.sm-mxn4{margin-left:-4rem;margin-right:-4rem}.sm-ml-auto{margin-left:auto}.sm-mr-auto,.sm-mx-auto{margin-right:auto}.sm-mx-auto{margin-left:auto}}@media (min-width:52em){.md-m0{margin:0}.md-mt0{margin-top:0}.md-mr0{margin-right:0}.md-mb0{margin-bottom:0}.md-ml0,.md-mx0{margin-left:0}.md-mx0{margin-right:0}.md-my0{margin-top:0;margin-bottom:0}.md-m1{margin:.5rem}.md-mt1{margin-top:.5rem}.md-mr1{margin-right:.5rem}.md-mb1{margin-bottom:.5rem}.md-ml1,.md-mx1{margin-left:.5rem}.md-mx1{margin-right:.5rem}.md-my1{margin-top:.5rem;margin-bottom:.5rem}.md-m2{margin:1rem}.md-mt2{margin-top:1rem}.md-mr2{margin-right:1rem}.md-mb2{margin-bottom:1rem}.md-ml2,.md-mx2{margin-left:1rem}.md-mx2{margin-right:1rem}.md-my2{margin-top:1rem;margin-bottom:1rem}.md-m3{margin:2rem}.md-mt3{margin-top:2rem}.md-mr3{margin-right:2rem}.md-mb3{margin-bottom:2rem}.md-ml3,.md-mx3{margin-left:2rem}.md-mx3{margin-right:2rem}.md-my3{margin-top:2rem;margin-bottom:2rem}.md-m4{margin:4rem}.md-mt4{margin-top:4rem}.md-mr4{margin-right:4rem}.md-mb4{margin-bottom:4rem}.md-ml4,.md-mx4{margin-left:4rem}.md-mx4{margin-right:4rem}.md-my4{margin-top:4rem;margin-bottom:4rem}.md-mxn1{margin-left:-.5rem;margin-right:-.5rem}.md-mxn2{margin-left:-1rem;margin-right:-1rem}.md-mxn3{margin-left:-2rem;margin-right:-2rem}.md-mxn4{margin-left:-4rem;margin-right:-4rem}.md-ml-auto{margin-left:auto}.md-mr-auto,.md-mx-auto{margin-right:auto}.md-mx-auto{margin-left:auto}}@media (min-width:64em){.lg-m0{margin:0}.lg-mt0{margin-top:0}.lg-mr0{margin-right:0}.lg-mb0{margin-bottom:0}.lg-ml0,.lg-mx0{margin-left:0}.lg-mx0{margin-right:0}.lg-my0{margin-top:0;margin-bottom:0}.lg-m1{margin:.5rem}.lg-mt1{margin-top:.5rem}.lg-mr1{margin-right:.5rem}.lg-mb1{margin-bottom:.5rem}.lg-ml1,.lg-mx1{margin-left:.5rem}.lg-mx1{margin-right:.5rem}.lg-my1{margin-top:.5rem;margin-bottom:.5rem}.lg-m2{margin:1rem}.lg-mt2{margin-top:1rem}.lg-mr2{margin-right:1rem}.lg-mb2{margin-bottom:1rem}.lg-ml2,.lg-mx2{margin-left:1rem}.lg-mx2{margin-right:1rem}.lg-my2{margin-top:1rem;margin-bottom:1rem}.lg-m3{margin:2rem}.lg-mt3{margin-top:2rem}.lg-mr3{margin-right:2rem}.lg-mb3{margin-bottom:2rem}.lg-ml3,.lg-mx3{margin-left:2rem}.lg-mx3{margin-right:2rem}.lg-my3{margin-top:2rem;margin-bottom:2rem}.lg-m4{margin:4rem}.lg-mt4{margin-top:4rem}.lg-mr4{margin-right:4rem}.lg-mb4{margin-bottom:4rem}.lg-ml4,.lg-mx4{margin-left:4rem}.lg-mx4{margin-right:4rem}.lg-my4{margin-top:4rem;margin-bottom:4rem}.lg-mxn1{margin-left:-.5rem;margin-right:-.5rem}.lg-mxn2{margin-left:-1rem;margin-right:-1rem}.lg-mxn3{margin-left:-2rem;margin-right:-2rem}.lg-mxn4{margin-left:-4rem;margin-right:-4rem}.lg-ml-auto{margin-left:auto}.lg-mr-auto,.lg-mx-auto{margin-right:auto}.lg-mx-auto{margin-left:auto}}@media (min-width:40em){.sm-p0{padding:0}.sm-pt0{padding-top:0}.sm-pr0{padding-right:0}.sm-pb0{padding-bottom:0}.sm-pl0,.sm-px0{padding-left:0}.sm-px0{padding-right:0}.sm-py0{padding-top:0;padding-bottom:0}.sm-p1{padding:.5rem}.sm-pt1{padding-top:.5rem}.sm-pr1{padding-right:.5rem}.sm-pb1{padding-bottom:.5rem}.sm-pl1,.sm-px1{padding-left:.5rem}.sm-px1{padding-right:.5rem}.sm-py1{padding-top:.5rem;padding-bottom:.5rem}.sm-p2{padding:1rem}.sm-pt2{padding-top:1rem}.sm-pr2{padding-right:1rem}.sm-pb2{padding-bottom:1rem}.sm-pl2,.sm-px2{padding-left:1rem}.sm-px2{padding-right:1rem}.sm-py2{padding-top:1rem;padding-bottom:1rem}.sm-p3{padding:2rem}.sm-pt3{padding-top:2rem}.sm-pr3{padding-right:2rem}.sm-pb3{padding-bottom:2rem}.sm-pl3,.sm-px3{padding-left:2rem}.sm-px3{padding-right:2rem}.sm-py3{padding-top:2rem;padding-bottom:2rem}.sm-p4{padding:4rem}.sm-pt4{padding-top:4rem}.sm-pr4{padding-right:4rem}.sm-pb4{padding-bottom:4rem}.sm-pl4,.sm-px4{padding-left:4rem}.sm-px4{padding-right:4rem}.sm-py4{padding-top:4rem;padding-bottom:4rem}}@media (min-width:52em){.md-p0{padding:0}.md-pt0{padding-top:0}.md-pr0{padding-right:0}.md-pb0{padding-bottom:0}.md-pl0,.md-px0{padding-left:0}.md-px0{padding-right:0}.md-py0{padding-top:0;padding-bottom:0}.md-p1{padding:.5rem}.md-pt1{padding-top:.5rem}.md-pr1{padding-right:.5rem}.md-pb1{padding-bottom:.5rem}.md-pl1,.md-px1{padding-left:.5rem}.md-px1{padding-right:.5rem}.md-py1{padding-top:.5rem;padding-bottom:.5rem}.md-p2{padding:1rem}.md-pt2{padding-top:1rem}.md-pr2{padding-right:1rem}.md-pb2{padding-bottom:1rem}.md-pl2,.md-px2{padding-left:1rem}.md-px2{padding-right:1rem}.md-py2{padding-top:1rem;padding-bottom:1rem}.md-p3{padding:2rem}.md-pt3{padding-top:2rem}.md-pr3{padding-right:2rem}.md-pb3{padding-bottom:2rem}.md-pl3,.md-px3{padding-left:2rem}.md-px3{padding-right:2rem}.md-py3{padding-top:2rem;padding-bottom:2rem}.md-p4{padding:4rem}.md-pt4{padding-top:4rem}.md-pr4{padding-right:4rem}.md-pb4{padding-bottom:4rem}.md-pl4,.md-px4{padding-left:4rem}.md-px4{padding-right:4rem}.md-py4{padding-top:4rem;padding-bottom:4rem}}@media (min-width:64em){.lg-p0{padding:0}.lg-pt0{padding-top:0}.lg-pr0{padding-right:0}.lg-pb0{padding-bottom:0}.lg-pl0,.lg-px0{padding-left:0}.lg-px0{padding-right:0}.lg-py0{padding-top:0;padding-bottom:0}.lg-p1{padding:.5rem}.lg-pt1{padding-top:.5rem}.lg-pr1{padding-right:.5rem}.lg-pb1{padding-bottom:.5rem}.lg-pl1,.lg-px1{padding-left:.5rem}.lg-px1{padding-right:.5rem}.lg-py1{padding-top:.5rem;padding-bottom:.5rem}.lg-p2{padding:1rem}.lg-pt2{padding-top:1rem}.lg-pr2{padding-right:1rem}.lg-pb2{padding-bottom:1rem}.lg-pl2,.lg-px2{padding-left:1rem}.lg-px2{padding-right:1rem}.lg-py2{padding-top:1rem;padding-bottom:1rem}.lg-p3{padding:2rem}.lg-pt3{padding-top:2rem}.lg-pr3{padding-right:2rem}.lg-pb3{padding-bottom:2rem}.lg-pl3,.lg-px3{padding-left:2rem}.lg-px3{padding-right:2rem}.lg-py3{padding-top:2rem;padding-bottom:2rem}.lg-p4{padding:4rem}.lg-pt4{padding-top:4rem}.lg-pr4{padding-right:4rem}.lg-pb4{padding-bottom:4rem}.lg-pl4,.lg-px4{padding-left:4rem}.lg-px4{padding-right:4rem}.lg-py4{padding-top:4rem;padding-bottom:4rem}}@media (min-width:40em){.sm-inline{display:inline}.sm-block{display:block}.sm-inline-block{display:inline-block}.sm-table{display:table}.sm-table-cell{display:table-cell}.sm-overflow-hidden{overflow:hidden}.sm-overflow-scroll{overflow:scroll}.sm-overflow-auto{overflow:auto}.sm-left{float:left}.sm-right{float:right}}@media (min-width:52em){.md-inline{display:inline}.md-block{display:block}.md-inline-block{display:inline-block}.md-table{display:table}.md-table-cell{display:table-cell}.md-overflow-hidden{overflow:hidden}.md-overflow-scroll{overflow:scroll}.md-overflow-auto{overflow:auto}.md-left{float:left}.md-right{float:right}}@media (min-width:64em){.lg-inline{display:inline}.lg-block{display:block}.lg-inline-block{display:inline-block}.lg-table{display:table}.lg-table-cell{display:table-cell}.lg-overflow-hidden{overflow:hidden}.lg-overflow-scroll{overflow:scroll}.lg-overflow-auto{overflow:auto}.lg-left{float:left}.lg-right{float:right}}@media (min-width:40em){.sm-relative{position:relative}.sm-absolute{position:absolute}.sm-fixed{position:fixed}.sm-top-0{top:0}.sm-right-0{right:0}.sm-bottom-0{bottom:0}.sm-left-0{left:0}}@media (min-width:52em){.md-relative{position:relative}.md-absolute{position:absolute}.md-fixed{position:fixed}.md-top-0{top:0}.md-right-0{right:0}.md-bottom-0{bottom:0}.md-left-0{left:0}}@media (min-width:64em){.lg-relative{position:relative}.lg-absolute{position:absolute}.lg-fixed{position:fixed}.lg-top-0{top:0}.lg-right-0{right:0}.lg-bottom-0{bottom:0}.lg-left-0{left:0}}@media (min-width:40em){.sm-left-align{text-align:left}.sm-center{text-align:center}.sm-right-align{text-align:right}.sm-justify{text-align:justify}}@media (min-width:52em){.md-left-align{text-align:left}.md-center{text-align:center}.md-right-align{text-align:right}.md-justify{text-align:justify}}@media (min-width:64em){.lg-left-align{text-align:left}.lg-center{text-align:center}.lg-right-align{text-align:right}.lg-justify{text-align:justify}}@media (min-width:40em){.sm-h00{font-size:4rem}.sm-h0{font-size:3rem}.sm-h1{font-size:2rem}.sm-h2{font-size:1.5rem}.sm-h3{font-size:1.25rem}.sm-h4{font-size:1rem}.sm-h5{font-size:.875rem}.sm-h6{font-size:.75rem}}@media (min-width:52em){.md-h00{font-size:4rem}.md-h0{font-size:3rem}.md-h1{font-size:2rem}.md-h2{font-size:1.5rem}.md-h3{font-size:1.25rem}.md-h4{font-size:1rem}.md-h5{font-size:.875rem}.md-h6{font-size:.75rem}}@media (min-width:64em){.lg-h00{font-size:4rem}.lg-h0{font-size:3rem}.lg-h1{font-size:2rem}.lg-h2{font-size:1.5rem}.lg-h3{font-size:1.25rem}.lg-h4{font-size:1rem}.lg-h5{font-size:.875rem}.lg-h6{font-size:.75rem}}.black{color:#111}.gray{color:#aaa}.silver{color:#ddd}.white{color:#fff}.aqua{color:#7fdbff}.blue{color:#0074d9}.navy{color:#001f3f}.teal{color:#39cccc}.green{color:#2ecc40}.olive{color:#3d9970}.lime{color:#01ff70}.yellow{color:#ffdc00}.orange{color:#ff851b}.red{color:#ff4136}.fuchsia{color:#f012be}.purple{color:#b10dc9}.maroon{color:#85144b}.color-inherit{color:inherit}.muted{opacity:.5}.bg-black{background-color:#111}.bg-gray{background-color:#aaa}.bg-silver{background-color:#ddd}.bg-white{background-color:#fff}.bg-aqua{background-color:#7fdbff}.bg-blue{background-color:#0074d9}.bg-navy{background-color:#001f3f}.bg-teal{background-color:#39cccc}.bg-green{background-color:#2ecc40}.bg-olive{background-color:#3d9970}.bg-lime{background-color:#01ff70}.bg-yellow{background-color:#ffdc00}.bg-orange{background-color:#ff851b}.bg-red{background-color:#ff4136}.bg-fuchsia{background-color:#f012be}.bg-purple{background-color:#b10dc9}.bg-maroon{background-color:#85144b}.border-black{border-color:#111}.border-gray{border-color:#aaa}.border-silver{border-color:#ddd}.border-white{border-color:#fff}.border-aqua{border-color:#7fdbff}.border-blue{border-color:#0074d9}.border-navy{border-color:#001f3f}.border-teal{border-color:#39cccc}.border-green{border-color:#2ecc40}.border-olive{border-color:#3d9970}.border-lime{border-color:#01ff70}.border-yellow{border-color:#ffdc00}.border-orange{border-color:#ff851b}.border-red{border-color:#ff4136}.border-fuchsia{border-color:#f012be}.border-purple{border-color:#b10dc9}.border-maroon{border-color:#85144b}.bg-darken-1{background-color:rgba(0,0,0,.0625)}.bg-darken-2{background-color:rgba(0,0,0,.125)}.bg-darken-3{background-color:rgba(0,0,0,.25)}.bg-darken-4{background-color:rgba(0,0,0,.5)}.bg-lighten-1{background-color:hsla(0,0%,100%,.0625)}.bg-lighten-2{background-color:hsla(0,0%,100%,.125)}.bg-lighten-3{background-color:hsla(0,0%,100%,.25)}.bg-lighten-4{background-color:hsla(0,0%,100%,.5)}.bg-cover{background-size:cover}.bg-contain{background-size:contain}.bg-center{background-position:50%}.bg-top{background-position:top}.bg-right{background-position:100%}.bg-bottom{background-position:bottom}.bg-left{background-position:0}.bg-no-repeat{background-repeat:no-repeat}.bg-repeat-x{background-repeat:repeat-x}.bg-repeat-y{background-repeat:repeat-y}.all-initial{all:initial}.all-unset{all:unset}.all-inherit{all:inherit}.all-revert{all:revert}", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "tr.Victory {\n  background: #83C084;\n}\n\ntr.Reaction {\n  background: #77abe2;\n}\n\ntr.Treasure {\n  background: #E7D68B;\n}\n\ntr.Action.Victory {\n  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(131,192,132,1) 100%);\n}\n\ntr.Treasure.Victory {\n  background: linear-gradient(to bottom, #E7D68B 0%, #83C084 100%);\n}\n\ntr.Action.Treasure {\n  background: linear-gradient(to bottom, #fff 0%, #E7D68B 100%)\n}\n\nth {\n  text-align: left;\n}\n\nth.cost {\n  text-align: right;\n}\n\ntd.cost {\n  text-align: right;\n}\n\ntable {\n  max-width: 1200px;\n  border-collapse: collapse;\n}\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = [
	{
		"name": "Cellar",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Action, Discard any number of cards. +1 Card per card discarded."
	},
	{
		"name": "Chapel",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "Trash up to 4 cards from your hand."
	},
	{
		"name": "Moat",
		"set": "Base",
		"type": [
			"Action",
			"Reaction"
		],
		"cost": 2,
		"description": "+2 Cards, When another player plays an Attack card, you may reveal this from your hand. If you do, you are unaffected by that Attack."
	},
	{
		"name": "Village",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Card, +2 Actions."
	},
	{
		"name": "Workshop",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "Gain a card costing up to 4 Coins."
	},
	{
		"name": "Bureaucrat",
		"set": "Base",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "Gain a silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards)."
	},
	{
		"name": "Gardens",
		"set": "Base",
		"type": [
			"Victory"
		],
		"cost": 4,
		"description": "Variable, Worth 1 Victory for every 10 cards in your deck (rounded down)."
	},
	{
		"name": "Militia",
		"set": "Base",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "+2 Coins, Each other player discards down to 3 cards in his hand."
	},
	{
		"name": "Moneylender",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Trash a Copper from your hand. If you do, +3 Coins."
	},
	{
		"name": "Remodel",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Trash a card from your hand. Gain a card costing up to 2 Coins more than the trashed card."
	},
	{
		"name": "Smithy",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+3 Cards."
	},
	{
		"name": "Throne Room",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Choose an Action card in your hand. Play it twice."
	},
	{
		"name": "Council Room",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+4 Cards, +1 Buy, Each other player draws a card."
	},
	{
		"name": "Festival",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+2 Actions, +1 Buy, +2 Coins."
	},
	{
		"name": "Laboratory",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+2 Cards, +1 Action."
	},
	{
		"name": "Library",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Draw until you have 7 cards in hand. You may set aside any Action cards drawn this way, as you draw them; discard the set aside cards after you finish drawing."
	},
	{
		"name": "Market",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card, +1 Action, +1 Buy, +1 Coin."
	},
	{
		"name": "Mine",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Trash a Treasure card from your hand. Gain a Treasure card costing up to 3 Coins more; put it into your hand."
	},
	{
		"name": "Witch",
		"set": "Base",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+2 Cards, Each other player gains a Curse card."
	},
	{
		"name": "Courtyard",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+3 Card, Put a card from your hand on top of your deck."
	},
	{
		"name": "Pawn",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "Choose two: +1 Card, +1 Action, +1 Buy, +1 Coin. (The choices must be different.)."
	},
	{
		"name": "Masquerade",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+2 Cards<br><br>Each player passes a card from his hand to the left at once. Then you may trash a card from your hand."
	},
	{
		"name": "Shanty Town",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+2 Actions, Reveal your hand. If you have no Action cards in hand, +2 Cards."
	},
	{
		"name": "Steward",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "Choose one: +2 Cards; or +2 Coins; or trash 2 cards from your hand."
	},
	{
		"name": "Swindler",
		"set": "Intrigue",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 3,
		"description": "+2 Coins, Each other player trashes the top card of his deck and gains a card with the same cost that you choose."
	},
	{
		"name": "Wishing Well",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Card, +1 Action, Name a card, then reveal the top card of your deck. If it is the named card, put it in your hand."
	},
	{
		"name": "Baron",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Buy, You may discard an Estate card. If you do, +4 Coins. Otherwise, gain an Estate card."
	},
	{
		"name": "Bridge",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Buy, +1 Coin. All cards (including cards in players&apos; hands) cost 1 Coin less this turn, but not less than 0 Coins."
	},
	{
		"name": "Conspirator",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+2 Coins. If you&apos;ve played 3 or more Actions this turn (counting this): +1 Card, +1 Action."
	},
	{
		"name": "Ironworks",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Gain a card costing up to 4 Coins. If it is an... Action card, +1 Action. Treasure card, +1 Coin. Victory card, +1 Card."
	},
	{
		"name": "Mining Village",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card, +2 Actions. You may trash this card immediately. If you do, +2 Coins."
	},
	{
		"name": "Duke",
		"set": "Intrigue",
		"type": [
			"Victory"
		],
		"cost": 5,
		"description": "Worth 1 Victory per Duchy you have."
	},
	{
		"name": "Minion",
		"set": "Intrigue",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+1 Action, Choose one: +2 Coins; or discard your hand, +4 Cards, and each other player with at least 5 cards in hand discards his hand and draws 4 cards."
	},
	{
		"name": "Torturer",
		"set": "Intrigue",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+3 Card, Each other player chooses one: he discards 2 cards; or he gains a Curse card, putting it in his hand."
	},
	{
		"name": "Trading Post",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Trash 2 cards from your hand. If you do, gain a silver card; put it into your hand."
	},
	{
		"name": "Upgrade",
		"set": "Intrigue",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card, +1 Action, Trash a card from your hand. Gain a card costing exactly 1 Coin more than it."
	},
	{
		"name": "Harem",
		"set": "Intrigue",
		"type": [
			"Treasure",
			"Victory"
		],
		"cost": 6,
		"description": "2 Coins, 2 Victory."
	},
	{
		"name": "Nobles",
		"set": "Intrigue",
		"type": [
			"Action",
			"Victory"
		],
		"cost": 6,
		"description": "2 Victory, Choose one: +3 Cards, or +2 Actions."
	},
	{
		"name": "Embargo",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+2 Coins, Trash this card. Put an Embargo token on top of a Supply pile. - When a player buys a card, he gains a Curse card per Embargo token on that pile."
	},
	{
		"name": "Haven",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 2,
		"description": "+1 Card, +1 Action, Set aside a card from your hand face down. At the start of your next turn, put it into your hand."
	},
	{
		"name": "Lighthouse",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 2,
		"description": "+1 Action, Now and at the start of your next turn: +1 Coin. - While this is in play, when another player plays an Attack card, it doesn&apos;t affect you."
	},
	{
		"name": "Native Village",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+2 Actions, Choose one: Set aside the top card of your deck face down on your Native Village mat; or put all the cards from your mat into your hand. <br><br> You may look at the cards on your mat at any time; return them to your deck at the end of the game."
	},
	{
		"name": "Pearl Diver",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Card, +1 Action, Look at the bottom card of your deck. You may put it on top."
	},
	{
		"name": "Ambassador",
		"set": "Seaside",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 3,
		"description": "Reveal a card from your hand. Return up to 2 copies of it from your hand to the Supply. Then each other player gains a copy of it."
	},
	{
		"name": "Fishing Village",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 3,
		"description": "+2 Actions, +1 Coin, At the start of your next turn: +1 Action, +1 Coin."
	},
	{
		"name": "Lookout",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Action, Look at the top 3 cards of your deck. Trash one of them. Discard one of them. Put the other one on top of your deck."
	},
	{
		"name": "Smugglers",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "Gain a copy of a card costing up to 6 Coins that the player to your right gained on his last turn."
	},
	{
		"name": "Warehouse",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+3 Card, +1 Action, Discard 3 cards."
	},
	{
		"name": "Caravan",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 4,
		"description": "+1 Card, +1 Action<br>At the start of your next turn, +1 Card."
	},
	{
		"name": "Cutpurse",
		"set": "Seaside",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "+2 Coins, Each other player discards a Copper card (or reveals a hand with no Copper)."
	},
	{
		"name": "Island",
		"set": "Seaside",
		"type": [
			"Action",
			"Victory"
		],
		"cost": 4,
		"description": "Set aside this and another card from your hand. Return them to your deck at the end of the game.<hr>2 VP"
	},
	{
		"name": "Navigator",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+2 Coins, Look at the top 5 cards of your deck. Either discard all of them, or put them back on top of your deck in any order."
	},
	{
		"name": "Pirate Ship",
		"set": "Seaside",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "Choose one: Each other player reveals the top 2 cards of his deck, trashes a revealed Treasure that you choose, discards the rest, and if anyone trashed a Treasure you take a Coin token; or, +1 Coin per Coin token you&apos;ve taken with Pirate Ships this game."
	},
	{
		"name": "Salvager",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Buy, Trash a card from your hand. +Coins equal to its cost."
	},
	{
		"name": "Sea Hag",
		"set": "Seaside",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "Each other player discards the top card of his deck, then gains a Curse card, putting it on top of his deck."
	},
	{
		"name": "Treasure Map",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Trash this and another copy of Treasure Map from your hand. If you do trash two Treasure Maps, gain 4 Gold cards, putting them on top of your deck."
	},
	{
		"name": "Bazaar",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card, +2 Actions, +1 Coin."
	},
	{
		"name": "Explorer",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "You may reveal a Province card from your hand. If you do, gain a Gold card, putting it into your hand. Otherwise, gain a Silver card, putting it into your hand."
	},
	{
		"name": "Ghost Ship",
		"set": "Seaside",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+2 Card, Each other player with 4 or more cards in hand puts cards from his hand on top of his deck until he has 3 cards in his hand."
	},
	{
		"name": "Merchant Ship",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 5,
		"description": "Now and at the start of your next turn: +2 Coins."
	},
	{
		"name": "Outpost",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 5,
		"description": "You only draw 3 cards (instead of 5) in this turn&apos;s Clean-up phase. Take an extra turn after this one. This can&apos;t cause you to take more than two consecutive turns."
	},
	{
		"name": "Tactician",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 5,
		"description": "Discard your hand. If you discarded any cards this way, then at the start of your next turn, +5 Cards, +1 Buy, and +1 Action."
	},
	{
		"name": "Treasury",
		"set": "Seaside",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card, +1 Action, +1 Coin, When you discard this from play, if you didn&apos;t buy a Victory card this turn, you may put this on top of your deck."
	},
	{
		"name": "Wharf",
		"set": "Seaside",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 5,
		"description": "Now and at the start of your next turn: +2 Cards, +1 Buy."
	},
	{
		"name": "Transmute",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": null,
		"description": "Trash a card from your hand.<br>If it is an...<br>Action card, gain a Duchy<br>Treasure card, gain a Transmute<br>Victory card, gain a Gold"
	},
	{
		"name": "Vineyard",
		"set": "Alchemy",
		"type": [
			"Victory"
		],
		"cost": null,
		"description": "Worth 1 Victory for every 3 Action cards in your deck (rounded down)."
	},
	{
		"name": "Apothecary",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": null,
		"description": "+1 Card<br>+1 Action<br><br>Reveal the top 4 cards of your deck. Put the revealed Coppers and Potions into your hand. Put the other cards back on top of your deck in any order."
	},
	{
		"name": "Herbalist",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Buy<br>+1 Coin<br>When you discard this from play, you may put one of your Treasures from play on top of your deck."
	},
	{
		"name": "Scrying Pool",
		"set": "Alchemy",
		"type": [
			"Action",
			"Attack"
		],
		"cost": null,
		"description": "+1 Action<br>Each player (including you) reveals the top card of his deck and either discards it or puts it back, your choice. Then reveal cards from the top of your deck until revealing one that isn&apos;t an Action.<br>Put all of your revealed cards into your hand."
	},
	{
		"name": "University",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": null,
		"description": "+2 Actions<br>You may gain an Action card costing up to 5 Coins."
	},
	{
		"name": "Alchemist",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": null,
		"description": "+2 Cards<br>+1 Action<br>When you discard this from play, you may put this on top of your deck if you have a Potion in play."
	},
	{
		"name": "Familiar",
		"set": "Alchemy",
		"type": [
			"Action",
			"Attack"
		],
		"cost": null,
		"description": "+1 Card<br>+1 Action<br>Each other player gains a curse."
	},
	{
		"name": "Philosopher's Stone",
		"set": "Alchemy",
		"type": [
			"Treasure"
		],
		"cost": null,
		"description": "When you play this, count your deck and discard pile.<br>Worth 1 Coin per 5 cards total between them (rounded down)."
	},
	{
		"name": "Golem",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": null,
		"description": "Reveal cards from your deck until you reveal 2 Action cards other than Golem Cards.<br>Discard the other cards, then play the Action cards in either order."
	},
	{
		"name": "Potion",
		"set": "Alchemy",
		"type": [
			"Treasure"
		],
		"cost": 4,
		"description": "Worth 1 Potion."
	},
	{
		"name": "Apprentice",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Action<br>Trash a card from your hand.<br>+1 Card per Coin it costs.<br>+2 Cards if it has Potion in its cost."
	},
	{
		"name": "Possession",
		"set": "Alchemy",
		"type": [
			"Action"
		],
		"cost": null,
		"description": "The player to your left takes an extra turn after this one, in which you can see all cards he can and make all decisions for him.<br>Any cards he would gain on that turn, you gain instead; any cards of his that are trashed are set aside and returned to his discard pile at end of turn."
	},
	{
		"name": "Loan",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 3,
		"description": "Worth 1 Coin.<br>When you play this, reveal cards from your deck until you reveal a Treasure. Discard it or trash it. Discard the other cards."
	},
	{
		"name": "Trade Route",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Buy<br>+1 Coin per token on the Trade Route mat.<br>Trash a card from your hand.<hr>Setup: Put a token on each Victory card Supply pile. When a card is gained from that pile, move the token to the Trade Route mat."
	},
	{
		"name": "Watchtower",
		"set": "Prosperity",
		"type": [
			"Reaction"
		],
		"cost": 3,
		"description": "Draw until you have 6 cards in hand.<hr>When you gain a card, you may reveal this from your hand. If you do, either trash that card, or put it on top of your deck."
	},
	{
		"name": "Bishop",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Coin<br>+1 &lt;VP&gt;<br>Trash a card from your hand. +&lt;VP&gt; equal to half its cost in Coins, rounded down.<br>Each other player may trash a card from his hand."
	},
	{
		"name": "Monument",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+2 Coins; +1 &lt;VP&gt;"
	},
	{
		"name": "Quarry",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 4,
		"description": "Worth 1 Coin.<hr>While this is in play, Action cards cost 2 Coins less, but not less than 0 Coins."
	},
	{
		"name": "Talisman",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 4,
		"description": "Worth 1 Coin.<hr>While this is in play, when you buy a card costing 4 Coins or less that is not a Victory card, gain a copy of it."
	},
	{
		"name": "Worker's Village",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card<br>+2 Actions<br>+1 Buy"
	},
	{
		"name": "City",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+2 Actions<br>If there are one or more empty Supply piles, +1 Card. If there are two or more, +1 Coin and +1 Buy."
	},
	{
		"name": "Contraband",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "Worth 3 Coins.<br>+1 Buy<br>When you play this, the player to your left names a card. You can&apos;t buy that card this turn."
	},
	{
		"name": "Counting House",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Look through your discard pile, reveal any number of Copper cards from it, and put them into your hand."
	},
	{
		"name": "Mint",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "You may reveal a Treasure card from your hand. Gain a copy of it.<hr>When you buy this, trash all Treasures you have in play."
	},
	{
		"name": "Mountebank",
		"set": "Prosperity",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+2 Coins<br>Each other player may discard a Curse. If he doesn&apos;t, he gains a Curse and a Copper."
	},
	{
		"name": "Rabble",
		"set": "Prosperity",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+3 Cards<br>Each other player reveals the top 3 cards of his deck, discards the revealed Actions and Treasures, and puts the rest back on top in any order he chooses."
	},
	{
		"name": "Royal Seal",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "Worth 2 Coins.<hr>While this is in play, when you gain a card, you may put that card on top of your deck."
	},
	{
		"name": "Vault",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+2 Cards<br>Discard any number of cards. +1 Coin per card discarded.<br>Each other player may discard 2 cards. If he does, he draws a card."
	},
	{
		"name": "Venture",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "Worth 1 Coin.<br>When you play this, reveal cards from your deck until you reveal a Treasure. Discard the other cards. Play that Treasure."
	},
	{
		"name": "Goons",
		"set": "Prosperity",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 6,
		"description": "+1 Buy<br>+2 Coins<br>Each other player discards down to 3 cards in hand.<hr>While this is in play, when you buy a card, +1 &lt;VP&gt;."
	},
	{
		"name": "Grand Market",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 6,
		"description": "+1 Card<br>+1 Action<br>+1 Buy<br>+2 Coins<hr>You can&apos;t buy this if you have any Copper in play."
	},
	{
		"name": "Hoard",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 6,
		"description": "Worth 2 Coins.<hr>While this is in play, when you buy a Victory card, gain a Gold."
	},
	{
		"name": "Bank",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 7,
		"description": "Worth ? Coins.<br>When you play this, it`s worth 1 Coin per Treasure card you have in play (counting this)."
	},
	{
		"name": "Expand",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 7,
		"description": "Trash a card from your hand. Gain a card costing up to 3 Coins more than the trashed card."
	},
	{
		"name": "Forge",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 7,
		"description": "Trash any number of cards from your hand. Gain a card with cost exactly equal to the total cost in Coins of the trashed cards."
	},
	{
		"name": "King's Court",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 7,
		"description": "You may choose an Action card in your hand. Play it three times."
	},
	{
		"name": "Peddler",
		"set": "Prosperity",
		"type": [
			"Action"
		],
		"cost": 8,
		"description": "+1 Card; +1 Action; +1 Coin<hr>During your Buy phase, this costs 2 Coins less per Action card you have in play, but not less than 0 Coins."
	},
	{
		"name": "Platinum",
		"set": "Prosperity",
		"type": [
			"Treasure"
		],
		"cost": 9,
		"description": "5 Coins."
	},
	{
		"name": "Colony",
		"set": "Prosperity",
		"type": [
			"Victory"
		],
		"cost": 11,
		"description": "10 &lt;VP&gt;."
	},
	{
		"name": "Bag of Gold",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Prize"
		],
		"cost": 0,
		"description": "+1 Action<br>Gain a Gold, putting it on top of your deck.<br>(This is not in the Supply.)"
	},
	{
		"name": "Diadem",
		"set": "Cornucopia",
		"type": [
			"Treasure",
			"Prize"
		],
		"cost": 0,
		"description": "Worth 2 Coins.<br>When you play this, +1 Coin per unused Action you have (Action, not Action card).<br>(This is not in the Supply.)"
	},
	{
		"name": "Followers",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Attack",
			"Prize"
		],
		"cost": 0,
		"description": "+2 Cards<br>Gain an Estate. Each other player gains a Curse and discards down to 3 cards in hand.<br>(This is not in the Supply.)"
	},
	{
		"name": "Princess",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Prize"
		],
		"cost": 0,
		"description": "+1 Buy<hr>While this is in play, cards cost 2 Coins less, but not less than 0 Coins.<br>(This is not in the Supply.)"
	},
	{
		"name": "Trusty Steed",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Prize"
		],
		"cost": 0,
		"description": "Choose two: +2 Cards; +2 Actions; +2 Coins; gain 4 Silvers and put your deck into your discard pile.<br>(The choices must be different)<br><br>(This is not in the Supply.)"
	},
	{
		"name": "Hamlet",
		"set": "Cornucopia",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Card<br>+1 Action<br><br>You may discard a card; If you do, +1 Action.<br>You may discard a card; If you do, +1 Buy."
	},
	{
		"name": "Fortune Teller",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 3,
		"description": "+2 Coins<br>Each other player reveals cards from the top of his deck until he reveals a Victory or Curse card. He puts it on top and discards the other revealed cards."
	},
	{
		"name": "Menagerie",
		"set": "Cornucopia",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Action<br>Reveal your hand.<br>If there are no duplicate cards in it, +3 Cards.<br>Otherwise, +1 Card."
	},
	{
		"name": "Farming Village",
		"set": "Cornucopia",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+2 Actions<br>Reveal cards from the top of your deck until you reveal an Action or Treasure card. Put that card into your hand and discard the other cards."
	},
	{
		"name": "Horse Traders",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Reaction"
		],
		"cost": 4,
		"description": "+1 Buy<br>+3 Coins<br>Discard 2 Cards<hr>When another player plays an Attack card, you may set this aside from your hand. If you do, then at the start of your next turn, +1 Card and return this to your hand."
	},
	{
		"name": "Remake",
		"set": "Cornucopia",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Do this twice: Trash a card from your hand, then gain a card costing exactly 1 Coin more than the trashed card."
	},
	{
		"name": "Tournament",
		"set": "Cornucopia",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Action<br>Each player may reveal a Province from his hand. If you do, discard it and gain a Prize (from the Prize pile) or a Duchy, putting it on top of your deck. If no-one else does, +1 Card +1 Coin."
	},
	{
		"name": "Young Witch",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "+2 Cards<br><br>Discard 2 cards. Each other player may reveal a Bane card from his hand.<br>If he doesn&#xFFFD;t, he gains a Curse.<hr>Setup: Add an extra Kingdom card pile costing 2 Coins or 3 Coins to the Supply. Cards from that pile are Bane cards."
	},
	{
		"name": "Harvest",
		"set": "Cornucopia",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Reveal the top 4 cards of your deck, then discard them. +1 Coin per differently named card revealed."
	},
	{
		"name": "Horn of Plenty",
		"set": "Cornucopia",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "0 Coins<br>When you play this, gain a card costing up to 1 Coin per differently named card you have in play, counting this. If it&#xFFFD;s a Victory card, trash this."
	},
	{
		"name": "Hunting Party",
		"set": "Cornucopia",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<br>Reveal your hand. Reveal cards from your deck until you reveal a card that isn&#xFFFD;t a duplicate of one in your hand. Put it into your hand and discard the rest."
	},
	{
		"name": "Jester",
		"set": "Cornucopia",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+2 Coins<br>Each other player discards the top card of his deck. If it&#xFFFD;s a Victory card he gains a Curse. Otherwise he gains a copy of the discarded card or you do, your choice."
	},
	{
		"name": "Fairgrounds",
		"set": "Cornucopia",
		"type": [
			"Victory"
		],
		"cost": 6,
		"description": "Worth 2 VP for every 5 differently named cards in your deck (rounded down)"
	},
	{
		"name": "Crossroads",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "Reveal your hand.<br>+1 Card per Victory card revealed. If this is the first time you played a Crossroads this turn, +3 Actions."
	},
	{
		"name": "Duchess",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+2 Coins<br>Each player (including you) looks at the top card of his deck, and discards it or puts it back.<hr>In games using this, when you gain a Duchy, you may gain a Duchess."
	},
	{
		"name": "Fool's Gold",
		"set": "Hinterlands",
		"type": [
			"Treasure",
			"Reaction"
		],
		"cost": 2,
		"description": "If this is the first time you played a Fool&apos;s Gold this turn, this is worth 1 Coin, otherwise it&apos;s worth 4 Coins.<hr>When another player gains a Province, you may trash this from your hand. If you do, gain a Gold, putting it on your deck."
	},
	{
		"name": "Develop",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "Trash a card from your hand. Gain a card costing exactly 1 Coin more than it and a card costing exactly 1 less than it, in either order, putting them on top of your deck."
	},
	{
		"name": "Oasis",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Card<br>+1 Action<br>+1 Coin<br>Discard a card."
	},
	{
		"name": "Oracle",
		"set": "Hinterlands",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 3,
		"description": "Each player (including you) reveals the top 2 cards of his deck, and you choose one: either he discards them, or he puts them back on top in an order he chooses.<br>+2 Cards"
	},
	{
		"name": "Scheme",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Card<br>+1 Action<br>At the start of Clean-up this turn, you may choose an Action card you have in play. If you discard it from play this turn, put it on your deck."
	},
	{
		"name": "Tunnel",
		"set": "Hinterlands",
		"type": [
			"Victory",
			"Reaction"
		],
		"cost": 3,
		"description": "2 VP [large shield]<hr>When you discard this other than during a Clean-up phase, you may reveal it. If you do, gain a Gold."
	},
	{
		"name": "Jack of all Trades",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Gain a Silver.<br>Look at the top card of your deck; discard it or put it back.<br>Draw until you have 5 cards in hand.<br>You may trash a card from your hand that is not a Treasure."
	},
	{
		"name": "Noble Brigand",
		"set": "Hinterlands",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "+1 Coin<br>When you buy this or play it, each other player reveals the top 2 cards of his deck, trashes a revealed Silver or Gold you choose, and discards the rest. If he didn&apos;t reveal a Treasure, he gains a Copper. You gain the trashed cards."
	},
	{
		"name": "Nomad Camp",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Buy<br>+2 Coins<hr>When you gain this, put it on top of your deck."
	},
	{
		"name": "Silk Road",
		"set": "Hinterlands",
		"type": [
			"Victory"
		],
		"cost": 4,
		"description": "Worth 1 VP for every 4 Victory cards in your deck (round down)."
	},
	{
		"name": "Spice Merchant",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "You may trash a Treasure from your hand. If you do, choose one:<br>+2 Cards and +1 Action;<br>or +2 Coins and +1 Buy."
	},
	{
		"name": "Trader",
		"set": "Hinterlands",
		"type": [
			"Action",
			"Reaction"
		],
		"cost": 4,
		"description": "Trash a card from your hand. Gain a number of Silvers equal to its cost in Coins.<hr>When you would gain a card, you may reveal this from your hand. If you do, instead, gain a silver."
	},
	{
		"name": "Cache",
		"set": "Hinterlands",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "Worth 3 Coins<hr>When you gain this, gain two Coppers."
	},
	{
		"name": "Cartographer",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<br>Look at the top 4 cards of your deck. Discard any number of them. Put the rest back on top in any order."
	},
	{
		"name": "Embassy",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+5 Cards<br>Discard 3 cards.<hr>When you gain this, each other player gains a Silver."
	},
	{
		"name": "Haggler",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+2 Coins<hr>While this is in play, when you buy a card, gain a card costing less than it that is not a Victory card."
	},
	{
		"name": "Highway",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<hr>While this is in play, cards cost 1 Coin less, but not less than 0 Coins."
	},
	{
		"name": "Ill-Gotten Gains",
		"set": "Hinterlands",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "Worth 1 Coin<br>When you play this, you may gain a Copper, putting it into your hand.<hr>When you gain this, each other player gains a Curse."
	},
	{
		"name": "Inn",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+2 Cards<br>+2 Actions<br>Discard 2 cards.<hr>When you gain this, look through your discard pile (including this), reveal any number of Action cards from it, and shuffle them into your deck."
	},
	{
		"name": "Mandarin",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+3 Coins<br>Put a card from your hand on top of your deck.<hr>When you gain this, put all Treasures you have in play on top of your deck in any order."
	},
	{
		"name": "Margrave",
		"set": "Hinterlands",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+3 Cards<br>+1 Buy<br>Each other player draws a card, then discards down to 3 cards in hand."
	},
	{
		"name": "Stables",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "You may discard a Treasure. If you do, +3 Cards and +1 Action."
	},
	{
		"name": "Border Village",
		"set": "Hinterlands",
		"type": [
			"Action"
		],
		"cost": 6,
		"description": "+1 Card<br>+2 Actions<hr>When you gain this, gain a card costing less than this."
	},
	{
		"name": "Farmland",
		"set": "Hinterlands",
		"type": [
			"Victory"
		],
		"cost": 6,
		"description": "2 VP<hr>When you buy this, trash a card from your hand. Gain a card costing exactly 2 Coins more than the trashed card."
	},
	{
		"name": "Abandoned Mine",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Ruins"
		],
		"cost": 0,
		"description": "+1 Coin"
	},
	{
		"name": "Madman",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 0,
		"description": "+2 Actions<br>Return this to the Madman pile. If you do, +1 Card per card in your hand.<br><i>(This card is not in the supply.)</i>"
	},
	{
		"name": "Mercenary",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 0,
		"description": "You may trash 2 cards from your hand. If you do, +2 Cards, +2 Coins, and each other player discards down to 3 cards in hand. <i>(This is not in the Supply.)</i>"
	},
	{
		"name": "Ruined Library",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Ruins"
		],
		"cost": 0,
		"description": "+1 Card"
	},
	{
		"name": "Ruined Market",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Ruins"
		],
		"cost": 0,
		"description": "+1 Buy"
	},
	{
		"name": "Ruined Village",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Ruins"
		],
		"cost": 0,
		"description": "+1 Action"
	},
	{
		"name": "Spoils",
		"set": "Dark Ages",
		"type": [
			"Treasure"
		],
		"cost": 0,
		"description": "3 Coins<br>When you play this, return it to the Spoils pile.<br><i>(This is not in the Supply.)</i>"
	},
	{
		"name": "Survivors",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Ruins"
		],
		"cost": 0,
		"description": "Look at the top 2 cards of your deck. Discard them or put them back in any order."
	},
	{
		"name": "Hovel",
		"set": "Dark Ages",
		"type": [
			"Reaction",
			"Shelter"
		],
		"cost": 1,
		"description": "When you buy a Victory card, you may trash this from your hand."
	},
	{
		"name": "Necropolis",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Shelter"
		],
		"cost": 1,
		"description": "+2 Actions"
	},
	{
		"name": "Overgrown Estate",
		"set": "Dark Ages",
		"type": [
			"Victory",
			"Shelter"
		],
		"cost": 1,
		"description": "0 Victory<hr>When you trash this, +1 Card."
	},
	{
		"name": "Poor House",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 1,
		"description": "+4 Coins<br>Reveal your hand. -1 Coin per Treasure card in your hand, to a minimum of 0 Coins."
	},
	{
		"name": "Beggar",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Reaction"
		],
		"cost": 2,
		"description": "Gain 3 Coppers, putting them into your hand.<hr>When another player plays an Attack card, you may discard this. If you do, gain two Silvers, putting one on top of your deck."
	},
	{
		"name": "Squire",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Coin<br>Choose one: +2 Actions; or +2 Buys; or gain a Silver.<hr>When you trash this, gain an Attack card."
	},
	{
		"name": "Vagrant",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Card, +1 Action<br>Reveal the top card of your deck. If it&apos;s a Curse, Ruins, Shelter, or Victory card, put it into your hand."
	},
	{
		"name": "Forager",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Action, +1 Buy<br>Trash a card from your hand. +1 Coin per differently named Treasure in the trash."
	},
	{
		"name": "Hermit",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "Look through your discard pile. You may trash a card from your discard pile or hand that is not a Treasure. Gain a card costing up to 3 Coins.<hr>When you discard this from play, if you did not buy any cards this turn, trash this and gain a Madman from the Madman pile."
	},
	{
		"name": "Market Square",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Reaction"
		],
		"cost": 3,
		"description": "+1 Card, +1 Action, +1 Buy<hr>When one of your cards is trashed, you may discard this from your hand. If you do, gain a Gold."
	},
	{
		"name": "Sage",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Action<br>Reveal cards from the top of your deck until you reveal one costing 3 Coins or more. Put that card into your hand and discard the rest."
	},
	{
		"name": "Storeroom",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Buy<br>Discard any number of cards. +1 Card per card discarded. Discard any number of cards. +1 Coin per card discarded the second time."
	},
	{
		"name": "Urchin",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 3,
		"description": "+1 Card, +1 Action<br>Each other player discards down to 4 cards in hand.<hr>When you play another Attack card with this in play, you may trash this. If you do, gain a mercenary from the Mercenary pile."
	},
	{
		"name": "Armory",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Gain a card costing up to 4 Coins, putting it on top of your deck."
	},
	{
		"name": "Death Cart",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Looter"
		],
		"cost": 4,
		"description": "+5 Coins<br>You may trash an Action card from your hand. If you don&apos;t, trash this.<hr>When you gain this, gain 2 Ruins."
	},
	{
		"name": "Feodum",
		"set": "Dark Ages",
		"type": [
			"Victory"
		],
		"cost": 4,
		"description": "Worth 1 Victory for every 3 Silvers in your deck (round down).<hr>When you trash this, gain 3 Silvers."
	},
	{
		"name": "Fortress",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card, +2 Actions<hr>When you trash this, put it into your hand."
	},
	{
		"name": "Ironmonger",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card, +1 Action<br>Reveal the top card of your deck; you may discard it. Either way, if it is an&#xFFFD;<br>Action card, +1 Action<br>Treasure card, +1 Coin<br>Victory card, +1 Card"
	},
	{
		"name": "Marauder",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Looter"
		],
		"cost": 4,
		"description": "Gain a Spoils from the Spoils pile. Each other player gains a Ruins."
	},
	{
		"name": "Procession",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "You may play an Action card from your hand twice. Trash it. Gain an Action card costing exactly 1 Coin more than it."
	},
	{
		"name": "Rats",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card, +1 Action<br>Gain a Rats. Trash a card from your hand other than a Rats (or reveal a hand of all Rats).<hr>When you tash this, +1 Card."
	},
	{
		"name": "Scavenger",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Coins<br>You may put your deck into your discard pile. Look through your discard pile and put one card from it on top of your deck."
	},
	{
		"name": "Sir Martin",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 4,
		"description": "+2 Buys<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Wandering Minstrel",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card, +2 Actions<br>Reveal the top 3 cards of your deck. Put the Actions back on top in any order and discard the rest."
	},
	{
		"name": "Band of Misfits",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Play this as if it were an Action card in the Supply costing less than it that you choose.<br>This is that card until it leaves play."
	},
	{
		"name": "Bandit Camp",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card, +2 Actions<br>Gain a Spoils from the Spoils pile."
	},
	{
		"name": "Catacombs",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Look at the top 3 cards of your deck. Choose one: Put them into your hand; or discard them and +3 Cards.<hr>When you trash this, gain a cheaper card."
	},
	{
		"name": "Count",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Choose one: Discard 2 cards; or put a card from your hand on top of your deck; or gain a Copper.<br>Choose one: +3 Coins; or trash your hand; or gain a Duchy."
	},
	{
		"name": "Counterfeit",
		"set": "Dark Ages",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "1 Coin<br>+1 Buy<br>When you play this, you may play a Treasure from your hand twice. If you do, trash that Treasure."
	},
	{
		"name": "Cultist",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Looter"
		],
		"cost": 5,
		"description": "+2 Cards<br>Each other player gains a Ruins. You may play a Cultist from your hand.<hr>When you trash this, +3 Cards."
	},
	{
		"name": "Dame Anna",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "You may trash up to 2 cards from your hand.<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Dame Josephine",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight",
			"Victory"
		],
		"cost": 5,
		"description": "2 Victory<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Dame Molly",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "+2 Actions<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Dame Natalie",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "You may gain a card costing up to 3 Coins.<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Dame Sylvia",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "+2 Coins<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Graverobber",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Choose one: Gain a card from the trash costing from 3 Coins to 6 Coins, putting it on top of your deck; or trash an Action card from your hand and gain a card costing up to 3 Coins more than it."
	},
	{
		"name": "Junk Dealer",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card, +1 Action, +1 Coin<br>Trash a card from your hand."
	},
	{
		"name": "Mystic",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Action, +2 Coins<br>Name a card. Reveal the top card of your deck. If it&apos;s the named card, put it into your hand."
	},
	{
		"name": "Pillage",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "Trash this. Each other player with 5 or more cards in hand reveals his hand and discards a card that you choose.<br>Gain 2 Spoils from the Spoils pile."
	},
	{
		"name": "Rebuild",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Action<br><br>Name a card. Reveal cards from the top of your deck until you reveal a Victory card that is not the named card. Discard the other cards. Trash the Victory card and gain a Victory card costing up to 3 Coins more than it."
	},
	{
		"name": "Rogue",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+2 Coins<br>If there are any cards in the trash costing from 3 Coins to 6 Coins, gain one of them. Otherwise, each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest."
	},
	{
		"name": "Sir Bailey",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "+1 Card, +1 Action<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Sir Destry",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "+2 Cards<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Sir Michael",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "Each other player discards down to 3 cards in hand.<br>Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card."
	},
	{
		"name": "Sir Vander",
		"set": "Dark Ages",
		"type": [
			"Action",
			"Attack",
			"Knight"
		],
		"cost": 5,
		"description": "Each other player reveals the top 2 cards of his deck, trashes one of them costing from 3 Coins to 6 Coins, and discards the rest. If a Knight is trashed by this, trash this card.<hr>When you trash this, gain a Gold."
	},
	{
		"name": "Altar",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 6,
		"description": "Trash a card from your hand. Gain a card costing up to 5 Coins."
	},
	{
		"name": "Hunting Grounds",
		"set": "Dark Ages",
		"type": [
			"Action"
		],
		"cost": 6,
		"description": "+4 Cards<hr>When you trash this, gain a Duchy or 3 Estates."
	},
	{
		"name": "Candlestick Maker",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Action, +1 Buy<br> Take a Coin token."
	},
	{
		"name": "Stonemason",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "Trash a card from your hand. Gain 2 cards each costing less than it.<hr>When you buy this, you may overpay for it.<br>If you do, gain 2 Action cards each costing the amount you overpaid."
	},
	{
		"name": "Doctor",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "Name a card. Reveal the top 3 cards of your deck. Trash the matches. Put the rest back on top in any order.<hr>When you buy this, you may overpay for it. For each 1 Coin you overpaid, look at the top card of your deck; trash it, discard it, or put it back."
	},
	{
		"name": "Masterpiece",
		"set": "Guilds",
		"type": [
			"Treasure"
		],
		"cost": 3,
		"description": "1 Coin<hr>When you buy this, you may overpay for it. If you do, gain a Silver per 1 Coin you overpaid."
	},
	{
		"name": "Advisor",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Action<br>Reveal the top 3 cards of your deck. The player to your left chooses one of them. Discard that card. Put the other cards into your hand."
	},
	{
		"name": "Herald",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card<br>+1 Action<br>Reveal the top card of your deck. If it is an Action, play it.<hr>When you buy this, you may overpay for it. For each 1 Coin you overpaid, look through your discard pile and put a card from it on top of your deck."
	},
	{
		"name": "Plaza",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card<br>+2 Actions<br>You may discard a Treasure card. If you do, take a Coin token."
	},
	{
		"name": "Taxman",
		"set": "Guilds",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 4,
		"description": "You may trash a Treasure from your hand. Each other player with 5 or more cards in hand discards a copy of it (or reveals a hand without it). Gain a Treasure card costing up to 3 Coins more than the trashed card, putting it on top of your deck."
	},
	{
		"name": "Baker",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<br>Take a Coin token.<hr>Setup: Each player takes a Coin token."
	},
	{
		"name": "Butcher",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Take 2 Coin tokens. You may trash a card from your hand and then pay any number of Coin tokens. If you did trash a card, gain a card with a cost of up to the cost of the trashed card plus the number of Coin tokens you paid."
	},
	{
		"name": "Journeyman",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Name a card. Reveal cards from the top of your deck until you reveal 3 cards that are not the named card. Put those cards into your hand and discard the rest."
	},
	{
		"name": "Merchant Guild",
		"set": "Guilds",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Buy<br>+1 Coin<hr>While this is in play, when you buy a card, take a Coin token."
	},
	{
		"name": "Soothsayer",
		"set": "Guilds",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "Gain a gold. Each other player gains a Curse. Each player who did draws a card."
	},
	{
		"name": "Coin of the Realm",
		"set": "Adventures",
		"type": [
			"Treasure",
			"Reserve"
		],
		"cost": 2,
		"description": "1 Coin<br>When you play this, put it on your Tavern mat.<hr>Directly after resolving an Action, you may call this, for +2 Actions."
	},
	{
		"name": "Page",
		"set": "Adventures",
		"type": [
			"Action",
			"Traveller"
		],
		"cost": 2,
		"description": "+1 Card<br>+1 Action<hr>When you discard this from play, you may exchange it for a Treasure Hunter."
	},
	{
		"name": "Peasant",
		"set": "Adventures",
		"type": [
			"Action",
			"Traveller"
		],
		"cost": 2,
		"description": "+1 Buy<br>+1 Coin<hr>When you discard this from play, you may exchange it for a Soldier."
	},
	{
		"name": "Ratcatcher",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve"
		],
		"cost": 2,
		"description": "+1 Card<br>+1 Action<br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to trash a card from your hand."
	},
	{
		"name": "Raze",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Action<br>Trash this or a card from your hand. Look at a number of cards from the top of your deck equal to the cost in Coins of the trashed card. Put one into your hand and discard the rest."
	},
	{
		"name": "Amulet",
		"set": "Adventures",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 3,
		"description": "Now and at the start of your next turn, choose one: +1 Coin; or trash a card from your hand; or gain a Silver."
	},
	{
		"name": "Caravan Guard",
		"set": "Adventures",
		"type": [
			"Action",
			"Duration",
			"Reaction"
		],
		"cost": 3,
		"description": "+1 Card<br>+1 Action<br>At the start of your next turn, +1 Coin.<hr>When another player plays an Attack card, you may play this from your hand. <i>(+1 Action has no effect if it&apos;s not your turn.)</i>"
	},
	{
		"name": "Dungeon",
		"set": "Adventures",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 3,
		"description": "+1 Action<br>Now and at the start of your next turn: +2 Cards, then discard 2 cards."
	},
	{
		"name": "Gear",
		"set": "Adventures",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 3,
		"description": "+2 Cards<br>Set aside up to 2 cards from your hand face down. At the start of your next turn, put them into your hand."
	},
	{
		"name": "Guide",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve"
		],
		"cost": 3,
		"description": "+1 Card<br>+1 Action<br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to discard your hand and draw 5 cards."
	},
	{
		"name": "Duplicate",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve"
		],
		"cost": 4,
		"description": "Put this on your Tavern mat.<hr>When you gain a card costing up to 6 Coins, you may call this, to gain a copy of that card."
	},
	{
		"name": "Magpie",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card<br>+1 Action<br>Reveal the top card of your deck. If it&apos;s a Treasure, put it into your hand. If it&apos;s an Action or Victory card, gain a Magpie."
	},
	{
		"name": "Messenger",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Buy<br>+2 Coins<br>You may put your deck into your discard pile.<hr>When this is your first buy in a turn, gain a card costing up to 4 Coins, and each other player gains a copy of it."
	},
	{
		"name": "Miser",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Choose one: Put a Copper from your hand onto your Tavern mat; or +1 Coin per Copper on your Tavern mat."
	},
	{
		"name": "Port",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card<br>+2 Actions<hr>When you buy this, gain another Port."
	},
	{
		"name": "Ranger",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Buy<br>Turn your Journey token over (it starts face up). If it&apos;s face up, +5 Cards."
	},
	{
		"name": "Transmogrify",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve"
		],
		"cost": 4,
		"description": "+1 Action<br>Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to trash a card from your hand, gain a card costing up to 1 Coin more than it, and put that card into your hand."
	},
	{
		"name": "Artificer",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<br>+1 Coin<br>Discard any number of cards. You may gain a card costing exactly 1 Coin per card discarded, putting it on top of your deck."
	},
	{
		"name": "Bridge Troll",
		"set": "Adventures",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 5,
		"description": "Each other player takes his -1 Coin token. Now and at the start of your next turn:<br>+1 Buy<hr>While this is in play, cards cost 1 Coin less on your turns, but not less than 0 Coins."
	},
	{
		"name": "Distant Lands",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve",
			"Victory"
		],
		"cost": 5,
		"description": "Put this on your Tavern mat.<hr>Worth 4 Victory if on your Tavern mat at the end of the game (otherwise worth 0 Victory)."
	},
	{
		"name": "Giant",
		"set": "Adventures",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "Turn your Journey token over (it starts face up). If it&apos;s face down, +1 Coin. If it&apos;s face up, +5 Coins, and each other player reveals the top card of his deck, trashes it if it costs from 3 Coins to 6 Coins, and otherwise discards it and gains a Curse."
	},
	{
		"name": "Haunted Woods",
		"set": "Adventures",
		"type": [
			"Action",
			"Attack",
			"Duration"
		],
		"cost": 5,
		"description": "Until your next turn, when any other player buys a card, he puts his hand on top of his deck in any order.<br>At the start of your next turn:<br>+3 Cards"
	},
	{
		"name": "Lost City",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+2 Cards<br>+2 Actions<hr>When you gain this, each other player draws a card."
	},
	{
		"name": "Relic",
		"set": "Adventures",
		"type": [
			"Treasure",
			"Attack"
		],
		"cost": 5,
		"description": "2 Coins<br>When you play this, each other player puts his -1 Card token on his deck."
	},
	{
		"name": "Royal Carriage",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve"
		],
		"cost": 5,
		"description": "+1 Action<br>Put this on your Tavern mat.<hr>Directly after resolving an Action, if it&apos;s still in play, you may call this, to replay that Action."
	},
	{
		"name": "Storyteller",
		"set": "Adventures",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Action<br>+1 Coin<br>Play up to 3 Treasures from your hand. Pay all of your Coins; +1 Card per Coin paid."
	},
	{
		"name": "Swamp Hag",
		"set": "Adventures",
		"type": [
			"Action",
			"Attack",
			"Duration"
		],
		"cost": 5,
		"description": "Until your next turn, when any other player buys a card, he gains a Curse.<br>At the start of your next turn:<br>+3 Coins"
	},
	{
		"name": "Treasure Trove",
		"set": "Adventures",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "2 Coins<br>When you play this, gain a Gold and a Copper."
	},
	{
		"name": "Wine Merchant",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve"
		],
		"cost": 5,
		"description": "+1 Buy<br>+4 Coins<br>Put this on your Tavern mat.<hr>At the end of your Buy phase, if you have at least 2 Coins unspent, you may discard this from your Tavern mat."
	},
	{
		"name": "Hireling",
		"set": "Adventures",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 6,
		"description": "At the start of each of your turns for the rest of the game:<br>+1 Card<br><i>(This stays in play.)</i>"
	},
	{
		"name": "Soldier",
		"set": "Adventures",
		"type": [
			"Action",
			"Attack",
			"Traveller"
		],
		"cost": 3,
		"description": "+2 Coins<br>+1 Coin per other Attack you have in play. Each other player with 4 or more cards in hand discards a card.<hr>When you discard this from play, you may exchange it for a Fugitive.<br><i>This is not in the Supply.)</i>"
	},
	{
		"name": "Fugitive",
		"set": "Adventures",
		"type": [
			"Action",
			"Traveller"
		],
		"cost": 4,
		"description": "+2 Cards<br>+1Action<br>Discard a card.<hr>When you discard this from play, you may exchange it for a Disciple.<br><i>(This card is not in the Supply.)</i>"
	},
	{
		"name": "Disciple",
		"set": "Adventures",
		"type": [
			"Action",
			"Traveller"
		],
		"cost": 5,
		"description": "You may play an Action card from your hand twice. Gain a copy of it.<hr>When you discard this from play, you may exchange it for a Teacher.<br><i>(This is not in the Supply.)</i>"
	},
	{
		"name": "Teacher",
		"set": "Adventures",
		"type": [
			"Action",
			"Reserve"
		],
		"cost": 6,
		"description": "Put this on your Tavern mat.<hr>At the start of your turn, you may call this, to move your +1 Card, +1 Action, +1 Buy, or +1 Coin token to an Action Supply pile you have no tokens on (when you play a card from that pile, you first get that bonus).<br><i>(This is not in the Supply.)</i>"
	},
	{
		"name": "Treasure Hunter",
		"set": "Adventures",
		"type": [
			"Action",
			"Traveller"
		],
		"cost": 3,
		"description": "+1 Action<br>+1 Coin<br>Gain a Silver per card the player to your right gained in his last turn.<hr>When you discard this from play, you may exchange it for a Warrior.<br><i>(This is not in the Supply.)</i>"
	},
	{
		"name": "Warrior",
		"set": "Adventures",
		"type": [
			"Action",
			"Attack",
			"Traveller"
		],
		"cost": 4,
		"description": "+2 Cards<br>For each Traveller you have in play (including this), each other player discards the top card of his deck and trashes it if it costs 3 Coins or 4 Coins.<hr>When you discard this from play, you may exchange it for a Hero.<br><i>(This is not in the Supply.)</i>"
	},
	{
		"name": "Hero",
		"set": "Adventures",
		"type": [
			"Action",
			"Traveller"
		],
		"cost": 5,
		"description": "+2 Coins<br>Gain a Treasure.<hr>When you discard this from play, you may exchange it for a Champion.<br><i>(This is not in the Supply.)</i>"
	},
	{
		"name": "Champion",
		"set": "Adventures",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 6,
		"description": "+1 Action<br>For the rest of the game, when another player plays an Attack, it doesn&apos;t affect you, and when you play an Action, +1 Action.<br><i>(This stays in play. This is not in the Supply.)</i>"
	},
	{
		"name": "Alms",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 0,
		"description": "Once per turn: If you have no Treasures in play, gain a card costing up to 4 Coins."
	},
	{
		"name": "Borrow",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 0,
		"description": "+1 Buy<br>Once per turn: If your -1 Card token isn&apos;t on your deck, put it there and +1 Coin."
	},
	{
		"name": "Quest",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 0,
		"description": "You may discard an Attack, two Curses, or six cards. If you do, gain a Gold."
	},
	{
		"name": "Save",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 1,
		"description": "+1 Buy<br>Once per turn: Set aside a card from your hand, and put it into your hand at end of turn (after drawing)."
	},
	{
		"name": "Scouting Party",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 2,
		"description": "+1 Buy<br>Look at the top 5 cards of your deck. Discard 3 of them and put the rest back in any order."
	},
	{
		"name": "Travelling Fair",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 2,
		"description": "+2 Buys<br>When you gain a card this turn, you may put it on top of your deck."
	},
	{
		"name": "Bonfire",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 3,
		"description": "Trash up to 2 cards you have in play."
	},
	{
		"name": "Expedition",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 3,
		"description": "Draw 2 extra cards for your next hand."
	},
	{
		"name": "Ferry",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 3,
		"description": "Move your -2 Coins cost token to an Action Supply pile (cards from that pile cost 2 Coins less on your turns, but  not less than 0 Coins)."
	},
	{
		"name": "Plan",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 3,
		"description": "Move your Trashing token to an Action supply pile (when you buy a card from that pile, you may trash a card from your hand.)"
	},
	{
		"name": "Mission",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 4,
		"description": "Once per turn: If the previous turn wasn&apos;t yours, take another turn after this one, in which you can&apos;t buy cards."
	},
	{
		"name": "Pilgrimage",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 4,
		"description": "Once per turn: Turn your Journey token over (it starts face up); then if it&apos;s face up, choose up to 3 differently named cards you have in play and gain a copy of each."
	},
	{
		"name": "Ball",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 5,
		"description": "Take your -1 Coin token. Gain 2 cards each costing up to 4 Coins."
	},
	{
		"name": "Raid",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 5,
		"description": "Gain a Silver per Silver you have in play. Each other player puts his -1 Card token on his deck."
	},
	{
		"name": "Seaway",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 5,
		"description": "Gain an Action card costing up to 4 Coins. Move your +1 Buy token to its pile (when you play a card from that pile, you first get +1 Buy)."
	},
	{
		"name": "Trade",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 5,
		"description": "Trash up to 2 cards from your hand. Gain a Silver per card you trashed."
	},
	{
		"name": "Lost Arts",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 6,
		"description": "Move your +1 Action token to an Action Supply pile (when you play a card from that pile, you first get +1 Action)."
	},
	{
		"name": "Training",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 6,
		"description": "Move your +1 Coin token to an Action Supply pile (when you play a card from that pile, you first get +1 Coin)."
	},
	{
		"name": "Inheritance",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 7,
		"description": "Once per game: Set aside a non-Victory Action card from the Supply costing up to 4 Coins. Move your Estate token to it (your Estates gain the abilities and types of that card)."
	},
	{
		"name": "Pathfinding",
		"set": "Adventures",
		"type": [
			"Event"
		],
		"cost": 8,
		"description": "Move your +1 Card token to an Action Supply pile (when you play a card from that pile, you first get +1 Card)."
	},
	{
		"name": "City Quarter",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 0,
		"description": "+2 Actions<br>Reveal your hand. +1 Card per Action card revealed."
	},
	{
		"name": "Engineer",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 0,
		"description": "Gain a card costing up to 4 Coins. You may trash this. If you do, gain a card costing up to 4 Coins."
	},
	{
		"name": "Overlord",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 0,
		"description": "Play this as if it were an Action card in the Supply costing up to 5 Coins. This is that card until it leaves play."
	},
	{
		"name": "Royal Blacksmith",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 0,
		"description": "+5 Cards<br>Reveal your hand; discard the Coppers."
	},
	{
		"name": "Encampment/Plunder",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "This pile starts the game with 5 copies of Encampment on top, then 5 copies of Plunder. Only the top card of the pile can be gained or bought."
	},
	{
		"name": "Patrician/Emporium",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "This pile starts the game with 5 copies of Patrician on top, then 5 copies of Emporium. Only the top card of the pile can be gained or bought."
	},
	{
		"name": "Settlers/Bustling Village",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "This pile starts the game with 5 copies of Settlers on top, then 5 copies of Bustling Village. Only the top card of the pile can be gained or bought."
	},
	{
		"name": "Castles",
		"set": "Empires",
		"type": [
			"Victory",
			"Castle"
		],
		"cost": 3,
		"description": "Sort the castle pile by cost, putting the more expensive Castles on the bottom. For a 2-player game, use only one of each Castle. Only the top card of the pile may be gained or bought."
	},
	{
		"name": "Catapult/Rocks",
		"set": "Empires",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 3,
		"description": "This pile starts the game with 5 copies of Catapult on top, then 5 copies of Rocks. Only the top card of the pile can be gained or bought."
	},
	{
		"name": "Chariot Race",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Action<br>"
	},
	{
		"name": "Enchantress",
		"set": "Empires",
		"type": [
			"Action",
			"Attack",
			"Duration"
		],
		"cost": 3,
		"description": "Until your next turn, the first time each other player plays an Action card on their turn, they get +1 Card and +1 Action instead of following its instructions.<br>At the start of your next turn,<br>+1 Cards"
	},
	{
		"name": "Farmer's Market",
		"set": "Empires",
		"type": [
			"Action",
			"Gathering"
		],
		"cost": 3,
		"description": "+1 Buy<br>If there are 4 Victory or more on the Farmer&apos;s Market Supply pile, take them and trash this. Otherwise, add 1 Victory to the pile and then +1 Coin per 1 Victory on the pile."
	},
	{
		"name": "Gladiator/Fortune",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "This pile starts the game with 5 copies of Gladiator on top, then 5 copies of Fortune. Only the top card of the pile can be gained or bought."
	},
	{
		"name": "Sacrifice",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Trash a card from your hand. If it&apos;s an...<br>Action card, +1 Cards, +2 Actions<br>Treasure card, +2 Coins<br>Victory card, +2 Victory"
	},
	{
		"name": "Temple",
		"set": "Empires",
		"type": [
			"Action",
			"Gathering"
		],
		"cost": 4,
		"description": "+1 Victory<br>Trash from 1 to 3 differently named cards from your hand. Add 1 Victory to the Temple Supply pile.<hr>When you gain this, take all the Victory from the Temple Supply pile."
	},
	{
		"name": "Villa",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+2 Actions<br>+1 Buy<br>+1 Coin<hr>When you gain this, put it into your hand, +1 Action, and if it&apos;s your Buy phase return to your Action phase."
	},
	{
		"name": "Archive",
		"set": "Empires",
		"type": [
			"Action",
			"Duration"
		],
		"cost": 5,
		"description": "+1 Action<br>Set aside the top 3 cards of your deck face down (you may look at them). Now and at the start of your next two turns, put one into your hand."
	},
	{
		"name": "Capital",
		"set": "Empires",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "6 Coins<br>+1 Buy<hr>When you discard this from play, take 6 Debt, and then you may pay off Debt."
	},
	{
		"name": "Charm",
		"set": "Empires",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "When you play this, choose one: +1 Buy and +2 Coins; or the next time you buy a card this turn, you may also gain a differently named card with the same cost."
	},
	{
		"name": "Crown",
		"set": "Empires",
		"type": [
			"Action",
			"Treasure"
		],
		"cost": 5,
		"description": "If it&apos;s your Action phase, you may play an Action from your hand twice. If it&apos;s your Buy phase, you may play a Treasure from your hand twice."
	},
	{
		"name": "Forum",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<br>Discard 2 cards.<hr>When you buy this, +1 Buy."
	},
	{
		"name": "Groundskeeper",
		"set": "Empires",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<hr>While this is in play, when you gain a Victory card, +1 Victory."
	},
	{
		"name": "Legionary",
		"set": "Empires",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "+3 Coins<br>You may reveal a Gold from your hand. If you do, each other player discards down to 2 cards in hand, then draws a card."
	},
	{
		"name": "Wild Hunt",
		"set": "Empires",
		"type": [
			"Action",
			"Gathering"
		],
		"cost": 5,
		"description": "Choose one: +3 Cards and add 1 Victory to the Wild Hunt Supply pile; or gain an Estate, and if you do, take the Victory from the pile."
	},
	{
		"name": "Advance",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 0,
		"description": "You may trash an Action card from your hand. If you do, gain an Action card costing up to 6 Coins."
	},
	{
		"name": "Annex",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 0,
		"description": "Look through your discard pile. Shuffle all but up to 5 cards from it into your deck. Gain a Duchy."
	},
	{
		"name": "Donate",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 0,
		"description": "After this turn, put all cards from your deck and discard pile into your hand, trash any number, shuffle your hand into your deck, then draw 5 cards."
	},
	{
		"name": "Triumph",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 0,
		"description": "Gain an Estate.BBIf you did, +1 Victory per card you&apos;ve gained this turn."
	},
	{
		"name": "Delve",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 2,
		"description": "+1 BuyBBGain a Silver."
	},
	{
		"name": "Tax",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 2,
		"description": "Add 2 Debt to a Supply pile.HHSetup: Add 1 Debt to each Supply pile. When a player buys a card, they take the Debt from its pile."
	},
	{
		"name": "Banquet",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 3,
		"description": "Gain 2 Coppers and a non-Victory card costing up to 5 Coins."
	},
	{
		"name": "Ritual",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 4,
		"description": "Gain a Curse. If you do, trash a card from your hand. +1 Victory per 1 Coin it cost."
	},
	{
		"name": "Salt the Earth",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 4,
		"description": "+1 VictoryBBTrash a Victory card from the Supply."
	},
	{
		"name": "Wedding",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 4,
		"description": "+1 VictoryBBGain a Gold."
	},
	{
		"name": "Windfall",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 5,
		"description": "If your deck and discard pile are empty, gain 3 Golds."
	},
	{
		"name": "Conquest",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 6,
		"description": "Gain 2 Silvers.<br>+1 Victory per Silver you&apos;ve gained this turn."
	},
	{
		"name": "Dominate",
		"set": "Empires",
		"type": [
			"Event"
		],
		"cost": 14,
		"description": "Gain a Province. If you do, +9 Victory"
	},
	{
		"name": "Aqueduct",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you gain a Treasure, move 1 Victory from its pile to this.BBWhen you gain a Victory card, take the Victory from this.HHSetup: Put 8 Victory on the Silver and Gold piles."
	},
	{
		"name": "Arena",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "At the start of your Buy phase, you may discard an Action card. If you do, take 2 Victory from here.HHSetup: Put 6 Victory here per player."
	},
	{
		"name": "Bandit Fort",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, -2 Victory for each Silver and each Gold you have."
	},
	{
		"name": "Basilica",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you buy a card, if you have 2 Coins or more left, take 2 Victory from here.HHSetup: Plus 6 Victory here per player."
	},
	{
		"name": "Baths",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you end your turn without having gained a card, take 2 Victory from here.HHSetup: Put 6 Victory here per player."
	},
	{
		"name": "Battlefield",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you gain a Victory card, take 2 Victory from here.HHSetup: Put 6 Victory here per player."
	},
	{
		"name": "Colonnade",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you buy an Action card, if you have a copy of it in play, take 2 Victory from here.HHSetup: Put 6 Victory here per player."
	},
	{
		"name": "Defiled Shrine",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you gain an Action, move 1 Victory from its pile to this. When you buy a Curse, take the Victory from this.HHSetup: Put 2 Victory on each non-Gathering Action Supply pile."
	},
	{
		"name": "Fountain",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 15 Victory if you have at least 10 Coppers."
	},
	{
		"name": "Keep",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 5 Victory per differently named Treasure you have, that you have more copies of than each other player, or tied for most."
	},
	{
		"name": "Labyrinth",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you gain a 2nd card in one of your turns, take 2 Victory from here.HHSetup: Put 6 Victory here per player."
	},
	{
		"name": "Mountain Pass",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you are the first player to gain a Province, after that turn, each player bids once, up to 40 Debt, ending with you. High bidder gets +8 Victory and takes the Debt they bid."
	},
	{
		"name": "Museum",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 2 Victory per differently named card you have."
	},
	{
		"name": "Obelisk",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 2 Victory per card you have from the chosen pile.HHSetup: Choose a random Action Supply pile."
	},
	{
		"name": "Orchard",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 4 Victory per differently named Action card you have 3 or more copies of."
	},
	{
		"name": "Palace",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 3 Victory per set you have of Copper - Silver - Gold."
	},
	{
		"name": "Tomb",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When you trash a card, +1 Victory."
	},
	{
		"name": "Tower",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 1 Victory per non-Victory card you have from an empty Supply pile."
	},
	{
		"name": "Triumphal Arch",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, 3 Victory per copy you have of the 2nd most common Action card among your cards (if it&apos;s a tie, count either)."
	},
	{
		"name": "Wall",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, -1 Victory per card you have after the first 15."
	},
	{
		"name": "Wolf Den",
		"set": "Empires",
		"type": [
			"Landmark"
		],
		"cost": 0,
		"description": "When scoring, -3 Victory per card you have exactly one copy of."
	},
	{
		"name": "Harbinger",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Card<br>+1 Action<br>Look through your discard pile. You may put a card from it onto your deck."
	},
	{
		"name": "Merchant",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+1 Card<br>+1 Action<br>The first tim eyou play a Silver this turn, +1 Coin."
	},
	{
		"name": "Vassal",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+2 Coins<br>Discard the top card of your deck. If it&apos;s an Action card, you may play it."
	},
	{
		"name": "Poacher",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card<br>+1 Action<br>+1 Coin<br>Discard a card per empty Supply pile."
	},
	{
		"name": "Bandit",
		"set": "Base",
		"type": [
			"Action",
			"Attack"
		],
		"cost": 5,
		"description": "Gain a Gold. Each other player reveals the top 2 cards of their deck, trashes a revealed Treasure other than Copper, and discards the rest."
	},
	{
		"name": "Sentry",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Card<br>+1 Action<br>Look at the top 2 cards of your deck. Trash and/or discard any number of them. Put the rest back on top in any order."
	},
	{
		"name": "Artisan",
		"set": "Base",
		"type": [
			"Action"
		],
		"cost": 6,
		"description": "Gain a card to your hand costing up to 5 Coins.<br>Put a card from yoru hand onto your deck."
	},
	{
		"name": "Black Market",
		"set": "Promo",
		"type": [
			"Action"
		],
		"cost": 3,
		"description": "+2 Coins, Reveal the top 3 cards of the Black Market deck. You may buy one of them immediately. Put the unbought cards on the bottom of the Black Market deck in any order. <br><i>(Before the game, make a Black Market deck out of one copy of each Kingdom card not in the supply.)</i>."
	},
	{
		"name": "Envoy",
		"set": "Promo",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "Reveal the top 5 cards of your deck. The player to your left chooses one for you to discard. Draw the rest."
	},
	{
		"name": "Walled Village",
		"set": "Promo",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+1 Card<br>+2 Actions<hr>At the start of Clean-up, if you have this and no more than one other Action card in play, you may put this on top of your deck."
	},
	{
		"name": "Governor",
		"set": "Promo",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+1 Action<br><br>Choose one; you get the version in parentheses: Each player gets +1 (+3) Cards; or each player gains a Silver (Gold); or each player may trash a card from his hand and gain a card costing exactly 1 Coin (2 Coins) more."
	},
	{
		"name": "Stash",
		"set": "Promo",
		"type": [
			"Treasure"
		],
		"cost": 5,
		"description": "Worth 2 Coins. When you shuffle, you may put this anywhere in your deck."
	},
	{
		"name": "Prince",
		"set": "Promo",
		"type": [
			"Action"
		],
		"cost": 8,
		"description": "You may set this aside. If you do, set aside an Action card from your hand costing up to 4 coins. At the start of each of your turns, play that Action, setting it aside again when you discard it from play. (Stop playing it if you fail to set it aside on a turn you play it.)"
	},
	{
		"name": "Copper",
		"set": "Base Cards",
		"type": [
			"Treasure"
		],
		"cost": 0,
		"description": "1 Coin"
	},
	{
		"name": "Curse",
		"set": "Base Cards",
		"type": [
			"Curse"
		],
		"cost": 0,
		"description": "-1 Victory"
	},
	{
		"name": "Estate",
		"set": "Base Cards",
		"type": [
			"Victory"
		],
		"cost": 2,
		"description": "1 Victory"
	},
	{
		"name": "Silver",
		"set": "Base Cards",
		"type": [
			"Treasure"
		],
		"cost": 3,
		"description": "2 Coins"
	},
	{
		"name": "Potion",
		"set": "Base Cards",
		"type": [
			"Treasure"
		],
		"cost": 4,
		"description": "1 Potion"
	},
	{
		"name": "Duchy",
		"set": "Base Cards",
		"type": [
			"Victory"
		],
		"cost": 5,
		"description": "3 Victory"
	},
	{
		"name": "Gold",
		"set": "Base Cards",
		"type": [
			"Treasure"
		],
		"cost": 6,
		"description": "3 Coins"
	},
	{
		"name": "Province",
		"set": "Base Cards",
		"type": [
			"Victory"
		],
		"cost": 8,
		"description": "6 Victory"
	},
	{
		"name": "Platinum",
		"set": "Base Cards",
		"type": [
			"Treasure"
		],
		"cost": 9,
		"description": "5 Coins"
	},
	{
		"name": "Colony",
		"set": "Base Cards",
		"type": [
			"Victory"
		],
		"cost": 11,
		"description": "10 Victory"
	},
	{
		"name": "Copper",
		"set": "Common",
		"type": [
			"Treasure"
		],
		"cost": 0,
		"description": "1 Coin."
	},
	{
		"name": "Curse",
		"set": "Common",
		"type": [
			"Curse"
		],
		"cost": 0,
		"description": "-1 Victory."
	},
	{
		"name": "Estate",
		"set": "Common",
		"type": [
			"Victory"
		],
		"cost": 2,
		"description": "1 Victory."
	},
	{
		"name": "Silver",
		"set": "Common",
		"type": [
			"Treasure"
		],
		"cost": 3,
		"description": "2 Coins."
	},
	{
		"name": "Duchy",
		"set": "Common",
		"type": [
			"Victory"
		],
		"cost": 5,
		"description": "3 Victory."
	},
	{
		"name": "Gold",
		"set": "Common",
		"type": [
			"Treasure"
		],
		"cost": 6,
		"description": "3 Coins."
	},
	{
		"name": "Province",
		"set": "Common",
		"type": [
			"Victory"
		],
		"cost": 8,
		"description": "6 Victory."
	},
	{
		"name": "Lurker",
		"type": [
			"Action"
		],
		"cost": 2,
		"description": "+1 Action<br>Choose one: Trash an Action card from the Supply, or gain an Action card from the trash.",
		"set": "Intrigue"
	},
	{
		"name": "Diplomat",
		"type": [
			"Action",
			"Reaction"
		],
		"cost": 4,
		"description": "+2 Cards<br>If you have 5 or fewer cards in hand (after drawing), +2 Actions.<br><hr class=\"border-bottom\"><br>When another player plays an Attack card, you may first reveal this from a hand of 5 or more cards, to draw 2 cards then discard 3.",
		"set": "Intrigue"
	},
	{
		"name": "Mill",
		"type": [
			"Action",
			"Victory"
		],
		"cost": 4,
		"description": "+1 Card, +1 Action.<br>You may discard 2 cards, for +2.",
		"set": "Intrigue"
	},
	{
		"name": "Secret Passage",
		"type": [
			"Action"
		],
		"cost": 4,
		"description": "+2 Cards +1 Action<br>Take a card from your hand and put it anywhere in your deck.",
		"set": "Intrigue"
	},
	{
		"name": "Courtier",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Reveal a card from your hand. For each type it has (Action, Attack, etc.), choose one: +1 Action; or +1 Buy; or +Coin3.png; or gain a Gold. The choices must be different.",
		"set": "Intrigue"
	},
	{
		"name": "Patrol",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "+3 Cards. Reveal the top 4 cards of your deck. Put the Victory cards and Curses into your hand. Put the rest back in any order.",
		"set": "Intrigue"
	},
	{
		"name": "Replace",
		"type": [
			"Action"
		],
		"cost": 5,
		"description": "Trash a card from your hand. Gain a card costing up to Coin2.png more than it. If the gained card is an Action or Treasure, put it onto your deck; if it's a Victory card, each other player gains a Curse.",
		"set": "Intrigue"
	}
];

/***/ })
/******/ ]);