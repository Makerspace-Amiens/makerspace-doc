---
layout: documentation
image: resistances.jpg
hide_hero: false
hero_image: resistances.jpg
hero_darken: true
component_toc: true
doc_header: true
type: ressource

title: Outil de visualisation des valeurs de resistance
subtitle: Calculateur de code couleurs des résistances
description: Décodez facilement les bagues de couleur d’une résistance pour connaître sa valeur en ohms, ou saisissez une valeur pour obtenir les couleurs correspondantes.
author: Adrien Bracq

todo: 10

---

## 1. Comprendre les résistances et leur marquage

Une résistance est un composant électronique qui limite le passage du courant électrique dans un circuit. Sa valeur, exprimée en ohms (Ω), détermine l’intensité du courant qui peut circuler pour une tension donnée.

Comme les résistances sont de très petites tailles, leur valeur n’est pas inscrite en chiffres mais codée par des bagues de couleur. Chaque bague correspond à une information :

- **1ʳᵉ et 2ᵉ bague (et parfois 3ᵉ) :** chiffres significatifs de la valeur.
- **Bague suivante :** multiplicateur (facteur de puissance de 10).
- **Dernière bague :** tolérance, c’est-à-dire la précision de la valeur (par exemple ±5%).

Cette page vous permet de traduire les couleurs en valeur ou, à l’inverse, d’entrer une valeur en ohms pour obtenir les couleurs correspondantes.

## 2. Visualisateur

![alt text](resistance.png)

{% include value-resistor.html %}