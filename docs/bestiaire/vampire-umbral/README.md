---
title: "Vampire umbral"
type: "Fiélon"
size: "M"
alignment: "Chaotique Mauvais"
challenge: "7"
customHP: "45"
abilityScores:
  for: 1
  dex: 18
  con: 15
  int: 14
  sag: 14
  cha: 19
savingThrows:
  - "dex"
  - "cha"
ac:
  armorType: "custom"
  value: "18 (armure naturelle)"
skills:
  - name: "discretion"
  - name: "perception"
movement:
  walk: 0
  fly: 12
  hover: true
senses:
  darkvision: 18
conditionImmunities:
  - "a-terre"
  - "empoigne"
  - "empoisonne"
  - "epuise"
  - "entrave"
  - "paralyse"
  - "petrifie"
damageTypeResistances:
  - "acide"
  - "feu"
  - "foudre"
  - "tonnerre"
  - "c-p-t-non-magique"
damageTypeImmunities:
  - "froid"
  - "necrotique"
  - "poison"
languages:
  - "commun"
  - "langue du Vide"
  - "umbral"

---
**<v-icon>mdi-head-sync</v-icon>Perte de santé mentale (SAM)** DD 23, réussite 6, échec 3d6+3.  
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 15             
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 17       
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Déplacement intangible**_. Le vampire umbral peut se déplacer au travers des autres créatures et des objets, comme s'il s'agissait d'un terrain difficile. Il subit 2d6 dégâts de force s'il termine son tour au sein d'un objet.

_**Incantation innée**_. Le vampire umbral utilise le Charisme comme caractéristique d'incantation innée (DD du jet de sauvegarde contre les sorts 15). Il peut lancer les sorts suivants de manière innée, sans composantes matérielles :
* **À volonté** : [_fléau_](/grimoire/fleau/) (sous une faible lumière ou dans les ténèbres seulement)

_**Se fondre dans les ombres**_. Quand le vampire umbral est dans une faible lumière ou dans les ténèbres, il peut utiliser _se cacher_ par une action bonus, même s'il est observé.

_**Frapper depuis les ombres**_. L'allonge de l'attaque _poigne umbrale_ du vampire augmente de 3 mètres et ses dégâts de 4d6 quand le vampire est caché aux yeux de sa cible et que les deux se trouvent dans une faible lumière ou dans les ténèbres.

_**Sensibilité à la lumière du soleil**_. Le vampire umbral est _désavantagé_ sur les jets d'attaque et de Sagesse (Perception) basés sur la vue s'il est exposé directement à la lumière du soleil.

## Actions
_**Poigne umbrale**_. _Attaque d'arme au corps à corps_ : +7 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 4d6+4 dégâts de froid et la valeur de Force de la cible diminue de 1d6. La cible meurt si cela réduit sa Force à 0, sinon la diminution persiste jusqu'à ce qu'elle termine un long ou un court repos.

Si un humanoïde non mauvais décède suite à cette attaque, une ombre se lève de son cadavre 1d6 heures plus tard.
