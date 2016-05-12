var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var data = require('./public/assets/data');

app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: true}));

// Routes
//app.use('/data', data);
  var brandonLikes = 0;
app.post('/likes/Brandon', function(req, res){
  brandonLikes++;
  res.send('' + brandonLikes);
});

var sionLikes = 0;
app.post('/likes/Sion', function(req, res){
sionLikes++;
res.send('' + sionLikes);
});

var chavoLikes = 0;
app.post('/likes/Chavo', function(req, res){
chavoLikes++;
res.send('' + chavoLikes);
});

var quinnLikes = 0;
app.post('/likes/Quinn', function(req, res){
quinnLikes++;
res.send('' + quinnLikes);
});



app.get('/likeArray', function(req, res){
  var likeArray = [sionLikes, chavoLikes, brandonLikes, quinnLikes];
  console.log('likeArray ran', likeArray);
  res.send(likeArray);

})
app.get('/bios', function(req, res){
  //console.log('data ran', data);
  res.send(data);
});
app.get('/', function(req, res){
  var file = 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});
app.get('/*', function(req, res) {
  //console.log('request params', req.params);
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
