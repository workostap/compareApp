import compareTextService from './compareTextService';
import compareTextCtrl from './compareTextCtrl';
import compareTextDirective from './compareTextResultDirective';

export default angular.module('compareText', [])
.factory('compareTextService', compareTextService)
.directive('compareText', compareTextDirective)
.controller('compareTextCtrl', compareTextCtrl);