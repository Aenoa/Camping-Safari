(function () {
    angular.module("CampingSafari").config(function ($routeProvider) {
        $routeProvider.when("/service",{
            templateUrl: "HTML/service.html"
        }).when("/practicalinfo",{
            templateUrl: "HTML/practicalinfo.html"
        }).when("/tourism", {
            templateUrl: "HTML/tourism.html"
        }).when("/connexion",{
            templateUrl: "HTML/connexion.html",
            controller: "loginController",
            controller: "indexCtrl",
            controller: "userCtrl"
        }).when("/accommodation",{
            templateUrl: "HTML/accommodation.html",
            controller: "accommodationCtrl"
        }).when("/employe_management", {
            templateUrl: "HTML/employemanagement.html",
            controller: "userCtrl"
        }).when("/emplacement_management", {
            templateUrl: "HTML/emplacementmanagement.html",
            controller: "campsiteCtrl"
        }).when ("/reservation_management", {
            templateUrl: "HTML/reservationmanagement.html",
            controller: "rsvCtrl"
        }).when("/profil", {
            templateUrl: "HTML/myprofil.html",
            controller: "indexCtrl"
        }).when("/reservation", {
            templateUrl: "HTML/reservation.html",
            controller: "rsvCtrl"
        }).otherwise({
            templateUrl: "HTML/accueil.html"
        });
    });
})();