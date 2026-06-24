---
layout: documentation
image: Inkscape(2).png
hide_hero: false
hero_image: IMG_20230824_161820.jpg
hero_darken: true
component_toc: true
background_color: '#efedfa'

title: Inkscape (2) - Porte-clef
subtitle: Réalisation d'un porte-clef
description: Tutoriel d'initiation à Inkscape avec la réalisation d'un porte-clef pouvant être découpé au laser.
tags: inkscape
type: doc,cao

time: 2
difficulty: 1
compatibilities-os: win;lin,mac

prerequisites:
  - label: Aucun
    link: ""

softwares: 
  - label: Inkscape
    link: "https://inkscape.org/fr/"

todo: 100
---

## Objectifs

L'objectif de ce tutoriel est de découvrir les fonctions basiques de Inkscape en réalisant un petit projet de prote-clef. Ce tutoriel traitera :

- de la manipulation de formes simples
- de la combinaison de formes
- de la vectorisation d'images noir et blanc
- du traitement des polices d'écriture avant gravure

## Conception basique

{% include step-tuto.html 
title="1 - Création des formes de base"
content="Nous allons commencer par créer les différents éléments qui constitueront votre porte clef. Commencez par tracer un rectangle, un cercle et une étoile en utilisant les outils de la barre d'outils de gauche:

- Outil **Rectangle** ![Alt text](inkscape_JcuwfMuWju.png)
- Outil **Cercle** ![Alt text](inkscape_I1p8OYXaYW.png)
- Outil **Etoile** ![Alt text](inkscape_r2sizVE4gh.png)

![Alt text](inkscape_GO1oE8jIjW.png)
" 
image="inkscape_RsNU8SGsuc.gif" %}

{% include step-tuto.html 
title="2 - Modification des couleurs"
content="Afin de visualiser au mieux nous allons modifier les couleurs des éléments. Ces couleur ne seront là que le temps de nous aider à modéliser notre forme. Une fois terminé, nous pourrons en changer si besoins.

Pour cela, nous allons utiliser la barre de couleurs rapide en dessous de la fenêtre. 

![Alt text](inkscape_StjldLb8hE.png)

- Un clic gauche modifie le fond de l'objet
- Un clic gauche + maj modifie le contour de l'objet

Modifiez les couleurs des objets comme vous le souhaitez.
" 
image="inkscape_wg7cBMuMIx.gif" %}

{% include step-tuto.html 
title="3 - Ajuster les tailles d'objets"
content="Nous allons maintenant modifier la taille des objets. Pour cela nous allons d'abord modifier la taille de la plaque principale. Pour cela cliquez sur le rectangle et modifiez ses dimensions dans la barre d'outil supérieur. Attention à bien se positionner en **mm**. La hauteur doit être de 20mm. Pour la largeur, vous pouvez commencer avec 60mm, vous pourrez modifier si besoin par la suite.

![Alt text](inkscape_X3UzjyLklL.png)

Faites de même pour le cercle qui représente le perçage pour votre anneau de porte clef en lui donnant les dimensions suivantes :

![Alt text](inkscape_rEZlsCOrYV.png)
" 
image="inkscape_OlUVYHeb9B.gif" %}

{% include step-tuto.html 
title="4 - Positionner les éléments"
content="Déplacez maintenant vos éléments comme sur l'exemple afin de construire votre porte-clef.

En cliquant deux fois **lentement** sur une forme, vous avez la possibilité de faire tourner vos éléments pour les ajuster. Essayez avec l'étoile.

![Alt text](inkscape_NlBqYm5eCe.gif)

Si vos éléments ne sont pas sur la bonne hauteur, vous pouvez les faire monter ou descendre dans l'ordre des calques avec les boutons ![Alt text](inkscape_l5frzWNfqT.png)

Enfin, vous pouvez ajuster la taille de l'arrondi de votre rectangle. Pour cela double-cliquez **rapidement** sur la forme et ajustez en utilisant les poignées rondes qui viennent d'apparaitre :

![Alt text](inkscape_HDW37LxSqv.gif)
" 
image="inkscape_gBWOoWx3PW.png" %}

{% include step-tuto.html 
title="5 - Création de votre texte"
content="On va maintenant insérer votre texte. Pour cela rien de plus facile : cliquez sur **Créer et éditer des objets textes** ![Alt text](inkscape_aWboAoL96w.png) puis cliquez sur votre espace de travail. Inscrivez votre texte. Vous pouvez modifier la police d'écriture en haut à gauche ![Alt text](inkscape_OxgfGoWefB.png).

Vous pouvez éditer la taille de votre texte comme les éléments classiques. Un conseil cependant : veillez à cocher l'option **Grader les même proportion** dans la barre d'outils supérieur ![Alt text](inkscape_slSCEECezF.png)
" 
image="inkscape_3SuxwaxUmv.gif" %}

{% include step-tuto.html 
title="6 - Adaptez la taille de votre Porte-clef"
content="Il est très probable que lors de l'insertion de votre texte, votre porte-clef soit trop grand ou trop petit. Dans ce cas, modifiez la taille de votre rectangle ainsi que la position du cercle.
" 
image="inkscape_Dfqz7fzYZr.png" %}

