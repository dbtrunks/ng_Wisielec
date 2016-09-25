 
app.config(function ($routeProvider){
    $routeProvider
    .when('/top',{
        templateUrl: "components/top/topView.html",
        controller: "topController"
    })
   .when('/info',{
        templateUrl: "components/info/infoView.html",
        controller: "infoController" 
    })
    .when('/game',{
        templateUrl: "components/game/gameView.html",
        controller: "gameController"
    })
    .when('/',{
        templateUrl: "components/game/gameView.html",
        controller: "gameController"
    })
    .otherwise({
    template: "Brak strony!"
    })
});
 