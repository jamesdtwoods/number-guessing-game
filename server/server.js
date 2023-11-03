const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5001;

let randomNumber = 0;
let round =[];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.post('/randomNumber', (req, res) => {
  console.log('POST /randomNumber is getting requeset')
  console.log('POST /randomNumber req.body', req.body)
  generateRandomNumber()
  // forgot to clear out round, was getting the infinite guesses thing
  round = [];
  res.sendStatus(201)
});

function generateRandomNumber() {
  randomNumber = Math.floor((Math.random()* 25 + 1));
  console.log('the number for this round:', randomNumber);
 };

 app.post('/round', (req, res) => {
  console.log('POST /round is getting requeset')
  console.log('POST /round req.body:', req.body)
  let currentRound = req.body;
  for (let i=0; i < currentRound.length; i++){
    if (currentRound[i].playerNumber === randomNumber){
      currentRound[i].numberComparison = 'CORRECT';
      round.push(currentRound[i]);
    } else if (currentRound[i].playerNumber > randomNumber){
      currentRound[i].numberComparison = 'too high';
      round.push(currentRound[i]);
    } else if (currentRound[i].playerNumber < randomNumber){
      currentRound[i].numberComparison = 'too low';
      round.push(currentRound[i]);
    }
  }
  console.log('expect array of guess with results', round);
  res.sendStatus(201)
});



app.get('/round', (req, res) => {
  console.log('GET/round is getting requeset')
  console.log('GET/round req.body:', req.body)
  console.log('expect array of guess with results', round);
  res.send(round);
});
 


app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
});
