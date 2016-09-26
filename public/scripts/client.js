console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///

var myApp = angular.module('myApp',[]);

var heroRoster = [];

/// == Function Declarations == ///


/// == JavaScript == ///

myApp.controller('mainController', ['$scope','$http',function($scope,$http){
  console.log('NG');

  $scope.addHero = function(aliasRec, firstNameRec, lastNameRec, cityRec, superPowerRec){
    console.log('in addHero with', $scope.newHero);
    var newObject = {
      alias: aliasRec,
      first_name: firstNameRec,
      last_name: lastNameRec,
      city: cityRec,
      power_name: superPowerRec.type
    }; // end new hero
    console.log('sending:',newObject);
    // test send via http to post Route
    $http({
      method: 'POST',
      url: '/hero/create',
      data: newObject
    }).then(function ( response ){
      console.log('back from server with:', response);
      $scope.showAll();
    });

  }; // end addHero

  $http({
    method: 'GET',
    url: '/hero/enum'
  }).then(function successCallback(response) {
    $scope.enum = response.data.map(function(type) {
      return {type: type };
    });
    $scope.selected = $scope.enum[0];
    console.log('enum =', $scope.enum);
  }, function errorCallback(response) {
    console.log('err');
  });

  $scope.showAll = function(){
    console.log('in showAll');
    $http({
      method: 'GET',
      url: '/hero/all',
    }).then(function ( response ){
      console.log('back from server with:', response);
      // assign database results to petRoster so that ng-repeat can display
      $scope.heroRoster = response.data;
      // save to global for deleting purposes
      heroRoster = $scope.heroRoster;
      console.log('heroRoster:',heroRoster);
    });
  };// end showAll

  $scope.deleteHero = function(requestedID){
    console.log('in deleteHero', $scope);

    var heroIndex = Number(requestedID);
    console.log(heroIndex);
    var idToDelete = {
      id: heroRoster[heroIndex]._id
    };
    console.log(idToDelete);

    $http({
      method: 'DELETE',
      url: '/hero/delete',
      data: idToDelete,
      headers: {"Content-Type": "application/json;charset=utf-8"}
    }).then(function ( response ){
      console.log('back from server with:', response);
      $scope.showAll();
    });

  }; // end delete Item

  // Show all database results immediately
  $scope.showAll();
}]); // end mainController
