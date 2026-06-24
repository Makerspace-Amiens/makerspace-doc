---
layout: documentation
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
type: tutorial
tag: stepper-controller-board

title: Prototypage et validation
subtitle: Valider le driver A4988 et l'écran OLED sur breadboard
description: Avant de dessiner le schéma électronique, validez le fonctionnement du driver A4988 et de l'écran OLED sur une breadboard.

time: 3
difficulty: 1

author: Alban Petit
---

Avant de passer à la conception du schéma électronique, il est essentiel de valider sur breadboard le fonctionnement des composants clés : le driver de moteur pas-à-pas et l'écran d'affichage.

{% include step-tuto.html
greyBackground = true
title = "Étape 1.1 : Test du driver A4988 sur breadboard"
content="Objectif : Valider le fonctionnement d'un driver A4988 avec un moteur NEMA 17.

[Tutoriel A4988](/docs/tutorials/electronics/a4988-stepper-driver/)

**Tâches :**

- Monter le circuit A4988 + ESP32 + moteur sur breadboard
- Régler le Vref pour un courant de 1A (voir [tutoriel A4988](/docs/tutorials/electronics/a4988-stepper-driver/))
- Tester le code de rotation simple (full step)
- Mesurer la consommation et la température du driver

**Livrables :** Photo du montage dans votre projet machine that draws" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 1.2 : Test de l'écran OLED (optionnel)"
content="Objectif : Afficher du texte et des graphiques sur l'OLED.

**Tâches :**

- Connecter l'écran OLED en I2C (voir [tutoriel SSD1306](/docs/tutorials/electronics/esp32-ssd1306-oled/))
- Afficher : nom du fichier, état, progression
- Créer un menu simple avec 2-3 options (Start, Stop)

**Livrables :** Documentation du prototypage (photos + code + résultats des tests) dans votre projet machine that draws" %}
