---
layout: documentation
image: SolidWorks(2).png
hide_hero: false
hero_image: SolidWorks(2).png
hero_darken: true
component_toc: true
background_color: '#f7eded'

title: SolidWorks (2) - Première pièce
subtitle: Votre première pièce
description: Création de votre première pièce sous Solidworks
tags: solidworks
type: doc,cao

time: 2
difficulty: 1
compatibilities-os: win

prerequisites:
  - label: Installer SolidWorks
    link: ""

softwares: 
  - label: Solidworks
    link: "https://www.solidworks.com/fr"

todo: 100
---

## **Objectif :**

{% include 3d-model.html model = "/img/3d/TutoSldw.glb" %}

L'objectif de ce tuto est de découvrir les fonctions basiques de SolidWorks en réalisant pas-à-pas la pièce ci-dessus. L'ensemble des fonctions utilisées ne sont pas explicitées de manière exhaustives donc n'hésitez pas à tester par vous même certaines options.

## **Création de votre projet**

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1"
content="Au lancement de SolidWorks et sur la Page de démarrage, cliquez sur **Bienvenue dans SolidWorks** puis sur Pièce pour créer un nouveau projet de conception d'une pièce unique.

![Alt text](SLDWORKS_mWB6UfvzKd.png)
![](2022-09-09-09-36-45.png)
" 
image="O9A0sQ0T5a.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 2"
content="Vérifiez que les unités sont bien positionnées en **MMGS(millimètre, gramme, seconde)**, puis cliquez sur **OK**.

![Alt text](SLDWORKS_MdxG64dxv5.png)
" 
image="SLDWORKS_REg0FpPzp3.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 3"
content="Pour cette première pièce, nous utiliserons essentiellement les outils disponibles dans l'atelier **Pièce**. 

Dans le cas d'un assemblage de pièce vous utiliserez l'atelier **Assemblage** (non couvert par ce premier tutoriel)." 
image="SLDWORKS_gj7mVhyNYl.png" %}

## **Paramétrage**

Afin d'améliorer l'expérience de conception sur SolidWorks, voici ci-dessous quelques petites astuces de paramétrage que vous pouvez mettre en place.

{% include step-tuto.html 
greyBackground = true
title="Accéder aux paramètres"
content="Accèdez à la boite de dialogue de paramétrage en cliquant sur l’icône **Options**

![Alt text](SLDWORKS_GOBJMups99.png)" 
image="SLDWORKS_DyqkpZIkFg.png" %}

{% include step-tuto.html 
greyBackground = true
title="Modifiez les options d'esquisse"
content="Dans l'onglet d'options **Esquisse**, vérifiez que les elements suivants sont bien cochés :
- Rotation automatique de la vue dans la direction normale au plan
- Utiliser des esquisses totalement contraintes
" 
image="SLDWORKS_6k4SbXfMNo.png" %}

{% include step-tuto.html 
greyBackground = true
title="Modifiez les options de performance"
content="Dans l'onglet d'options **Performance**, désactivez les options **Hautes qualité** dans la partie transparence." 
image="SLDWORKS_QX0bLnQeIO.png" %}

## **Tour d'horizon de la fenêtre**

![Alt text](SLDWORKS_gj7mVhyNYl.png)

{% include step-tuto.html 
greyBackground = true
title="Vue générale"
content="La fenêtre de conception est séparée en 3 zones :
- **Zone 1 :** Vue 3D/2D de la pièce 
- **Zone 2 :** Arborescence des fonctions est pièces
- **Zone 3 :** Barre d'outils
"
image="sldwnum.png" %}

{% include step-tuto.html 
greyBackground = false
title="1 - Vue 3D/2D"
content="La zone 1 est dédiée à la vue 3D et 2D de votre pièce. En vue 3D vous pouvez naviguer autour de votre pièce et sélectionner les éléments sur lesquels interagir.
Pour naviguer sous solidworks vous utiliserez principalement votre souris. Etant donné les fonctionnalités à utiliser, **nous vous recommandons fortement d'utiliser une souris à 3 boutons** plutôt qu'un trackpad. 

- Clic gauche pour sélectionner
- Clic molette pour tourner 
- Clic molette + CTRL pour se déplacer dans le plan
- Clic droit pour les options

Vous avez également accès à différents outils vous permettant de gérer votre affichage et son orientation dans la barre d'outils supérieur.
![](SLDWORKS_TBm5u6W7OT.png)" 
image="SLDWORKS_KPvCywywmQ.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Arborescence des fonctions est pièces"
content="Sur la droite, vous trouverez la zone d'affichage de l'arborescence des fonctions et des pièces ainsi que les boites de dialogue des différents outils. 

L'arborescence affiche l'ensemble des pièces d'un projet, ses fonctions et ses éléments la constituant.

La **barre bleu** indique l'endroit où vous vous trouvez dans l'historique de conception de votre pièce. Vous pouvez moduler la barre si vous souhaitez revenir en arrière sur votre conception.
![Alt text](SLDWORKS_Pos3qbqB4Z.png)" 
image="SLDWORKS_f4PXcB4Wc4.png" %}

