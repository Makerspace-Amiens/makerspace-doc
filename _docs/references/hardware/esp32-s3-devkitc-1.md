---
layout: documentation
hide_hero: true
hero_image: image.webp
hero_darken: true
image: image.webp
component_toc: true
doc_header: true

title: ESP32-S3-DevKitC-1
subtitle: La carte de développement au cœur de l'atelier
description: "Fiche de référence de la carte ESP32-S3-DevKitC-1 utilisée dans l'atelier microcontrôleurs : caractéristiques, brochage et points d'attention."
manufacturer:
  - name: Espressif Systems
    link: "https://www.espressif.com/en/products/devkits/esp32-s3-devkitc-1"
author: Alban Petit

todo: 60
---

## Vue d'ensemble

L'**ESP32-S3-DevKitC-1** est la carte de développement officielle d'Espressif autour du SoC **ESP32-S3**. C'est la carte utilisée tout au long de l'atelier, du premier Blink jusqu'au projet Snake multijoueur.

Elle réunit sur une même carte le microcontrôleur, sa mémoire Flash, la connectique USB et les broches d'entrées/sorties, prête à être programmée en Arduino-ESP32. Pour comprendre ce qu'elle contient, voir le concept [Architecture d'un microcontrôleur](/workshops/microcontroleur/concepts/architecture-microcontroleur/).

## Caractéristiques

| Élément | Valeur |
|---|---|
| SoC | ESP32-S3 |
| CPU | Xtensa LX7 double cœur, 32 bits, jusqu'à 240 MHz |
| RAM | 512 Ko SRAM interne (+ 8 Mo PSRAM sur la variante N16R8) |
| Flash | 16 Mo externe (variante N16R8) |
| GPIO | Jusqu'à 45 broches programmables |
| ADC | 2 convertisseurs 12 bits (SAR), jusqu'à 20 voies |
| Connectivité | Wi-Fi 2,4 GHz 802.11 b/g/n + Bluetooth 5 LE |
| Tension logique | **3,3 V** |
| USB | USB natif (OTG) + pont USB-série pour le flashage |

## Broches à connaître

Toutes les broches ne sont pas équivalentes : certaines ont un rôle réservé (voir le concept [GPIO & monde numérique](/workshops/microcontroleur/concepts/gpio-monde-numerique/)).

| Broches | Rôle |
|---|---|
| GPIO 1 à 10 | ADC1 : les seules utilisables pour l'ADC quand le Wi-Fi est actif |
| GPIO 11 à 20 | ADC2 : **inutilisable Wi-Fi activé** |
| GPIO 0, 3, 45, 46 | Strapping (mode de boot) : à éviter |
| GPIO 19, 20 | USB natif (D-/D+) : à éviter si l'USB est utilisé |
| GPIO 48 | LED RGB adressable embarquée (WS2812) |
| Boutons **BOOT** (GPIO0) et **RESET** | Entrée en mode téléversement et redémarrage |

{% include message.html title="La LED embarquée est une RGB" message="La DevKitC-1 n'a pas de LED monochrome simple : sa LED intégrée est une **RGB adressable** (WS2812) sur GPIO48. Un `digitalWrite(LED_BUILTIN, ...)` ne suffit pas toujours à la piloter ; utiliser `rgbLedWrite(RGB_BUILTIN, r, g, b)`." status="is-info" icon="fas fa-lightbulb" %}

## Alimentation

- **USB-C** : la façon normale d'alimenter et de programmer la carte (5 V fournis par le port).
- **Broche 5V / VIN** : alimentation externe 5 V (régulée sur 3,3 V par la carte).
- **Broche 3V3** : sortie 3,3 V pour alimenter les périphériques (écran, capteurs).
- **GND** : masse commune, à relier à tous les périphériques.

{% include message.html title="Logique 3,3 V uniquement" message="Les broches de l'ESP32-S3 ne tolèrent pas 5 V en entrée. Pour dialoguer avec un composant 5 V, passer par un pont diviseur ou un convertisseur de niveau (voir le concept GPIO)." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Utilisation dans l'atelier

- Programmation via **PlatformIO** (voir la [fiche PlatformIO](/docs/references/software/platformIO/)) et le premier flashage dans le tutoriel [Vérification de la toolchain](/workshops/microcontroleur/tutorials/toolchain-blink/).
- Câblage figé (boutons, joystick, écran SPI) posé au fil des tutoriels et conservé jusqu'au projet.

## Sources

- [ESP32-S3-DevKitC-1 - Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/hw-reference/esp32s3/user-guide-devkitc-1.html)
- [Datasheet ESP32-S3](https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf)
