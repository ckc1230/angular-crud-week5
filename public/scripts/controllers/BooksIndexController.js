console.log('BooksIndexController.js loaded');

angular
  .module('bookApp') // ng-App name
  .controller('BooksIndexController', BooksIndexController)  // controller name and function

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  var vm = this;
  // vm.books = [];

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(response) {
    vm.books = response.data.books;
    console.log(vm.books);
  }, function errorCallback(response) {
    console.log('Error: ' + response)
  })

}
