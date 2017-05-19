(function () {
    var app = angular.module("CampingSafari");

    app.controller('campsiteCtrl', ['$scope', "CampsiteFactory", function ($scope, CampsiteFactory) {
        
        $scope.campsiteSolo = [];
        $scope.campsites = [];
        $scope.campsite = {
            campsite_isReserved: false,
            campsite_isUnavailable: false
        }

        $scope.getAllCampsites = function () {
            CampsiteFactory.getAll().success(function (campsitesFromDB) {
                $scope.campsites = campsitesFromDB
            });
        };


        $scope.add = function () {
            alert("on m'utilise");
            $scope.campsites.push($scope.campsite);
            CampsiteFactory.add($scope.campsite).success(function () {
                alert("L'emplacement a bien été rajouté");
                $scope.getAllCampsites();
            });
        }

        $scope.remove = function (index) {
            var campsiteToDelete = index;
            $scope.campsites.splice(index, 1);
            CampsiteFactory.delete(campsiteToDelete).success(function () {
                alert("L'emplacement a bien été supprimé");
                $scope.getAllCampsites();
            });
        };

        $scope.update = function (id) {
            var campsiteToUpdate = id;
            CampsiteFactory.update(campsiteToUpdate, $scope.campsite).success(function () {
                alert("Mise à jour terminée");
                $scope.getAllCampsites();
            })
        };

        $scope.get = function (index) {
            var campsiteToGet = index;
            CampsiteFactory.get(campsiteToGet).success(function (campsiteFromDB) {
                $scope.campsite = campsiteFromDB;
            })
        };

        $scope.ajouter = true;
        $scope.supprimer = true;
        $scope.modifier = true;
        $scope.employerModifier = true;
        $scope.rechercher = true;
        $scope.addtoggleBlock = function () {
            $scope.ajouter = $scope.isHidden;
            $scope.supprimer = !$scope.isHidden;
            $scope.modifier = !$scope.isHidden;
            $scope.employerModifier = !$scope.isHidden;
            $scope.rechercher = !$scope.isHidden;
        }

        $scope.deletetoggleBlock = function () {
            $scope.supprimer = $scope.isHidden;
            $scope.ajouter = !$scope.isHidden;
            $scope.modifier = !$scope.isHidden;
            $scope.employerModifier = !$scope.isHidden;
            $scope.rechercher = !$scope.isHidden;
        }

        $scope.searchtoggleBlock = function () {
            $scope.rechercher = $scope.isHidden;
            $scope.ajouter = !$scope.isHidden;
            $scope.supprimer = !$scope.isHidden;
            $scope.employerModifier = !$scope.isHidden;
            $scope.modifier = !$scope.isHidden;

        }

        $scope.removetoggleBlock = function () {
            $scope.modifier = $scope.isHidden;
            $scope.ajouter = !$scope.isHidden;
            $scope.supprimer = !$scope.isHidden;
            $scope.rechercher = !$scope.isHidden;
            $scope.employerModifier = !$scope.isHidden;
        }

        $scope.affichermodiftoggleBlock = function (index) {
            $scope.employerModifier = $scope.isHidden;
            $scope.get(index);
        }

        $scope.getAllCampsites();
    }]);
})();