(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyListController', ToBuyListController)
.controller('BoughtListController', BoughtListController)
.service('ShoppingListService', ShoppingListService);

// Injections into the controllers
ToBuyListController.$inject = ['ShoppingListService'];
BoughtListController.$inject = ['ShoppingListService'];

function ToBuyListController(ShoppingListService) {
  var toBuy = this;

  toBuy.toBuyList = ShoppingListService.getToBuyItems();
  toBuy.makeBought = function (itemIndex) {
    ShoppingListService.addToBought(itemIndex);
    ShoppingListService.removeFromToBuy(itemIndex);
    console.log(toBuy.toBuyList, "length = ", toBuy.toBuyList.length);
  };
}

function BoughtListController(ShoppingListService){
  var showBought = this;
  showBought.boughtList = ShoppingListService.getBoughtItems();

}

// ShoppingListService
function ShoppingListService() {
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
} // End of the ShoppingListService

})();