{% include step-tuto.html 
greyBackground = true
title="3 - Bandeau d'outils"
content="Sur le haut de votre écran vous trouverez le bandeau d'outils qui vous donne accès à aux fonction vous permettant de créer et de gérer vos pièces. Elles est différente pour chaque atelier est peut être extrêmement personnalisable selon vos besoins.

Exemples de barre d'outils du bandeau :
![Alt text](SLDWORKS_20230823_113355.png)

![Alt text](SLDWORKS_20230823_113422.png)

![Alt text](SLDWORKS_20230823_113823.png)
" 
image="SLDWORKS_dcj4KDZpXR.png" %}

Maintenant que nous avons fait un tour d'horizon du logiciel, nous allons créer une pièce simple vous permettant de mettre en application les bases de la CAO.

## Création de votre première pièce

Le logiciel de CAO SolidWorks est un logiciel de conception paramétrique. Son fonctionnement, comme bien d'autres, est basé sur la création d'esquisses (de dessins 2D cotés) qui seront ensuite mis en volume grâce à des opérations d'ajout ou d’enlèvement de matière.

C'est la succession de ces opérations permet la création de pièces complexes.

{% include step-tuto.html 
greyBackground = false
title="ETAPE 1 : créer une esquisse"
content="Allez dans le bandeaux d'outils en haut de la fenêtre, et accédez à l'onglet **esquisse**, puis cliquez sur **Esquisse**.

![Alt text](SLDWORKS_20230823_114714.png)

Nous allons créer une esquisse sur un plan 2D. Il faudra donc sélectionner le plan 2D sur lequel vous souhaitez travailler. Sélectionnez le plan du dessus comme sur l'image ci-dessous :

![Alt text](SLDWORKS_20230823_114838.png)

La vue devrait se positionner sur le dessus de l'esquisse. Vous allez pouvoir maintenant travailler en 2D sur ce plan." 
image="SLDWORKS_20230823_115144.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 2 : Créer un rectangle"
content="Allez dans la barre d'outils et cliquez sur **Créer des rectangles**.![Alt text](20230823_115623.png)

Dessinez un rectangle **autour du point d'origine** comme montré dans l'image en cliquant une première fois pour définir le premier sommet puis une seconde fois pour déterminer le second sommet. **Éviter le clic and pull** (cliquer-tirer)" 
image="SLDWORKS_20230823_115528.png" %}

