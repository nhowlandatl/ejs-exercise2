const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // tells render engine to look to 'ejs' type files
app.set('views', 'views'); // this means you're setting the view engine to look in the 'views' folder; express knows that views is a thing and to look to the directory 'views'

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('header');
});

app.get('/cats', function(req, res) {
    res.render('main', {animalSound: 'Meow'});
});

app.get('/cats_and_dogs', function(req, res) {
    res.render('main', {animalSound: 'Living together!'});
});

app.get('/greet/:name', function(req, res) {
    res.render('greet', {name: req.params.name});
});

// queries take the form of http://localhost:3000/year?age=22
app.get('/year', function(req, res) {
    res.render('age', {age: req.query.age});
});

app.listen('3000', function() {
    console.log('This is listening')
});

