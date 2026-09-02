---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: Bibliothèque Servo / ESP32Servo
subtitle: Piloter un servomoteur en position depuis le code
description: "Référence de la bibliothèque Servo (et ESP32Servo pour l'ESP32) : concepts, fonctions principales et différences entre les deux."
manufacturer:
  - name: ESP32Servo (Kevin Harrington & John K. Bennett)
    link: "https://madhephaestus.github.io/ESP32Servo/annotated.html"
author: Adrien BRACQ & Rémi LACOMBE
---

La bibliothèque **Servo** (et **ESP32Servo** pour les microcontrôleurs de type ESP32) permet de contrôler un servomoteur en générant automatiquement le signal **PWM** correspondant à un angle. Elle évite d'avoir à configurer manuellement les timers ou à écrire un code de génération d'impulsions.

{% include message.html
title="Comprendre le composant"
message="Cette page documente la **bibliothèque logicielle**. Pour le fonctionnement matériel d'un servomoteur (moteur, réducteur, signal, alimentation), voir la référence [Le Servomoteur](/docs/references/hardware/servomotor/)."
status="is-info"
icon="fas fa-info-circle" %}

## PWM et position

Le signal PWM est une impulsion électrique périodique dont la **largeur** détermine l'angle du servomoteur :

- Une impulsion de **1 ms** (~1000 µs) positionne le servo à **0°**.
- Une impulsion de **1,5 ms** (~1500 µs) le positionne au milieu (**90°**).
- Une impulsion de **2 ms** (~2000 µs) le positionne à **180°**.

Ces impulsions sont envoyées toutes les 20 ms (fréquence de 50 Hz). La bibliothèque génère ce signal à votre place à partir de l'angle demandé.

## Fonctions principales

### `Servo.attach(pin)`

Lie un servomoteur à une broche du microcontrôleur.

```cpp
Servo monServo;
monServo.attach(9); // Attache un servomoteur à la broche D9
```

### `Servo.write(angle)`

Positionne le servomoteur à un angle précis (entre 0° et 180°).

```cpp
monServo.write(90); // Place le servo à 90°
```

### `Servo.writeMicroseconds(value)`

Contrôle plus fin en envoyant directement une largeur d'impulsion (en microsecondes).

```cpp
monServo.writeMicroseconds(1500); // Impulsion pour 90° (position médiane)
```

### `Servo.detach()`

Déconnecte le servomoteur de la broche, libérant ainsi les ressources.

```cpp
monServo.detach(); // Libère la broche utilisée par le servomoteur
```

## Différences entre Servo (Arduino) et ESP32Servo

L'API est identique ; seule l'implémentation bas niveau change.

| | Servo (Arduino) | ESP32Servo |
|---|---|---|
| **Génération PWM** | Timers matériels intégrés | Module **LEDC** (PWM LED Controller), signaux stables |
| **Broches compatibles** | Broches PWM spécifiques uniquement | Presque toutes, sauf réservées (RX/TX, GPIO0…) |

{% include message.html
title="Passer à la pratique"
message="Pour installer la bibliothèque et écrire votre premier programme, suivez le tutoriel [Piloter un servomoteur avec Arduino](/docs/tutorials/electronics/servomotor/)."
status="is-success"
icon="fas fa-arrow-right" %}
