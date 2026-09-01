---
layout: documentation
hide_hero: false
hero_image: image.png
hero_height: is-small
hero_darken: true
image: image.png
component_toc: true
doc_header: true
tag: machines-that-draws

title: "GRBL-Servo : Calibration servo"
subtitle: Ajustez les impulsions PWM pour contrôler votre servo
description: Ajustez les impulsions PWM pour contrôler votre servo

time: 1
difficulty: 1

---

Dans ce tutoriel, vous allez ajuster les réglages de GRBL-Servo afin d’**adapter le signal** envoyé à votre servomoteur.

Après avoir flashé GRBL, la position du servo est normalement contrôlable depuis **UGS** via des commandes **GCODE**.

Mais dans notre cas, le servomoteur **vibre**, **chauffe** ou **reste bloqué en butée** au lieu de bouger entre ses deux positions.

Ce comportement indique généralement que les **paramètres d’impulsion (PWM)** ne correspondent pas à la plage réelle de votre servomoteur. Nous allons donc **ajuster ces réglages** pour qu’il fonctionne correctement.

{% include prerequisites.html
  description="Pour comprendre le contexte et les sujets abordés dans ce tutoriel, consultez d'abord les pages suivantes :"
  items="/docs/references/hardware/servomotor/,/docs/tutorials/electronics/servomotor/" %}

## Comprendre GRBL-Servo

La librairie **GRBL originale** est conçue pour contrôler une **fraiseuse à commande numérique**.  
**Une commande GCODE** est donc dédiée au **contrôle de la fraiseuse** (broche ou spindle) :

{% include message.html
message="**M3 S1000**  

- **M3** → démarre la broche
- **S1000** → définit la vitesse de rotation (par exemple ici 1000 tr/min)"

status="is-info" %}

**GRBL-Servo** détourne l'usage de cette commande, en la réassignant au contrôle d'un servomoteur.  

{% include message.html
message="**M3 S0** → Le servo va en position **0°**  

**M3 S255** → Le servo va en position **180°**"
status="is-info" %}

## L'origine du problème

Dans la **configuration par défaut** de **GRBL-Servo**, les **durées d'impulsion PWM** sont définies pour un **modèle** de servomoteur **différent**.  
L'**information** envoyée par le microcontrôleur au servo est **mal interprétée** par ce dernier et produit un **comportement indésirable**.

## La solution

Pour **corriger ce réglage**, il faut modifier les **fichiers de configuration** dans la **librairie GRBL-Servo** :

{% include message.html
message="**Passez cette étape** si la librairie est déjà installée"

status="is-warning" %}

{% include step-tuto.html image="folder.png" greyBackground = false title = "Installer GRBL-Servo" content="Après avoir **téléchargé** la librairie depuis la [**source github**](https://github.com/vankesteren/grbl-servo), **décompressez** et **ouvrez** le **.zip**, puis cherchez le dossier **grbl**, copiez-le dans votre dossier **libraries** (Documents\\Arduino\\libraries)."%}

{% include step-tuto.html image="spindle_control.png" greyBackground = false title = "Ouvrir spindle_control.c" content="Dans le **dossier grbl**, **trouvez** et **ouvrez** le fichier **spindle_control.c** dans un éditeur de texte."%}

{% include step-tuto.html image="edit_lines.png" greyBackground = false title = "Éditer les valeurs" content="Localisez les lignes suivantes :  

**#define RC_SERVO_SHORT      7**  
**#define RC_SERVO_LONG       17**  

Conformément à la [**documentation fournie**](https://www.feetechrc.com/6v-32kg-analog-steering-gear.html) par le **fabricant**, les servos **FS5103B** ont une plage de **durées d'impulsion** de **600→2400 μsec**.

Remplacez donc par :

**#define RC_SERVO_SHORT      9      // Correspond à 600 µs**  
**#define RC_SERVO_LONG       34     // Correspond à 2400 µs**
"%}

{% include step-tuto.html image="grbl_upload.png" greyBackground = false title = "Uploader GRBL-Servo" content="
Ouvrez **Arduino IDE**.  
Ouvrez le fichier d'upload de GRBL-Servo **File → Examples → grbl → grblUpload**.  
Cliquez finalement sur ![alt text](upload.png) pour uploader le firmware sur votre Arduino !
"%}

{% include message.html
message="Bien joué ! Votre servo devrait maintenant fonctionner normalement !"

status="is-info" %}
