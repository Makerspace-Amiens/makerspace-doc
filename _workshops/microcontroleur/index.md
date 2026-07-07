---
title: Microcontrôleurs
layout: project-home
permalink: /workshops/microcontroleur/
type: workshop
image: /assets/images/projects/uc.webp
project_slug: microcontroleur
project_image: /assets/images/projects/uc.webp
project_tags:
  - Électronique
  - Embarqué
  - ESP32
description: "Découvrir les microcontrôleurs de l'architecture jusqu'au projet multijoueur, avec l'ESP32-S3 et Arduino-ESP32."
subtitle: De l'architecture au jeu embarqué — ESP32-S3

concepts:
  - /workshops/microcontroleur/concepts/architecture-microcontroleur/
  - /workshops/microcontroleur/concepts/gpio-monde-numerique/
  - /workshops/microcontroleur/concepts/adc-pwm/
  - /workshops/microcontroleur/concepts/bus-communication/
  - /workshops/microcontroleur/concepts/du-materiel-au-logiciel/
  - /workshops/microcontroleur/concepts/machine-etats-finis/
  - /docs/concepts/capteurs/

tutorials:
  - /docs/tutorials/software/vscode-platformio/installation-vscode/
  - /docs/tutorials/software/vscode-platformio/installation-platformio/
  - /workshops/microcontroleur/tutorials/toolchain-blink/
  - /docs/tutorials/electronics/esp32-gpio/
  - /docs/tutorials/electronics/servomotor/
  - /workshops/microcontroleur/tutorials/entrees-boutons-joystick/
  - /workshops/microcontroleur/tutorials/td3-ecran-spi-game-loop/
  - /workshops/microcontroleur/tutorials/td4-collisions-fsm-pong/
  - /docs/tutorials/electronics/vscode-port-serie/
  - /docs/tutorials/electronics/esp32-ssd1306-oled/

how_to_guides:

hardware:

software:
  - /docs/references/software/arduino-ide/
  - /docs/references/software/platformIO/

ressources:
---

Bienvenue dans l'atelier **Microcontrôleurs** !

Cet atelier guide les étudiants depuis les concepts fondamentaux (architecture d'un µC, GPIO, ADC, bus série) jusqu'à la réalisation d'un mini-jeu embarqué multijoueur sur **ESP32-S3**. La progression suit trois phases : cours magistral (4,5h), travaux dirigés sur breadboard (10,5h) et projet en binômes (Snake multijoueur + PCB soudé).

## Ce que vous allez apprendre

- Comprendre l'architecture interne d'un microcontrôleur (CPU, mémoires, périphériques)
- Piloter des entrées/sorties numériques et analogiques (GPIO, ADC, PWM)
- Communiquer sur les bus série standards (UART, I2C, SPI)
- Structurer un programme embarqué avec une game loop et une machine à états (FSM)
- Concevoir un schéma électronique sous KiCad et souder un PCB

## Progression

| Phase | Volume | Résultat |
|---|---|---|
| CM | 4,5h | Carte mentale du µC : archi, GPIO, ADC/PWM, bus, chaîne de dev |
| TD | 10,5h | **Pong 2 joueurs** local sur ESP32-S3 + écran SPI |
| Projet | binômes | **Snake multijoueur** (console + navigateur) + PCB KiCad soudé |

## Fil conducteur pédagogique

Chaque notion est incarnée par une démo physique (LED, bouton, joystick affichant 0–4095 au projecteur). Un **schéma-bloc unique** (CPU / Flash / RAM / périphériques) est tracé dès le premier cours et ré-affiché à chaque chapitre en surlignant la brique du jour.

## Pourquoi ce projet ?

Le mini-jeu type Gameboy est le fil rouge de l'atelier : simple à comprendre, riche à implémenter. Les TD construisent progressivement **Pong** (un périphérique ajouté par séance) ; le projet introduit **Snake** sur une mécanique neuve, et ajoute le multijoueur asymétrique navigateur/console. La machine à états finis (FSM), découverte au TD4 pour gérer les écrans menu/partie/fin, prépare directement les états réseau du projet.
