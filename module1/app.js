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
    if ($scope.inputText != "" && !dishes.includes("") && !dishes.includes(" ")){
      console.log(dishes);
      console.log(dishes.includes(""));
      if(dishes.length <= 3){
        $scope.message = "Enjoy!";
        $scope.msgColor = "green"
      }
      else {
        $scope.message = "Too much!";
        $scope.msgColor = "red"
      }
    }
    else {
      $scope.message = "Please enter the data first. Note that it does NOT consider an empty item, i.e., , , as an item towards to the count";
      $scope.msgColor = "blue"
    }
  };
}

})();
