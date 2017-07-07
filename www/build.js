/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		var templates = __webpack_require__(10);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _run = __webpack_require__(3);

	var _run2 = _interopRequireDefault(_run);

	var _config = __webpack_require__(4);

	var _config2 = _interopRequireDefault(_config);

	var _compareTextModule = __webpack_require__(5);

	var _compareTextModule2 = _interopRequireDefault(_compareTextModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = angular.module('test', ['ui.router', 'compareText', 'templates']).config(_config2.default).run(_run2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
		exports.default = [function () {}];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('index', {
	        url: '/index',
	        views: {
	            'header': {
	                templateUrl: 'modules/header/header.html'
	            },
	            'content': {
	                templateUrl: 'modules/compareText/compareHead.html',
	                controller: 'compareTextCtrl',
	                controllerAs: 'compareText'
	            }
	        }
	    }).state('index.front', {
	        url: '/front',
	        templateUrl: 'modules/compareText/compareFront.html'
	    });

	    $urlRouterProvider.otherwise('/index/front');
	}];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _compareTextService = __webpack_require__(6);

	var _compareTextService2 = _interopRequireDefault(_compareTextService);

	var _compareTextCtrl = __webpack_require__(8);

	var _compareTextCtrl2 = _interopRequireDefault(_compareTextCtrl);

	var _compareTextResultDirective = __webpack_require__(9);

	var _compareTextResultDirective2 = _interopRequireDefault(_compareTextResultDirective);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = angular.module('compareText', []).factory('compareTextService', _compareTextService2.default).directive('compareText', _compareTextResultDirective2.default).controller('compareTextCtrl', _compareTextCtrl2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	            value: true
	});

	var _classCallCheck2 = __webpack_require__(7);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [function () {

	            var service = {};

	            var CompareEntity = function CompareEntity() {
	                        (0, _classCallCheck3.default)(this, CompareEntity);

	                        this.text1 = null;
	                        this.text2 = null;
	                        this.arr1 = [];
	                        this.arr2 = [];
	                        this.result = [];
	                        this.pull = [];
	            };

	            CompareEntity.prototype.splitTexts = function () {

	                        if (this.text1) {
	                                    this.arr1 = this.text1.split('\n');
	                        }

	                        if (this.text2) {
	                                    this.arr2 = this.text2.split('\n');
	                        }

	                        if (!this.text1 && !this.text2) {

	                                    this.result = [];
	                        } else {

	                                    this.check();
	                        }
	            };

	            CompareEntity.prototype.check = function () {

	                        var self = this;
	                        var result = [];
	                        var localPull = [];
	                        var lock = void 0;

	                        self.arr1.forEach(function (item1, index1) {

	                                    result.push(self.checkItem(item1, index1, self.arr2, self.arr1));
	                        });

	                        self.pull.forEach(function (item) {

	                                    result.forEach(function (item2) {

	                                                if (item2.text.indexOf(item) !== -1 && !lock) {
	                                                            lock = true;
	                                                }
	                                    });

	                                    if (!lock) {

	                                                localPull.push(item);
	                                    }

	                                    lock = false;
	                        });

	                        localPull.forEach(function (item) {
	                                    result.push({
	                                                icon: '+',
	                                                text: item
	                                    });
	                        });

	                        self.result = result;
	            };

	            CompareEntity.prototype.addToPull = function (item) {

	                        var exist = void 0;

	                        this.pull.forEach(function (item1) {

	                                    if (item1 === item) {
	                                                exist = true;
	                                    }
	                        });

	                        if (!exist) {

	                                    this.pull.push(item);
	                        }
	            };

	            CompareEntity.prototype.checkItem = function (item1, index1, arr, arr1) {

	                        var self = this;
	                        var result = void 0;
	                        var cacheEqualLine = void 0;
	                        var lock = void 0;

	                        for (var i = 0; i < arr.length; i++) {

	                                    if (arr[i] === item1) {

	                                                result = {
	                                                            icon: ' ',
	                                                            text: item1
	                                                };
	                                    } else {

	                                                self.addToPull(arr[i]);
	                                    }

	                                    if (i === index1) {

	                                                cacheEqualLine = arr[i];
	                                    }
	                        }

	                        if (!result && index1 > arr.length - 1) {

	                                    result = {
	                                                icon: '-',
	                                                text: item1
	                                    };
	                        } else if (!result && index1 <= arr.length - 1) {

	                                    arr1.forEach(function (item) {

	                                                if (item === cacheEqualLine) {

	                                                            lock = true;
	                                                }
	                                    });

	                                    if (!lock) {

	                                                result = {
	                                                            icon: '*',
	                                                            text: item1 + '|' + cacheEqualLine
	                                                };
	                                    } else {

	                                                result = {
	                                                            icon: '-',
	                                                            text: item1
	                                                };
	                                    }
	                        }

	                        return result;
	            };

	            service.getCompareEntity = function () {

	                        var compareEntity = void 0;

	                        function createInstance() {
	                                    return new CompareEntity();
	                        }

	                        return function () {
	                                    if (!compareEntity) compareEntity = createInstance();
	                                    return compareEntity;
	                        };
	            }();

	            return service;
	}];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ['compareTextService', function (compareTextService) {

	    var vm = this;

	    vm.compareEntity = compareTextService.getCompareEntity();
		}];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [function () {
	    return {
	        restrict: "E",
	        templateUrl: 'modules/compareText/compareResult.html',
	        scope: {
	            result: '='
	        }
	    };
		}];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('templates', []).run(['$templateCache', function ($templateCache) {
	  $templateCache.put('modules/compareText/compareFront.html', '<div class="row">\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="comment">Text 1</label>\r\n            <textarea class="form-control" rows="5" id="comment" ng-model="compareText.compareEntity.text1"></textarea>\r\n        </div>\r\n        <button class="btn btn-primary" ng-click="compareText.compareEntity.splitTexts()">Check</button>\r\n    </div>\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="comment1">Text 2</label>\r\n            <textarea class="form-control" rows="5" id="comment1" ng-model="compareText.compareEntity.text2"></textarea>\r\n        </div>\r\n    </div>\r\n</div>\r\n<compare-text result="compareText.compareEntity.result" ng-if="compareText.compareEntity.result.length !== 0"></compare-text>\r\n');
	  $templateCache.put('modules/compareText/compareHead.html', '<div class="row">\r\n    <div class="col-xs-12">\r\n        <h4 class="text-center">\r\n            Compare on front\r\n        </h4>\r\n    </div>\r\n</div>\r\n<ui-view></ui-view>');
	  $templateCache.put('modules/compareText/compareResult.html', '<div class="row result">\r\n    <div class="col-lg-12">\r\n        <div class="form-group">\r\n            <h4>Result</h4>\r\n            <table class="table table-striped">\r\n                <tr ng-repeat="item in result">\r\n                    <td ng-bind="$index + 1"></td>\r\n                    <td ng-bind="item.icon"></td>\r\n                    <td ng-bind="item.text"></td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n');
	  $templateCache.put('modules/header/header.html', '<div class="row">\r\n    <h2 class="text-center">\r\n        Test app\r\n    </h2>\r\n</div>');
		}]);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGRmMjliMGU5MWFmYzc1YjdkMGMiLCJ3ZWJwYWNrOi8vL2Rldi9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL3J1bi5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL2Rldi9qcy9tb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVUZXh0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRDdHJsLmpzIiwid2VicGFjazovLy9kZXYvanMvbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dFJlc3VsdERpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL3RlbXBsYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZGYyOWIwZTkxYWZjNzViN2QwYyIsImxldCB0ZW1wbGF0ZXMgPSByZXF1aXJlKCd0ZW1wbGF0ZXMnKTtcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL2VudHJ5LmpzIiwiaW1wb3J0IFJ1biBmcm9tICcuL3J1bic7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5cclxuaW1wb3J0IGNvbXBhcmVUZXh0IGZyb20gJy4vbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dE1vZHVsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCd0ZXN0JywgW1xyXG4gICAgJ3VpLnJvdXRlcicsXHJcbiAgICAnY29tcGFyZVRleHQnLFxyXG4gICAgJ3RlbXBsYXRlcydcclxuXSlcclxuLmNvbmZpZyhDb25maWcpXHJcbi5ydW4oUnVuKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvYXBwLmpzIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH1cclxuXVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvcnVuLmpzIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAgJyRzdGF0ZVByb3ZpZGVyJyxcclxuICAgICckdXJsUm91dGVyUHJvdmlkZXInLFxyXG4gICAgZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgICAgICRzdGF0ZVByb3ZpZGVyXHJcblxyXG4gICAgICAgICAgICAuc3RhdGUoJ2luZGV4Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2luZGV4JyxcclxuICAgICAgICAgICAgICAgIHZpZXdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2hlYWRlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2hlYWRlci9oZWFkZXIuaHRtbCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZUhlYWQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjb21wYXJlVGV4dEN0cmwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICdjb21wYXJlVGV4dCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAuc3RhdGUoJ2luZGV4LmZyb250Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2Zyb250JyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlRnJvbnQuaHRtbCdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9pbmRleC9mcm9udCcpO1xyXG4gICAgfV07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9qcy9jb25maWcuanMiLCJpbXBvcnQgY29tcGFyZVRleHRTZXJ2aWNlIGZyb20gJy4vY29tcGFyZVRleHRTZXJ2aWNlJztcclxuaW1wb3J0IGNvbXBhcmVUZXh0Q3RybCBmcm9tICcuL2NvbXBhcmVUZXh0Q3RybCc7XHJcbmltcG9ydCBjb21wYXJlVGV4dERpcmVjdGl2ZSBmcm9tICcuL2NvbXBhcmVUZXh0UmVzdWx0RGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdjb21wYXJlVGV4dCcsIFtdKVxyXG4uZmFjdG9yeSgnY29tcGFyZVRleHRTZXJ2aWNlJywgY29tcGFyZVRleHRTZXJ2aWNlKVxyXG4uZGlyZWN0aXZlKCdjb21wYXJlVGV4dCcsIGNvbXBhcmVUZXh0RGlyZWN0aXZlKVxyXG4uY29udHJvbGxlcignY29tcGFyZVRleHRDdHJsJywgY29tcGFyZVRleHRDdHJsKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRNb2R1bGUuanMiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IHNlcnZpY2UgPSB7fTtcclxuXHJcbiAgICAgICAgY2xhc3MgQ29tcGFyZUVudGl0eSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDEgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MiA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycjEgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyMiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVsbCA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBDb21wYXJlRW50aXR5LnByb3RvdHlwZS5zcGxpdFRleHRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0MSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycjEgPSB0aGlzLnRleHQxLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy50ZXh0Mil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycjIgPSB0aGlzLnRleHQyLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMudGV4dDEgJiYgIXRoaXMudGV4dDIpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgQ29tcGFyZUVudGl0eS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGxvY2FsUHVsbCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgbG9jaztcclxuXHJcbiAgICAgICAgICAgIHNlbGYuYXJyMS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtMSwgaW5kZXgxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2VsZi5jaGVja0l0ZW0oaXRlbTEsIGluZGV4MSwgc2VsZi5hcnIyLCBzZWxmLmFycjEpKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5wdWxsLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbihpdGVtMil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0yLnRleHQuaW5kZXhPZihpdGVtKSAhPT0gLTEgJiYgIWxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFsb2NrKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxQdWxsLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxvY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxQdWxsLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnKycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5yZXN1bHQgPSByZXN1bHQ7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIENvbXBhcmVFbnRpdHkucHJvdG90eXBlLmFkZFRvUHVsbCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZXhpc3Q7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnB1bGwuZm9yRWFjaChmdW5jdGlvbiAoaXRlbTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihpdGVtMSA9PT0gaXRlbSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhpc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZighZXhpc3Qpe1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucHVsbC5wdXNoKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBDb21wYXJlRW50aXR5LnByb3RvdHlwZS5jaGVja0l0ZW0gPSBmdW5jdGlvbiAoaXRlbTEsIGluZGV4MSwgYXJyLCBhcnIxKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XHJcbiAgICAgICAgICAgIGxldCBjYWNoZUVxdWFsTGluZTtcclxuICAgICAgICAgICAgbGV0IGxvY2s7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihhcnJbaV0gPT09IGl0ZW0xKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0xXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZFRvUHVsbChhcnJbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihpID09PSBpbmRleDEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWNoZUVxdWFsTGluZSA9IGFycltpXTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZighcmVzdWx0ICYmIGluZGV4MSA+IGFyci5sZW5ndGggLSAxKXtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJy0nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0xXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICghcmVzdWx0ICYmIGluZGV4MSA8PSBhcnIubGVuZ3RoIC0gMSl7XHJcblxyXG4gICAgICAgICAgICAgICAgYXJyMS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0gPT09IGNhY2hlRXF1YWxMaW5lKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWxvY2spe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICcqJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogaXRlbTEgKyAnfCcgKyBjYWNoZUVxdWFsTGluZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnLScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0xXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNlcnZpY2UuZ2V0Q29tcGFyZUVudGl0eSA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29tcGFyZUVudGl0eTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wYXJlRW50aXR5KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29tcGFyZUVudGl0eSkgY29tcGFyZUVudGl0eSA9IGNyZWF0ZUluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZUVudGl0eTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSkoKTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgfVxyXG5dXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dFNlcnZpY2UuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICAnY29tcGFyZVRleHRTZXJ2aWNlJyxcclxuICAgIGZ1bmN0aW9uIChjb21wYXJlVGV4dFNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgbGV0IHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgdm0uY29tcGFyZUVudGl0eSA9IGNvbXBhcmVUZXh0U2VydmljZS5nZXRDb21wYXJlRW50aXR5KCk7XHJcblxyXG4gICAgfVxyXG5dXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dEN0cmwuanMiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVJlc3VsdC5odG1sJyxcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdDogJz0nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRSZXN1bHREaXJlY3RpdmUuanMiLCJhbmd1bGFyLm1vZHVsZSgndGVtcGxhdGVzJywgW10pLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoJ21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZUZyb250Lmh0bWwnLCc8ZGl2IGNsYXNzPVwicm93XCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cXHJcXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29tbWVudFwiPlRleHQgMTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjVcIiBpZD1cImNvbW1lbnRcIiBuZy1tb2RlbD1cImNvbXBhcmVUZXh0LmNvbXBhcmVFbnRpdHkudGV4dDFcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgbmctY2xpY2s9XCJjb21wYXJlVGV4dC5jb21wYXJlRW50aXR5LnNwbGl0VGV4dHMoKVwiPkNoZWNrPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbW1lbnQxXCI+VGV4dCAyPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiNVwiIGlkPVwiY29tbWVudDFcIiBuZy1tb2RlbD1cImNvbXBhcmVUZXh0LmNvbXBhcmVFbnRpdHkudGV4dDJcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2Plxcclxcbjxjb21wYXJlLXRleHQgcmVzdWx0PVwiY29tcGFyZVRleHQuY29tcGFyZUVudGl0eS5yZXN1bHRcIiBuZy1pZj1cImNvbXBhcmVUZXh0LmNvbXBhcmVFbnRpdHkucmVzdWx0Lmxlbmd0aCAhPT0gMFwiPjwvY29tcGFyZS10ZXh0PlxcclxcbicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCdtb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVIZWFkLmh0bWwnLCc8ZGl2IGNsYXNzPVwicm93XCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTJcIj5cXHJcXG4gICAgICAgIDxoNCBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxyXFxuICAgICAgICAgICAgQ29tcGFyZSBvbiBmcm9udFxcclxcbiAgICAgICAgPC9oND5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPHVpLXZpZXc+PC91aS12aWV3PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCdtb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVSZXN1bHQuaHRtbCcsJzxkaXYgY2xhc3M9XCJyb3cgcmVzdWx0XCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxyXFxuICAgICAgICAgICAgPGg0PlJlc3VsdDwvaDQ+XFxyXFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dHIgbmctcmVwZWF0PVwiaXRlbSBpbiByZXN1bHRcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBuZy1iaW5kPVwiJGluZGV4ICsgMVwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgbmctYmluZD1cIml0ZW0uaWNvblwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgbmctYmluZD1cIml0ZW0udGV4dFwiPjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnbW9kdWxlcy9oZWFkZXIvaGVhZGVyLmh0bWwnLCc8ZGl2IGNsYXNzPVwicm93XCI+XFxyXFxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxyXFxuICAgICAgICBUZXN0IGFwcFxcclxcbiAgICA8L2gyPlxcclxcbjwvZGl2PicpO31dKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL3RlbXBsYXRlcy5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7OztBQUhBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7OztBQ0xBOzs7Ozs7Ozs7OztBQ0FBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBRkE7QUFlQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFPQTs7Ozs7Ozs7QUNUQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7OzsiLCJzb3VyY2VSb290IjoiIn0=