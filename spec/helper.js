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

var enterScores = function(score1, score2) {
  frame1.scoreInput(score1);
  frame1.scoreInput(score2);
}

var strikeShot = function() {
  frame1.scoreInput(10);
}
