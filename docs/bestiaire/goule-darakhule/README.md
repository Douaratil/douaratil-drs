---
title: "Goule darakhule"
type: "Mort-vivant"
size: "M"
alignment: "Neutre Mauvais"
challenge: "3"
customHP: "26"
abilityScores:
  for: 16
  dex: 17
  con: 14
  int: 14
  sag: 12
  cha: 12
ac:
  armorType: "custom"
  value: "18 (armure d'écaille)"
skills:
  - name: "discretion"
  - name: "supercherie"
movement:
  walk: 9
senses:
  darkvision: 18
conditionImmunities:
  - "charme"
  - "empoisonne"
  - "epuise"
damageTypeResistances:
  - "necrotique"
damageTypeImmunities:
  - "poison"
languages:
  - "commun"
environments:
  - Ruines souterraines

---
## Goule darakhule
&nbsp;
[![Goule darakhule](https://www.douaratil.fr/illustrations/mort-vivant/gouledarakhulem.png)](https://www.douaratil.fr/illustrations/mort-vivant/gouledarakhule.jpg)  
**<v-icon>mdi-head-sync</v-icon>Perte de santé mentale (SAM)** DD 19, réussite 5, échec 3d6+2.   
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 14        
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 15   
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Maître du déguisement**_. Un darakhul qui revêt un déguisement préparé est _avantagé_ sur les jets de sauvegarde de Charisme (Supercherie) afin de passer pour un vivant. Quand le darakhul utilise ce pouvoir, il perd sa puanteur.

_**Puanteur**_. Chaque créature commençant son tour dans un rayon de 1,50 mètre autour du darakhul doit réussir un jet de sauvegarde de Constitution DD 12, sans quoi elle est _empoisonnée_ jusqu'au début de son prochain tour. Un jet de sauvegarde réussi immunise une créature contre la puanteur du darakhul pendant 24 heures. Un darakhul qui utilise ce pouvoir ne peut pas profiter de _maître du déguisement_.

_**Sensibilité à la lumière du soleil**_. Le darakhul est _désavantagé_ sur les tests de Sagesse (Perception) basés sur la vue et sur les jets d'attaque tant que lui ou l'objet qu'il tente de voir ou d'attaquer est exposé à la lumière directe du soleil.

_**Braver le renvoi**_. Le darakhul et toutes les goules dans un rayon de 9 mètres autour de lui sont _avantagés_ sur les jets de sauvegarde contre le renvoi des morts-vivants.

## Actions
_**Attaques multiples**_. Le darakhul mord une fois, griffe une fois et fait une attaque de pic de guerre. S'il utilise un bouclier, il est limité à une attaque de griffes ou de pic de guerre, mais pas les deux.

_**Morsure**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 3d6+1 dégâts perforants. Si la cible est un humanoïde, elle doit réussir un jet de sauvegarde de Constitution DD 11, sans quoi elle contracte la [fièvre du darakhul](#fievre-du-darakhul).

_**Griffes**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 2d6+3 dégâts tranchants. Si la cible est une créature autre qu'un mort-vivant, elle doit réussir un jet de sauvegarde de Constitution DD 12, sans quoi elle est _paralysée_ pendant 1d6 rounds. Une cible _paralysée_ refait le jet de sauvegarde à la fin de chacun de ses tours et met un terme à l'effet si elle le réussit. Si un humanoïde est _paralysé_ pendant 2 rounds ou plus (s'il rate au moins 2 jets de sauvegarde), consécutifs ou non, il contracte la [fièvre du darakhul](#fievre-du-darakhul).

_**Pic de guerre**_. _Attaque d'arme au corps à corps_ : +5 pour toucher, allonge 1,50 m, une cible.  
_Touché_ : 2d6+5 dégâts perforants.

§§§ .hero
## Fièvre du Darakhul
Cette maladie très rare se transmet principalement par les morsures. Elle se manifeste en 24 heures en affaiblissant rapidement sa victime qui doit faire un jet de sauvegarde de Constitution DD 17 après chaque long repos. À chaque échec, elle subit 4d6 dégâts nécrotiques et son maximum de points de d'action est réduit du même montant. La victime ne peut pas se débarrasser de cette réduction tant qu'elle n'a pas guéri de la fièvre du darakhul. Une fois rétablie, elle doit bénéficier de [_restauration supérieure_](/grimoire/restauration-superieure/) ou d'une magie similaire. La victime guérit de la maladie si elle réussit ses jets de sauvegarde deux jours de suite. [_Restauration supérieure_](/grimoire/restauration-superieure/) soigne la maladie tandis que [_restauration inférieure_](/grimoire/restauration-inferieure/) _avantage_ la victime sur le jet de sauvegarde quotidien de Constitution.

La maladie se répand surtout chez les humains.

Si une créature atteinte de la fièvre du darakhul meurt, lancez 3d6, ajoutez le modificateur de Constitution actuel du personnage et consultez la table des ajustements pour savoir en quel mort-vivant elle se change.
### Table des ajustements
|**Jet**|**Résultat**|
|:-:|:-|
|**3-9**|Rien, la victime est juste morte|
|**10-14**|Goule|
|**15-16**|Blême|
|**17-18**|Darakhul|
§§§
