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

{% include step-tuto.html
greyBackground=true
title="1 - Mise en marche"
content="Pour mettre en marche la P3, activez l'interrupteur situé à l'arrière de la machine. Elle peut bouger brièvement pour se calibrer au démarrage, sans inquiétude : profitez-en pour préparer votre matériau ou charger votre fichier dans le logiciel xTool."
image="bouton-allumage.jpeg" %}

{% include step-tuto.html
greyBackground=false
title="2 - Charger un fichier"
content="![Nouveau projet](bouton-new-project.png)

Pendant que la machine s'allume, lancez le logiciel **xTool** et créez un nouveau projet (**New Project**, en haut à droite).

Vérifiez que la machine sélectionnée est bien la **xTool P3**, marquée comme connectée (et non la xTool F2 Ultra).

![Machine connectée](machine-connectee.png)

**Note :** si la P3 n'est pas sélectionnée, cliquez sur les flèches de changement de machine et choisissez la P3.

Importez ensuite un fichier `.svg` ou `.dxf` via le bouton **Import**.

![Bouton Import](bouton-import.png)
"
image="xtool-icon.png" %}

{% include step-tuto.html
greyBackground=true
title="3 - Afficher la zone de travail"
content="**Attendez que la P3 arrête de ventiler** avant de continuer, puis ouvrez le couvercle vitré. Vérifiez que les rails et barres de la zone de travail (surlignés en vert) sont **correctement positionnés**.

![Barres de la zone de travail](barres-zone-de-travail.png)

Posez votre matériau sur la zone de travail, **de préférence vers le milieu** plutôt qu'aux bords.

![Matériau sur la zone de travail](zone-de-travail-avec-materiau.jpeg)

Scannez la zone avec le bouton **Refresh background**, puis **refermez le couvercle**. Le logiciel affiche alors la zone réelle avec le matériau posé.

![Bouton Refresh background](bouton-refresh-background.png)

**Note :** si le scan est flou par endroits, refermez le couvercle, appuyez sur **Close shot** et sélectionnez la zone à re-photographier.

![Zone de travail scannée](zone-de-travail-scanee.png)
"
image="zone-de-travail.jpeg" %}

{% include step-tuto.html
greyBackground=false
title="4 - Organiser le fichier"
content="Placez votre fichier sur la grille de positionnement qui désigne le matériau.

![Fichier bien placé](fichier-bien-organise.png)

Une fois le couvercle refermé, calibrez la tête sur le point de travail : cliquez sur **Precise Measure** puis au centre de votre fichier. Le laser passera deux fois sur ce point (zone abaissée puis relevée)."
image="bouton-precise-measure-curseur.png" %}

{% include step-tuto.html
greyBackground=true
title="5 - Sélectionner le matériau"
content="Cliquez sur **Material** (par défaut « Unknown Material ») pour ouvrir la fenêtre de sélection.

Recherchez le matériau par nom ou épaisseur, puis affinez avec les catégories à gauche. Le plus simple : filtrer par épaisseur via la recherche, puis choisir le bon matériau via les catégories.

![Fenêtre de sélection des matériaux](fenetre-selection-materiaux.png)
"
image="bouton-material.png" %}

{% include message.html title="En cas de doute sur le matériau" message="Si vous doutez du matériau à sélectionner, demandez au personnel du MakerSpace : ne choisissez jamais un matériau au hasard." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground=false
title="6 - Gérer les process"
content="Un _process_ est une action sur un élément du fichier. Pour une partie sélectionnée, choisissez entre trois modes :

- **Score** : graver le contour de l'élément.
- **Engrave** : graver la surface entière.
- **Cut** : découper le matériau selon la forme.

Visualisez un aperçu (_preview_) de chaque process avec le bouton dédié.

![Aperçu des process](xtool-previews.gif)

**Note :** les previews Engrave et Cut sont interactifs : cliquez sur les différentes parties pour ajuster puissance et vitesse."
image="trois-modes-score-engrave-cut.png" %}

{% include step-tuto.html
greyBackground=true
title="7 - Lancer le job"
content="Vérifiez manuellement que chaque process utilise la bonne **puissance** et la bonne **vitesse**.

Appuyez sur **Preview** pour une simulation numérique du résultat : elle permet de repérer vite les erreurs de planification.

Si tout est correct, cliquez sur **Process** puis **Start** pour envoyer le job, puis appuyez sur le bouton à droite de la machine pour lancer le travail.

![Bouton Start](bouton-start.jpeg)
"
image="preview-projet.png" %}

{% include step-tuto.html
greyBackground=false
title="8 - Pendant le job"
content="Le logiciel affiche la vue de la caméra interne de la P3 ainsi que le temps restant estimé.

![Job en cours sur la P3](job-en-cours.gif)
"
image="vue-logiciel-pendant-job.png" %}

{% include message.html title="Surveillance obligatoire pendant le job" message="Restez devant la P3 pendant l'**intégralité** du job. Vérifier son bon déroulement est obligatoire pour éviter un départ d'incendie quand vous avez le dos tourné. Si vous devez vous éloigner, vous avez l'obligation de mettre la machine en pause avec le bouton qui sert à démarrer le job." status="is-danger" icon="fas fa-fire" %}

{% include step-tuto.html
greyBackground=true
title="9 - Après le job"
content="Une fois le job terminé, attendez **20 à 30 secondes** avant d'ouvrir le couvercle, le temps que **toutes les fumées soient extraites** par la ventilation. Récupérez ensuite vos pièces en toute sécurité.

N'oubliez pas d'**éteindre la machine** si personne ne l'utilise après vous."
image="job-termine.jpeg" %}
