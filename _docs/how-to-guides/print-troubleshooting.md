---
layout: documentation
hide_hero: false
hero_image: "DroopingOverhang1000.png"
hero_darken: true
image: "DroopingOverhang1000.png"
component_toc: true
doc_header: true
type: doc, how-to
tag: additive-manufacturing

title: Résolution des Problèmes de Qualité d'Impression 3D
subtitle: 
description: Ce guide est conçu pour vous aider à résoudre les problèmes courants de qualité d'impression 3D.
author: Adrien Bracq - Derivated from hydraresearch3d.com

time: 2
difficulty: 1

---

{% include step-tuto.html 
greyBackground = true 
title = "Déformation des Surplombs"
content="Le curling désigne le problème qui se produit généralement sur les surplombs où les extrusions se courbent vers le haut, entraînant une surface rugueuse ou déformée. Cela est plus susceptible de se produire avec des plastiques qui ne peuvent pas être imprimés avec le ventilateur de refroidissement activé. Le plastique est extrudé à haute température et, s'il n'est pas refroidi rapidement, peut entraîner des déformations, en particulier sur les surplombs. Plus le surplomb est important, plus le curling est probable.

**Solutions**
- Vous pouvez réduire le curling en abaissant la température d'impression et/ou en augmentant le refroidissement de la pièce. Cependant, les plastiques les plus susceptibles de présenter ce problème (ABS, ASA, etc.) peuvent avoir des problèmes d'adhésion entre les couches si vous diminuez la température d'impression ou augmentez le refroidissement, surtout pour les grandes pièces.
- Concevez vos pièces avec une géométrie de surplomb moins prononcée.
- Orientez votre pièce sur le plateau dans votre trancheur pour minimiser les surplombs importants.
"
image="Curling.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Décoloration (taches noires/marron)"
content="
Ce problème est généralement observé sur des plastiques de couleur claire, notamment blancs et transparents. Vous pourriez remarquer de petites taches noires ou marron sur votre pièce. Cela peut être causé par trois facteurs principaux : Premièrement, du plastique fondu s'est accumulé sur l'extérieur de la buse et tombe sur l'impression. Deuxièmement, il reste du matériau résiduel d'un plastique précédent. Troisièmement, votre température d'impression est peut-être trop élevée, provoquant une combustion ou une décoloration du plastique.

**Solutions**
- Vérifiez s'il y a une accumulation de plastique sur l'extérieur de votre buse. Si c'est le cas, chauffez la tête d'impression et nettoyez-la avec une brosse métallique.
- Si vous venez de passer d'une couleur sombre à une couleur claire, extrudez manuellement du plastique après avoir chargé le matériau jusqu'à ce que vous soyez sûr que la nouvelle couleur sort proprement.
- Réduisez la température d'impression de 5 à 10 °C.
"
image="image-asset.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Surplombs Affaissés"
content="
Les surplombs sont des sections inclinées de la pièce sans structure de soutien en dessous. Il est conseillé d'éviter les surplombs supérieurs à 45° mesurés à partir de l'axe Z vers le bas. Cependant, certains matériaux comme le PLA et les co-polyesters peuvent gérer des angles prononcés, tandis que d'autres comme l'ABS, l'ASA et le Nylon peuvent avoir des problèmes dès 45°, en particulier avec des hauteurs de couche plus élevées.

**Solutions**
- Utilisez des structures de support. L'interface entre la pièce et le support aura une finition de surface plus rugueuse, mais rendra les surplombs beaucoup plus fiables.
- Augmentez le refroidissement via le ventilateur de refroidissement, bien que cela puisse entraîner un gauchissement et une séparation des couches avec de grandes pièces ou des matériaux à fort retrait comme l'ABS, l'ASA et le Nylon.
- Imprimez avec une hauteur de couche plus faible.
- Réduisez la température d'impression de 5 à 10 °C, bien que cela puisse augmenter le risque de séparation des couches.
- Réduisez le multiplicateur d'extrusion (appelé **flux** ou **Flow** dans les paramètres de matériau de votre slicer). Cela a peu de chances d'avoir un effet significatif, mais peut aider dans certains cas.
"
image="DroopingOverhang1000.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Première Couche Trop Proche"
content="
Imprimer la première couche avec une buse trop proche du plateau peut entraîner divers problèmes d'impression. Cela peut empêcher l'extrusion pendant la première couche ou provoquer un effet « pied d'éléphant », rendant vos premières couches plus larges que le reste de l'impression. Ce problème peut varier selon les matériaux. Il peut également être causé par un décalage Z incorrect ou une impression après un nivellement du plateau échoué.

**Solutions**
- Ajustez la valeur de votre offset Z, que vous pouvez trouver dans le menu de votre imprimante. Si vous devez rarement ajuster l'offset Z ou uniquement pour certains matériaux, cela peut être une solution efficace.
- Ajustez votre décalage Z si vous constatez que vous devez effectuer des ajustements importants ou si le problème persiste.
- Si la sonde de nivellement échoue, cela peut entraîner des problèmes de hauteur Z. Si votre imprimante n'effectue pas sa procédure de nivellement ou si vous remarquez que la lumière rouge de la sonde BLTouch clignote, cela signifie que la sonde est en mode alarme. Cela peut être corrigé en redémarrant l'impression, car le BLTouch est réinitialisé avant le nivellement au début de chaque impression.
"
image="FirstLayerTooClose.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Première Couche Trop Éloignée"
content="
Imprimer la première couche avec une buse trop éloignée du plateau peut provoquer le détachement de la pièce du plateau ou entraîner des lacunes dans les extrusions de la première couche. Ce problème peut varier selon les matériaux. Il peut également être causé par un décalage Z incorrect ou une impression après un nivellement du plateau échoué.

**Solutions**
- Ajustez la valeur de votre offset Z, que vous pouvez trouver dans le menu de votre imprimante. Si vous devez rarement ajuster l'offset Z ou uniquement pour certains matériaux, cela peut être une solution efficace.
- Ajustez votre décalage Z si vous constatez que vous devez effectuer des ajustements importants ou si le problème persiste.
- Si la sonde de nivellement échoue, cela peut entraîner des problèmes de hauteur Z. Si votre imprimante n'effectue pas sa procédure de nivellement ou si vous remarquez que la lumière rouge de la sonde BLTouch clignote, cela signifie que la sonde est en mode alarme. Cela peut être corrigé en redémarrant l'impression, car le BLTouch est réinitialisé avant le nivellement au début de chaque impression.
"
image="FirstLayerTooFar.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Séparation des Couches"
content="
La séparation des couches se produit lorsque les couches d'une pièce ne se lient pas solidement et que les forces de rétrécissement lors du refroidissement suffisent à rompre la liaison entre les couches. Cela est beaucoup plus courant avec des matériaux ayant des facteurs de rétrécissement élevés lorsqu'ils refroidissent, comme l'ASA, l'ABS, le Nylon, etc. 

Ce problème apparaît également plus fréquemment sur les grandes pièces. Pour y remédier, l'objectif est d'augmenter la liaison entre la couche imprimée et celle en dessous.

**Solutions**
- Diminuez ou désactivez le ventilateur de refroidissement dans votre slicer.
- Augmentez la température d'impression de 5 à 10 °C. Cela peut améliorer la liaison entre les couches.
- Augmentez la température du plateau d'impression de 5 à 10 °C. Cela augmentera la température ambiante à l'intérieur de l'imprimante, ce qui peut ralentir le processus de refroidissement de la pièce imprimée, entraînant une meilleure liaison des couches.
- Utilisez une buse plus grande. Une largeur d'extrusion plus importante donne presque toujours une pièce plus solide.
- Si vous avez modifié manuellement la hauteur de couche, assurez-vous de ne jamais utiliser une hauteur de couche supérieure à 70 % du diamètre de votre buse.
"
image="LayerSplitting.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Formation de Bulles (Pillowing)"
content="
La formation de bulles (« pillowing ») désigne généralement la situation où le plastique forme de petites bulles sur la surface supérieure, mais cela inclut également le problème apparenté où la couche supérieure ne se remplit pas correctement. 

Ces problèmes sont généralement causés par un nombre insuffisant de couches solides supérieures sur un remplissage à faible densité. La température d'impression et le refroidissement de la pièce peuvent également jouer un rôle.

**Solutions**
- Augmentez le nombre/épaisseur des couches solides supérieures. Ce paramètre se trouve dans la section des paramètres de coque dans votre slicer.
- Augmentez le pourcentage de remplissage. Les problèmes de bulles peuvent apparaître à des pourcentages de remplissage de 10 % ou moins.
- Vous pouvez également améliorer les résultats en augmentant le refroidissement de la pièce ou en réduisant la température du plateau d'impression, mais cela peut entraîner des problèmes de gauchissement et de séparation des couches pour les grandes pièces et les matériaux comme l'ABS, l'ASA et le Nylon.
"
image="Pillowing500.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Formation de Fils (Stringing)"
content="
La formation de fils se produit lorsque du matériau continue de sortir de la buse pendant que la tête d'impression se déplace vers un nouvel emplacement sur l'impression. Ce problème est facile à diagnostiquer : vous verrez de fines ficelles ou des amas de matériau sur les côtés de vos pièces ou entre les espaces dans le modèle. 

Certains matériaux sont plus sujets à ce problème, comme les co-polyesters et les matériaux flexibles. La formation de fils peut être causée par un filament humide, un retrait insuffisant, une impression trop chaude ou des déplacements fréquents au-dessus des espaces du modèle.

**Solutions**
- Séchez votre filament en utilisant un déshydrateur, cela peut prendre jusqu'à 24 heures.
- Imprimez à partir d'une boîte de filament sec.
- Augmentez la distance de rétraction, la plupart des matériaux ne nécessitent pas plus de 1 à 2 mm de rétraction pour un extrudeur direct.
- Augmentez l'avance de pression. Des valeurs entre 0,01 et 0,1 devraient fonctionner pour la plupart des matériaux rigides, tandis que des valeurs plus élevées (toujours inférieures à 1) seront nécessaires pour les matériaux flexibles.
- Réduisez la température d'impression de 5 à 10 °C.
- Essayez d'activer la fonction « combing » dans votre slicer. Cela garde la buse au-dessus du remplissage pendant les déplacements, ce qui peut augmenter légèrement le temps d'impression mais cachera les fils à l'intérieur de la pièce. Notez qu'avec le « combing » activé, la buse ne se soulève pas pendant les déplacements, ce qui augmente les risques de décalages de couches ou de renversement de la pièce.
"
image="Stringing.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Supports Renversés"
content="
Ce problème se réfère à la situation où une structure de support se détache pendant l'impression, causant probablement des problèmes pour la partie de la pièce qui devait être supportée. Plusieurs raisons peuvent expliquer ce problème. Une structure de support haute et fine peut ne pas avoir suffisamment de surface en contact avec le plateau d'impression pour rester attachée de manière fiable. Les supports peuvent également se détacher s'ils sont construits sur une partie fortement inclinée de l'objet imprimé ou si la tête d'outil de votre imprimante ne se soulève pas pendant les déplacements (appelé Z-hop).

**Solutions**
- Si vous avez des supports hauts et fins, essayez d'ajouter une bordure (brim) à vos supports, que vous trouverez dans la section des paramètres de support de votre slicer. Vous pouvez également réduire l'angle de surplomb des supports, ce qui générera plus de structures de support, les rendant moins susceptibles de se détacher. 
- Si des supports sont générés sur une partie de l'objet et non sur le plateau, cela peut être plus délicat. Les structures de support sont généralement conçues avec un petit espace entre le support et le modèle. Étant donné que cet espace est généralement calculé verticalement, les surfaces fortement inclinées peuvent entraîner un écart plus important. Vous pouvez régler la distance Z des supports à 0, mais cela peut rendre la structure de support plus difficile à retirer. La distance Z des supports est généralement définie sur la hauteur de couche que vous utilisez.
- Vérifiez que loption **Z-hop** est toujours activée si vous rencontrez des problèmes avec des supports qui se détachent. Le paramètre Z-hop se trouve dans la section des déplacements des paramètres de votre slicer.
"
image="supportsfallover.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Déformation (Warping)"
content="
Le warping fait référence à la situation où les coins de votre pièce commencent à se soulever de la surface d'impression, même si les premières couches de votre pièce ont bien adhéré à la surface. Cela est particulièrement fréquent avec les grandes pièces et/ou les matériaux ayant un taux de rétrécissement élevé lors du refroidissement, comme l'ABS, l'ASA, le Nylon, etc.

**Solutions**
- Utilisez un adhésif pour plateau, pour réduire les risques de déformation.
- Assurez-vous d'utiliser la bonne surface d'impression et le bon adhésif pour le matériau que vous essayez d'imprimer. 
- Ajoutez une bordure (brim). Une bordure consiste en un certain nombre de périmètres supplémentaires ajoutés autour de votre pièce pour la première couche. Cela aidera à maintenir votre pièce sur la surface d'impression.
- Utilisez une imprimante fermée.
- Diminuez ou désactivez le ventilateur de refroidissement dans votre slicer.
- Augmentez la température du plateau d'impression de 5 à 10 °C. Cela augmentera la température ambiante à l'intérieur de l'imprimante, ce qui peut ralentir le processus de refroidissement de la pièce imprimée et réduire le risque de déformation.
"
image="Warping.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Filament Humide (Mauvaises Surfaces, Bruits de Crépitement, Bourrage)"
content="
Si vous entendez des bruits de crépitement, voyez de la vapeur s'échapper de votre buse, ou observez des bulles/surfaces rugueuses sur vos pièces imprimées, il est probable que votre filament soit humide. Ces problèmes sont causés par l'humidité présente dans votre filament qui se dilate et se transforme en gaz lorsqu'elle est chauffée dans la tête d'impression. Cela peut entraîner une mauvaise adhérence entre les couches, des pièces fragiles, une finition de surface rugueuse, des fils (stringing), et dans certains cas, un arrêt complet de l'extrusion.

**Solutions**
- Séchez votre filament. 
- Une fois sec, stockez et imprimez votre filament à partir d'une boîte sèche. Lorsque l'hygromètre de votre boîte sèche indique une humidité supérieure à 30 %, retirez le matériau et séchez-le à nouveau.
"
image="WetvDry1000.png" %}

