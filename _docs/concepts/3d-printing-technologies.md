---
layout: documentation
hide_hero: false
hero_image: "slide_88_image_6.jpg"
hero_darken: true
image: "slide_88_image_6.jpg"
component_toc: true
doc_header: true
type: doc,concept
tag: additive-manufacturing

title: Les technologies d'impression
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


## II - Les technologies

II - Les technologies Sources illustrations : « Les bases de l’imrpession 3D » - Prusa Research

## Les différentes technologies

FFF/FDM (Fused Filament Fabrication/Modeling) : Processus : Filament plastique fondu et déposé par une buse. Applications : Prototypage rapide, objets du quotidien. Avantages : Abordable et facile à utiliser.  SLA (Stéréolithographie) : Processus : Résine liquide solidifiée par lumière UV ou LED (laser ou DLP). Applications : Modèles détaillés, prothèses, bijoux. Avantages : Haute précision et finition.  SLS (Selective Laser Sintering) : Processus : Poudre fine compactée par laser. Applications : Pièces fonctionnelles, prototypes industriels. Avantages : Pas besoin de structures de support, matériaux variés.     Les différentes technologies 65

## Les différentes technologies

Les différentes technologies 66 Pas de technologie universelle.  Chaque méthode a ses avantages et limites.  Choisissez en fonction de vos besoins.

## FDM / FFF

FDM / FFF Fused Deposition Modeling / Fused Filament Fabrication 67

## FFF / FDM

FFF / FDM Fused Deposition Modeling / Fused Filament Fabrication 68 La plus répandue et abordable Adaptée aux pièces fonctionnelles, mécaniques et aux prototypes.  Matériau utilisé : Filament plastique Diamètre standard : 1,75 mm. Facile à utiliser. Plus sûr que la résine liquide ou la poudre.  Caractéristiques d’impression Hauteur de couche : 0,05 à 0,3 mm avec une buse de 0,4 mm. Limite : Couches visibles à l'œil nu.  Idéal pour des projets accessibles et pratiques, avec un excellent rapport qualité-prix.

![Slide 68 Image](slide_68_image_4.png)


## FFF / FDM – Types de machines

FFF / FDM – Types de machines Cartésienne – “Bed slinger” 69 Principe de Fonctionnement Les imprimantes cartésiennes utilisent des axes orthogonaux (X, Y, Z) pour les déplacements. Dans une configuration bed slinger, le plateau (bed) se déplace.  Avantages : Conception simple et économique. Idéal pour les imprimantes FDM grand public  Limites : Déplacements rapides limités par l’inertie du plateau. Peut affecter la qualité d’impression sur de grands volumes.

![Slide 69 Image](slide_69_image_4.png)


![Slide 69 Image](slide_69_image_5.png)


## FFF / FDM – Types de machines

FFF / FDM – Types de machines Cartésienne – “Cantilever” 70 Principe de Fonctionnement Une imprimante cantilever utilise également une architecture cartésienne, mais avec une structure simplifiée. La tête d'impression se déplace sur un bras unique, sans support symétrique.  Avantages : Conception légère et compacte. Idéale pour les imprimantes de petit format. Réduction des coûts de fabrication grâce à une structure minimaliste.  Limites : Moins stable que d'autres architectures, surtout pour de grands volumes. Peut être affectée par des vibrations ou une flexion du bras.

![Slide 70 Image](slide_70_image_4.jpg)


![Slide 70 Image](slide_70_image_5.jpg)


## FFF / FDM – Types de machines

FFF / FDM – Types de machines Cartésienne – “Core XY” 71 Principe de Fonctionnement Une architecture CoreXY utilise un système de poulies et courroies pour coordonner les déplacements sur les axes X et Y. La tête d’impression est suspendue et se déplace indépendamment du plateau.  Avantages : Vitesse élevée : Mouvement plus léger et rapide, car seule la tête d’impression se déplace sur X et Y. Précision accrue : Réduction des vibrations par rapport aux architectures de type bed slinger. Idéal pour les grands volumes : Stabilité optimale sur de grandes dimension  Limites : Nécessite un alignement précis des courroies. Coût plus élevé que les architectures simples comme les bed slingers ou cantilever. https://corexy.com/theory.html

![Slide 71 Image](slide_71_image_4.png)


![Slide 71 Image](slide_71_image_5.jpg)


![Slide 71 Image](slide_71_image_7.png)


## FFF / FDM – Types de machines

FFF / FDM – Types de machines Cartésienne – “Core XY” 72

![Slide 72 Image](slide_72_image_3.gif)


![Slide 72 Image](slide_72_image_4.gif)


