var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',
  function($scope,$http){
    console.log("Hello World from controller");
    $http.get('/contactlist').success(function(res){
      console.log("controller got the data");
      $scope.contactlist = res;
    });
  }]);
