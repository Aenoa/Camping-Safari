(function () {
    var app = angular.module("CampingSafari");
    app.controller("AnimationCtrl", ["$scope", function ($scope) {
        $scope.isHidden = true;
        $scope.toggleBlock = function () {
            $scope.isHidden = !$scope.isHidden;
        }
    }]);
})();