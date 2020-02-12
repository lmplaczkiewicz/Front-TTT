// const store = require('../store')
const showDiceTemplate = require('../templates/diceTiles.handlebars')

const showDiceSuccess = function (ringDiceResults, skillDiceResults) {
  const ringDiceTiles = []
  const skillDiceTiles = []
  for (let i = 0; i < ringDiceResults.length; i++) {
    if (ringDiceResults[i] === 1) {
      ringDiceTiles.push('../images/black.png')
    } else if (ringDiceResults[i] === 2) {
      ringDiceTiles.push('../images/blacket.png')
    } else if (ringDiceResults[i] === 3) {
      ringDiceTiles.push('../images/blacko.png')
    } else if (ringDiceResults[i] === 4) {
      ringDiceTiles.push('../images/blackot.png')
    } else if (ringDiceResults[i] === 5) {
      ringDiceTiles.push('../images/blackst.png')
    } else if (ringDiceResults[i] === 6) {
      ringDiceTiles.push('../images/blacks.png')
    }
  }
  console.log(ringDiceTiles)
  for (let i = 0; i < skillDiceResults.length; i++) {
    if (skillDiceResults[i] === 1) {
      skillDiceTiles.push('../images/white.png')
    } else if (skillDiceResults[i] === 2) {
      skillDiceTiles.push('../images/white.png')
    } else if (skillDiceResults[i] === 3) {
      skillDiceTiles.push('../images/whiteo.png')
    } else if (skillDiceResults[i] === 4) {
      skillDiceTiles.push('../images/whiteo.png')
    } else if (skillDiceResults[i] === 5) {
      skillDiceTiles.push('../images/whiteo.png')
    } else if (skillDiceResults[i] === 6) {
      skillDiceTiles.push('../images/whitest.png')
    } else if (skillDiceResults[i] === 7) {
      skillDiceTiles.push('../images/whitest.png')
    } else if (skillDiceResults[i] === 8) {
      skillDiceTiles.push('../images/whites.png')
    } else if (skillDiceResults[i] === 9) {
      skillDiceTiles.push('../images/whites.png')
    } else if (skillDiceResults[i] === 10) {
      skillDiceTiles.push('../images/whiteso.png')
    } else if (skillDiceResults[i] === 11) {
      skillDiceTiles.push('../images/whiteet.png')
    } else if (skillDiceResults[i] === 12) {
      skillDiceTiles.push('../images/whitee.png')
    }
  }
  console.log(skillDiceTiles)
  const showRingDiceHtml = showDiceTemplate({dice: ringDiceTiles})// quests: data.quests })
  $('#diceTileDisplay').html(showRingDiceHtml)
  const showSkillDiceHtml = showDiceTemplate({dice: skillDiceTiles})// quests: data.quests })
  $('#diceTileDisplay').html(showSkillDiceHtml)
}

module.exports = {
  showDiceSuccess
}
