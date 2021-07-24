var express = require('express');

var app = new express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(process.env.port || 3000);

module.exports = app;
