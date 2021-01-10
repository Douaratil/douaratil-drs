---
title: "Nuée de corbeaux"
isSwarm: true
swarmSize: "TP"
type: "Bête"
size: "M"
alignment: "non-alignée"
challenge: "0.25"
customHP: "11"
abilityScores:
  for: 6
  dex: 14
  con: 8
  int: 3
  sag: 12
  cha: 6
ac:
  armorType: "custom"
  value: "9"
skills:
  - name: "perception"
    isExpert: true
movement:
  walk: 3
  fly: 15
senses:
conditionImmunities:
  - "a-terre"
  - "charme"
  - "empoigne"
  - "entrave"
  - "etourdi"
  - "paralyse"
  - "petrifie"
  - "terrorise"
damageTypeResistances:
  - "contondant"
  - "perforant"
  - "tranchant"
languages:
  - ""
environments:
  - Montagnes
dungeonTypes:
  - Ruines extérieures

---
## Capacités
_**Nuée**_. La nuée peut occuper l'emplacement d'une autre créature, et vice versa. Elle peut passer par n'importe quelle ouverture suffisamment large pour un corbeau de taille TP. Elle ne peut pas récupérer de point d'action ni gagner de point d'action temporaire.

## Actions
_**Becs**_. _Attaque d'arme au corps à corps_ : +4 pour toucher, allonge 1,50 m, une créature dans l'emplacement de la nuée.  
_Touché_ : 6 dégâts perforants ou 3 dégâts perforants si la nuée a perdu au moins la moitié de ses points d'action.
