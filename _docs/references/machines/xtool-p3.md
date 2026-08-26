---
layout: documentation
hide_hero: false
hero_image: hero.jpg
hero_darken: true
image: hero.jpg
component_toc: true
doc_header: true
type: equipment
tag:

title: xTool P3
subtitle: Découpeuse et graveuse laser CO2
description: "Découpeuse et graveuse laser CO2 de bureau xTool P3 : présentation, matériaux, sécurité et prise en main."
author: Raphael Peru

todo: 30
---

{% include safety-banner.html machine="xTool P3" link="/workshops/certification-securite/modules/laser/" %}

## Présentation de la xTool P3

La xTool P3 est une machine de découpe et de gravure laser CO₂ destinée aux projets de fabrication numérique. Dotée d’un laser CO₂ de 80 W, elle permet de travailler sur une large gamme de matériaux et convient aussi bien aux makers qu’aux petites séries de production.


## Caractéristiques principales

- **Puissance laser :** CO₂ 80 W
- **Zone de travail :** environ 915 × 458 mm
- **Vitesse maximale :** jusqu’à 1 200 mm/s
- **Positionnement :** système de double caméra pour visualisation et placement précis
- **Mise au point automatique :** autofocus automatique et plateforme motorisée réglant la hauteur

## Qu’est-ce qu’un laser CO₂ ?

### Fonctionnement d’un laser CO₂

Un laser CO₂ produit un faisceau lumineux extrêmement concentré capable de chauffer, graver ou découper différents matériaux. Contrairement à une lampe classique qui émet de la lumière dans toutes les directions, un laser génère une lumière très ordonnée, concentrée et dirigée.

### Le tube laser

Au cœur de la machine se trouve un tube contenant un mélange de gaz, principalement du dioxyde de carbone (CO₂), mais aussi généralement de l’azote et de l’hélium.

Lorsqu’une haute tension électrique est appliquée à ce mélange gazeux, les molécules sont excitées : elles absorbent de l’énergie et passent dans un état énergétique plus élevé.

Ces molécules excitées cherchent naturellement à revenir à leur état normal. En le faisant, elles libèrent leur surplus d’énergie sous forme de lumière infrarouge.

### L’amplification de la lumière

Aux deux extrémités du tube se trouvent des miroirs.

Lorsque les premiers photons sont émis, ils rebondissent d’un miroir à l’autre à l’intérieur du tube. À chaque passage, ils stimulent d’autres molécules excitées qui émettent à leur tour des photons identiques.

Ce phénomène, appelé **émission stimulée**, est le principe fondamental de tous les lasers.

Au fur et à mesure des allers-retours, la lumière est amplifiée jusqu’à former un faisceau très puissant et très cohérent.

L’un des miroirs est légèrement transparent, ce qui permet à une partie du faisceau de sortir du tube : c’est le rayon laser utilisé par la machine.

### Pourquoi un laser CO₂ est-il invisible ?

Le faisceau produit par un laser CO₂ possède une longueur d’onde d’environ **10,6 micromètres**, située dans l’infrarouge lointain.

L’œil humain ne peut voir que la lumière comprise approximativement entre **0,4 et 0,7 micromètre**. Le faisceau est donc totalement invisible.

La lumière rouge parfois visible sur certaines machines n’est généralement qu’un laser de positionnement servant à montrer où le faisceau principal sera envoyé.

### Comment le laser découpe-t-il un matériau ?

Après avoir quitté le tube, le faisceau est réfléchi par plusieurs miroirs puis concentré par une lentille.

Cette lentille réduit le diamètre du faisceau à une très petite taille. Toute l’énergie du laser se retrouve alors concentrée sur une surface minuscule.

La densité d’énergie devient si élevée que le matériau chauffé :

- brûle ;
- fond ;
- se vaporise ;
- ou se décompose chimiquement,

selon sa nature.

En déplaçant le point focal sur une trajectoire précise, la machine peut graver des motifs ou découper entièrement la matière.

### Pourquoi les lasers CO₂ sont-ils si efficaces sur le bois et l’acrylique ?

