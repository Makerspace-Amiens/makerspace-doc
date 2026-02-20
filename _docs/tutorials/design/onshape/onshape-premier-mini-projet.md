---
layout: documentation
image: Onshape(3).png
hide_hero: false
hero_image: opera_IrNGzaeHom.png
hero_darken: true
component_toc: true
doc_header: true

title: OnShape (3) - Mini-projet
subtitle: Réaliser un mini-projet sans tutoriel
description: Dans ce troisième tutoriel, on va créer un support de téléphone simple afin de pouvoir ensuite l'imprimer en 3D.
tags: onshape
type: doc,cao, tutorial

time: 2
difficulty: 2
compatibilities-os: win

prerequisites:
  - label: Premier tuto OnShape
    link: ""

softwares: 
  - label: Solidworks
    link: "https://www.solidworks.com/fr"

todo: 100
---

## Objectifs

Maintenant que vous connaissez quelques bases de la manipulations des logiciels de modélisation 3D, il est intéressant de concevoir un petit projet fonctionnel en autonomie. 

Pour cela, nous allons modéliser le support de téléphone ci-dessous. Sa réalisation ne sera pas guidée pas-à-pas mais nous allons vous donner quelques informations vous permettant de mener à bien ce premier mini projet.

![Alt text](opera_IrNGzaeHom.png)

{% include 3d-model.html model = "/img/3d/SupportTelephone.glb" %}

## Description générale de la conception

{% include step-tuto.html 
greyBackground = false
title="1 - Arbre de conception"
content="Vous trouverez ci-contre l'arbre de conception de la pièce finale. 

Comme vous pouvez le constater, la pièce est réalisée en trois esquisses que nous détaillerons plus loin, ainsi que 2 opérations de bossage et une opération d’enlèvement de matière.

Les opération de congés viennent finaliser la pièce. 

Une opération est nouvelle dans cette conception, c'est l'opération de création de **Coque** que nous détaillerons plus loin.
"
image="opera_cTY1jF91xq.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Bossage principal"
content="Pour créer le bossage principal, il vous suffira de créer un cercle de 60mm de diamètre.

![Alt text](opera_GV2wFjc1eE.png)

Le bossage aura également **une profondeur de 60mm**.
" 
image="opera_GbUkn74SvD.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Création des pieds"
content="Pour créer le bossage des pieds, vous allez devoir créer l'esquisse ci-dessous dans le même plan que celui du bossage principal.

![Alt text](opera_SySqeyL56v.png)

Pour cela, vous allez utiliser l'outil **Rectangle aligné** ![Alt text](opera_ODOvFWW2ex.png). N'oubliez pas l'usage des relations géométriques dans la barre d'outil supérieur.

Le bossage aura également **une profondeur de 60mm**
" 
image="opera_1JKxFQ1Lzg.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Création de l'ouverture pour le téléphone"
content="Pour créer l’enlèvement de matière pour le téléphone, vous allez devoir créer l'esquisse ci-dessous toujours dans le même plan que celui du bossage principal.

![Alt text](opera_ITbSQFXK7o.png)

Pour cela, vous allez utiliser, comme lors de la précédente opération, l'outil **Rectangle aligné**. N'oubliez pas l'usage des relations géométriques dans la barre d'outil supérieur.

Vous ferrez un enlèvement de matière **A travers tout**.
" 
image="opera_537YGdGP1D.png" %}

{% include step-tuto.html 
greyBackground = false
title="5 - Création de l'ouverture centrale"
content="Afin de créer l'ouverture centrale de la pièce, nous pourrions créer un offset du contour extérieur. Mais pour simplifier la conception, nous allons travailler avec l'outil **Coque**. Cette opération permet de creuser une pièce en laissant ouvertes les faces que vous sélectionnez et en créant des parois minces.

Pour cela, cliquez sur le bouton **Coque** ![Alt text](opera_SzeRBAdkuR.png) dans le bandeau supérieur. Puis sélectionnez les deux faces opposées de la pièce :

![Alt text](opera_ZSFLXy92Uq.png)

Indiquez une dimensions de 3mm pour l'épaisseur de la coque et valide. 

![Alt text](opera_RP8pCdUDrd.png)
" 
image="opera_V9vMHNywOx.png" %}

{% include step-tuto.html 
greyBackground = false
title="6 - Création des congés"
content="La dernière opération consiste maintenant à créer les congés sur chaque arrêtes comme sur la vue ci-dessous. Vous pouvez sélectionner toutes les arrêtes en une seule et même opération. 

Les congés auront tous un rayon de 2mm.

![Alt text](opera_UTiBKf7JSB.png)
" 
image="opera_hyDIclBLPu.png" %}
