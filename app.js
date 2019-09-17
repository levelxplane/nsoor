#!/usr/bin/env node

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '/views/public/css/main.css'));
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/linkedin', function(req, res) {
    res.redirect('https://www.linkedin.com/in/mansoorssyed/');
});

app.get('/github', function(req, res) {
    res.redirect('https://github.com/levelxplane/');
});

app.get('/time', function(req, res) {
    var date = new Date();

    var timeObject = {
      "hour": date.getHours(),
      "minutes": date.getMinutes(),
      "seconds": date.getSeconds(),
      "full": date
    }
    res.send(JSON.stringify(timeObject));
});

app.listen(8080, () => console.log('App listening on port 8080!'));
