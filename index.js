var path = require('path');
var express = require('express');
const fs = require('fs')

var app = express();

app.use('/dist/js', express.static('./dist/js'));
app.use('/images', express.static('./images'));

app.get('/', (req, res) => {
	res.sendFile('./index.html', { root : __dirname});
});


var server = app.listen(10021, function() {
    console.log('listening');
});
