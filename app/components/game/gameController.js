app.controller('gameController',function($scope, $http){
    $scope.heading = "Gra w wisielca";
    $scope.clues = {};
    $scope.points = 0;
    $scope.lapse = 0;
    $scope.letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'];
    $scope.clue = "";
    $scope.category = "";

    $scope.castLots = function() {
       $http.get('/m1/clues')
        .success(function(data) {
            //$scope.clues = data;
            //console.log(data);
            var data = data[Math.floor(Math.random() * data.length)];
            var clu = data.clue;
            var clue1 = "";
            for (var i = 0; i < clu.length; i++) {
            if (clu[i] == " ") clue1 = clue1 + " ";
            else clue1 = clue1 + "-";
            }
     $scope.clue = clue1;
     $scope.clueAnswer = clu.toUpperCase();
           
     })
        .error(function(error) {
            console.log('Error: ' + error);
        });
        
    }






});