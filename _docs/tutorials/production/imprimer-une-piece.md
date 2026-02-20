---
layout: documentation
image: Benchy+Logo.png  
hide_hero: true  
hero_image: Benchy+Logo.png  
hero_darken: true  
component_toc: true  
doc_header: true
type: doc,tutorial
tag: additive-manufacturing

title: Impression 3D avec OrcaSlicer  
subtitle: Comment imprimer sa pièce avec OrcaSlicer  
description: Dans ce tutoriel, vous apprendrez à imprimer votre première pièce en utilisant le logiciel OrcaSlicer.  
author: Rémi Lacombe

time: 3  
difficulty: 2  
compatibilities-os: win, mac, lin

softwares: 
  - label: OrcaSlicer  
    link: ""

todo: 100  
---

# Impression 3D d'une pièce

### Introduction

Ce **tutoriel d'initiation** vous guidera de l'**importation** de votre modèle jusqu'a la **fin de l'impression**, en vous aidant à éviter les erreurs courantes.

Avant de débuter ce tutoriel, nous supposons que votre pièce **a déjà été conçue et exportée** au format **.STL** ou **.3MF** depuis votre logiciel de CAO (OnShape, Solidworks, FreeCAD, Fusion 360...).

Si votre modèle n'est pas encore créé, rendez-vous sur la page [**tutoriels CAO**](/pages/tutoriels-cao).

Sinon, munissez-vous d'une clé USB sur laquelle vous mettrez votre fichier.

{% include step-tuto.html  
greyBackground = true  
image = "Etagere_Artillery.png"  
title="1 - Préparation et vérification"  
content="Vous vous trouvez maintenant au [**PrinterLab**](/pages/informations), un espace dédié à l'impression 3D au sein du MakerSpace. Vous y trouverez de nombreux modèles d'imprimantes, mais pas de panique, il suffit de suivre les étapes de ce tutoriel ;).

Nous nous concentrerons ici sur l'étagère de droite en entrant, c'est ici que votre pièce prendra forme !"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Dashboard_Repetier.png"  
content="Vérifiez le **moniteur du PC** à gauche de l'étagère, il devrait afficher le **tableau de bord** du serveur.

Si ce n'est pas le cas et que l'écran semble éteint, faites appel à un **fab manager**."  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Powered_Artillery.png"  
image_2 = "Spool.png"  
content="**Sélectionnez** la machine sur laquelle vous imprimerez votre pièce. Elle doit être **disponible** et **allumée**.

Vérifiez également que le **plateau d'impression** est **propre**, qu'il reste du **filament** et qu'il s'agit bien de **PLA** (bobines en bois).

En cas de bobine vide, suivez ce [**tutoriel**](/tutorials/3d-print/refill-bobine/) pour la recharger."  
%}

{% include message.html title="Conseil" message="Pour débuter, nous vous conseillons d'utiliser les [Artillery Genius Pro](/pages/machines/), numérotées de **A1** à **A6**" status="is-info" dismissable="true" icon="fas fa-duotone fa-cube" %}

{% include step-tuto.html  
greyBackground = true  
image = "Power_Button_Artillery.png"  
content="Si l'imprimante est éteinte, le bouton d'allumage se trouve à l'**arrière droite de la machine**."  
%}

{% include step-tuto.html  
greyBackground = true  
image = "USB_Port.png"
image_2 = "Landing_Page_Orca.png"
title="2 - Importation de votre pièce"  
content="Sur l'un des postes du PrinterLab, branchez votre clé dans l'embase USB devant l'écran.

Ouvrez le logiciel **OrcaSlicer** ![OrcaSlicer icon](Orca_Icon.png). OrcaSlicer est un logiciel de **tranchage** qui transforme les modèles 3D en instructions détaillées pour les imprimantes 3D.

Sur la page d'accueil, cliquez sur **New Project**.

![Nouveau Projet Orca](New_Project.png)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Empty_File.png"  
content="En haut du volet de gauche, dans le **menu déroulant Printer**, **sélectionnez la machine choisie plus tôt**.

![Choix imprimante](Printer_Choice_Menu.png)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Benchy_On_Plate.png"  
content="Dans le **ruban supérieur**, cliquez sur le bouton **Ajouter** ![Ajouter](Add_Part.png) et sélectionnez votre **pièce** dans l'**explorateur de fichiers**.

Après validation, votre modèle devrait **apparaître au centre du plateau.**"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Benchy_On_Plate_Close_Up.png"  
title="3 - Paramètres d'impression"  
content="Dans le menu déroulant **Filament** sur le panneau de gauche, sélectionnez **PLA - Rosa**.

![Menu filament](Filament_Choice_Menu.png)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Brim.png"  
content="Pour garantir l'adhérence de la pièce sur le plateau d'impression, rendez-vous sur le panneau **Others** dans le volet gauche.  
Dans le menu déroulant **Brim type**, sélectionnez **Inner brim only**.

![Menu bordure](Brim_Choice_Menu.png)

Augmentez ensuite la **largeur de la bordure** en passant le paramètre **Brim width** à **5 mm**.

Pour de très petites pièces, préférez une valeur proche de **10 mm**.

![Paramètre bordure](Brim_Param.png)"  
%}