## FFF / FDM – Types de machines

FFF / FDM – Types de machines Delta 73 Principe de Fonctionnement Une imprimante Delta repose sur une structure composée de trois bras attachés à des colonnes verticales. La tête d’impression est déplacée par la coordination simultanée des trois bras.  Avantages : Vitesse élevée : Déplacement rapide et fluide grâce à la légèreté de la tête. Structure compacte : Idéale pour des formes cylindriques ou circulaires. Grande hauteur d’impression : Permet de produire des objets allongés.  Limites : Complexité de calibration : Nécessite une calibration précise pour éviter des erreurs de positionnement. Forme du plateau : Habituellement circulaire, limitant certains designs. Moins adapté pour les petites impressions : Risque de surcoût ou de surdimensionnement.

![Slide 73 Image](slide_73_image_4.png)


![Slide 73 Image](slide_73_image_5.png)


## FFF / FDM – Les composants

FFF / FDM – Les composants L’ensemble d’extrusion 74 Rôle de l’ensemble d’extrusion Acheminer et contrôler le filament plastique vers la buse d’impression. Responsable du dépôt précis de matière couche par couche. La qualité et la fiabilité de l’extrudeur impactent directement la précision et l’uniformité des impressions.  Composants Moteur : Permet le déplacement précis du filament. Roues d’entraînement : Saisissent et poussent le filament dans le tube de guidage. Hotend (partie chaude) : Chauffe le filament pour le rendre liquide avant extrusion.

## FFF / FDM – Les composants

FFF / FDM – Les composants Deux principaux types d’ensemble 75 Direct Drive : L’extrudeur est directement monté sur la tête d’impression. Avantages : Meilleur contrôle pour les matériaux flexibles. Limites : Plus lourd, pouvant réduire la vitesse.     Bowden : L’extrudeur est séparé de la tête et pousse le filament via un tube. Avantages : Structure plus légère, permettant des impressions rapides. Limites : Moins adapté aux matériaux flexibles.  

![Slide 75 Image](slide_75_image_4.png)


## FFF / FDM – Les composants

FFF / FDM – Les composants L’extrudeur 76 Fonction principale : Mouvements du filament L’extrudeur pousse le filament plastique dans la buse d’impression pour qu’il soit fondu et extrudé.  Il contrôle : La vitesse d’alimentation. La précision du débit de filament  Importance pour les matériaux complexes Les matériaux comme les TPU ou TPE sont flexibles et difficiles à extruder sans un contrôle précis.  Un extrudeur performant : Évite les bourrages. Maintient une extrusion fluide et homogène. Assure une qualité d’impression optimale, même avec des filaments exigeants.

![Slide 76 Image](slide_76_image_4.png)


![Slide 76 Image](slide_76_image_5.jpg)


![Slide 76 Image](slide_76_image_6.jpg)


## FFF / FDM – Les composants

FFF / FDM – Les composants La Hotend 77    1 - Tube PTFE 2 - Dissipateur thermique 3 - Ventilateur d’impression 4 - Barrière thermique 5 - Bloc de chauffe 6 - Buse Fonction principale : Chauffe et dépose du filament Chauffer le filament plastique pour le rendre liquide et extrudable. Solidifier rapidement le filament déposé pour former des couches précises.  Bloc chauffant : Contient une cartouche chauffante et un thermistor. Températures courantes : 180°C à 260°C (selon le matériau).  Heat break (zone froide) : Transition entre la partie chauffante et le système de guidage. Réduit la conduction thermique pour éviter un ramollissement prématuré du filament.  Dissipateur thermique (radiateur) : Aide à refroidir le filament au-dessus du heat break. Souvent accompagné d’un ventilateur dédié

![Slide 77 Image](slide_77_image_4.png)


## FFF / FDM – Les composants

FFF / FDM – Les composants La buse 78 Rôle de la buse Extruder le filament fondu pour créer des couches d’impression. Déterminer la précision et la vitesse de l’impression en limitant le diamètre de sortie du matériau.  Matériaux des buses Laiton (standard) : Idéal pour le PLA, ABS et PETG. Excellente conductivité thermique. S'use rapidement avec des filaments abrasifs (ex. carbone).  Acier trempé : Conçu pour les filaments abrasifs comme le carbone ou le métal. Grande durabilité. Conductivité thermique inférieure au laiton.  Revêtements spéciaux : Buses plaquées (nickel, cuivre) pour une meilleure résistance et moins d’adhérence.

![Slide 78 Image](slide_78_image_4.jpg)


## FFF / FDM – Les composants

