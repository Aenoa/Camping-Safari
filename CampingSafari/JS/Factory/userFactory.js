(function () {
    angular.module("CampingSafari").factory("UserFactory", ['$http', function UserFactory($http) {
        return {
            add: function (user) {
                return $http({
                    method: "POST",
                    url: "/api/user",
                    data: user
                });
            },
            getAll: function () {
                return $http({
                    method: "GET",
                    url: "/api/user"
                });
            },
            update: function (id, user) {
                alert("" + id);
                return $http({
                    method: "PUT",
                    url: "/api/user/" + user.Id,
                    data: user
                });
            },
            delete: function (id) {
                return $http({
                    method: "DELETE",
                    url: "/api/user/" + id
                });
            },
            get: function (id) {
                return $http({
                    method: "GET",
                    url: "/api/user/" + id
                });
            },
            check: function (user) {
                return $http({
                    method: "POST",
                    url: "/api/user/check",
                    data: user
                });
            }
        };
    }]);
})();