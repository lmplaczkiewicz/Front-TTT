// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./diceui')
const earthTemplate = require('../templates/earthStanceDisplay.handlebars')
const airTemplate = require('../templates/airStanceDisplay.handlebars')
const fireTemplate = require('../templates/fireStanceDisplay.handlebars')
const voidTemplate = require('../templates/voidStanceDisplay.handlebars')
const waterTemplate = require('../templates/waterStanceDisplay.handlebars')
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

let ringCount = 0
let ringSCount = 0
let ringStCount = 0
let skillCount = 0
let skillSCount = 0
let skillStCount = 0

let explodeKeepsBoolean = false

const roll = function (sides) {
  const randomNumber = Math.floor(Math.random() * sides) + 1
  return randomNumber
}

const rollDice = function (explodeKeepsBoolean) {
  reRollDice = []
  // ui.hideRDiceExplosionElement()
  const ringDiceResults = []
  const skillDiceResults = []
  for (let i = 0; i < dice.length; i++) {
    if (dice[i].name === 'Ring') {
      for (let x = 0; x < ui.ringDiceNumberToRoll; x++) {
        ringDiceResults.push(roll(dice[i].sides))
      }
    } else if (dice[i].name === 'Skill') {
      for (let x = 0; x < ui.skillDiceNumberToRoll; x++) {
        skillDiceResults.push(roll(dice[i].sides))
      }
    }
  }
  ui.showDiceSuccess(ringDiceResults, skillDiceResults, explodeKeepsBoolean)
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
  if (ringCount !== 0) {
    ui.ringDiceNumberToRoll = ringCount
  } else {
    ui.ringDiceNumberToRoll = 0
    ui.ringDiceNumberToRoll = document.getElementById('ringDiceExplosionInput').value
  }
}

const getSDiceExplosionInput = function () {
  if (skillCount !== 0) {
    ui.skillDiceNumberToRoll = skillCount
  } else {
    ui.skillDiceNumberToRoll = 0
    ui.skillDiceNumberToRoll = document.getElementById('skillDiceExplosionInput').value
  }
}