FFF / FDM – Les composants Taille des buses 79  0,4 mm (standard) : Équilibre entre précision et vitesse. Idéal pour la majorité des projets.  Petites tailles (ex. 0,2 mm) : Avantages : Plus de détails pour des impressions précises. Limites : Impression plus lente.  Grandes tailles (ex. 0,6 à 1,0 mm) : Avantages : Impression plus rapide pour les grandes pièces. Limites : Moins de finesse dans les détails.  Le choix de la buse impacte : La résolution (précision des détails). La vitesse d’impression. La compatibilité avec les matériaux spécifiques.

![Slide 79 Image](slide_79_image_4.jpg)


## SLA

SLA Stéréolithographie 80

## SLA

SLA Stéréolithographie 81 Principe de Fonctionnement Utilisation de résines liquides photosensibles, solidifiées par la lumière UV. Une plateforme descend après chaque couche solidifiée, permettant à une nouvelle couche d’adhérer.  Caractéristiques Précision élevée : Objets détaillés avec des couches quasiment invisibles. Finitions lisses, idéales pour les bijoux et les applications médicales.  Limitations : Surface d’impression réduite. Temps d’impression plus long que les imprimantes FFF. Résines liquides toxiques : manipulation et ventilation nécessaires.  Avantages Détails incroyables et surface lisse, impossible à atteindre avec les imprimantes FFF. Applications professionnelles : prototypes complexes, modélisation médicale, et bijoux.

![Slide 81 Image](slide_81_image_4.jpg)


## Slide 82

82 Pourquoi le post-traitement est nécessaire ? Les objets imprimés en SLA ne sont pas prêts à l’usage immédiatement. Ils peuvent être mous ou collants à cause de résidus de résine non solidifiée à leur surface.  Étapes de post-traitement : Nettoyage : Laver l’objet dans de l’alcool isopropylique pour enlever la résine restante. Durcissement UV : Exposer l’objet à une lumière UV pour le solidifier davantage.  Précautions : Toujours porter des gants pour manipuler les objets et éviter le contact avec la résine. Veiller à bien ventiler l’espace pour éviter l’inhalation des vapeurs.  Outils complémentaires : Machines automatiques de lavage et de durcissement, simplifiant le processus et garantissant des résultats homogènes.  SLA Post-traitement

## Slide 83

83 Eléments constitutifs : 1 - Plateforme d‘impression 2 - Tige trapézoïdale 3 - Axe Z 4 - Réservoir de résine 5 - Photopolymère (résine liquide) 6 - Moteur pas à pas 7 - Objet imprimé  Processus : La plateforme d’impression descend dans la résine, laissant une fine couche entre l’objet et le fond du réservoir. La lumière UV solidifie la résine selon la forme de la couche. Une fois la couche terminée, la plateforme monte légèrement, permettant la formation de la couche suivante. Ce processus se répète jusqu’à ce que l’objet soit terminé. SLA Processus & fonctionnement général

## Slide 84

84 Principe de Fonctionnement Un rayon laser UV solidifie la résine couche par couche. Deux miroirs (galvanomètres) dirigent le laser pour « dessiner » la forme de chaque couche. Caractéristiques Temps d’impression : Dépend de la surface à solidifier. Plus il y a d’objets, plus l’impression est longue. Précision : Très élevée grâce à la finesse du rayon laser. SLA Laser Avantages Idéal pour des objets très détaillés. Adapté aux applications nécessitant une précision extrême (ex. bijoux, dentaire). Limites Temps d’impression peut augmenter significativement avec la complexité ou la taille de la plateforme.

![Slide 84 Image](slide_84_image_4.png)


## Slide 85

85 Principe de Fonctionnement Utilise un projecteur numérique pour solidifier toute une couche à la fois. Les zones exposées par le projecteur durcissent simultanément. Caractéristiques Temps d’impression : Constant, quelle que soit la quantité d’objets sur la plateforme. Précision : Dépend de la résolution du projecteur. SLA DLP (Digital Light Processing) Avantages Rapidité accrue pour les impressions multi-objets. Répartition homogène de l’exposition sur toute la plateforme. Limites Résolution XY limitée par la qualité du projecteur.

![Slide 85 Image](slide_85_image_5.png)


## Slide 86

86 Principe de Fonctionnement Une LED UV haute performance émet de la lumière. Un écran LCD agit comme un masque, ne laissant passer la lumière que sur les zones à solidifier. Caractéristiques Temps d’impression : Constant pour chaque couche, quelle que soit la quantité d’objets. Résolution fixe : Dépend de la résolution de l’écran LCD. SLA MSLA (stéréolithographie masquée) Avantages Rapide et efficace pour des impressions multi-objets. Prix généralement plus abordable que le SLA laser. Limites La résolution dépend uniquement de l’écran LCD (XY). Durabilité limitée des écrans LCD avec le temps.

