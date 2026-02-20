---
layout: documentation
image: image-17.png
hide_hero: false
hero_image: image.png
hero_darken: true
component_toc: true
doc_header: true
type: doc, how-to
tag: additive-manufacturing

title: Utiliser des inserts taraudés
subtitle: Comment intégrer des inserts taraudés dans votre conception
description: 
author: Adrien Bracq

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

## 1. Pourquoi utiliser des inserts taraudés en impression 3D ?

Dans de nombreux projets utilisant des pièces imprimées en 3D, il est nécessaire d’assembler différents éléments à l’aide de vis. Or, visser directement dans du plastique (même renforcé) pose rapidement problème : le filetage s’abîme, se déforme, ou finit par lâcher après quelques cycles de vissage/dévissage. C’est particulièrement vrai avec des matériaux comme le PLA ou le PETG.

Les inserts taraudés, souvent en laiton, permettent de créer des pas de vis métalliques intégrés dans les pièces imprimées. Une fois insérés, ils offrent :

- une résistance mécanique accrue,
- une répétabilité fiable pour des vissages fréquents,
- et une meilleure tenue au couple de serrage.

Ils sont particulièrement utiles pour :

- des pièces techniques devant être démontées/remontées,
- des capots, boîtiers, châssis d’appareils électroniques,
- des systèmes mécaniques (axes, fixations, articulations).

Inconvénients et limites à connaître :

- Leur intégration demande une préparation à la modélisation : logement dédié, bonnes tolérances.
- Si mal inséré, un insert peut se désaxer ou fragiliser la pièce, notamment s’il est trop proche du bord ou mal centré.
- Le coût, bien que modeste à l’unité, peut devenir non négligeable sur de grandes séries.

Si vous doutez encore de la solidité de ce type de fixation, cette vidéo ci-dessous démontre en détail comment fonctionnent les inserts taraudés et met en évidence leur excellente résistance mécanique, notamment face à des vissages répétés ou des efforts de traction. Cela permet de mieux comprendre pourquoi ils sont largement utilisés dans des applications techniques exigeantes.


<iframe width="100%" height="250" src="https://www.youtube.com/embed/iR6OBlSzp7I?si=jm8kIIdCQgjNGL22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


{% include message.html 
   title="Info" 
   message="Dans les explications qui suivent, nous utiliserons les inserts taraudés disponibles au MakerSpace (inserts laiton, prévus pour une insertion à chaud). Si vous choisissez d’utiliser un autre type ou une autre marque d’inserts, veillez à bien adapter les dimensions du logement dans votre modèle 3D.

Il est vivement recommandé de faire un essai sur une pièce témoin avant de réaliser votre pièce finale, afin de vérifier l’ajustement et le bon comportement du matériau lors de l’insertion." 
   status="is-info" 
   dismissable="false" 
   icon="fas fa-exclamation-triangle" 
%}

{% include message.html 
   title="Attention" 
   message="L’insertion se fera avec un équipement chauffant (type fer à souder). Il faudra manipuler cet outil avec précaution, éviter tout contact direct avec la panne, travailler sur une surface dégagée, et débrancher le fer dès la fin de l’opération pour éviter tout risque de brûlure ou d’incendie." 
   status="is-danger" 
   dismissable="false" 
   icon="fas fa-exclamation-triangle" 
%}


---

## 2. Conception d'une pièce avec insert

{% include step-tuto.html 
greyBackground = true
content="Avant de concevoir votre pièce, vous devrez commencer par choisir le type d’insert que vous souhaitez utiliser. Le MakerSpace met à disposition plusieurs types d’inserts taraudés au format métrique. Vous les trouverez dans la servante visserie, dans la zone dédiée du MakerSpace.

Chaque insert possède un diamètre de perçage spécifique ainsi qu’une longueur minimale d’insertion à respecter pour garantir un bon maintien mécanique. Ces dimensions sont à prendre en compte dès la phase de modélisation de votre pièce." 
image="image-12.png" 
image_2="image-9.png"
image_3="image-10.png"
image_4="image-11.png"%}


{% include step-tuto.html 
greyBackground = true
content="Afin de déterminer le diamètre de perçage et la longueur d’insertion à prévoir, vous pouvez vous référer aux mesures ci-dessous, correspondant aux inserts taraudés couramment utilisés au MakerSpace :

- M3 : diamètre de perçage 4.2 mm, profondeur minimum 6 mm
- M4 : diamètre de perçage 5.8 mm, profondeur minimum 8 mm
- M5 : diamètre de perçage 6.5 mm, profondeur minimum 10 mm

Si vous avez un doute, ou si vous utilisez un insert non référencé dans la servante, vous devrez mesurer vous-même :

- la longueur de l’insert,
- son diamètre extérieur au niveau de la bague d’insertion (voir images).

Ajoutez ensuite une marge de 0.2 mm au diamètre mesuré pour faciliter l’insertion à chaud.

Pour une validation plus précise, nous vous recommandons de modéliser une pièce test comportant plusieurs perçages à diamètres variables. Cela vous permettra d’identifier expérimentalement le diamètre le plus adapté à votre machine et au matériau utilisé (voir exemple en photo).
" 
image="image-15.png" 
image_2="image-16.png"
image_3="image-14.png"
image_4="image-13.png"%}


