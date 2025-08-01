---
title: "Vampire, Sorcier"
type: "Mort-vivant"
subtype: "métamorphe"
size: "M"
alignment: "Loyal Mauvais"
challenge: "13"
customHP: "70"
abilityScores:
  for: 18
  dex: 18
  con: 18
  int: 17
  sag: 15
  cha: 18
savingThrows:
  - "dex"
  - "sag"
  - "cha"
ac:
  armorType: "custom"
  value: "19 (armure naturelle)"
skills:
  - name: "discretion"
  - name: "perception"
movement:
  walk: 9
senses:
  darkvision: 36
damageTypeResistances:
  - "necrotique"
  - "c-p-t-non-magique"
languages:
  - "celles qu'il connaissait de son vivant"
dungeonTypes:
  - Donjon maçonné

---
## Vampire sorcier
&nbsp;
[![Vampire sorcier](https://www.douaratil.fr/illustrations/mort-vivant/vampiresorcier300.jpeg)](https://www.douaratil.fr/illustrations/mort-vivant/vampiresorcier.jpeg)  
**<v-icon>mdi-head-sync</v-icon>Perte de santé mentale (SAM)** DD 29, réussite 6, échec 3d6+3.  
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 18            
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 19      
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Faiblesses des vampires**_. Voici les faiblesses du vampire :  
* _Pieu dans le cœur_. Si une arme perforante en bois est plantée dans son cœur pendant qu'il est [_neutralisé_](/gerer-la-sante-du-personnage#neutralise) dans son refuge, il est [_paralysé_](/gerer-la-sante-du-personnage#paralyse) tant que le pieu n'est pas retiré.
* _Hypersensibilité à la lumière du soleil_. Il subit 10 dégâts radiants quand il commence son tour exposé à la lumière du soleil. Le cas échéant, il subit un [_désavantage_](/utiliser-les-caracteristiques#avantage-et-desavantage) lors des jets d'attaque et des tests de caractéristique.

_**Fuite brumeuse**_. Quand il tombe à 0 point d'action à l'extérieur de son refuge, à condition qu'il ne soit ni exposé à la lumière du soleil ni immergé dans de l'eau courante, le vampire se transforme en nuage ou en brume (comme décrit dans le trait _Métamorphe_) au lieu de tomber inconscient. Il est détruit s'il ne peut pas se transformer.  
Lorsqu'il a 0 point d'action sous forme de brume, le vampire ne peut pas reprendre sa forme de vampire et doit atteindre son refuge en 2 heures ou moins sous peine d'être détruit. Une fois dans son refuge, il peut prendre sa forme de vampire. Il est ensuite [_paralysé_](/gerer-la-sante-du-personnage/#paralyse) tant qu'il n'a pas récupéré au moins 1 point d'action. Après avoir passé 1 heure dans son refuge avec 0 point d'action, il récupère 1 point d'action.

_**Incantation innée**_. Le vampire utilise le Charisme comme caractéristique d'incantation innée (DD du jet de sauvegarde contre les sorts 17). Il peut lancer les sorts suivants de manière innée, sans composantes matérielles :
* **À volonté** : [_dominer un humanoïde_](/grimoire/dominer-un-humanoide/), [_invisibilité_](/grimoire/invisibilite/), [_pas brumeux_](/grimoire/pas-brumeux/), [_ténèbres_](/grimoire/tenebres/)
* **1/jour chacun** : [_déguisement_](/grimoire/deguisement/), [_détection des pensées_](/grimoire/detection-des-pensees/), [_immobiliser un monstre_](/grimoire/immobiliser-un-monstre/),

_**Métamorphe**_. S'il n'est pas exposé à la lumière du soleil ou immergé dans l'eau courante, le vampire peut utiliser son action pour se métamorphoser en chauve-souris de taille TP, en brume ou en nuage de taille M ou pour reprendre sa véritable forme. Sous forme de chauve-souris, le vampire ne peut pas parler, sa vitesse au sol est de 1,50 mètre et sa vitesse de vol de 9 mètres. Ses statistiques, à l'exception de sa taille et de sa vitesse, restent les mêmes. Tous les vêtements qu'il porte se transforment également, ce qui n'est pas le cas du reste de son équipement. Il reprend sa forme véritable quand il meurt.  
Sous forme de brume, le vampire ne peut plus entreprendre aucune action et ne peut ni parler ni manipuler d'objet. Il est extrêmement léger, possède une vitesse en vol de 6 mètres, peut effectuer des vols stationnaires, entrer dans l'emplacement occupé par une créature hostile et s'y arrêter. En outre, si de l'air passe au travers d'un interstice, la brume peut faire de même sans devoir s'y faufiler, mais elle ne peut pas traverser l'eau. Elle obtient un [_avantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors des tests de Force, de Dextérité et de Constitution, et elle est immunisée contre tous les dégâts non-magiques, à l'exception de ceux infligés par la lumière du soleil.

_**Pattes d'araignée**_. Le vampire peut escalader les surfaces difficiles, y compris les plafonds la tête en bas, sans qu'un test de caractéristique ne soit nécessaire.

_**Régénération**_. Le vampire récupère 20 points d'action au début de son tour s'il lui reste au moins 1 point d'action et s'il n'est ni exposé à la lumière du soleil ni immergé dans de l'eau courante. S'il subit des dégâts radiants ou des dégâts infligés par de l'eau bénite, ce trait ne fonctionne pas au début du prochain tour du vampire.

_**Résistance légendaire (3/jour)**_. Le vampire peut remplacer l'échec d'un de ses jets de sauvegarde par une réussite.

## Actions
_**Attaques multiples (forme de vampire uniquement)**_. Le vampire effectue deux attaques, dont une seule peut être une attaque de morsure.

_**Bras sanglants**_. Le sorcier vampire se sature de son propre sang, s'infligeant 20 dégâts de poison. Pendant une minute, sa Valeur de Défense passe à 20 et ses attaques à mains nues et de morsure infligent 2d6 dégâts de poison supplémentaires.

_**Appeler le sang**_. Le sorcier vampire vise une créature humanoïde située dans son champ de vision dans un rayon de 18 mètres. Elle doit être blessée (ne doit pas avoir la totalité de ses points d'action). Son sang est aspiré hors de son corps et flotte dans les airs jusqu'au vampire. Elle subit 6d6 dégâts nécrotiques. Son maximum de points d'action est réduit du même montant jusqu'à ce qu'elle termine un long repos. Si elle réussit un jet de sauvegarde de Constitution DD 17, elle évite les deux effets. Le sorcier vampire récupère un nombre de points d'action égal à la moitié des dégâts infligés. La cible meurt si cet effet réduit son maximum de points d'action à 0.

_**Frappe à mains nues (forme de vampire uniquement)**_. _Attaque d'arme au corps à corps_ : +9 pour toucher, allonge 1,50 m, une créature.  
_Touché_ : 2d6+4 dégâts contondants. Au lieu d'infliger des dégâts, le vampire peut empoigner la cible (évasion DD 18).

_**Marionnette de sang**_. Le sorcier vampire vise une créature humanoïde située dans son champ de vision dans un rayon de 9 mètres. Elle doit réussir un jet de sauvegarde de Sagesse DD 17, sans quoi elle se laisse dominer par le vampire comme si elle était la cible du sort [_dominer un humanoïde_](/grimoire/dominer-un-humanoide/). La cible réitère le jet de sauvegarde à chaque fois que le vampire ou ses compagnons font une action néfaste à son encontre. Elle met fin à l'effet si elle réussit un jet. Sinon, l'effet dure 24 heures ou jusqu'à ce que le vampire soit détruit, se trouve sur un plan d'existence différent de celui de la cible ou utilise une action bonus pour mettre un terme à l'effet. Le sorcier vampire n'a pas besoin de se concentrer pour maintenir l'effet.

_**Morsure (forme de chauve-souris ou de vampire uniquement)**_. _Attaque d'arme au corps à corps_ : +9 pour toucher, allonge 1,50 m, une créature consentante ou une créature [_neutralisée_](/gerer-la-sante-du-personnage#neutralise), [_entravée_](/gerer-la-sante-du-personnage#entrave) ou [_empoignée_](/gerer-la-sante-du-personnage#empoigne) par le vampire.  
_Touché_ : 1d6+4 dégâts perforants plus 3d6 dégâts nécrotiques. Le total maximum de points d'action de la cible est réduit d'un montant égal aux dégâts nécrotiques subis et le vampire récupère un nombre de points d'action égal à ce montant. La réduction persiste jusqu'au moment où la cible termine une période de repos long. La cible meurt si l'effet réduit à 0 son total maximum de points d'action. Un humanoïde tué de cette façon puis enterré se relève la nuit suivante sous forme de vampirien contrôlé par le vampire.

_**Rejetons des Enfers (1/jour)**_. Le sorcier vampire appelle 2d6 [diabodi](/bestiaire/diabodi/) ou 1 [ombre](/bestiaire/ombre/) par magie. Ces créatures arrivent en 1d6 rounds, se comportent en alliées du vampire, obéissent à ses ordres vocaux et restent pendant 1 heure, jusqu'à ce qu'il meurt ou jusqu'à ce qu'il les renvoie par une action bonus.

## Actions légendaires
Le vampire peut effectuer 3 actions légendaires qu'il choisit parmi celles décrites ici. Une seule action légendaire peut être choisie à la fois, et uniquement à la fin du tour d'une autre créature. Le vampire récupère au début de son tour l'utilisation des actions légendaires déjà effectuées.

_**Pas brumeux**_. Le sorcier vampire utilise _pas brumeux_.

_**Attaque à mains nues**_. Le sorcier vampire fait une attaque à mains nues.

_**Appeler le sang (coûte 2 actions)**_. Le sorcier vampire utilise _appeler le sang_.
