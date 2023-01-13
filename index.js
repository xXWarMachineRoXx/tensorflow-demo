
var path = require('path');
const request = require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
const { body } = require('express-validator');

var flaskServer='http://127.0.0.1:8001/'
var dir = path.join(__dirname, 'public');









app.use(express.static(dir));

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





app.post('/flask/cat', urlencodedParser, (req, res) => {
    received_text = req.body.Text;
    received_tags = Array(req.body.Tags);
    console.log("index js received",received_text, received_tags,"\n\n");
    url=flaskServer+'flask/cat';
    
     
    
      console.log('POSTing to '+url);
      res.send(JSON.stringify("hello"));
    //   data={
    //     'Text':received_text,
    //     'Tags':received_tags
    // };
    data="hello from the data pay load";
      fetch(url, { method: 'POST' }, {

          
          body: JSON.stringify(data),
      }).then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

   

);

