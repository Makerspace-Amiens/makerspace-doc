---
layout: documentation
hide_hero: true
hero_image: image.jpg
hero_darken: true
image: image.jpg
component_toc: true
doc_header: true

title: Machine à états finis (FSM)
subtitle: Structurer un programme embarqué avec des phases claires
description: Comprendre et implémenter une machine à états finis (FSM) pour piloter les phases d'un jeu embarqué sur ESP32-S3.
author: Alban Petit

todo: 60
---

## Quand le code devient un plat de spaghettis

Ton programme grossit. Une LED qui clignote tient en quatre lignes ; mais un jeu, lui, a plusieurs moments de vie — un menu d'accueil, une partie en cours, un écran de fin. Gérer ces phases « à la main » transforme vite le code en plat de spaghettis : des variables un peu partout, des `if/else` qui s'emmêlent, et des bugs difficiles à traquer.

La **machine à états finis** (FSM) est l'outil classique de l'embarqué pour garder les idées claires. Commençons par voir ce qui se passe sans elle.

## Le problème sans FSM

Un programme embarqué simple enchaîne les actions ligne par ligne. Dès qu'il faut gérer plusieurs **phases** (menu d'accueil → partie en cours → game over), le code se remplit de `if/else` imbriqués et de variables booléennes qui s'accumulent :

```cpp
bool enPartie = false;
bool gameOver = false;
bool menuActif = true;
// ...et ça empire à chaque nouvelle phase
```

La **machine à états finis** (FSM — *Finite State Machine*) est la solution classique de l'embarqué pour ce problème.

## Principe d'une FSM

Une FSM est définie par :

- un ensemble fini d'**états** (ex : `MENU`, `PARTIE`, `GAME_OVER`)
- des **transitions** entre états déclenchées par des événements (bouton pressé, score atteint…)
- un seul **état actif** à la fois

```mermaid
stateDiagram-v2
  [*] --> MENU
  MENU --> PARTIE : bouton START pressé
  PARTIE --> GAME_OVER : vie == 0
  GAME_OVER --> MENU : bouton RETRY pressé
```

## Implémentation avec un `enum` + `switch`

### 1 — Déclarer les états

```cpp
enum EtatJeu {
  MENU,
  PARTIE,
  GAME_OVER
};

EtatJeu etat = MENU;  // état initial
```

### 2 — La game loop avec `switch`

```cpp
void loop() {
  lireEntrees();        // lire boutons / joystick

  switch (etat) {

    case MENU:
      afficherMenu();
      if (boutonStart()) {
        initialiserPartie();
        etat = PARTIE;  // transition
      }
      break;

    case PARTIE:
      mettreAJourJeu();
      afficherJeu();
      if (vieJoueur == 0) {
        etat = GAME_OVER;  // transition
      }
      break;

    case GAME_OVER:
      afficherGameOver();
      if (boutonRetry()) {
        etat = MENU;  // transition
      }
      break;
  }
}
```

Chaque `case` gère **un seul état** : ce qu'il affiche, ce qu'il fait, et vers quel état il peut basculer.

{% include message.html title="Deux sens du mot « état »" message="Dans une même séance, le mot **état** désigne deux choses différentes : les **données du jeu** (position de la balle, score — des variables) et la **phase du jeu** (MENU / PARTIE / GAME_OVER — la FSM). Garde cette distinction en tête pour ne pas mélanger les deux." status="is-info" icon="fas fa-info-circle" %}

## Pourquoi c'est fondamental en embarqué

### Pas d'OS, pas de processus

Sur un µC Arduino, il n'y a **pas de système d'exploitation**. Pas de threads (tâches exécutées en parallèle), pas de `sleep()` bloquant sans conséquence. Le `loop()` s'exécute en boucle infinie — toutes les décisions sur ce qu'il faut faire à chaque instant passent par le code.

La FSM remplace ce qu'un OS ferait autrement : elle décide quel « mode » est actif et ce qu'il faut exécuter.

### La FSM prépare le projet réseau

Dans le projet Snake multijoueur, la FSM du jeu accueillera des **états réseau** supplémentaires :

```mermaid
stateDiagram-v2
  [*] --> ATTENTE_WIFI
  ATTENTE_WIFI --> ATTENTE_JOUEUR : Wi-Fi connecté
  ATTENTE_JOUEUR --> PARTIE : 2e joueur connecté
  PARTIE --> GAME_OVER : serpent mort
  GAME_OVER --> ATTENTE_JOUEUR : rejouer
```

La structure `switch(etat)` est la même — on ajoute juste des états.

## FSM vs variables booléennes

| Approche | Lisibilité | Extensibilité | Bugs typiques |
|---|---|---|---|
| Booléens `enPartie`, `gameOver`… | Faible (états implicites) | Difficile | États contradictoires (`enPartie && gameOver == true`) |
| **FSM avec `enum`** | Élevée (états explicites) | Facile (ajouter un `case`) | Aucun état contradictoire possible |

## Exercice — dessiner la FSM du Pong

Avant de coder le TD4, dessine sur papier la FSM du Pong :

- Quels sont les états ? (`MENU`, `PARTIE`, `PAUSE` ?, `GAME_OVER`)
- Quels événements déclenchent les transitions ?
- Quel est l'état initial ?

Compare ensuite ta FSM avec celle du groupe — les différences de conception sont souvent révélatrices.

## Résumé

- Une FSM = états + transitions + un seul état actif à la fois.
- Implémentation Arduino : `enum` pour les états, `switch(etat)` dans la `loop()`.
- Chaque `case` gère l'affichage, la logique et les transitions de son état.
- La FSM élimine les booléens incompatibles et rend le code extensible.
- Dans ce projet : FSM du jeu (TD4) → étendue aux états réseau (Projet).
