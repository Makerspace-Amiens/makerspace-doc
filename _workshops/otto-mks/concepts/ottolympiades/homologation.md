---
layout: documentation
hide_hero: false
hero_image: bounding_box.png
hero_darken: true
image: bounding_box.png
component_toc: true
doc_header: true

title: 📏 Homologation
subtitle: Ensemble des règles à respecter pour participer aux épreuves !
description: Ensemble des règles à respecter pour participer aux épreuves ! 

author: Adrien BRACQ & Rémi LACOMBE
---

{% include message.html title="Attention" message="Cette page peut évoluer, pensez à la consulter régulièrement  
**V1.3 27/02/2025**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Règles de conception

{% include step-tuto.html
greyBackground = true
title = "Dimensions"
content="Premièrement, votre robot devra tenir, actionneurs déployés au maximum, dans un **volume** de :

**Largeur : 150 mm**  
**Longueur : 150 mm**  
**Hauteur : 200 mm**  

Pour valider cette règle, votre robot devra rentrer dans une **boîte aux bonnes dimensions**."
image="bounding_box.png" %}

{% include step-tuto.html
greyBackground = true
title = "Déplacement"
content="Même si l'ajout de nouveaux actionneurs est autorisé, votre robot devra **impérativement** se déplacer en **marchant**."
image="must_walk.png" %}

{% include step-tuto.html
greyBackground = true
title = "Fabrication" 
content="Votre robot doit être **fabriqué** et **programmé** par les étudiant(e)s sans l'utilisation d'un kit du commerce."
image="keep_aspect.png" %}

{% include step-tuto.html
greyBackground = true
title = "Modification" 
content="**La modification est fortement encouragée**, amusez-vous ! Mais le robot doit conserver **l'esprit** et **l'esthétique** du projet Otto.
Vous pouvez ajouter de nouveaux actionneurs (bras, mains...), mais ces derniers ne doivent pas pouvoir endommager le robot adverse.
Les dispositifs présentant un danger sont évidemment proscrits (lasers, lames, flammes... **bref, ne nous obligez pas à ajouter de nouvelles règles** 😅)."
image="otto_mod.png" %}

{% include step-tuto.html
greyBackground = true
title = "Marche / Arrêt" 
content="
L'**interrupteur** d'alimentation doit rester accessible en tout temps par l'arbitre afin d'arrêter le robot en cas de situation de danger pour **lui-même**, les **autres robots**, ou les **éléments de jeu**."
image="otto_switch.png" %}

## Comportement

{% include step-tuto.html
greyBackground = true
title = "Mode de contrôle"
content="En fonction de l'épreuve, **deux modes** de fonctionnement pourront vous être demandés, précisés dans le règlement de l'épreuve :

**Mode autonome**  
Votre robot doit être en mesure de réaliser l'épreuve **sans aide extérieure** ; il devra donc être **programmé à l'avance** pour jouer.
Le signal de démarrage est propre à chaque épreuve et est spécifié dans son règlement.

**Mode télécommandé**  
Vous devrez programmer une **solution de contrôle à distance**, par exemple grâce à l'application [RemoteXY](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/10-remoteXY/)."
image="command_mode.png" %}

{% include step-tuto.html
greyBackground = true
title = "Programme" 
content="
Aucun langage de programmation n'est imposé, cependant, la logique des **programmes** déployés doit pouvoir être **expliquée** en détail par l'équipe :  

L'utilisation de l'intelligence artificielle n'est **pas interdite** ; mais servez-vous-en comme d'une **aide à l'apprentissage**."
image="otto_program.png" %}

{% include step-tuto.html
greyBackground = true
title = "Arbitrage" 
content="L'arbitre s'engage a avoir connaissance du règlement, durant les phases de match, sa position et ses décisions doivent donc être respectées."
image="otto_referee.png" %}