angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'app.controllers.index',
  'app.controllers.connexion',
  'app.controllers.navbar',
  'app.controllers.inscrire',
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'index'});
    $routeProvider.when('/', {templateUrl: 'partials/inscrire.html', controller: 'inscrire'});
    $routeProvider.when('/connexion', {templateUrl: 'partials/connexion.html', controller: 'ConnexionCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
