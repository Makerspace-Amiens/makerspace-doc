---
layout: documentation
image: Kicad_PCB_Unimakers_V04_rightV2.png
hide_hero: false
hero_image: Kicad_PCB_Unimakers_V04.png
hero_darken: true
component_toc: true
background_color: '#f7eded'

title: Kicad (1) - Présentation et Installation
subtitle: Découvrez Kicad et installez-le !
description: Dans ce premier tuto, nous allons voir comment vous pouvez installer la version 7 de Kicad.
tags: Kicad
type: doc,cao

time: 2
difficulty: 1
compatibilities-os: win, lin, mac

prerequisites:
  - label: Aucun
    link: ""

softwares: 
  - label: Kicad
    link: "https://www.kicad.org/"

todo: 100
---

*Merci à Loaf of tech A.K.A Looij Dylan pour le tuto.*

# 1. Présentation

KiCad est un logiciel open-source de conception assistée par ordinateur électronique (CAOE), spécifiquement conçu pour les schémas électroniques et la création de PCB (circuit imprimé).

KiCad est largement utilisé par les makers et entreprises en raison de sa large communauté et de sa simplicité d'utilisation, ce qui rend l'outil flexible et facile à apprendre les bases.
Mais les utilisateurs peuvent créer des empreintes sur mesure, assurant une correspondance précise entre les symboles du schéma et les empreintes sur le PCB. Le gestionnaire de projets unifie tous les aspects d'un projet, simplifiant sa gestion.

En intégrant la capacité de générer des fichiers Gerber, KiCad est un logiciel qui permet également d'utiliser les services de nombreux fabricants de PCB, tels que Wurth Elektronik, JLCPCB, Aisler, etc...

![](Interface_Kicad.png)

À l'origine, en 1992, KiCad était un ensemble de programmes spécifiquement conçus pour la conception électronique. Aujourd'hui, ces différents logiciels sont regroupés en un seul dans KiCad, et ils interagissent entre eux.
Depuis 2013, Le C.E.R.N participe au développement de KiCad, en ajoutant un nouveau moteur de routage, ce qui améliore la productivité grâce au technologie Push and shove.

En 2018, la possibilité de visualiser en 3D les composants et cartes est apparue dans le programme, ce qui permet à l'utilisateur de voir sa carte et d'aussi travailler en fonction de la hauteur des composants.

## 2. Installation 

{% include message.html
title="INFORMATION" 
message="Les étapes ci-dessous sont dédiées à l'installation de la version 7.0. Il est tout à fait possible que les nouvelles versions diffèrent. Si c'est le cas, n'hésitez pas à prévenir l'administrateur du site." %}

{% include step-tuto.html 
greyBackground = true
title="Téléchargement de KiCad"
content="Commencez par accéder à la page dédiée au **Téléchargement** en [allant sur cette page](https://www.kicad.org/download/).
Puis cliquez sur votre système d'exploitation. Une page apparaîtra avec différents serveurs. Il est recommandé d'utiliser le serveur du CERN ou de Futureware.

![](Page_de_telechargement_Kicad.png)
" 
image="Download.png" %}

{% include message.html
title="ATTENTION" 
status="is-danger"
message="Dans les pages qui s'ouvrent, laissez tout par défaut et continuez. 

**Attention :** KiCad a besoin d'environ 7 Go d'espace de stockage.

Cliquez sur Installer." %}


## 3. L'interface d'accueil

{% include step-tuto.html 
title="Interface"
content="Quand vous ouvrez KiCad, une page d'accueil s'ouvre qui vous donne accès à tous les programmes que réunit KiCad. 
**Notamment :**
- ***Editeur de schématique*** : c'est en sorte votre premier niveau de jeu, un projet commencera presque toujours par cette logicielle, c'est là où vous conceptualisez **le plan de construction** de votre schéma électrique.
- ***Editeur de Symbole*** : S'il n'y a pas le symbole de votre composant, vous pouvez le créer grâce à cet éditeur.
- ***Editeur de PCB*** : c'est votre dernier niveau de jeu, c'est là où vous construisez la physique de votre carte.
- ***Editeur d'empreintes*** : Si le composant que vous utilisez n'est pas commun ou nouveau, il se peut que KiCad ne l'ait pas intégré et que la communauté n'ait pas de bibliothèque (sujet traité plus tard) pour le composant. Dans ce cas, vous êtes obligé de créer vous-même l'empreinte.
- ***Visionneuse de Fichier Gerber***
- ***Convertisseur d'images***
- ***Outils de Calcul*** : cette petite calculatrice puissante permet de calculer certaines tailles de composant ou phénomènes qui pourraient s'introduire avec votre circuit électronique en fonction de comment vous l'avez construit.
- ***Editeur de feuille de dessin***
- ***Gestionnaire de Plugin et de contenu*** : Des extensions sont faites par la communauté, ou des entreprises, pour faciliter l'intégration de KiCad dans le milieu industriel ou d'ajouter des outils pratiques pendant le développement. Nous allons voir ça en détail.
"
image="Interface_dacceuil_kicad.png"
 %}

## 4. Gestionnaire de Plugin et de Contenu

{% include step-tuto.html 
title="Plugins et Contenu"
content="Cette rubrique vous permet facilement d'ajouter de nouveaux plugins, des toolkits, fonctionnalités, etc. Voici une petite sélection recommandée, mais pas impérative pour les tutoriels qui suivent.

**Recommandé**
- KiBuzzard: permet d'avoir des polices fait maison.
- Board2PDF: pour rendre votre travail de documentation plus rapide

Si vous allez commander votre carte, nous vous invitons à installer le plugin de votre fournisseur, par exemple :

- Aisler Push for Kicad, pour Aisler.
- PCBWay Fabrication Toolkit, pour PCBWAY.
- Fabrication Toolkit pour JLCPCB.
- etc...

Cela vous permet de passer l'étape de la configuration Gerber, qui est donc gérée par les différents toolkits.

**Remarque** : Lorsque vous installez un plugin, n'oubliez pas de cliquer sur le bouton **Appliquer Changements en Attente** !

Vous pouvez également voir une rubrique librairies et thèmes, destinée à personnaliser votre expérience sur KiCad!"

image="Interface_plugin_kicad.png"
 %}

---
## 5. Première carte

Vous êtes maintenant prêt à vous lancer dans la création de votre première PCB sous KiCad ! Rendez-vous sur le prochain tutoriel en suivant le lien ci-dessous.

<a href="../KiCad-premiere-carte" class="button is-info is-rounded is-medium">
    <span class="icon">
      <i class="fas fa-wave-square"></i>
    </span>
    <span>Première Carte - Tuto complet</span>
</a>

