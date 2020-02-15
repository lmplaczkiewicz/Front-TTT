// const store = require('../store')
const showDiceTemplate = require('../templates/diceTiles.handlebars')
const showSkillDiceTemplate = require('../templates/skillDiceTiles.handlebars')
const moment = require('moment');

const showDiceSuccess = function (ringDiceResults, skillDiceResults) {
  const ringDiceTiles = []
  const skillDiceTiles = []
  for (let i = 0; i < ringDiceResults.length; i++) {
    console.log('In ring dice')
    if (ringDiceResults[i] === 1) {
      ringDiceTiles.push('./assets/images/black.png')
    } else if (ringDiceResults[i] === 2) {
      ringDiceTiles.push('./assets/images/blacket.png')
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
    } else if (skillDiceResults[i] === 12) {
      skillDiceTiles.push('./assets/images/whitee.png')
    }
  }
  console.log(skillDiceTiles)
  const time = moment().format('LTS');
  const showRingDiceHtml = showDiceTemplate({dice: ringDiceTiles})// quests: data.quests })
  $('#ringDiceTileDisplay').prepend(showRingDiceHtml)
  $('#diceTime').text(time)
  const showSkillDiceHtml = showSkillDiceTemplate({dice: skillDiceTiles})// quests: data.quests })
  $('#skillDiceTileDisplay').prepend(showSkillDiceHtml)
  $('#diceTimeSkill').text(time)
}

module.exports = {
  showDiceSuccess
}
