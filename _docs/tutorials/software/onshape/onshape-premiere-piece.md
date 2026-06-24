---
layout: documentation
image: OnShape(2).png
hide_hero: false
hero_image: OnShape(2).png
hero_darken: true
component_toc: true
doc_header: true

title: OnShape (2) - Votre première pièce
subtitle: Création de votre première pièce sous OnShape
description: Création de votre première pièce sous OnShape
tags: onshape
type: doc,cao, tutorial

time: 2
difficulty: 1
compatibilities-os: win,mac

prerequisites:
  - label: Installation de OnShape
    link: ""

softwares: 
  - label: OnShape
    link: "https://www.onshape.com/"

todo: 100
---

## Objectif :

![](2022-09-08-09-17-59.png)

L'objectif de ce tuto est de découvrir les fonctions basiques de OnShape en réalisant pas-à-pas la pièce ci-dessus. L'ensemble des fonctions utilisées ne sont pas explicitées de manière exhaustives donc n'hésitez pas à tester par vous même certaines options.

## Création de votre projet

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1"
content="En haut à gauche, cliquez sur le bouton **Créer** puis sur **Document**" 
image="2022-09-07-11-55-22.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 2"
content="Donnez un nom à votre document puis cliquez sur **OK**" 
image="2022-09-07-11-54-18.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 3"
content="Vous devriez être redirigé directement vers la page principal de votre éditeur de pièce. Vérifiez que vous pouvez naviguer correctement dans votre espace 3D avec votre souris avant de continuer." 
image="2022-09-07-11-56-38.png" %}

## Tour d'horizon de la fenêtre

![](2022-09-07-14-14-08.png)

{% include step-tuto.html 
greyBackground = true
title="Vue générale"
content="La fenêtre de conception est séparée en 4 zones :
- Zone 1 : Vue 3D/2D de la pièce 
- Zone 2 : Onglets des pièces et elements du projet
- Zone 3 : Arborescence des fonctions est pièces
- Zone 4 : Barre d'outils" 
image="2022-09-07-14-17-54.png" %}

{% include step-tuto.html 
greyBackground = false
title="1 - Vue 3D/2D"
content="La zone 1 est dédiée à la vue 3D et 2D de votre pièce. En vue 3D vous pouvez naviguer autour de votre pièce et sélectionner les elements sur lesquels interagir.
Vous avez également accès au **cube de navigation** vous permettant de gérer votre affichage et son orientation très rapidement.

![](2022-09-07-14-23-00.png)" 
image="2022-09-07-14-17-54.png.png" %}

{% include step-tuto.html 
greyBackground = true
title="2 - Onglets des pièces et elements du projet"
content="Les différentes pièces que vous créerez et ouvrirez apparaitront dans les onglets en dessous de votre fenêtre. 

![](2022-09-07-14-23-54.png)

Vous pouvez rajouter des éléments au projet en cliquant sur le bouton **+** à droite des onglets." 
image="2022-09-07-14-24-44.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Arborescence des fonctions est pièces"
content="Sur la droite, vous trouverez la zone d'affichage de l'arborescence des fonctions et des pièces. Elle détail l'ensemble des pièces de votre projet (en bas) ainsi que l'ensemble des fonctions de votre pièce en cours (en haut). Pour plus de lisibilité, vous pouvez masquer cette zone en cliquant sur le bouton ![](2022-09-07-14-30-00.png) ." 
image="2022-09-07-14-28-22.png" %}

{% include step-tuto.html 
greyBackground = true
title="4 - Barre d'outils"
content="Sur le haut de votre écran vous trouverez la barre d'outils qui vous donne accès à aux fonction vous permettant de créer et de gérer vos pièces. 

![](2022-09-07-14-31-07.png)

Cette barre d'outils peut être configurée en allant sur **Mon compte** (clic en haut à droite sur votre compte) **> Préférences**.

![](2022-09-07-14-34-07.png)" 
image="2022-09-07-14-35-17.png" %}

## Création de votre première pièce

![](2022-09-07-14-37-21.png)

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1 : créer un esquisse"
content="Allez dans la barre d'outils et cliquez sur **Esquisse** ![](2022-09-07-14-39-12.png).
Sélectionnez le plan **Top** comme plan d'esquisse (double clic sur le plan en question). Votre plan selectionné devrait s'afficher dans votre fenêtre d'esquisse :

![](2022-09-07-14-41-35.png)
" 
image="2022-09-07-14-39-39.png" %}

