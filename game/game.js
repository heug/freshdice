class Game {

  constructor(players) {
    this.players = players;
    this.scores = {};
  }

  determineScore(arr) {
    var round = {};
    var score = 0;
    for (var i = 0; i < arr.length; i++) {
      if (round[arr[i]]) {
        round[arr[i]]++;
      } else {
        round[arr[i]] = 1;
      }
    }l
    if (arr.length === 6) {
      if (Object.keys(round).length === 6) {
        score += 1500;
        console.log('You rolled a straight! ' + score);
      }
      var doublesCount = 0;
      for (var die in round) {
        if (round[die] === 2) {
          doublesCount++;
        }
        if (doublesCount === 3) {
          score += 1000;
          console.log('You rolled three pair! ' + score);
        }
      }
    }

    for (var die in round) {
      if (round[die] >= 3) {
        score += die * (die == 1 ? 1000 : 100) * Math.max(round[die] - 2, 1);
      } else if (die == 1 || die == 5) {
        score += round[die] * die * (die == 1 ? 100 : 10);
      }
    }
    console.log(score);
    console.log(round);
    
  }

  roll(numDice) {
    numDice = numDice || 6;
    console.log('Rolling ' + numDice + ' dice');
    // var results = [];
    var sentence = 'You rolled ';
    // for (var i = 0; i < numDice; i++) {
    //   var roll = Math.ceil(Math.random() * 6);
    //   results.push(roll);
    //   sentence += roll + ' ';
    // }
    var results = [1,2,2,4,3,3];  
    // var results = [1,2,3,4,5,6];
    // console.log(sentence);
    this.determineScore(results);
  }
}

export default Game;
