angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('modules/compareText/compareText.html','<div>\r\n    fefefefef\r\n</div>');
$templateCache.put('modules/header/header.html','<div>111111</div>');
$templateCache.put('modules/views/root.html','<ui-view name="header"></ui-view>\r\n<ui-view name="content"></ui-view>');}]);