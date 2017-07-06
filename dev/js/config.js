export default [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('index', {
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
            })

            .state('index.front', {
                url: '/front',
                templateUrl: 'modules/compareText/compareFront.html'
            });

        $urlRouterProvider.otherwise('/index/front');
    }];