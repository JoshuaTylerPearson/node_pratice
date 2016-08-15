var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', 'todoWebService', function
($scope, todoWebService) {

  // setup a view model
  var vm = {};

  vm.list = [];

  // start init load of lists
  todoWebService.getItems().then(function (response) {
    vm.list = response.data.items;
  });

  vm.addItem = function () {
    var item = {
      details: vm.newItemDetails
    };

    // clear from UI
    vm.newItemDetails = '';

    // send request to server and add new item when done
    todoWebService.addItem(item).then(function (response) {
      vm.list.push({
        _id: response.data.itemId,
        details: item.details
      });
    });
  };


  vm.removeItem = function (itemToRemove) {
    // remove from list and send to server request
    vm.list = vm.list.filter(function (item)
      { return item._id !== itemToRemove._id; });
    todoWebService.removeItem(itemToRemove);
  };

  // for new items:
  vm.newItemDetails = '';

  // expose the vm using the $scope
  $scope.vm = vml
}]);

demoApp.service('todoWebService', ['$http', function ($http) {
  var root = '/todo';
  return {
    getItems: function () {
      return $http.get(root);
    },
    addItem: function (item) {
      return $http.post(root, item);
    },
    removeItem: function (item) {
      return $http.delete(root + '/' + item._id);
    }
  }
}]);
