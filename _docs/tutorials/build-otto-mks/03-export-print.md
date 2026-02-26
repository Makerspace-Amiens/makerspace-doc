---
layout: documentation
hide_hero: false
hero_image: print_head_green.gif
hero_darken: true
image: print_head_green.gif
component_toc: true
doc_header: true
type: tutorial
tag: otto-mks

title: 03 - Exportez et imprimez Otto !
subtitle: Exportez et imprimez les pièces d'Otto
description: Cette page détaille la structure du fichier d'assemblage, comment exporter une pièce et l'imprimer

author: Adrien BRACQ & Rémi LACOMBE

time: 3
difficulty: 2



---

Maintenant que vous avez dupliqué le fichier OTTO-MKS, vous devez exporter et imprimer les pièces suivantes dans les couleurs de votre choix :

{% include image-row.html 
image_1 = "Head.png" 
image_2 = "Body.png"
image_3 = "Leg.png" 
image_4 = "Feet.png"
%}

- 1x **Head**
- 1x **Body**  
- 2x **Leg**
- 1x **Left_Foot** & 1x **Right_Foot**

## Exporter une pièce depuis Onshape

Sélectionnez d'abord **l'onglet** contenant la pièce à exporter. Nous prendrons comme exemple la pièce **Head**.

{% include step-tuto.html 
greyBackground = false
image = "viewport.png"
title = "Sélectionnez la pièce sur le panneau inférieur du volet gauche"
content = "" %}

{% include step-tuto.html 
greyBackground = false
image = "right_click.png"
title = "Cliquez droit sur la pièce"
content = "" %}

{% include step-tuto.html 
greyBackground = false
image = "Export.png"
title = "Cliquez sur exporter et sélectionnez le format .STEP ou .3MF"
content = "" %}

{% include message.html 
title = "Information" 
message = "Le format **.STEP** est recommandé car il offre davantage de détails et permet d'exporter un assemblage contenant plusieurs pièces séparées en un seul fichier" 
status = "is-info" 
dismissable = "true" 
icon = "fas fa-exclamation" %}

{% include message.html title="Attention" message="Toutes les pièces s'impriment **sans support ni bordures**, vérifiez que ces paramètres sont bien désactivés dans OrcaSlicer." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html 
greyBackground = false
image = "printerlab.png"
title = "Impression"
content = "Copiez le fichier téléchargé sur une **clé USB**, rendez-vous au **PrinterLab** et suivez [ce tutoriel](https://makerspace-amiens.fr/fab-additive/docs/tutorials/imprimer-une-piece/)" %}

Pendant que vos pièces s'impriment, suivez attentivement les prochains tutoriels, à commencer par la **découverte de la carte électronique** ! [**04 - Découvrez la carte du Otto**](../../tutoriels/04-discover-otto-pcb/)

---

{%
  include card_collections.html
  title = "Pour aller plus loin"
  description = "Trouvez d'autres tutoriels en lien avec le projet"
  type = "tuto"
%}