import compareTextService from './compareTextService';
import compareTextCtrl from './compareTextCtrl';

export default angular.module('compareText', [])
.factory('compareTextService', compareTextService)
.controller('compareTextCtrl', compareTextCtrl);