---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: doc,hardware

title: Le Servomoteur
subtitle: Piloter un mouvement angulaire limité
description: Cette page détaille le fonctionnement d'un servomoteur de modélisme
manufacturer:
  - name: FeeTech
    link: "https://www.feetechrc.com/6v-32kg-analog-steering-gear.html"

todo: 50
author: Adrien BRACQ
---

Un servomoteur RC (ou "servo") est un dispositif utilisé dans le modélisme (voitures, avions, bateaux, etc.) pour contrôler les mouvements précis de certaines pièces, comme la direction, les ailerons ou encore les gouvernes. C’est un composant essentiel dans les systèmes qui nécessitent des déplacements angulaires contrôlés. Le servomoteur RC combine un moteur électrique, un réducteur, un potentiomètre et un contrôleur électronique dans un seul boîtier compact.

{% include youtube.html video="igxxH9_NNl4" %}

## fonctionnement d'un servomoteur RC

Un servomoteur RC fonctionne selon le principe du retour de position. Voici les principaux éléments qui le composent et leur rôle :

- **Moteur électrique :** Il génère le mouvement qui sera transformé en rotation ou en déplacement angulaire.

- **Réducteur :** Un ensemble d'engrenages permet de réduire la vitesse du moteur tout en augmentant le couple, permettant ainsi un contrôle précis du mouvement.

- **Potentiomètre :** Cet élément mesure en permanence la position de l'axe du servomoteur. Il envoie ces informations au contrôleur pour ajuster le mouvement.

- **Contrôleur électronique :** Il reçoit un signal PWM (modulation de largeur d'impulsion) provenant du récepteur RC. Le signal PWM indique la position souhaitée de l'axe du servo. Le contrôleur ajuste ensuite la position de l'axe en fonction de cette commande.

## Types de servomoteurs RC

Il existe différents types de servomoteurs utilisés en modélisme, notamment :

- **Servomoteurs standard :** Capables de déplacer des charges légères (quelques Kg.cm) avec un angle de rotation limité, généralement de 180°.

- **Servomoteurs à rotation continue :** Modifiés pour permettre une rotation complète (360°) en continu, souvent utilisés dans les robots mobiles.

- **Micro servomoteurs :** Plus petits, utilisés dans des applications nécessitant une plus grande legereté sur des modèles réduits comme des avions ou des drones.

## Pilotage d'un servomoteur

Le servomoteur est commandé via un signal PWM. Ce signal est envoyé par le récepteur RC et se compose d’impulsions électriques d’une durée spécifique. En général :

- Durée de l'impulsion : Généralement entre 1 ms (milliseconde) et 2 ms.
- 1 ms correspond à l’extrémité gauche de la plage de mouvement.
- 2 ms correspond à l’extrémité droite.
- Une impulsion de 1.5 ms place l’axe du servomoteur au centre.

Les servos standards ont une plage de mouvement d’environ 180 degrés, bien que certains modèles offrent des plages plus larges ou plus petites.

{% include message.html title="Attention !" message="Votre servomoteur n'a peut-être pas les mêmes plages de fonctionnement. Référez vous à la [documentation technique spécifique de votre servomoteur.](https://www.feetechrc.com/6v-32kg-analog-steering-gear.html)"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

Le servomoteur RC est facilement utilisable avec des microcontrôleurs comme l'Arduino. En utilisant une bibliothèque dédiée (comme la bibliothèque Servo), il est possible de contrôler précisément la position du servomoteur via un signal PWM émis par l'Arduino. Des librairies existent également permettant de facilement piloter des servomoteurs.

{% include youtube.html video="WfrrK6lKP0U" %}

Un servomoteur RC possède trois fils principaux, chacun ayant un rôle spécifique dans son fonctionnement. Voici le schéma de câblage typique :

- **Fil de signal (généralement orange ou blanc) :** Reçoit le signal PWM (modulation de largeur d'impulsion) provenant du contrôleur ou du récepteur. Ce signal détermine la position que doit prendre le servomoteur.

- **Fil d'alimentation (rouge) :** Il est connecté à une source de tension, généralement de 5 à 6 volts. Il fournit l'énergie nécessaire au moteur et au circuit de contrôle interne du servo.

- **Fil de masse (noir ou marron) :** Connecté à la masse du circuit. Ce fil assure la référence de tension commune avec le reste du système.

## Alimentation

Les servomoteurs RC fonctionnent souvent dans une plage de tension comprise entre 4.8V et 6V. Cependant, il existe des servomoteurs qui supportent des tensions plus élevées, allant jusqu'à 7.4V, voire plus pour des modèles dits "haute tension". Il est essentiel de vérifier la spécification de votre servomoteur avant de le brancher pour éviter de l'endommager.

Les servomoteurs consomment généralement peu de courant lorsqu'ils sont à l'arrêt ou lorsqu'ils ne rencontrent pas de résistance importante. Cependant, lorsqu'un servomoteur est en pleine charge ou qu'il doit maintenir une position contre une force extérieure, sa consommation de courant peut augmenter considérablement.

Voici quelques points à prendre en compte :

- **Le courant à vide** (lorsque le servo ne fait que maintenir une position sans résistance) est relativement faible, souvent de l'ordre de quelques centaines de milliampères (mA).

- **Le courant en charge**, le courant peut facilement dépasser 1 à 2 ampères. Il est donc important de dimensionner correctement l'alimentation.

- L'alimentation doit être capable de fournir un courant suffisant pour plusieurs servos, surtout si ceux-ci sont sollicités simultanément. Une alimentation sous-dimensionnée peut entraîner une chute de tension, affectant la stabilité du servomoteur et provoquant des dysfonctionnements.
Câblage :

- Utilisez des fils de calibre approprié pour supporter les courants élevés. Des fils trop fins peuvent chauffer et provoquer une chute de tension.
Condensateurs de découplage :

- Il est recommandé d'ajouter des condensateurs sur l'alimentation pour stabiliser la tension et filtrer les variations causées par les pics de courant lorsque les servos démarrent ou changent de direction brusquement.

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="hardware"
%}