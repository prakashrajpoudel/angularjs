(function(){
  'use strict';

  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope){
    console.log("First Controller");
    $scope.name = "Prakash";
  });
})();
