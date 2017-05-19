angular.module('CampingSafari')
.directive('scrollTo', function ($location, $anchorScroll) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                var id = attrs.scrollTo;
                $location.hash(id);
                $anchorScroll();
            });
        }
    }
});