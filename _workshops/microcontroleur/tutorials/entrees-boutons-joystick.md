---
layout: documentation
hide_hero: false
hero_image: hero.webp
hero_height: is-small
hero_darken: true
image: hero.webp
component_toc: true
doc_header: true

title: Boutons, joystick et moniteur série
subtitle: Lire des entrées numériques et analogiques, et déboguer avec le port série
description: Câbler les boutons et le joystick du montage Pong, lire l'ADC et détecter des directions, en utilisant le moniteur série comme outil de debug.
author: Alban Petit

time: 3
difficulty: 2

prerequisites:
  - label: "Vérification de la toolchain"
    link: /workshops/microcontroleur/tutorials/toolchain-blink/
  - label: "Concept : GPIO & monde numérique"
    link: /workshops/microcontroleur/concepts/gpio-monde-numerique/
  - label: "Concept : ADC & PWM"
    link: /workshops/microcontroleur/concepts/adc-pwm/

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

hardwares:
  - label: 2 boutons poussoir
    link: ""
  - label: Module joystick analogique (2 axes + bouton)
    link: ""

todo: 70
---

## Entrées : boutons + joystick + série

Ce tutoriel ajoute les **entrées** du montage Pong : les deux boutons du joueur 1, et le joystick du joueur 2 (qui sert aussi de bouton START/RETRY pour le menu du jeu). Le câblage posé ici est **figé** - il ne change plus jusqu'au projet.

### Câblage figé de l'atelier

| Rôle | Broche | Type |
|---|---|---|
| Bouton joueur 1 - HAUT | GPIO5 | `INPUT_PULLUP` |
| Bouton joueur 1 - BAS | GPIO6 | `INPUT_PULLUP` |
| Joystick joueur 2 - X | GPIO1 (**ADC1**) | `analogRead` |
| Joystick joueur 2 - Y | GPIO2 (**ADC1**) | `analogRead` |
| Bouton du joystick (START/RETRY) | GPIO7 | `INPUT_PULLUP` |

