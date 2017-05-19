(function () {
    angular.module("CampingSafari").factory("ReservationFactory", ['$http', function ReservationFactory($http) {
        return {
            add: function (reservation) {
                return $http({
                    method: "POST",
                    url: "/api/reservation",
                    data: reservation
                });
            },
            getAll: function () {
                return $http({
                    method: "GET",
                    url: "/api/reservation"
                });
            },
            update: function (id, reservation) {
                return $http({
                    method: "PUT",
                    url: "/api/reservation/" + reservation.Id,
                    data: reservation
                });
            },
            delete: function (id) {
                return $http({
                    method: "DELETE",
                    url: "/api/reservation/" + id
                });
            },
            get: function (id) {
                return $http({
                    method: "GET",
                    url: "/api/reservation/" + id
                });
            }
        };
    }]);
})();