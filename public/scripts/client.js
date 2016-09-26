console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///

var myApp = angular.module('myApp',[]);

var heroRoster = [];

/// == Function Declarations == ///


/// == JavaScript == ///

myApp.controller('mainController', ['$scope','$http',function($scope,$http){
  console.log('NG');

  $scope.addHero = function(){
    console.log('in addHero with', $scope.newHero);
    var newObject = {
      alias: $scope.aliasIn,
      first_name: $scope.firstNameIn,
      last_name: $scope.lastNameIn,
      city: $scope.cityIn,
      power_name: $scope.superPowerIn
    }; // end new hero
    console.log('sending:',newObject);
    // test send via http to post Route
    $http({
      method: 'POST',
      url: '/hero/create',
      data: newObject
    }).then(function ( response ){
      console.log('back from server with:', response);
    });
    $scope.showAll();
  }; // end addHero

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
  // Show all database results immediately
  $scope.showAll();
}]); // end mainController
