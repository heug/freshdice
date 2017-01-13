class Game {

  constructor(players) {
    this.players = players;
    this.scores = {};
  }

  determineScore(arr) {
    var round = {};
    var score = 0;
    // Determine number of dies rolled for each value
    for (var i = 0; i < arr.length; i++) {
      if (round[arr[i]]) {
        round[arr[i]]++;
      } else {
        round[arr[i]] = 1;
      }
    }
    // Special 6-die results
    if (arr.length === 6) {
      if (Object.keys(round).length === 6) {
        // score += 1500;
        console.log('You rolled a straight!');
        return 1500;
      }
      var doublesCount = 0;
      for (var die in round) {
        if (round[die] === 2) {
          doublesCount++;
        }
        if (doublesCount === 3) {
          // score += 500;
          console.log('You rolled three pair!');
          return 500;
        }
      }
    }
    // Regular scoring rules
    for (var die in round) {
      if (round[die] >= 3) {
        score += die * (die == 1 ? 1000 : 100) * Math.max(round[die] - 2, 1);
      } else if (die == 1 || die == 5) {
        score += round[die] * die * (die == 1 ? 100 : 10);
      }
    }
    return score;
  }

  roll(numDice) {
    numDice = numDice || 6;
    console.log('Rolling ' + numDice + ' dice');
    var results = [];
    var sentence = 'You rolled ';
    for (var i = 0; i < numDice; i++) {
      var roll = Math.ceil(Math.random() * 6);
      results.push(roll);
      sentence += roll + ' ';
    }
    console.log(sentence);
    return this.determineScore(results);
  }
}

export default Game;
