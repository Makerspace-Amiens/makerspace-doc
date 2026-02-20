---
layout: documentation
image: tiroir_servante.jpg
hide_hero: false
hero_image: Vis.jpg
hero_darken: true
component_toc: true
doc_header: true
type: doc, how-to
tag: additive-manufacturing

title: Assemblage, quel vis choisir ?
subtitle: Guide de sélection des vis pour le prototypage mécanique
description: Guide de sélection des vis pour le prototypage mécanique (impression 3D, découpe laser)
author: Rémi Lacombe

time: 1
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: Aucun
    link: ""

softwares: 
  - label: Aucun
    link: ""

todo: 100
---

### Choisir le bon diamètre de vis

Le choix du diamètre de vis (M3, M4, M5, M6…) dépend principalement de trois critères :

#### Usage de la pièce à assembler

- Les **vis M3** conviennent bien aux **petites pièces techniques**, charnières, boîtiers électroniques, ou éléments de faible épaisseur.
- Les **vis M4** représentent un bon compromis entre **taille** et **résistance mécanique**. Elles sont bien adaptées aux **assemblages structurels légers ou modulaires**.
- Les **vis M5** et **M6** sont plus volumineuses et adaptées à des **pièces de grande taille**, soumises à des **efforts importants** ou à des manipulations fréquentes.

#### Épaisseur du matériau

- En **impression 3D**, il est important de laisser suffisamment de matière autour du trou pour que le serrage de la vis ne fragilise pas la pièce.
- En **découpe laser**, il faut veiller à ce que le matériau reste rigide après serrage, surtout sur des zones proches des bords.

**De manière générale :**
- Évitez d'utiliser des vis trop larges sur des parois fines.
- Préférez des vis M3 ou M5 pour la plupart des applications courantes.

{% include message.html 
title="Astuce" 
message="Il est possible de visser directement dans la matière en utilisant un diamètre de perçage légèrement inférieur au filetage. Cela permet à la vis de créer son propre pas dans le plastique.

👉 Cependant, cette méthode reste limitée : après quelques cycles de vissage/dévissage, le filetage peut s’user ou se déformer.  
Pour un **assemblage plus durable**, surtout si la pièce doit être démontée régulièrement, il est fortement recommandé d’utiliser un **insert taraudé**." 
status="is-info" 
dismissable="false" 
icon="fas fa-lightbulb" 
%}

{% include card_collections.html
  title=""
  description=""
  type="insert"
%}


### Intégrer des vis dans un assemblage

#### Impression 3D

L'impression 3D impose de **prévoir un jeu fonctionnel** dans les trous pour compenser les imprécisions liées au dépôt de matière (FDM). Voici les recommandations par filetage :

| Filetage | Trou de passage (Ø) | Vissage dans la matière (Ø)  | Trou pour insert taraudé (Ø)|
|----------|---------------------|------------------------------|-----------------------------|
| M3       | 3.3 mm              | 2.7 mm                       | 4.2 mm                      |
| M4       | 4.3 mm              | 3.5 mm                       | 5.8 mm                      |
| M5       | 5.3 mm              | 4.2 mm                       | 6.5 mm                      |
| M6       | 6.3 mm              | 5.0 mm                       | —                           |

> 💡 Pensez à imprimer une pièce de test avec plusieurs diamètres en cas de doute.

---

#### Découpe laser

En découpe laser, la **tolérance est automatiquement induite** par le **kerf** (la largeur de coupe du faisceau), qui varie selon le matériau (~0.1 à 0.2 mm par côté). Il est donc inutile d’ajouter de jeu dans le fichier de conception.

| Filetage | Diamètre à dessiner  |
|----------|----------------------|
| M3       | 3.0 mm               |
| M4       | 4.0 mm               |
| M5       | 5.0 mm               |
| M6       | 6.0 mm               |

> 💡 Astuce : si votre assemblage avec vis est un peu trop serré après découpe, un coup de lime ronde ou de foret manuel permet de corriger rapidement l’ajustement.

---

Dans un projet de **prototypage mécanique**, le choix du bon type de vis influe directement sur la **solidité**, **l’esthétique**, et la **facilité de montage**. Au MakerSpace, il y a **trois types de vis** :

{% include step-tuto.html 
title = "CHC : Tête Cylindrique"
greyBackground = true
content="

Les vis **CHC** (DIN 912) sont les plus courantes dans les assemblages mécaniques. Leur **tête cylindrique haute** avec empreinte hexagonale permet un **serrage fort** et une excellente tenue mécanique.

##### 📏 Dimensions standard

| Filetage (**d**) | Ø Tête (**dk**) | Hauteur tête (**k**) | Clé Allen (**s**) | Profondeur empreinte (**t**) |
|------------------|------------------|-----------------------|-------------------|-------------------------------|
| **M3**           | 5,5 mm           | 3,0 mm                | 2 mm              | 1,5 mm                        |
| **M4**           | 7,0 mm           | 4,0 mm                | 2,5 mm            | 2,0 mm                        |
| **M5**           | 8,5 mm           | 5,0 mm                | 4 mm              | 2,5 mm                        |
| **M6**           | 10,0 mm          | 6,0 mm                | 5 mm              | 3,0 mm                        |

##### ✅ Avantages

- **Serrage puissant** : parfait pour les pièces soumises à des efforts mécaniques.
- **Tête profonde** : l’empreinte hexagonale permet un bon maintien de la clé sans ripage.
- **Fréquemment utilisée** : compatible avec la majorité des composants mécaniques du commerce.
- **Encastrement facile** : tête cylindrique idéale pour créer un lamage simple.

##### 🔩 Intégration

Pour obtenir une finition propre et éviter que la tête ne dépasse de la pièce, il est recommandé de prévoir un **lamage cylindrique** :

- Le diamètre du lamage doit être **légèrement supérieur à la tête** (environ +0.2 mm).
- La profondeur du lamage correspond à la **hauteur de la tête**, ou un peu plus si vous voulez que la tête soit légèrement noyée.

**Par exemple, sous onshape :**  
Vous pouvez utiliser l’outil **Point** ![Point](Point.png) dans une esquisse pour définir rapidement les centres de tous vos perçages. 
Ensuite, utilisez l’outil **Perçage** ![Percage](Percage.png) (voir image ci-dessous) pour générer l’ensemble des perçages en une seule fonction paramétrique, ce qui facilite la modification. Sélectionnez l'option **Chambrage** et le diamètre de la vis, ici pour une **vis CHC traversante en M3** :

" 
image="CHC.png" 
image_2 = "Lamage.png"
%}


