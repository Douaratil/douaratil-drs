---
title: "Dabbiub"
type: "Fiélon"
subtype: "Diable"
size: "G"
alignment: "Loyal Mauvais"
challenge: "14"
customHP: "158"
abilityScores:
  for: 21
  dex: 16
  con: 23
  int: 17
  sag: 16
  cha: 18
savingThrows:
  - "dex"
  - "con"
  - "int"
  - "sag"
  - "cha"
ac:
  armorType: "custom"
  value: "22 (armure naturelle)"
skills:
  - name: "arcanes"
  - name: "discretion"
  - name: "medecine"
  - name: "perception"
  - name: "perspicacite"
  - name: "supercherie"
movement:
  walk: 12
senses:
  darkvision: 18
conditionImmunities:
  - "empoisonne"
  - "epuise"
damageTypeImmunities:
  - "poison"
languages:
  - "commun"
  - "draconique"
  - "infernal"
dungeonTypes:
  - Donjon maçonné
  - Ruines extérieures

---
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 23      
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 20   
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Incantation innée**_. La caractéristique d'incantation innée d'un Dabbiub est le Charisme (DD du jet de sauvegarde contre les sorts 17, +9 pour toucher avec les attaques de sort). Il peut lancer les sorts suivants de manière innée, sans composantes matérielles :

* **À volonté** : [_déguisement_](/grimoire/deguisement/), [_détection des pensées_](/grimoire/detection-des-pensees/), [_épargner les mourants_](/grimoire/epargner-les-mourants/), [_immobiliser un humanoïde_](/grimoire/immobiliser-un-humanoide/)
* **3/jour** : [_guérison_](/grimoire/guerison/), [_protection contre le poison_](/grimoire/protection-contre-le-poison/), _rayon empoisonné_ 18 (4d8), [_soin des blessures_](/grimoire/soin-des-blessures/) 21 (4d8 + 3)
* **1/jour** : [_doigt de mort_](/grimoire/doigt-de-mort/)

## Actions
_**Attaques multiples**_. Un Dabbiub porte quatre attaques de _doigts-aiguilles_.

_**Doigts-aiguilles**_. _Attaque d'arme au corps à corps_ : +10 pour toucher, allonge 3 m, une cible.  
_Touché_ : 5d6+5 dégâts perforants. En outre, la cible doit faire un jet de sauvegarde de Constitution DD 19 ; sur un échec, le Dabbiub lui inflige soit une _réduction de caractéristiques_, soit un _dérèglement humoral_. La cible ne peut faire ce jet de sauvegarde qu'une fois par tour, même si elle reçoit plus d'une attaque de doigts-aiguilles.

_**Réduction de caractéristique (3/jour)**_. Si la cible de l'attaque de _doigts-aiguilles_ d'un Dabbiub échoue à son jet de sauvegarde de Constitution, elle subit une réduction de 1d6 points de caractéristique (choisie par le Dabbiub) jusqu'à ce qu'elle ait terminé un repos long. Si cet effet réduit la valeur d'une de ses caractéristiques à 0, la créature sombre dans l'inconscience jusqu'à ce qu'elle ait regagné au moins 1 point.

_**Dérèglement humoral (3/jour)**_. Si la cible de l'attaque de doigts-aiguilles d'un Dabbiub échoue à son jet de sauvegarde de Constitution, elle subit l'un des effets suivants :  
* **Flux sanguin**. La cible ne peut pas être soignée, naturellement ou par magie, avant d'avoir terminé un repos long.  
* **Flux bilieux**. La cible se trouve dans l'état confus (comme si elle se trouvait sous l'effet du sort [_confusion_](/grimoire/confusion/)) pendant 3d6 rounds. La cible peut refaire le jet de sauvegarde à la fin de chacun de ses tours pour tenter de mettre fin à cet effet de manière anticipée.  
* **Flux mélancolique**. La cible est _neutralisée_ pendant 1d6 rounds et ralentie (comme si elle se trouvait sous l'effet du sort lenteur) pendant 3d6 rounds. La cible peut refaire le jet de sauvegarde à la fin de chacun de ses tours pour tenter de mettre fin à cet effet de manière anticipée.  
* **Flux flegmatique**. Si la cible réussit un jet de sauvegarde de Constitution DD 18, elle annule cet effet. Si elle échoue, elle gagne un niveau d'épuisement qui dure pendant 3d6 rounds.
