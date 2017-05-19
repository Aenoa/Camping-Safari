(function () {
    var app = angular.module("CampingSafari");

    app.controller('userCtrl', ['$scope', "UserFactory", function ($scope, UserFactory) {
        
        $scope.userSolo = [];
        $scope.users = [];
        $scope.user = {};

        $scope.getAllUsers = function () {
            UserFactory.getAll().success(function (usersFromDB) {
                $scope.users = usersFromDB
                
            });
        };
        
        // Ajout de l'utilisateur (Fonctionne)

        $scope.add = function (level) {
            $scope.user.user_level = level;
            $scope.user.user_birthdate.setDate($scope.user.user_birthdate.getDate() + 1);
            $scope.users.push($scope.user);
            UserFactory.add($scope.user).success(function () {
                alert("L'employé a bien été rajouté");
                $scope.getAllUsers();
            });
        };

        // Suppression de l'utilisateur (Fonctionne)

        $scope.remove = function (index) {
            var userToDelete = index;
            $scope.users.splice(index, 1);
            UserFactory.delete(userToDelete).success(function () {
                alert("L'employé a bien été supprimé");
                $scope.getAllUsers();
            });
        };

        // Mise à jour de l'utilisateur ( En cours )

        $scope.update = function (id) {
            
            var userToUpdate = id;
             UserFactory.update(userToUpdate,$scope.user).success(function () {
                 alert("Mise à jour terminée");
                 $scope.getAllUsers();
            })
        };

        // Tentative de récupération ( En cours )
        $scope.get = function (index) {
            var userToGet = index;
            UserFactory.get(userToGet).success(function (usersFromDB) {
                
                $scope.user = usersFromDB;
            })
        };

        $scope.imprimer_page = function () {
            pdf.Instance("viewer");
            alert("Coucou j'imprime");
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


        $scope.connexionformu = false;
        $scope.ajouterformu = true;
        $scope.cancelConnectiontoggleBlock = function () {
            $scope.ajouterformu = !$scope.isHidden;
        };

        $scope.inscriptiontoggleBlock = function () {
            $scope.ajouterformu = $scope.isHidden;
        };

        $scope.getAllUsers();

    }]);


})();