{% include step-tuto.html 
greyBackground = true 
title = "Sur-Extrusion (Over-Extrusion)"
content="
La sur-extrusion se produit la quantité de plastique extrudée n'est pas cohérente entre le GCode et ce que la machine extrude reelement. La plupart des imprimantes 3D ne peuvent pas surveiller la quantité réelle de plastique extrudé. Si les paramètres d'extrusion sont mal configurés, l'imprimante peut extruder plus de plastique que prévu, entraînant un excès qui peut altérer les dimensions extérieures de la pièce.

Pour résoudre ce problème :

- Vérifiez vos paramètres d'extrusion.
- Consultez les réglages liés à la sous-extrusion (mais ajustez-les dans la direction opposée). Par exemple, si augmenter le multiplicateur d'extrusion corrige la sous-extrusion, réduire ce multiplicateur peut résoudre la sur-extrusion.
- Il est également possible que vous utilisiez des paramètres de buse incorrects. Vérifiez que vous avez sélectionné la bonne machine avec les paramètres de buse adaptés au processus d'impression.
"
image="over-extruding-1024x1024-1.jpg" %}

{% include step-tuto.html 
greyBackground = true 
title = "Sous-Extrusion"
content=" 
Chaque profil dans votre slicer inclut des paramètres qui déterminent la quantité de plastique que l’imprimante 3D doit extruder. Cependant, comme l’imprimante ne fournit pas de retour sur la quantité réelle de plastique sortant de la buse, il est possible que moins de plastique soit extrudé que prévu par le logiciel (ce que l’on appelle la sous-extrusion). Si cela se produit, vous pouvez commencer à remarquer des espaces entre les extrusions adjacentes de chaque couche.

Le moyen le plus fiable de vérifier si votre imprimante extrude suffisamment de plastique est d'imprimer un simple cube de 20 mm de haut avec au moins 3 périmètres. En haut du cube, vérifiez si les 3 périmètres sont solidement liés. S’il y a des espaces entre les 3 périmètres, cela indique une sous-extrusion. Si les 3 périmètres se touchent et n’ont aucun espace, vous faites probablement face à un autre problème.

Si vous déterminez que vous êtes en situation de sous-extrusion, plusieurs causes possibles sont à considérer, résumées ci-dessous.

**Solutions**

- **Diamètre de filament incorrect :**

  La première chose à vérifier est que le logiciel connaît le diamètre du filament que vous utilisez. Vérifiez que cette valeur correspond au filament que vous avez chargé dans votre machine. Il peut être utile de mesurer votre filament vous-même à l’aide d’un pied à coulisse pour confirmer que le diamètre spécifié dans le logiciel est correct. Les valeurs les plus courantes pour le diamètre du filament sont 1,75 mm et 2,85 mm. La plupart des bobines incluent également le diamètre correct sur l’emballage.

- **Augmentez le multiplicateur d'extrusion :**

  Si le diamètre du filament est correct mais que vous rencontrez toujours des problèmes de sous-extrusion, vous devrez ajuster le multiplicateur d’extrusion. Ce paramètre très utile dans votre slicer vous permet de modifier facilement la quantité de plastique extrudé (également appelée taux de flux dans certains logiciels). 

  Vous pouvez trouver ce paramètre en allant dans les paramètres. Chaque extrudeur de votre imprimante peut avoir un multiplicateur d’extrusion unique, alors si vous essayez de modifier le flux pour un extrudeur spécifique, assurez-vous de le sélectionner la bonne machine.

  Par exemple, si votre multiplicateur d’extrusion était précédemment réglé sur 1,0 et que vous le changez en 1,05, cela signifie que vous extruderez 5 % de plastique en plus qu’auparavant. Pour le PLA, un multiplicateur d’extrusion typique se situe autour de 0,9, tandis que l’ABS tend à être plus proche de 1,0. Essayez d’augmenter votre multiplicateur d’extrusion de 5 %, puis réimprimez le cube de test pour voir si les espaces entre les périmètres ont disparu."
image="under-extruding.jpg" %}

