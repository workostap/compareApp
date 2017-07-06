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
                        templateUrl: 'modules/compareText/compareText.html',
                        controller: 'compareTextCtrl',
                        controllerAs: 'compareText'
                    }
                }
            })

            .state('index.front', {
                url: '/front',
                templateUrl: 'modules/compareText/front.html',
                // controller: 'compareTextCtrl',
                // controllerAs: 'compareText'
            })

            .state('index.front.result', {
                url: '/result',
                templateUrl: 'modules/compareText/result.html'
                // controller: 'compareTextCtrl',
                // controllerAs: 'compareText'
            })

            .state('index.server', {
                url: '/server',
                templateUrl: 'modules/compareText/server.html',
                // controller: 'compareTextCtrl',
                // controllerAs: 'compareText'
            });

        $urlRouterProvider.otherwise('/index');
    }];