Les matériaux comme le bois, le carton, le cuir ou l’acrylique absorbent très bien le rayonnement infrarouge de **10,6 μm**.

L’énergie du faisceau est donc rapidement transformée en chaleur à l’intérieur du matériau.

À l’inverse, de nombreux métaux réfléchissent fortement cette longueur d’onde, ce qui rend leur découpe beaucoup plus difficile avec un laser CO₂ de puissance modérée.

## Matériaux compatibles

La xTool P3 permet de découper et/ou graver de nombreux matériaux.

### Matériaux pouvant être découpés

- Bois
- Acrylique
- Carton
- Papier
- Cuir
- Tissus

### Matériaux pouvant être gravés

- Bois
- Acrylique
- Carton
- Cuir
- Tissus
- Verre
- Céramique
- Bambou
- Certains métaux (avec le module infrarouge optionnel)

## Sécurité

La xTool P3 est conçue pour offrir un niveau élevé de sécurité. Elle dispose d’un caisson entièrement fermé, de plusieurs capteurs infrarouges, de caméras de surveillance ainsi que d’un système intégré de détection et d’extinction d’incendie.

Lorsqu’elle est utilisée conformément aux recommandations du constructeur et avec toutes ses protections actives, la xTool P3 bénéficie d’une certification de sécurité laser Classe 1.

Le laser de la xTool P3 est très puissant et chauffe la matière jusqu’à la vaporiser ou la brûler localement. Cette opération comporte un risque d’inflammation des matériaux et exige une surveillance permanente pendant l’utilisation.

### Matériaux interdits ou à éviter

Ne découpez ni ne gravez jamais les matériaux suivants, car ils peuvent s’enflammer ou dégager des gaz ou fumées dangereux :

- **PVC** - émet des gaz irritants et corrosifs pouvant provoquer des lésions aux yeux, aux voies respiratoires et à la peau, et endommager le châssis et l’optique.
- **ABS** (Acrylonitrile butadiène styrène) - peut produire des composés toxiques, dont des précurseurs de cyanure, lors de la découpe au laser.
- **Polycarbonate** - absorbe fortement le laser CO₂/infrarouge et présente un risque d’incendie.
- **Mousses** (polystyrène, polypropylène) - s’enflamment facilement et fondent au laser, ce qui n’a généralement aucun intérêt utile.
- **HDPE** - fond et devient collant, avec risque d’inflammation.
- **Fibres de carbone enduites** - les revêtements peuvent libérer des gaz toxiques nocifs pour la santé respiratoire.
- Vinyle
- Simili cuir contenant du PVC
- Matériaux contenant du chlore
- Matériaux peints avec des peintures de composition inconnue
- Matériaux composites d’origine inconnue

Si la composition d’un matériau est incertaine, ne l’utilisez pas sans vérification préalable.

### Conditions d’utilisation

- N’utilisez pas la xTool P3 à des températures inférieures à 0 °C.
- Surveillez la machine en permanence pendant la découpe ou la gravure.
- Faites fonctionner la ventilation d’extraction pendant toute la durée du travail et vérifiez qu’elle évacue bien l’air vers l’extérieur.

La xTool P3 produit des fumées, des particules fines et des composés organiques volatils. Une ventilation correcte et un filtrage adapté sont indispensables.

### Bonnes pratiques

- Ne découpez ni ne gravez jamais un matériau dont vous ignorez la composition.
- En cas de doute sur un matériau, demandez l’avis d’un responsable avant utilisation.
- Prenez garde à ne pas déposer d’objet sur les zones surlignées en rouge afin d’éviter d’endommager le couvercle et la machine.
- Évitez de poser des objets sur les zones orange par sécurité, même si rien ne semble se produire au premier abord.

Cette machine fait partie du [module de certification Découpe laser](/workshops/certification-securite/modules/laser/) : sa validation est obligatoire avant toute utilisation en autonomie.

## Usage recommandé

La combinaison de puissance, d’automatisation et de dispositifs de sécurité fait de la xTool P3 une solution complète pour les débutants comme pour les utilisateurs expérimentés, adaptée aux projets de grande taille et à la production de plusieurs pièces simultanément.
