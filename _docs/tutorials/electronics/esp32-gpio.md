---
layout: documentation
hide_hero: false
hero_image: hero.webp
hero_height: is-small
hero_darken: true
image: hero.webp
component_toc: true
doc_header: true
type: tutorial

title: GPIO sur ESP32 — bouton, LED et joystick
subtitle: Lire une entrée numérique, piloter une sortie, puis lire un joystick analogique
description: Découvrir en pratique les broches GPIO d'un ESP32 en lisant un bouton externe, en pilotant une LED, puis en lisant les axes d'un joystick analogique via l'ADC.
author: Alban Petit

time: 2
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: VSCode et PlatformIO installés
    link: /docs/tutorials/software/vscode-platformio/installation-platformio/
  - label: Notions de base en C++ (framework Arduino)
    link: ""

softwares:
  - label: PlatformIO IDE (extension VSCode)
    link: /docs/references/software/platformIO/

hardwares:
  - label: Carte compatible ESP32
    link: ""
  - label: Bouton poussoir
    link: ""
  - label: LED + résistance série (150 à 220 Ω)
    link: ""
  - label: Module joystick analogique (2 axes + bouton)
    link: ""

todo: 60
---

## Objectif

Une broche **GPIO** (*General Purpose Input/Output*) peut être configurée par logiciel en entrée ou en sortie. C'est la brique de base de tout projet électronique avec microcontrôleur : avant de piloter un moteur ou d'afficher quelque chose sur un écran, il faut savoir lire et écrire sur ces broches.

Ce tutoriel parcourt les trois usages les plus courants, du plus simple au plus complexe, en construisant à chaque étape sur la précédente :

1. Lire un **bouton externe** — une entrée numérique (`0` ou `1`).
2. Piloter une **LED** — une sortie numérique.
3. Lire un **joystick analogique** — une entrée analogique convertie en nombre via l'ADC.

À la fin, tu auras un petit montage complet qui combine les trois : un bouton, une LED et un joystick lus et pilotés simultanément.

### Numérique vs analogique, en un coup d'œil

| | Numérique | Analogique |
|---|---|---|
| Valeurs possibles | 2 (`LOW` / `HIGH`) | continues (0 à 3,3 V) |
| Fonctions Arduino | `pinMode`, `digitalRead`, `digitalWrite` | `analogRead` (`analogWrite`/`ledcWrite` pour écrire) |
| Exemple dans ce tuto | bouton, LED | joystick |

{% include message.html title="Pour la théorie complète" message="Ce tutoriel reste pratique et va à l'essentiel. Pour une explication détaillée des niveaux logiques, du pull-up/pull-down et de la résolution de l'ADC, consulte les concepts [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/) et [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/)." status="is-info" icon="fas fa-book" %}

## Matériel nécessaire

- Une carte compatible ESP32 (framework Arduino)
- Un câble USB-C ou micro-USB data (pas uniquement charge)
- Un bouton poussoir
- Une LED + une résistance série (150 à 220 Ω)
- Un module joystick analogique 2 axes avec bouton intégré
- Une breadboard et des fils de câblage

## Étape 0 — Créer le projet PlatformIO

