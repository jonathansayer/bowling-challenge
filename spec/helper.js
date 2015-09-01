    var fillFrameWith = function(score1, score2){
      game1.addScore(score1);
      game1.addScore(score2);
    }

    var scoreStrike = function(){
      game1.addScore(10);
    }

    var scoreSpare = function(score1, score2) {
      game1.addScore(score1);
      game1.addScore(score2);
    }