{% include step-tuto.html 
greyBackground = true 
title = "Petits Détails Non Imprimés"
content="
La plupart des imprimantes 3D disposent d'une taille de buse fixe qui détermine la résolution des pièces dans la direction XY, la taille de buse la plus populaire étant de 0,4 mm. Bien que cela fonctionne bien pour la plupart des pièces, vous pouvez rencontrer des problèmes lorsque vous tentez d’imprimer des détails extrêmement fins, plus petits que la taille de la buse. Par exemple, si vous essayez d’imprimer un mur de 0,2 mm d’épaisseur avec une buse de 0,4 mm de diamètre, il est possible que ce mur fin ne s’affiche pas dans l’aperçu de votre slicer. Si vous avez souvent besoin d’imprimer des caractéristiques très fines, voici les meilleures options à envisager pour ces impressions.

**Solutions Courantes**

- **Activer le mode Arachne pour les murs fins**

  Orca Slicer propose le mode Arachne, conçu pour améliorer l'impression de murs très fins et de caractéristiques extérieures complexes. Ce mode ajuste dynamiquement la largeur de l'extrusion pour mieux s'adapter aux zones étroites du modèle. Pour activer ce mode :

  - Accédez aux paramètres de votre trancheur Orca Slicer.
  - Dans l'onglet Extrusion (ou un onglet similaire), cherchez l'option Mode d'extrusion.
  - Activez le mode Arachne.
  - Une fois activé, relancez l'aperçu du modèle. Vous remarquerez que les petits détails sont désormais imprimés avec des extrusions optimisées pour ces caractéristiques fines.

  Le mode Arachne réduit le besoin de modifier manuellement le modèle ou les paramètres pour les zones étroites, tout en maintenant une qualité d'impression optimale pour les autres sections. Ce paramètre est particulièrement utile pour les impressions avec des murs plus fins que la largeur d'extrusion standard.

- **Redessinez la pièce pour inclure des détails plus épais**
  
  Si ces caractéristiques fines continuent de poser problème, une autre option consiste à redessiner la pièce pour inclure uniquement des détails plus grands que le diamètre de votre buse. Cela implique généralement de modifier le modèle 3D dans le logiciel de CAO d'origine pour ajuster la taille des petits détails. Une fois les caractéristiques épaissies, réimportez le modèle dans votre slicer pour vérifier que votre imprimante peut reproduire la forme 3D créée.

- **Installez une buse avec un diamètre plus petit**
  
  Dans de nombreux cas, il n’est pas possible de modifier le modèle 3D d’origine. Par exemple, il peut s’agir d’une pièce conçue par quelqu’un d’autre ou téléchargée depuis Internet. Dans ce cas, envisagez d’acquérir une seconde buse pour votre imprimante 3D permettant d’imprimer des détails plus fins. De nombreuses imprimantes ont une buse amovible, ce qui rend ces ajustements après-vente assez simples. Par exemple, de nombreux utilisateurs achètent une buse de 0,3 ou 0,2 mm en complément d'une buse de 0,4 ou 0,6 mm pour disposer de deux options. Consultez le fabricant de votre imprimante pour obtenir des instructions précises sur l’installation d’une buse plus petite.
"
image="small-features-not-printed2-1024x1024-1.jpg" %}

