var mainApp = angular.module("mainApp", []);
  mainApp.controller('scheduleController', function($scope, $http) {
    $http.get('http://rawgit.com/mshoote/BTJSC/master/Markup/Json_data/100Items.json').then(function(res){
      $scope.items = res.data;
  });
});
