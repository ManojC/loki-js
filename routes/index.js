var express = require('express');
var router = express.Router();
var loki = require('lokijs');

var db = new loki('loki.json');
var todo = db.addCollection('todo');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('home.html', { root: './public' });
});

/* GET all to do items */
router.get('/get-list', function(req, res, next) {
    res.json(todo.data.map(function(item) {
        return {
            title: item.title,
            description: item.description
        }
    }));
});

/* POST - save new to do item. */
router.post('/add-item', function(req, res, next) {
    todo.insert(req.body);
    res.json(req.body);
});

module.exports = router;
