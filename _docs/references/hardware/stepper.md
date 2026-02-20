---
layout: documentation
hide_hero: false
hero_image: 17HE12-1204S-500x500.jpg
hero_darken: true
image: 17HE12-1204S-500x500.jpg
component_toc: true
doc_header: true
type: doc,hardware

title: Moteur pas-à-pas
subtitle: Pour se déplacer précisemment
description: Cette page détaille le fonctionnement du moteur pas-à-pas
manufacturer:
  - name: OMC-stepperonline
    link: "https://www.omc-stepperonline.com/"

todo: 80
author: Adrien BRACQ
---

Le moteur pas à pas est un composant essentiel dans de nombreuses applications de robotique et de contrôle de mouvement, offrant une grande précision de positionnement par rapport aux moteurs à courant continu, sans nécessiter de composants électroniques supplémentaires, comme des encodeurs. Contrairement aux moteurs à courant continu classiques, le moteur pas à pas est conçu pour déplacer son axe par "pas" fixes, permettant ainsi un contrôle très précis du déplacement angulaire.

On retrouve ces moteurs dans de nombreuses applications courantes, comme les imprimantes 3D, les imprimantes classiques, les scanners, ainsi que les machines à commande numérique (CNC) utilisées pour la gravure ou la découpe.

## Principe de Fonctionnement

Un moteur pas à pas fonctionne en convertissant les impulsions électriques en mouvements angulaires discrets. Chaque impulsion appliquée au moteur le fait tourner d'un certain angle, appelé "pas". En contrôlant la séquence d'impulsions, il est possible de faire tourner le moteur dans les deux sens, de manière plus ou moins rapide.

Le fonctionnement repose sur le principe des électroaimants qui entourent le rotor. Ces électroaimants sont activés dans un ordre précis pour faire tourner le rotor de manière progressive. Cela signifie que la rotation du moteur est proportionnelle au nombre d'impulsions reçues, ce qui permet un positionnement précis et facile à contrôler.

## Caracteristiques du moteur pas-à-pas

Les moteurs pas à pas possèdent plusieurs caractéristiques qui les distinguent des autres types de moteurs électriques. Voici quelques-unes des caractéristiques les plus importantes :

**- Angle de Pas :** L'angle de pas correspond à l'angle de rotation du moteur à chaque impulsion. Typiquement, cet angle varie entre 1,8° (soit 200 pas par tour) et 0,9° (400 pas par tour), offrant une précision élevée pour le positionnement angulaire.

**- Couple de Maintien :** Le couple de maintien est le couple maximal que le moteur peut fournir lorsqu'il est sous tension et maintient une position fixe. C'est une caractéristique essentielle pour les applications nécessitant une forte stabilité de position.

**- Courant Nominal :** Le courant nominal est le courant nécessaire pour générer le couple maximal. Il est important de sélectionner un driver adapté qui puisse fournir ce courant de manière fiable sans surchauffe.

**- Tension de Fonctionnement :** La tension de fonctionnement spécifie la plage de tensions dans laquelle le moteur peut opérer de manière optimale. Une tension plus élevée peut améliorer les performances à haute vitesse, mais nécessite un driver capable de réguler correctement le courant.

**- Résolution :** La résolution d'un moteur pas à pas dépend du nombre de pas par tour. Plus le nombre de pas est élevé, plus la précision de positionnement est grande. Le mode micro-pas permet d'augmenter encore cette résolution en divisant chaque pas en plusieurs sous-pas.

**- Couple de Déplacement :** Le couple de déplacement est le couple fourni par le moteur lorsqu'il est en mouvement. Ce couple diminue souvent à mesure que la vitesse de rotation augmente, ce qui est une limite importante à prendre en compte lors du choix d'un moteur pour une application donnée.

Ces caractéristiques permettent de choisir le moteur pas à pas le mieux adapté en fonction des exigences spécifiques de chaque application, qu'il s'agisse de précision, de couple, ou de vitesse.


## Pilotage du moteur pas-à-pas

Pour piloter un moteur pas à pas, un driver spécialisé est nécessaire pour gérer la séquence des impulsions électriques qui commandent les bobines du moteur. Le driver convertit les signaux provenant d'un microcontrôleur, comme un Arduino, en impulsions de tension précises qui permettent de faire tourner le moteur d'un angle défini – chaque impulsion correspond à un pas. Cela permet de simplifier la commande du moteur, tout en améliorant la précision et la fiabilité du contrôle.

[En savoir plus : Le driver de moteur pas-à-pas.](../driver)

## Votre matériel

Pour le projet **Machine That Draws**, vous aurez accès aux materiel suivant : 

- **Moteur Pas-à-pas :** [17HE12-1204S - StepperOnline](https://www.omc-stepperonline.com/fr/e-serie-nema-17-bipolaire-26ncm-36-82oz-in-1-2a-42x42x30mm-4-fils-avec-1m-de-cable-et-connecteur-17he12-1204s)

{% include message.html title="Pour comprendre" message="Veillez à naviguer vers les liens du constructeur afin de comprendre le fonctionnement des différents éléments. Vous y trouverez les datasheets des composants, les dessins techniques, les caracteristiques techniques mais également des éléments de mise en service du matériel."
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="hardware"
%}