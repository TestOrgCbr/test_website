// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../semantic/src/semantic/semantic.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../../../yuma_website_assets/ASSETS/desktopBackground.png":[["desktopBackground.b0929cf7.png","../yuma_website_assets/ASSETS/desktopBackground.png"],"../yuma_website_assets/ASSETS/desktopBackground.png"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Black.otf":[["Montserrat-Black.8aed406a.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Black.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Black.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-BlackItalic.otf":[["Montserrat-BlackItalic.db01534b.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-BlackItalic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-BlackItalic.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Bold.otf":[["Montserrat-Bold.3b019c2f.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Bold.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Bold.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-BoldItalic.otf":[["Montserrat-BoldItalic.00b51cc6.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-BoldItalic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-BoldItalic.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ExtraLight.otf":[["Montserrat-ExtraLight.0ca18470.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ExtraLight.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ExtraLight.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ExtraLightItalic.otf":[["Montserrat-ExtraLightItalic.a61a58e6.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ExtraLightItalic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ExtraLightItalic.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Italic.otf":[["Montserrat-Italic.b8bdb407.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Italic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Italic.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Light.otf":[["Montserrat-Light.26ecdd5d.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Light.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Light.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-LightItalic.otf":[["Montserrat-LightItalic.7b886ae5.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-LightItalic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-LightItalic.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Medium.otf":[["Montserrat-Medium.4f9c5960.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Medium.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Medium.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-MediumItalic.otf":[["Montserrat-MediumItalic.7791a149.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-MediumItalic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-MediumItalic.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Regular.otf":[["Montserrat-Regular.93b87198.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Regular.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Regular.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-SemiBold.otf":[["Montserrat-SemiBold.60241993.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-SemiBold.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-SemiBold.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-SemiBoldItalic.otf":[["Montserrat-SemiBoldItalic.c34e7123.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-SemiBoldItalic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-SemiBoldItalic.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Thin.otf":[["Montserrat-Thin.b829e698.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Thin.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-Thin.otf"],"./../../../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ThinItalic.otf":[["Montserrat-ThinItalic.d25f48dc.otf","../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ThinItalic.otf"],"../yuma_website_assets/TYPEFACE-Montserrat/montserrat/Montserrat-ThinItalic.otf"],"./themes/default/assets/images/flags.png":[["flags.9a8aa07b.png","../semantic/src/semantic/themes/default/assets/images/flags.png"],"../semantic/src/semantic/themes/default/assets/images/flags.png"],"./themes/default/assets/fonts/icons.eot":[["icons.eb3f65df.eot","../semantic/src/semantic/themes/default/assets/fonts/icons.eot"],"../semantic/src/semantic/themes/default/assets/fonts/icons.eot"],"./themes/default/assets/fonts/icons.woff2":[["icons.e728d918.woff2","../semantic/src/semantic/themes/default/assets/fonts/icons.woff2"],"../semantic/src/semantic/themes/default/assets/fonts/icons.woff2"],"./themes/default/assets/fonts/icons.woff":[["icons.198cc63b.woff","../semantic/src/semantic/themes/default/assets/fonts/icons.woff"],"../semantic/src/semantic/themes/default/assets/fonts/icons.woff"],"./themes/default/assets/fonts/icons.ttf":[["icons.99cc635f.ttf","../semantic/src/semantic/themes/default/assets/fonts/icons.ttf"],"../semantic/src/semantic/themes/default/assets/fonts/icons.ttf"],"./themes/default/assets/fonts/icons.svg":[["icons.bd7d25cb.svg","../semantic/src/semantic/themes/default/assets/fonts/icons.svg"],"../semantic/src/semantic/themes/default/assets/fonts/icons.svg"],"./themes/default/assets/fonts/outline-icons.eot":[["outline-icons.e642e3b2.eot","../semantic/src/semantic/themes/default/assets/fonts/outline-icons.eot"],"../semantic/src/semantic/themes/default/assets/fonts/outline-icons.eot"],"./themes/default/assets/fonts/outline-icons.woff2":[["outline-icons.86bb3f06.woff2","../semantic/src/semantic/themes/default/assets/fonts/outline-icons.woff2"],"../semantic/src/semantic/themes/default/assets/fonts/outline-icons.woff2"],"./themes/default/assets/fonts/outline-icons.woff":[["outline-icons.432db194.woff","../semantic/src/semantic/themes/default/assets/fonts/outline-icons.woff"],"../semantic/src/semantic/themes/default/assets/fonts/outline-icons.woff"],"./themes/default/assets/fonts/outline-icons.ttf":[["outline-icons.b30484d6.ttf","../semantic/src/semantic/themes/default/assets/fonts/outline-icons.ttf"],"../semantic/src/semantic/themes/default/assets/fonts/outline-icons.ttf"],"./themes/default/assets/fonts/outline-icons.svg":[["outline-icons.93225286.svg","../semantic/src/semantic/themes/default/assets/fonts/outline-icons.svg"],"../semantic/src/semantic/themes/default/assets/fonts/outline-icons.svg"],"./themes/default/assets/fonts/brand-icons.eot":[["brand-icons.f119215e.eot","../semantic/src/semantic/themes/default/assets/fonts/brand-icons.eot"],"../semantic/src/semantic/themes/default/assets/fonts/brand-icons.eot"],"./themes/default/assets/fonts/brand-icons.woff2":[["brand-icons.daa78d2f.woff2","../semantic/src/semantic/themes/default/assets/fonts/brand-icons.woff2"],"../semantic/src/semantic/themes/default/assets/fonts/brand-icons.woff2"],"./themes/default/assets/fonts/brand-icons.woff":[["brand-icons.373b3a47.woff","../semantic/src/semantic/themes/default/assets/fonts/brand-icons.woff"],"../semantic/src/semantic/themes/default/assets/fonts/brand-icons.woff"],"./themes/default/assets/fonts/brand-icons.ttf":[["brand-icons.d2edc49c.ttf","../semantic/src/semantic/themes/default/assets/fonts/brand-icons.ttf"],"../semantic/src/semantic/themes/default/assets/fonts/brand-icons.ttf"],"./themes/default/assets/fonts/brand-icons.svg":[["brand-icons.f13e0d3a.svg","../semantic/src/semantic/themes/default/assets/fonts/brand-icons.svg"],"../semantic/src/semantic/themes/default/assets/fonts/brand-icons.svg"],"./../../../yuma_website_assets/ASSETS/buttonHooverMenu.png":[["buttonHooverMenu.3927693e.png","../yuma_website_assets/ASSETS/buttonHooverMenu.png"],"../yuma_website_assets/ASSETS/buttonHooverMenu.png"],"./../../../yuma_website_assets/ASSETS/backgroundOfferMobile.png":[["backgroundOfferMobile.ed942794.png","../yuma_website_assets/ASSETS/backgroundOfferMobile.png"],"../yuma_website_assets/ASSETS/backgroundOfferMobile.png"],"./../../../yuma_website_assets/ASSETS/backMobile.png":[["backMobile.6ce45d19.png","../yuma_website_assets/ASSETS/backMobile.png"],"../yuma_website_assets/ASSETS/backMobile.png"],"./../../../yuma_website_assets/ASSETS/forwardMobile.png":[["forwardMobile.b8705116.png","../yuma_website_assets/ASSETS/forwardMobile.png"],"../yuma_website_assets/ASSETS/forwardMobile.png"],"_css_loader":"../../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53123" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/semantic.min.c6c9cd77.js.map