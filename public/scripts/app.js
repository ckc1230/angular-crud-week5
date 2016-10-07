console.log('app.js loaded');

angular
  .module('bookApp', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,  $locationProvider   ) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/templates/booksIndex.html',
      controller: 'BooksIndexController',
      controllerAs: 'booksIndexCtrl'
    })

    // .when('/books/:id', {
    //   templateUrl: '/',
    //   controllerAs: '_',
    //   controller: '_'
    // });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}