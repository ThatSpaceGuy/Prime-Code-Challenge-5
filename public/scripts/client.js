console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///

var myApp = angular.module('myApp',[]);

var allHeroes = [];

/// == Function Declarations == ///


/// == JavaScript == ///

myApp.controller('mainController', ['$scope','$http',function($scope,$http){
  console.log('NG');

  $scope.addHero = function(){
    console.log('in addHero with', $scope.newHero);

    var newObject = {
      // alias: String,
      // first_name: String,
      // last_name: String,
      // city: String,
      // power_name: String,
      // created_at: Date
    }; // end new hero
    console.log('sending:',newObject);
    // test send via http to post Route
    $http({
      method: 'POST',
      url: '/testPost',
      data: newObject
    }).then(function ( response ){
      console.log('back from server with:', response);
    });

    allHeroes.push(newObject);
    console.log('allHeroes:', allHeroes);
  }; // end addHero
}]); // end mainController
