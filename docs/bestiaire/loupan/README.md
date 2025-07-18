---
title: "Loupan"
type: "Fiélon"
subtype: "Démon"
size: "G"
alignment: "Chaotique Mauvais"
challenge: "7"
customHP: "96"
abilityScores:
  for: 21
  dex: 23
  con: 20
  int: 16
  sag: 19
  cha: 18
savingThrows:
  - "dex"
  - "con"
  - "sag"
  - "cha"
ac:
  armorType: "custom"
  value: "22 (armure naturelle)"
skills:
  - name: "acrobaties"
  - name: "discretion"
  - name: "intimidation"
  - name: "perception"
    invalid: true
    value: 6
movement:
  walk: 12
  fly: 18
senses:
  blindsight: 9
  darkvision: 18
conditionImmunities:
  - "empoisonne"
damageTypeResistances:
  - "foudre"
  - "froid"
damageTypeImmunities:
  - "feu"
  - "poison"
languages:
  - "commun"
telepathy: 18

---
## Loupan
&nbsp;
[![Loupan](https://www.douaratil.fr/illustrations/fielon/loupan300.jpeg)](https://www.douaratil.fr/illustrations/fielon/loupan.jpg)   
**<v-icon>mdi-head-sync</v-icon>Perte de santé mentale (SAM)** DD 23, réussite 6, échec 3d6+3.  
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 12          
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 14   
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Incantation innée**_. La caractéristique d'incantation innée d'un Loupan est le Charisme (DD du jet de sauvegarde contre les sorts 15). Il peut lancer le sort suivant de manière innée, sans composantes matérielles :
* **1/jour** : [_invisibilité supérieure_](/grimoire/invisibilite-superieure/)

_**Arme magique**_. Les attaques d'arme d'un Loupan sont magiques.

_**Porte des ombres (4/jour)**_. Un Loupan peut voyager entre les ombres comme s'il utilisait une porte dimensionnelle. Ce transport magique s'effectue entre deux zones éclairées au moins partiellement par de la lumière faible. La porte des ombres leur permet de couvrir une distance maximum de 27 mètres.

## Action
_**Attaques multiples**_. Un démon Loupan porte trois attaques de _morsure_.

_**Morsure**_. _Attaque d'arme au corps à corps_ : +8 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 4d6+5 tranchant.

_**Rayon de vol d'ombre (Recharge 5-6)**_ Un Loupan peut émettre un rayon depuis son œil unique. Une cible qui se trouve à 18 mètres du Loupan est automatiquement touchée par ce rayon. La cible se trouve repoussée de 6 mètres en arrière et doit réussir un jet de sauvegarde de Dextérité DD 15 ou être également jetée _à terre_. L'ombre de la cible reste dans l'emplacement qu'elle occupait à l'origine et se comporte comme une ombre morte-vivante sous le contrôle du démon Loupan.

Si la créature touchée par le rayon de vol d'ombre fuit le combat, elle se trouve dépourvue d'ombre naturelle pendant 2d6 jours, qui est le temps qu'il faut à l'ombre morte-vivante pour se dissiper et que l'ombre naturelle de la créature réapparaisse. Si sa créature d'origine meurt lors de la rencontre, l'ombre morte-vivante lui dérobe son corps. Dans ce cas, l'alignement de la créature devient maléfique et elle passe sous le contrôle du Loupan. La créature regagne son ombre naturelle immédiatement après que l'ombre morte-vivante soit tuée.

Une créature ne peut se faire voler son ombre par le rayon de vol d'ombre qu'une seule fois par jour, même si elle est touchée par les rayons de deux Loupan différents. Cependant, elle est repoussée en arrière chaque fois qu'un rayon la touche.
