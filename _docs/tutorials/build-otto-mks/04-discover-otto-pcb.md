---
layout: documentation
hide_hero: false
hero_image: IMG_20250128_151446-EDIT.jpg
hero_darken: true
image: IMG_20250128_151446-EDIT.jpg
component_toc: true
doc_header: true
type: tutorial
tag: otto-mks

title: 04 - Découvrez la carte du Otto !
subtitle: Les composants, son fonctionnement, ses capacités...
description: Vous découvrerez ici la carte électronique qui pilote le robot OttoMks

time: 1
difficulty: 1

author: Adrien BRACQ & Rémi LACOMBE
---

## Présentation de la carte

La carte du robot **Otto-MKS** a été conçue par le **MakerSpace d'UniLaSalle Amiens** pour faciliter l'utilisation du robot Otto. Cette carte intègre un microcontrôleur et permet de piloter Otto ainsi que ses différents éléments. 

### Caractéristiques principales :
- **Microcontrôleur ESP32-C3** basé sur un module **XIAO** (voir détails ci-dessous).
- **Connexion pour une batterie 9V rechargeable**.
- **Interrupteur à levier** pour la mise sous tension.
- **LED témoin d'alimentation**.
- **Connecteur pour un capteur ultrason HC-SR04**.
- **4 connecteurs pour servomoteurs 9g**.
- **Buzzer** intégré pour les signaux sonores.

### Options supplémentaires :
Des fonctionnalités supplémentaires peuvent être ajoutées en soudant des connecteurs pour intégrer :
- Un **écran OLED I2C 0,91"**.
- Un **extendeur de 16 servomoteurs PCA9685**.
- Un **capteur 6DOF MPU6050**, comprenant :
  - Accéléromètre 3 axes.
  - Gyroscope 3 axes.
- **Deux servomoteurs supplémentaires**

### Caractéristiques techniques :

- **Dimensions** : 50 x 60 mm  
- **Fixation** : Par le pas de vis de l'interrupteur  
- **Alimentation batterie** : 9V standard (Vmin : 7V, Vmax : 12V)  
- **Régulation 5V** : 1A pour les servomoteurs  
- **Régulation 3.3V** : Intégrée au module XIAO, 700 mA max  

---

{% include image-row.html 
image_1 = "IMG_20250128_151541-EDIT.jpg"
image_2 = "IMG_20250128_151625-EDIT.jpg"
%}

---

{% include 3d-model.html model="Otto-ESP32-XIAO-Lite.glb" poster="kicanvas-example.webp" %}

---

## Schémas et Routage de la carte

