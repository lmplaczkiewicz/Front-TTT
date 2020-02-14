// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./diceui')
// const store = require('../store')

const dice = [
  {
    name: 'Ring',
    sides: 6
  },
  {
    name: 'Skill',
    sides: 12
  }
]

const keepDice = function (event) {
  event.preventDefault()
  const dice = event.target
  console.log('dice is ' + dice)
  if (dice.classList.contains('kept')) {
    dice.classList.remove('kept')
  } else {
    dice.classList.add('kept')
  }
}

const roll = function (sides) {
  console.log(sides)
  const randomNumber = Math.floor(Math.random() * sides) + 1
  return randomNumber
}

const rollDice = function () {
  console.log('Test')
  const ringDiceRoll = document.getElementById('rDice').value
  const skillDiceRoll = document.getElementById('sDice').value
  const ringDiceResults = []
  const skillDiceResults = []
  for (let i = 0; i < dice.length; i++) {
    if (dice[i].name === 'Ring') {
      console.log(dice[i].name)
      console.log(dice[i].sides)
      for (let x = 0; x < ringDiceRoll; x++) {
        ringDiceResults.push(roll(dice[i].sides))
      }
    } else if (dice[i].name === 'Skill') {
      for (let x = 0; x < skillDiceRoll; x++) {
        skillDiceResults.push(roll(dice[i].sides))
      }
    }
  }
  console.log(ringDiceResults)
  console.log(skillDiceResults)
  ui.showDiceSuccess(ringDiceResults, skillDiceResults)
  $('.keepDice').on('click', keepDice)
}

const clearInput = function () {
  document.getElementById('clearRDiceButton').value = ''
  document.getElementById('clearSDiceButton').value = ''
}

const addHandlers = function () {
  $('.rollDice').on('click', rollDice)
  $('.clearButton').on('click', clearInput)
  // $('#rollDice').on('click', function () {
  //  console.log('TEST')
  // })
}

module.exports = {
  addHandlers
}
