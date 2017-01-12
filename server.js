const Game = require('./game/game');

const express = require('express');

const app = express();

app.get('/game/roll', function(req, res) {
	let game = new Game(2);
	console.log(game.roll(req.query.num));
})

app.listen(3000);