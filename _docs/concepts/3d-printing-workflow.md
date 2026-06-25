---
layout: documentation
hide_hero: false
hero_image: "slide_120_image_4.png"
hero_darken: true
image: "slide_120_image_4.png"
component_toc: true
doc_header: true
type: doc,concept
tag: fabrication-additive

title: Le workflow logiciel
subtitle: 
description: 
author: Adrien Bracq

time: 2
difficulty: 1

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""

todo: 10
---

{% include message.html title="Attention" message="La page est en cours de rédaction. C'est pour l'instant un extrait brut des slides [du cours d'introduction à l'impression 3D.](/assets/pdf/initiation-fabrication-additive.pdf)"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

## Workflow Logiciel

Workflow Logiciel

## Principe général

Principe général Le workflow Logiciel 105   Logiciel de modélisation Slicer Machine 3D

![Slide 105 Image](slide_105_image_8.png)


![Slide 105 Image](slide_105_image_9.png)


![Slide 105 Image](slide_105_image_10.png)


## La Modélisation

La Modélisation 106 Les logiciels de conception, de modélisation, Scan 3D, …

## Récupérer son fichier 3D

Récupérer son fichier 3D Les bibliothèques 3D 107 PrusaPrinters : https://www.printables.com/ 
Plateforme de partage de fichiers 3D optimisée pour les imprimantes Prusa, mais compatible avec toutes les machines. Thingiverse : https://www.thingiverse.com/ 
L'une des plus grandes communautés de modèles 3D gratuits, idéale pour les amateurs et les makers. YouMagine : https://www.youmagine.com/ 
Plateforme open source mettant l'accent sur le partage et la collaboration autour de modèles 3D. Cults : https://cults3d.com/ 
Bibliothèque en ligne proposant des fichiers 3D gratuits et payants, avec un focus sur le design artistique. GrabCAD : https://grabcad.com/
Plateforme orientée ingénierie, spécialisée dans les modèles 3D industriels et les fichiers techniques.  Et bien d’autres…

![Slide 107 Image](slide_107_image_4.png)


## Récupérer son fichier 3D

Récupérer son fichier 3D Scanner son objet 108 Principe : Utilisation d’un scanner 3D pour capturer la forme, les dimensions et les détails d’un objet physique.  Avantages : Permet de recréer des objets existants en version numérique. Idéal pour la rétro-conception ou la duplication.  Exemples d’applications : Fabrication de pièces sur mesure. Création de modèles pour l'impression 3D. Scan corporel pour la médecine ou la mode.

![Slide 108 Image](slide_108_image_4.png)


![Slide 108 Image](slide_108_image_5.png)


## Récupérer son fichier 3D

Récupérer son fichier 3D Scanner son objet 109 Précision limitée : Les scanners grand public offrent souvent une résolution inférieure à celle requise pour des pièces complexes ou techniques.  Problèmes avec certaines surfaces : Difficulté à scanner des objets : Transparents (ex. verre). Réfléchissants (ex. métal poli). Trop sombres ou avec peu de contraste.  Post-traitement nécessaire : Les modèles scannés nécessitent souvent une retouche pour corriger les erreurs ou combler les zones manquantes.  Coût et accessibilité : Les scanners professionnels sont coûteux et nécessitent une expertise pour une utilisation optimale.

![Slide 109 Image](slide_109_image_4.png)


![Slide 109 Image](slide_109_image_5.png)


## Modélisation 3D

Modélisation 3D Les logiciels de modélisation 110 Principe : Les logiciels de modélisation comme Blender permettent de créer des modèles artistiques ou organiques pour divers usages, y compris l’impression 3D.  Avantages : Flexibilité : Permet de créer des formes complexes et organiques (personnages, sculptures). Compatibilité : Export facile en formats courants (STL, OBJ). Gratuité : Certains logiciels comme Blender sont open source.  Inconvénients : Courbe d’apprentissage élevée : Interface complexe pour les débutants. Précision limitée : Moins adapté pour des pièces mécaniques ou techniques précises.

![Slide 110 Image](slide_110_image_4.png)


![Slide 110 Image](slide_110_image_5.jpg)


## Conception Assistée

Conception Assistée Les logiciels de CAO 111 Principe : Les logiciels de CAO permettent de concevoir des objets techniques et précis grâce à une approche paramétrique, où chaque élément est défini par des dimensions et des contraintes ajustables.  Avantages : Précision : Idéal pour les pièces mécaniques, techniques ou fonctionnelles. Conception paramétrique : Modifications faciles et rapides en ajustant les paramètres définis. Compatibilité industrielle : Essentiel pour l’ingénierie, l’architecture, et l’industrie (ex. : aéronautique, automobile).  Inconvénients : Complexité : Courbe d’apprentissage importante, surtout pour les fonctionnalités avancées. Coût : Certains logiciels professionnels (ex. SolidWorks) sont onéreux.

![Slide 111 Image](slide_111_image_4.jpg)


![Slide 111 Image](slide_111_image_5.png)


## Conception Assistée

Conception Assistée Les logiciels de CAO 112 SolidWorks : Logiciel professionnel de CAO paramétrique, utilisé pour la conception mécanique et l'ingénierie. Fusion 360 : Solution tout-en-un de modélisation paramétrique et simulation, gratuite pour les étudiants et makers. FreeCAD : Logiciel open source pour la conception paramétrique 3D, idéal pour les débutants et les projets personnels. Onshape : Plateforme de CAO basée sur le cloud, conçue pour la collaboration en temps réel. Catia : Logiciel avancé de Dassault Systèmes, utilisé dans l’aéronautique, l’automobile et l’architecture. Creo (Pro/ENGINEER) : Logiciel puissant pour la modélisation 3D et la conception paramétrique, souvent utilisé dans l'industrie manufacturière. Autodesk Inventor : Logiciel de conception mécanique pour la création de modèles complexes en 3D. Siemens NX : Outil intégré pour la conception, la simulation et la fabrication, largement utilisé dans l’industrie. Alibre Design : Logiciel accessible et polyvalent pour la modélisation paramétrique de projets mécaniques et industriels.

![Slide 112 Image](slide_112_image_4.jpg)


![Slide 112 Image](slide_112_image_5.jpg)


![Slide 112 Image](slide_112_image_6.png)


## Modélisation par code

Modélisation par code OpenSCAD 113 Qu’est-ce que OpenSCAD ? Logiciel open source de modélisation 3D basé sur la programmation. Permet de créer des modèles à partir de scripts codés, sans interface graphique complexe. Avantages : Conception paramétrique : Modifier facilement les modèles en ajustant les variables. Précision : Idéal pour des pièces techniques ou répétitives. Gratuit et léger : Accessible à tous les utilisateurs, même avec du matériel modeste. Inconvénients : Basé sur le code : Nécessite des notions de programmation, moins intuitif pour les débutants. Limité pour les formes organiques : Pas idéal pour les designs artistiques ou complexes. Applications : Fabrication de pièces techniques. Prototypes avec géométries simples et paramétriques. Automatisation de modèles répétitifs.

![Slide 113 Image](slide_113_image_4.jpg)


![Slide 113 Image](slide_113_image_5.png)


## Modélisation par IA

Modélisation par IA Rodin 114 Qu’est-ce que Rodin ? Rodin est un outil basé sur l’IA qui permet de créer des modèles 3D directement à partir de descriptions textuelles ou d’autres données d’entrée.  Caractéristiques : Création rapide et intuitive : Pas besoin de compétences en modélisation, l’IA génère des modèles complexes en quelques étapes. Adapté aux débutants et experts : Idéal pour des concepts artistiques ou des prototypes fonctionnels. Compatibilité : Export des modèles dans des formats courants (STL, OBJ) pour l’impression 3D ou d’autres applications.  Limites : Les détails complexes peuvent être imparfaits (coiffures, expressions). Les modèles générés doivent souvent être retravaillés pour un usage optimal. La qualité du modèle dépend de la clarté de l'entrée textuelle.

![Slide 114 Image](slide_114_image_4.png)


## L’Export

L’Export 115 Les fichiers d’export

## Les fichiers d’export

Les fichiers d’export Les plus anciens 116 STL (Standard Tessellation Language)  Description : Format le plus courant, décrit la géométrie 3D en triangles. Avantages : Simple, universel, compatible avec la plupart des logiciels et imprimantes. Limites : Pas d’informations sur la couleur, les textures ou les matériaux. OBJ (Object File)  Description : Format polyvalent incluant les géométries, couleurs et textures. Avantages : Idéal pour les modèles multicolores ou complexes. Limites : Fichiers souvent plus volumineux.

## Le 3MF (3D Manufacturing Format)

Le 3MF (3D Manufacturing Format) Un format qui gagne en popularité 117 Stockage d'informations complètes : Contrairement au STL, qui ne contient que la géométrie, le 3MF peut inclure : Couleurs et textures. Propriétés des matériaux (densité, élasticité, etc.). Paramètres d'impression (ex. : orientation, épaisseur de couche, supports).  Format compact : Le 3MF est plus léger que les fichiers OBJ ou STL + fichiers annexes (textures, etc.).  Standard ouvert et universel : Développé par le 3MF Consortium, soutenu par des acteurs majeurs (Microsoft, Autodesk, Stratasys, Ultimaker, etc.). Adopté par des logiciels comme Cura, PrusaSlicer, et des plateformes comme Thingiverse.  Interopérabilité accrue : Permet de transférer facilement un projet complet entre différents logiciels ou imprimantes sans perdre d'informations.

## Le Slicer

Le Slicer 118 Les logiciels

## Le Slicer

Le Slicer Présentation 119 Définition : Un slicer est un logiciel qui convertit un modèle 3D (ex. STL, OBJ) en G-code, un ensemble d’instructions que l’imprimante 3D utilise pour fabriquer l’objet.  Fonctionnement : Chargement du modèle 3D : Importe un fichier comme STL ou 3MF dans le slicer. Découpe en couches : Le slicer divise le modèle en couches horizontales. Génération des instructions : Il crée le G-code, contenant : Trajectoires de la tête d’impression. Paramètres d’impression (température, vitesse, supports, etc.).  Le slicer est un outil essentiel pour préparer vos impressions 3D, reliant le modèle numérique à l'imprimante.

![Slide 119 Image](slide_119_image_4.png)


## Le Slicer

Le Slicer Les différents logiciels 120 Par Compatibilité avec des imprimantes spécifiques Multimarques/Open Source : Cura, PrusaSlicer, SuperSlicer, OrcaSlicer. Marques spécifiques : BambuLab : Bambu Studio, OrcaSlicer. Creality : Creality Slicer (modifié à partir de Cura). Raise3D : IdeaMaker. MakerBot : MakerBot Print. FlashForge : FlashPrint. (…)  Par Types d’Impression : FDM (Filament) : Cura, PrusaSlicer, Simplify3D, IdeaMaker, OrcaSlicer, SuperSlicer. SLA/DLP (Résine) : ChiTuBox, Lychee Slicer. (…)

![Slide 120 Image](slide_120_image_4.png)


## CURA

CURA Ultimaker 121 Qu’est-ce que Cura ?: Slicer open source développé par Ultimaker, compatible avec de nombreuses imprimantes 3D.  Avantages: Gratuit, facile à utiliser, supporte de nombreux paramètres avancés et plugins.  Inconvénients: Peut être gourmand en ressources, interface simple pour les débutants.

![Slide 121 Image](slide_121_image_4.jpg)


![Slide 121 Image](slide_121_image_5.jpg)


## Prusa Slicer

Prusa Slicer Prusa research 122 Qu’est-ce que PrusaSlicer ?: Slicer basé sur Slic3r, optimisé pour les imprimantes Prusa mais compatible avec d'autres marques.  Avantages: Open source, interface intuitive, paramètres avancés pour des impressions optimisées.  Inconvénients: Interface légèrement différente des standards, peut nécessiter un temps d'adaptation.

![Slide 122 Image](slide_122_image_4.png)


![Slide 122 Image](slide_122_image_5.png)


## Bambu Slicer

Bambu Slicer BambuLab 123 Qu’est-ce que Bambu Studio ?: Slicer développé pour les imprimantes Bambu Lab, offrant des fonctionnalités spécifiques pour ces machines.  Avantages: Intégré avec les imprimantes Bambu, gestion avancée des couleurs et des matériaux.  Inconvénients: Principalement conçu pour l'écosystème Bambu, support limité pour d'autres imprimantes. 

![Slide 123 Image](slide_123_image_4.png)


![Slide 123 Image](slide_123_image_5.jpg)


## Orca Slicer

Orca Slicer Slicer multi-marque OpenSource 124 Qu’est-ce qu’OrcaSlicer ?: Fork de Bambu Studio, apportant des fonctionnalités supplémentaires et une compatibilité élargie.  Avantages: Support multi-marques, communauté active, amélioration continue des fonctionnalités.  Inconvénients: Moins connu, peut manquer de support officiel.

![Slide 124 Image](slide_124_image_4.jpg)


![Slide 124 Image](slide_124_image_5.jpg)


## Full Control XYZ

Full Control XYZ L’anomalie… https://fullcontrol.xyz 125 Open source : Projet disponible sur GitHub, conçu pour repousser les limites des slicers traditionnels.  Fonctionnalité clé : Permet la génération manuelle et avancée de structures directement en G-code, sans nécessiter un modèle 3D intermédiaire.  Contrôle total sur l’impression : Les utilisateurs peuvent créer des structures paramétriques complexes, comme des treillis, des objets mathématiques ou des géométries sur mesure.

![Slide 125 Image](slide_125_image_4.png)


## Full Control XYZ

Full Control XYZ L’anomalie… https://fullcontrol.xyz 126 Exploration de nouveaux usages : Idéal pour la recherche, le prototypage, ou les applications nécessitant une précision extrême (bio-impression, structures légères).  Indépendance vis-à-vis des formats traditionnels : Plus besoin de fichiers STL ou OBJ, tout est défini directement dans le slicer.  Évolution des slicers : Introduit une approche programmative et personnalisable, s’éloignant des slicers conventionnels qui s’appuient sur des modèles figés.  FullControl.xyz ouvre de nouvelles perspectives pour les makers et chercheurs en permettant une maîtrise inédite de la fabrication additive.

## Le Slicer

Le Slicer 127 Les réglages de base

## Le Slicer

Le Slicer Les réglages de base 128 Pourquoi les réglages de base sont importants ? Qualité d’impression : Optimiser la précision, la solidité, et les finitions des objets imprimés. Efficacité : Réduire les temps d’impression tout en économisant du filament. Adhérence et stabilité : Garantir que l’objet reste bien fixé au plateau et ne se déforme pas.  Principaux réglages abordés : Température de la buse et du plateau. Hauteur de couche (résolution). Remplissage et motifs. Supports pour les surplombs. Adhérence au plateau (bordures, jupe, radeau).

![Slide 128 Image](slide_128_image_4.png)


## Températures d’impression

Températures d’impression Les réglages de base 129 Température du filament: Chaque fabricant indique une plage optimale (200-240°C pour la buse).  Température du plateau: Recommandée entre 60 et 100°C selon le filament. Respectez les valeurs pour éviter les déformations

![Slide 129 Image](slide_129_image_4.jpg)


![Slide 129 Image](slide_129_image_5.jpg)


## Hauteur de couche

Hauteur de couche Les réglages de base 130 Impact sur la qualité: Hauteurs basses (0,1 mm) = plus de détails, mais impression lente. Hauteurs élevées (0,2 mm) = impression rapide, mais moins précise.  Configuration variable: Certains slicers permettent d’ajuster la hauteur selon les zones pour optimiser le temps et la qualité.

![Slide 130 Image](slide_130_image_4.png)


## Parois et couches solides

Parois et couches solides Les réglages de base 131    Parois verticales (Périmètres): Nombre de périmètres x diamètre de la buse = épaisseur des murs.       Couches solides: Déterminez le nombre de couches solides en haut et en bas (généralement 3-5). Plus de couches = meilleure résistance

## Remplissage et motifs

Remplissage et motifs Les réglages de base 132 Pourcentage de remplissage: 10-20% pour la plupart des impressions. Augmentez pour des objets plus résistants.  Motifs de remplissage: Choisissez des motifs comme nid d’abeille ou lignes pour ajuster solidité et temps d’impression.

![Slide 132 Image](slide_132_image_5.png)


## Supports

Supports Les réglages de base 133  Rôle des supports: Structures temporaires pour soutenir les parties en surplomb. Minimise les échecs.    Optimisation: Réduisez les supports en orientant mieux l’objet ou en adaptant la conception.

![Slide 133 Image](slide_133_image_4.png)


![Slide 133 Image](slide_133_image_5.png)


## Adhérence au plateau

Adhérence au plateau Les réglages de base 134 Bordure: Augmente l’adhérence, utile pour des objets petits ou fins.    Radeau: Structure de base sous l’objet, idéale pour prévenir le warping sur certains matériaux comme l’ABS ou le PETG.

![Slide 134 Image](slide_134_image_4.png)


![Slide 134 Image](slide_134_image_5.png)


![Slide 134 Image](slide_134_image_6.png)


## Pontage et refroidissement

Pontage et refroidissement Les réglages de base 135 Pontage: Impression dans le vide en tirant une ligne entre deux points. Dépend du refroidissement.  Refroidissement: Ventilation active pour solidifier rapidement les couches fines ou en porte-à-faux.

![Slide 135 Image](slide_135_image_4.png)


![Slide 135 Image](slide_135_image_5.png)


![Slide 135 Image](slide_135_image_6.png)


## Optimiser ses designs

Optimiser ses designs 136 Les astuces à avoir en tête

## Minimiser les supports

Minimiser les supports Optimiser ses designs 137 Pourquoi ? Les imprimantes ne peuvent pas imprimer dans le vide. Les supports augmentent le temps, le matériau utilisé et peuvent affecter la qualité des surfaces.  Solution Concevez les objets pour réduire au maximum les surplombs nécessitant des supports.

![Slide 137 Image](slide_137_image_4.png)


![Slide 137 Image](slide_137_image_5.png)


## Positionnement sur le plateau

Positionnement sur le plateau Optimiser ses designs 138 Surface directe: Les surfaces en contact direct avec le plateau sont lisses et régulières.  Surfaces sur supports: Elles sont souvent irrégulières et moins esthétiques. Orientez les modèles pour minimiser cette situation.

![Slide 138 Image](slide_138_image_4.png)


![Slide 138 Image](slide_138_image_5.png)


## Résistance des couches

Résistance des couches Optimiser ses designs 139 Orientation des couches  Les pièces sont plus fragiles dans la direction parallèle aux couches. Concevez en fonction des contraintes prévues. 

![Slide 139 Image](slide_139_image_4.png)


![Slide 139 Image](slide_139_image_5.png)


## Découpe des modèles

Découpe des modèles Optimiser ses designs 140 Pourquoi découper ?: Couper un modèle complexe (comme une sphère) en plusieurs parties peut faciliter l'impression et améliorer la qualité des surfaces.  Assemblage: Les parties imprimées séparément peuvent être assemblées pour un meilleur rendu global.

![Slide 140 Image](slide_140_image_4.png)


![Slide 140 Image](slide_140_image_5.png)


## Tolérances dans les assemblages

Tolérances dans les assemblages Optimiser ses designs 141 Importance des tolérances: Prévoir un espace de jeu (ex. : 0,15 mm pour une tige de 10 mm) est essentiel pour un assemblage réussi. Des astuces type « goutte d’eau » peuvent améliorer les tolérances de vos impressions  Ajustements nécessaires: Chaque configuration d’imprimante et matériau peut nécessiter plusieurs essais pour optimiser les tolérances.

![Slide 141 Image](slide_141_image_4.png)


![Slide 141 Image](slide_141_image_5.png)


![Slide 141 Image](slide_141_image_6.jpg)


## Orientation des trous

Orientation des trous Optimiser ses designs 142 Trous imprimés verticalement : Un trou imprimé verticalement risque de ne pas être parfaitement circulaire.  Orientation horizontale : Imprimez les trous horizontalement pour un meilleur rendu et une plus grande précision.

![Slide 142 Image](slide_142_image_4.png)


![Slide 142 Image](slide_142_image_5.png)


## Largeur des périmètres

Largeur des périmètres Optimiser ses designs 143 Périmètre simple: Avec une buse standard de 0,4 mm, la largeur imprimée est d'environ 0,45 mm.  Impact: Cela affecte directement l’épaisseur des parois et doit être pris en compte lors de la conception.

![Slide 143 Image](slide_143_image_4.png)


![Slide 143 Image](slide_143_image_5.png)


## Le GCode

Le GCode 144 Les instructions machine

## Le G-code

Le G-code Qu’est-ce que le G-code ? 145 Définition: Le G-code est un langage de commande utilisé pour contrôler les machines-outils, dont les imprimantes 3D.  Origines: Créé dans les années 1950 pour les machines CNC, il est devenu un standard pour l’automatisation.  Usage en impression 3D: Chaque commande du G-code définit des actions comme déplacer la tête d’impression, ajuster la température, ou contrôler la vitesse.

![Slide 145 Image](slide_145_image_4.png)


## Le G-code

Le G-code Principe de fonctionnement 146 Structure des commandes: Chaque ligne commence par une lettre (ex. G pour mouvement, M pour contrôle) suivie de paramètres.  Exemple: G1 X10 Y20 Z0.2 F1500 : Déplace la tête à X=10, Y=20, Z=0.2 à une vitesse de 1500 mm/min.  Lien avec le slicer: Le G-code est généré par un slicer à partir d’un modèle 3D, traduisant le fichier en commandes machine.

![Slide 146 Image](slide_146_image_4.png)


## Le G-code

Le G-code Pourquoi comprendre le G-code ? 147 Dépannage: Permet d’identifier et de corriger des problèmes d’impression directement dans le fichier.  Optimisation: Ajuster manuellement certaines commandes pour améliorer la qualité ou la vitesse.  Personnalisation: Créer des routines spécifiques (ex. : nettoyage, calibration).  Applications avancées: Utile pour automatiser des processus ou intégrer des fonctions non standardisées.

![Slide 147 Image](slide_147_image_4.png)

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres formations pour approfondir vos connaissances"
  type="courses"
%}
