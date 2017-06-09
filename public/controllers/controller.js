var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http',
  function($scope,$http){
    var refresh = function(){
      $http.get('/contactlist').success(function(res){
        $scope.contactlist = res;
        $scope.contact = "";
      });
    };

    refresh();

    $scope.addContact = function() {

      if (typeof($scope.contact._id) == "undefined")
      {
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(
          function(res){
            console.log("Successfully added the contact!");
            refresh();
          }
        );
      }
    };

    $scope.remove = function(id){
      $http.delete('/contactlist/'+ id).success(function(res){
        refresh();
      });
    };

    $scope.edit= function(id){
      $http.get('/contactlist/'+id).success(function(res){
        $scope.contact = res;
      });
    };

    $scope.update = function(){
      $http.put('/contactlist/'+$scope.contact._id, $scope.contact).success(function(res){
        refresh();
      });
    };
  }]);
