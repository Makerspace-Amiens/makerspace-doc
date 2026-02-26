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

title: 06 - Premier programme - Buzzer et Fonctions !
subtitle: Vos premiers pas avec la Arduino
description: Cette page va vous accompagner dans l'utilisation du Buzzer de la carte Otto-MKS et la révision des bases du C/C++

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---

## Introduction

L'ESP32 est une carte de développement puissante et polyvalente qui offre de nombreuses fonctionnalités pour les projets électroniques. Parmi celles-ci, la génération de sons à l'aide de la fonction `tone()` est particulièrement utile pour signaler des alertes sonores ou jouer de simples mélodies. Ce tutoriel vous guidera pas à pas dans l'utilisation de la fonction `tone()` sur l'ESP32 en utilisant la broche **D0** de votre carte OttoMKS

## Présentation de la fonction `tone()`

La fonction `tone()` est une fonction native d'Arduino qui permet de générer des signaux PWM sur une broche spécifique afin de produire un son sur un buzzer passif. Elle est désormais compatible avec l'ESP32, permettant ainsi une implémentation simple et rapide, sans nécessiter de bibliothèques supplémentaires.

### Fonctionnalités principales de `tone()`

- **Génération de tonalités** : Permet de produire un son d'une fréquence définie sur une broche spécifique.
- **Durée optionnelle** : Il est possible de spécifier la durée pendant laquelle le son est émis, permettant un contrôle précis.
- **Compatibilité avec `noTone()`** : Fonction permettant d'arrêter la tonalité en cours à tout moment.
- **Utilisation intuitive** : Fonctionnement similaire aux cartes Arduino classiques, rendant son utilisation facile pour les débutants et les experts.

## Fonctions principales

Voici les principales fonctions associées à `tone()` :

1. **`tone(pin, frequency)`**  
   - Génère une tonalité sur la broche spécifiée à la fréquence indiquée (en Hertz).
   - Exemple : `tone(D0, 1000);` → Émet une tonalité de 1000 Hz sur la broche D0.

2. **`tone(pin, frequency, duration)`**  
   - Génère une tonalité pendant une durée spécifique (en millisecondes).
   - Exemple : `tone(D0, 1000, 2000);` → Émet une tonalité de 1000 Hz pendant 2 secondes.

3. **`noTone(pin)`**  
   - Arrête la tonalité en cours sur la broche spécifiée.
   - Exemple : `noTone(D0);` → Arrête le son sur la broche D0.

## Générer des sons avec Tone

Avant d'implémenter une fonction de son de démarrage, nous allons tester une succession de sons directement dans le `setup()`. Cela permettra de valider le bon fonctionnement du buzzer et de mieux comprendre le comportement de la fonction `tone()`.

Voici un exemple de code pour générer une série de sons dans la fonction `setup()` :

```cpp
#define BUZZER_PIN D0  // Définition de la broche du buzzer

void setup() {
  tone(BUZZER_PIN, 500, 300);  // Émet un son à 500 Hz pendant 300 ms
  delay(500);
  tone(BUZZER_PIN, 1000, 300); // Émet un son à 1000 Hz pendant 300 ms
  delay(500);
  tone(BUZZER_PIN, 1500, 300); // Émet un son à 1500 Hz pendant 300 ms
  delay(500);
  noTone(BUZZER_PIN);          // Silence après la série de sons
}

void loop() {
  // Rien à faire dans la boucle principale
}
```

Une fois ces tests réalisés, nous pourrons encapsuler cette logique dans une fonction pour améliorer la structure du programme.

## Création d'un son de démarrage

Nous allons maintenant créer un son de démarrage pour notre robot. Pour cela, nous allons encapsuler la génération du son dans une fonction dédiée. Rappelons que les fonctions en C/C++ permettent de regrouper des instructions sous un nom unique, facilitant ainsi la réutilisation du code et améliorant la lisibilité.

### Principe des fonctions en C/C++

Une fonction est un bloc de code qui effectue une tâche spécifique. Elle est définie une seule fois et peut être appelée autant de fois que nécessaire dans le programme. En général, une fonction est définie par :

