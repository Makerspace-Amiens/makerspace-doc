---
layout: documentation
image: hero-motor-calculator.jpg
hide_hero: false
hero_image: hero-motor-calculator.jpg
hero_darken: true
component_toc: true
doc_header: true
type: ressource, robot

title: Outil de dimensionnement de la motorisation d'un robot
subtitle: Calculateur en ligne pour dimensionner ses moteurs
description: Script automatique permettant le calcul des données moteurs pour un robot.
author: Adrien Bracq

---

## 1. Présentation et Méthode

La méthode et l'outil se basent sur le travail de [cbenson](https://www.robotshop.com/community/user/cbenson) déposé sur le site de [Robotshop](https://www.robotshop.com/community/blog/show/dimensionnement-dun-moteur-dentranement) en 2013. 

L'outil permet de dimensionner rapidement des moteurs d'entrainement (pour un robot par exemple) en vue d'en faire une sélection sur catalogue.

Quelques points d'attention :
* Les résultats sont donnés **par** sortie
* Attention aux unités
* Le calculateur ne tient pas compte d'éventuels réducteurs positionnés en sortie du moteur. Plutôt que d'essayer de trouver un nouveau moteur, il est parfois intéressant d'envisager l'ajout d'un réducteur en sortie afin de s'adapter aux requis.
* Veillez à garder la valeur "inclinaison maximum" à 20° minimum même sur un sol plat.

## 2. Calculateur

{% include calculator-motor.html %}
