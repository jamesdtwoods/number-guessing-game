function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()

let roundCounter =0;

function onReset() {
  // technichally don't need to clear guesses, but it 
  // looked funny with them being there if playing multiple games
  let rounds = document.getElementById('playerRound');
  rounds.innerHTML = '';
  roundCounter = 0;
  axios({
    method: 'POST',
    url: '/randomNumber'
  })
}

function formSubmit(event) {
  event.preventDefault()
}

function onSubmit() {
  
  let playerOne = document.getElementById('playerOne').value;
  let playerTwo = document.getElementById('playerTwo').value;
  let playerThree = document.getElementById('playerThree').value;
  let numberOne = document.getElementById('oneNumber').value;
  let numberTwo = document.getElementById('twoNumber').value;
  let numberThree = document.getElementById('threeNumber').value;
  document.getElementById('playerOne').value = '';
  document.getElementById('playerTwo').value = '';
  document.getElementById('playerThree').value = '';
  document.getElementById('oneNumber').value = '';
  document.getElementById('twoNumber').value = '';
  document.getElementById('threeNumber').value = '';
  let newRound = [
    {
      playerName: playerOne,
      playerNumber: Number(numberOne)
    },
    {
      playerName: playerTwo,
      playerNumber: Number(numberTwo),
    },
    {
      playerName: playerThree,
      playerNumber: Number(numberThree)
    }]
    roundCounter ++;
    console.log(roundCounter);
    console.log('expect array of input guesses', newRound);
  axios({
    method: 'POST',
    url: '/round',
    data: newRound
  }).then((response) => {
    getRound()
  })
  
}

function getRound() {
    axios({
      url: '/round',
      method: 'GET'
  }).then((response) => {
    let currentRound = response.data;
    console.log('expect array of guess with results', currentRound);
    renderRound(currentRound)
  })
}

function renderRound(currentRound){
  let rounds = document.getElementById('playerRound');
  rounds.innerHTML = '';
  for (let i=0; i < currentRound.length; i++){
    console.log('expect one person:', currentRound[i]);
    rounds.innerHTML += `
      <li>${currentRound[i].playerName} guessed ${currentRound[i].playerNumber} which is ${currentRound[i].numberComparison}</li>
    `
  }
  document.getElementById('total-rounds').textContent = roundCounter;
  
  console.log('Expect a round counter');
}
