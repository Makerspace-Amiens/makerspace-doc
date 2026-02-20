---
layout: documentation
image: Inkscape(3).png
hide_hero: false
hero_image: IMG_20230825_155832-EDIT.jpg
hero_darken: true
component_toc: true
background_color: '#efedfa'

title: Inkscape (3) - Marque-Page
subtitle: Réalisation d'un marque-page
description: Tutoriel d'initiation à Inkscape avec la réalisation d'un marque-page pouvant être découpé au laser.
tags: inkscape
type: doc,cao

time: 2
difficulty: 2
compatibilities-os: win;lin,mac

prerequisites:
  - label: Première tuto - Porte-clef
    link: "../inkscape-premiere-piece"

softwares: 
  - label: Inkscape
    link: "https://inkscape.org/fr/"

todo: 100
---

{% include message.html 
icon="fas fa-info-circle"
message="Ce tutoriel fait suite à celui concernant le porte-clef. Un certains nombres d'informations et d'étapes vues dans le précédent tutoriel ne seront donc pas redonnées dans celui-ci." 
status="is-warning" %}

{% include step-tuto.html 
title="1 - Création des formes de base"
content="Nous allons commencer par créer les différents éléments qui constitueront votre marque-page. Commencez par tracer deux rectangles et adaptez les arrondis. 

Le grand rectangle formera le contour de votre marque-page et il aura une dimension de 35 x 170 mm

Le second rectangle aura pour fonction d'outil pour les bordures de votre marque-page. Il aura une dimension de 25 x 160 mm. Laissez le de coté pour l'instant, nous l'utiliserons par la suite.
" 
image="inkscape_KBFCOFms7L.png" %}

{% include step-tuto.html 
title="2 - Importation des images"
content="Pour créer notre pattern, nous allons utiliser des images en noir en blanc. Vous pouvez trouver des formes de ce type sur le site [The Noun Project](https://thenounproject.com). 

Dans notre exemple, nous utiliserons des [formes de feuilles d'une galerie](https://thenounproject.com/browse/collection-icon/leafs-glyph-icons-56482/?p=1), mais vous pouvez bien évidemment choisir vos propres motifs. Il faut cependant en avoir au moins 4 avec des différences suffisantes afin de faire un patern intéressant.
" 
image="inkscape_K5GRdsfVGF.png" %}

{% include step-tuto.html 
title="3 - Vectorisation des images"
content="Pour le moment, vos images sont dans un format matriciel. Il va falloir maintenant transformer ces images en vecteurs nous permettant par la suite de travailler avec les outils de modification de vecteur de Inkscape. Pour cela, utilisez comme dans le tutoriel précédent l'outil **Vectoriser un objet matriciel** dans **Chemin**.

Vectorisez l'ensemble des images afin de récupérer uniquement les formes vectorielles. Vous pouvez ensuite supprimer les images, nous n'en aurons plus besoins par la suite.
" 
image="inkscape_dUQlTht6Az.png" %}

{% include step-tuto.html 
title="4 - Positionnement et dimensions"
content="Rassemblez vos formes et ajustez les dimensions afin qu'elles puissent au moins passer dans la largeur de votre marque-page. Nous allons nous en servir par la suite comme modèle pour l'outil **Pulvériser des clones**
" 
image="inkscape_NVAblHOHfB.png" %}

{% include step-tuto.html 
title="5 - Pulvériser des clones"
content="Nous allons maintenant utiliser l'outil **Pulvériser des clones** afin de dupliquer de manière plus *organique* nos formes. Pour cela, sélectionnez vos formes puis cliquez sur l'outil dans la barre de menu à droite ![Alt text](inkscape_U0zgw63A6v.png).

Ajustez les paramètres selon vos besoins et le rendu que vous souhaitez obtenir. Pour essai, je vous indique si dessous les paramètres choisis pour notre exemple (clic droit, ouvrir dans un nouvel onglet) :

![Alt text](inkscape_5RiRWtjRWe.png)
" 
image="inkscape_xHxt41ypr8.gif" %}

{% include step-tuto.html 
title="6 - Corriger les positions"
content="Après la pulvérisation, il est fort probable que plusieurs formes se superposent. Vous pourriez ajuster à la main, mais Inkscape possède un outils permettant de corriger cela et de vous faire gagner un peu de temps.

Dans **Objet**, aller dans l'outil **Aligner et distribuer**. Puis sélectionnez vos formes générées et utilisez plusieurs fois l'outil **Éparpiller en tentant d'uniformiser** ![Alt text](inkscape_XOaJy3wcyX.png).

Une fois que le résultat est proche de ce que vous souhaitez, terminez les modifications plus fines manuellement et supprimez les formes à l’extérieur du  rectangle.
" 
image="inkscape_EQVBrnYtTj.gif" %}

{% include step-tuto.html 
title="7 - Fusion des formes"
content="Maintenant que vous avez vos formes, vous allez passer par l'outil **Chemin > Union** afin d'unifier l'ensemble des formes. Une fois ceci fait, Sélectionnez le rectangle vert, puis le rectangle bleu et dans l'outil **Aligner et distribuer**, sélectionnez **Relativement à : Premier sélectionné**  puis cliquez sur l’icône de centrage horizontal et vertical ![Alt text](inkscape_GWltfUtA5W.png)![Alt text](inkscape_z1hfqERlQT.png)

Enfin, sélectionnez vos formes ainsi que le rectangle bleu puis choisissez le mode de fusion **Intersection** ![Alt text](inkscape_yJPAUnjdcK.png)
" 
image="inkscape_PPfHaKPesG.gif" %}

{% include step-tuto.html 
title="8 - Dernier ajout"
content="Vous avez quasiment terminé ce mini-projet. Vous pouvez maintenant ajouter une forme de votre choix sur le dessus et modifier les couleurs de traits. Cela n’influera pas sur la découpe mais vous permettra d'avoir un meilleur rendu visuel de votre projet. Vous pouvez par exemple faire les choix suivants :

- Contour de découpe en rouge
- Contour de gravure en noir
- Intérieur gravé en noir
" 
image="inkscape_cU6LjL4pLv.png" %}

## Découpe laser

Il ne vous reste plus qu'à enregistrer votre fichier afin de pouvoir par la suite le faire découper sur la laser du MakerSpace

![Alt text](inkscape_uaYsnljAHb.png)