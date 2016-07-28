var express = require('express');
var router = express.Router();
var loki = require('lokijs');

var db = new loki('loki.json');
var todo = db.addCollection('todo');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.json(todo.data.map(function(item) {return {
		title: item.title,
		description: item.description
	}}));
});

router.post('/', function (req, res, next) {
	var data = req.body;
	todo.insert(data);
	res.json(data);
});

module.exports = router;
