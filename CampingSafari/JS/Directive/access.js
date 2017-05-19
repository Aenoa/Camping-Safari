angular.module('CampingSafari').directive('restrict', function (authService) {
    return {
        restrict: 'A',
        priority: 100000,
        scope: false,
        link: function (){},
        compile: function (element, attr, linker) {
            var accessDenied = true; // par défaut, il n'a pas accès
            var user = authService.getUser(); // On récupère l'utilisateur en cours
            var attributes = attr.access.split(" "); // on sépare chaque paramètres de access du HTML
            for (var i in attributes) {
                if (user.role == attributes[i]) { // Si l'utilisateur a le même role que le droit d'access
                    accessDenied = false; // La personne a accès, on ne supprime pas
                }
            }

            // Si l'on a pas accès à l'objet en question, on le supprime
            if (accessDenied) {
                element.children().remove(); // nettoyage des enfants
                element.remove(); // nettoyage du noeud
            }

        }
    }
});