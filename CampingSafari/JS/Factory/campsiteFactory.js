(function () {
    angular.module("CampingSafari").factory("CampsiteFactory", ['$http', function CampsiteFactory($http) {
        return {
            add: function (campsite) {
                return $http({
                    method: "POST",
                    url: "/api/campsite",
                    data: campsite
                });
            },
            getAll: function () {
                return $http({
                    method: "GET",
                    url: "/api/campsite"
                });
            },
            update: function (id, campsite) {
                alert("" + id);
                return $http({
                    method: "PUT",
                    url: "/api/campsite/" + campsite.Id,
                    data: campsite
                });
            },
            delete: function (id) {
                return $http({
                    method: "DELETE",
                    url: "/api/campsite/" + id
                });
            },
            get: function (id) {
                return $http({
                    method: "GET",
                    url: "/api/campsite/" + id
                });
            }
        };
    }]);
})();