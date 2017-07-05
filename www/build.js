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
	    console.log('code run');
	}];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('root', {
	        url: '',
	        abstract: true,
	        templateUrl: 'modules/views/root.html'
	    }).state('root.index', {
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
		exports.default = [function () {}];

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	angular.module('templates', []).run(['$templateCache', function ($templateCache) {
	  $templateCache.put('modules/compareText/compareText.html', '<div>\r\n    fefefefef\r\n</div>');
	  $templateCache.put('modules/header/header.html', '<div>111111</div>');
	  $templateCache.put('modules/views/root.html', '<ui-view name="header"></ui-view>\r\n<ui-view name="content"></ui-view>');
		}]);

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDcyODQ3MmY5ZTEyZWEwYzA3Y2MiLCJ3ZWJwYWNrOi8vL2Rldi9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL3J1bi5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vL2Rldi9qcy9tb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVUZXh0U2VydmljZS5qcyIsIndlYnBhY2s6Ly8vZGV2L2pzL21vZHVsZXMvY29tcGFyZVRleHQvY29tcGFyZVRleHRDdHJsLmpzIiwid2VicGFjazovLy9kZXYvanMvdGVtcGxhdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA3Mjg0NzJmOWUxMmVhMGMwN2NjIiwibGV0IHRlbXBsYXRlcyA9IHJlcXVpcmUoJ3RlbXBsYXRlcycpO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvZW50cnkuanMiLCJpbXBvcnQgUnVuIGZyb20gJy4vcnVuJztcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5pbXBvcnQgY29tcGFyZVRleHQgZnJvbSAnLi9tb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVUZXh0TW9kdWxlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ3Rlc3QnLCBbXHJcbiAgICAndWkucm91dGVyJyxcclxuICAgICdjb21wYXJlVGV4dCcsXHJcbiAgICAndGVtcGxhdGVzJ1xyXG5dKVxyXG4uY29uZmlnKENvbmZpZylcclxuLnJ1bihSdW4pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9qcy9hcHAuanMiLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvZGUgcnVuJyk7XHJcbiAgICB9XHJcbl1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL3J1bi5qcyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgICckc3RhdGVQcm92aWRlcicsXHJcbiAgICAnJHVybFJvdXRlclByb3ZpZGVyJyxcclxuICAgIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG5cclxuICAgICAgICAgICAgLnN0YXRlKCdyb290Jywge1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3ZpZXdzL3Jvb3QuaHRtbCcsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAuc3RhdGUoJ3Jvb3QuaW5kZXgnLCB7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAnaGVhZGVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvaGVhZGVyL2hlYWRlci5odG1sJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2NvbXBhcmVUZXh0Q3RybCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2NvbXBhcmVUZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaW5kZXgnKTtcclxuICAgIH1dO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvY29uZmlnLmpzIiwiaW1wb3J0IGNvbXBhcmVUZXh0U2VydmljZSBmcm9tICcuL2NvbXBhcmVUZXh0U2VydmljZSc7XHJcbmltcG9ydCBjb21wYXJlVGV4dEN0cmwgZnJvbSAnLi9jb21wYXJlVGV4dEN0cmwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ2NvbXBhcmVUZXh0JywgW10pXHJcbi5mYWN0b3J5KCdjb21wYXJlVGV4dFNlcnZpY2UnLCBjb21wYXJlVGV4dFNlcnZpY2UpXHJcbi5jb250cm9sbGVyKCdjb21wYXJlVGV4dEN0cmwnLCBjb21wYXJlVGV4dEN0cmwpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBkZXYvanMvbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dE1vZHVsZS5qcyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9XHJcbl1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9qcy9tb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVUZXh0U2VydmljZS5qcyIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9XHJcbl1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGRldi9qcy9tb2R1bGVzL2NvbXBhcmVUZXh0L2NvbXBhcmVUZXh0Q3RybC5qcyIsImFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSkucnVuKFsnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dCgnbW9kdWxlcy9jb21wYXJlVGV4dC9jb21wYXJlVGV4dC5odG1sJywnPGRpdj5cXHJcXG4gICAgZmVmZWZlZmVmXFxyXFxuPC9kaXY+Jyk7XG4kdGVtcGxhdGVDYWNoZS5wdXQoJ21vZHVsZXMvaGVhZGVyL2hlYWRlci5odG1sJywnPGRpdj4xMTExMTE8L2Rpdj4nKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dCgnbW9kdWxlcy92aWV3cy9yb290Lmh0bWwnLCc8dWktdmlldyBuYW1lPVwiaGVhZGVyXCI+PC91aS12aWV3Plxcclxcbjx1aS12aWV3IG5hbWU9XCJjb250ZW50XCI+PC91aS12aWV3PicpO31dKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2L2pzL3RlbXBsYXRlcy5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7OztBQUhBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0ZBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFGQTtBQUNBO0FBYUE7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOzs7Iiwic291cmNlUm9vdCI6IiJ9