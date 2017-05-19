(function () {
    var app = angular.module("CampingSafari");

    app.controller('DatepickerDemoCtrl', function ($scope) {
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

    });
})();