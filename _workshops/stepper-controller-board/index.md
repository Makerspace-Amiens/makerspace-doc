---
title: Carte contrôleur Machine That Draws
layout: project-home
permalink: /workshops/stepper-controller-board/
type: workshop
image: /workshops/stepper-controller-board/hero.png
project_slug: stepper-controller-board
project_image: /workshops/stepper-controller-board/hero.png
project_tags:
  - Électronique
  - KiCad
  - ESP32
description: "Concevez et fabriquez une carte électronique dédiée pour piloter les moteurs pas-à-pas de votre Machine that draws, avec ESP32, lecteur SD et écran OLED."
author: Alban Petit

tutorials:
  - /docs/tutorials/software/kicad/installation-kicad/
  - /docs/tutorials/software/vscode-platformio/installation-vscode-platformio/
  - /docs/tutorials/electronics/a4988-stepper-driver/
  - /workshops/stepper-controller-board/tutorials/prototypage-validation/
  - /docs/tutorials/software/kicad/kicad-import-librairies/
  - /docs/tutorials/software/kicad/kicad-eeschema-bases/
  - /workshops/stepper-controller-board/tutorials/conception-schema-kicad/
  - /docs/tutorials/software/kicad/kicad-pcbnew-bases/
  - /docs/tutorials/software/kicad/kicad-fabrication-pcb/
  - /workshops/stepper-controller-board/tutorials/routage-pcb-fabrication/
  - /workshops/stepper-controller-board/tutorials/assemblage-tests-validation/
hardware:
  - /docs/references/hardware/driver/
  - /docs/references/hardware/stepper/
software:
  - /docs/references/software/platformIO/
---

## Contexte

Ce projet s'inscrit dans la continuité du projet **Machine that draws** que vous avez réalisé précédemment. L'objectif est de concevoir et fabriquer une **carte électronique dédiée** pour remplacer le contrôleur de drivers.

La carte intégrera :

- **ESP32** comme microcontrôleur principal
- **2 drivers A4988** pour piloter les moteurs pas-à-pas X et Y
- **Lecteur de carte SD** pour stocker les fichiers G-code ou dessins
- **Écran OLED** pour afficher l'état, les menus et la progression
- **Connecteurs** pour moteurs, alimentation et extension
- Gestion des **alimentations**

## Objectifs pédagogiques

À l'issue de ce projet, vous serez capables de :

- Concevoir un **schéma électronique complet** avec KiCad
- Réaliser le **routage d'un PCB multicouche**
- Intégrer des **bus de communication** (I2C, SPI) sur un même PCB
- Gérer les **contraintes de puissance** (découplage, largeur de pistes)
- Souder des **composants CMS et traversants**
- Déboguer une carte électronique et valider son fonctionnement
- Documenter un projet technique de A à Z

{% include message.html
title="Projet en groupe"
message="Ce projet se réalise avec les mêmes équipes que le projet Machine that draws. Organisez-vous pour répartir les tâches : conception schématique, routage PCB, firmware, tests et documentation. La collaboration est essentielle à la réussite du projet."
status="is-info"
icon="fas fa-users" %}

## Cahier des charges

### Spécifications fonctionnelles

La carte doit permettre de :

1. **Piloter 2 moteurs pas-à-pas** (axes X et Y) via drivers A4988

2. **Stocker des fichiers** sur carte SD (optionnel)
   - Log des actions effectuées lors du fonctionnement de la solution
   - Format FAT32
   - Détection d'insertion de carte (optionnel)
   - Lancement de fichier G-code (optionnel)

3. **Afficher des informations** sur écran OLED (optionnel)
   - État de la machine (idle, running, error)
   - Progression (pourcentage, ligne en cours)
   - Menus de navigation (optionnel)

4. **Détecter les fins de course** via limit switches
   - 4 capteurs mécaniques (X min, X max, Y min, Y max)
   - Référencement automatique des axes (homing)
   - Protection contre les déplacements hors limites