![Slide 86 Image](slide_86_image_5.png)


## SLS / DMLS

SLS / DMLS Selective Laser Sintering - Frittage 87

## SLS / DMLS

SLS / DMLS Selective Laser Sintering - Frittage 88 Principe de Fonctionnement Le frittage consiste à solidifier une poudre fine avec un laser pour former chaque couche. Étapes : Un cylindre applique une fine couche de poudre sur la plateforme. Le laser fritte la poudre en suivant la forme de la couche. La plateforme descend pour accueillir une nouvelle couche de poudre. Caractéristiques Précision : Couches très fines, quasiment invisibles à l'œil nu. Économie de matériau : La poudre non frittée peut être réutilisée, limitant le gaspillage. Flexibilité : Pas besoin de supports, car la poudre environnante soutient les pièces pendant l'impression. Applications Utilisé principalement dans l’industrie pour des pièces fonctionnelles et des prototypes. Secteurs : automobile, aéronautique, médical, design. Limites Post-traitement : Nécessité de nettoyer les objets imprimés pour retirer la poudre excédentaire. Coût élevé : Machines à partir de 5500 €, principalement utilisées par les professionnels.

![Slide 88 Image](slide_88_image_0.jpg)


![Slide 88 Image](slide_88_image_5.jpg)


![Slide 88 Image](slide_88_image_6.jpg)


## SLS / DMLS

SLS / DMLS Selective Laser Sintering - Frittage 89 Eléments constitutifs : 1 - Laser 2 - Système de balayage 3 - Récipient de poudre 4 - Cylindre 5 - Mécanisme de chargement de poudre 6 - Lit de poudre 7 - Objet imprimé 8 - Plateforme motorisée   Principe de fonctionnement : 1 - Faisceau laser 2 - Particule de poudre frittée 3 - Frittage laser 4 - Lit de poudre 5 - Matériau non fritté dans les couches précédentes

![Slide 89 Image](slide_89_image_4.png)


## Les autres technologies

Les autres technologies 90 Binder Jetting, Polyjet

## Binder Jetting

Binder Jetting Principe et Applications 91 Définition Le Binder Jetting est une technologie d’impression 3D qui utilise un liant liquide pour agglomérer une poudre fine et former un objet couche par couche. Contrairement au SLS, la poudre n'est pas fondue mais collée par le liant.  Principe de Fonctionnement Application de la poudre : Une fine couche de poudre (métal, sable, céramique). Projection de liant : Une tête d’impression dépose un liant liquide sur les zones définies. Formation couche par couche : La plateforme descend pour accueillir de nouvelles couches. Post-traitement : Nécessaire pour renforcer les pièces (sintering, infiltration).  Caractéristiques Matériaux : Métaux, sable, céramiques. Vitesse : Rapide, couche entière solidifiée en une fois. Précision : Surfaces lisses et détails fins. 

![Slide 91 Image](slide_91_image_4.jpg)


![Slide 91 Image](slide_91_image_5.jpg)


## PolyJet

PolyJet Principe et Applications 92 Définition Le PolyJet est une technologie d'impression 3D par jet de matériau, qui projette des gouttelettes de résine photopolymère liquide sur une plateforme d'impression, couche par couche. Chaque couche est immédiatement solidifiée par une lumière UV, permettant une grande précision et des détails fins.  Principe de Fonctionnement Projection de matériau : Des gouttelettes de résine photopolymère liquide sont projetées sur la plateforme. Solidification par lumière UV : Chaque couche est durcie instantanément par une lumière UV. Formation couche par couche : La tête d’impression dépose et durcit le matériau simultanément, avec une précision élevée.  Caractéristiques Matériaux : Résines photopolymères, avec possibilité de combiner plusieurs couleurs ou textures. Précision : Très élevée, avec des couches fines (jusqu’à 16 microns). Supports : Structures solubles pour faciliter le post-traitement.

![Slide 92 Image](slide_92_image_4.png)


![Slide 92 Image](slide_92_image_5.jpg)


## Les matériaux

Les matériaux

## Les matériaux

Les matériaux Les familles de matériaux selon les technologies 94 Filaments (FDM/FFF) : Exemples : PLA, ABS, PETG, TPU. Applications : Prototypes, pièces fonctionnelles.  Résines (SLA/DLP/MSLA) : Exemples : Résines standard, flexibles, haute résistance. Applications : Bijoux, médical, maquettes détaillées.  Poudres (SLS/Binder Jetting) : Exemples : Nylon, métaux, céramiques. Applications : Pièces fonctionnelles, prototypage industriel.  Photopolymères (PolyJet) : Exemples : Résines multi-matériaux et couleurs. Applications : Prototypes réalistes, design, médical.  Pour la suite, on se concentrera sur les filaments pour les technologies FDM/FF

