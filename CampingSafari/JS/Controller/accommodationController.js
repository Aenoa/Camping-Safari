(function () {
    var app = angular.module("CampingSafari");

    app.controller('accommodationCtrl', ['$scope', "CampsiteFactory", function ($scope, CampsiteFactory) {
       
        $scope.campsites = [];

        $scope.getAllCampsites = function () {
            CampsiteFactory.getAll().success(function (campsitesFromDB) {
                $scope.campsites = campsitesFromDB
            });
        }

        $scope.getAllCampsites();

        $scope.today = function () {
            //$scope.user = new Date();
            $scope.dt2 = "Arrivée";
            $scope.dt3 = "Départ";
        };
        $scope.today();

        $scope.clear = function () {
            $scope.user = null;
            $scope.dt2 = null;
            $scope.dt3 = null;
        };

        // Disable weekend selection
        // $scope.disabled = function(date, mode) {
        //    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        //  };

        $scope.toggleMin = function () {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.maxDate = new Date(2020, 5, 22);

        $scope.open2 = function ($event) {
            $scope.status.opened2 = true;
            $scope.status.opened3 = false;
        };

        $scope.open3 = function ($event) {
            $scope.status.opened3 = true;
            $scope.status.opened2 = false;

        };

        $scope.open = function ($event) {
            $scope.status.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            $scope.user = new Date(year, month, day);
            $scope.dt2 = new Date(year, month, day);
            $scope.dt3 = new Date(year, month, day);
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.status = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 2);
        $scope.events =
          [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
          ];

        $scope.getDayClass = function (date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };

        $scope.formuReservation = true;
        $scope.connectionreservation = true;
        $scope.formuConnection = true;
        $scope.formuajouter = true;
        $scope.electrique = true; 
        $scope.reservationtoggleBlock = function () {
            $scope.formuReservation = $scope.isHidden;
            $scope.electrique = !$scope.isHidden;
        };

        $scope.confirmertoggleBlock = function () {
            $scope.connectionreservation = $scope.isHidden;
        };
        $scope.canceltoggleBlock = function () {
            $scope.formuReservation = !$scope.isHidden;
            $scope.connectionreservation = !$scope.isHidden;
        };
        $scope.connexiontoggleBlock = function () {
            $scope.formuConnection = $scope.isHidden;
            $scope.formuReservation = !$scope.isHidden;
            $scope.connectionreservation = !$scope.isHidden;
        };
        $scope.cancelConnectiontoggleBlock = function () {
            $scope.formuConnection = !$scope.isHidden;
            $scope.formuajouter = !$scope.isHidden;
            $scope.formuReservation = $scope.isHidden;
            $scope.connectionreservation = $scope.isHidden;
        };
        $scope.inscriptiontoggleBlock = function () {
            $scope.formuajouter = $scope.isHidden;
            $scope.formuReservation = !$scope.isHidden;
            $scope.connectionreservation = !$scope.isHidden;
        };
        $scope.reservationEmplacementtoggleBlock = function () {
            $scope.electrique = $scope.isHidden;
            $scope.formuReservation = $scope.isHidden;
        }

    }]);
})();