### Spécifications techniques

| Paramètre | Valeur | Remarques |
| ----------- | -------- | ----------- |
| **Alimentation moteurs** | 12V ou 24V DC | Alimentation externe pour moteurs |
| **Alimentation servomoteur et ESP32** | 5V | Fournie par le régulateur R-78E5.0-1.0 |
| **Logique** | 3.3V | Fournie par le régulateur de la carte ESP32 |
| **Courant moteurs** | 0.5A à 1.5A par phase | Réglable via Vref |
| **Interface I2C** | SDA=GPIO8, SCL=GPIO9 | Écran OLED |
| **Interface SPI** | SPI2 (GPIO 18/19/11/5) | Carte SD |
| **GPIOs fins de course** | GPIO 1, 2, 3, 4 | Limit switches |
| **Microcontrôleur** | ESP32 S3 UNO | Board : esp32-s3-devkitc-1 |
| **Dimensions PCB** | Format shield arduino uno | Pour faciliter l'intégration avec l'ESP32 format Arduino UNO |
| **Connecteurs** | Screw terminals | Bouton arrêt urgence |
| **Connecteurs** | Barrel Jack | Alimentation |
| **LEDs** | SMD 1206 | Témoins d'alimentation |

## Bill of Materials (BOM)

### Composants principaux

| Désignation | Référence | Quantité | Remarques |
| ------------- | ----------- | ---------- | ----------- |
| ESP32 S3 UNO | ESP32 S3 UNO | 1 | - |
| Driver A4988 (module) | StepStick compatible | 2 | - |
| Écran OLED 0.96" I2C | SSD1306 128×64 | 1 | - |
| Socket SD push-push | - | 1 | - |
| Moteur NEMA 17 | - | 2 | - |
| Régulateur 5V | R-78E5.0-1.0 | 1 | - |
| Limit switches (fins de course) | Microswitch mécanique | 2 | X min, X max, Y min, Y max |

### Composants passifs

| Désignation | Valeur | Package | Quantité | Remarques |
| ------------- | -------- | --------- | ---------- | ----------- |
| Condensateur céramique | 100nF | 1206 SMD | 10 | Découplage |
| Condensateur électrolytique | 100µF 35V | Radial | 2 | Alimentation moteurs |
| Condensateur céramique | 10µF | 1206 SMD | - | Découplage VDD |
| Résistance pull-up | 10kΩ | 1206 SMD | - | I2C (SDA, SCL), SD (CS, MISO) |

### Connecteurs

| Désignation | Type | Quantité | Remarques |
| ------------- | ------ | ---------- | ----------- |
| Connecteur alimentation | Barrel Jack | 1 | VMOT (12-24V) + GND |
| Bouton arrêt urgence | Bornier à vis 2 pôles (5mm) | 1 | - |
| Connecteur limit switches | Pin header femelle (2.54mm) 3 pôles | 2 | Signal, GND, 3.3V |
| Pin headers mâle | Header (2.54mm) | 2 | 1A, 1B, 2A, 2B |
| Pin headers mâle | Header (2.54mm) | - | Connexion ESP32 |

## Planning prévisionnel

Le projet se déroule sur **8 séances de 3 heures** (24h au total) réparties sur plusieurs semaines.

| Séance | Durée | Contenu | Description |
| -------- | ------- | --------- | -------- |
| **1** | 3h | **Prototypage** | - |
| **2** | 3h | **Conception schématique** | - |
| **3** | 3h | **Routage PCB (1/2)** | Routage des éléments importants : drivers moteurs et régulation |
| **4** | 3h | **Routage PCB (2/2)** | Routage des éléments secondaires : écran et carte SD |
| **5** | 3h | **Assemblage** | - |
| **6** | 3h | **Développement logiciel** | - |
| **7** | 3h | **Correctifs finaux** | - |
| **8** | 3h | **Validation finale et documentation** | - |
