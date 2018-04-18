var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function(){
  let vm = this;

  let hello = "hello world!";
  let fruits = ['apple', 'orange', 'tomato'];

  function alertMe(){
    alert("Oy!!!");
  }



  // define functions and other variables open to DOM here
  vm.alertMe = alertMe;
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
