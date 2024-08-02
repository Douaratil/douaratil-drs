---
title: "Foudroiecorneur"
type: "Fiélon"
subtype: "Démon"
size: "M"
alignment: "Chaotique Mauvais"
challenge: "10"
customHP: "54"
abilityScores:
  for: 20
  dex: 15
  con: 14
  int: 11
  sag: 12
  cha: 18
savingThrows:
  - "dex"
  - "con"
  - "sag"
ac:
  armorType: "custom"
  value: "16 (armure naturelle)"
skills:
  - name: "perception"
  - name: "supercherie"
  - name: "survie"
movement:
  walk: 15
senses:
  blindsight: 3
  darkvision: 36
conditionImmunities:
  - "empoisonne"
  - "etourdi"
damageTypeResistances:
  - "feu"
  - "froid"
  - "c-p-t-non-magique"
damageTypeImmunities:
  - "foudre"
  - "poison"
  - "tonnerre"
languages:
  - "abyssal"
telepathy: 36

---
## Foudroiecorneur
&nbsp;
[![Foudroiecorneur](https://www.douaratil.fr/illustrations/fielon/foudroiecorneur300.jpeg)](https://www.douaratil.fr/illustrations/fielon/foudroiecorneur.jpeg)  
**<v-icon>mdi-head-sync</v-icon>Perte de santé mentale (SAM)** DD 26, réussite 6, échec 3d6+3.   
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 14        
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 19     
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Compulsion de dénombrement**_. Si, par une action, une créature indique un groupe d'objets donnés à un foudroiecorneur, le démon est forcé de dénombrer l'ensemble des objets de ce groupe. Jusqu'à la fin de son prochain tour, le foudroiecorneur est _désavantagé_ lors de ses jets d'attaques et de ses tests de caractéristiques et il ne peut pas faire de réaction. Une fois qu'il a compté un groupe d'objets donnés, il est impossible de le contraindre à compter ces objets de nouveau.

_**Langue fourchue**_. Un foudroiecorneur est _avantagé_ lors de ses tests de Charisme (Supercherie) et les tentatives magiques de voir au travers de ses mensonges indiquent toujours qu'il dit la vérité.

_**Incantation innée**_. La caractéristique d'incantation innée d'un foudroiecorneur est le Charisme (DD du jet de sauvegarde contre les sorts 16, +8 pour toucher avec les attaques de sort). Il peut lancer les sorts suivants de manière innée, sans composantes matérielles :
* **À volonté** : [_déguisement_](/grimoire/deguisement/) (seulement des formes humanoïdes), [_nappe de brouillard_](/grimoire/nappe-de-brouillard/)
* **3/jour chacun** : [_appel de la foudre_](/grimoire/appel-de-la-foudre/), [_bourrasque_](/grimoire/bourrasque/)
* **1/jour** : [_contrôle du climat_](/grimoire/controle-du-climat/)

_**Attaque sournoise (1/tour)**_. Un foudroiecorneur inflige 3d6 dégâts supplémentaires à une cible s'il la touche avec une attaque d'arme quand il se trouve _avantagé_ lors de son jet d'attaque, ou si la cible se trouve dans un rayon de 1,50 mètre d'un allié du foudroiecorneur qui n'est pas _neutralisé_ et que le foudroiecorneur n'est pas _désavantagé_ lors de son jet d'attaque.

## Action
_**Attaques multiples**_. Un foudroiecorneur porte un _coup de corne_ et deux attaques de _griffe_.

_**Griffes**_. _Attaque d'arme au corps à corps_ : +9 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 3d6+5 dégâts tranchants.

_**Coup de corne**_. _Attaque d'arme au corps à corps_ : +9 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 4d6+5 dégâts perforants et la cible doit réussir un jet de sauvegarde de Force DD 15, sans quoi elle se retrouve _à terre_.

_**Foudroiement (Recharge 5-6)**_. Un foudroiecorneur peut faire apparaître un éclair crépitant dans le ciel, ou dans l'air s'il se trouve sous terre ou à l'intérieur, et diriger celui-ci afin qu'il frappe un point que le foudroiecorneur peut voir dans un rayon de 45 m. Toutes les créatures qui se trouvent dans un rayon de 6 m autour du point d'impact subissent 10d6 dégâts de foudre, ou moitié moins si elles réussissent un jet de sauvegarde de Dextérité DD 16. Si une créature échoue à son jet de sauvegarde, elle est _étourdie_ jusqu'au début du prochain tour du foudroiecorneur.
