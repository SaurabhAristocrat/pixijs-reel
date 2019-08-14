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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var app = new PIXI.Application(200, 100, { backgroundColor: 0x1099bb , forceCanvas : true  });\r\ndocument.body.appendChild(app.view);\r\n\r\nPIXI.loader\r\n    .add('examples/assets/eggHead.png', 'examples/assets/eggHead.png')\r\n    .add('examples/assets/flowerTop.png', 'examples/assets/flowerTop.png')\r\n    .add('examples/assets/helmlok.png', 'examples/assets/helmlok.png')\r\n    .add('examples/assets/skully.png', 'examples/assets/skully.png')\r\n    .load(onAssetsLoaded);\r\n\r\nvar REEL_WIDTH = app.screen.width /10;\r\nvar SYMBOL_SIZE = app.screen.width /10 -10;\r\n\r\n// onAssetsLoaded handler builds the example.\r\nfunction onAssetsLoaded() {\r\n    // Create different slot symbols.\r\n    var slotTextures = [\r\n        PIXI.Texture.fromImage('examples/assets/eggHead.png'),\r\n        PIXI.Texture.fromImage('examples/assets/flowerTop.png'),\r\n        PIXI.Texture.fromImage('examples/assets/helmlok.png'),\r\n        PIXI.Texture.fromImage('examples/assets/skully.png')\r\n    ];\r\n\r\n    // Build the reels\r\n    var reels = [];\r\n    var reelContainer = new PIXI.Container();\r\n    reelContainer.width = 200;\r\n    reelContainer.height = 50;\r\n    for (var i = 0; i < 5; i++) {\r\n        var rc = new PIXI.Container();\r\n        rc.x = i * REEL_WIDTH;\r\n        reelContainer.addChild(rc);\r\n\r\n        var reel = {\r\n            container: rc,\r\n            symbols: [],\r\n            position: 0,\r\n            previousPosition: 0,\r\n            blur: new PIXI.filters.BlurFilter()\r\n        };\r\n        reel.blur.blurX = 0;\r\n        reel.blur.blurY = 0;\r\n        rc.filters = [reel.blur];\r\n\r\n        // Build the symbols\r\n        for (var j = 0; j < 5; j++) {\r\n            var symbol = new PIXI.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);\r\n            // Scale the symbol to fit symbol area.\r\n            symbol.y = j * SYMBOL_SIZE;\r\n            symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);\r\n            symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);\r\n            reel.symbols.push(symbol);\r\n            rc.addChild(symbol);\r\n        }\r\n        reels.push(reel);\r\n    }\r\n    app.stage.addChild(reelContainer);\r\n\r\n    // Build top & bottom covers and position reelContainer\r\n    var margin = (app.screen.height - SYMBOL_SIZE * 3) / 2;\r\n    reelContainer.y =  0;\r\n    reelContainer.x = 100;\r\n    var top = new PIXI.Graphics();\r\n    top.beginFill(0, 1);\r\n    top.drawRect(0, 0, app.screen.width, margin/4);\r\n    var bottom = new PIXI.Graphics();\r\n    bottom.beginFill(0, 1);\r\n    bottom.drawRect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin);\r\n\r\n    // Add play text\r\n    var style = new PIXI.TextStyle({\r\n        fontFamily: 'Arial',\r\n        fontSize: 36,\r\n        fontStyle: 'italic',\r\n        fontWeight: 'bold',\r\n        fill: ['#ffffff', '#00ff99'], // gradient\r\n        stroke: '#4a1850',\r\n        strokeThickness: 5,\r\n        dropShadow: true,\r\n        dropShadowColor: '#000000',\r\n        dropShadowBlur: 4,\r\n        dropShadowAngle: Math.PI / 6,\r\n        dropShadowDistance: 6,\r\n        wordWrap: true,\r\n        wordWrapWidth: 440\r\n    });\r\n\r\n    var playText = new PIXI.Text('Play', style);\r\n    playText.x = 510;\r\n    playText.y = 100;\r\n    bottom.addChild(playText);\r\n\r\n    \r\n    app.stage.addChild(bottom);\r\n\r\n    // Set the interactivity.\r\n    bottom.interactive = true;\r\n    bottom.buttonMode = true;\r\n    bottom.addListener('pointerdown', function() {\r\n        startPlay();\r\n    });\r\n    top.addListener('pointerdown1', function() {\r\n        startPlay();\r\n    });\r\n\r\n    var running = false;\r\n\r\n    // Function to start playing.\r\n    function startPlay() {\r\n        if (running) return;\r\n        running = true;\r\n\r\n        for (var i = 0; i < reels.length; i++) {\r\n            var r = reels[i];\r\n            var extra = Math.floor(Math.random() * 3);\r\n            tweenTo(r, 'position', r.position + 10 + i * 5 + extra, 2500 + i * 600 + extra * 600, backout(0.5), null, i === reels.length - 1 ? reelsComplete : null);\r\n        }\r\n    }\r\n\r\n    // Reels done handler.\r\n    function reelsComplete() {\r\n        running = false;\r\n    }\r\n\r\n    // Listen for animate update.\r\n    app.ticker.add(function(delta) {\r\n        // Update the slots.\r\n        for (var i = 0; i < reels.length; i++) {\r\n            var r = reels[i];\r\n            // Update blur filter y amount based on speed.\r\n            // This would be better if calculated with time in mind also. Now blur depends on frame rate.\r\n            r.blur.blurY = (r.position - r.previousPosition) * 8;\r\n            r.previousPosition = r.position;\r\n\r\n            // Update symbol positions on reel.\r\n            for (var j = 0; j < r.symbols.length; j++) {\r\n                var s = r.symbols[j];\r\n                var prevy = s.y;\r\n                s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;\r\n                if (s.y < 0 && prevy > SYMBOL_SIZE) {\r\n                    // Detect going over and swap a texture.\r\n                    // This should in proper product be determined from some logical reel.\r\n                    s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];\r\n                    s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);\r\n                    s.x = Math.round((SYMBOL_SIZE - s.width) / 2);\r\n                }\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\n// Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.\r\nvar tweening = [];\r\nfunction tweenTo(object, property, target, time, easing, onchange, oncomplete) {\r\n    var tween = {\r\n        object: object,\r\n        property: property,\r\n        propertyBeginValue: object[property],\r\n        target: target,\r\n        easing: easing,\r\n        time: time,\r\n        change: onchange,\r\n        complete: oncomplete,\r\n        start: Date.now()\r\n    };\r\n\r\n    tweening.push(tween);\r\n    return tween;\r\n}\r\n// Listen for animate update.\r\napp.ticker.add(function(delta) {\r\n    var now = Date.now();\r\n    var remove = [];\r\n    for (var i = 0; i < tweening.length; i++) {\r\n        var t = tweening[i];\r\n        var phase = Math.min(1, (now - t.start) / t.time);\r\n\r\n        t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));\r\n        if (t.change) t.change(t);\r\n        if (phase === 1) {\r\n            t.object[t.property] = t.target;\r\n            if (t.complete) t.complete(t);\r\n            remove.push(t);\r\n        }\r\n    }\r\n    for (var i = 0; i < remove.length; i++) {\r\n        tweening.splice(tweening.indexOf(remove[i]), 1);\r\n    }\r\n});\r\n\r\n// Basic lerp funtion.\r\nfunction lerp(a1, a2, t) {\r\n    return a1 * (1 - t) + a2 * t;\r\n}\r\n\r\n// Backout function from tweenjs.\r\n// https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js\r\nfunction backout(amount) {\r\n    return function(t) {\r\n        return (--t * t * ((amount + 1) * t + amount) + 1);\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });