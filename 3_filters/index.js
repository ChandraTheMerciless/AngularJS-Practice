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