{% include message.html 
message="
Actuellement, votre rectangle n'est pas contraint. Il est libre dans son espace 2d est peut être modifié. Cela s'observe notamment grâce à la coloration en bleu du dessin. La première étape va donc être de contraindre géométriquement puis en dimensions votre esquisse avant de passer à la suite.
" 
status="is-info" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 3 : Centrer votre rectangle"
content=" Utilisez l’outil Ligne ![Alt text](SLDWORKS_20230823_120408.png) et tracez une ligne reliant deux sommets.

![Alt text](SLDWORKS_20230823_120459.png)

Puis sélectionnez la ligne nouvellement créée et le centre de votre esquisse en maintenant la touche **Shift** appuyée. Vous verrez apparaitre dans le volet de gauche les propriétés des elements sélectionnés et également, ce qui nous intéresse, une section **Ajouter des relations**.

![Alt text](SLDWORKS_20230823_120645.png)

Dans cette section **Ajouter des relations**, cliquez sur **Point milieu**. ![Alt text](SLDWORKS_20230823_120901.png)

Votre rectangle devrait maintenant être centré sur votre origine. Afin de finaliser votre construction, vous pouvez indiquer au logiciel que cette ligne est une ligne de construction et qu'elle ne sera pas utilisée pour la conception 3d de votre pièce.

Pour cela, sélectionnez la ligne et cliquez dans le panneau d'option à gauche sur **Pour la construction** ![Alt text](SLDWORKS_20230823_121150.png).

Votre ligne devrait maintenant s'afficher en pointillés. 
" 
image="SLDWORKS_20230823_121234.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 4 : Égaliser les côtés de votre rectangle"
content="Sélectionnez deux cotés adjacents de votre rectangle en maintenant la touche **Shift**, puis cliquez sur **Egale** dans le panneau de gauche ![Alt text](SLDWORKS_20230823_121445.png)

Vous pouvez vérifier que la relation est bien appliquée en vérifiant que l’icône d'égalité ![Alt text](SLDWORKS_20230823_121553.png) s'affiche sur les deux coté de votre rectangle devenu maintenant un carré !
" 
image="SLDWORKS_20230823_121528.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 5 : Coter les côtés de votre carré"
content="Il ne reste plus qu'une opération pour contraindre complètement votre carré. Vous allez définir la longueur d'un des coté. cette longueur sera nommée **cote** par la suite. 

Cliquez sur **Cotation intelligente** dans le bandeau supérieur ![Alt text](SLDWORKS_20230823_121827.png) puis sélectionnez un des cotés du carré. Une ligne de cotation apparait alors. 

![Alt text](SLDWORKS_20230823_121947.png)

Positionnez-la sur le long de votre ligne puis cliquez pour valider. Une popup s'affiche afin de vous permettre d'entrer la valeur de la longueur. Indiquez 30mm et validez avec ![Alt text](SLDWORKS_20230823_122152.png)

![Alt text](SLDWORKS_20230823_122204.png) 
" 
image="SLDWORKS_20230823_122247.png" %}

{% include message.html
title="ATTENTION" 
message="Notez comme votre esquisse est passée du **Bleu** au **noir**. Cela signifie que votre esquisse est **complètement contrainte**. Il est important de **TOUJOURS** vérifier que vos esquisses sont complètements contraintes avant de sortir d'une esquisse et de continuer votre travail.

Si cela n'est pas fait, vous risquez de vous retrouver dans des situations ou votre génération de pièce future cassera si vous éditez une esquisse précédente et qu'elle n'est pas complètement contrainte." 
status="is-danger" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 6 : Valider et sortir de l'esquisse"
content="Si vous êtes satisfait de votre esquisse vous pouvez en sortir en cliquant sur le bouton **Quitter l'esquisse** ![](SLDWORKS_20230823_122426.png). Vous sortez alors du mode d'esquisse et revenez en vue 3D." 
image="SLDWORKS_20230823_122459.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 7 : Réaliser une protrusion"
content="Sélectionnez votre Esquisse précédemment créée![Alt text](SLDWORKS_20230823_122557.png) puis cliquez sur **Bossage/Base extrudé** ![Alt text](SLDWORKS_20230823_122643.png) dans la barre d'outils. 

Dans le menu qui s'affiche changez la valeur à 10mm dans le champ **Longueur**.

![Alt text](SLDWORKS_20230823_122752.png)

Puis **Valider** ![Alt text](SLDWORKS_20230823_122827.png) pour valider la saisie." 
image="SLDWORKS_20230823_122708.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 8 : Créer une seconde esquisse"
content="Cliquez sur **Esquisse** ![Alt text](SLDWORKS_20230823_122953.png) puis, dans l’arborescence gauche, allez dans l'onglet **Arbre de création** et sélectionnez **Plan de Face**. Ainsi, nous allons créer une esquisse sur ce plan pour la suite de la pièce.

![Alt text](SLDWORKS_20230823_123030.png)" 

image="SLDWORKS_20230823_123223.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 9 : Croquis rapide de votre forme"
content="Réalisez le croquis rapide de la forme désirée (voir illustration) en utilisant l'outil **ligne** ![Alt text](SLDWORKS_20230823_123516.png).
Quand vous travaillez sur une esquisse, le solveur d'esquisse vous propose automatiquement des contraintes géométriques **Horizontale** ou **Verticale**. Vous pouvez les voir s'afficher quand les conditions sont requises sous votre curseur. Il est donc conseillé d'en tirer parti. Vous pouvez par exemple commencer votre dessin en cliquant sur le centre de votre esquisse :

![Alt text](SLDWORKS_20230823_123550.png)

Si certaines contraintes géométriques n'ont pas été positionnées lors de l'esquisse de la forme, vous pouvez les rajouter manuellement en utilisant les contraintes géométrique du panneau de gauche :

![Alt text](SLDWORKS_20230823_123733.png)
" 
image="SLDWORKS_20230823_123744.png" %}

