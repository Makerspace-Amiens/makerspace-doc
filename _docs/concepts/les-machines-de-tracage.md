---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: doc,concept
tag: machine-that-draws

title: Les types de machines de traçage
subtitle: Découvrez différents types de machines et de mouvements
description: Découvrez différents types de machines et de mouvements

time: 1
difficulty: 1

---

Dans cette section, vous découvrirez plusieurs types de cinématiques intéressantes pour concevoir une machine capable de dessiner. Chaque cinématique présente des caractéristiques uniques et des défis spécifiques. Vous êtes invités à explorer ces options et à choisir celle qui correspond le mieux à votre projet.

Nous vous encourageons également à effectuer des recherches complémentaires sur la cinématique qui vous intéresse. Comprendre son fonctionnement, ses avantages, et ses limites vous aidera à concevoir une machine efficace et innovante. Faites preuve de créativité et n’hésitez pas à expérimenter !

---

{% include step-tuto.html 
greyBackground = true
title="Traceur à alimentation continue"
content="
Un traceur à alimentation continue est une machine capable de dessiner ou d’imprimer sur un support en rouleau. Elle est couramment utilisée pour les plans d’architecture ou les impressions longues, car elle permet de produire des dessins sans limite de longueur. Le support est déplacé sous la tête de dessin grâce à des rouleaux motorisés. Ce type de machine convient bien pour des travaux répétitifs nécessitant de grandes surfaces." 
image="image.png"
image_2="image-1.png"
image_3="image-2.png"
image_4="image-3.png" %}

{% include step-tuto.html 
greyBackground = true
title="Machine Cartesienne"
content="Les machines cartésiennes fonctionnent en utilisant un système de coordonnées X, Y (et parfois Z). Une tête de dessin se déplace sur des axes perpendiculaires pour atteindre n'importe quel point dans une zone de travail rectangulaire. C’est le système de base pour de nombreuses imprimantes 3D et traceurs CNC. Elles sont simples à construire et offrent une précision élevée, ce qui les rend idéales pour les projets nécessitant des dessins techniques ou détaillés." 
image="image-4.png"
image_2="image-5.png"
image_3="image-6.png"
image_4="image-7.png" %}

{% include step-tuto.html 
greyBackground = true
title="Core XY"
content="Le système Core XY est une variation sophistiquée des machines cartésiennes, utilisant deux moteurs pour déplacer la tête de dessin simultanément sur les axes X et Y. Cela permet un mouvement plus rapide et fluide, tout en réduisant les vibrations, ce qui améliore la qualité des dessins. Si vous êtes intéréssé par l'optimisation des performances mécaniques, vous pourriez trouver ce concept particulièrement intéressant." 
image="image-8.png"
image_2="image-9.png"
image_3="image-10.png"
image_4="image-11.png" %}

{% include step-tuto.html 
greyBackground = true
title="Traceur Mobile"
content="Un traceur mobile est une machine capable de se déplacer librement sur une surface pour dessiner, comme un robot ou une machine à roues. Ce type de machine est souvent utilisé pour dessiner de grands motifs sur le sol ou sur d'autres surfaces planes. Ces traceurs sont compacts, mobiles et peuvent offrir des possibilités créatives uniques, notamment pour des œuvres d’art interactives ou surdimensionnées." 
image="image-12.png"
image_2="image-13.png"
image_3="image-14.png"%}

{% include step-tuto.html 
greyBackground = true
title="Machine polaire verticale"
content="Les machines polaires verticales, comme les traceurs muraux (DrawWall), dessinent sur des surfaces verticales en utilisant deux moteurs placés en haut qui déplacent une tête de dessin suspendue. Ce type de machine est idéal pour réaliser des fresques murales ou des dessins à grande échelle. Leur mécanique simple mais innovante offre un large champ d'exploration pour des projets artistiques ou décoratifs." 
image="image-15.png"
image_2="image-16.png"
image_3="image-17.png"%}


{% include step-tuto.html 
greyBackground = true
title="Machine à bras articulé"
content="Ces machines de dessin utilisent un ou plusieurs bras mécaniques pour déplacer un outil de dessin, comme un stylo, sur une surface. Les mouvements des bras permettent de tracer des courbes, des lignes et des motifs complexes. Ce type de conception est inspiré des robots manipulateurs industriels, offrant une flexibilité et une originalité dans la manière de dessiner. Les machines à bras articulés sont parfaites pour explorer les concepts de cinématique et de contrôle motorisé. " 
image="c6bddf4770887618897bd1237fdac89f.gif"
image_2="image-19.png"
image_3="image-20.png"
image_4="image-22.png" %}


---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}