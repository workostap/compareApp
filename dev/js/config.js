export default [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('root', {
                url: '',
                abstract: true,
                templateUrl: 'modules/views/root.html',
            })

            .state('root.index', {
                url: '/index',
                views: {
                    'header': {
                        templateUrl: 'modules/header/header.html'
                    },
                    'content': {
                        templateUrl: 'modules/compareText/compareText.html',
                        controller: 'compareTextCtrl',
                        controllerAs: 'compareText'
                    },
                }
            });

        $urlRouterProvider.otherwise('/index');
    }];