{% include message.html
title="INFO" 
message="Lorsque vous réalisez une esquisse complexe, une méthode de réalisation simple et qui fonctionne dans la plupart des cas est de :
- Réaliser un croquis non contraint de votre esquisse
- Contraindre géométriquement votre pièce à l'aide des outils de contrainte
- Terminer par la cotation de l'esquisse
- Vérifier que votre esquisse est complètement contrainte
C'est la méthode que vous avez suivi pour réaliser la base de votre pièce, et c'est également la méthode que nous allons utiliser pour la seconde partie de la pièce." 
status="is-info" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 10 : Contraignez l’esquisse en dimensions"
content="A l'aide de l'outils de **Cotation intelligente** ![](SLDWORKS_20230823_123852.png) cotez comme indiqué l'esquisse précédemment créée. Pour la cote angulaire, sélectionnez les deux ligne du secteur angulaire l'une à la suite de l'autre.

Vérifiez que votre esquisse est complètement contrainte, puis **Quitter l'esquisse** ![Alt text](SLDWORKS_20230823_124011.png) pour sortir." 
image="SLDWORKS_20230823_124145.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 11 : Extrusion par révolution"
content="Sélectionnez votre esquisse précédemment réalisée puis cliquez sur l'outil **Bossage/Base avec révolution** ![Alt text](SLDWORKS_20230823_124244.png).

Dans **Axe de révolution** ![Alt text](SLDWORKS_20230823_124345.png) sélectionnez sur l'esquisse la ligne qui sera le centre de votre rotation, à savoir celle au centre de votre pièce :

![Alt text](SLDWORKS_20230823_124504.png)

Enfin, **Valider** ![Alt text](SLDWORKS_20230823_122827.png) pour valider le bossage." 
image="SLDWORKS_20230823_124550.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 12 : Esquisse du perçage"
content="Créez une **esquisse** dans le **plan du dessus** ![](SLDWORKS_20230823_124803.png) comme vu précédemment 

![Alt text](SLDWORKS_20230823_124842.png)

Puis reproduisez l'esquisse ci-contre en utilisant l'outil **Cercle** ![](SLDWORKS_20230823_124913.png). Contraignez les éléments comme vu précédemment.

Vérifiez que votre esquisse est complètement contrainte, puis **Quitter l'esquisse** ![Alt text](SLDWORKS_20230823_124011.png) pour sortir."
image="SLDWORKS_20230823_125331.png" %}

