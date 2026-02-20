---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: doc,hardware

title: CNC Shield
subtitle: Une carte de contrôle pour votre machine CNC
description: Cette page détaille le fonctionnement du CNC Shield permettant de brancher vos équipements
manufacturer:
  - name: AZ-Delivery
    link: "https://www.az-delivery.de/fr/products/az-delivery-cnc-shield-v3"

todo: 30
author: Adrien BRACQ
---

Le CNC Shield est une carte d'extension pour Arduino, qui permet de contrôler facilement des machines à commande numérique (CNC), comme des fraiseuses, des machines de gravure, des imprimantes 3D et des traceurs de dessin. La CNC Shield v3 est l'une des solutions les plus populaires pour transformer une carte Arduino Uno en contrôleur de machine CNC. Cette carte utilise le firmware GRBL, qui est un firmware open-source basé sur Arduino, permettant de gérer les moteurs pas à pas, les limites de course, les commandes G-code, ainsi que d'autres fonctionnalités essentielles pour le fonctionnement d'une machine CNC.

La CNC Shield est particulièrement utile car elle simplifie le montage des composants, en rendant les connexions électriques plus pratiques et en offrant une interface directe avec GRBL, permettant ainsi d'avoir un contrôleur de machine complet à moindre coût.


## Interfaces

Pour mettre en place une machine CNC basée sur la CNC Shield et Arduino, vous aurez besoin des éléments suivants :

- **Arduino Uno :** C'est la base du contrôleur. Il permet d'interpréter les commandes G-code et de les transformer en commandes électriques pour les moteurs.

- **CNC Shield v3 :** Carte d'extension qui se fixe sur l'Arduino et permet de connecter facilement les différents composants de la machine.

- **Pilotes de moteur pas à pas (comme A4988 ou DRV8825) :** Ces pilotes sont nécessaires pour contrôler les moteurs pas à pas en fournissant des courants élevés et en gérant les micro-pas pour une meilleure précision.

- **Moteurs pas à pas (NEMA 17 par exemple) :** Les moteurs pas à pas sont utilisés pour contrôler les déplacements sur chaque axe de la machine (X, Y, Z).

- **Alimentation externe :** Les moteurs pas à pas nécessitent une alimentation externe suffisante, typiquement entre 12V et 24V. La puissance de l'alimentation doit être adaptée à la charge des moteurs.

- **Limiteurs de course (Interrupteurs fin de course) :** Ces interrupteurs sont placés aux extrémités des axes pour éviter que la machine ne dépasse les limites physiques.

- **Câbles et connecteurs :** Pour relier les moteurs, l'alimentation et les interrupteurs de fin de course au CNC Shield.


{% include message.html title="Pour comprendre" message="Veillez à naviguer vers les liens du constructeur afin de comprendre le fonctionnement des différents éléments. Vous y trouverez les datasheets des composants, les dessins techniques, les caracteristiques techniques mais également des éléments de mise en service du matériel."
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include message.html title="Bientôt !" message="La page est en cours de construction. Bientôt, vous retrouverez ici les informations pour construire votre projet"
status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="hardware"
%}