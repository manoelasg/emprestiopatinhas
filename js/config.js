angular.module('emprestiopatinhas').config(rotas);

function rotas($stateProvider, $urlRouterProvider) {
    $stateProvider.state('cadastro', {
        templateUrl: 'templates/cadastro.html',
        url: '/cadastro',
        controller: 'cadastroController'
    });

    $stateProvider.state('main', {
        templateUrl: 'templates/main.html',
        url: '/main',
        controller: 'mainController'
    });

    $stateProvider.state('login', {
        templateUrl: 'templates/login.html',
        url: '/login',
        controller: 'loginController'
    });

    $stateProvider.state('galera', {
        templateUrl: 'templates/galera.html',
        url: '/galera',
        controller: 'galeraController'
    });

    $stateProvider.state('participar', {
        templateUrl: 'templates/participar.html',
        url: '/participar',
        controller: 'participarController'
    });

    $urlRouterProvider.otherwise('/cadastro');
}