{% include message.html
title="INFO" 
message="Si vous n'arrivez pas à contraindre la position du cercle verticalement, vous pouvez utilisez une contrainte  **Verticale** ![](SLDWORKS_20230823_125126.png) entre le centre de l'esquisse et le centre de votre cercle.

Ou vous pouvez utilisez la même méthode que nous avons utilisé pour centrer notre rectangle au début du tutoriel avec l'outil **ligne de construction** ![Alt text](20230823_125255.png) " 
status="is-info" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 13 : Enlèvement de matière"
content="Sélectionnez votre nouvelle esquisse réalisée précédemment, puis cliquez sur **Enlèvement de matière extrudé** ![Alt text](SLDWORKS_20230823_125458.png). 

Dans la fenêtre qui s'affiche, si le sens d'enlèvement de matière n'est pas le bon, vous pouvez l'inverser en utilisant le bouton **Inversé** ![Alt text](SLDWORKS_20230823_125604.png).

![Alt text](SLDWORKS_20230823_125638.png)![Alt text](SLDWORKS_20230823_125650.png)

Puis dans **Type**, sélectionnez **A travers tout**.

![Alt text](SLDWORKS_20230823_125708.png)

Enfin, **Valider** ![Alt text](SLDWORKS_20230823_122827.png) pour valider l'opération'." 
image="SLDWORKS_20230823_125838.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 14 : Répétition circulaire"
content="Sélectionnez la dernière fonction d'enlèvement de matière réalisée :

![Alt text](SLDWORKS_20230823_125901.png)

Puis cliquez sur **Répétition circulaire** :

![Alt text](SLDWORKS_20230823_125940.png)

Dans la fenêtre qui s'ouvre, sélectionnez le champs vide dans **Direction 1** ![Alt text](SLDWORKS_20230823_130014.png) puis sélectionnez le cylindre de votre pièce. Ainsi vous indiquez au logiciel que vous souhaitez faire une répétition circulaire autour de ce cylindre. 

![Alt text](SLDWORKS_20230823_130108.png)

Dans le compteur d'**Occurrences**, indiquez la valeur **6** ![Alt text](SLDWORKS_20230823_130216.png)
Et sélectionnez **Espace constant** ![](SLDWORKS_20230823_130236.png)

![Alt text](SLDWORKS_20230823_130335.png)

![Alt text](SLDWORKS_20230823_130403.png)

Enfin, **Valider** ![Alt text](SLDWORKS_20230823_122827.png) pour valider l'opération'." 
image="SLDWORKS_20230823_130427.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 15 : Chanfreins et congés"
content="Sélectionnez l'outil **Chanfrein** dans le bandeau d'outils :

![Alt text](SLDWORKS_20230823_130536.png)

Puis sélectionnez les 4 arrêtes de votre pièce comme indiqué ci-dessous :

![Alt text](SLDWORKS_20230823_130610.png)

Pour visualiser au mieux les chanfreins vous pouvez sélectionner l'option **Aperçu intégral**![Alt text](SLDWORKS_20230823_130659.png).

![Alt text](SLDWORKS_20230823_130743.png)

Donnez une distance de 3mm à vos chanfreins puis **valider** ![Alt text](SLDWORKS_20230823_122827.png) 

![Alt text](SLDWORKS_20230823_130814.png)

Vous pouvez faire de même avec l'outil **Congé** ![Alt text](20230823_130954.png) et en sélectionnant l'arrête de base du cylindre et un rayon de 1mm.

![Alt text](SLDWORKS_20230823_131048.png)" 
image="SLDWORKS_20230823_131128.png" %}

## Modification de votre pièce

Les outils de CAO sont des outils, par essence, paramétriques. C'est à dire qu'ils vous permettent  de faire des modifications dans vos pièces en remontant dans votre arbre de construction. Ainsi, cela vous permet de corriger ou de rajouter des elements à votre pièce en remontant votre arbre et sans avoir à recommencer l'ensemble de votre conception.

Par exemple, dans notre cas, nous allons effectuer plusieurs modifications :

{% include step-tuto.html 
greyBackground = true
title="MODIF 1 : Dimension de la base"
content="Dans cette première modification, nous allons changer la taille de l'esquisse, puis nous modifierons la hauteur de la base.

Cliquez droit sur votre première esquisse (celle de votre base) dans l'arborescence de votre pièce, à droite. Puis **Éditer l'esquisse** :

![Alt text](SLDWORKS_20230823_131430.png)

Vous allez revenir en mode **Édition d'esquisse** de votre base. Modifiez la dimension de votre coté de carré en la passant à **40mm**, puis **Quitter l'esquisse** ![Alt text](SLDWORKS_20230823_124011.png) pour sortir.

![Alt text](SLDWORKS_20230823_131546.png)

Pour modifier votre hauteur de base, clic droit sur l'extrusion de votre base dans l'arbre de construction, puis sur **Éditer la fonction**. 

![Alt text](SLDWORKS_20230823_131648.png)

Modifiez la hauteur à 5mm, puis validez .

![Alt text](SLDWORKS_20230823_131832.png)
" 
image="SLDWORKS_20230823_131905.png" %}

{% include step-tuto.html 
greyBackground = false

title="MODIF 2 : Dimension des perçages"
content="De la même manière que précédemment, rentrez en mode édition sur l'esquisse des percages, et modifiez le diamètre du cercle à 4mm et l'écartement par rapport au centre à 16mm, puis validez.

![Alt text](SLDWORKS_20230823_132019.png)
" 
image="SLDWORKS_20230823_132056.png" %}

{% include step-tuto.html 
greyBackground = true

title="MODIF 3 : Nombre des perçages"
content="Éditez la fonction de répétition circulaire, puis modifiez le **Compteur d'instances** à 4 instances. Puis validez." 
image="SLDWORKS_20230823_132218.png" %}