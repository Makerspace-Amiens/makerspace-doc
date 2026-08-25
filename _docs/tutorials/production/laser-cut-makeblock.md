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

Contrairement à l'**impression 3D**, la **découpe laser** travaille sur un seul plan, permettant de découper et graver des formes dans des plaques en brûlant de la matière. Si vous avez déjà un fichier **.DXF** ou **.SVG**, passez directement à l'allumage de la machine.

{% include message.html title="Contraintes dimensionnelles" message="**Dans votre conception**, n'oubliez pas de prendre en compte la **surface de découpe maximale** : **49 cm x 29 cm**." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html
greyBackground=true
title="1 - Exporter le plan de découpe"
content="Pour découper une plaque au laser, il faut extraire **une des faces de votre pièce** qui servira de **plan de découpe**.

Sélectionnez la face voulue et faites un **clic droit** dessus.

![Clic droit sur une face](Right_Click_On_Face.png)

Cliquez sur **Export as DXF/DWG...**

![Menu d'export DXF](Flat_Benchy_DXF.png)

Dans la fenêtre, entrez un **nom de fichier cohérent**, choisissez **DXF** dans le menu **Format**, puis validez avec le bouton **Export**.

![Fenêtre d'exportation](Export_Window.png)

Placez enfin le fichier téléchargé sur votre **clé USB**."
image="Flat_Benchy.png" %}

{% include step-tuto.html
greyBackground=false
title="2 - Allumer la découpeuse"
content="Rendez-vous au **MécaLab**, l'espace dédié à l'**usinage**, au **perçage** et à la **découpe**. La découpeuse laser se trouve au **fond à droite** de la pièce.

**Ouvrez la fenêtre** et sortez le **tuyau d'évacuation des fumées**.

![Tuyau d'évacuation des fumées](Exhaust_Pipe.png)

**Allumez** la découpeuse : l'interrupteur est à l'**arrière droite** de la machine.

![Interrupteur de la découpeuse](Power_Switch.png)

Si le **PC** est éteint, allumez-le avec le bouton à l'**arrière de l'écran**. Pour ouvrir la session, demandez à un **fab manager**.

![Bouton d'allumage du PC](Power_Button_PC.png)"
image="LaserBox_Context.png" %}

{% include step-tuto.html
greyBackground=true
title="3 - Choisir et placer le matériau"
content="Sélectionnez votre matériau sur les étagères :

- **1re étagère** : contreplaqué **3 mm** (plaques neuves à gauche, chutes à droite).
- **2e étagère** : contreplaqué **5 mm**.
- **En bas** : plaques en acrylique.

Vérifiez d'abord si une **chute** convient ; sinon, prenez une **plaque neuve**. Ici, nous prenons du **contreplaqué 3 mm**.

![Plaque dans la LaserBox](Plank_In_Laserbox.png)

Ouvrez le **capot**, positionnez la plaque, puis refermez en **accompagnant la fermeture** jusqu'au bout. Branchez enfin votre **clé USB** dans l'embase devant l'écran.

![Port USB](USB_Port.png)"
image="Material_Shelf.png" %}

{% include message.html title="Conseil" message="Pour tester un **assemblage**, commencez par un **prototype en carton** : cela permet de **valider vos dimensions** tout en **économisant de la matière**. Le carton se trouve sur le dessus de l'armoire." status="is-info" dismissable="true" icon="fas fa-lightbulb" %}

{% include step-tuto.html
greyBackground=false
title="4 - Créer le projet dans LaserBox"
content="Sur le PC, ouvrez le logiciel **Laserbox** depuis la barre des tâches.

![Icône Laserbox](Laserbox_Icon.png)

Dans le menu d'accueil, cliquez sur le **+** pour créer un nouveau projet.

![Créer un nouveau projet](New_Project.png)

![Format de la page](Benchy_Size_Box.png)

Sur la page vide, cliquez sur **Importer** (en haut à gauche) et choisissez votre **fichier .DXF**.

![Bouton Importer](Folder_Import.png)

Votre modèle apparaît alors au milieu du plateau.

![Modèle importé](New_Page.png)"
image="Laserbox_Welcome.png" %}

{% include step-tuto.html
greyBackground=true
title="5 - Positionner et régler le matériau"
content="Cliquez sur le **mode surface plane**.

![Mode surface plane](Laserbox_Flat_Surface_Mode.png)

Vous voyez maintenant l'**aperçu caméra** du plateau. **Déplacez** votre modèle pour le **positionner sur la plaque**.

![Déplacer le modèle](Move_Model.gif)

Sélectionnez ensuite le **matériau** dans le volet déroulant en haut à gauche (voir le tableau des réglages ci-dessous).

![Liste des matériaux](Material_List.png)"
image="Benchy_Trace.png" %}

| **Matériau** | **Réglage** |
|---|---|
| Carton | 3.5mm Carton |
| Contreplaqué 3mm | 3mm Tilleul |
| Contreplaqué 5mm | 5mm Tilleul |
| Acrylique 3mm | 3mm Acrylique |
| Acrylique 5mm | 5mm Acrylique |

{% include step-tuto.html
greyBackground=false
title="6 - Lancer la découpe"
content="Envoyez la découpe avec le **bouton démarrer** (en haut à droite).

![Bouton démarrer](Laserbox_Send_Button.png)

Une **fenêtre de validation** s'ouvre : cliquez sur **Envoyer**.

![Fenêtre d'envoi](Laserbox_Send.png)

![Bouton de découpe](Cut_Button.png)

Attendez le **BIP** sonore, puis appuyez sur le **bouton supérieur** de la découpeuse pour **lancer l'opération**.

![Découpe en cours](Cutting.gif)"
image="Laserbox_Validation.png" %}

Bravo ! Vous savez maintenant **découper une pièce au laser**.

Pour que ce lieu reste **ouvert à toutes et tous**, c'est à vous de **partager ce que vous avez appris dans ce tuto** !
