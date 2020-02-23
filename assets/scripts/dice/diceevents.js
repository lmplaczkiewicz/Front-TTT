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

let reRollDice = []

const roll = function (sides) {
  console.log(sides)
  const randomNumber = Math.floor(Math.random() * sides) + 1
  return randomNumber
}

const rollDice = function () {
  reRollDice = []
  console.log('Test')
  // ui.hideRDiceExplosionElement()
  const ringDiceResults = []
  const skillDiceResults = []
  for (let i = 0; i < dice.length; i++) {
    if (dice[i].name === 'Ring') {
      console.log(dice[i].name)
      console.log(dice[i].sides)
      for (let x = 0; x < ui.ringDiceNumberToRoll; x++) {
        ringDiceResults.push(roll(dice[i].sides))
      }
    } else if (dice[i].name === 'Skill') {
      for (let x = 0; x < ui.skillDiceNumberToRoll; x++) {
        skillDiceResults.push(roll(dice[i].sides))
      }
    }
  }
  console.log(ringDiceResults)
  console.log(skillDiceResults)
  ui.showDiceSuccess(ringDiceResults, skillDiceResults)
  $('.keepDice').off('click', determineClick)
  $('.keepDice').on('click', determineClick)
}

const getDiceInputs = function () {
  ui.ringDiceNumberToRoll = 0
  ui.skillDiceNumberToRoll = 0
  ui.ringDiceNumberToRoll = document.getElementById('rDice').value
  ui.skillDiceNumberToRoll = document.getElementById('sDice').value
}

const getRDiceExplosionInput = function () {
  ui.ringDiceNumberToRoll = 0
  ui.ringDiceNumberToRoll = document.getElementById('ringDiceExplosionInput').value
}

const getSDiceExplosionInput = function () {
  ui.skillDiceNumberToRoll = 0
  ui.skillDiceNumberToRoll = document.getElementById('skillDiceExplosionInput').value
}

const clearDice = function () {
  console.log('clear hit')
  ui.hideRDiceExplosionElement()
  ui.hideSDiceExplosionElement()
  ui.ringDiceTiles = []
  ui.skillDiceTiles = []
  const ringDiceDisplay = document.getElementById('ringDiceTileDisplay')
  const skillDiceDisplay = document.getElementById('skillDiceTileDisplay')
  ringDiceDisplay.innerHTML = ''
  skillDiceDisplay.innerHTML = ''
}

const clearRDiceInput = function () {
  document.getElementById('rDice').value = ''
}

const clearSDiceInput = function () {
  document.getElementById('sDice').value = ''
}

// const reroll = function (event) {
//   event.preventDefault()
//   console.log(reRollDice)
//   for (let i = 0; i < reRollDice.length; i++) {
//     console.log(reRollDice[2])
//     if (reRollDice[i].src.contains('/white')) {
//       const reRollResult = roll(12)
//       ui.reRollImages(reRollResult, reRollDice[i], 'Skill')
//     } else {
//       const reRollResult = roll(6)
//       ui.reRollImages(reRollResult, reRollDice[i], 'Ring')
//     }
//   }
// }

const keepDice = function (event) {
  event.preventDefault()
  const dice = event.target
  console.log('dice is ' + dice)
  console.log(dice.classList)
  if (dice.classList.contains('kept')) {
    console.log('in kept present condition')
    dice.classList.remove('kept')
  } else {
    dice.classList.add('kept')
  }
}

const determineClick = function (event) {
  if (event.shiftKey) {
    event.preventDefault()
    const selectedDice = event.target
    console.log(selectedDice)
    console.log(JSON.stringify(selectedDice.src))
    const urlText = JSON.stringify(selectedDice.src)
    selectedDice.classList.add('reroll')
    if (urlText.includes('white')) {
      const reRollResult = roll(12)
      event.target.src = ui.reRollImages(reRollResult, 'Skill')
    } else {
      const reRollResult = roll(6)
      event.target.src = ui.reRollImages(reRollResult, 'Ring')
    }
    // if (dice.classList.contains('reroll')) {
    //   console.log('in reroll present condition')
    //   reRollDice -= dice.src
    //   dice.classList.remove('reroll')
    //   dice.classList.remove('reroll' + i)
    // } else {
    //   dice.classList.add('reroll')
    // }
    // $('#reRollDice').show()
  } else {
    keepDice(event)
  }
}

const addHandlers = function () {
  $('#reRollDice').hide()
  $('.rollDice').on('click', function () {
    ui.hideRDiceExplosionElement()
    ui.hideSDiceExplosionElement()
    getDiceInputs()
    rollDice()
  })
  $('.clearDice').on('click', clearDice)
  // $('.reRollDice').on('click', reroll)
  $('.clearRDiceInputButton').on('click', clearRDiceInput)
  $('.clearSDiceInputButton').on('click', clearSDiceInput)
  $('#ringDiceExplosion').on('click', function () {
    ui.ringDiceNumberToRoll = 0
    ui.skillDiceNumberToRoll = 0
    ui.hideRDiceExplosionElement()
    getRDiceExplosionInput()
    rollDice()
  })
  $('#skillDiceExplosion').on('click', function () {
    ui.ringDiceNumberToRoll = 0
    ui.skillDiceNumberToRoll = 0
    ui.hideSDiceExplosionElement()
    getSDiceExplosionInput()
    rollDice()
  })
}

module.exports = {
  addHandlers
}
