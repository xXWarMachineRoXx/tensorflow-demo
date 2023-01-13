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
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var express = require('express');
var app = express();
var favicon = require('serve-favicon');
// const { body } = require('express-validator');

var flaskServer='http://127.0.0.1:8001/'
var dir = path.join(__dirname, 'public');



app.use(urlencodedParser);





// sets the dir to server from , eg : sets the opening 
app.use(express.static(dir));

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(favicon(__dirname + '/public//css/index.css'));
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





app.post('/flask/cat', (req, res) => {
    received_text = req.body.Text;
    received_tags = Array(req.body.Tags);
    date=new Date()
    console.log("\n"+"=".repeat(100)+"\n\nat "+date+"\n index js received",received_text,"\n\n"+"=".repeat(100)+"\n");
    url=flaskServer+'flask/cat';
    console.log('POSTing to '+url);
    res.status(200).send(received_tags);
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

