var app = angular.module('firstAngularApp', []);

app.controller('mainCtrl', function(){
  // this.etc is visible inside dom
  // this.hello = "hello world";

  let vm = this;
  vm.hello = "hello world!";

  vm.fruits = ['apples', 'oranges', 'tomatoes'];

  vm.alertMe = function(){
    alert("Oy!!");
  }
});
