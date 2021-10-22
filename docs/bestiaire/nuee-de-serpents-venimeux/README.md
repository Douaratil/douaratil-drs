---
title: "Nuée de serpents venimeux"
isSwarm: true
swarmSize: "TP"
type: "Bête"
size: "M"
alignment: "non-alignée"
challenge: "2"
customHP: "19"
abilityScores:
  for: 8
  dex: 18
  con: 11
  int: 1
  sag: 10
  cha: 3
ac:
  armorType: "custom"
  value: "14"
movement:
  walk: 9
  swim: 9
senses:
  blindsight: 3
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
  - Jungle
  - Mangrove / Marécage
dungeonTypes:
  - Caverne sous-marine

---
**Seuil de critique**: 11            
**Valeur offensive globale**: 16     
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Nuée**_. La nuée peut occuper l'emplacement d'une autre créature, et vice versa. Elle peut passer par n'importe quelle ouverture suffisamment large pour un serpent de taille TP. Elle ne peut pas récupérer de point de vie ou gagner de point de vie temporaire.

## Actions
_**Morsures**_. _Attaque d'arme au corps à corps_ : +6 pour toucher, allonge 0 m, une créature dans l'emplacement de la nuée.  
_Touché_ : 6 dégâts perforants ou 3 dégâts perforants si la nuée a perdu au moins la moitié de ses points d'action. La cible doit effectuer un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 10. Elle subit 4d6 dégâts de poison en cas de [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) raté ou la moitié de ces dégâts seulement en cas de réussite.
