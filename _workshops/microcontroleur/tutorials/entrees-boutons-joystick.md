---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: TD2 — Boutons, joystick et moniteur série
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

hardwares:
  - label: 2 boutons poussoir
    link: ""
  - label: Module joystick analogique (2 axes + bouton)
    link: ""

todo: 10
---

## TD2 — Entrées : boutons + joystick + série (3h)

Ce TD ajoute les **entrées** du montage Pong : les deux boutons du joueur 1, et le joystick du joueur 2 (qui sert aussi de bouton START/RETRY pour le menu du TD4). Le câblage posé ici est **figé** — il ne change plus jusqu'au projet.

### Câblage figé de l'atelier

| Rôle | Broche | Type |
|---|---|---|
| Bouton joueur 1 — HAUT | GPIO5 | `INPUT_PULLUP` |
| Bouton joueur 1 — BAS | GPIO6 | `INPUT_PULLUP` |
| Joystick joueur 2 — X | GPIO1 (**ADC1**) | `analogRead` |
| Joystick joueur 2 — Y | GPIO2 (**ADC1**) | `analogRead` |
| Bouton du joystick (START/RETRY) | GPIO7 | `INPUT_PULLUP` |

{% include message.html title="Toujours ADC1" message="Le joystick est câblé sur GPIO1/GPIO2, deux broches **ADC1**. Le Wi-Fi utilisé au projet rend l'**ADC2** (GPIO11-20) inutilisable — voir le concept [ADC & PWM](/workshops/microcontroleur/concepts/adc-pwm/). Respecte ce câblage même si tu ne vois pas encore l'intérêt du Wi-Fi aujourd'hui." status="is-warning" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html
greyBackground=true
title="1 — Câbler les deux boutons du joueur 1"
content="Relie chaque bouton entre sa broche GPIO et la **masse (GND)**. Pas besoin de résistance externe : on active le **pull-up interne** de l'ESP32-S3 par logiciel.

```text
GPIO5 ──── Bouton HAUT ──── GND
GPIO6 ──── Bouton BAS  ──── GND
```

"
%}

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
title="2 — Lire un bouton et gérer les rebonds"
content="Avec `INPUT_PULLUP`, la logique est **inversée** : la broche lit `LOW` quand le bouton est pressé. Un appui mécanique produit aussi des **rebonds** (plusieurs transitions HIGH/LOW parasites en quelques millisecondes) — un anti-rebond léger par délai suffit ici."
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

{% include message.html title="Le moniteur série, ton meilleur ami" message="Ouvre le moniteur série de PlatformIO (icône prise dans la barre bleue, ou `Ctrl+Alt+S`) à **115200 bauds**. Tant qu'il n'y a pas d'écran, `Serial.println()` est ton seul retour visuel — utilise-le sans retenue pour déboguer." status="is-info" icon="fas fa-info-circle" %}

{% include step-tuto.html
greyBackground=true
title="3 — Câbler le joystick"
content="Le joystick a 5 broches : `VCC` (3,3V), `GND`, `VRx`, `VRy` et `SW` (bouton, souvent déjà en pull-up interne côté module).

```text
VRx ──── GPIO1  (ADC1)
VRy ──── GPIO2  (ADC1)
SW  ──── GPIO7
VCC ──── 3,3 V
GND ──── GND
```

"
%}

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

{% include step-tuto.html
greyBackground=true
title="4 — Détecter des directions"
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

## Sortie de séance

À la fin du TD2, le moniteur série doit afficher en temps réel :

- `HAUT` / `BAS` quand les boutons du joueur 1 sont pressés,
- la direction détectée du joystick du joueur 2,
- l'état du bouton START/RETRY.

{% include message.html title="Rendez-vous au TD3" message="Garde ce câblage identique : le TD3 ajoute uniquement l'écran SPI par-dessus, sans toucher aux boutons ni au joystick." status="is-success" icon="fas fa-check-circle" %}
