export function displaySchoolLevel (spell) {
  let result = ''
  if (spell.level == 0 || spell.level == "Novice") {
    result = spell.school + ', Novice'
  }
  return result

  if (spell.level == 1 || spell.level == "Disciple") {
    result = spell.school + ', Disciple'
  }
  return result

  if (spell.level == 2 || spell.level == "Apprenti") {
    result = spell.school + ', Apprenti'
  }
  return result

  if (spell.level == 3 || spell.level == "Adepte") {
    result = spell.school + ', Adepte'
  }
  return result

  if (spell.level == 4 || spell.level == "Expert") {
    result = spell.school + ', Expert'
  }
  return result

  if (spell.level == 5 || spell.level == "Maître") {
    result = spell.school + ', Maître'
  }
  return result

  if (spell.ritual) {
    result = result + ' (rituel)'
  }
  return result
}
