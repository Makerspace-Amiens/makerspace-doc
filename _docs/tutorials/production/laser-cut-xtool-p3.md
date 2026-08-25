---
layout: documentation
hide_hero: false
hero_image: premiere_utilisation.jpg
hero_height: is-small
hero_darken: true
image: premiere_utilisation.jpg
component_toc: true
doc_header: true
type: tutorial

title: Découper au laser - xTool P3
subtitle: Utiliser la découpeuse xTool P3 et le logiciel xTool
description: "Prendre en main la découpeuse laser xTool P3 : mise en marche, préparation du matériau, sélection, gestion des process et sécurité."
author: Raphael Peru

time: 1
difficulty: 1

softwares:
  - label: xTool Creative Space
    link: "https://www.xtool.com/pages/software"

hardwares:
  - label: xTool P3
    link: /docs/references/machines/xtool-p3/

todo: 80
---

Ce tutoriel explique comment utiliser la découpeuse laser **xTool P3** et son logiciel, de la mise en marche jusqu'à la récupération des pièces, en respectant les consignes de sécurité.

{% include safety-banner.html machine="xTool P3" link="/docs/references/machines/xtool-p3/#sécurité" %}

{% include step-tuto.html greyBackground=true title="1 - Mettre en marche" content="Activez l'interrupteur situé à l'arrière de la machine. La P3 peut bouger brièvement pour se calibrer au démarrage, sans inquiétude." image="bouton-allumage.jpeg" %}

{% include step-tuto.html greyBackground=false title="2 - Lancer le logiciel xTool" content="Pendant que la machine s'allume, lancez le logiciel **xTool** sur le PC." image="xtool-icon.png" %}

{% include step-tuto.html greyBackground=true title="3 - Créer un nouveau projet" content="Dans xTool, cliquez sur **New Project** (en haut à droite) pour ouvrir un nouveau projet." image="bouton-new-project.png" %}

{% include step-tuto.html greyBackground=false title="4 - Vérifier la machine" content="Vérifiez que la machine sélectionnée est bien la **xTool P3**, marquée comme connectée (et non la xTool F2 Ultra). Si ce n'est pas le cas, cliquez sur les flèches de changement de machine et choisissez la P3." image="machine-connectee.png" %}

{% include step-tuto.html greyBackground=true title="5 - Importer le fichier" content="Importez votre fichier `.svg` ou `.dxf` via le bouton **Import**." image="bouton-import.png" %}

{% include step-tuto.html greyBackground=false title="6 - Ouvrir le couvercle" content="**Attendez que la P3 arrête de ventiler**, puis ouvrez le couvercle vitré de la machine." image="zone-de-travail.jpeg" %}

{% include step-tuto.html greyBackground=true title="7 - Vérifier les rails et barres" content="Vérifiez que les rails et barres de la zone de travail (surlignés en vert) sont **correctement positionnés**." image="barres-zone-de-travail.png" %}

{% include step-tuto.html greyBackground=false title="8 - Poser le matériau" content="Posez votre matériau sur la zone de travail, **de préférence vers le milieu** plutôt qu'aux bords." image="zone-de-travail-avec-materiau.jpeg" %}

{% include step-tuto.html greyBackground=true title="9 - Scanner la zone" content="Refermez le couvercle, puis scannez la zone de travail avec le bouton **Refresh background**." image="bouton-refresh-background.png" %}

{% include step-tuto.html greyBackground=false title="10 - Vérifier le scan" content="Le logiciel affiche la zone réelle avec le matériau posé. Si le scan est flou par endroits, utilisez **Close shot** pour re-photographier une zone précise." image="zone-de-travail-scanee.png" %}

{% include step-tuto.html greyBackground=true title="11 - Positionner le fichier" content="Placez votre fichier sur la grille de positionnement qui désigne le matériau." image="fichier-bien-organise.png" %}

{% include step-tuto.html greyBackground=false title="12 - Calibrer la tête" content="Couvercle fermé, cliquez sur **Precise Measure** puis au centre de votre fichier. Le laser passera deux fois sur ce point (zone abaissée puis relevée)." image="bouton-precise-measure-curseur.png" %}

{% include step-tuto.html greyBackground=true title="13 - Ouvrir la sélection du matériau" content="Cliquez sur **Material** (par défaut « Unknown Material ») pour ouvrir la fenêtre de sélection." image="bouton-material.png" %}

{% include step-tuto.html greyBackground=false title="14 - Choisir le matériau" content="Recherchez le matériau par nom ou épaisseur, puis affinez avec les catégories à gauche." image="fenetre-selection-materiaux.png" %}

{% include message.html title="En cas de doute sur le matériau" message="Si vous doutez du matériau à sélectionner, demandez au personnel du MakerSpace : ne choisissez jamais un matériau au hasard." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html greyBackground=true title="15 - Choisir le mode" content="Un _process_ est une action sur un élément du fichier. Choisissez entre **Score** (graver le contour), **Engrave** (graver la surface) ou **Cut** (découper)." image="trois-modes-score-engrave-cut.png" %}

{% include step-tuto.html greyBackground=false title="16 - Prévisualiser les process" content="Visualisez un aperçu de chaque process. Les previews Engrave et Cut sont **interactifs** : cliquez sur les différentes parties pour ajuster puissance et vitesse." image="xtool-previews.gif" %}

{% include step-tuto.html greyBackground=true title="17 - Simuler le résultat" content="Vérifiez la **puissance** et la **vitesse** de chaque process, puis cliquez sur **Preview** pour obtenir une simulation du résultat final et repérer les erreurs." image="preview-projet.png" %}

{% include step-tuto.html greyBackground=false title="18 - Lancer le job" content="Cliquez sur **Process** puis **Start** pour envoyer le job, puis appuyez sur le bouton à droite de la machine pour lancer le travail." image="bouton-start.jpeg" %}

{% include message.html title="Surveillance obligatoire pendant le job" message="Restez devant la P3 pendant l'**intégralité** du job. Vérifier son bon déroulement est obligatoire pour éviter un départ d'incendie quand vous avez le dos tourné. Si vous devez vous éloigner, vous avez l'obligation de mettre la machine en pause avec le bouton qui sert à démarrer le job." status="is-danger" icon="fas fa-fire" %}

{% include step-tuto.html greyBackground=true title="19 - Suivre le job" content="Le logiciel affiche la vue de la caméra interne de la P3 ainsi que le temps restant estimé." image="vue-logiciel-pendant-job.png" %}

{% include step-tuto.html greyBackground=false title="20 - Job en cours" content="La tête parcourt le tracé et découpe ou grave le matériau. Restez attentif jusqu'à la fin." image="job-en-cours.gif" %}

{% include step-tuto.html greyBackground=true title="21 - Après le job" content="Attendez **20 à 30 secondes** avant d'ouvrir le couvercle, le temps que **toutes les fumées soient extraites**, puis récupérez vos pièces en toute sécurité. N'oubliez pas d'**éteindre la machine** si personne ne l'utilise après vous." image="job-termine.jpeg" %}