- Un type de retour (void si aucun retour n'est nécessaire)
- Un nom significatif
- Des paramètres éventuels
- Un bloc d'instructions entre accolades `{}`

Exemple de fonction :

```cpp
void myFunction(int value) {
  Serial.println(value);
}
```

### Création de la fonction de son de démarrage

Nous allons maintenant créer une fonction `startupSound()` pour générer un son de démarrage :

```cpp
#define BUZZER_PIN D0  // Définition de la broche du buzzer

void startupSound() {
  tone(BUZZER_PIN, 1000, 200);  // Premier bip court de 200 ms
  delay(400);
  tone(BUZZER_PIN, 1500, 200);  // Deuxième bip court de 200 ms
  delay(400);
  noTone(BUZZER_PIN);           // Silence après les bips
}

void setup() {
  startupSound();  // Appel de la fonction au démarrage
}

void loop() {
  // Rien à faire dans la boucle principale
}
```

### Importance de l'utilisation des fonctions

L'utilisation de fonctions dans un projet permet de :

- Rendre le code plus lisible et organisé
- Faciliter la maintenance et la réutilisation
- Réduire les erreurs en évitant la duplication de code

## Aller plus loin : Génération de notes musicales

Pour aller plus loin avec l'utilisation de la fonction `tone()`, il est possible de générer des mélodies complètes en utilisant une liste de notes préétablies. En effet, chaque note musicale correspond à une fréquence spécifique en Hertz.

### Implémentation d'une liste de notes dans un fichier séparé

Pour organiser le code et le rendre plus modulaire, nous pouvons définir une liste de fréquences des notes musicales dans un fichier séparé. Cela facilite la gestion et la réutilisation des données musicales dans différents projets.

#### Étape 1 : Création d'un nouvel onglet `notes` dans l'IDE Arduino

{% include step-tuto.html

greyBackground = true

content="Dans l'IDE Arduino, vous pouvez organiser votre code en créant un nouvel onglet pour stocker les définitions des fréquences des notes musicales. Pour ajouter un onglet au projet en cours, cliquez sur les trois points en haut à droite, puis **New Tab**. Appelez cet onglet **notes.h** . Ce fichier d'en-tête, ou **Header**, contiendra des éléments de définitions.
"
image="Arduino_IDE_5FpIFuQHin.png"
image_2="Arduino_IDE_5FpIFuQHin.png"
%}

Ajoutez ensuite les définitions suivantes dans cet onglet :

```cpp
#ifndef NOTES_H
#define NOTES_H

#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_A4  440
#define NOTE_B4  494

#endif
```

#### Étape 2 : Utilisation de la liste de notes dans le programme principal

Incluez le fichier `notes.h` dans votre programme principal et utilisez les notes définies :

```cpp
#include "notes.h"

#define BUZZER_PIN D0  // Définition de la broche du buzzer

void startupSound() {
  tone(BUZZER_PIN, NOTE_G4, 200);  // Premier bip court de 200 ms
  delay(400);
  tone(BUZZER_PIN, NOTE_B4, 200);  // Deuxième bip court de 200 ms
  delay(400);
  noTone(BUZZER_PIN);           // Silence après les bips
}

void setup() {
  startupSound();  // Appel de la fonction au démarrage
}

void loop() {
  // Rien à faire dans la boucle principale
}
```

## Comprendre les fichiers d'en-tête en C/C++

En C et C++, les fichiers d'en-tête, reconnaissables par l'extension `.h`, sont utilisés pour déclarer des fonctions, des variables, des constantes et des classes qui peuvent être utilisées dans plusieurs fichiers sources. Ils permettent de mieux structurer et organiser le code en séparant la déclaration des éléments de leur implémentation.

### Pourquoi utiliser des fichiers d'en-tête ?

L'utilisation des fichiers d'en-tête présente plusieurs avantages :

1. **Modularité**  
   - Ils permettent de découper le code en modules réutilisables, ce qui facilite la maintenance et l'évolution du projet.
   
2. **Lisibilité et organisation**  
   - En séparant les déclarations des implémentations, le code devient plus facile à comprendre et à gérer.

3. **Réutilisation**  
   - Un fichier `.h` peut être inclus dans plusieurs fichiers sources `.cpp`, évitant ainsi la duplication du code.

4. **Facilitation de la compilation**  
   - Ils permettent de centraliser les déclarations et évitent les conflits lors de la compilation en fournissant des définitions claires.

### Structure d'un fichier d'en-tête

Un fichier d'en-tête contient généralement :

- Des **définitions de constantes** (`#define`)
- Des **déclarations de fonctions** et de variables globales
- Des **déclarations de structures et de classes**
- Une **protection contre les inclusions multiples** grâce aux directives de préprocesseur.

Exemple typique d'un fichier `notes.h` :

```cpp
#ifndef NOTES_H  // Vérifie si NOTES_H n'est pas déjà défini
#define NOTES_H  // Définit NOTES_H

#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_A4  440
#define NOTE_B4  494

#endif  // Fin de la protection contre les inclusions multiples
```

### Comment utiliser un fichier d'en-tête dans un programme ?

Pour inclure un fichier d'en-tête dans un fichier source `.ino` ou `.cpp`, on utilise la directive `#include` comme suit :

```cpp
#include "notes.h"

void setup() {
  tone(D0, NOTE_C4, 500);  // Joue la note Do pendant 500 ms
}

void loop() {
  // Code principal
}
```

### Protection contre les inclusions multiples

Pour éviter les erreurs de compilation dues à des inclusions multiples, il est recommandé d'utiliser les **garde d'inclusion**, comme vu précédemment avec `#ifndef`, `#define`, et `#endif`. Une alternative moderne est d'utiliser la directive `#pragma once` :

```cpp
#pragma once

#define NOTE_C4  262
#define NOTE_D4  294
```

Cette directive est plus concise et assure que le fichier n'est inclus qu'une seule fois.

---

En utilisant les fichiers d'en-tête dans vos projets, vous pouvez rendre votre code plus modulaire, lisible et réutilisable, facilitant ainsi son évolution et sa maintenance.

---

{% include message.html 
title="A faire" 
message="Avant de passer à la suite :

**Niveau 1 :**
- Complétez la liste des notes avec les fréquences correspondantes
- Réalisez le son de démarrage de votre robot

**Niveau 2 :**
- Réalisez une fonction permettant la lecture d'une mélodie contenue dans un tableau d'entier 
```cpp
int melody[] = {NOTE_C4, NOTE_D4, NOTE_OFF, NOTE_F4, ...};
```

**Niveau 3 :**
- Réalisez une fonction permettant la gestion des durées de chaque note de la mélodie 
 " 
status="is-info" 
icon="fas fa-pen" %}


---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}