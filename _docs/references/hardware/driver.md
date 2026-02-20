---
layout: documentation
hide_hero: false
hero_image: image-1.png
hero_darken: true
image: image-1.png
component_toc: true
doc_header: true
type: doc,hardware

title: Driver de moteur
subtitle: Pour piloter un moteur pas-à-pas
description: Cette page détaille le fonctionnement du driver de moteur
manufacturer:
  - name: Pololu
    link: "https://www.pololu.com/product/1182"

todo: 80
author: Adrien BRACQ
---

Pour piloter un moteur pas à pas, un driver spécialisé est nécessaire pour gérer la séquence des impulsions électriques qui commandent les bobines du moteur. Le driver convertit les signaux provenant d'un microcontrôleur, comme un Arduino, en impulsions de tension précises qui permettent de faire tourner le moteur d'un angle défini – chaque impulsion correspond à un pas. Cela permet de simplifier la commande du moteur, tout en améliorant la précision et la fiabilité du contrôle.

Les drivers couramment utilisés incluent des modèles tels que l'A4988, le DRV8825 ou le TB6600. Ces drivers permettent de régler plusieurs paramètres essentiels, comme le courant traversant les bobines et le mode de fonctionnement du moteur (plein pas, demi-pas, micro-pas). Le mode micro-pas est particulièrement utile lorsqu'une grande précision est requise, car il divise chaque pas en plusieurs sous-pas, offrant ainsi une résolution accrue et un mouvement plus fluide.

## Schéma de Connexion

Le schéma de connexion typique implique de relier les bornes du moteur pas à pas au driver, puis de connecter le driver au microcontrôleur. Le driver reçoit des signaux de direction et de pas du microcontrôleur pour déterminer le sens et la distance de rotation du moteur. Il est également possible de régler les limitations de courant directement sur le driver, ce qui est important pour éviter de surchauffer le moteur ou d'endommager les composants électroniques.

![alt text](image.png)

## Modes de Contrôle et Considérations Techniques

Le contrôle du moteur pas à pas via un driver permet d'utiliser différents modes de commande, comme le mode plein pas, demi-pas et micro-pas. Chaque mode offre différents niveaux de précision et de fluidité de mouvement. Le mode micro-pas, par exemple, divise chaque pas en de multiples sous-pas, réduisant ainsi les vibrations et permettant un mouvement beaucoup plus fin et contrôlé, idéal pour les applications de précision comme l'impression 3D ou les machines CNC.

Pour le driver A4988 par exemple, le tableau de relation entre la résolution et les jumpers de configuration est le suivant :

| MS1  | MS2  | MS3  | Microstep Resolution |
|------|------|------|----------------------|
| Low  | Low  | Low  | Full step            |
| High | Low  | Low  | Half step            |
| Low  | High | Low  | Quarter step         |
| High | High | Low  | Eighth step          |
| High | High | High | Sixteenth step       |

Pour choisir le bon driver, il est essentiel de considérer les caractéristiques électriques du moteur pas à pas, comme le courant nominal et la tension de fonctionnement. Un driver mal adapté pourrait entraîner des problèmes de surchauffe ou une performance dégradée. Par ailleurs, il est important de bien refroidir le driver, notamment pour les applications qui demandent un courant élevé, car les drivers peuvent chauffer lors de leur utilisation prolongée.

## Réglage du courant du driver

Pour vous aider à correctement régler le courant de foncitonnement du driver pour votre moteur, vous pouvez suivre cette documentation : 

{% include youtube.html video="89BHS9hfSUk" %}

## Votre matériel

Pour le projet **Machine That Draws**, vous aurez accès aux materiel suivant : 

- **Driver :** [A4988](https://www.pololu.com/product/1182)

{% include message.html title="Pour comprendre" message="Veillez à naviguer vers les liens du constructeur afin de comprendre le fonctionnement des différents éléments. Vous y trouverez les datasheets des composants, les dessins techniques, les caracteristiques techniques mais également des éléments de mise en service du matériel."
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="hardware"
%}