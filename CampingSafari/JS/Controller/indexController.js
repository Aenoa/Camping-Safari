(function () {
    var app = angular.module("CampingSafari");

    app.controller("indexCtrl", ['$scope', "Session", function ($scope, Session) {
        $scope.$watch(Session.getUser, function () {
            $scope.user = Session.getUser();
        }, true);

        $scope.deconnexion = function () {
            Session.setUser();
        };

    }]);
})();