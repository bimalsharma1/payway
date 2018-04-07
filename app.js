var express = require('express');
var bodyParser = require('body-parser');


var app = express();

var port = 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Heelo Bimal');
});

app.get('/books', function (req, res) {
    res.send('Heelo books');
});

app.post('/process-payment', function (req, res) {
    // res.send('Heelo books');
    // res.send(req);
    console.log(req.body.singleUseTokenId)
    res.send(req.body.singleUseTokenId);
    // console.log(req)
    // console.log(res)
});

app.listen(5000, function (err) {
    console.log('server running on port ' + port);
});