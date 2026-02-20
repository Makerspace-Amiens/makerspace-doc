---
layout: documentation
image: FreeCad(2).png
hide_hero: false
hero_image: FreeCad(2).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: FreeCAD (2) - Votre première pièce
subtitle: Création de votre première pièce sous FreeDAC
description: Création de votre première pièce sous FreeDAC
tags: freecad
type: doc,cao

time: 2
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: Installation FreeCAD
    link: ""

softwares: 
  - label: FreeCAD
    link: "https://www.freecad.org"

todo: 100
---

## Objectif :

![](2022-09-09-16-28-55.png)

L'objectif de ce tuto est de découvrir les fonctions basiques de FreeCAD en réalisant pas-à-pas la pièce ci-dessus. L'ensemble des fonctions utilisées ne sont pas explicitées de manière exhaustives donc n'hésitez pas à tester par vous même certaines options.

## Création de votre projet

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1"
content="Au lancement de FreeCAD et sur la Page de démarrage, cliquez sur **Créer nouveau** pour créer un nouveau projet de conception. Si vous n'êtes pas sur la page de démarrage, vous pouvez également créer votre projet en allant dans **Fichier > Nouveau**.

![](2022-09-09-09-36-45.png)
" 
image="2022-09-09-09-34-58.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 2"
content="A ce stade, il est conseillé d'enregistrer votre projet avant de continuer. Allez dans **Fichier > Enregistrer**.

![](2022-09-09-09-39-16.png)" 
image="2022-09-09-09-40-02.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 3"
content="Pour cette première pièce, nous allons utiliser essentiellement l'atelier **Part Design**. Si ce n'est pas déjà fait, naviguez vers l'atelier **Part Design** ![](2022-09-09-09-42-54.png) à l'aide du menu déroulant de votre barre d'outils " 
image="2022-09-09-09-42-19.png" %}

## Tour d'horizon de la fenêtre

![](2022-09-09-09-48-37.png)

{% include step-tuto.html 
greyBackground = true
title="Vue générale"
content="La fenêtre de conception est séparée en 4 zones :
- Zone 1 : Vue 3D/2D de la pièce 
- Zone 2 : Onglets des projets ouverts
- Zone 3 : Arborescence des fonctions est pièces
- Zone 4 : Barre d'outils" 
image="2022-09-09-09-48-17.png" %}

{% include step-tuto.html 
greyBackground = false
title="1 - Vue 3D/2D"
content="La zone 1 est dédiée à la vue 3D et 2D de votre pièce. En vue 3D vous pouvez naviguer autour de votre pièce et sélectionner les elements sur lesquels interagir.
Vous avez également accès au **cube de navigation** vous permettant de gérer votre affichage et son orientation très rapidement.

![](2022-09-09-09-49-53.png)" 
image="2022-09-09-09-49-34.png" %}

{% include step-tuto.html 
greyBackground = true
title="2 - Onglets des pièces et elements du projet"
content="Les différentes pièces que vous créerez et ouvrirez apparaitront dans les onglets en dessous de votre fenêtre. 

![](2022-09-09-09-50-27.png)
" 
%}

{% include step-tuto.html 
greyBackground = false
title="3 - Arborescence des fonctions est pièces"
content="Sur la droite, vous trouverez la zone d'affichage de l'arborescence des fonctions et des pièces ainsi que les propriétés de l'élément sélectionné. 
L'arborescence affiche l'ensemble des pièces d'un projets, ses fonctions et ses éléments la constituant.

![](2022-09-09-09-54-30.png)

La partie inférieur permet d'afficher les options de **vue** de l'élément sélectionné (relatif à l'affichage de l'élément), ainsi que les options disponibles pour l'élément sélectionné. L'onglet de **Données** est peut-être l'onglet le plus important de FreeCAD car c'est celui qui permet d'interagir le plus efficacement avec l'intégralité des données d'un élément.

![](2022-09-09-09-57-37.png)
" 
image="2022-09-09-09-52-05.png" %}

