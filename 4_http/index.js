var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function($http){
  let vm = this;

  let hello = "hello world!";
  let fruits = ['apple', 'orange', 'tomato'];

  function alertMe(){
    alert("Oy!!!");
  }

  $http.get('https://jsonplaceholder.typicode.com/posts').then(function(response){
    vm.posts = response.data;
  });

  // define functions and other variables open to DOM here
  vm.alertMe = alertMe;
  vm.fruits = fruits;
});

app.filter('makePlural', function(){
  return function(input){
    return input + "s";
  }
})
