const game = require('./build/main.bundle.js');
const express = require('express');

const app = express();

app.get('/game/roll', function(req, res) {
	let instance = new game.default(2);
	var score = instance.roll(req.query.num);
	res.json({ points: score });
});



console.log('Listening on port 3000');
app.listen(3000);