const clearDice = function () {
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

const checkCurrentStacks = function () {
  if (document.getElementById('currentRing') !== null) {
    const ringTemp = document.getElementById('currentRing').querySelectorAll('.kept')
    let images
    for (let i = 0; i < ringTemp.length; i++) {
      images += ringTemp[i].src
    }
    if (images !== undefined) {
      ringCount = (images.match(/blacket.png/g) || []).length
      console.log(ringCount)
      if (ringCount > 0) {
        ui.showKeepRDiceExplosionElement()
      }
    } else {
      ui.hideKeepRDiceExplosionElement()
    }
  }
  console.log("document.getElementById('currentSkill'): " + document.getElementById('currentSkill'))
  if (document.getElementById('currentSkill') !== null) {
    const skillTemp = document.getElementById('currentSkill').querySelectorAll('.kept')
    let images2
    for (let i = 0; i < skillTemp.length; i++) {
      images2 += skillTemp[i].src
    }
    if (images2 !== undefined) {
      skillCount = (images2.match(/whitee.png/g) || []).length
      skillCount += (images2.match(/whiteet.png/g) || []).length
      console.log('skillCount: ' + skillCount)
      if (skillCount > 0) {
        ui.showKeepSDiceExplosionElement()
      } else {
        ui.hideKeepSDiceExplosionElement()
      }
    }
  }
}

const keepDice = function (event) {
  event.preventDefault()
  const dice = event.target
  if (dice.classList.contains('kept')) {
    console.log('in kept present condition')
    dice.classList.remove('kept')
  } else {
    dice.classList.add('kept')
  }
  console.log('explodeKeepsBoolean: ' + explodeKeepsBoolean)
  if (explodeKeepsBoolean === true) {
    checkCurrentStacks()
  }
}

const determineClick = function (event) {
  if (event.shiftKey) {
    event.preventDefault()
    const selectedDice = event.target
    const urlText = JSON.stringify(selectedDice.src)
    selectedDice.classList.add('reroll')
    if (urlText.includes('white')) {
      const reRollResult = roll(12)
      event.target.src = ui.reRollImages(reRollResult, 'Skill', explodeKeepsBoolean)
      ui.hideKeepSDiceExplosionElement()
      checkCurrentStacks()
    } else {
      const reRollResult = roll(6)
      event.target.src = ui.reRollImages(reRollResult, 'Ring', explodeKeepsBoolean)
      checkCurrentStacks()
      ui.hideKeepRDiceExplosionElement()
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

const determineExplodeKeeps = function (event) {
  if (event.target.checked === true) {
    explodeKeepsBoolean = true
  } else {
    explodeKeepsBoolean = false
  }
}

const ringExplosionSteps = function (event) {
  ui.ringDiceNumberToRoll = 0
  ui.skillDiceNumberToRoll = 0
  ui.hideRDiceExplosionElement()
  getRDiceExplosionInput()
  rollDice(explodeKeepsBoolean)
  $('#diceTime').text('Explosion')
}

const skillExplosionSteps = function (event) {
  ui.ringDiceNumberToRoll = 0
  ui.skillDiceNumberToRoll = 0
  ui.hideSDiceExplosionElement()
  getSDiceExplosionInput()
  rollDice(explodeKeepsBoolean)
  $('#diceTimeSkill').text('Explosion')
}

const keptRingExplosionSteps = function () {
  ui.ringDiceNumberToRoll = 0
  ui.skillDiceNumberToRoll = 0
  ui.hideKeepRDiceExplosionElement()
  getRDiceExplosionInput()
  rollDice(explodeKeepsBoolean)
  $('#diceTime').text('Explosion')
}

const keptSkillExplosionSteps = function () {
  ui.ringDiceNumberToRoll = 0
  ui.skillDiceNumberToRoll = 0
  ui.hideKeepSDiceExplosionElement()
  getSDiceExplosionInput()
  rollDice(explodeKeepsBoolean)
  $('#diceTimeSkill').text('Explosion')
}

const changeStance = function () {
  $('.stance').removeClass('activeStance')
  $(event.target).addClass('activeStance')
  if (event.target.id === 'earth') {
    $('#stanceOppDisplay').empty()
    $('#stanceOppDisplay').prepend(earthTemplate)
  } else if (event.target.id === 'air') {
    $('#stanceOppDisplay').empty()
    $('#stanceOppDisplay').prepend(airTemplate)
  } else if (event.target.id === 'water') {
    $('#stanceOppDisplay').empty()
    $('#stanceOppDisplay').prepend(waterTemplate)
  } else if (event.target.id === 'fire') {
    $('#stanceOppDisplay').empty()
    $('#stanceOppDisplay').prepend(fireTemplate)
  } else if (event.target.id === 'void') {
    $('#stanceOppDisplay').empty()
    $('#stanceOppDisplay').prepend(voidTemplate)
  }
}

const addHandlers = function () {
  $('#reRollDice').hide()
  $('.rollDice').on('click', function () {
    ui.hideRDiceExplosionElement()
    ui.hideSDiceExplosionElement()
    getDiceInputs()
    rollDice(explodeKeepsBoolean)
  })
  $('#explodeKeeps').on('click', determineExplodeKeeps)
  $('.clearDice').on('click', clearDice)
  // $('.reRollDice').on('click', reroll)
  $('.clearRDiceInputButton').on('click', clearRDiceInput)
  $('.clearSDiceInputButton').on('click', clearSDiceInput)
  $('#ringDiceExplosion').on('click', ringExplosionSteps)
  $('#skillDiceExplosion').on('click', skillExplosionSteps)
  $('#ringDiceKeepExplosion').on('click', keptRingExplosionSteps)
  $('#skillDiceKeepExplosion').on('click', keptSkillExplosionSteps)
  $('.minus').click(function () {
    const $input = $(this).parent().find('input')
    let count = parseInt($input.val()) - 1
    count = count < 0 ? 0 : count
    $input.val(count)
    $input.change()
    return false
  })
  $('.plus').click(function () {
    const $input = $(this).parent().find('input')
    $input.val(parseInt($input.val()) + 1)
    $input.change()
    return false
  })
  $('#earth').on('click', changeStance)
  $('#fire').on('click', changeStance)
  $('#air').on('click', changeStance)
  $('#void').on('click', changeStance)
  $('#water').on('click', changeStance)
}

module.exports = {
  addHandlers
}
