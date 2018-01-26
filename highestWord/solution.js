'use strict';

function high(x){
  var wordArr = x.split(' ');
  var highScore = 0;
  var bestWord = '';
  for (var i = 0; i < wordArr.length; i++) {
    var wordScore = 0;
    for (var k = 0; k < wordArr[i].length; k++) {
      wordScore += wordArr[i].charCodeAt(k) - 96;
    }
    if (wordScore > highScore) {
      highScore = wordScore;
      bestWord = wordArr[i];
    }
  }
  return bestWord;
}