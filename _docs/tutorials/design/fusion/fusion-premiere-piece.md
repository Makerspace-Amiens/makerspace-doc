---
layout: documentation
image: Fusion(2).png
hide_hero: false
hero_image: Fusion(2).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: Fusion 360 (2) - Votre première pièce
subtitle: Création de votre première pièce sous Fusion 360
description: Création de votre première pièce sous Fusion 360
tags: fusion
type: doc,cao

time: 2
difficulty: 1
compatibilities-os: win,mac

prerequisites:
  - label: Installation Fusion 360
    link: ""

softwares: 
  - label: Fusion360
    link: "https://www.autodesk.fr/products/fusion-360/overview"

todo: 100
---
![Alt text]()
## Objectif :

L'objectif de ce tuto est de découvrir les fonctions basiques de Fusion360 en réalisant pas-à-pas la pièce ci-dessous. L'ensemble des fonctions utilisées ne sont pas explicitées de manière exhaustives donc n'hésitez pas à tester par vous même certaines options.

## Tour d'horizon de la fenêtre

![](2022-09-09-16-31-48.png)

{% include step-tuto.html 
greyBackground = true
title="Vue générale"
content="La fenêtre de conception est séparée en 4 zones :
- Zone 1 : Vue 3D/2D de la pièce 
- Zone 2 : Historique de conception
- Zone 3 : Arborescence des pièces
- Zone 4 : Barre d'outils" 
image="2022-09-09-16-33-01.png" %}

{% include step-tuto.html 
greyBackground = false
title="1 - Vue 3D/2D"
content="La zone 1 est dédiée à la vue 3D et 2D de votre pièce. En vue 3D vous pouvez naviguer autour de votre pièce et sélectionner les elements sur lesquels interagir.
Vous avez également accès au **cube de navigation** vous permettant de gérer votre affichage et son orientation très rapidement.

![](2022-09-15-10-47-20.png)" 
image="2022-09-15-10-46-51.png" %}

{% include step-tuto.html 
greyBackground = true
title="2 - historique de conception"
content="Les différentes action et modifications liées à vos pièces apparaissent ici. Vous pouvez y accéder pour les modifier, les supprimer, intercaler de nouvelles fonctions ou revoir la conception de la pièce grâce au boutons présents sur la gauche :

![](2022-09-15-10-51-07.png)" 
image="2022-09-15-14-29-04.png"%}

{% include step-tuto.html 
greyBackground = false
title="3 - Arborescence des fonctions est pièces"
content="Sur la droite, vous trouverez la zone d'affichage de l'arborescence des fonctions et des pièces ainsi que les propriétés de l'élément sélectionné. 
L'arborescence affiche l'ensemble des pièces d'un projets, ses fonctions et ses éléments la constituant.
" 
image="2022-09-15-14-30-02.png" %}

{% include step-tuto.html 
greyBackground = true
title="4 - Barre d'outils"
content="Sur le haut de votre écran vous trouverez la barre d'outils qui vous donne accès à aux fonction vous permettant de créer et de gérer vos pièces. Elles est différente pour chaque atelier est peut être extrêmement personnalisable selon vos besoins. 

![](2022-09-15-10-53-35.png)

Exemples de barre d'outils : 
![](2022-09-15-10-52-14.png)
![](2022-09-15-10-52-26.png)
![](2022-09-15-10-52-37.png)
" 
image="2022-09-15-10-51-56.png" %}

## Création de votre première pièce

{% include step-tuto.html 
greyBackground = false
title="ETAPE 1 : créer un esquisse"
content="Allez dans la barre d'outils et cliquez sur **Créer une Esquisse** ![](2022-09-15-10-55-17.png).
Sélectionnez le plan **Dessus** comme plan d'esquisse (clic sur le plan en question). " 
image="2022-09-15-10-55-40.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 2 : Créer un rectangle"
content="Allez dans la barre d'outils et cliquez sur **Créer un rectangle à deux points** ![](2022-09-15-10-57-42.png)

Dessinez rectangle **autour du point d'origine** comme montré dans l'image en cliquant une première fois pour définir le premier sommet puis une seconde fois pour déterminer le second sommet. **Ne pas faire de clic and pull** (cliquer-tirer)" 
image="2022-09-15-10-58-07.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 3 : Centrer votre rectangle"
content="Utilisez l'outil **Ligne** ![](2022-09-15-10-59-05.png) et tracez une ligne reliant deux sommets.

![](2022-09-15-11-04-24.png)

Selectionnez la ligne tracée puis transformez la en ligne de construction :

![](2022-09-15-11-05-17.png)
![](2022-09-15-11-05-32.png)

Sélectionnez ensuite votre ligne et le point centrale en maintenant la touche **Shift** enfoncée, puis cliquez sur la contrainte **Milieu** ![](2022-09-15-11-20-02.png) dans la barre d'outils
" 
image="2022-09-15-11-20-21.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 4 : Egaliser les côtés de votre rectangle"
content="Sélectionnez deux cotés adjacents de votre carré en maintenant **Shift enfoncé**, puis cliquez sur **contrainte d'égalité** ![](2022-09-15-11-21-11.png)" 
image="2022-09-15-11-21-23.png" %}<>

