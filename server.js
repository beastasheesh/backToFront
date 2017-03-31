var express = require('express'),
    app = express(),
    assert = require('assert');
    mongo = require('mongodb'),
    SampleData = require('./server/db/model.js');

mongoURL = 'mongodb://localhost:27017/fullStackDatabase';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/api/jsonData', function(req, res){
  var resultArray = [];
  mongo.connect(mongoURL, function(err, db){
    assert.equal(null, err);
    var meetups = db.collection('sampleData').find();
    meetups.forEach(function(doc, err){
      assert.equal(null, err);
      resultArray.push(doc);
    }, function(){
      db.close();
      res.json(resultArray);
    });
  });
});

app.post('/api/insertForm', function(req, res){
  var sampleData = {
    name: req.body.username,
    password: req.body.password,
    organization: req.body.username
  }
  mongo.connect(mongoURL, function(err, db){
    db.collection('sampleData').insertOne(sampleData, function(err, result){
      console.log(result);
    });
  });
});

app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function(){
  console.log('I\'m listening on localhost:3000');
});