{% include step-tuto.html 
greyBackground = true
content="La première solution pour intégrer des inserts consiste à réaliser un perçage avec un chanfrein à l’entrée. Le diamètre du perçage devra être adapté au type d’insert que vous utilisez (diamètre extérieur et tolérance d’insertion). Le chanfrein permet une insertion facilitée de l’insert lors de la préparation, et assure un meilleur centrage au début de l’insertion à chaud.

La profondeur du perçage dépendra également du type d’insert choisi. Nous vous conseillons de prévoir une marge de sécurité, voire, dans l’idéal, de modéliser un perçage traversant si la géométrie de la pièce le permet. Cela facilite l’ajustement et évite les problèmes si l’insert dépasse légèrement.

Concernant le chanfrein, une valeur comprise entre 0.4 mm et 0.8 mm est généralement recommandée. Dans la majorité des cas, avec des machines classiques équipées de buses de 0.4 mm, un chanfrein de 0.4 mm est suffisant et remplit parfaitement cette fonction." 
image="image-1.png" 
image_2="image-2.png"
image_3="image-3.png"
image_4="image-4.png"%}

{% include step-tuto.html 
greyBackground = true
content="Dans le cas où vous devez réaliser une multitude de perçages, il est déconseillé de les créer un par un manuellement. 

Vous pouvez utiliser l’outil **Point** ![alt text](image-8.png) pour définir rapidement les centres de tous vos perçages. Ensuite, utilisez l’outil **Perçage** ![alt text](image-7.png) (voir image ci-dessous) pour générer l’ensemble des perçages en une seule fonction paramétrique, ce qui facilite la modification et garantit un positionnement cohérent." 
image="image-6.png" 
image_2="image-5.png"%}

---

## 3. Installation de l'insert dans son logement

{% include step-tuto.html 
greyBackground = true
content="Une fois votre pièce imprimée en 3D, commencez par vérifier la qualité des perçages et assurez-vous que les chanfreins ont été correctement formés. Si vous observez des fils de plastique résiduels (stringing) ou des défauts de surface dans les trous, n’hésitez pas à utiliser un forêt adapté pour nettoyer manuellement le perçage avant d’y insérer l’insert.

Pour la suite, nous utiliserons la presse à inserts du MakerSpace (voir photo). Il s’agit d’un fer à souder équipé d’un embout spécifique pour les inserts, monté sur une presse verticale permettant une insertion droite, contrôlée et sécurisée." 
image="image-18.png"
image_2="image-21.png"%}


{% include message.html 
   title="Important" 
   message="La presse à inserts doit être utilisée exclusivement pour la mise en place d’inserts taraudés.  
N’utilisez pas le fer pour modifier ou « rectifier » une pièce en chauffant directement le plastique.  
Pour cela, un autre outil est à votre disposition dans le MakerSpace." 
   status="is-warning" 
   dismissable="false" 
   icon="fas fa-exclamation-circle" 
%}

{% include message.html 
   title="Note" 
   message="Si vous utilisez des inserts de diamètre différent, il est recommandé de changer l’embout du fer afin de l’adapter au diamètre de l’insert.

Bien qu’il soit parfois possible d’insérer des inserts M4 ou M5 avec un embout M3, cette pratique est fortement déconseillée : l’insert ne sera pas correctement guidé, ce qui augmente les risques de désalignement ou de déformation lors de l’insertion." 
   status="is-info" 
   dismissable="false" 
   icon="fas fa-info-circle" 
%}

{% include step-tuto.html 
greyBackground = true
content="Branchez le fer à souder et attendez qu’il atteigne la température de consigne.
La température doit généralement être réglée à environ +20 °C par rapport à la température d’impression du plastique utilisé.

Par exemple :

- Pour du PLA, une température de 250 °C est tout à fait adaptée.
- Pour du PETG, on peut monter autour de 270 °C." 
image="image-19.png"
image_2="image-20.png"%}


{% include message.html 
   title="Attention" 
   message="Ne réglez pas le fer à une température trop élevée en espérant gagner du temps. Vous risquez de faire fondre le plastique trop rapidement, ce qui peut entraîner un mauvais alignement de l’insert ou une déformation permanente de la pièce.

⚠️ Ne dépassez pas les 280 °C, surtout avec des inserts en laiton standard, au risque d’endommager la pièce ou de détériorer le revêtement de l’insert." 
   status="is-danger" 
   dismissable="false" 
   icon="fas fa-exclamation-triangle" 
%}


{% include step-tuto.html 
greyBackground = true
content="Une fois que la température est atteinte, placez l’insert dans le perçage de la pièce.
Grâce au chanfrein modélisé, l’insert doit rester en place sans forcer, simplement maintenu par gravité ou un léger ajustement. Ne l’enfoncez pas manuellement.

Approchez ensuite le fer à souder et mettez-le en contact direct avec l’insert.
Laissez l’insert chauffer pendant environ 3 à 5 secondes, pas plus.

Puis, exercez une légère pression verticale vers le bas. L’insert devrait s’enfoncer lentement dans le plastique fondu, de manière contrôlée.
Ne forcez jamais l’insertion : c’est la chaleur, pas la force, qui permet à l’insert de s’implanter correctement.

Lorsque l’insert est arrivé au ras de la surface de la pièce, dans sa position finale, relevez le fer délicatement et laissez refroidir sans toucher pendant quelques secondes." 
image="image-22.png"
image_2="image-23.png"
image_3="image-24.png"
image_4="image-25.png"%}

{% include step-tuto.html 
greyBackground = true
content="Il ne vous reste plus qu’à laisser refroidir votre insert et votre pièce pendant quelques secondes avant toute manipulation ou vissage.

⚠️ N’oubliez pas de débrancher la presse à inserts ou le fer à souder une fois l’opération terminée, pour des raisons de sécurité et pour préserver le matériel." 
image="image-26.png"
image_2="image-27.png"
image_3="image-28.png"
image_4="image-29.png"%}


---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}