---
layout: documentation
hide_hero: false
hero_image: uc.webp
hero_height: is-small
hero_darken: true
image: uc.webp
component_toc: true
doc_header: true

title: Vérification de la toolchain
subtitle: Installer la chaîne ESP32-S3 et valider ton premier flashage
description: Configurer PlatformIO pour l'ESP32-S3 et faire clignoter la LED embarquée, avant d'ajouter une LED externe.
author: Alban Petit

time: 2
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Installation de VSCode et PlatformIO
    link: /docs/tutorials/software/vscode-platformio/installation-vscode-platformio/

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Carte ESP32-S3 (breadboard)
    link: ""
  - label: Câble USB-C data (pas uniquement charge)
    link: ""

todo: 10
---

Ce tutoriel a pour but de vérifier que **chacun** a une chaîne de développement fonctionnelle avant d'attaquer la suite des aventures sur les microcontroleurs. Chaque TD suivant ajoutera un périphérique au même montage le câblage posé ici ne bougera plus.

{% include message.html title="À faire avant la séance" message="L'installation de PlatformIO (voir le prérequis ci-dessus) et du support ESP32 doit être terminée." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground=true
title="1 - Créer le projet PlatformIO"
content="Dans VSCode, ouvre l'onglet **PlatformIO** (icône fourmi dans la barre latérale) puis **New Project**.

Configure :

- **Name** : `pong-esp32`
- **Board** : `Espressif ESP32-S3-DevKitC-1 (N16R8)` (ou la référence exacte de ta carte)
- **Framework** : `Arduino`

PlatformIO génère un dossier avec un fichier `platformio.ini` et un dossier `src/` contenant `main.cpp`."
%}

```ini
; platformio.ini généré
[env:esp32-s3-devkitc-1]
platform = espressif32
board = esp32-s3-devkitc-1
framework = arduino
monitor_speed = 115200
```

{% include step-tuto.html
greyBackground=true
title="2 - Installer les drivers USB-série"
content="La carte communique avec l'ordinateur via une puce USB-série (CP2102 ou CH340 selon le modèle). Sans le bon driver, le port ne s'affiche pas dans la liste des ports disponibles.

- **Windows** : installer le driver du fabricant (Silicon Labs CP210x ou WCH CH340) si le **Gestionnaire de périphériques** affiche un point d'exclamation.
- **macOS / Linux** : généralement reconnu nativement ; sur Linux, ton utilisateur doit appartenir au groupe `dialout` pour accéder au port sans `sudo`."
%}

{% include step-tuto.html
greyBackground=true
title="3 - Flasher le blink de base"
content="Remplace le contenu de `src/main.cpp` par le code ci-dessous, puis clique sur **Upload** (flèche →) dans la barre bleue PlatformIO en bas de VSCode.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(500);
  digitalWrite(LED_BUILTIN, LOW);
  delay(500);
}
```" %}

{% include message.html title="Ça ne flashe pas ?" message="Si l'upload échoue avec une erreur de timeout, maintiens le bouton **BOOT** de la carte appuyé pendant les 2 premières secondes de l'upload (jusqu'à ce que la ligne `Writing at...` apparaisse), puis relâche." status="is-info" icon="fas fa-info-circle" %}

{% include step-tuto.html
greyBackground=true
title="4 - Validation individuelle"
content="La LED intégrée (`LED_BUILTIN`) doit clignoter à 1 Hz. **Montre ta carte qui clignote** avant de passer à la suite c'est la seule sortie attendue de ce TD1."
%}

## Bonus - LED externe sur breadboard

S'il te reste du temps, câble une LED externe avec sa résistance série. C'est la première brique **physique** du montage qui restera figée jusqu'au projet.

![BreadBoard](esp32-s3-blink.png)

Voci le code nécessaire pour le fonctionement de cette demonstration.

```cpp
#define LED_PIN 4

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(500);
  digitalWrite(LED_PIN, LOW);
  delay(500);
}
```

Le calcul de la résistance série est détaillé dans le concept [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/).

{% include message.html title="Rendez-vous au tutoriel suivant" message="Le prochain tutoriel réutilise cette même carte et ce même projet PlatformIO : garde ton câblage tel quel, tu ajouteras boutons et joystick sans rien démonter." status="is-success" icon="fas fa-check-circle" %}
