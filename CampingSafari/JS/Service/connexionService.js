(function () {
    var app = angular.module("CampingSafari");

    app.service("Session", function () {
        var user = { Level: -1 };
  
        return {
            getUser: function() {
                return user;
            }, 
            setUser: function(u) {
                user = u || {Level:-1};
            }
        };

 
    });    
    
})();
