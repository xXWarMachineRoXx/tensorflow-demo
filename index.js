
var path = require('path');
const request = require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var express = require('express');
var app = express();

var flaskServer='http://127.0.0.1:8001/'






var dir = path.join(__dirname, 'public');



app.use(express.static(dir));
var favicon = require('serve-favicon');
const { json } = require("express");
const { body } = require('express-validator');
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(favicon(__dirname + '/public/index.css'));

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});

app.get('/flask', function(req, res) {
  request(flaskServer+'/flask', function (error, response, body) {
      console.error('\nerror:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });     
    
});




app.get('/cat', function(req, res) {
  request(flaskServer+'../', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});
app.post('/flask/cat', urlencodedParser, (req, res) => {
    received_text = req.body.Text;
    received_tags = Array(req.body.Tags);
    console.log("index js received",received_text, received_tags,"\n\n");
    url=flaskServer+'flask/cat';
    // if(received_tags===undefined || received_text ===undefined){
      //   res.send(JSON.stringify("Sorry I didn't get that"));
      //   res.sendStatus(400);
      
      // }else if(typeof(received_tags)!=='string' || typeof(received_tags)!=='string'){
        //   res.send(JSON.stringify("Sorry bad request"));
        
        //   res.sendStatus(406);
        // }else{
      
      const formData = new FormData();
      formData.append('Text',received_text);
      formData.append('Text',received_text);
      console.log('POST "ing to '+url);
      console.log('\n :\n',formData);
      res.send(JSON.stringify("hello"));
      var obj;
      fetch(flaskServer+'flask/cat', { method: 'POST' }, {
          method: 'POST',
          body: formData
      }).then((response) => response.json())
          .then((result) => {
              console.log('Success:', result);
          })
          .catch((error) => {
              console.error('Error:', error);
          });
    }

   

);

