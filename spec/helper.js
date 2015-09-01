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
  testFrame.scoreInput(score1);
  testFrame.scoreInput(score2);
}

var strikeShot = function() {
  testFrame.scoreInput(10);
}