{% include message.html title="Toujours ADC1" message="Le joystick est câblé sur GPIO1/GPIO2, deux broches **ADC1**. Le Wi-Fi utilisé au projet rend l'**ADC2** (GPIO11-20) inutilisable - voir le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/). Respecte ce câblage même si tu ne vois pas encore l'intérêt du Wi-Fi aujourd'hui." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Pourquoi INPUT_PULLUP plutôt qu'une résistance externe ?

Trois modes existent pour configurer une broche en entrée :

| Mode | Comportement au repos | Câblage requis |
|---|---|---|
| `INPUT` | flottant (valeur indéterminée) | résistance externe obligatoire |
| `INPUT_PULLUP` | HIGH (tiré vers 3,3 V en interne) | bouton vers GND - **notre cas** |
| `INPUT_PULLDOWN` | LOW (tiré vers GND en interne) | bouton vers 3,3 V |

`INPUT_PULLUP` évite toute soudure de résistance sur les 3 boutons du montage. C'est pour ça que le tableau ci-dessus ne mentionne jamais de résistance sur les lignes GPIO5, GPIO6 et GPIO7.

{% include step-tuto.html
greyBackground=true
title="1 - Câbler les deux boutons du joueur 1"
content="Relie chaque bouton entre sa broche GPIO et la **masse (GND)**. Pas besoin de résistance externe : on active le **pull-up interne** de l'ESP32-S3 par logiciel."
%}

```mermaid
graph LR
  GPIO5["GPIO5"] --> BH["Bouton HAUT"] --> GND1["GND"]
  GPIO6["GPIO6"] --> BB["Bouton BAS"] --> GND2["GND"]
```

```cpp
#define BTN_HAUT 5
#define BTN_BAS  6

void setup() {
  Serial.begin(115200);
  pinMode(BTN_HAUT, INPUT_PULLUP);
  pinMode(BTN_BAS, INPUT_PULLUP);
}
```

{% include step-tuto.html
greyBackground=true
title="2 - Lire un bouton et gérer les rebonds"
content="Avec `INPUT_PULLUP`, la logique est **inversée** : la broche lit `LOW` quand le bouton est pressé. Un appui mécanique produit aussi des **rebonds** (plusieurs transitions HIGH/LOW parasites en quelques millisecondes, visibles à l'oscilloscope) - un anti-rebond léger par délai suffit ici."
%}

```cpp
bool boutonPresse(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(20);                     // anti-rebond léger
    return digitalRead(pin) == LOW;
  }
  return false;
}

void loop() {
  if (boutonPresse(BTN_HAUT)) {
    Serial.println("Joueur 1 : HAUT");
  }
  if (boutonPresse(BTN_BAS)) {
    Serial.println("Joueur 1 : BAS");
  }
}
```

{% include message.html title="Un delay() qui bloque - pour l'instant, c'est acceptable" message="`delay(20)` fige tout le programme pendant 20 ms à chaque appui, y compris la lecture des autres entrées. Sans écran à rafraîchir, ça ne se voit pas encore. Le tutoriel [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/) introduira une **game loop non bloquante** avec `millis()` dès qu'il faudra dessiner à 60 images/seconde - retiens simplement que `delay()` est une solution provisoire, pas la bonne pratique finale." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Le moniteur série, ton meilleur ami" message="Ouvre le moniteur série de PlatformIO (icône prise dans la barre bleue, ou `Ctrl+Alt+S`) à **115200 bauds**. Tant qu'il n'y a pas d'écran, `Serial.println()` est ton seul retour visuel - utilise-le sans retenue pour déboguer." status="is-info" icon="fas fa-info-circle" %}

{% include message.html title="Checkpoint" message="Appuie sur chaque bouton du joueur 1 : le moniteur série doit afficher « Joueur 1 : HAUT » ou « Joueur 1 : BAS » à chaque appui, sans répétition parasite due aux rebonds. Valide ce comportement avant de câbler le joystick." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="3 - Câbler le joystick"
content="Le joystick a 5 broches : `VCC` (3,3V), `GND`, `VRx`, `VRy` et `SW` (bouton, souvent déjà en pull-up interne côté module)."
%}

```mermaid
graph LR
  VRx --> GPIO1["GPIO1 (ADC1)"]
  VRy --> GPIO2["GPIO2 (ADC1)"]
  SW --> GPIO7["GPIO7"]
  VCC --> V33["3,3 V"]
  GNDj["GND"] --> GNDe["GND"]
```

Contrairement aux boutons (`0` ou `1`), les axes du joystick renvoient une **valeur continue** convertie en nombre par l'ADC 12 bits de l'ESP32-S3 - soit $2^{12} = 4096$ valeurs possibles :

| Position du stick | Tension | Valeur ADC |
|---|---|---|
| Butée gauche/bas | 0 V | 0 |
| Centre (repos) | 1,65 V | ≈ 2048 |
| Butée droite/haut | 3,3 V | 4095 |

```cpp
#define JOY_X   1
#define JOY_Y   2
#define JOY_BTN 7

void setup() {
  Serial.begin(115200);
  pinMode(JOY_BTN, INPUT_PULLUP);
  // JOY_X et JOY_Y n'ont pas besoin de pinMode : analogRead() les configure.
}

void loop() {
  int x = analogRead(JOY_X);   // 0 à 4095
  int y = analogRead(JOY_Y);   // 0 à 4095
  bool pressed = digitalRead(JOY_BTN) == LOW;

  Serial.printf("x=%d y=%d btn=%d\n", x, y, pressed);
  delay(100);
}
```

{% include message.html title="Checkpoint" message="Ouvre le moniteur série : x et y doivent afficher environ 2048/2048 au repos, et se rapprocher de 0 ou 4095 quand tu inclines le stick à fond dans une direction. btn doit passer à 1 quand tu appuies sur le stick." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="4 - Détecter des directions"
content="Le centre du joystick n'est jamais exactement à 2048 : il faut une **zone morte** autour du centre pour éviter les faux positifs quand le stick est relâché."
%}

```cpp
enum Direction { CENTRE, HAUT, BAS, GAUCHE, DROITE };

Direction lireDirection() {
  int x = analogRead(JOY_X);
  int y = analogRead(JOY_Y);

  const int SEUIL_BAS  = 1500;
  const int SEUIL_HAUT = 2500;

  if (x < SEUIL_BAS)       return GAUCHE;
  if (x > SEUIL_HAUT)      return DROITE;
  if (y < SEUIL_BAS)       return BAS;
  if (y > SEUIL_HAUT)      return HAUT;
  return CENTRE;
}
```

Les seuils `1500` et `2500` découpent la plage `0-4095` en cinq zones, centrées sur la valeur de repos (≈2048) :

| Zone | Plage | Direction |
|---|---|---|
| Butée basse | `0` – `1499` | GAUCHE (X) / BAS (Y) |
| **Zone morte** | `1500` – `2500` | CENTRE |
| Butée haute | `2501` – `4095` | DROITE (X) / HAUT (Y) |

La zone morte `1500`-`2500` (large de 1000 sur les 4096 valeurs) absorbe le bruit électrique et l'imprécision mécanique du potentiomètre autour de la position de repos, sans réduire perceptiblement la course utile du stick.

{% include message.html title="Checkpoint" message="Incline le stick dans chaque direction : le moniteur série doit refléter GAUCHE, DROITE, HAUT ou BAS sans oscillation parasite quand tu relâches le stick au centre." status="is-success" icon="fas fa-check-circle" %}

{% include step-tuto.html
greyBackground=true
title="5 - Combiner boutons, joystick et série"
content="Rassemble tout ce que tu viens de construire dans un seul programme : les deux boutons du joueur 1, le joystick (direction + bouton START/RETRY) du joueur 2, le tout remonté sur le port série."
%}

```cpp
#define BTN_HAUT 5
#define BTN_BAS  6
#define JOY_X    1
#define JOY_Y    2
#define JOY_BTN  7

enum Direction { CENTRE, HAUT, BAS, GAUCHE, DROITE };

bool boutonPresse(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(20);
    return digitalRead(pin) == LOW;
  }
  return false;
}

Direction lireDirection() {
  int x = analogRead(JOY_X);
  int y = analogRead(JOY_Y);

  const int SEUIL_BAS  = 1500;
  const int SEUIL_HAUT = 2500;

  if (x < SEUIL_BAS)  return GAUCHE;
  if (x > SEUIL_HAUT) return DROITE;
  if (y < SEUIL_BAS)  return BAS;
  if (y > SEUIL_HAUT) return HAUT;
  return CENTRE;
}

void setup() {
  Serial.begin(115200);
  pinMode(BTN_HAUT, INPUT_PULLUP);
  pinMode(BTN_BAS, INPUT_PULLUP);
  pinMode(JOY_BTN, INPUT_PULLUP);
}

void loop() {
  if (boutonPresse(BTN_HAUT)) Serial.println("Joueur 1 : HAUT");
  if (boutonPresse(BTN_BAS))  Serial.println("Joueur 1 : BAS");

  bool startRetry = digitalRead(JOY_BTN) == LOW;
  Serial.printf("Joueur 2 : %d (start/retry=%d)\n", lireDirection(), startRetry);

  delay(100);
}
```

## Résultat attendu

À la fin de ce tutoriel, le moniteur série doit afficher en temps réel, simultanément et sans conflit :

- `HAUT` / `BAS` quand les boutons du joueur 1 sont pressés,
- la direction détectée du joystick du joueur 2,
- l'état du bouton START/RETRY.

{% include message.html title="Étape suivante" message="Garde ce câblage identique : le tutoriel [Écran SPI et game loop](/docs/tutorials/electronics/ecran-spi-game-loop/) ajoute uniquement l'écran SPI par-dessus, sans toucher aux boutons ni au joystick." status="is-success" icon="fas fa-check-circle" %}
