---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: tutorial
tag: otto-mks

title: 08 - Servomoteurs
subtitle: Piloter un servomoteur pour le robot
description: Cette page va vous accompagner dans l'utilisation des servomoteurs sur le Otto-MKS

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---

## Rappels sur les servomoteurs

- **Qu’est-ce qu’un servomoteur ?** :
  Un servomoteur est un moteur électrique qui permet de contrôler des mouvements précis en termes de position, de vitesse et d'accélération. Très populaire en robotique, il est utilisé pour des applications nécessitant un contrôle précis, comme les bras robotiques, les voitures télécommandées, ou les systèmes de caméra motorisée.


- **Fonctionnement de base :** :
  Les servomoteurs se contrôlent grâce à un signal PWM (Pulse Width Modulation). En fonction de la largeur de l’impulsion, ils adoptent une position spécifique (généralement entre 0° et 180°).

{% include message.html 
title="Information" 
message="Une description technique du fonctionnement d'un servomoteur est disponible [sur la page dédiée](../../ressources/servomotor)" 
status="is-info" 
icon="fas fa-info" %}

## Installer la bibliothèque Servo

Avant de piloter des servomoteurs avec Arduino, il va falloir installer une librairie développée pour l'ESP32. Dans ce cadre, vous pouvez utiliser [la librairie ESP32Servo](https://madhephaestus.github.io/ESP32Servo/annotated.html) :

{% include step-tuto.html 
greyBackground = true
content="Rendez-vous dans l'onglet de gauche **Library Manager**, recherchez `ESP32Servo` dans la barre de recherche, puis sélectionnez la bibliothèque créée par *Kevin Harrington et John K. Bennett.* Cliquez ensuite sur **Install** pour l'ajouter à votre projet.
" 
image="Arduino_IDE_zlHeYNVgAy.png" 
%}

Cette bibliothèque fonctionne exactement comme la bibliothèque Arduino classique **Servo**, mais elle est spécialement adaptée aux microcontrôleurs de type ESP32.

## Fonctionnement de la bibliothèque Servo (ou ESP32Servo pour ESP32)

La bibliothèque Servo (ou ESP32Servo dans le cas de l'ESP32) permet de contrôler facilement des servomoteurs en générant des signaux PWM (Pulse Width Modulation). Ces signaux déterminent la position du servomoteur en ajustant la largeur de l'impulsion envoyée.

### Concepts de Base

**PWM et Position du Servomoteur :**

  - Le signal PWM est une impulsion électrique périodique.
  - La largeur de l'impulsion détermine l'angle de rotation du servomoteur :
    - Une impulsion de 1 ms (~1000 µs) positionne le servo à 0°.
    - Une impulsion de 1,5 ms (~1500 µs) positionne le servo au milieu (90°).
    - Une impulsion de 2 ms (~2000 µs) positionne le servo à 180°.
  - Ces impulsions sont envoyées toutes les 20 ms (fréquence de 50 Hz).

**Simplification avec la Bibliothèque :** La bibliothèque Servo gère automatiquement la génération des signaux PWM en fonction de l’angle que vous spécifiez dans le code. Cela vous évite de configurer manuellement les timers ou d’écrire un code complexe.

---

### Fonctions Principales de la Bibliothèque

Voici les principales fonctions de la bibliothèque et leur utilisation :

#### `Servo.attach(pin)`
   - Lie un servomoteur à une broche spécifique de votre microcontrôleur.
     ```cpp
     Servo monServo;
     monServo.attach(9); // Attache un servomoteur à la broche D9
     ```

#### `Servo.write(angle)`
   - Positionne le servomoteur à un angle précis (entre 0° et 180°).
     ```cpp
     monServo.write(90); // Place le servo à 90°
     ```

#### `Servo.writeMicroseconds(value)`
   - Permet un contrôle plus précis en envoyant directement une largeur d'impulsion (en microsecondes).
     ```cpp
     monServo.writeMicroseconds(1500); // Impulsion pour 90° (position médiane)
     ```

#### `Servo.detach()`
   - Déconnecte le servomoteur de la broche, libérant ainsi les ressources.
     ```cpp
     monServo.detach(); // Libère la broche utilisée par le servomoteur
     ```

---

### Différences entre Servo (Arduino) et ESP32Servo
1. **Support matériel :**
   - Arduino utilise les **timers matériels** intégrés pour générer les signaux PWM.
   - ESP32 utilise le module **LEDC (PWM LED Controller)**, qui permet une gestion avancée et des signaux stables.

2. **Broches compatibles :**
   - Sur Arduino, seules les broches PWM spécifiques peuvent être utilisées.
   - Sur ESP32, presque toutes les broches peuvent générer un signal PWM, sauf celles réservées (RX/TX, GPIO0, etc.).

---

### Exemple Pratique : Contrôler un Servomoteur
Voici un exemple simple pour comprendre comment utiliser la bibliothèque Servo :

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

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}