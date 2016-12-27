class Game {
  constructor(players) {
    this.players = players;
    this.dice = 6;
  }

  roll() {
    console.log('rolling ' + this.dice + ' dice');
  }
}

var test = new Game(5);
test.roll();