{% include step-tuto.html 
greyBackground = false
title="ETAPE 5 : Coter les côtés de votre carré"
content="Sélectionnez un des côtés, et cliquez sur **côte d'esquisse** ![](2022-09-15-11-21-58.png). Entrez la dimension désirée 30mm 

![](2022-09-15-11-22-27.png)
" 
image="2022-09-15-11-22-45.png" %}

{% include message.html
title="ATTENTION" 
message="Notez comme votre esquisse est passée du **Bleu** au **Noir**. Cela signifie que votre esquisse est **complètement contrainte**. Il est important de **TOUJOURS** vérifier que vos esquisses sont complètements contraintes avant de sortir d'une esquisse et de continuer votre travail.

Si cela n'est pas fait, vous risquez de vous retrouver dans des situations ou votre génération de pièce future cassera si vous éditez une esquisse précédente et qu'elle n'est pas complètement contrainte." 
status="is-danger" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 6 : Valider et sortir de l'esquisse"
content="Si vous êtes satisfait de votre esquisse vous pouvez en sortir en cliquant sur le bouton **Terminer l'esquisse** ![](2022-09-15-11-23-31.png). Vous sortez alors du mode d'esquisse et revenez en vue 3D." 
image="2022-09-15-11-24-03.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 7 : Réaliser une extrusion"
content="Cliquez sur **Extrusion** ![](2022-09-15-11-24-55.png) dans la barre d'outils puis dans le menu qui s'affiche sur votre droite, cliquez sur **Contours** et sélectionnez la surface à extruder. 

![](2022-09-15-11-26-22.png)

Dans le menu changez la valeur à 10mm dans le champ **Distance**.

![](2022-09-15-11-27-43.png)

Vérifiez que dans le champs **Opération**, la valeur **Nouveau Composant** est bien sélectionné ![](2022-09-15-11-38-16.png).

Puis **Ok** ![](2022-09-15-11-28-00.png) pour sortir.
" 
image="2022-09-15-11-30-24.png" %}

{% include message.html
title="ATTENTION" 
message="Pour cette première fonction, il est necessaire de bien sélectionné **Création de Nouveau composant**, mais pour la suite n'oubliez pas de changer d'opération en fonction de vos besoins.

![](2022-09-15-11-33-28.png)" 
status="is-danger" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 8 : Créer une seconde esquisse"
content="Cliquez sur **Créer une Esquisse** ![](2022-09-15-11-42-36.png) puis double cliquez sur le plan **Avant** pour le valider comme plan d'esquisse." 
image="2022-09-15-11-44-13.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 9 : Croquis rapide de votre forme"
content="Réalisez le croquis rapide de la forme désirée (voir illustration) en utilisant l'outil **ligne** ![](2022-09-15-11-44-42.png).

Quand vous travaillez sur une esquisse, le solveur d'esquisse vous propose automatiquement des contraintes géométriques **Horizontale** ou **Verticale**. Vous pouvez les voir s'afficher quand les conditions sont requises sous votre curseur :

![](2022-09-15-11-45-44.png)

Si certaines contraintes géométriques n'ont pas été positionnées lors de l'esquissage de la forme, vous pouvez les rajouter manuellement en utilisant les contraintes géométrique de la barre d'outils :

![](2022-09-15-11-46-03.png)
" 
image="2022-09-15-11-46-20.png" %}

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
content="A l'aide des outils de **Cotation** ![](2022-09-15-11-47-51.png), cotez comme indiqué l'esquisse précédemment créée. 

Vérifiez que votre esquisse est complétement contrainte, puis **Terminer l'esquisse** ![](2022-09-15-11-23-31.png) pour sortir." 
image="2022-09-15-11-50-03.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 11 : Extrusion par révolution"
content="Sélectionnez votre esquisse précédemment réalisée puis cliquez sur l'outil **Révolution** ![](2022-09-15-11-50-30.png). 

- Dans ** Contour**, sélectionnez votre surface à faire tourner.
- Dans Axe, sélectionnez l'axe de rotation
- Dans **Opération**, sélectionnez **Joindre**

Enfin, **OK** pour valider ![](2022-09-15-11-28-00.png)" 
image="2022-09-15-11-53-01.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 12 : Esquisse du perçage"
content="Créez une **esquisse** dans le plan ZY (**Dessus**) et reproduisez l'esquisse ci-contre en utilisant l'outil **Créer un cercle** ![](2022-09-15-11-54-15.png). Contraignez les éléments comme vu précédemment, puis **Terminer l'esquisse** pour sortir.

