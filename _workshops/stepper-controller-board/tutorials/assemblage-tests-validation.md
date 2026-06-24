---
layout: documentation
hide_hero: false
hero_image: /workshops/stepper-controller-board/hero.png
hero_darken: true
image: /workshops/stepper-controller-board/hero.png
component_toc: true
type: tutorial
tag: stepper-controller-board

title: Assemblage, tests et validation
subtitle: Souder, tester et valider la carte assemblée
description: Soudez les composants, vérifiez les continuités puis validez le fonctionnement complet de la carte.

time: 3
difficulty: 2

author: Alban Petit
---

{% include step-tuto.html
greyBackground = true
title = "Étape 4.1 : Soudure des composants"
content="Objectif : Assembler la carte PCB.

**Tâches :**

- Souder les composants CMS en premier (résistances, condensateurs 1206)
- Souder les composants traversants (condensateurs électrolytiques, borniers, pin headers)
- Souder les connecteurs de modules (ESP32, A4988, OLED, socket SD)
- Inspecter visuellement toutes les soudures (pas de court-circuit, pas de soudure froide)

**Livrables :** Photos du PCB assemblé (recto + verso)" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4.2 : Tests de continuité et premier power-up"
content="Objectif : Vérifier l'absence de court-circuit avant la mise sous tension.

**Tâches :**

- Vérifier au multimètre : continuité GND, isolation 3.3V↔GND, isolation 5V↔GND, isolation VMOT↔GND
- Vérifier la polarité des condensateurs électrolytiques
- Alimenter VMOT (12V) avec une alimentation à courant limité (< 500mA)

**Livrables :** Rapport de tests (mesures électriques + photos)" %}

## Configuration PlatformIO

Pour programmer l'**ESP32 S3 UNO**, utilisez la configuration suivante dans votre fichier `platformio.ini` :

```ini
[env:esp32-s3-devkitc-1]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
```

{% include message.html
title="Configuration ESP32-S3"
message="L'**ESP32 S3 UNO** est basé sur la variante ESP32-S3 au format Arduino UNO. Il est important d'utiliser cette configuration spécifique dans PlatformIO, sinon l'upload et le fonctionnement ne seront pas garantis."
status="is-warning"
icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground = true
title = "Étape 4.3 : Tests fonctionnels et intégration"
content="Objectif : Valider le fonctionnement complet de la carte.

**Tâches :**

- Créer un projet PlatformIO avec la configuration ESP32-S3-DevKitC-1 (voir section Configuration PlatformIO ci-dessus)
- Uploader le firmware de test (blink, scan I2C, test SD)
- Vérifier l'affichage OLED (adresse I2C détectée : 0x3C)
- Vérifier la détection de la carte SD
- Tester la rotation d'un moteur avec le driver A4988
- Tester les 2 moteurs simultanément
- Tester les 2 limit switches (lecture GPIO, détection appui)

**Livrables :** PCB fonctionnel + vidéo de démonstration + documentation technique complète (README, schémas, BOM, code source)" %}
