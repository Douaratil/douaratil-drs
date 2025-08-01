---
title: "Spectre"
type: "Mort-vivant"
size: "M"
alignment: "Chaotique Mauvais"
challenge: "1"
customHP: "14"
abilityScores:
  for: 1
  dex: 14
  con: 11
  int: 10
  sag: 10
  cha: 11
ac:
  armorType: "custom"
  value: "12"
movement:
  walk: 0
  fly: 15
  hover: true
senses:
  darkvision: 18
conditionImmunities:
  - "a-terre"
  - "charme"
  - "empoigne"
  - "empoisonne"
  - "entrave"
  - "epuise"
  - "inconscient"
  - "paralyse"
  - "petrifie"
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
  - "comprend toutes les langues qu'il connaissait de son vivant mais ne peut pas parler"
dungeonTypes:
  - Ruines extérieures
---
## Spectre
&nbsp;
[![Spectre](https://www.douaratil.fr/illustrations/mort-vivant/spectre300.jpeg)](https://www.douaratil.fr/illustrations/mort-vivant/spectre.jpeg)  
**<v-icon>mdi-head-sync</v-icon>Perte de santé mentale (SAM)** DD 17, réussite 4, échec 3d6+1.  
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 11            
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 14   
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Déplacement intangible**_. Le spectre peut traverser créatures et objets en les considérant comme un terrain difficile. Il subit 2d6 dégâts de force s'il termine son tour à l'intérieur d'un objet.

_**Sensibilité à la lumière du soleil**_. Le spectre subit un [_désavantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors des jets d'attaque et des tests de Sagesse (Perception) basés sur la vue lorsqu'il est exposé à la lumière du soleil.

## Actions
_**Absorption de vie**_. _Attaque d'arme au corps à corps_ : +4 pour toucher, allonge 1,50 m, une créature.  
_Touché_ : 3d6 dégâts nécrotiques. La cible doit réussir un [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) de Constitution DD 10 pour ne pas voir son total maximum de points d'action réduit d'un montant égal aux dégâts subis. Cette réduction persiste jusqu'au moment où la créature termine une période de [_repos long_](/gerer-la-sante-du-personnage/#repos-long). La cible meurt si cet effet réduit à 0 son total maximum de points d'action.
