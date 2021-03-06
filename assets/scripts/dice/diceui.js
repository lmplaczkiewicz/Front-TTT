// const store = require('../store')
const showDiceTemplate = require('../templates/diceTiles.handlebars')
const showSkillDiceTemplate = require('../templates/skillDiceTiles.handlebars')
const moment = require('moment')
let ringDiceNumberToRoll
let skillDiceNumberToRoll
let ringDiceTiles = []
let skillDiceTiles = []
let ringDiceExplosionCount = 0
let skillDiceExplosionCount = 0
const rDiceExplosionElement = document.getElementById('ringDiceExplosionWrapper')
const sDiceExplosionElement = document.getElementById('skillDiceExplosionWrapper')
const rkDiceExplosionElement = document.getElementById('ringDiceKeepExplosionWrapper')
const skDiceExplosionElement = document.getElementById('skillDiceKeepExplosionWrapper')

const showDiceSuccess = function (ringDiceResults, skillDiceResults, explodeKeepsBoolean) {
  ringDiceTiles = []
  skillDiceTiles = []
  let ringDiceExplosionCount = 0
  let skillDiceExplosionCount = 0
  for (let i = 0; i < ringDiceResults.length; i++) {
    if (ringDiceResults[i] === 1) {
      ringDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/black.png')
    } else if (ringDiceResults[i] === 2) {
      ringDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blacket.png')
      ringDiceExplosionCount++
    } else if (ringDiceResults[i] === 3) {
      ringDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blacko.png')
    } else if (ringDiceResults[i] === 4) {
      ringDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blackot.png')
    } else if (ringDiceResults[i] === 5) {
      ringDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blackst.png')
    } else if (ringDiceResults[i] === 6) {
      ringDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blacks.png')
    }
  }
  for (let i = 0; i < skillDiceResults.length; i++) {
    if (skillDiceResults[i] === 1 || skillDiceResults[i] === 2) {
      skillDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/white.png')
    } else if (skillDiceResults[i] === 3 || skillDiceResults[i] === 4 || skillDiceResults[i] === 5) {
      skillDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whiteo.png')
    } else if (skillDiceResults[i] === 6 || skillDiceResults[i] === 7) {
      skillDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whitest.png')
    } else if (skillDiceResults[i] === 8 || skillDiceResults[i] === 9) {
      skillDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whites.png')
    } else if (skillDiceResults[i] === 10) {
      skillDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whiteso.png')
    } else if (skillDiceResults[i] === 11) {
      skillDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whiteet.png')
      skillDiceExplosionCount++
    } else if (skillDiceResults[i] === 12) {
      skillDiceTiles.push('https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whitee.png')
      skillDiceExplosionCount++
    }
  }
  const time = moment().format('LTS')
  const showRingDiceHtml = showDiceTemplate({dice: ringDiceTiles})
  if (ringDiceTiles.length > 0) {
    $('#currentRing').removeAttr('id')
    // $('.currentRing').removeClass('currentRing')
    $('#ringDiceTileDisplay').prepend(showRingDiceHtml)
    $('#diceTime').text(time)
    console.log(explodeKeepsBoolean)
    if (ringDiceExplosionCount > 0 && explodeKeepsBoolean === false) {
      document.getElementById('ringDiceExplosionInput').value = ringDiceExplosionCount
      showRDiceExplosionElement()
      ringDiceExplosionCount = 0
    }
  }
  const showSkillDiceHtml = showSkillDiceTemplate({dice: skillDiceTiles})
  if (skillDiceTiles.length > 0) {
    $('.currentSkill').removeAttr('id')
    $('#skillDiceTileDisplay').prepend(showSkillDiceHtml)
    $('#diceTimeSkill').text(time)
    console.log(explodeKeepsBoolean)
    if (skillDiceExplosionCount > 0 && explodeKeepsBoolean === false) {
      document.getElementById('skillDiceExplosionInput').value = skillDiceExplosionCount
      showSDiceExplosionElement()
      skillDiceExplosionCount = 0
    }
  }
}

const reRollImages = function (number, diceType, explodeKeepsBoolean) {
  let source
  if (diceType === 'Skill') {
    if (number === 1 || number === 2) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/white.png'
    } else if (number === 3 || number === 4 || number === 5) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whiteo.png'
    } else if (number === 6 || number === 7) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whitest.png'
    } else if (number === 8 || number === 9) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whites.png'
    } else if (number === 10) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whiteso.png'
    } else if (number === 11) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whiteet.png'
      skillDiceExplosionCount++
    } else if (number === 12) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/whitee.png'
      skillDiceExplosionCount++
    }
  } else {
    if (number === 1) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/black.png'
    } else if (number === 2) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blacket.png'
      ringDiceExplosionCount++
    } else if (number === 3) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blacko.png'
    } else if (number === 4) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blackot.png'
    } else if (number === 5) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blackst.png'
    } else if (number === 6) {
      source = 'https://raw.githubusercontent.com/lmplaczkiewicz/Front-TTT/master/assets/images/blacks.png'
    }
  }
  if (ringDiceExplosionCount > 0 && explodeKeepsBoolean === false) {
    showRDiceExplosionElement()
    ringDiceExplosionCount = 0
  }
  if (skillDiceExplosionCount > 0 && explodeKeepsBoolean === false) {
    showSDiceExplosionElement()
    skillDiceExplosionCount = 0
  }
  return source
}

const showRDiceExplosionElement = function () {
  rDiceExplosionElement.style.display = 'block'
}

const hideRDiceExplosionElement = function () {
  rDiceExplosionElement.style.display = 'none'
}

const showSDiceExplosionElement = function () {
  sDiceExplosionElement.style.display = 'block'
}

const hideSDiceExplosionElement = function () {
  sDiceExplosionElement.style.display = 'none'
}

const showKeepRDiceExplosionElement = function () {
  rkDiceExplosionElement.style.display = 'block'
}

const hideKeepRDiceExplosionElement = function () {
  rkDiceExplosionElement.style.display = 'none'
}

const showKeepSDiceExplosionElement = function () {
  skDiceExplosionElement.style.display = 'block'
}

const hideKeepSDiceExplosionElement = function () {
  skDiceExplosionElement.style.display = 'none'
}

module.exports = {
  showDiceSuccess,
  reRollImages,
  hideRDiceExplosionElement,
  hideSDiceExplosionElement,
  showKeepRDiceExplosionElement,
  hideKeepRDiceExplosionElement,
  showKeepSDiceExplosionElement,
  hideKeepSDiceExplosionElement
}
