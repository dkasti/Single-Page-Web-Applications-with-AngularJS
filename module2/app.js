(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// Injections into the controllers
ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();
  toBuy.makeBought = function (itemIndex) {
    ShoppingListCheckOffService.addToBought(itemIndex);
    ShoppingListCheckOffService.removeFromToBuy(itemIndex);
    console.log(toBuy.toBuyList, "length = ", toBuy.toBuyList.length);
  };
}

function AlreadyBoughtController(ShoppingListCheckOffService){
  var showBought = this;
  showBought.boughtList = ShoppingListCheckOffService.getBoughtItems();

}

// ShoppingListCheckOffService
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "20"
  },
  {
    name: "Cookies",
    quantity: "10"
  },
  {
    name: "Peanut Butter",
    quantity: "3"
  },
  {
    name: "Cheese",
    quantity: "5"
  },
  {
    name: "Eggs",
    quantity: "12"
  },
  {
    name: "Chocolate",
    quantity: "5"
  }
];

var boughtList = [];


  service.addToBought = function (itemIndex) {
    boughtList.push(toBuyList[itemIndex]);
  };

  service.removeFromToBuy = function (itemIdex) {
    toBuyList.splice(itemIdex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyList;
  };

  service.getBoughtItems = function () {
    return boughtList;
  };
} // End of the ShoppingListCheckOffService

})();
