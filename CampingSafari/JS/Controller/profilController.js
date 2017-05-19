(function () {
    var app = angular.module("CampingSafari");

    app.controller('profilCtrl', ['$scope', "UserFactory", function ($scope, UserFactory) {

        $scope.userSolo = [];
        $scope.users = [];
        $scope.user = {};

    }]);
})();