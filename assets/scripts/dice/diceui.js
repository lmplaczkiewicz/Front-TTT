// const store = require('../store')
const showDiceTemplate = require('../templates/diceTiles.handlebars')
const showSkillDiceTemplate = require('../templates/skillDiceTiles.handlebars')
const moment = require('moment');
let ringDiceNumberToRoll
let skillDiceNumberToRoll
let ringDiceTiles = []
let skillDiceTiles = []
let ringDiceExplosionCount = 0
let skillDiceExplosionCount = 0
let rDiceExplosionElement = document.getElementById('ringDiceExplosion')

const showDiceSuccess = function (ringDiceResults, skillDiceResults) {
  ringDiceTiles = []
  skillDiceTiles = []
  let ringDiceExplosionCount = 0
  let skillDiceExplosionCount = 0
  for (let i = 0; i < ringDiceResults.length; i++) {
    console.log('In ring dice')
    if (ringDiceResults[i] === 1) {
      ringDiceTiles.push('./assets/images/black.png')
    } else if (ringDiceResults[i] === 2) {
      ringDiceTiles.push('./assets/images/blacket.png')
      ringDiceExplosionCount++
    } else if (ringDiceResults[i] === 3) {
      ringDiceTiles.push('./assets/images/blacko.png')
    } else if (ringDiceResults[i] === 4) {
      ringDiceTiles.push('./assets/images/blackot.png')
    } else if (ringDiceResults[i] === 5) {
      ringDiceTiles.push('./assets/images/blackst.png')
    } else if (ringDiceResults[i] === 6) {
      ringDiceTiles.push('./assets/images/blacks.png')
    }
  }
  console.log(ringDiceTiles)
  for (let i = 0; i < skillDiceResults.length; i++) {
    if (skillDiceResults[i] === 1 || skillDiceResults[i] === 2) {
      skillDiceTiles.push('./assets/images/white.png')
    } else if (skillDiceResults[i] === 3 || skillDiceResults[i] === 4 || skillDiceResults[i] === 5) {
      skillDiceTiles.push('./assets/images/whiteo.png')
    } else if (skillDiceResults[i] === 6 || skillDiceResults[i] === 7) {
      skillDiceTiles.push('./assets/images/whitest.png')
    } else if (skillDiceResults[i] === 8 || skillDiceResults[i] === 9) {
      skillDiceTiles.push('./assets/images/whites.png')
    } else if (skillDiceResults[i] === 10) {
      skillDiceTiles.push('./assets/images/whiteso.png')
    } else if (skillDiceResults[i] === 11) {
      skillDiceTiles.push('./assets/images/whiteet.png')
      skillDiceExplosionCount++
    } else if (skillDiceResults[i] === 12) {
      skillDiceTiles.push('./assets/images/whitee.png')
      skillDiceExplosionCount++
    }
  }
  console.log(skillDiceTiles)
  const time = moment().format('LTS');
  const showRingDiceHtml = showDiceTemplate({dice: ringDiceTiles})
  if(ringDiceTiles.length > 0){
    $('#ringDiceTileDisplay').prepend(showRingDiceHtml)
    $('#diceTime').text(time)
    if(ringDiceExplosionCount > 0){
      console.log('explosion rdice exist');
      showRDiceExplosionElement()
    }
  }
  const showSkillDiceHtml = showSkillDiceTemplate({dice: skillDiceTiles})
  if(skillDiceTiles.length > 0){
    $('#skillDiceTileDisplay').prepend(showSkillDiceHtml)
    $('#diceTimeSkill').text(time)
  }
}

const showRDiceExplosionElement = function () {
    // rDiceExplosionElement.style.display = 'block'
}

const hideRDiceExplosionElement = function () {
    rDiceExplosionElement.style.display = 'none'
}

module.exports = {
  showDiceSuccess,
  hideRDiceExplosionElement
}