{% include message.html 
message="Afin de faciliter le dessin dans l'esquisse, vous pouvez cliquer droit sur le cube de navigation et cliquez sur **Afficher la normale du plan de l'esquisse**. La vue 3D va tourner afin de vous placer face au plan d'esquisse ne cours.

![](2022-09-07-14-42-09.png)
" 
status="is-info" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 2 : Créer un rectangle"
content="Allez dans la barre d'outils et cliquez sur **Rectangle par sommets** 

![](2022-09-07-14-55-06.png).

Dessinez rectangle **autour du point d'origine** comme montré dans l'image en cliquant une première fois pour définir le premier sommet puis une seconde fois pour déterminer le second sommet. **Ne pas faire de clic and pull** (cliquer-tirer)" 
image="2022-09-07-14-55-35.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 3 : Centrer votre rectangle"
content="Il existe plusieurs méthodes pour centrer votre rectangle sur l'origine de votre pièce. Lisez attentivement les deux méthodes et testez :
#### Méthode 1 : par point milieu
Le carré étant à centrer sur l'origine (un point), cliquez sur deux sommets d'extrémité du carré puis **en dernier** sur le point d'origine.

![](2022-09-07-15-02-25.png)

Cliquez ensuite sur **Milieu** dans la barre d'outils des contraintes ![](2022-09-07-15-03-03.png).

#### Méthode 2 : par symétrie
On peut également centrer le carré en utilisant une double symétrie. Cliquez sur deux sommets opposé du carré puis sur la ligne les séparant :

![](2022-09-07-15-05-24.png)

Cliquez ensuite sur **Symétrique** ![](2022-09-07-15-05-50.png).
Refaites la manipulation pour deux autres sommets.

" 
image="2022-09-07-15-07-47.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 4 : Egalisez les côtés de votre rectangle"
content="Sélectionnez deux cotés adjacents de votre carré, puis cliquez sur **Egal**.![](2022-09-07-15-09-09.png)" 
image="2022-09-07-15-08-45.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 5 : Cotez les côtés de votre carré"
content="Cliquez sur l'outil **Côte** ![](2022-09-07-15-10-50.png) puis sélectionnez un des cotés de de votre carré. Entrez la valeur **30mm** afin de figer votre coté à une dimension de 30mm.

![](2022-09-07-15-12-23.png)
" 
image="2022-09-07-15-12-34.png" %}

{% include message.html
title="ATTENTION" 
message="Notez comme votre esquisse est passée du **Bleu** au **Noir**. Cela signifie que votre esquisse est **complètement contrainte**. Il est important de **TOUJOURS** vérifier que vos esquisses sont complètements contraintes avant de sortir d'une esquisse et de continuer votre travail.

Si cela n'est pas fait, vous risquez de vous retrouver dans des situations ou votre génération de pièce future cassera si vous éditez une esquisse précédente et qu'elle n'est pas complètement contrainte." 
status="is-danger" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 6 : Valider et sortir de l'esquisse"
content="Si vous êtes satisfait de votre esquisse vous pouvez en sortir en cliquant sur le bouton **Valider** ![](2022-09-07-15-17-39.png). Vous sortez alors du mode d'esquisse et revenez en vue 3D. Vous pouvez repasser dans une vue trigonométrique ne cliquant sur un des coins du cube de navigation ![](2022-09-07-15-19-22.png)" 
image="2022-09-07-15-19-42.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 7 : Réaliser une protrusion"
content="Sélectionnez votre Esquisse précédemment créée 

![](2022-09-07-15-21-32.png) 

puis cliquez sur *Extruder* ![](2022-09-07-15-22-06.png) dans la barre d'outils. Dans le menu qui s'affiche, sélectionnez bien **Nouveau** et **Borgne**, puis changez la valeur à 10mm.

![](2022-09-07-15-24-42.png)

Pui **Valider** ![](2022-09-07-15-17-39.png) pour sortir.
" 
image="2022-09-07-15-24-50.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 8 : Créer une seconde esquisse"
content="Cliquez sur **Esquisse** ![](2022-09-07-14-39-12.png) puis double cliquez sur le plan de **droite** (right) pour le valider comme plan d'esquisse. N'oubliez pas que vous pouvez cliquez-droit sur le cube de navigation afin d'orienter votre vue (*Afficher la normale du plan d'esquisse*)" 
image="2022-09-07-15-29-15.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 9 : Croquis rapide de votre forme"
content="Réalisez le croquis rapide de la forme désirée (voir illustration) en utilisant l'outil **ligne** ![](2022-09-07-15-31-27.png) " 
image="2022-09-07-15-30-52.png" %}