{% include step-tuto.html 
greyBackground = true
title="4 - Barre d'outils"
content="Sur le haut de votre écran vous trouverez la barre d'outils qui vous donne accès à aux fonction vous permettant de créer et de gérer vos pièces. Elles est différente pour chaque atelier est peut être extrêmement personnalisable selon vos besoins (voir **Outils > Personnaliser > Barre d'outils**)

![](2022-09-09-09-59-14.png)

Exemple de barres d'outils par atelier :

![](2022-09-09-10-00-52.png)

![](2022-09-09-10-01-09.png)

![](2022-09-09-10-01-24.png)
" 
image="2022-09-09-10-01-58.png" %}

{% include message.html 
title="NOTE POUR LA SUITE"
message="Le logiciel FreeCAD étant en version de développement et qui plus est, extrêmement configurable, il est possible que certains visuels soient différents de votre version. 
Si c'est le cas, pas d'inquiétude : les modifications sont essentiellement cosmétiques et l'outil est forcement disponible autre part dans votre barre d'outils." 
status="is-info" %}

## Création de votre première pièce

{% include step-tuto.html 
greyBackground = true
title="ETAPE 0 : créer un corps"
content="Les projets FreeCAD sont extrêmement libres est flexibles dans leur manière de se concevoir. Ainsi, vous pouvez décider de faire autant de fichiers que de pièces que vous souhaitez assembler dans votre projet, ou n'utiliser qu'un seul fichier pour stocker vos différentes pièces, assemblages, dessins, plans, etc... 

Dans notre cas, nous allons nous concentrer sur la création d'une seule pièce, et donc d'un seul **Corps**. Pour créer un **Corps**, vous pouvez cliquer sur le bouton **Créer un corps** ![](2022-09-09-10-12-53.png) dans votre barre d'outils, ou dans **Conception de pièces > Créer un corps** .

![](2022-09-09-10-13-34.png)

Un nouveau corps est maintenant apparu dans votre arborescence sur votre droite.
" 
image="2022-09-09-10-14-23.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 1 : créer un esquisse"
content="Allez dans la barre d'outils et cliquez sur **Créer une Esquisse** ![](2022-09-09-10-16-30.png).
Sélectionnez le plan **XY_Plane** comme plan d'esquisse (clic sur le plan en question). Votre plan sélectionné devrait s'afficher dans votre fenêtre d'esquisse :

![](2022-09-09-10-17-34.png)

Clic sur **OK** pour valider ![](2022-09-09-10-21-21.png).
" 
image="2022-09-09-10-16-51.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 2 : Créer un rectangle"
content="Allez dans la barre d'outils et cliquez sur **Créer des rectangles** ![](2022-09-09-10-26-20.png)

Dessinez rectangle **autour du point d'origine** comme montré dans l'image en cliquant une première fois pour définir le premier sommet puis une seconde fois pour déterminer le second sommet. **Ne pas faire de clic and pull** (cliquer-tirer)" 
image="2022-09-09-10-26-49.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 3 : Centrer votre rectangle"
content="Il existe plusieurs méthodes pour centrer votre rectangle sur l'origine de votre pièce. Lisez attentivement les deux méthodes et testez :
#### Méthode 1 : par point milieu
Le carré étant à centrer sur l'origine (un point), cliquez sur deux sommets d'extrémité du carré puis **en dernier** sur le point d'origine.

![](2022-09-09-12-57-34.png)

Cliquez ensuite sur **Contrainte symétrique** dans la barre d'outils des contraintes ![](2022-09-09-12-58-27.png).

![](2022-09-09-13-00-09.png)

#### Méthode 2 : par symétrie
On peut également centrer le carré en utilisant une double symétrie. Cliquez sur deux sommets opposé du carré puis sur la ligne les séparants :

![](2022-09-09-13-02-16.png)

Cliquez ensuite sur **Symétrique** ![](2022-09-09-12-58-27.png).
Refaites la manipulation pour deux autres sommets.
" 
image="2022-09-09-13-03-12.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 4 : Egaliser les côtés de votre rectangle"
content="Sélectionnez deux cotés adjacents de votre carré, puis cliquez sur **contrainte d'égalité** ![](2022-09-09-13-03-56.png)" 
image="2022-09-09-13-04-42.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 5 : Coter les côtés de votre carré"
content="Sélectionnez un des côtés, et cliquer sur **contrainte verticale** ![](2022-09-09-13-12-00.png) ou **horizontal** ![](2022-09-09-13-12-09.png)selon le côté sélectionné. Entrez la dimension désirée 30mm 

![](2022-09-09-13-13-00.png)
" 
image="2022-09-09-13-13-40.png" %}

