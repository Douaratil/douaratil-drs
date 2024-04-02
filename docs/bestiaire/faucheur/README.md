---
title: "Faucheur"
type: "Fiélon"
subtype: "Diable"
size: "G"
alignment: "Loyal Mauvais"
challenge: "11"
customHP: "122"
abilityScores:
  for: 16
  dex: 13
  con: 17
  int: 10
  sag: 11
  cha: 13
savingThrows:
  - "con"
  - "sag"
  - "cha"
ac:
  armorType: "custom"
  value: "16 (armure naturelle)"
skills:
  - name: "escamotage"
    invalid: true
    value: 8
  - name: "histoire"
    invalid: true
    value: 5
  - name: "perspicacite"
    invalid: true
    value: 10
  - name: "persuasion"
    isExpert: true
  - name: "supercherie"
    isExpert: true
movement:
  walk: 12
senses:
  darkvision: 36
conditionImmunities:
  - "empoisonne"
damageTypeResistances:
  - "froid"
  - "c-p-t-non-argent"
damageTypeImmunities:
  - "feu"
  - "poison"
languages:
  - "infernal"
telepathy: 36

---
## Faucheur
&nbsp;
[![Faucheur](https://www.douaratil.fr/illustrations/fielon/faucheur300.jpeg)](https://www.douaratil.fr/illustrations/fielon/faucheur.jpg)  
**<v-icon>mdi-head-sync</v-icon> Perte de santé mentale (SAM)**: DD 27, réussite 5, échec 3d6+2.  
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 17        
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 17     
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Vue du diable**_. Les ténèbres magiques ne gênent pas la vision dans le noir d'un Faucheur.

_**Résistance à la magie**_. Un Faucheur est _avantagé_ lors de ses jets de sauvegarde contre les sorts et autres effets magiques.

_**Inébranlable**_. Un Faucheur ne peut pas se trouver dans l'état _terrorisé_ tant qu'il peut voir une créature alliée à 9 mètres de lui.

## Action
_**Attaques multiples**_. Un Faucheur porte trois attaques de _poison_ et deux attaques de _faux_. Il peut également faire une attaque de _morsure_ contre une cible qu'il a _empoignée_.

_**Faux**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 3 m, une cible.  
_Touché_ : 4d6+3 dégâts tranchants, ou le Bodad peut à la place se saisir d'une cible de taille Moyenne ou inférieure à l'aide de ses plus petits bras vestigiaux (aucun dégât, évasion DD 13).

_**Morsure**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 1,50 m, une cible _empoignée_.  
_Touché_ : 5d6+3 dégâts perforants.

_**Poison**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 3d6+3 dégâts perforants et la cible doit réussir un jet de sauvegarde de Constitution DD 15, sans quoi elle est _empoisonnée_. Tant qu'elle est _empoisonnée_, la cible subit 3d6 dégâts de poison de conversion au début de chacun de ses tours causés par la liquéfaction de ses entrailles. Si une créature réussit son jet de sauvegarde, elle est immunisée contre le poison du Bodad pendant 24 heures. Si la créature meurt pendant qu'elle est sous l'effet du poison d'un Bodad, son cadavre éclate et il en sort un [lémure](/bestiaire/lemure/) nouvellement formé et couvert d'un liquide immonde. Ce débu est aux ordres du diable le plus haut placé qui se trouve à proximité. Le poison peut être neutralisé par [_restauration inférieure_](/grimoire/restauration-inferieure/), [_protection contre le poison_](/grimoire/protection-contre-le-poison/) ou une magie comparable.
