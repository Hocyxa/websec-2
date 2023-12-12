const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
let server = http.Server(app);

app.use(express.static(path.join(__dirname, '../')));
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../index.html'));
});
server.listen(process.env.PORT || 880, function() {
    console.log('Можно работать с веб-приложение ("127.0.0.1:880")');
});