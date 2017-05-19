(function () {
    angular.module("CampingSafari").controller("AdditionController", ["$scope", function ($scope) {
        $scope.doCalcul = function (arrayNumbers) {
            var result = 0;
            for (var i in arrayNumbers) {
                result += arrayNumbers[i];
            }
            return result;
        };
        // PATTERN OBSERVEUR
        $scope.$watch("suiteChiffres", function () {
            $scope.result = eval($scope.suiteChiffres);
        });
    }]);
})();