{% include step-tuto.html 
title = "BHC : Tête Bombée"
greyBackground = true
content="

Les vis **BHC** (DIN 7380) sont reconnaissables à leur **tête arrondie et basse**, avec une empreinte hexagonale creuse. Elles offrent un bon compromis entre tenue mécanique et aspect visuel soigné.

##### 📏 Dimensions standard

| Filetage (**d**) | Ø Tête (**dk**) | Hauteur tête (**dk**) | Clé Allen (**s**) | Profondeur empreinte (**t**) |
|------------------|------------------|----------------------|-------------------|-------------------------------|
| **M3**           | 5,7 mm           | 1,65 mm              | 2 mm              | 1,03 mm                       |
| **M4**           | 7,6 mm           | 2,2 mm               | 2,5 mm            | 1,3 mm                        |
| **M5**           | 9,5 mm           | 2,75 mm              | 3 mm              | 1,56 mm                       |
| **M6**           | 10,5 mm          | 3,3 mm               | 4 mm              | 2,08 mm                       |

##### ✅ Avantages

- **Esthétique** : la tête bombée donne un rendu propre, sobre, professionnel.
- **Profil bas** : plus discrète qu'une vis CHC, idéale si on veut éviter qu'une tête dépasse trop.
- **Agréable au toucher** : pas d’arête vive — on ne s’accroche pas dessus.
- **Pas de lamage nécessaire** : on peut les visser directement à la surface, pratique sur pièces fines.
- **Bonne surface d'appui** : répartit bien la pression sous la tête.

" 
image="BHC.png" %}

{% include step-tuto.html 
title = "FHC : Tête Fraisée"
greyBackground = true
content="

Les vis **FHC** (DIN 7991) ont une **tête conique à 90°** qui s'encastre complètement dans la pièce lors du serrage. Elles permettent un **montage affleurant**, idéal pour les surfaces qui doivent rester planes ou pour des finitions soignées.

##### 📏 Dimensions standard

| Filetage (**d**) | Ø Tête (**dk**) | Hauteur tête (**k**) | Clé Allen (**s**) | Profondeur empreinte (**t**) |
|------------------|------------------|-----------------------|-------------------|-------------------------------|
| **M3**           | 6,0 mm           | 1,86 mm               | 2 mm              | 1,2 mm                        |
| **M4**           | 8,0 mm           | 2,48 mm               | 2,5 mm            | 1,5 mm                        |
| **M5**           | 10,0 mm          | 3,10 mm               | 3 mm              | 2,0 mm                        |
| **M6**           | 12,0 mm          | 3,72 mm               | 4 mm              | 2,4 mm                        |

##### ✅ Avantages

- **Affleurement parfait** : la tête est complètement noyée dans la matière.
- **Aspect propre** : idéal pour les faces visibles ou manipulées.
- **Centrage automatique** : la forme conique aide à bien aligner les pièces.
- **Pas de gêne mécanique** : aucune partie saillante sur la surface.

##### 🔩 Intégration

Pour obtenir une **fixation affleurante** (où la tête ne dépasse pas), une **fraisure conique à 90°** est nécessaire.

- Le diamètre de la fraisure doit être **légèrement supérieur à la tête** (environ +0.2 mm).
- La profondeur correspond à la **hauteur de la tête conique**, afin que la tête soit parfaitement noyée dans la pièce.

**Par exemple, sous Onshape :**  
Comme pour les vis CHC, utilisez l’outil **Point** ![Point](Point.png) dans une esquisse pour définir les centres des perçages.  
Ensuite, utilisez l’outil **Perçage** ![Percage](Percage.png) avec l’option **Fraisé** (chamfer) pour créer un logement adapté.
Ici, pour une **vis FHC traversante en M3**.

> **Astuce Laser :** Même si la découpe laser ne permet pas de créer de fraisure conique, il est tout à fait possible de **chanfreiner manuellement les trous** à l’aide d’une **fraise en V à 90°** (ou foret). Cela permet d’intégrer proprement la tête d’une vis FHC dans une plaque afin qu’elle soit **affleurante**, sans modifier votre conception.


" 
image="FHC.png" 
image_2 = "Fraisure.png"%}

{% include card_collections.html
  title="Pour aller plus loin"
  description="Découvrez aussi notre guide sur les inserts taraudés et l’utilisation des écrous encastrés."
  type="tutorial"
%}
