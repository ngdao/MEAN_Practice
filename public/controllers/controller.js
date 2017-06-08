var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',
  function($scope,$http){
    console.log("Hello World from controller");
    var refresh = function(){
      $http.get('/contactlist').success(function(res){
        console.log("controller got the data");
        $scope.contactlist = res;
        $scope.contact = "";
      });
    };

    refresh();

    $scope.addContact = function() {
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(
        function(res){
          console.log("Successfully added the contact!");
          console.log(res);
          refresh();
        }
      );
    };

    $scope.remove = function(id){
      $http.delete('/contactlist/'+ id).success(function(res){
        refresh();
      });
    };
  }]);
