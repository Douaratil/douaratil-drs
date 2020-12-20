import {SPELLLEVELS} from '../../data/spells.js'
export function displaySchoolLevel (spell) {
  let result = ''
  if (spell.level == 0 || spell.level == "0") {
    result = spell.school + ', Novice'
  } else {result = spell.school + ', ' + SPELLLEVELS[spell.level].label}
  if (spell.ritual) {
    result = result + ' (rituel)'
  }
  return result
}
