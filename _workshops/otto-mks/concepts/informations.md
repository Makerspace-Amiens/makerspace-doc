---
layout: documentation
hide_hero: false
doc_header: false
component_toc: true
hero_image: otto-mks.jpg
hero_darken: true
image: otto-mks.jpg
title: Le robot Otto
subtitle: Découvrez le robot Otto
type: doc,concept
tag: otto-mks
---

# Otto, c'est quoi ?

Le robot Otto est un petit robot humanoïde open-source, développé pour enseigner les bases de la robotique et de la programmation. Facile à assembler et à personnaliser, Otto est adapté aux enfants, aux étudiants et aux amateurs de robotique. Il est souvent utilisé dans les écoles et les ateliers de Makerspaces pour initier les jeunes aux STEM (Sciences, Technologie, Ingénierie, Mathématiques).

{% include image-row.html 
image_1 = "Otto_Original.png" 
image_2 = "Otto_Original_Pose.png"
%}


## Otto en 4 points clés

- **Open-source** : Le projet est disponible gratuitement en ligne, avec des plans, des fichiers de conception 3D et des guides d'assemblage.
- **Modulaire** : Otto peut être personnalisé en ajoutant des éléments mécaniques ou différents capteurs, modules de son, LED, etc.
- **Programmable** : Le robot peut être programmé avec Arduino, ou d’autres plateformes de programmation visuelle.
- **Impression 3D** : Les composants du robot peuvent être imprimés en 3D, ce qui permet aux utilisateurs de fabriquer leur propre Otto.

## Otto-MKS

Sur les bases de ce projet, nous avons créé une version sur mesure, made in **UniLaSalle Amiens**, en **améliorant et modifiant certains points**, par exemple, notre version de Otto peut se connecter en **Bluetooth** ou **WiFi** a un téléphone !


{% include image-row.html 
image_1 = "Otto-MKS-EXPLODED.png" 
image_2 = "OTTO-MKS.png"
%}

Pour construire un **Otto-MKS**, les composants suivants vous serons fournis :

{% include step-tuto.html 
greyBackground = false
image = "PCB.jpg"
title="Carte électronique Otto-MKS"
content="Conçue sur mesure au **MakerSpace**, cette carte intègre un micro-contrôleur **ESP32**, une **Led**, un **interrupteur**, des sorties pour servomoteurs, ainsi qu'un emplacement pour capteur ultrason HC-SR04 et d'autres connecteurs pour d'éventuelles composants additionnels (Gyroscope, Ecran...)" %}

{% include step-tuto.html 
greyBackground = false
image = "servo.png"
title="Servomoteurs"
content="4 servomoteurs pour les **mouvements de marche**" %}

{% include step-tuto.html 
greyBackground = false
image = "HC-SR04.png"
title="Capteur ultrason"
content="Permet au robot d'obtenir des **informations sur son environnement** (Présence, Distance, Mouvement...)" %}

{% include step-tuto.html 
greyBackground = false
image = "Battery.png"
title="Batterie 9V rechargeable"
content="Batterie **rechargeable en USB-C** aux dimensions standards d'une **pile 9V** simplifiant sa connection" %}

## Ottolympiades

Par **groupe de 3**, vous devrez fabriquer votre propre **OTTO-MKS** grâce aux **tutoriels** et **ressources** de ce site !
En fin d'année, lors de la **journée des projets**, un grand **tournoi** sera organisé pour tester vos robots à travers plusieurs épreuves !

{%
  include card_collections.html
  title="Epreuves"
  description="Testez votre robot sur tout les terrains !"
  type="ottolympiades"
%}

Pour tenter de remporter ces épreuves, vous devrez faire preuve de **créativité** en modifiant vos robots comme vous le voudrez en suivant les règles énoncées ici :

{% include message.html title="Bientôt !" message="Work in progress..Bientôt disponible !"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

**Imaginez**, **testez**, **itèrez**, **programmez**, ajoutez **des bras**, **des capteurs**, **des lumières**...en bref appropriez vous le projet Otto-MKS !

## Attendus académiques

Sur ce projet de première année, vous serez notez sur ces livrables :

- Un robot fonctionnel
- Une vidéo de 1min format **portrait** présentant **professionnellement** votre projet
- Le fichier OnShape de votre OTTO-MKS modifié
- Un **rapport de projet** OU un **site web** de documentation
- Votre participation aux **Ottolympiades**


## Ressources

- **Site officiel** : [Otto DIY](https://www.ottodiy.com/)
- **Communauté** : Otto DIY a une communauté active qui partage des idées, des modifications, et des améliorations du robot.
