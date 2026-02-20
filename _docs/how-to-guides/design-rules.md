---
layout: documentation
hide_hero: false
hero_image: "page_1_img_20.png"
hero_darken: true
image: "page_1_img_20.png"
component_toc: true
doc_header: true
type: doc, how-to
tag: additive-manufacturing

title: Règles de conception et conseils
subtitle: Concevoir pour l'impression 3D
description: Un ensemble de règles et de conseils pour mieux concevoir à destination de l'impression 3D
author: Adrien Bracq - Derivated from hydraresearch3d.com

time: 2
difficulty: 1

---

{% include step-tuto.html 
greyBackground = true 
title = "Chanfreins de base"
content="
**Valeur recommandée** : ~0,3 mm (hauteur de la première couche + hauteur de couche)

Pour améliorer la précision des bords de base de votre pièce, il est conseillé d'ajouter un petit chanfrein d’environ ~0,3 mm à tous les bords qui seront en contact avec la surface d'impression. Cela réduira les risques qu'une première couche légèrement trop écrasée crée une bavure autour de la base de la pièce. Cela n'est pertinent que si vous imprimez votre pièce sans bordure (brim). Si vous imprimez avec une bordure, vous devrez utiliser un outil d'ébavurage ou un couteau de loisir pour enlever la bordure et nettoyer la base de la pièce."
image="page_1_img_20.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Coins de base"
content="
**Valeur recommandée** : R > 4 mm

Pour les pièces plus grandes, il est recommandé d’arrondir les coins en contact avec la surface d'impression. Les coins aigus concentrent les forces de rétrécissement qui surviennent lors du refroidissement de la pièce (gauchissement), tandis que les coins arrondis dispersent ces forces. Plus le rayon des coins arrondis est grand, meilleures sont vos chances de réduire le gauchissement, du moins en théorie. Un rayon de coin de 4 mm ou plus est recommandé."
image="page_1_img_21.png" %}