{% include message.html title="Attention" message="Une imprimante ne peut imprimer dans le vide. Si votre pièce présente des surplombs importants, vous devrez cocher la case **Enable support** dans l'onglet **Support**. Si vous avez un doute, référez-vous à ce [**guide sur les supports en impression 3D**](https://all3dp.com/1/3d-printing-support-structures/) ou demandez conseil à un **fab manager**." status="is-warning" dismissable="true" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html  
greyBackground = true  
image = "Sliced_Benchy.png"  
content="Cliquez ensuite sur ![Slice plate](Slice_Plate.png) en haut à droite de la fenêtre.

Vous devriez maintenant voir votre **pièce tranchée** en couches. Le **temps d'impression** et la **matière consommée** s'affichent également sur le volet de droite.

![Temps et matière](Time_And_Material.png)

Vous pouvez visualiser le processus d'impression en utilisant le slider à droite.

![Simulation d'impression](Print_Slider.gif)"  
%}

{% include step-tuto.html  
greyBackground = true  
image = "Window.png"  
content="Avant de lancer l'impression, vérifiez que :  
- L'impression finira bien **avant l'heure de fermeture du MakerSpace** (consultez un **fab manager**).  
- La machine que vous avez choisie est **toujours disponible**.  
- Le plateau d'impression est **vide et propre**. Si ce n'est pas le cas, des **lingettes** et du produit de nettoyage sont à votre disposition sur le coté de la servante rouge.

![Nettoyage](Cleaning_Gear.png)

"

%}

{% include step-tuto.html  
greyBackground = true  
title="4 - Lancement de l'impression"  
image = "Window.png"  
content="Vous pouvez maintenant cliquer sur le bouton ![Imprimer](Print.png) en haut à droite de la fenêtre.

Le **programme machine** est envoyé à l'imprimante, et l'impression devrait **commencer**.

Après une phase de préchauffage et de calibration, l'imprimante réalise la **première couche**.

Pour garantir le **succès** de l'impression, il est crucial de contrôler que la matière **adhère** bien au plateau.

![En impression](Printing.gif)"
%}

{% include step-tuto.html  
greyBackground = true  
title="5 - Impression"  
image = "One_Eternity_Later.gif"  
content="Il faut maintenant laisser **l'imprimante faire son travail** !

Pour les longues impressions, il est important de vérifier régulièrement que tout se passe bien.

Si la **pièce se décolle** avant la fin ou qu'un **autre problème** survient, vous devrez **arrêter l'impression** depuis le **panneau de contrôle** du serveur :

![Stopper impression](Stop_Print.gif)
"
%}

{% include step-tuto.html  
greyBackground = true  
title="6 - Post-traitement"  
image = "Remove_Part.gif"  
content="Après un peu de patience, voici votre **impression terminée** ! 

Pour **retirer la pièce du plateau**, pas besoin de forcer ! Il suffit d'attendre que le plateau refroidisse.

Après quelques minutes, soulevez et courbez légèrement le plateau, **sans le retirer**.

Si la pièce ne se décroche pas, **attendez quelques minutes** que le plateau refroidisse davantage."
%}

{% include step-tuto.html  
greyBackground = true  
image = "Remove_Brim_And_Trash.gif"  
content="Retirez les **bordures** et **dépôts** de filament sur le plateau. Si vous avez activé l'option, **retirez également les supports**.

Jetez vos déchets dans la poubelle située à l'entrée du **PrinterLab**.

Assurez-vous de laisser votre espace de travail **propre** et **prêt** pour les prochains !"
%}

{% include step-tuto.html  
greyBackground = false  
image = "Benchy.png"  
content="Bravo ! Vous savez maintenant imprimer une pièce au **PrinterLab**.

Pour que ce lieu reste **ouvert à toutes et tous**, c'est maintenant à vous de **partager ce que vous avez** appris dans ce tuto !
"
%}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}