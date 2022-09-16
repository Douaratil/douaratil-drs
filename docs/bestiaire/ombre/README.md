---
title: "Ombre"
type: "Mort-vivant"
size: "M"
alignment: "Chaotique Mauvais"
challenge: "0.5"
customHP: "15"
abilityScores:
  for: 6
  dex: 14
  con: 13
  int: 6
  sag: 10
  cha: 8
ac:
  armorType: "custom"
  value: "12"
skills:
  - name: "discretion"
customSkills: "Discrétion +4 (+6 dans une zone faiblement éclairée ou dans l'obscurité totale)"
movement:
  walk: 12
senses:
  darkvision: 18
conditionImmunities:
  - "a-terre"
  - "empoigne"
  - "empoisonne"
  - "entrave"
  - "epuise"
  - "paralyse"
  - "petrifie"
  - "terrorise"
damageTypeVulnerabilities:
  - "radiant"
damageTypeResistances:
  - "acide"
  - "feu"
  - "foudre"
  - "froid"
  - "c-p-t-non-magique"
damageTypeImmunities:
  - "necrotique"
  - "poison"
languages:
  - "—"
dungeonTypes:
  - Donjon maçonné
  - Ruines extérieures
  - Ruines souterraines

---
## Ombre
&nbsp;
[![Ombre](https://www.douaratil.fr/illustrations/mort-vivant/ombrem.png)](https://www.douaratil.fr/illustrations/mort-vivant/ombre.jpg)  
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 13            
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 14     
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Affaiblie par la lumière du soleil**_. L'ombre subit un [_désavantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors des jets d'attaque, des [tests de caractéristique](/utiliser-les-caracteristiques/#tests-de-caracteristique) et des jets de sauvegarde lorsqu'elle est exposée à la lumière du soleil.

_**Discrétion dans les ombres**_. Tant qu'elle se trouve dans une zone faiblement éclairée ou plongée dans l'obscurité totale, l'ombre peut effectuer l'action [_se cacher_](/combattre/#se-cacher) par une action bonus.

_**Informe**_. L'ombre peut traverser sans devoir se faufiler un interstice d'une largeur au moins égale à 2 centimètres.

## Actions
_**Ponction de force**_. _Attaque d'arme au corps à corps_ : +4 pour toucher, allonge 1,50 m, une créature.  
_Touché_ : 2d6+2 dégâts nécrotiques et la valeur de Force de la cible est réduite de 1d6 points. La cible meurt si cet effet réduit sa valeur de Force à 0. Sinon, la réduction persiste jusqu'à la fin d'une période de repos long ou court.  
Si un humanoïde non-mauvais meurt à cause de cette attaque, une nouvelle ombre surgit de son cadavre après 1d4 heures.
