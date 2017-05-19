(function () {
    angular.module("CampingSafari").factory("CategoryFactory", [$http, function CategoryFactory($http) {
        return {
            add: function (category) {
                return $http({
                    method: "POST",
                    url: "/api/category",
                    data: category
                });
            },
            getAll: function () {
                return $http({
                    method: "GET",
                    url: "/api/category"
                });
            },
            update: function (id, category) {
                return $http({
                    method: "PUT",
                    url: "/api/category/" + category.Id,
                    data: category
                });
            },
            delete: function (id) {
                return $http({
                    method: "DELETE",
                    url: "/api/category/" + id
                });
            },
            get: function (id) {
                return $http({
                    method: "GET",
                    url: "/api/category/" + id
                });
            }
        };
    }]);
})();