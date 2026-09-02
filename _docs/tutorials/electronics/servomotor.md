---
layout: documentation
hide_hero: false
hero_image: image.png
hero_height: is-small
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: tutorial

title: Piloter un servomoteur avec Arduino
subtitle: Installer la bibliothèque puis commander un servo en position
description: Installer la bibliothèque ESP32Servo puis piloter un ou plusieurs servomoteurs en position, avec l'Arduino IDE ou PlatformIO.
author: Adrien BRACQ & Rémi LACOMBE

time: 3
difficulty: 2
compatibilities-os: win, mac, lin

prerequisites:
  - label: Démarrer avec Arduino !
    link: /workshops/otto-mks/tutorials/discover-arduino/
  - label: Découvrez la carte du Otto !
    link: /workshops/otto-mks/tutorials/discover-otto-pcb/

softwares:
  - label: Arduino IDE
    link: /docs/references/software/arduino-ide/
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/
  - label: Bibliothèque Servo / ESP32Servo
    link: /docs/references/software/servo-library/

hardwares:
  - label: XIAO ESP32
    link: /docs/references/hardware/reference-xiao/
  - label: Servomoteur
    link: /docs/references/hardware/servomotor/
---

Dans ce tutoriel, vous allez **installer la bibliothèque** puis **piloter un servomoteur en position** depuis l'Arduino IDE ou PlatformIO.

{% include message.html
title="Avant de commencer"
message="Pour comprendre **comment fonctionne** un servomoteur (moteur, signal PWM, alimentation), consultez la référence [Le Servomoteur](/docs/references/hardware/servomotor/). Le détail des fonctions de code est regroupé dans la référence [Bibliothèque Servo / ESP32Servo](/docs/references/software/servo-library/)."
status="is-info"
icon="fas fa-info-circle" %}

## Installer la bibliothèque Servo

Avant de piloter des servomoteurs avec Arduino, il va falloir installer une librairie développée pour l'ESP32. Dans ce cadre, vous pouvez utiliser [la librairie ESP32Servo](https://madhephaestus.github.io/ESP32Servo/annotated.html), créée par *Kevin Harrington et John K. Bennett*. La marche à suivre dépend de l'environnement que vous utilisez.

### Avec l'Arduino IDE

{% include step-tuto.html
greyBackground = true
content="Rendez-vous dans l'onglet de gauche **Library Manager**, recherchez `ESP32Servo` dans la barre de recherche, puis sélectionnez la bibliothèque créée par *Kevin Harrington et John K. Bennett.* Cliquez ensuite sur **Install** pour l'ajouter à votre projet.
"
image="Arduino_IDE_zlHeYNVgAy.png"
%}

### Avec VSCode et PlatformIO

Sous PlatformIO, les bibliothèques se déclarent directement dans le fichier de configuration du projet plutôt que via un gestionnaire graphique. Ajoutez `ESP32Servo` dans `lib_deps` de votre fichier `platformio.ini` :

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
lib_deps =
    madhephaestus/ESP32Servo
```

{% include message.html
title="Installation automatique"
message="PlatformIO télécharge et installe la bibliothèque automatiquement à la prochaine compilation du projet, sans autre manipulation."
status="is-info"
icon="fas fa-info-circle" %}

Cette bibliothèque fonctionne exactement comme la bibliothèque Arduino classique **Servo**, mais elle est spécialement adaptée aux microcontrôleurs de type ESP32.

## Piloter votre premier servomoteur

En pratique, deux fonctions suffisent pour démarrer : `attach(pin)` pour lier le servo à une broche, et `write(angle)` pour lui donner une position entre 0° et 180°.

{% include message.html
title="Toutes les fonctions"
message="Le détail des fonctions (`attach`, `write`, `writeMicroseconds`, `detach`) et les différences entre `Servo` et `ESP32Servo` sont regroupés dans la référence [Bibliothèque Servo / ESP32Servo](/docs/references/software/servo-library/)."
status="is-info"
icon="fas fa-info-circle" %}

Voici un exemple simple qui fait aller le servo de 0° à 180° en boucle :

```cpp
#include <ESP32Servo.h>

Servo monServo;

void setup() {
  monServo.attach(D7); // Attache le servo à la broche D7
}

void loop() {
  monServo.write(0);    // Positionne le servo à 0°
  delay(1000);          // Pause de 1 seconde
  monServo.write(180);  // Positionne le servo à 180°
  delay(1000);          // Pause de 1 seconde
}
```

---

{% include message.html
title="A faire"
message="
Les servomoteurs du Otto sont branchés sur les broches `D7`,`D8`,`D9`et`D10`

- Créez un programme permettant de tester les 4 servomoteurs du Otto de 0 à 180°.
- Créez un programme permettant de mettre tous les servomoteurs à 90° **pour l'assemblage du robot**.
"
status="is-info"
icon="fas fa-pen" %}

---

## Créer des séquences

Vous allez devoir imaginer des séquences de marche et bien d'autres pour votre robot. Afin de faire cela, nous allons utiliser des foncitons comme vu dans les chapitres précédentS. L'objectif par la suite est donc de mettre au point des séquences de marche et de les tester. Pour cela, vosu pouvez par exemple commencer par créer une fonction `void walk()` permettant au robot de marcher.

```cpp
void walk(){
  FootLeft.write(90));
  LegLeft.write(90);
  FootRight.write(90);
  Legright.write(90);
  delay(1000);
  FootLeft.write(45);
  LegLeft.write(90);
  FootRight.write(90);
  Legright.write(90);
  //etc...
}
```

Cet exemple est très basique, et vous constaterez rapidement que modifier ce type de séquences peut devenir fastidieux à mesure que votre projet se complexifie.

Pour aller plus loin, il serait intéressant d'intégrer des fonctions qui permettent de piloter plusieurs servomoteurs avec des vitesses différentes ou de simplifier la création et la gestion des séquences. Cela rendra votre code plus lisible, modulaire et évolutif pour des applications plus avancées.
