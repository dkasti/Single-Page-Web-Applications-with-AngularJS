(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.inputText = "";
  $scope.message = "";
  $scope.msgColor = ""

  $scope.showMessage = function () {
    var dishes = $scope.inputText.split(",");
    if ($scope.inputText != ""){
      console.log(dishes);
      if(dishes.length <= 3){
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }
    else {
      $scope.message = "Please enter data first";
    }
  };
}

})();