{% include message.html 
icon="fas fa-info-circle"
title="Sauvegarder"
message="Et si vous en profitiez pour sauvegarder votre travail avant de passer à la suite ? 😋 " 
status="is-info" %}

## Fusion des éléments

Jusqu'à maintenant nos éléments sont des formes séparées. Mais ce que nous souhaitons avoir à la fin c'est un contour de découpe et une gravure de texte. Nous allons donc voir comment faire pour fusionner nos éléments.

{% include step-tuto.html 
title="1 - Transformer votre texte en chemin"
content="Pour l'instant, votre texte est un élément que seul Inkscape peut interpréter. Afin que la découpe laser puisse graver correctement les lettres, il va falloir les transformer en chemin. Pour cela, cliquez sur votre texte, puis allez dans **Chemin > Objet en chemin**

La modification ne sera pas visible directement, mais si vous cliquez plusieurs fois sur les lettres, vous verrez que vous ne pouvez plus les éditer comme du texte mais comme un chemin complexe.

![Alt text](inkscape_FCJ0aYwExc.gif)
" 
image="inkscape_anTi3gbIMc.png" %}

{% include message.html 
icon="fas fa-info-circle"
title="Modification impossible"
message="Après cette opération vous ne pourrez plus modifier votre texte simplement. Nous vous conseillons de faire une copie de votre élément de texte à coté au cas où. " 
status="is-danger" %}

{% include step-tuto.html 
title="2 - Fusionner les chemins"
content="Nous allons maintenant fusionner les éléments afin de créer notre contour de porte-clef. Pour cela nous allons utiliser les outils disponibles dans le menu **Chemin**

![Alt text](inkscape_GdOXmXvKQa.png)

Nous allons d'abord sélectionner l'étoile et le rectangle en cliquant et en gardant pressée la touche **Maj**, puis nous allons cliquer sur l'outil **Union** ![Alt text](inkscape_ewyf2ncHvN.png).

Enfin nous allons faire de même avec la forme nouvellement créée et le cercle, mais cette fois-ci nous allons utiliser l'outil **Différence** ![Alt text](inkscape_wPfbUflhuj.png)

Nous aurons alors la forme de contour de notre porte-clef qui nous permettra de faire la découpe de ce dernier au laser.
"
image="inkscape_7YAmy55oe3.gif" %}

{% include step-tuto.html 
title="3 - Changer les couleurs"
content="Maintenant que vous avez votre forme finale, il peut être intéressant de changer la représentation de votre forme. Par exemple, il est assez convenu de mettre les formes qui vont être découpées avec un fond blanc ou transparent, et avec un contour rouge.
"
image="inkscape_9HEJT9yISA.png" %}

## Vectorisation

Nous allons maintenant rajouter une image sur notre porte-clef. Le soucis c'est qu'une image est un élément matriciel composé de pixels. Il va donc falloir transformer notre image en élément vectoriel afin de pouvoir en faire la gravure ou la découpe et de le manipuler dans Inkscape.

{% include step-tuto.html 
title="1 - Récupérer une image"
content="Dans notre exemple, nous allons utiliser l'image ci-contre pour réaliser notre porte-clef. Mais vous pouvez utiliser n'importe qu'elle image à partir du moment où celle-ci est en noir et blanc.

Copier-coller l'image ci-contre dans Inkscape et redimensionnez la en conséquence.

![Alt text](inkscape_kmtA0fsREV.png)
"
image="inkscape_TykSbLJQfq.png" %}

{% include message.html 
icon="fas fa-info-circle"
title="Images en couleurs"
message="Il est tout à fait possible de vectoriser des images en couleurs, mais le traitement est plus long et complexe et ne sera pas traité dans ce tutoriel." 
status="is-info" %}

{% include step-tuto.html 
title="2 - Vectoriser"
content="Cliquez maintenant sur votre image puis allez dans **Chemin > Vectoriser un objet Matriciel** ![Alt text](inkscape_LIGAN6ygiA.png). Un menu sur votre droite s'ouvre. Ajustez le seuil jusqu'à ce que l'image vous convienne puis cliquez sur **Appliquer** en bas du menu.

Déplacez l'objet vectoriel nouvellement créé. Vous pouvez modifier sa taille et son orientation comme un objet classique. Vous pouvez également éditer les noeuds de l'objet si vous en avez besoins et vous pouvez supprimer votre image, vous n'en aurez plus besoin.

Positionnez l'objet sur votre porte-clef.
"
image="inkscape_WVUSrmZ8un.gif" %}

## Modifications

![Alt text](inkscape_TcMWtlJmOo.png)

Et voila ! Votre porte-clef est terminé ! Mais bien évidemment, nous n'allons pas le découper comme ça ! Maintenant que vous connaissez les bases de l’utilisation du logiciel Inkscape, nous vous conseillons de reprendre les étapes précédentes et de créer votre propre forme en testant les outils disponibles.

N'oubliez pas de sauvegarder votre travail régulièrement !
