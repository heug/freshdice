const Game = require('./build/main.bundle.js');
// import Game from './build/main.bundle.js';

const express = require('express');

const app = express();

app.get('/game/roll', function(req, res) {
	let game = new Game(2);
	console.log(game.roll(req.query.num));
})

console.log('Listening on port 3000');
app.listen(3000);