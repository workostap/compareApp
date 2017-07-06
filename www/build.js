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

		var templates = __webpack_require__(8);

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [function () {
	    console.log('code run2');
	}];

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
	                templateUrl: 'modules/compareText/compareText.html',
	                controller: 'compareTextCtrl',
	                controllerAs: 'compareText'
	            }
	        }
	    }).state('index.front', {
	        url: '/front',
	        templateUrl: 'modules/compareText/front.html'
	        // controller: 'compareTextCtrl',
	        // controllerAs: 'compareText'
	    }).state('index.front.result', {
	        url: '/result',
	        templateUrl: 'modules/compareText/result.html'
	        // controller: 'compareTextCtrl',
	        // controllerAs: 'compareText'
	    }).state('index.server', {
	        url: '/server',
	        templateUrl: 'modules/compareText/server.html'
	        // controller: 'compareTextCtrl',
	        // controllerAs: 'compareText'
	    });

	    $urlRouterProvider.otherwise('/index');
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

	var _compareTextCtrl = __webpack_require__(7);

	var _compareTextCtrl2 = _interopRequireDefault(_compareTextCtrl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		exports.default = angular.module('compareText', []).factory('compareTextService', _compareTextService2.default).controller('compareTextCtrl', _compareTextCtrl2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
		exports.default = [function () {}];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [function () {
	    var vm = this;

	    vm.text1 = null;

	    vm.checkText = function () {
	        console.log(vm.text1);

	        var res = textareaCurLineNum();

	        console.log(res);
	    };

	    function textareaCurLineNum() {
	        var obj = document.getElementById('comment');
	        console.log(obj);

	        var arr = obj.value.split('\n');
	    }
	}];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('templates', []).run(['$templateCache', function ($templateCache) {
	  $templateCache.put('modules/compareText/compareText.html', '<div class="row">\r\n    <div class="col-xs-6">\r\n        <h4 class="text-center" ui-sref="index.front">\r\n            Compare on front\r\n        </h4>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <h4 class="text-center" ui-sref="index.server">\r\n            Compare on server\r\n        </h4>\r\n    </div>\r\n</div>\r\n<ui-view></ui-view>');
	  $templateCache.put('modules/compareText/front.html', '<div class="row">\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="comment">Text 1</label>\r\n            <textarea class="form-control" rows="5" id="comment" ng-model="compareText.text1"></textarea>\r\n        </div>\r\n        <button class="btn btn-primary" ng-click="compareText.checkText()">Check</button>\r\n    </div>\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="comment">Text 2</label>\r\n            <textarea class="form-control" rows="5" id="comment2"></textarea>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ui-view></ui-view>');
	  $templateCache.put('modules/compareText/result.html', '<div class="row">\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="comment3">Result:</label>\r\n            <textarea class="form-control" rows="5" id="comment3"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="comment4">Result:</label>\r\n            <textarea class="form-control" rows="5" id="comment4"></textarea>\r\n        </div>\r\n    </div>\r\n</div>\r\n');
	  $templateCache.put('modules/compareText/server.html', '<div class="row server-load">\r\n    <div class="col-sm-6">\r\n       <button class="btn btn-primary btn-center">\r\n           Upload first file\r\n       </button>\r\n    </div>\r\n    <div class="col-sm-6">\r\n        <button class="btn btn-primary btn-center">\r\n            Upload second file\r\n        </button>\r\n    </div>\r\n</div>');
	  $templateCache.put('modules/header/header.html', '<div class="row">\r\n    <h2 class="text-center">\r\n        Test app\r\n    </h2>\r\n</div>');
		}]);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2JmZmY1MDYwODU5ZmY0N2UwMmMiLCJ3ZWJwYWNrOi8vL2Rldi9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL3J1bi5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL2Rldi9qcy9tb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVUZXh0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRDdHJsLmpzIiwid2VicGFjazovLy9kZXYvanMvdGVtcGxhdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNiZmZmNTA2MDg1OWZmNDdlMDJjIiwibGV0IHRlbXBsYXRlcyA9IHJlcXVpcmUoJ3RlbXBsYXRlcycpO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvZW50cnkuanMiLCJpbXBvcnQgUnVuIGZyb20gJy4vcnVuJztcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5pbXBvcnQgY29tcGFyZVRleHQgZnJvbSAnLi9tb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVUZXh0TW9kdWxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ3Rlc3QnLCBbXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICdjb21wYXJlVGV4dCcsXHJcbiAgICAndGVtcGxhdGVzJ1xyXG5dKVxyXG4uY29uZmlnKENvbmZpZylcclxuLnJ1bihSdW4pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9qcy9hcHAuanMiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvZGUgcnVuMicpO1xyXG4gICAgfVxyXG5dXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9qcy9ydW4uanMiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICAnJHN0YXRlUHJvdmlkZXInLFxyXG4gICAgJyR1cmxSb3V0ZXJQcm92aWRlcicsXHJcbiAgICBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcclxuXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnaW5kZXgnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaGVhZGVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvaGVhZGVyL2hlYWRlci5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2NvbXBhcmVUZXh0Q3RybCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2NvbXBhcmVUZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnaW5kZXguZnJvbnQnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZnJvbnQnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL2NvbXBhcmVUZXh0L2Zyb250Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgLy8gY29udHJvbGxlcjogJ2NvbXBhcmVUZXh0Q3RybCcsXHJcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sbGVyQXM6ICdjb21wYXJlVGV4dCdcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5zdGF0ZSgnaW5kZXguZnJvbnQucmVzdWx0Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3Jlc3VsdCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvY29tcGFyZVRleHQvcmVzdWx0Lmh0bWwnXHJcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sbGVyOiAnY29tcGFyZVRleHRDdHJsJyxcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xsZXJBczogJ2NvbXBhcmVUZXh0J1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLnN0YXRlKCdpbmRleC5zZXJ2ZXInLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvc2VydmVyJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9jb21wYXJlVGV4dC9zZXJ2ZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAvLyBjb250cm9sbGVyOiAnY29tcGFyZVRleHRDdHJsJyxcclxuICAgICAgICAgICAgICAgIC8vIGNvbnRyb2xsZXJBczogJ2NvbXBhcmVUZXh0J1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2luZGV4Jyk7XHJcbiAgICB9XTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL2NvbmZpZy5qcyIsImltcG9ydCBjb21wYXJlVGV4dFNlcnZpY2UgZnJvbSAnLi9jb21wYXJlVGV4dFNlcnZpY2UnO1xyXG5pbXBvcnQgY29tcGFyZVRleHRDdHJsIGZyb20gJy4vY29tcGFyZVRleHRDdHJsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFuZ3VsYXIubW9kdWxlKCdjb21wYXJlVGV4dCcsIFtdKVxyXG4uZmFjdG9yeSgnY29tcGFyZVRleHRTZXJ2aWNlJywgY29tcGFyZVRleHRTZXJ2aWNlKVxyXG4uY29udHJvbGxlcignY29tcGFyZVRleHRDdHJsJywgY29tcGFyZVRleHRDdHJsKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRNb2R1bGUuanMiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfVxyXG5dXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dFNlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgdm0udGV4dDEgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZtLmNoZWNrVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codm0udGV4dDEpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlcyA9IHRleHRhcmVhQ3VyTGluZU51bSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0ZXh0YXJlYUN1ckxpbmVOdW0oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iaik7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXJyID0gb2JqLnZhbHVlLnNwbGl0KCdcXG4nKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5dXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dEN0cmwuanMiLCJhbmd1bGFyLm1vZHVsZSgndGVtcGxhdGVzJywgW10pLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24oJHRlbXBsYXRlQ2FjaGUpIHskdGVtcGxhdGVDYWNoZS5wdXQoJ21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHQuaHRtbCcsJzxkaXYgY2xhc3M9XCJyb3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImNvbC14cy02XCI+XFxyXFxuICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHVpLXNyZWY9XCJpbmRleC5mcm9udFwiPlxcclxcbiAgICAgICAgICAgIENvbXBhcmUgb24gZnJvbnRcXHJcXG4gICAgICAgIDwvaDQ+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTZcIj5cXHJcXG4gICAgICAgIDxoNCBjbGFzcz1cInRleHQtY2VudGVyXCIgdWktc3JlZj1cImluZGV4LnNlcnZlclwiPlxcclxcbiAgICAgICAgICAgIENvbXBhcmUgb24gc2VydmVyXFxyXFxuICAgICAgICA8L2g0PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48dWktdmlldz48L3VpLXZpZXc+Jyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJ21vZHVsZXMvY29tcGFyZVRleHQvZnJvbnQuaHRtbCcsJzxkaXYgY2xhc3M9XCJyb3dcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb21tZW50XCI+VGV4dCAxPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByb3dzPVwiNVwiIGlkPVwiY29tbWVudFwiIG5nLW1vZGVsPVwiY29tcGFyZVRleHQudGV4dDFcIj48L3RleHRhcmVhPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgbmctY2xpY2s9XCJjb21wYXJlVGV4dC5jaGVja1RleHQoKVwiPkNoZWNrPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbW1lbnRcIj5UZXh0IDI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCIgaWQ9XCJjb21tZW50MlwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPHVpLXZpZXc+PC91aS12aWV3PicpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KCdtb2R1bGVzL2NvbXBhcmVUZXh0L3Jlc3VsdC5odG1sJywnPGRpdiBjbGFzcz1cInJvd1wiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XFxyXFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbW1lbnQzXCI+UmVzdWx0OjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcm93cz1cIjVcIiBpZD1cImNvbW1lbnQzXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxcclxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb21tZW50NFwiPlJlc3VsdDo8L2xhYmVsPlxcclxcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJvd3M9XCI1XCIgaWQ9XCJjb21tZW50NFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuJyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJ21vZHVsZXMvY29tcGFyZVRleHQvc2VydmVyLmh0bWwnLCc8ZGl2IGNsYXNzPVwicm93IHNlcnZlci1sb2FkXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxcclxcbiAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1jZW50ZXJcIj5cXHJcXG4gICAgICAgICAgIFVwbG9hZCBmaXJzdCBmaWxlXFxyXFxuICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1jZW50ZXJcIj5cXHJcXG4gICAgICAgICAgICBVcGxvYWQgc2Vjb25kIGZpbGVcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnbW9kdWxlcy9oZWFkZXIvaGVhZGVyLmh0bWwnLCc8ZGl2IGNsYXNzPVwicm93XCI+XFxyXFxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyXCI+XFxyXFxuICAgICAgICBUZXN0IGFwcFxcclxcbiAgICA8L2gyPlxcclxcbjwvZGl2PicpO31dKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL3RlbXBsYXRlcy5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7OztBQUhBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUpBO0FBRkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==