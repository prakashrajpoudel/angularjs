(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunchItemsAsString = '';
    $scope.outputMessage = '';
    $scope.validateLunchItems = function() {
      if ($scope.lunchItemsAsString.trim()) {
        var lunchItems = $scope.lunchItemsAsString.split(",");
        if (lunchItems.length > 3) {
        $scope.outputMessage = 'Too Much!';
      } else {
        $scope.outputMessage = 'Enjoy!';
      }
      $scope.outputMessageCss = 'enjoyOrTooMuch';
      $scope.inputItemsCss = 'enjoyOrTooMuch';
      } else {
        $scope.outputMessage = 'Please enter data first';
        $scope.outputMessageCss = 'empty';
        $scope.inputItemsCss = 'empty';
      }
    };

  }
  })();
