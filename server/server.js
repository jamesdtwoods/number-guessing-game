const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5001;

let randomNumber;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/randomNumber', (req, res) => {
  console.log('POST /randomNumber is getting requeset')
  console.log('req.body', req.body)
  generateRandomNumber()
  res.sendStatus(201)
})

function generateRandomNumber() {
  randomNumber = Math.floor((Math.random()* 25 + 1));
  console.log(randomNumber);
 };

 app.post('/round', (req, res) => {
  console.log('POST /round is getting requeset')
  console.log('req.body', req.body)
  
  res.sendStatus(201)
})
 


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