{% include step-tuto.html 
greyBackground = true 
title = "Arrêt d'Extrusion en Cours d'Impression"
content="
Si votre imprimante extrudait correctement au début de l'impression, mais a soudainement cessé d'extruder plus tard, il existe généralement quelques causes probables à ce problème. Voici les explications pour chaque cause fréquente et les solutions correspondantes. Si l’extrusion ne fonctionnait pas dès le début de l’impression, consultez la section Pas d’extrusion au démarrage de l’impression.

**Solutions Courantes**
  - **Rupture de filament**
  
  Cela peut sembler évident, mais avant d'explorer d'autres causes, vérifiez que vous avez encore du filament dans la buse. Si la bobine est vide, chargez une nouvelle bobine avant de reprendre l'impression.

  - **Le filament a été usé par la roue d'entraînement**
  
  Pendant l'impression, le moteur de l'extrudeur tourne constamment pour pousser le filament dans la buse. Si vous essayez d'imprimer trop rapidement ou d'extruder une quantité excessive de plastique, ce moteur peut user le filament jusqu'à ce que la roue d'entraînement n'ait plus de prise. Si le moteur de l'extrudeur tourne, mais que le filament ne bouge pas, c'est probablement la cause. Consultez la section Filament broyé pour plus de détails sur la résolution de ce problème.

  - **L'extrudeur est bouché**
  
  Si les causes précédentes ne s'appliquent pas, il est très probable que l'extrudeur soit bouché. Si cela se produit en cours d'impression, vérifiez que le filament est propre et que la bobine n'est pas couverte de poussière. Une accumulation suffisante de poussière sur le filament peut provoquer un bouchon à l'intérieur de la buse.

  - **Surchauffe du pilote moteur de l'extrudeur**
  
  Le moteur de l'extrudeur est fortement sollicité tout au long de l'impression. Il effectue des mouvements rapides pour pousser et tirer le plastique. Ces mouvements nécessitent beaucoup de courant, et si les composants électroniques de l'imprimante ne sont pas suffisamment refroidis, cela peut entraîner une surchauffe du pilote du moteur. Ces pilotes sont généralement équipés d’une coupure thermique qui arrête le fonctionnement en cas de température excessive. Si cela se produit, les moteurs des axes X et Y continueront à fonctionner, mais le moteur de l’extrudeur restera immobile. La seule solution consiste à éteindre l'imprimante et à laisser les composants refroidir. Si le problème persiste, envisagez d’ajouter un ventilateur de refroidissement supplémentaire.
"
image="stops-extruding-mid-print-1024x1024-1.jpg" %}

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
