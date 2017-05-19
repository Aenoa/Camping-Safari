(function () {
    angular.module("CampingSafari").controller('rsvCtrl', ['$scope', "ReservationFactory", function ($scope, ReservationFactory) {

        $scope.infoCampsite = [{
            libel: "Choisissez",
            prix:0
        },{
            libel: "Tente",
            prix: 50
        }, {
            libel: "Chalet",
            prix: 80
        }, {
            libel: "Chalet Perché",
            prix: 100
        }, {
            libel: "Emplacement",
            prix: 30
        }];
        $scope.choixCampsite = $scope.infoCampsite[0];

        $scope.infoJour = [{
            nbJour: "Nb jour"
        }, {
            nbJour: "7"
        }, {
            nbJour: "14"
        }, {
            nbJour: "21"
        }, {
            nbJour: "28"
        }];
        $scope.choixJour = $scope.infoJour[0];

        $scope.infoAdulte = [{
            nbAdulte: "Choisisez le nombre d'adulte",
            prix : 0
        }, {
            nbAdulte: "1",
            prix: 0
        }, {
            nbAdulte: "2",
            prix: 1
        }, {
            nbAdulte: "3",
            prix: 2
        }, {
            nbAdulte: "4",
            prix: 3
        }];
        $scope.choixNbAdulte = $scope.infoAdulte[0];

        $scope.infoEnfant = [{
            nbEnfant: "Choisissez le nombre d'enfant",
            prix : 0
        },{
            nbEnfant: "1",
            prix: 2
        }, {
            nbEnfant: "2",
            prix: 4
        }, {
            nbEnfant: "3",
            prix: 6
        }, {
            nbEnfant: "4",
            prix: 8
        }];
        $scope.choixNbEnfant = $scope.infoEnfant[0];

        $scope.infoParking = [{
            parking: "Parking ? ",
            prix: 0
        }, {
            parking: "Oui",
            prix: 1
        }, {
            parking: "Non",
            prix: 0
        }];
        $scope.choixParking = $scope.infoParking[0];

        $scope.infoNbParking = [{
            nbparking: "Nb de place",
            prix : 0
        }, {
            nbparking: "1",
            prix:1
        }, {
            nbparking: "2",
            prix: 2
        }, {
            nbparking: "3",
            prix: 3
        }, {
            nbparking: "4",
            prix: 4
        }];
        $scope.choixNbParking = $scope.infoNbParking[0];

        $scope.infoElectrique = [{
            elec: "Branchement",
            prix:0
        },{
            elec: "Oui",
            prix: 2
        }, {
            elec: "Non",
            prix:0
        }];
        $scope.choixElectric = $scope.infoElectrique[0];

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
       
        $scope.connectionreservation = true;
        $scope.formuConnection = true;
        $scope.formuajouter = true;
        $scope.reservationModifier = true;
        $scope.supprimer = true;
        $scope.modifier = true;
        $scope.rechercher = true; 
        $scope.affichermodiftoggleBlock = function () {
            $scope.reservationModifier = $scope.isHidden;
        };

        $scope.checktoggleBlock = function () {
            $scope.supprimer = !$scope.isHidden;
            $scope.modifier = !$scope.isHidden;
            $scope.rechercher = !$scope.isHidden;
        }
        $scope.deletetoggleBlock = function () {
            $scope.supprimer = $scope.isHidden;
            $scope.modifier = !$scope.isHidden;
            $scope.rechercher = !$scope.isHidden;
        }
        $scope.removetoggleBlock = function () {
            $scope.supprimer = !$scope.isHidden;
            $scope.modifier = $scope.isHidden;
            $scope.rechercher = !$scope.isHidden;
        }
        $scope.searchtoggleBlock = function () {
            $scope.supprimer = !$scope.isHidden;
            $scope.modifier = !$scope.isHidden;
            $scope.rechercher = $scope.isHidden;
        }
        
        $scope.confirmertoggleBlock = function () {
            $scope.connectionreservation = false;
        };
        $scope.canceltoggleBlock = function () {
            $scope.formuReservation = true;
            $scope.connectionreservation = true;
        };
        $scope.connexiontoggleBlock = function () {
            $scope.formuConnection = false;
            $scope.formuReservation = true;
            $scope.connectionreservation = true;
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

        $scope.reservationSolo = [];
        $scope.reservations = [];
        $scope.reservation = {};

        $scope.getAllReservations = function () {
            ReservationFactory.getAll().success(function (reservationsFromDB) {
                $scope.reservations = reservationsFromDB
            });
        };

        $scope.add = function () {
            $scope.reservations.push($scope.reservation);
            ReservationFactory.add($scope.reservation).success(function () {
                alert("La reservation a été effectuée");
                $scope.getAllReservations();
            });
        };

        $scope.remove = function (index) {
            var reservationToDelete = index;
            $scope.users.splice(index, 1);
            ReservationFactory.delete(reservationToDelete).success(function () {
                alert("La reservation a été annulée");
                $scope.getAllReservations();
            });
        };

        $scope.update = function (id) {
            var reservationToUpdate = id;
            ReservationFactory.update(reservationToUpdate, $scope.reservation).success(function () {
                alert("Mise à jour terminée");
                $scope.getAllReservations();
            });
        };

        $scope.get = function (index) {
            var reservationToGet = index;
            ReservationFactory.get(reservationToGet).success(function (reservationFromDB) {
                $scope.reservation = usersFromDB;
            });

        };
    }]);
})();
                
                