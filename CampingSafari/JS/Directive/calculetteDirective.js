(function () {
    angular.module("CampingSafari").directive("maSuperCalculette", function () {
        return {
            restrict: "E", //
            controller: "AdditionController",// spécifie mon contrôleur
            template: '</option></select></div><div class="col-sm-2"><input type="text" ng-model="suiteChiffres">{{result}}</div>',
            scope: {},
            link: function ($scope, $elements, $attrs) {
                $scope.suiteChiffres = $elements.attr("depart") || 0;//attr = jquery
            }
        };
    });
})();
