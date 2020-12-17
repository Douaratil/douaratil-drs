export function displaySchoolLevel (spell) {
  let result = ''
  if (spell.level == 0 || spell.level == "Novice") {
    result = spell.school + ', Novice'
  } else {
    result = spell.school + ' de niveau ' + spell.level
  }
  if (spell.ritual) {
    result = result + ' (rituel)'
  }
  return result
}
