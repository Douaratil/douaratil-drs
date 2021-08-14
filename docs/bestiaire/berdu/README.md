---
title: "Berdu"
type: "Fiélon"
subtype: "Démon"
size: "G"
alignment: "Chaotique Mauvais"
challenge: "11"
customHP: "128"
abilityScores:
  for: 22
  dex: 10
  con: 20
  int: 12
  sag: 14
  cha: 19
savingThrows:
  - "for"
  - "sag"
  - "cha"
ac:
  armorType: "custom"
  value: "20 (armure naturelle)"
skills:
  - name: "custom"
    value: "Discrétion +4 (+8 en terrain boisé)"
  - name: "nature"
    invalid: true
    value: 10
  - name: "supercherie"
  - name: "survie"
movement:
  walk: 12
  burrow: 6
senses:
  darkvision: 36
conditionImmunities:
  - "empoisonne"
damageTypeResistances:
  - "acide"
  - "feu"
  - "c-p-t-non-magique"
damageTypeImmunities:
  - "foudre"
  - "poison"
languages:
  - "abyssal"
  - "commun"
telepathy: 36

---
**Seuil de critique**: 20        
**Valeur offensive globale**: 20     
## Capacités
_**Présence trompeuse**_. Un Berdu est identifié comme une fée par tous les sorts ou effets magiques qui détectent les créatures surnaturelles. Les bêtes et les plantes se sentent bien autour d'un Berdu et ne l'attaqueront pas, sauf si elles en reçoivent l'ordre ou ont été provoquées.

_**Résistance à la magie**_. Un Berdu est _avantagé_ lors de ses jets de sauvegarde contre les sorts et autres effets magiques.

_**Chemin tortueux**_. Un Berdu ne laisse pas de traces de son passage à travers un terrain naturel et ne peut donc pas être traqué à l'aide de tests de compétences ou d'autres moyens naturels. Les créatures qui voyagent avec lui sont incapables de rebrousser chemin pour revenir à leur point de départ et sont complètement perdues au bout de 1 heure de trajet. Les créatures qui ont été égarées par un Berdu sont _désavantagées_ lors de toutes leurs tentatives de repérer où elles se trouvent ou de retrouver leur chemin pendant 24 heures.

## Action
_**Attaques multiples**_. Un Berdu porte trois attaques de _coup_ et utilise une fois son pouvoir _absorber_.

_**Coup**_. _Attaque d'arme au corps à corps_ : +10 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 6 dégâts contondants et la cible est _empoignée_ (évasion DD 16).

_**Absorber**_. Un Berdu attire une créature de taille Moyenne ou inférieure qu'il a _empoignée_ dans son corps. Une créature absorbée ne se trouve plus dans l'état _empoigné_, mais elle est _aveuglée_ et _entravée_, bénéficie d'un abri total contre les attaques et autres effets provenant de l'extérieur du Berdu, et elle subit 3d6 dégâts perforants plus 8d6 dégâts de poison au début de chacun des tours du Berdu. Un Berdu ne peut contenir ainsi qu'une seule créature à la fois.

Si une créature qu'il a absorbée inflige 20 points de dégâts ou plus à un Berdu lors du même tour, ce dernier doit réussir un jet de sauvegarde de Constitution DD 17 ou rejeter la créature absorbée, qui tombe à terre dans un emplacement situé à 1,50 mètre autour du démon. Si le Berdu meurt, une créature absorbée n'est plus _entravée_ et elle peut s'extraire de son cadavre en dépensant 1,50 mètre de déplacement. Elle ressort _à terre_.
