var app = angular.module('firstAngularApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
    .state('posts', {
      url: '/posts',
      template: '<ui-view></ui-view>'
    })
    .state('posts.incomplete', {
      url: '/incomplete',
      template: '<posts-list posts="vm.incompletePosts"></posts-list>',
      controllerAs: 'vm'
    })
    .state('posts.complete', {
      url: '/complete',
      template: '<posts-list posts="vm.completePosts"></posts-list>',
      controllerAs: 'vm'
    })
})

app.controller('mainCtrl', function(mainSvc){
  let vm = this;

  let fruits = ['apple', 'orange', 'tomato'];

  mainSvc.getPosts().then(response => {
    this.incompletePosts = response.data.splice(0, 50);
    this.completePosts = response.data;
  });

  vm.fruits = fruits;
});


app.filter('makePlural', function(){
  return function(input){
    return input + "s";
  }
})


// NOTE: people say that using services instead of factories or providers is best for upgrading to Angular 2
app.service('mainSvc', function($http){
  let self = this;

  self.getPosts = function(){
    return $http.get('https://jsonplaceholder.typicode.com/posts');
  }
});

// NOTE: this factory is same as above service
// app.factory('mainSvc', function($http){
//   let getPosts = function(){
//     return $http.get('https://jsonplaceholder.typicode.com/posts');
//   }
//
//   return {
//     getPosts: getPosts
//   }
// });
