(function () {
    angular.module('CampingSafari').controller('loginController', ['$scope', "Session", "UserFactory", function ($scope, Session, UserFactory) {
        $scope.user = {};
        $scope.login = function () {
            UserFactory.check($scope.user).success(function (user) {
                Session.setUser(user);
                console.log(user);
            });
        };
    }])

    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })

    .constant('USER_ROLES', {
        admin: '1',
        employe: '2',
        client: '3',
        guest: ''
    })
})();