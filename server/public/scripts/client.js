function onReady() {
  console.log("JavaScript is loaded!")
}

onReady()


function onReset() {
  axios({
    method: 'POST',
    url: '/randomNumber'
  })
}


function submitRandom(event) {
  event.preventDefault()
  let playerOne = document.getElementById('playerOne').value;
  let playerTwo = document.getElementById('playerTwo').value;
  let playerThree = document.getElementById('playerThree').value;
  let numberOne = document.getElementById('oneNumber').value;
  let numberTwo = document.getElementById('twoNumber').value;
  let numberThree = document.getElementById('threeNumber').value;
  // document.getElementById('playerOne').value = '';
  // document.getElementById('playerTwo').value = '';
  // document.getElementById('playerThree').value = '';
  // document.getElementById('oneNumber').value = '';
  // document.getElementById('twoNumber').value = '';
  // document.getElementById('threeNumber').value = '';
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
    console.log(newRound);
  axios({
    method: 'POST',
    url: '/round',
    data: newRound
  })
  // .then((response) => {
  //   getRound()
  // })
  
}

function resetRound() {
  axios({
    method: 'POST',
    url: '/randomNumber',
    data: randomNumber
  }).then((response) => {
    getRound()
  })
}




// function submitRandom(event) {
//   event.preventDefault()
//   let playerOne = document.getElementById('playerOne').value;
//   let playerTwo = document.getElementById('playerTwo').value;
//   let playerThree = document.getElementById('playerThree').value;
//   let numberOne = document.getElementById('oneNumber').value;
//   let numberTwo = document.getElementById('twoNumber').value;
//   let numberThree = document.getElementById('threeNumber').value;
//   document.getElementById('playerOne').value = '';
//   document.getElementById('playerTwo').value = '';
//   document.getElementById('playerThree').value = '';
//   document.getElementById('oneNumber').value = '';
//   document.getElementById('twoNumber').value = '';
//   document.getElementById('threeNumber').value = '';
//   let newRound = {
//     playerOne: playerOne,
//     playerTwo: playerTwo,
//     playerThree: playerThree,
//     numberOne: Number(numberOne),
//     numberTwo: Number(numberTwo),
//     numberThree: Number(numberThree),
//   }
//   // let newRound = {
//   //   playerOne: playerOne,
//   //   playerTwo: playerTwo,
//   //   playerThree: playerThree,
//   //   numberOne: Number(numberOne),
//   //   numberTwo: Number(numberTwo),
//   //   numberThree: Number(numberThree),
//   // }
//   axios({
//     method: 'POST',
//     url: '/round',
//     data: newRound
// }).then((response) => {
//     getRound()
// })
//   console.log("JavaScript is loaded!")
// }
// function resetRound(){
// axios({
//     method: 'POST',
//     url: '/randomNumber',
//     data: randomNumber
// }).then((response) => {
//     getRound()
// })
// }
// function getRound() {
//   axios({
//     url: '/round',
//     method: 'GET'
// }).then((response) => {
//     console.log('response.data:', response.data)
//     let currentRound = response.data.array
//     let randomNumber = response.data.randomNumber
//     //let contentDiv = document.querySelector('');
//     renderRound(currentRound, randomNumber)
// })
// }
// function renderRound(currentRound, randomNumber) {
// for (let round of rounds) {
//   if (round.numberOne === randomNumber) {
//     renderWinnerOne(currentRound)
//   }
//   else if (round.numberTwo === randomNumber) {
//     renderWinnerTwo()
//   }
//   else if (round.numberThree === randomNumber) {
//     renderWinnerThree()
//   }
//   else {renderLoser()}
// }
// }
// function renderWinnerOne(currentRound){
//   let rounds = document.getElementById('playerRound');
//   rounds.innerHTML = '';
//   rounds.innerHTML += `
//   <td class = "Winner">${currentRound.numberOne}</td>
//   <td>${currentRound.numberTwo}</td>
//   <td>${currentRound.numberThree}</td>
// `}
// function renderWinnerTwo(currentRound){
//   let rounds = document.getElementById('playerRound');
//   rounds.innerHTML = '';
//   rounds.innerHTML += `
//   <td>${currentRound.numberOne}</td>
//   <td class = "Winner">${currentRound.numberTwo}</td>
//   <td>${currentRound.numberThree}</td>
// `}
// function renderWinnerThree(currentRound){
//   let rounds = document.getElementById('playerRound');
//   rounds.innerHTML = '';
//   rounds.innerHTML += `
//   <td>${currentRound.numberOne}</td>
//   <td>${currentRound.numberTwo}</td>
//   <td class = "Winner">${currentRound.numberThree}</td>
// `}
// function renderLoser(currentRound){
//   let rounds = document.getElementById('playerRound');
//   rounds.innerHTML = '';
//   rounds.innerHTML += `
//   <td>${currentRound.numberOne}</td>
//   <td>${currentRound.numberTwo}</td>
//   <td>${currentRound.numberThree}</td>
// `}
