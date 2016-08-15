var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', 'guidService', function
($scope, guidService) {

  // setup a view model
  var vm = {};

  vm.list = [
    { _id: guidService.createGuid(), details: 'demo first item' },
    { _id: guidService.createGuid(), details: 'demo second item' }
  ];

  vm.addItem = function () {
    // TODO: send to server then:
    vm.list.push({
      _id: guidService.createGuid(),
      details: vm.newItemDetails
    });
    vm.newItemDetails = '';
  };

  vm.removeItem = function (itemToRemove) {
    // TODO: delete from server then:
    vm.list = vm.list.filter(function (item)
      { return item._id !== itemToRemove._id; });
  };

  // for new items:
  vm.newItemDetails = '';

  // expose the vm using the $scope
  $scope.vm = vml
}]);

demoApp.service('guidService', function () {
  return {
    createGuid: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  };
});
