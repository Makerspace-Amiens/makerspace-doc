---
layout: documentation
hide_hero: false
hero_image: otto_sumo.png
hero_darken: true
image: otto_sumo.png
component_toc: true
doc_header: true
type: ottolympiades

title: ⚔️ Otto Sumo
subtitle: Deux robots, un duel, un seul reste debout !
description: Poussez le robot adverse en dehors de l’arène dans un combat 100% autonome ! 

author: Adrien BRACQ & Rémi LACOMBE
---
{% include message.html title="Attention" message="Cette page peut évoluer, pensez à la consulter régulièrement  
**V1.5 30/04/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Présentation

L’épreuve **Otto Sumo** est un combat de robots autonomes où l’objectif est de faire tomber l’adversaire **hors de l’arène**. Deux robots s’affrontent sur une **plateforme circulaire** surélevée de **45 cm de diamètre**. Le premier robot à sortir de la zone de combat perd la manche. Aucun contrôle manuel n’est autorisé, les robots doivent agir en **totale autonomie**.

## Règlement

{% include step-tuto.html
greyBackground = true
title = "Conditions et contraintes"
content="
- Le robot est **autonome** aucun contrôle à distance n’est autorisé.
- **Pas de coups violents** : les robots doivent pousser, pas endommager le robot adverse.
- **Aucun élément détachable** : les robots ne doivent pas perdre de pièces pendant le combat."
image="otto_wake.png" %}

{% include step-tuto.html
greyBackground = true
title = "Déroulement de l’épreuve"
content="
- **Placement initial** :
   - Les robots sont disposés **face à face** et éteints sur un **disque surélevé de 45 cm de diamètre**.
   - Ils sont placés à **10 cm l’un de l’autre** derrière une **ligne de départ**.  
- **Début du match** :
   - Les robots sont allumés et doivent réaliser un **shiko**, rituel de début de match sumo qui consiste à lever chaque pied en l'air et à frapper le sol avec force. Si le robot effectue correctement le rituel :  
      ➤ Un **demi-point bonus** est accordé.  
   - Une **planche est placée** entre les deux robots pour bloquer leurs capteurs.


   - **L’arbitre lève la planche** pour lancer l’épreuve.
   - Les robots doivent démarrer **de manière autonome**.
- **Fin du match**
   - Chaque robot doit tenter de **pousser l’adversaire hors de l’arène**.
   - **Durée maximale** : un match ne peut excéder **3 minute**.
   - Un match peut se terminer de plusieurs manières :

   | Mode de victoire     | Description                                                                                            | Points attribués |
   |----------------------|--------------------------------------------------------------------------------------------------------|------------------|
   | **Inactivité**       | Le robot adverse ne démarre pas. Le robot effectue une action sans remplir les conditions de victoire. | 1 point          |
   | **Immobilisation**   | Le robot adverse est bloqué et reste coincé contre la bordure pendant 5 secondes                       | 2 points         |
   | **Mort-subite**      | Le robot adverse est éjecté de l’arène                                                                 | 3 points         |
   | **Égalité**          | Aucun robot ne remplit les conditions de victoire. Les deux robots ont participé sans se départager.   | 1 point chacun   |

- **Rôle de l'arbitre**
   - Vérifier la conformité des robots avant chaque match.
   - Lancer et chronométrer le match.
   - Juger des conditions de victoire.
   - Trancher en cas de litige ou situation imprévue.


"
image="otto_sumo_wall.png"
image_2="otto_sumo_fall.png"%}

{% include step-tuto.html
greyBackground = true
title = "Finale et classement"
content="
Chaque équipe se verra attribuer, de façon aléatoire et selon le nombre de participants, entre **trois et cinq matchs** :

- Les **robots marquent des points** pendant la phase de match.
- À l’issue des matchs, les **quatre équipes ayant cumulé le plus de points** accèdent aux **phases finales**.
- Les demi-finales opposent :
  - la **1ʳᵉ équipe** contre la **4ᵉ**
  - la **2ᵉ équipe** contre la **3ᵉ**
- Les **gagnants des demi-finales** s’affrontent ensuite en **finale** pour déterminer le vainqueur du tournoi.
- Si le temps le permet, une **petite finale** sera également organisée entre les équipes perdantes des demi-finales, pour déterminer la **3ᵉ place**.
"
image="victory.png" %}

## Éléments de jeu 

---

{% include_relative sumo/sumo_model.html %}

---

## Autres épreuves

{%
  include card_collections.html
  description="Testez votre robot sur tout les terrains !"
  type="ottolympiades"
%}
