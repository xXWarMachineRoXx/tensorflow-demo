const spawn = require("child_process").spawn;


var path = require('path');
const request = require('request');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'public');



app.use(express.static(dir));
var favicon = require('serve-favicon');
const { text } = require('body-parser');

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(favicon(__dirname + '/public/index.css'));

app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
    
// });
app.get('/flask', function(req, res) {
  request('http://127.0.0.1:8001/flask', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
app.get('/cat', function(req, res) {
  request('http://127.0.0.1:8001/flask/cat', function (error, response, body) {
      console.error('error:', error); // Print the error
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the data received
      res.send(body); //Display the response on the website
    });      
});
app.post('/', urlencodedParser, (req, res) => {
    // console.log(window.getElementById('tags'));
    
    received_text = req.body.Text;
    received_tags = Array(req.body.Tags);
    console.log("index js received",received_text, received_tags);

    const pythonProcess = spawn('python',["cat.py", received_text, received_tags]);
    pythonProcess.stdout.pipe(res)
    // pythonProcess.on('close ',)
    res.sendStatus(200);
    new_data=0
    var x = pythonProcess.stdout.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
       
        return data;
        // res.send(data);
        
      });
      
      
      pythonProcess.stderr.on('data', (data) => {
        console.error(`child stderr:\n${data}`);
        
      });
    pythonProcess.on('exit', function (code, signal) {
        console.log('child process exited with ' +
                    `code ${code} and signal ${signal}`);
      });
   


});




// app.on('event:user_created');
// app.emit('event:user_created', data);
