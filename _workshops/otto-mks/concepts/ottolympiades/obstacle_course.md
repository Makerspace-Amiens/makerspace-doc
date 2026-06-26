---
layout: documentation
hide_hero: false
hero_image: otto_obstacle.png
hero_darken: true
image: otto_obstacle.png
component_toc: true
doc_header: true

title: 🚧 Course d'obstacle
subtitle: Traversez un parcours semé d'obstacles en un temps record !
description: Pilotez votre robot à distance et traversez un parcours sans faire tomber les obstacles en un minimum de temps.
author: Adrien BRACQ & Rémi LACOMBE
---

{% include message.html title="Attention" message="Cette page peut évoluer, pensez à la consulter régulièrement  
**V2.0 07/03/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}  

## Présentation  

L’épreuve **Course d’obstacle** met à l’épreuve la précision et la rapidité des pilotes. Chaque équipe doit guider son robot à travers un **champ d'obstacles** constitué de **cônes retournés**, tout en **évitant de les faire tomber**.  
Le but est de **franchir la ligne d’arrivée en un temps record**. Chaque cône tombé entraîne une **pénalité de 5 secondes** ajoutée au temps final.  


## Règlement  

{% include step-tuto.html  
greyBackground = true  
title = "Conditions et contraintes"  
content="  
- L’épreuve se joue en **mode télécommandé**.  
- Chaque équipe dispose d'autant d'essais que souhaité (dans la limite de disponibilité de la piste), seul le **meilleur temps** sera retenu.  
- Le robot doit **rester dans les limites du parcours**.  
- **Chaque cône tombé entraîne une pénalité de 5 secondes ajoutée au temps final.**  
"  
image="otto_wake.png" %}  

## Déroulement de l’épreuve  

{% include step-tuto.html  
greyBackground = true  
title = "Déroulement de l’épreuve"  
content="  
- **Placement initial** :  
  - Le robot est placé dans la zone de départ.  
- **Début du match** :  
  - L’arbitre donne le signal de départ, le robot peut commencer son essai.  
  - Il doit traverser le champ d’obstacles en évitant de faire tomber les cônes.  
- **Fin du match** :  
  - Le chronomètre s’arrête lorsque le robot **franchit la ligne d’arrivée**.  
  - Les pénalités sont ajoutées au temps total.  
"  
image="otto_obstacle_start.png" %}  

{% include step-tuto.html  
greyBackground = true  
title = "Classement"  
content="  
🏆 **L'équipe gagnante est celle ayant réalisé le meilleur temps, pénalités comprises.**  
"  
image="victory.png" %}  

## Éléments de jeu  

{% include 3d-model.html model="OTTO_OBSTACLE_SCENE.glb" poster="poster.webp" fullscreen_modal=true %}

## Autres épreuves  

{% include card_collections.html  
description="Testez votre robot sur tous les terrains !"  
type="ottolympiades" %}

