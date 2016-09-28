app.controller('gameController',function($scope, $http){
    $scope.heading = "Gra w wisielca";
    //$scope.clues = {};
    $scope.points = 0;
    $scope.lapse = 0;
    $scope.win = false;
    $scope.lose = false;
    $scope.letters = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'];
    $scope.clue = "";
    $scope.clueAnswer = "";
    $scope.category = "";

    $scope.castLots = function() {
       $http.get('/m1/clues')
        .success(function(data) {
            //$scope.clues = data;
            //console.log(data);
            var data = data[Math.floor(Math.random() * data.length)]; //lepiej losowanie przenieść do procedury po stronie bazy.
            var clueOrginal = data.clue;
            var clue1 = "";
            for (var i = 0; i < clueOrginal.length; i++) {
            if (clueOrginal[i] == " ") clue1 = clue1 + " ";
            else clue1 = clue1 + "-";
            }
     $scope.clue = clue1;
     $scope.clueAnswer = clueOrginal.toUpperCase();
     $scope.category = data.category;
           
     })
        .error(function(error) {
            console.log('Error: ' + error);
        });
        
    }

    $scope.choiceLeatter = function(par) {
        let element = document.getElementById("#" + par);
        if (  $scope.clueAnswer.indexOf(par) > -1) {
            for (var i = 0; i <  $scope.clueAnswer.length; i++) {
                if ( $scope.clueAnswer[i] == par) {
                     $scope.clue =  $scope.clue.substr(0, i) + par +  $scope.clue.substr(i + 1);
                     $scope.points += 10;
                }
            }
            element.style.background = "#00ff00";
        }
        else {
            element.style.background = "#ff0000";
             $scope.lapse += 1;
        }
        element.disabled = true;

        if ( $scope.clueAnswer ==  $scope.clue) {
             $scope.win = true;
        }

        if ( $scope.lapse == 5) {
             $scope.clue = "";
             $scope.showBt = true;
             $scope.lose = true;
        }
    }


    $scope.resetPoints = function() {
        $scope.points = 0;
        $scope.lapse = 0;
        $scope.win = false;
        $scope.lose = false;
        $scope.clue = "";
        $scope.clueAnswer = "";
        var buttons = document.querySelectorAll("input[type=button]");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].style.background = "#d4d4d4";
        }
    }


});