Vous pouvez utiliser l'outil **Ligne** puis **Construction** comme vu précédemment pour contraindre verticalement le perçage. Vous pourrez ensuite sélectionner votre ligne et lui associer la contrainte **Verticale** ![](2022-09-15-11-56-39.png)" 
image="2022-09-15-11-57-16.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 13 : Enlèvement de matière"
content="Cliquez sur **Extrusion** ![](2022-09-15-14-07-18.png) puis sélectionnez le contours de votre cercle réalisé précédemment dans le champ **Contours**.

![](2022-09-15-14-08-28.png)

Dans le **Type d'étendue**, sélectionnez **Tout** pour indiquer que vous souhaitez enlever de la matière à travers tous les corps.

![](2022-09-15-14-10-18.png)

Vérifiez bien que dans le champ **Opération**, l'option **Couper** est sélectionnée : ![](2022-09-15-14-11-25.png)

Enfin, **OK** pour valider ![](2022-09-15-11-28-00.png)" 
image="2022-09-15-14-14-16.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 14 : Répétition circulaire"
content="Dans **Créer** puis dans **Réseau**, sélectionnez **Réseau circulaire**

![](2022-09-15-14-17-05.png)

Dans l'option **Type d'objet**, sélectionnez **Fonctions** ![](2022-09-15-14-18-25.png), puis dans **Objets**, séléctionnez la fonction d'enlèvement de matière réalisée juste avant dans l'historique de conception en bas à gauche :

![](2022-09-15-14-19-45.png)

Dans **Axe**, sélectionnez l'une des face du cylindre ou l'axe Z :

![](2022-09-15-14-21-31.png)

Puis enfin, dans **Quantité**, passez le paramètre à 6 : ![](2022-09-15-14-22-10.png)

Enfin, **OK** pour valider ![](2022-09-15-11-28-00.png)" 
image="2022-09-15-14-22-29.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 15 : Chanfreins et congés"
content="Dans **MODIFIER**, sélectionnez l'outil **Chanfrein**

![](2022-09-15-14-23-55.png)

Puis sélectionnez les 4 arrêtes et positionnez le chanfrein à une dimension de 3 mm.

![](2022-09-15-14-25-33.png)

Enfin, **OK** pour valider ![](2022-09-15-11-28-00.png)

Vous pouvez en faire de même avec la base du cylindre en sélectionnant l'outil **Congé** ![](2022-09-15-14-27-13.png), puis une dimension de 1mm.

![](2022-09-15-14-27-36.png)
" 
image="2022-09-15-14-27-54.png" %}

## Modification de votre pièce

Les outils de CAO sont des outils, par essence, paramétriques. C'est à dire qu'ils vous permettent  de faire des modifications dans vos pièces en remontant dans votre arbre de construction. Ainsi, cela vous permet de corriger ou de rajouter des elements à votre pièce en remontant votre arbre et sans avoir à recommencer l'ensemble de votre conception.

Par exemple, dans notre cas, nous allons effectuer plusieurs modifications :

{% include step-tuto.html 
greyBackground = true
title="MODIF 1 : Dimension de la base"
content="Dans cette première modification, nous allons changer la taille de l'esquisse, puis nous modifierons la hauteur de la base.

Clic-droit sur votre première esquisse (celle de votre base) dans l'arborescence de votre pièce, à droite :

![](2022-09-15-14-31-14.png)

Vous allez revenir en mode **Edition d'esquisse** de votre base. Modifiez la dimension de votre coté de carré en la passant à **40mm**, puis bouton **Terminer l'esquisse** pour valider.

Pour modifier votre hauteur de base, clic-droit sur l'extrusion de votre base dans l'historique de construction et modifiez la hauteur à 5mm, puis **OK** pour valider.

![](2022-09-15-14-33-16.png)"
image="2022-09-15-14-33-44.png" %}

{% include step-tuto.html 
greyBackground = false

title="MODIF 2 : Dimension des perçages"
content="Clic droit sur l'esquisse du perçage pour rentrer en mode édition, et modifiez le diamètre du cercle à 4mm et l'écartement par rapport au centre à 16mm, puis bouton **Terminer l'esquisse** pour valider.

![](2022-09-15-14-35-16.png)
" 
image="2022-09-15-14-35-32.png" %}

{% include step-tuto.html 
greyBackground = true

title="MODIF 3 : Nombre des perçages"
content="Clic droit sur la fonction de répétition circulaire, puis sur **Modifier le réseau**. Modifiez le **Compteur d'instances** à 4 instances. 

![](2022-09-15-14-36-58.png)

Puis **OK** pour valider" 
image="2022-09-15-14-37-20.png" %}