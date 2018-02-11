#!/usr/bin/env node

const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname + '/views/public/css/main.css'));
    console.log(__dirname)
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));
