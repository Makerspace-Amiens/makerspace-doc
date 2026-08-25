---
layout: documentation
hide_hero: false
hero_image: Icon.png
hero_darken: true
image: Icon.png
component_toc: true
doc_header: true
tags: medieval-challenge
type: tutorial

title: Découper au laser - MakeBlock et LaserBox
subtitle: Comment découper sa première pièce au laser
description: Dans ce tutoriel, vous apprendrez à découper votre première pièce en utilisant le logiciel LaserBox.

time: 2
difficulty: 1

softwares:
  - label: OnShape
    link: "https://cad.onshape.com"
  - label: LaserBox
    link: "https://support.makeblock.com/hc/en-us/articles/25439631937687-Use-Laserbox-Software"

author: Adrien BRACQ
---

## Introduction

Ce **tutoriel d'initiation** vous guidera de l'**exportation** de votre modèle depuis **OnShape** jusqu'à la **fin de la découpe**, en vous aidant à éviter les erreurs courantes.

Si votre modèle n'est pas encore créé, rendez-vous sur la page [**tutoriels CAO**](/tutorials/).

Contrairement à l'**impression 3D**, la **découpe laser** travaille sur un seul plan, permettant de découper et graver des formes dans des plaques en brûlant de la matière.

Dans les premières étapes de ce tutoriel, vous apprendrez à **exporter votre plan de découpe** depuis **OnShape**.

Si vous avez déjà un fichier **.DXF** ou **.SVG**, rendez-vous à l'**étape 2**.

{% include message.html title="Contraintes dimensionnelles" message="**Dans votre conception**, n'oubliez pas de prendre en compte la **surface de découpe maximale** : **49cm x 29cm**." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html greyBackground=true title="1 - Exportation du plan" content="Pour découper une plaque au laser, il vous faut extraire **une des faces de votre pièce** qui servira de **plan de découpe**." image="Flat_Benchy.png" %}

Sélectionnez la face et **clique droit** sur cette dernière.

![Clic droit sur face](Right_Click_On_Face.png)

Cliquez ensuite sur **Export as DXF/DWG...**

![](Flat_Benchy_DXF.png)

Dans la nouvelle fenêtre, entrez un **nom de fichier cohérent**.

Sélectionnez **DXF** dans le menu déroulant **Format**.

![Fenêtre d'exportation](Export_Window.png)

Cliquez finalement sur le **bouton** ![Bouton Export](Export_Button.png)

Placez ensuite le fichier téléchargé dans votre **clé USB**.

{% include step-tuto.html greyBackground=true title="2 - Préparation et vérification" content="Rendez-vous maintenant au **MécaLab**. Cet espace est dédié à l'**usinage**, **perçage** et **découpe** de divers matériaux." image="LaserBox_Context.png" %}

La **découpeuse laser** se trouve au **fond à droite de la pièce**.

![](Exhaust_Pipe.png)

**Ouvrez la fenêtre** et faites sortir le **tuyau d'évacuation des fumées**.

![](Power_Switch.png)

**Allumez** ensuite la **découpeuse laser**.

Le **bouton** se trouve à l'**arrière droite** de la machine.

![](Power_Button_PC.png)

Si le **PC** est éteint, allumez-le grâce au **bouton** à l'**arrière de l'écran**.

Pour ouvrir la session, demandez à un **fab manager**.

{% include message.html title="Conseil" message="Pour tester un **assemblage**, nous vous conseillons de commencer par un **prototype en carton**. Cela vous permettra de **tester vos dimensions** tout en **économisant de la matière**. Le carton se trouve sur le dessus de l'armoire." status="is-info" dismissable="true" icon="fas fa-lightbulb" %}

![](Material_Shelf.png)

Sélectionnez ensuite votre matériau :

La **première étagère** est réservée au **contreplaqué de 3mm** : à gauche, les **plaques neuves**, et à droite **les chutes**.

De même pour la **deuxième étagère**, pour le **contreplaqué de 5mm**.

En bas se trouvent les plaques en acrylique.

Commencez par **vérifier si une des chutes** pourrait convenir à votre découpe ; si non, prenez une **plaque neuve**.

Nous choisissons ici du **contreplaqué 3mm**.

![](Plank_In_Laserbox.png)

Ouvrez le **capot** de la découpeuse et **positionnez la plaque** que vous avez choisie.

Fermez le capot en **accompagnant la fermeture** jusqu'au bout.

![](USB_Port.png)

Branchez ensuite votre **clé** dans l'**embase USB** devant l'écran.

Sur le PC, ouvrez le logiciel **Laserbox**, présent dans la **barre des tâches**. ![Icon Laserbox](Laserbox_Icon.png)

![](Laserbox_Welcome.png)

Le **menu d'accueil** s'ouvre. Cliquez sur le **+** pour créer un nouveau projet.
![Page d'accueil](New_Project.png)

![](Benchy_Size_Box.png)

Une **page vide** s'affiche maintenant, **cliquez sur importer** ![Importer](Folder_Import.png), en **haut à gauche**.

Choisissez votre **fichier .DXF** dans l'**explorateur de fichiers** pour l'**importer**.

Votre **modèle** apparaît au milieu du plateau.

![Benchy sur nouvelle page](New_Page.png)

**Cliquez** ensuite sur ![Mode surface plane](Laserbox_Flat_Surface_Mode.png)

![](Benchy_Trace.png)

Vous voyez maintenant l'**aperçu caméra** du **plateau de découpe**.

**Déplacez** votre modèle pour le **positionner sur votre plaque**.

![Déplacer modèle](Move_Model.gif)

![](Material_List.png)

**Sélectionnez** ensuite le **matériau** dans le volet déroulant **en haut à gauche**.

Voici la **liste des matériaux** et du **nom du réglage** à choisir :

| **Matériau**               | **Réglage**       |
|-----------------------------|--------------------|
| Carton                     | 3.5mm Carton      |
| Contreplaqué 3mm           | 3mm Tilleul       |
| Contreplaqué 5mm           | 5mm Tilleul       |
| Acrylique 3mm               | 3mm Acrylique     |
| Acrylique 5mm               | 5mm Acrylique     |

{% include step-tuto.html greyBackground=true title="3 - Découpe" content="Envoyez la découpe depuis Laserbox, puis lancez l'opération sur la machine." image="Laserbox_Validation.png" %}

Vous pouvez maintenant **envoyer la découpe** en cliquant sur le **bouton démarrer** ![Bouton démarrer](Laserbox_Send_Button.png) **en haut à droite**.

Une **fenêtre de validation** s'ouvre, **cliquez sur** ![Envoyer](Laserbox_Send.png).

![](Cut_Button.png)

Attendez le **BIP** sonore et **appuyez** finalement sur le **bouton supérieur** de la découpeuse pour **lancer l'opération**.

![Découpe](Cutting.gif)

Bravo ! Vous savez maintenant **découper une pièce au laser** !

Pour que ce lieu reste **ouvert à toutes et tous**, c'est maintenant à vous de **partager ce que vous avez appris dans ce tuto** !
