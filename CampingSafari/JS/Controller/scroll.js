
angular.module('CampingSafari')
.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
      $scope.goTo = function () {
         
          $location.hash('event');

          $anchorScroll();
      };
  }]);

