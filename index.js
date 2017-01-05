class Game {
  constructor(players) {
    this.players = players;
    this.scores = {};
  }

  determineScore(arr) {
    var round = {};
    for (var i = 0; i < arr.length; i++) {
      if (round[arr[i]]) {
        round[arr[i]]++;
      } else {
        round[arr[i]] = 1;
      }
    }
    if (arr.length === 6) {
      if (Object.keys(round).length === 6) {
        return console.log('You rolled a straight!');
      }
      for (var die in round) {
        console.log(round[die]); 
      }
    }
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
    var results = [1,1,2,2,3,3];  
    // var results = [1,2,3,4,5,6];
    console.log(sentence);
    this.determineScore(results);
  }
}

var test = new Game(5);
test.roll();
