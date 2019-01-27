var express = require('express');
var app = express();
app.set('view engine','ejs');
//Initialization server node js
app.get('/', function(req, res) {
  res.send('Thi is home');
});
app.get('/user/:id', function(req, res) {
  res.send('Thi is home'+ req.params.id);
});
app.listen(3000);