![Slide 94 Image](slide_94_image_4.jpg)


![Slide 94 Image](slide_94_image_5.jpg)


![Slide 94 Image](slide_94_image_6.jpg)


## Les filaments

Les filaments 95 PLA, PETG, TPU, ABS, PVA

## PLA

PLA Acide Polylactique 96 Caractéristiques: Biodégradable, facile à imprimer. Faible résistance à la chaleur et aux chocs. Température d’impression: 190-220°C. Applications: Objets décoratifs, prototypes non fonctionnels. Avantages: Peu de déformation, compatible avec les imprimantes débutantes. Limites: Fragilité, sensibilité à la chaleur. 

![Slide 96 Image](slide_96_image_4.jpg)


## PETG

PETG Polyéthylène Téréphtalate Glycol 97 Caractéristiques: Résistant, flexible, bonne adhérence entre les couches. Léger effet brillant. Température d’impression: 220-250°C. Applications: Pièces fonctionnelles, contenants alimentaires (sous conditions). Avantages: Résistant à l’humidité et aux produits chimiques. Limites: Sensible à l’humidité pendant l’impression, risque de fils ('stringing'). 

![Slide 97 Image](slide_97_image_4.jpg)


## TPU

TPU Polyuréthane Thermoplastique 98 Caractéristiques: Flexible et élastique, très résistant. Température d’impression: 200-250°C. Applications: Joints, semelles, objets nécessitant de la souplesse. Avantages: Grande résistance mécanique, flexible. Limites: Plus difficile à imprimer, nécessite un extrudeur adapté.

![Slide 98 Image](slide_98_image_4.jpg)


## ABS

ABS Acrylonitrile Butadiène Styrène 99 Caractéristiques: Résistant à la chaleur et aux chocs. Nécessite un plateau chauffant et une enceinte fermée pour éviter le warping. Température d’impression: 220-250°C. Applications: Pièces mécaniques, prototypes industriels. Avantages: Durable et robuste. Limites: Émissions de vapeurs, nécessite une bonne ventilation.

![Slide 99 Image](slide_99_image_4.jpg)


![Slide 99 Image](slide_99_image_5.jpg)


## PVA

PVA Alcool Polyvinylique 100 Caractéristiques: Soluble dans l’eau, utilisé comme support d’impression. Température d’impression: 180-210°C. Applications: Supports pour pièces complexes en double extrusion. Avantages: Facile à retirer, idéal pour des géométries complexes. Limites: Sensible à l’humidité, stockage délicat.

![Slide 100 Image](slide_100_image_4.png)


![Slide 100 Image](slide_100_image_5.jpg)


## Les filaments

Les filaments 101 Les filaments spécifiques

## HIPS

HIPS Polystyrène à impact élevé 102 Caractéristiques: Léger et facile à imprimer. Utilisé comme matériau de support soluble (dissout dans le limonène). Applications: Support pour ABS, prototypage. Polyamide NYLON Caractéristiques: Résistant, flexible, durable, mais nécessite un environnement contrôlé. Applications: Pièces fonctionnelles, engrenages, prototypes mécaniques. Note : Sensible à l'humidité. Polypropylène PP Caractéristiques: Flexible, résistant aux produits chimiques et aux impacts. Applications: Contenants alimentaires, pièces nécessitant flexibilité et durabilité. PC Polycarbonate Caractéristiques: Très résistant à la chaleur et aux chocs, mais nécessite des températures élevées. Applications: Pièces nécessitant une résistance mécanique et thermique.

## Composites

Composites Filaments mélangés 103 Caractéristiques: PLA ou ABS mélangés avec du bois, du métal ou de la fibre de carbone. Applications: Design, prototypage, pièces nécessitant résistance. Polyétheréthercétone/Ultem PEEK/PEI Caractéristiques: Haute résistance mécanique, thermique et chimique. Utilisé pour des applications industrielles et médicales Applications: Aéronautique, médical, automobile. Nécessite des imprimantes haut de gamme. ASA Acrylonitrile Styrène Acrylate Caractéristiques: Alternative à l’ABS, résistant aux UV et intempéries. Applications: Pièces extérieures ou d’usage prolongé en extérieur.



---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres formations pour approfondir vos connaissances"
  type="courses"
%}