{% include message.html
title="INFO" 
message="Lorsque vous réalisez une esquisse complexe, une méthode de réalisation simple et qui fonctionne dans la plupart des cas est de :
- Réaliser un croquis non contraint de votre esquisse
- Contraindre géométriquement votre pièce à l'aide des outils de contrainte
- Terminer par la cotation de l'esquisse
- Vérifier que votre esquisse est complétement contrainte
C'est la méthode que vous avez suivi pour réaliser la base de votre pièce, et c'est également la méthode que nous allons utiliser pour la seconde partie de la pièce." 
status="is-info" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 10 : Contraignez l’esquisse dimensionnellement"
content="A l'aide de l'outil **Côte** ![](2022-09-07-15-38-27.png), cotez comme indiqué l'esquisse précédemment créée. Vérifiez que votre esquisse est complétement contrainte, puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir." 
image="2022-09-07-15-40-51.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 11 : Extrusion par révolution"
content="Cliquez sur l'outil **Pivoter** ![](2022-09-07-15-43-05.png) puis sélectionnez votre esquisse précédemment réalisée comme **Faces et zones d'esquisse à balayer**. Cliquez ensuite sur  **Axe de révolution** ![](2022-09-07-15-46-49.png) et sélectionnez l'arrête de l'esquisse autour de laquelle nous allons effectuer notre révolution. Vérifiez bien que l'onglet **Ajouter** est actif.

![](2022-09-07-15-48-06.png)

Puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir." 
image="2022-09-07-15-48-40.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 12 : Esquisse du perçage"
content="Créez une **esquisse** dans le plan du dessus (Top) et reproduisez l'esquisse ci-contre en utilisant l'outil **Cercle à partir du centre** ![](2022-09-08-08-49-03.png). Contraignez les éléments comme vu précédemment, puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir." 
image="2022-09-07-16-23-34.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 13 : Enlèvement de matière"
content="Sélectionnez votre nouvelle esquisse réalisée précédemment, puis cliquez sur **Extruder** ![](2022-09-08-08-55-29.png). Dansl a fenêtre qui s'affiche, sélectionnez l'onglet **Retirer** ![](2022-09-08-08-56-08.png), puis dans le **Type d'extrémité**, selectionnez **A travers tous** ![](2022-09-08-08-57-06.png).
Si le sens d'enlèvement de matière n'est pas le bon, vous pouvez l'inverser en utilisant le bouton **Direction opposée** ![](2022-09-08-08-59-20.png). Puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir.

![](2022-09-08-08-57-47.png)![](2022-09-08-08-59-46.png)
" 
image="2022-09-08-08-59-46.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 14 : Répétition circulaire"
content="Cliquez sur le menu déroulant à coté de **Répétition linéaire** et sélectionnez **Répétition circulaire**.

![](2022-09-08-09-02-36.png)

Dans le Menu déroulant **Répétition de pièce**, sélectionnez **Répétition de fonction**. En effet, ce que nous allons répéter circulairement va être la fonction d'enlèvement de matière réalisée précédemment pour notre perçage.

![](2022-09-08-09-03-35.png)

Dans **Fonctions à répéter**, sélectionnez votre extrusion précédente (le perçage) et dans **Axe de répétition**, sélectionnez une des surface cylindrique au centre de la pièce réalisée précédemment à l'aide l'outil de révolution.

![](2022-09-08-09-06-42.png)

Positionnez les compteur d'instances à 6, puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir.

![](2022-09-08-09-08-24.png)" 
image="2022-09-08-09-08-52.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 15 : Chanfreins et congés"
content="Cliquez sur l'outil **Chanfreins** ![](2022-09-08-09-13-56.png) puis dans **Entités à chanfreiner** sélectionnez les arrêtes que vous souhaitez chanfreiner.

![](2022-09-08-09-15-08.png)

Donnez une distance de 3mm à vos chanfreins, puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir.

![](2022-09-08-09-16-11.png)

Vous pouvez faire de même avec l'outil **Congé** ![](2022-09-08-09-16-45.png) et en sélectionnant l'arrête de base du cylindre.

![](2022-09-08-09-17-37.png)
" 
image="2022-09-08-09-17-59.png" %}

## Modification de votre pièce

Les outils de CAO sont des outils, par essence, paramétriques. C'est à dire qu'ils vous permettent  de faire des modifications dans vos pièces en remontant dans votre arbre de construction. Ainsi, cela vous permet de corriger ou de rajouter des elements à votre pièce en remontant votre arbre et sans avoir à recommencer l'ensemble de votre conception.

Par exemple, dans notre cas, nous allons effectuer plusieurs modifications :

{% include step-tuto.html 
greyBackground = true
title="MODIF 1 : Dimension de la base"
content="Dans cette première modification, nous allons changer la taille de l'esquisse, puis nous modifierons la hauteur de la base.

Double cliquez sur votre première esquisse (celle de votre base). Vous allez revenir en mode **Edition d'esquisse** de votre base. Modifiez la dimension de votre coté de carré en la passant à **40mm** ![](2022-09-08-09-24-28.png), puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir.

Pour modifier votre hauteur de base, double cliquez sur l'extrusion de votre base dans l'arbre de construction, et modifiez la hauteur à 5mm, puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir.

![](2022-09-08-09-25-53.png)
" 
image="2022-09-08-09-26-25.png" %}

{% include step-tuto.html 
greyBackground = false

title="MODIF 2 : Dimension des perçages"
content="Double cliquez sur l'esquisse du perçage pour rentrer en mode édition, et modifiez le diamètre du cercle à 4mm et l'écartement par rapport au centre à 16mm, puis **Valider** ![](2022-09-07-15-17-39.png) pour sortir.

![](2022-09-08-09-29-22.png)
" 
image="2022-09-08-09-29-42.png" %}

{% include step-tuto.html 
greyBackground = true

title="MODIF 3 : Nombre des perçages"
content="Double cliquez sur la fonction de répétition circulaire, puis modifiez le **Compteur d'instances** à 4 instances. Enfin, **Valider** ![](2022-09-07-15-17-39.png) pour sortir.

![](2022-09-08-11-17-43.png)
" 
image="2022-09-08-11-18-09.png" %}