{% include step-tuto.html
greyBackground=true
title="Nouveau projet"
content="Dans VSCode, ouvre l'onglet **PlatformIO** (icône fourmi) puis **New Project**. Choisis le nom de ton projet, sélectionne la référence exacte de ta carte ESP32 dans **Board**, et **Arduino** comme **Framework**.

PlatformIO génère un fichier `platformio.ini` et un dossier `src/` contenant `main.cpp`." %}

```ini
; platformio.ini généré
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
```

{% include message.html title="Adapte le nom de la board" message="Remplace `esp32dev` par la référence exacte de ta carte (visible dans l'assistant New Project). Le reste du fichier ne change pas pour ce tutoriel." status="is-info" icon="fas fa-info-circle" %}

## Étape 1 — Lire un bouton externe (entrée numérique)

{% include step-tuto.html
greyBackground=true
title="Câbler le bouton"
content="Relie le bouton entre une broche GPIO et la **masse (GND)**. Pas besoin de résistance externe : on active le **pull-up interne** de l'ESP32 par logiciel, qui maintient la broche à l'état haut tant que le bouton n'est pas pressé.

```text
GPIO4 ──── Bouton ──── GND
```

" %}

```cpp
#define BTN_PIN 4

void setup() {
  Serial.begin(115200);
  pinMode(BTN_PIN, INPUT_PULLUP);
}

void loop() {
  bool appuye = digitalRead(BTN_PIN) == LOW;
  Serial.println(appuye ? "Bouton appuyé" : "Bouton relâché");
  delay(100);
}
```

{% include message.html title="Logique inversée avec INPUT_PULLUP" message="Avec un pull-up, la broche lit HIGH au repos et LOW quand le bouton est pressé — l'inverse de ce qu'on imagine intuitivement. Un appui mécanique produit aussi des rebonds (plusieurs transitions parasites) ; un petit délai après détection suffit à les filtrer pour un usage simple. Pour un projet où la précision du timing compte, une vraie bibliothèque de debounce est préférable." status="is-info" icon="fas fa-info-circle" %}

### Pourquoi pas une résistance externe ?

Trois modes existent pour une broche configurée en entrée :

| Mode | Comportement au repos | Câblage |
|---|---|---|
| `INPUT` | flottant (valeur indéterminée) | déconseillé sans résistance externe |
| `INPUT_PULLUP` | HIGH (tiré vers 3,3 V en interne) | bouton vers GND |
| `INPUT_PULLDOWN` | LOW (tiré vers GND en interne) | bouton vers 3,3 V |

`INPUT_PULLUP` est le plus utilisé car il évite tout composant supplémentaire et toute soudure de résistance.

{% include message.html title="Checkpoint" message="Ouvre le moniteur série (115200 bauds) : tu dois voir « Bouton relâché » en boucle, puis « Bouton appuyé » tant que tu maintiens le bouton. Valide ce comportement avant de passer à la suite." status="is-success" icon="fas fa-check-circle" %}

## Étape 2 — Piloter une LED (sortie numérique)

{% include step-tuto.html
greyBackground=true
title="Câbler la LED"
content="Câble la LED avec sa résistance série entre une broche GPIO et la masse, anode côté résistance.

```text
GPIO2 ──── R (150-220 Ω) ──── Anode LED
                               Cathode LED ──── GND
```

" %}

```cpp
#define LED_PIN 2

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH); // LED allumée (3,3 V)
  delay(500);
  digitalWrite(LED_PIN, LOW);  // LED éteinte (0 V)
  delay(500);
}
```

{% include message.html title="3,3 V, pas 5 V" message="Les GPIO d'un ESP32 fonctionnent en logique 3,3 V. Une broche en sortie ne produit jamais 5 V, et un signal 5 V appliqué en entrée peut endommager la puce. Le courant maximal par broche est d'environ 40 mA : limite-le à 10-15 mA avec la résistance série de la LED." status="is-danger" icon="fas fa-exclamation-triangle" %}

### Calculer la résistance série

Pour une LED rouge classique (tension de seuil $V_f \approx 2\ V$) parcourue par un courant $I = 10\ mA$ :

$$R = \frac{V_{alim} - V_f}{I} = \frac{3{,}3 - 2}{0{,}01} = 130\ \Omega$$

On arrondit à la valeur normalisée supérieure la plus proche : **150 Ω**.

### Combiner bouton et LED

```cpp
#define BTN_PIN 4
#define LED_PIN 2

void setup() {
  pinMode(BTN_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  bool appuye = digitalRead(BTN_PIN) == LOW;
  digitalWrite(LED_PIN, appuye ? HIGH : LOW);
}
```

{% include message.html title="Checkpoint" message="La LED doit s'allumer instantanément dès que tu appuies sur le bouton, et s'éteindre dès que tu le relâches." status="is-success" icon="fas fa-check-circle" %}

## Étape 3 — Lire un joystick analogique (ADC)

Un joystick analogique contient deux potentiomètres (axes X et Y) et un bouton. Contrairement au bouton du départ, ses axes ne renvoient pas un simple `0`/`1` mais une **valeur continue**, convertie en nombre par le **convertisseur analogique-numérique (ADC)** de l'ESP32.

L'ADC de l'ESP32 a une résolution de **12 bits**, ce qui donne $2^{12} = 4096$ valeurs possibles :

| Tension mesurée | Valeur ADC |
|---|---|
| 0 V | 0 |
| 1,65 V | ≈ 2048 |
| 3,3 V | 4095 |

{% include step-tuto.html
greyBackground=true
title="Câbler le joystick"
content="Le joystick a 5 broches : `VCC` (3,3 V), `GND`, `VRx`, `VRy` et `SW` (bouton).

```text
VRx ──── GPIO1  (ADC1)
VRy ──── GPIO2  (ADC1)
SW  ──── GPIO5
VCC ──── 3,3 V
GND ──── GND
```

" %}

```cpp
#define JOY_X   1
#define JOY_Y   2
#define JOY_BTN 5

void setup() {
  Serial.begin(115200);
  pinMode(JOY_BTN, INPUT_PULLUP);
  // JOY_X et JOY_Y n'ont pas besoin de pinMode : analogRead() les configure.
}

void loop() {
  int x = analogRead(JOY_X);   // 0 à 4095 (ADC 12 bits)
  int y = analogRead(JOY_Y);   // 0 à 4095
  bool pressed = digitalRead(JOY_BTN) == LOW;

  Serial.printf("x=%d y=%d btn=%d\n", x, y, pressed);
  delay(100);
}
```

{% include message.html title="ADC1 plutôt qu'ADC2" message="L'ESP32 possède deux banques d'ADC. Les broches ADC2 deviennent indisponibles ou instables dès que le Wi-Fi est actif. Pour un joystick, préfère toujours les broches ADC1 (généralement GPIO1 à GPIO10 selon les modèles) — même si ton projet n'utilise pas encore le Wi-Fi aujourd'hui." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Détecter une direction

Le centre du joystick n'est jamais exactement à la valeur médiane : il faut une **zone morte** pour éviter les faux positifs quand le stick est relâché.

```cpp
enum Direction { CENTRE, HAUT, BAS, GAUCHE, DROITE };

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
```

{% include message.html title="Checkpoint" message="Incliner le joystick doit faire varier x et y entre 0 et 4095 dans le moniteur série, en revenant systématiquement proche du centre (≈2048) au repos." status="is-success" icon="fas fa-check-circle" %}

## Étape 4 — Tout combiner

Assemble maintenant le bouton, la LED et le joystick dans un seul programme : la LED s'allume quand le bouton externe est pressé, et s'éteint quand on appuie sur le bouton du joystick.

```cpp
#define BTN_PIN 4
#define LED_PIN 2
#define JOY_X   1
#define JOY_Y   2
#define JOY_BTN 5

enum Direction { CENTRE, HAUT, BAS, GAUCHE, DROITE };

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

const char* nomDirection(Direction d) {
  switch (d) {
    case HAUT:    return "HAUT";
    case BAS:     return "BAS";
    case GAUCHE:  return "GAUCHE";
    case DROITE:  return "DROITE";
    default:      return "CENTRE";
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(BTN_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);
  pinMode(JOY_BTN, INPUT_PULLUP);
}

void loop() {
  if (digitalRead(BTN_PIN) == LOW) {
    digitalWrite(LED_PIN, HIGH);
  }
  if (digitalRead(JOY_BTN) == LOW) {
    digitalWrite(LED_PIN, LOW);
  }

  Serial.println(nomDirection(lireDirection()));
  delay(100);
}
```

## Résultat attendu

Le moniteur série (115200 bauds) doit afficher en continu la direction détectée du joystick. Presser le bouton externe allume la LED ; appuyer sur le bouton du joystick l'éteint. Chaque brique (bouton, LED, joystick) fonctionne indépendamment des deux autres — c'est ce découplage qui permet de les combiner sans conflit.

## Pour aller plus loin

- Ajoute un **anti-rebond logiciel** propre (avec un timestamp `millis()`) au lieu du `delay()` utilisé ici, pour ne jamais bloquer la boucle `loop()`.
- Utilise `map()` pour convertir les valeurs `0-4095` du joystick en pourcentage `0-100` ou en angle `0-180`.
- Concept [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/) — niveaux logiques, pull-up/pull-down, calcul de résistance de LED en détail.
- Concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/) — résolution de l'ADC, échantillonnage, PWM en sortie.
- Tutoriel [Servomoteurs](/docs/tutorials/electronics/servomotor/) pour piloter une sortie PWM à la suite de ce tutoriel.
- Tutoriel [Port série avec l'Arduino IDE](/docs/tutorials/electronics/arduino-port-serie/) pour aller plus loin dans la lecture et le tracé de données.