{% include message.html
title="ATTENTION" 
message="Notez comme votre esquisse est passée du **Blanc** au **Vert**. Cela signifie que votre esquisse est **complètement contrainte**. Il est important de **TOUJOURS** vérifier que vos esquisses sont complètements contraintes avant de sortir d'une esquisse et de continuer votre travail.

Si cela n'est pas fait, vous risquez de vous retrouver dans des situations ou votre génération de pièce future cassera si vous éditez une esquisse précédente et qu'elle n'est pas complètement contrainte." 
status="is-danger" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 6 : Valider et sortir de l'esquisse"
content="Si vous êtes satisfait de votre esquisse vous pouvez en sortir en cliquant sur le bouton **Fermer** ![](2022-09-09-13-14-35.png). Vous sortez alors du mode d'esquisse et revenez en vue 3D." 
image="2022-09-09-13-15-07.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 7 : Réaliser une protrusion"
content="Sélectionnez votre Esquisse précédemment créée ![](2022-09-09-13-17-51.png) puis cliquez sur **Protrusion** ![](2022-09-09-13-18-23.png) dans la barre d'outils. Dans le menu qui s'affiche changez la valeur à 10mm dans le champ **Longueur**.

![](2022-09-09-13-19-33.png)

Puis **Ok** ![](2022-09-09-13-20-05.png) pour sortir.
" 
image="2022-09-09-13-19-48.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 8 : Créer une seconde esquisse"
content="Cliquez sur **Créer une Esquisse** ![](2022-09-09-10-16-30.png) puis double cliquez sur le plan **XZ_Plane** pour le valider comme plan d'esquisse." 
image="2022-09-09-13-34-12.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 9 : Croquis rapide de votre forme"
content="Réalisez le croquis rapide de la forme désirée (voir illustration) en utilisant l'outil **ligne** ![](2022-09-09-13-22-12.png) ou **polyligne** ![](2022-09-09-13-29-50.png).
Quand vous travaillez sur une esquisse, le solveur d'esquisse vous propose automatiquement des contraintes géométriques **Horizontale** ou **Verticale**. Vous pouvez les voir s'afficher quand les conditions sont requises sous votre curseur :

![](2022-09-09-13-28-10.png)

Si certaines contraintes géométriques n'ont pas été positionnées lors de l'esquissage de la forme, vous pouvez les rajouter manuellement en utilisant les contraintes géométrique de la barre d'outils :

![](2022-09-09-13-33-03.png)
" 
image="2022-09-09-13-33-30.png" %}

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
content="A l'aide des outils de **Cotation** ![](2022-09-09-13-35-26.png), cotez comme indiqué l'esquisse précédemment créée. Pour la cote angulaire, utilisez l'outils de cotation **Contrainte Angulaire** ![](2022-09-09-13-36-11.png)

Vérifiez que votre esquisse est complétement contrainte, puis **Fermer** ![](2022-09-09-13-14-35.png) pour sortir." 
image="2022-09-09-13-38-05.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 11 : Extrusion par révolution"
content="Sélectionnez votre esquisse précédemment réalisée puis cliquez sur l'outil **Révolution** ![](2022-09-09-15-20-41.png). 

Vérifiez que l'axe de révolution est positionné sur **Axe Z**. Si ce n'est pas le cas, sélectionnez-le.

![](2022-09-09-15-22-23.png)

Enfin, **OK** pour valider ![](2022-09-09-10-21-21.png)" 
image="2022-09-09-15-23-35.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 12 : Esquisse du perçage"
content="Créez une **esquisse** dans le plan ZY (**XY_Plane**) et reproduisez l'esquisse ci-contre en utilisant l'outil **Créer un cercle** ![](2022-09-09-15-24-56.png). Contraignez les éléments comme vu précédemment, puis **Fermer** ![](2022-09-09-13-14-35.png) pour sortir." 
image="2022-09-09-15-36-46.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 13 : Enlèvement de matière"
content="Sélectionnez votre nouvelle esquisse réalisée précédemment, puis cliquez sur **Cavité** ![](2022-09-09-15-37-52.png). Dans la fenêtre qui s'affiche, si le sens d'enlèvement de matière n'est pas le bon, vous pouvez l'inverser en utilisant le bouton **Inversé** ![](2022-09-09-15-38-51.png). 

