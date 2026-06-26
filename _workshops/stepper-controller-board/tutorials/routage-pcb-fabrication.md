---
layout: documentation
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
tag: stepper-controller-board

title: Routage du PCB et fabrication
subtitle: Router le PCB et commander les fichiers de fabrication
description: Assignez les empreintes, routez le PCB dans KiCad Pcbnew puis générez les fichiers Gerber pour la fabrication.

time: 6
difficulty: 3

author: Alban Petit
---

{% include step-tuto.html
greyBackground = true
title = "Étape 3.1 : Assignation des empreintes"
content="Objectif : Associer chaque composant à son empreinte physique.

**Tâches :**

- Ouvrir l'éditeur d'empreintes dans KiCad
- Assigner les footprints : ESP32, résistances/condensateurs 1206, borniers à vis
- Vérifier les dimensions des empreintes (comparer avec les datasheets) " %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3.2 : Routage PCB dans KiCad Pcbnew"
content="Objectif : Router le PCB en respectant les contraintes.

**Tâches :**

- Placer les composants : ESP32 au centre, drivers A4988 proches des connecteurs moteurs, SD et OLED en périphérie
- Placer les connecteurs limit switches sur un côté du PCB
- Router les pistes de puissance (VMOT, GND) en premier (largeur ≥ 1.5mm)
- Router les signaux critiques (SPI, I2C) avec pistes courtes
- Router les signaux limit switches vers les GPIOs
- Placer les découplages au plus près des ICs
- Ajouter un plan de masse (GND) sur la couche inférieure
- Lancer le DRC (Design Rules Check) et corriger les erreurs

**Livrables :** Fichier KiCad PCB (.kicad_pcb) dans votre projet machine that draws" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 3.3 : Génération des fichiers Gerber et commande"
content="Objectif : Générer les fichiers de fabrication et commander les PCB.

**Tâches :**

- Générer les fichiers Gerber + fichier de perçage (voir [tutoriel fabrication PCB](/docs/tutorials/software/kicad/kicad-fabrication-pcb/))
- Vérifier les fichiers avec un visualiseur Gerber (GerbView ou en ligne)
- Uploader l'ensemble des fichiers Kicad dans votre projet Machine that draws

**Livrables :** Archive des fichiers Gerber (.zip) dans votre projet machine that draws" %}