{% include step-tuto.html 
greyBackground = true
title = "Pontage"
content="
**Valeur recommandée** : < 10 mm

Les ponts horizontaux sans support ne doivent pas dépasser 10 mm pour éviter les défauts et échecs d'impression. Intégrez des structures verticales dans votre modèle pour soutenir le pont ou activez les supports imprimés lors du tranchage. Vous pouvez constater que vous pouvez franchir des écarts beaucoup plus importants selon le matériau et la hauteur des couches, mais maintenir les ponts <10 mm est un bon point de départ."
image="page_1_img_22.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Jeu"
content="
**Valeurs recommandées** : 
- ~0,3 mm pour un ajustement lâche
- ~0,15 mm pour un ajustement serré

Lorsque des pièces imprimées en 3D doivent s'emboîter, un jeu de ~0,3 mm pour un ajustement lâche et ~0,15 mm pour un ajustement serré est recommandé pour garantir un bon ajustement. Le jeu nécessaire peut varier légèrement en fonction du matériau et de la géométrie."
image="page_1_img_23.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Relief et Gravure (Horizontal)"
content="
**Recommandé** :
- **Relief** : >0,9 mm de large (2x largeur d'extrusion) x <0,9 mm de haut
- **Gravure** :  >0,5 mm de large x <0,9 mm de profondeur (2x largeur d'extrusion)

Pour garantir que les détails en relief ou gravés sur une surface verticale soient bien définis et visibles, la largeur de la ligne doit être au moins deux fois le diamètre de votre buse en profondeur. Ils peuvent être un peu plus grands, mais risquent de s'affaisser s'ils sont trop volumineux."
image="page_1_img_24.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Relief et Gravure (Vertical)"
content="
**Recommandé** :
- **Relief** : >0,9 mm de large (2x largeur d'extrusion) x <2 mm de haut
- **Gravure** : >0,5 mm de large x <2 mm de profondeur

Pour garantir que les détails en relief ou gravés sur une surface horizontale soient bien définis, la largeur de ligne doit être d'au moins 0,5 mm pour les gravures et 0,9 mm pour les reliefs. Il n'y a pas de limite à la hauteur des détails, mais les modéliser à 2 mm de haut permettra de rendre les éléments clairement visibles."
image="page_1_img_25.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Taille des Détails"
content="
**Valeur Recommandée** : >1,8 mm (4x largeur d'extrusion)

La taille minimale des détails pour les structures imprimées est de 4 fois la largeur de la ligne d'extrusion. Une règle générale pour la modélisation est de ne pas créer de détails plus petits que 1,8 mm."
image="page_1_img_26.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Congés"
content="
**Valeur Recommandée** : > ø1 mm

Les congés sont une excellente solution pour éliminer les angles vifs ou réduire les concentrations de contraintes aux coins. Cependant, il n'est pas recommandé de modéliser des congés orientés vers le bas sur des pièces imprimées en 3D. Les chanfreins sont une bonne alternative pour les arêtes orientées vers le bas que vous souhaitez adoucir. Les congés orientés vers le bas n'entraîneront pas l'échec de l'impression, mais ils risquent de produire une qualité esthétique ou de surface médiocre."
image="page_1_img_27.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Taille des Trous"
content="
**Valeur Recommandée** : > ø2 mm

Il n'est pas recommandé de modéliser des trous avec un diamètre inférieur à 2 mm pour garantir leur bonne définition. Si un trou d'une taille précise est nécessaire, modélisez-le légèrement plus petit, puis percez-le pour obtenir la tolérance appropriée."
image="page_1_img_28.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Trous (Horizontaux)"
content="
**Décalage Recommandé** : a ≈ 0,3 mm

Pour imprimer des trous horizontaux avec une meilleure tolérance, il est recommandé de modéliser les caractéristiques supplémentaires indiquées sur l'image où la distance de décalage a correspond à la hauteur de couche de votre impression. Si vous utilisez une petite hauteur de couche comme 100 μm, utilisez 2*a. Cela compensera tout affaissement qui se produira dans les sections en porte-à-faux abruptes des trous horizontaux imprimés ainsi que l'aplatissement du bas des trous dû au processus de superposition des couches."
image="page_1_img_29.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Porte-à-faux"
content="
**Valeur Recommandée** : < 50°

Pour éviter que les couches ne s'affaissent ou ne se recourbent sur des porte-à-faux imprimés, il est recommandé d'éviter d'imprimer des porte-à-faux non supportés avec des angles supérieurs à 50° (mesurés à partir de l'axe vertical vers le bas). La qualité des porte-à-faux peut également dépendre du matériau utilisé, certains matériaux nécessitant un support à des angles plus faibles que d'autres."
image="page_1_img_30.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Goupilles"
content="
**Valeur Recommandée** : > ø1,8 mm (4x largeur d'extrusion)

Pour garantir une bonne définition des goupilles, leur diamètre doit être au moins quatre fois la largeur de la ligne d'extrusion afin d'assurer l'impression d'au moins deux périmètres complets. Une bonne règle générale est un diamètre de ø1,8 mm. Si votre modèle nécessite des goupilles fonctionnelles, il peut être préférable d'utiliser des goupilles du commerce et de modéliser des trous dans les deux côtés de l'articulation."
image="page_1_img_31.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Filetages (Modélisés)"
content="
**Valeur Recommandée** : > M5 ou UNC #10

Les filetages modélisés pour l'impression 3D peuvent bien fonctionner pour les tailles de filetage plus grandes. Il n'est pas recommandé de modéliser des filetages plus petits que M5 ou UNC #10 afin qu'ils fonctionnent efficacement. Si vous avez besoin de filetages plus petits que M5 ou #10, ils doivent être ajoutés avec des techniques de post-traitement telles que le taraudage ou l'utilisation d'inserts filetés à chaud. NE PAS utiliser de filetages modélisés/imprimés pour les trous horizontaux."
image="page_1_img_32.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Filetages (Post-Traitement)"
content="
- **Taraudage** : Modélisez un trou à 90 % du diamètre du filetage.
- **Auto-taraudage** : Modélisez un trou à 96 % du diamètre du filetage.
- **Inserts à chaud** : Modélisez un trou à 98 % du diamètre extérieur de l'insert.

Les filetages peuvent être ajoutés lors du post-traitement de plusieurs façons. Vous pouvez tarauder le trou, dans ce cas modélisez le trou à 90 % du diamètre du filetage. Vous pouvez insérer une vis auto-taraudeuse dans un trou non fileté, dans ce cas modélisez le trou à 96 % du diamètre du filetage. Vous pouvez également utiliser des inserts filetés à chaud, dans ce cas modélisez le trou à 98 % du diamètre extérieur de l'insert."
image="page_1_img_33.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Arêtes Non Supportées"
content="
**Valeur Recommandée** : < 0,9 mm (2x largeur d'extrusion)

Il est généralement recommandé d'éviter d'imprimer des structures horizontales non supportées de plus de deux largeurs de ligne d'extrusion, une bonne règle générale est 0,9 mm. Il est peu probable que des arêtes non supportées plus larges provoquent des échecs d'impression, mais elles entraîneront des problèmes esthétiques importants. Si ces structures sont nécessaires pour votre modèle, modifier l'orientation d'impression et/ou activer les supports les rendra imprimables."
image="page_1_img_34.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Trous Non Supportés"
content="
**Valeur Recommandée** : Extrusion 1 = hauteur de couche, Extrusion 2 = hauteur de couche x 2

Sans des considérations de conception particulières, les trous traversant des ponts non supportés ne s'imprimeront pas correctement. Cette technique peut être utilisée pour imprimer de tels trous sans ajouter de supports à votre modèle.

Lors de la conception de votre pièce, extrudez deux rectangles tangents à votre trou :

- La première extrusion doit avoir une épaisseur correspondant à la hauteur de couche que vous prévoyez d'imprimer.
- La deuxième extrusion doit avoir une épaisseur correspondant à deux fois la hauteur de couche que vous prévoyez d'imprimer.

Cette technique peut être un peu difficile à visualiser jusqu'à ce que vous l'ayez essayée plusieurs fois."
image="page_1_img_35.jpeg" %}

{% include step-tuto.html 
greyBackground = true 
title = "Épaisseur des Parois"
content="
**Valeur Recommandée** : > 0,9 mm (2x largeur d'extrusion)

Il est fortement recommandé de modéliser des parois d'au moins deux largeurs d'extrusion, généralement 0,9 mm. Des parois plus fines peuvent poser des problèmes d'impression et ne seront pas très solides. Les périmètres sont la principale source de solidité dans une pièce imprimée en 3D, donc si la solidité est importante, il est recommandé de rendre les parois plus épaisses que deux périmètres. L'augmentation des périmètres nécessitera des ajustements dans la modélisation et le tranchage."
image="page_1_img_36.png" %}

---

{% include message.html 
title="Information" 
message="Le contenu est dérivé du site [https://www.hydraresearch3d.com](https://www.hydraresearch3d.com) sous licence 
[**CC BY-SA 4.0** (Attribution-ShareAlike 4.0 International)](https://creativecommons.org/licenses/by-sa/4.0/)" 
status="is-info" 
icon="fas fa-info-circle" %}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres formations pour approfondir vos connaissances"
  type="course"
%}