Vous trouverez ci-dessous les schémas et PCB interactifs de la carte **Otto-MKS**. Les sources de la carte sont disponibles sur notre [repository GitHub](https://github.com/Makerspace-Amiens/otto-mks/tree/main/sources/Electronics/Otto-ESP32-XIAO-Lite).  

<kicanvas-embed src="Otto-ESP32-XIAO-Lite.kicad_sch" controls="basic">
</kicanvas-embed>

<kicanvas-embed src="Otto-ESP32-XIAO-Lite.kicad_pcb" controls="advanced">
</kicanvas-embed>

## Détails du microcontrôleur

La carte Otto, conçue par le MakerSpace, est basée sur le module XIAO-ESP32C3. Ce module intègre un microcontrôleur ESP32-C3, ainsi que tous les composants nécessaires pour assurer son fonctionnement de manière autonome.

{% include image-row.html 
image_1 = "xiao-c3.png" 
image_2 = "xiao-c3-34.png"
image_3 = "xiao-c3-antenna.png"
%}

Le [**Seeed Studio XIAO ESP32C3**](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/) est une petite carte de développement conçue pour les projets IoT (objets connectés). Elle utilise la puce **ESP32-C3** d’Espressif, qui intègre un processeur **RISC-V 32 bits** avec de bonnes performances et une faible consommation d’énergie. Cette carte permet de se connecter facilement à Internet grâce au **WiFi (802.11 b/g/n)** et de communiquer avec d'autres appareils via le **Bluetooth 5 (BLE)**.  

Un **antenne externe** est incluse pour améliorer la portée du signal sans fil. La carte est compacte et peut être facilement intégrée dans différents projets grâce à son design simple à souder.  

Elle dispose de **11 broches numériques**, utilisables pour contrôler des composants comme des LED ou des moteurs (PWM), et de **3 broches analogiques** pour mesurer des signaux comme la lumière ou la température (ADC). Elle est aussi compatible avec plusieurs types de communication, comme :  
- **UART** (pour communiquer avec d'autres cartes),  
- **I2C** (pour connecter des capteurs),  
- **SPI** (pour échanger rapidement des données avec d'autres composants).  

Sur la carte, on trouve aussi un **bouton de réinitialisation** et un bouton pour entrer en **mode programmation (bootloader)**.  

Grâce à son faible coût et sa faible consommation d’énergie, cette carte est idéale pour les projets IoT simples, comme des objets connectés à batterie ou des dispositifs portables.  

# Caractéristiques du XIAO ESP32C3

## Performances et connectivité
- **Processeur puissant** : ESP32-C3, processeur monocœur 32 bits RISC-V fonctionnant jusqu'à 160 MHz.
- **Wi-Fi intégré** : Compatible avec le protocole IEEE 802.11 b/g/n, prenant en charge plusieurs modes : Station, SoftAP, SoftAP + Station et mode promiscuité.
- **Bluetooth 5.0** : Prise en charge du Bluetooth Low Energy (BLE) et du maillage Bluetooth (Bluetooth Mesh).
- **Basse consommation d'énergie** : Consommation en mode veille profonde d'environ 43μA.
- **Antenne externe** : Fournie pour améliorer la réception du signal sans fil.

## Fonctionnalités supplémentaires
- **Gestion de la batterie** : Puce de charge intégrée pour la gestion de la charge et de la décharge des batteries lithium.
- **Mémoire intégrée** : 400 KB de RAM et 4 MB de mémoire Flash embarquée.
- **Taille ultra-compacte** : Seulement 21 x 17,8 mm, idéal pour les projets portables et les objets connectés.
- **Sécurité avancée** : Accélérateurs matériels pour le chiffrement AES-128/256, Hash, RSA, HMAC, signature numérique et démarrage sécurisé.
- **Interfaces multiples** :
  - 1x I2C
  - 1x SPI
  - 2x UART
  - 11x GPIO (PWM)
  - 4x ADC
  - 1x interface JTAG
- **Design pratique** : Composants montés sur une seule face pour un assemblage facile.

---

## Comparaison des spécifications

| Caractéristique        | XIAO ESP32C3          | Seeeduino XIAO     | XIAO RP2040         | XIAO nRF52840       |
|-----------------------|----------------------|-------------------|--------------------|--------------------|
| **Processeur**         | ESP32-C3 @160MHz      | SAMD21 M0+@48MHz   | RP2040 Dual-core @133MHz | nRF52840 M4F@64MHz |
| **Connectivité**       | WiFi & Bluetooth 5.0  | N/A               | N/A                | BLE/NFC             |
| **Mémoire**            | 400KB RAM, 4MB Flash  | 32KB RAM, 256KB Flash | 264KB RAM, 2MB Flash | 256KB RAM, 2MB Flash |
| **Capteurs intégrés**  | N/A                   | N/A               | N/A                | N/A                 |
| **Interfaces**         | I2C/UART/SPI          | I2C/UART/SPI       | I2C/UART/SPI        | I2C/UART/SPI        |
| **PWM/ADC**            | 11/4                   | 11/11              | 11/4                | 11/6                |
| **Boutons**            | Reset/Boot            | N/A               | Reset/Boot          | Reset               |
| **LED intégrées**      | Charge LED            | N/A               | RGB LED             | RGB/Charge LED      |
| **Charge de batterie** | Intégrée               | N/A               | N/A                 | BQ25101             |
| **Langages**           | Arduino/MicroPython   | Arduino/CircuitPython | Arduino/MicroPython/CircuitPython | Arduino/MicroPython |

---

## Présentation matérielle

### Schéma des broches (Pinout)

![alt text](pinout-xiao-c3.png)

- **A3 (GP105)** : Utilise l'ADC2, qui peut être affecté par des signaux parasites. Pour des lectures fiables, utiliser les broches ADC1 (A0, A1, A2). Voir la documentation officielle de l'ESP32-C3.

---

## Détails des broches d'alimentation

{% include image-row.html 
image_1 = "details-xiao-C3.png" 
image_2 = "details-xiao-C3-rear.png"
%}

- **5V** : Sortie 5V depuis le port USB. Peut être utilisé comme entrée d'alimentation avec une diode de protection (Schottky ou autre).
- **3V3** : Sortie régulée 3.3V avec un courant maximum de 700mA.
- **GND** : Masse pour l'alimentation et les signaux.



---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}