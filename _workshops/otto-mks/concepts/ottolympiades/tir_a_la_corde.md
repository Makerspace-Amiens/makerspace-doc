---

layout: documentation
hide_hero: false
hero_image: otto_pull.png
hero_darken: true
image: otto_pull.png
component_toc: true
doc_header: true

title: 💪 Tir à la corde
subtitle: Deux équipes de 3 robots s'affrontent pour tirer les adversaires de leur côté !
description: En télécommandé, deux équipes de robots tirent sur une corde pour faire passer le marqueur rouge de leur côté de la ligne.
author: Adrien BRACQ & Rémi LACOMBE

---

{% include message.html title="Attention" message="Cette page peut évoluer, pensez à la consulter régulièrement  
**V1.3 16/05/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Présentation

L'épreuve **Tir à la corde** met en compétition deux équipes de trois robots reliés par des section de corde, qui doivent exercer une traction pour amener un marqueur rouge de leur côté de la ligne centrale. L'épreuve se déroule en **mode télécommandé**, demandant réflexion et coordination pour remporter la victoire.

## Règlement

Cette épreuve se joue en équipes de 3 robots qui seront à composer avant les ottolympiades.

{% include step-tuto.html
greyBackground = true
title = "Conditions et contraintes"
content="

- Les robots d'une équipe sont tout trois reliés par des **éléments** de 8 cm attachée à une **boucle en velcro** placé autour du corps de chaque robot.
- De l'autre côté, se trouvent trois autres **anneaux élastiques** destinés aux robots adverses.
- L'épreuve se joue en mode télécommandé.
  "
  image="otto_pull_linked.png" %}

{% include step-tuto.html
greyBackground = true
title = "Déroulement de l’épreuve"
content="

- **Placement initial** :
  - Le premier robot se positionne derrière la ligne de départ, les deux autres robot sont positionés derrière, cordes tendues.
  - Le placement des élastiques sur le corps des robots est vérifié par l'arbitre
- **Début du match** :
  - L'épreuve se joue en **mode télécommandé**.
  - Le match débute lorsque l'arbitre donne les signal de départ.
- **Fin du match** :
  - Le match se termine dès qu'une équipe parvient à faire glisser le **marqueur rouge**, situé au milieu de la corde, de son côté de la **ligne centrale**.
    "
    image="otto_pull_chain.png"
    image_2="otto_pull_chain_win.png"%}

{% include step-tuto.html
greyBackground = true
title = "Finale et classement"
content="
Cette épreuve est avant tout **amicale** : le but est d’expérimenter des stratégies collectives entre robots !

Les participants peuvent s’affronter **autant de fois qu’ils le souhaitent**, en formant des **équipes de trois robots selon leurs envies.**" image="victory.png" %}

## Éléments de jeu

{% include 3d-model.html model="OTTO_PULL_TRACK.glb" poster="poster.webp" fullscreen_modal=true %}

## Autres épreuves

{%
  include card_collections.html
  description="Testez votre robot sur tout les terrains !"
  type="ottolympiades"
%}
