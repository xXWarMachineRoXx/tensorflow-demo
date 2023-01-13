// -----------------------
// All required modules 
// -----------------------
// Path
// Request to send and get requests ( maybe substituted for fetch)
// body-parser for forms
//

var path = require('path');
const request = require('request');
var bodyParser = require('body-parser');
//add cors 
var cors = require('cors')

var express = require('express');
var app = express();
var favicon = require('serve-favicon');

var multer = require('multer');
var upload = multer();


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
// const { body } = require('express-validator');
app.use(upload.array()); 

var flaskServer = 'http://127.0.0.1:8001/'
var dir = path.join(__dirname, 'public');



// sets the dir to server from , eg : sets the opening 
app.use(express.static(dir));

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(favicon(__dirname + '/public/css/index.css'));
app.listen(3000, function () {
  console.log('Listening on http://localhost:3000/');
});



app.get('/flask', function (req, res) {
  request(flaskServer + '/flask', function (error, response, body) {
    console.error('\nerror:', error); // Print the error
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the data received
    res.send(body); //Display the response on the website
  });

});




//allow cors on this route
app.post('/flask/cat',cors(),(req, res) => {
  received_text = req.body["Text"];
  received_tags = req.body["Tags"];
  // received_tags = req.body["Tags"];
  date = new Date();
  console.log("\n" + "=".repeat(100) + "\n\nat " + date + "\n \nindex js received \nText :",received_text,"\nTags :",received_tags ,"\n\n" + "=".repeat(100) + "\n");
  res.send(received_tags);

  
}



) 


// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("Text", "Accenture will do 50% more business than last year");
// urlencoded.append("Tags", "Business Leisure Travel");

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: urlencoded,
//   redirect: 'follow'
// };

// fetch("http://127.0.0.1:3000/flask/cat", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

