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

{% include step-tuto.html greyBackground=true title="1 - Repérer la face à découper" content="Identifiez la face de votre pièce qui servira de **plan de découpe**." image="Flat_Benchy.png" %}

{% include step-tuto.html greyBackground=false title="2 - Clic droit sur la face" content="Sélectionnez la face voulue et faites un **clic droit** dessus." image="Right_Click_On_Face.png" %}

{% include step-tuto.html greyBackground=true title="3 - Exporter en DXF" content="Cliquez sur **Export as DXF/DWG...**" image="Flat_Benchy_DXF.png" %}

{% include step-tuto.html greyBackground=false title="4 - Régler et valider l'export" content="Entrez un **nom de fichier cohérent**, choisissez **DXF** dans le menu **Format**, validez avec le bouton **Export**, puis placez le fichier sur votre **clé USB**." image="Export_Window.png" %}

{% include step-tuto.html greyBackground=true title="5 - Se rendre au MécaLab" content="La découpeuse laser se trouve au **fond à droite** du **MécaLab**, l'espace dédié à l'usinage, au perçage et à la découpe." image="LaserBox_Context.png" %}

{% include step-tuto.html greyBackground=false title="6 - Sortir le tuyau d'évacuation" content="**Ouvrez la fenêtre** et sortez le **tuyau d'évacuation des fumées**." image="Exhaust_Pipe.png" %}

{% include step-tuto.html greyBackground=true title="7 - Allumer la découpeuse" content="Allumez la découpeuse : l'interrupteur est à l'**arrière droite** de la machine." image="Power_Switch.png" %}

{% include step-tuto.html greyBackground=false title="8 - Allumer le PC" content="Si le **PC** est éteint, allumez-le avec le bouton à l'**arrière de l'écran**. Pour ouvrir la session, demandez à un **fab manager**." image="Power_Button_PC.png" %}

{% include step-tuto.html greyBackground=true title="9 - Choisir le matériau" content="Sur les étagères : contreplaqué **3 mm** (neuves à gauche, chutes à droite), contreplaqué **5 mm**, et **acrylique** en bas. Privilégiez une **chute** si elle convient. Ici, nous prenons du **contreplaqué 3 mm**." image="Material_Shelf.png" %}

{% include message.html title="Conseil" message="Pour tester un **assemblage**, commencez par un **prototype en carton** : cela permet de **valider vos dimensions** tout en **économisant de la matière**. Le carton se trouve sur le dessus de l'armoire." status="is-info" dismissable="true" icon="fas fa-lightbulb" %}

{% include step-tuto.html greyBackground=false title="10 - Placer la plaque" content="Ouvrez le **capot**, positionnez la plaque, puis refermez en **accompagnant la fermeture** jusqu'au bout." image="Plank_In_Laserbox.png" %}

{% include step-tuto.html greyBackground=true title="11 - Brancher la clé USB" content="Branchez votre **clé USB** dans l'embase devant l'écran." image="USB_Port.png" %}

{% include step-tuto.html greyBackground=false title="12 - Ouvrir Laserbox" content="Sur le PC, ouvrez le logiciel **Laserbox** depuis la barre des tâches. Le **menu d'accueil** s'affiche." image="Laserbox_Welcome.png" %}

{% include step-tuto.html greyBackground=true title="13 - Créer un projet" content="Cliquez sur le **+** pour créer un nouveau projet." image="New_Project.png" %}

{% include step-tuto.html greyBackground=false title="14 - Définir le format" content="Réglez le format de la page selon votre plaque." image="Benchy_Size_Box.png" %}

{% include step-tuto.html greyBackground=true title="15 - Importer le fichier" content="Cliquez sur **Importer** (en haut à gauche) et choisissez votre **fichier .DXF** dans l'explorateur." image="Folder_Import.png" %}

{% include step-tuto.html greyBackground=false title="16 - Voir le modèle importé" content="Votre modèle apparaît au milieu du plateau." image="New_Page.png" %}

{% include step-tuto.html greyBackground=true title="17 - Passer en mode surface plane" content="Cliquez sur le **mode surface plane**." image="Laserbox_Flat_Surface_Mode.png" %}

{% include step-tuto.html greyBackground=false title="18 - Vérifier l'aperçu caméra" content="Vous voyez maintenant l'**aperçu caméra** du plateau de découpe." image="Benchy_Trace.png" %}

{% include step-tuto.html greyBackground=true title="19 - Positionner le modèle" content="**Déplacez** votre modèle pour le **positionner sur votre plaque**." image="Move_Model.gif" %}

{% include step-tuto.html greyBackground=false title="20 - Sélectionner le matériau" content="Sélectionnez le **matériau** dans le volet déroulant en haut à gauche (voir le tableau des réglages ci-dessous)." image="Material_List.png" %}

| **Matériau** | **Réglage** |
|---|---|
| Carton | 3.5mm Carton |
| Contreplaqué 3mm | 3mm Tilleul |
| Contreplaqué 5mm | 5mm Tilleul |
| Acrylique 3mm | 3mm Acrylique |
| Acrylique 5mm | 5mm Acrylique |

{% include step-tuto.html greyBackground=true title="21 - Envoyer la découpe" content="Cliquez sur le **bouton démarrer** (en haut à droite)." image="Laserbox_Send_Button.png" %}

{% include step-tuto.html greyBackground=false title="22 - Valider l'envoi" content="Une **fenêtre de validation** s'ouvre : cliquez sur **Envoyer**." image="Laserbox_Validation.png" %}

{% include step-tuto.html greyBackground=true title="23 - Lancer sur la machine" content="Attendez le **BIP** sonore, puis appuyez sur le **bouton supérieur** de la découpeuse pour **lancer l'opération**." image="Cut_Button.png" %}

{% include step-tuto.html greyBackground=false title="24 - Découpe en cours" content="La découpe démarre. Restez attentif jusqu'à la fin de l'opération." image="Cutting.gif" %}

Bravo ! Vous savez maintenant **découper une pièce au laser**.

Pour que ce lieu reste **ouvert à toutes et tous**, c'est à vous de **partager ce que vous avez appris dans ce tuto** !