Puis dans **Type**, sélectionnez **A travers tout** ![](2022-09-09-15-39-48.png).

Enfin, **OK** pour valider ![](2022-09-09-10-21-21.png)" 
image="2022-09-09-15-40-20.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 14 : Répétition circulaire"
content="Sélectionnez la dernière fonction d'enlèvement de matière réalisée **Pocket** ![](2022-09-09-15-43-05.png) et cliquez sur **Répétition circulaire** ![](2022-09-09-15-44-14.png)

Dans la fenêtre qui s'ouvre, sélectionnez **Axe Z** dans le menu d'**Axe** 

![](2022-09-09-15-45-37.png)

Dans le compteur d'**Occurrences**, indiquez la valeur **6**

![](2022-09-09-15-46-56.png)

Enfin, **OK** pour valider ![](2022-09-09-10-21-21.png)" 
image="2022-09-09-15-47-51.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 15 : Chanfreins et congés"
content=" Sélectionnez au moins une arrête de votre base, puis cliquez sur l'outil **Chanfrein** ![](2022-09-09-15-49-09.png).

Dans la fenêtre de paramètres qui s'ouvre à droite, sélectionnez l'ensemble des 4 arrêtes latérales de la base. 

![](2022-09-09-15-50-58.png)

Donnez une distance de 3mm à vos chanfreins, puis **OK** pour valider ![](2022-09-09-10-21-21.png)

![](2022-09-09-15-51-35.png)

Vous pouvez faire de même avec l'outil **Congé** ![](2022-09-09-15-51-49.png) et en sélectionnant l'arrête de base du cylindre.

![](2022-09-09-15-52-51.png)" 
image="2022-09-09-15-52-13.png" %}

## Modification de votre pièce

Les outils de CAO sont des outils, par essence, paramétriques. C'est à dire qu'ils vous permettent  de faire des modifications dans vos pièces en remontant dans votre arbre de construction. Ainsi, cela vous permet de corriger ou de rajouter des elements à votre pièce en remontant votre arbre et sans avoir à recommencer l'ensemble de votre conception.

Par exemple, dans notre cas, nous allons effectuer plusieurs modifications :

{% include step-tuto.html 
greyBackground = true
title="MODIF 1 : Dimension de la base"
content="Dans cette première modification, nous allons changer la taille de l'esquisse, puis nous modifierons la hauteur de la base.

Double cliquez sur votre première esquisse (celle de votre base) dans l'arborescence de votre pièce, à droite :

![](2022-09-09-15-54-17.png)

Vous allez revenir en mode **Edition d'esquisse** de votre base. Modifiez la dimension de votre coté de carré en la passant à **40mm** ![](2022-09-09-15-54-50.png), puis bouton **Fermer** ![](2022-09-09-13-14-35.png) pour valider.

Pour modifier votre hauteur de base, double cliquez sur l'extrusion de votre base dans l'arbre de construction (**Pad** ![](2022-09-09-15-56-31.png)), et modifiez la hauteur à 5mm, puis **OK** pour valider ![](2022-09-09-10-21-21.png)." 
image="2022-09-09-15-57-21.png" %}

{% include step-tuto.html 
greyBackground = false

title="MODIF 2 : Dimension des perçages"
content="Double cliquez sur l'esquisse du perçage pour rentrer en mode édition, et modifiez le diamètre du cercle à 4mm et l'écartement par rapport au centre à 16mm, puis bouton **Fermer** ![](2022-09-09-13-14-35.png) pour valider.

![](2022-09-09-15-58-24.png)
" 
image="2022-09-09-15-58-44.png" %}

{% include step-tuto.html 
greyBackground = true

title="MODIF 3 : Nombre des perçages"
content="Double cliquez sur la fonction de répétition circulaire, puis modifiez le **Compteur d'instances** à 4 instances. Puis **OK** pour valider ![](2022-09-09-10-21-21.png)." 
image="2022-09-09-15-59-30.png" %}