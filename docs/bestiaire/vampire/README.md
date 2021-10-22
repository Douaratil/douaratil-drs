---
title: "Vampire"
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
**<v-icon>mdi-skull-crossbones</v-icon> Seuil de critique**: 18           
**<v-icon>mdi-shield</v-icon>Valeur offensive globale**: 19   
## <v-icon>mdi-weight-lifter</v-icon> Capacités
_**Faiblesses des vampires**_. Voici les faiblesses du vampire :  
* _Défense d'entrer_. Il ne peut pas entrer dans une habitation sans y avoir été invité par l'un de ses occupants.  
* _Blessé par l'eau courante_. Il subit 20 dégâts d'acide s'il termine son tour dans de l'eau courante.
* _Pieu dans le cœur_. Si une arme perforante en bois est plantée dans son cœur pendant qu'il est [_neutralisé_](/gerer-la-sante-du-personnage/#neutralise) dans son refuge, il est [_paralysé_](/gerer-la-sante-du-personnage/#paralyse) tant que le pieu n'est pas retiré.
* _Hypersensibilité à la lumière du soleil_. Il subit 20 dégâts radiants quand il commence son tour exposé à la lumière du soleil. Le cas échéant, il subit un [_désavantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors des jets d'attaque et des [tests de caractéristique](/utiliser-les-caracteristiques/#tests-de-caracteristique).

_**Fuite brumeuse**_. Quand il tombe à 0 point d'action à l'extérieur de son refuge, à condition qu'il ne soit ni exposé à la lumière du soleil ni immergé dans de l'eau courante, le vampire se transforme en nuage ou en brume (comme décrit dans le trait _Métamorphe_) au lieu de tomber inconscient. Il est détruit s'il ne peut pas se transformer.  
Lorsqu'il a 0 point d'action sous forme de brume, le vampire ne peut pas reprendre sa forme de vampire et doit atteindre son refuge en 2 heures ou moins sous peine d'être détruit. Une fois dans son refuge, il peut prendre sa forme de vampire. Il est ensuite [_paralysé_](/gerer-la-sante-du-personnage/#paralyse) tant qu'il n'a pas récupéré au moins 1 point d'action. Après avoir passé 1 heure dans son refuge avec 0 point d'action, il récupère 1 point d'action.

_**Métamorphe**_. S'il n'est pas exposé à la lumière du soleil ou immergé dans l'eau courante, le vampire peut utiliser son action pour se métamorphoser en chauve-souris de taille TP, en brume ou en nuage de taille M ou pour reprendre sa véritable forme. Sous forme de chauve-souris, le vampire ne peut pas parler, sa vitesse au sol est de 1,50 mètre et sa vitesse de vol de 9 mètres. Ses statistiques, à l'exception de sa taille et de sa vitesse, restent les mêmes. Tous les vêtements qu'il porte se transforment également, ce qui n'est pas le cas du reste de son équipement. Il reprend sa forme véritable quand il meurt.  
Sous forme de brume, le vampire ne peut plus entreprendre aucune action et ne peut ni parler ni manipuler d'objet. Il est extrêmement léger, possède une vitesse en vol de 6 mètres, peut effectuer des vols stationnaires, entrer dans l'emplacement occupé par une créature hostile et s'y arrêter. En outre, si de l'air passe au travers d'un interstice, la brume peut faire de même sans devoir s'y faufiler, mais elle ne peut pas traverser l'eau. Elle obtient un [_avantage_](/utiliser-les-caracteristiques/#avantage-et-desavantage) lors des tests de Force, de Dextérité et de Constitution, et elle est immunisée contre tous les dégâts non-magiques, à l'exception de ceux infligés par la lumière du soleil.

_**Pattes d'araignée**_. Le vampire peut escalader les surfaces difficiles, y compris les plafonds la tête en bas, sans qu'un [test de caractéristique](/utiliser-les-caracteristiques/#tests-de-caracteristique) ne soit nécessaire.

_**Régénération**_. Le vampire récupère 20 points d'action au début de son tour s'il lui reste au moins 1 point d'action et s'il n'est ni exposé à la lumière du soleil ni immergé dans de l'eau courante. S'il subit des dégâts radiants ou des dégâts infligés par de l'eau bénite, ce trait ne fonctionne pas au début du prochain tour du vampire.

_**Résistance légendaire (3/jour)**_. Le vampire peut remplacer l'échec d'un de ses jets de sauvegarde par une réussite.

## Actions
_**Attaques multiples (forme de vampire uniquement)**_. Le vampire effectue deux attaques, dont une seule peut être une attaque de morsure.

_**Charme**_. Le vampire cible un humanoïde situé à 9 mètres ou moins de lui dans son champ de vision. Si elle peut voir le vampire, la cible doit réussir un jet de Sagesse DD 17 contre cette magie pour ne pas être [_charmée_](/gerer-la-sante-du-personnage/#charme) par le vampire. La cible [_charmée_](/gerer-la-sante-du-personnage/#charme) considère le vampire comme un ami de confiance qu'il faut écouter et protéger. Elle n'est pas sous le contrôle du vampire, mais elle envisage ses requêtes sous le meilleur angle possible et fait office de cible consentante si le vampire souhaite effectuer une attaque de morsure contre elle.  
Chaque fois que le vampire ou ses compagnons font quoi que ce soit de nocif envers la cible, celle-ci peut retenter le [jet de sauvegarde](/utiliser-les-caracteristiques/#jets-de-sauvegarde) et mettre fin à l'effet dont elle est victime en cas de réussite. Sinon, l'effet dure 24 heures. L'effet peut prendre fin avant si le vampire est détruit, s'il se trouve sur un plan d'existence différent de celui de la cible ou s'il effectue une action bonus pour mettre fin à cet effet.

_**Frappe à mains nues (forme de vampire uniquement)**_. _Attaque d'arme au corps à corps_ : +9 pour toucher, allonge 1,50 m, une créature.  
_Touché_ : 3 dégâts contondants. Au lieu d'infliger des dégâts, le vampire peut empoigner la cible (évasion DD 18).

_**Morsure (forme de chauve-souris ou de vampire uniquement)**_. _Attaque d'arme au corps à corps_ : +9 pour toucher, allonge 1,50 m, une créature consentante ou une créature [_neutralisée_](/gerer-la-sante-du-personnage/#neutralise), [_entravée_](/gerer-la-sante-du-personnage/#entrave) ou [_empoignée_](/gerer-la-sante-du-personnage/#empoigne) par le vampire.  
_Touché_ : 3 dégâts perforants plus 3d6 dégâts nécrotiques. Le total maximum de points d'action de la cible est réduit d'un montant égal aux dégâts nécrotiques subis et le vampire récupère un nombre de points d'action égal à ce montant. La réduction persiste jusqu'au moment où la cible termine une période de repos long. La cible meurt si l'effet réduit à 0 son total maximum de points d'action. Un humanoïde tué de cette façon puis enterré se relève la nuit suivante sous forme de vampirien contrôlé par le vampire.

_**Rejetons des ténèbres (1/jour)**_. Le vampire rameute 2d6 nuées de chauve-souris ou de rats, à condition que le soleil soit couché. En plein air, le vampire peut appeler 3d6 loups à la place. Les créatures rameutées arrivent au bout de 1d6 rounds, se comportent comme des alliés du vampire et obéissent à ses ordres prononcés à voix haute. Les animaux restent pendant 1 heure ou avant si le vampire est détruit ou s'il les révoque par une action bonus.

## Actions légendaires
Le vampire peut effectuer 3 actions légendaires qu'il choisit parmi celles décrites ici. Une seule action légendaire peut être choisie à la fois, et uniquement à la fin du tour d'une autre créature. Le vampire récupère au début de son tour l'utilisation des actions légendaires déjà effectuées.

_**Déplacement**_. Le vampire se déplace sans provoquer d'attaque d'opportunité d'une distance maximale égale à sa vitesse.

_**Frappe à mains nues**_. Le vampire effectue une frappe à mains nues.

_**Morsure (coûte 2 actions)**_. Le vampire effectue une attaque de morsure.
