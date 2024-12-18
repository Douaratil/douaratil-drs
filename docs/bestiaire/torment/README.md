---
title: "Torment"
type: "Fiélon"
subtype: "Diable"
size: "G"
alignment: "Loyal Mauvais"
challenge: "21"
customHP: "218"
abilityScores:
  for: 22
  dex: 20
  con: 25
  int: 19
  sag: 21
  cha: 25
savingThrows:
  - "dex"
  - "con"
  - "sag"
  - "cha"
ac:
  armorType: "custom"
  value: "22 (armure naturelle)"
skills:
  - name: "discretion"
  - name: "perception"
  - name: "perspicacite"
  - name: "supercherie"
movement:
  walk: 12
  burrow: 6
  climb: 12
  fly: 24
  hover: true
senses:
  truesight: 36
conditionImmunities:
  - "charme"
  - "empoisonne"
  - "etourdi"
  - "terrorise"
damageTypeResistances:
  - "acide"
  - "froid"
  - "c-p-t-non-argent"
damageTypeImmunities:
  - "feu"
  - "poison"
languages:
  - "céleste"
  - "commun"
  - "draconique"
  - "infernal"
telepathy: 36

---
## Torment
&nbsp;
[![Torment](https://www.douaratil.fr/illustrations/fielon/torment300.jpeg)](https://www.douaratil.fr/illustrations/fielon/torment.jpeg)  
**<v-icon>mdi-head-sync</v-icon> Perte de santé mentale (SAM)**: DD 37, réussite 7, échec 3d6+4.  
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 25        
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 23      
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Résistance légendaire (3/jour)**_. Si le Torment rate un jet de sauvegarde, il peut choisir à la place de le réussir.

_**Résistance à la magie**_. Le Torment est _avantagé_ lors de ses jets de sauvegarde contre les sorts et autres effets magiques.

_**Armes magiques**_. Les attaques d'arme du Torment sont magiques.

_**Incantation innée**_. La caractéristique d'incantation innée du Torment est le Charisme (DD du jet de sauvegarde contre les sorts 22, +14 pour toucher avec les attaques de sort). Il peut lancer les sorts suivants de manière innée, sans composantes matérielles :
* **À volonté** : [_bouffée de poison_](/grimoire/bouffee-de-poison/)
* **3/jour chacun** : [_nappe de brouillard_](/grimoire/nappe-de-brouillard/), [_nuage puant_](/grimoire/nuage-puant/)
* **1/jour chacun** : [_contagion_](/grimoire/contagion/), [_fléau d'insectes_](/grimoire/fleau-d-insectes/), [_nuage mortel_](/grimoire/nuage-mortel/)

_**Aura de peur**_. Toute créature hostile au Torment qui commence son tour dans un rayon de 6 mètres de lui doit faire un jet de sauvegarde de Sagesse DD 22, sauf si Arbedab est _neutralisé_. Sur un échec, elle est _terrorisée_ jusqu'au début de son prochain tour. Sur une réussite, elle est immunisée contre l'_aura de peur_ d'Arbedab pendant les 24 heures qui suivent.

_**Aura de virulence**_. Les créatures qui seraient normalement résistantes ou immunisées aux dégâts de poison ou à l'état _empoisonné_ perdent cette résistance ou immunité quand elles se trouvent dans un rayon de 36 mètres de Torment. Toutes les autres créatures qui se trouvent dans cette zone d'effet sont _désavantagées_ à leurs jets de sauvegarde contre les effets qui causent des dégâts de poison ou l'état _empoisonné_.

_**Prince des colonies**_. Dans un rayon de 36 mètres, le Torment peut communiquer via une transmission de sons inaudibles avec les rejetons de Torment et toutes les chauve-souris, y compris les nuées et les variantes géantes. Dans une colonie, cette portée est étendue à l'ensemble de la colonie. Il s'agit d'un mode de communication silencieux et instantané que seul Torment, ses rejetons, les chauve-souris peuvent comprendre. Toutes ces créatures sont aux ordres du Torment et ne lui feront jamais de mal.

## Action
_**Attaques multiples**_. Le Torment fait une attaque de _morsure_ et deux attaques de _griffes_.

_**Morsure**_. _Attaque d'arme au corps à corps_ : +13 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 3d6+6 dégâts perforants plus 3d6 dégâts de poison. Si la cible est une créature, elle doit réussir un jet de sauvegarde de Constitution DD 22, sans quoi elle est victime d'une malédiction appelée la pourriture du Torment. La cible maudite est _empoisonnée_, elle ne peut pas regagner de points d'action, son maximum de points d'action est réduit de 4d6 points toutes les 24 heures, et les vermines l'attaquent à vue. Si le maximum de points d'action de la cible tombe à 0 des suites de la malédiction, elle meurt, pourrie et se transforme en une nuée d'insectes choisis aléatoirement. La malédiction perdure jusqu'à ce que quelqu'un la dissipe avec [_lever une malédiction_](/grimoire/lever-une-malediction/) ou une magie similaire.

_**Griffes**_. _Attaque d'arme au corps à corps_ : +13 pour toucher, allonge 3 m, une cible.  
_Touché_ : 2d6+6 dégâts tranchants plus 3d6 dégâts de poison.

_**Souffle de venimeux (Recharge 5-6)**_. Le Torment exhale un nuage de toxique sur une ligne de 36 mètres de long sur 3 mètres de large. Chaque créature qui se trouve sur cette ligne subit 15d6 dégâts de poison, ou moitié moins si elle réussit un jet de sauvegarde de Dextérité DD 22. Toute créature qui échoue à ce jet de sauvegarde doit également faire un jet de sauvegarde de Constitution DD 22 pour éviter d'être victime de la pourriture du Torment (voir l'attaque de morsure). En outre, Torment convoque une [_nuée de chauve-souris_](/bestiaire/nuee-de-chauve-souris/) (de n'importe quel type) à l'endroit de son choix sur la ligne. La nuée persiste pendant 2 minutes, sauf si elle est détruite ou que le Torment la renvoie par une action bonus. Le Torment ne peut pas convoquer plus de cinq nuées de chauve-souris à la fois.

## Actions légendaires
Le Torment peut faire 3 actions légendaires parmi celles proposées ci-dessous. Il ne peut en faire qu'une seule à la fois et seulement à la fin du tour d'une autre créature. Au début de chacun de ses tours, le Torment récupère les actions légendaires dépensées.

_**Déplacement**_. Le Torment se déplace de la moitié de sa vitesse, en utilisant le type de déplacement de son choix.

_**Poison**_. Le Torment prend pour cible une créature située dans un rayon de 36 mètres. Si la cible n'est pas _empoisonnée_, elle doit réussir un jet de sauvegarde de Constitution DD 22 ou se trouver dans l'état _empoisonné_. Une cible _empoisonnée_ refait le jet de sauvegarde à la fin de chacun de ses tours et met un terme à l'effet si elle le réussit.

_**Sort (coûte 2 actions)**_. Le Torment lance un sort.
