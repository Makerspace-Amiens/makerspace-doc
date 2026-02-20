---
layout: documentation
image: FreeCad(1).png
hide_hero: false
hero_image: FreeCad(1).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: FreeCAD (1) - Présentation et Installation
subtitle: Découvrez FreeCAD et installez le !
description: Dans ce premier tuto, nous allons voir comment vous pouvez installer FreeCAD.
tags: freecad
type: doc,cao

time: 2
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: Aucun
    link: ""

softwares: 
  - label: FreeCAD
    link: "https://www.freecad.org"

todo: 100
---

## 1. Présentation

FreeCAD est un logiciel de CAO 3D (conception assistée par Ordinateur) libre et OpenSource. Il est utilisable sur n'importe quel système d'exploitation et est encore en développement.

Ce logiciel permet la réalisation de pièces et assemblages des pièces paramétriques plutôt orientées mécanique et dispose aujourd'hui d'une grande communauté lui permettant de répondre à de nombreux besoins parfois très spécifiques.

Plus d'informations sur le site web de FreeCAD : [https://www.freecadweb.org](https://www.freecadweb.org).

## 2. Installation (rapide)

### 2.1 Version officielle 

**Note : Si vous souhaitez une version plus avancée de FreeCAD, passez à la version de développement "LinkBranch"**

La dernière version stable de FreeCAD est disponible en téléchargement gratuit directement sur le site de [https://www.freecadweb.org](https://www.freecadweb.org). Choisissez la version selon votre OS, téléchargez la et lancez l'installation. 

### 2.2 Version de développement (conseillée)

Il existe de nombreuses versions de développement de FreeCAD. Mais celle qui sort du lot et qui corrige un grand nombre de bugs et de comportements instables du logiciel est la version de RealThunder "FreeCAD LinkBranch". Le développeur a corrigé énormément de bugs liés au "topological naming" et à rajouté un grand nombre de fonctionnalités.

Pour la télécharger, il suffit simplement de se rendre sur le [repo GitHub](https://github.com/realthunder/FreeCAD_assembly3/releases) du projet dans la section **release** et de sélectionner la version désirée selon votre OS. 

Une fois téléchargé, vous pouvez décompresser l'archive et lancer le logiciel en allant dans le dossier 'bin/FreeCADLink.exe'.

Il est ensuite conseillé de suivre les recommandations de [cette page](../freecad-installation) afin de bien débuter l'utilisation de FreeCAD, et d'avoir un espace de travail propre et plus moderne que la version de base.  

**note : ces modifications seront enregistrées pour les prochaines version de FreeCAD. Il ne sera pas nécessaire de re-suivre le tutoriel précédent.**

{% include message.html 
icon="fas fa-info-circle"
title="Notes"
message="Cette page ne traitera que du paramétrage de la version *link-branch* de [RealThunder](https://github.com/realthunder/FreeCAD/releases). Attention à la version utilisée spécifiée ci-dessous. " 
status="is-info" %}

<div class="control">
   <div class="tags has-addons">
        <span class="tag is-dark is-medium">FreeCAD_assembly3</span>
        <span class="tag is-info is-medium has-text-black"><a href="https://github.com/realthunder/FreeCAD/releases" style="color:white">2022.01.11</a></span>
        <span class="tag is-dark is-medium">
            <p class="icon">
                <i class="fab fa-github"></i>
            </p>
        </span>
    </div>
</div>

## 3. Installation 

Il existe de nombreuses versions de développement de FreeCAD. Mais celle qui sort du lot et qui corrige un grand nombre de bugs et de comportements instables du logiciel est la version de RealThunder "FreeCAD LinkBranch". Le développeur a corrigé énormément de bugs liés au "topological naming" et à rajouté un grand nombre de fonctionnalités.

{% include step-tuto.html 
greyBackground = true
title="Téléchargement"
content="Pour la télécharger, il suffit simplement de se rendre sur le [repo GitHub](https://github.com/realthunder/FreeCAD/releases) du projet dans la section **release** et de sélectionner la version désirée selon votre OS :  
- Windows -> `FreeCAD-asm3-Stable-Win64`
- MacOS -> `FreeCAD-asm3-Stable-OSX`
Vous pouvez choisir entre la version `stable`ou la version `daily`qui est une version de pré-développement proposant les dernieres nouveautés mais pouvant être un peu moins stable." 
image="2021-12-20-13-48-56.png" %}

{% include step-tuto.html 
title="Installation"
content="Selon les OS, l'installation de **FreeCAD Asm3** peut être différente :
- **Sous Windows :** Décompressez l'archive sur votre disque dans un espace approprié (évitez le bureau ou le dossier *téléchargements*). L'exécutable se situe dans `bin/FreeCADLink.exe`. Vous pouvez l'épingler à votre barre de taches, ou en faire un raccourcis. 
- **Sous Mac :** lancez simplement le `.dmg` et enregistrez l'app dans votre dossier d'applications.
" 
image="2021-12-20-14-00-59.png" %}

{% include message.html
title="INFORMATION" 
message="Si vous le souhaitez, vous pouvez aussi mettre freecad sur une clef USB afin de pouvoir le lancer depuis n'importe quel ordinateur sans avoir besoins de refaire l'installation. Pour cela il vous faudra plutôt une version **portable** du logiciel trouvable ici :

[Version 0.20.1 FreeCAD](https://github.com/FreeCAD/FreeCAD/releases/download/0.20.1/FreeCAD-0.20.1-WIN-x64-portable-1.zip)" 
status="is-info" %}

{% include step-tuto.html 
greyBackground = true
title="Premier lancement"
content="Lancez FreeCAD. Vous devriez avoir une fenêtre et une disposition similaire à celle de l'image ci-contre." 
image="2022-09-07-11-45-26.png" %}

{% include message.html 
message="A ce stade, vous pouvez commencer à utiliser FreeCAD. Cependant, les conseils qui suivent peuvent grandement améliorer la prise en main du logiciel, surtout si vous débutez dans l'utilisation du logiciel." 
status="is-info" %}

---

## 4. Personnaliser l'interface

{% include step-tuto.html 
greyBackground = true
title="Changer l'overlay"
content="Dans `Outils > Preset Configurations` cliquez sur `Overlay dark theme`. Ce paramètre charge automatique l'ensemble des presets graphiques afin d'avoir une interface épurée de FreeCAD. Vous pouvez tester les autres presets si vous désirez relooker rapidement votre interface. " 
image="changePreset.gif" %}

{% include step-tuto.html 
title="Changer le style de navigation"
content="Vous pouvez changer le style de navigation en accédant au menu en bas à droite de votre fenêtre. Le style `Gesture` est agréable pour une prise en main rapide, surtout avec certains pavés tactiles, mais vous pouvez bien évidemment tester les autres styles de navigation.  
![](2021-12-20-17-09-54.png)" 
image="2021-12-20-17-09-19.png" %}

Egalement, depuis la dernière version de FreeCAD, le gestionnaire d'addons propose des pack de thèmes. Vous pouvez les installer via le menu **Outils > Gestionnaire d'extensions**

Sous FreeCAD version RealThunder : 

![](2022-09-16-08-46-28.png)
![](2022-09-16-08-47-31.png)

Une fois installé, on vous proposera de redémarrer votre logiciel pour que les modifications soient prises en compte :

![](2022-09-16-08-48-17.png)

Rendez vous ensuite dans **Edition -> Préférences -> Général -> Preference packs (ou Feuille de style) -> Votre Pack -> Apply** pour sélectionner votre configuration souhaitée.

![](2022-09-16-09-06-39.png)

---
## 5. Personnaliser la conception de pièces et l'esquisseur

{% include step-tuto.html 
greyBackground = true
title="Fusion des modèles et vérification"
content="Allez dans `Edition > Préférences` puis dans `Conception de pièces > Général`. Cochez les options comme sur l'image ci-contre. Cela vous permettra d'automatiser la fusion des modèles et de vérification des pièces.  
Appliquez les paramètres en cliquant sur `Appliquer`." 
image="2021-12-20-17-16-15.png" %}

{% include step-tuto.html 
title="Couleurs aléatoires"
content="Dans `Conception de pièces > Shape appearance > Shape color` cochez la case `random`. Ainsi, chaque nouvelle pièce créée prendra une couleur aléatoire ce qui permet de plus facilement repérer les différentes pièces.  
Appliquez les paramètres en cliquant sur `Appliquer`." 
image="2021-12-20-13-41-57.png" %}

{% include step-tuto.html 
greyBackground = true
title="Esquisseur"
content="Dans `Esquisseur > Général` cochez les cases comme montré dans l'image ci-contre. Ceci simplifie la création des esquisses.  
Appliquez les paramètres en cliquant sur `Appliquer`." 
image="2021-12-20-17-22-02.png" %}

---
## 6. Addons supplémentaires

{% include step-tuto.html 
greyBackground = true
title="Installer des ateliers"
content="Dans `Outils > Gestionnaire d'extensions` vous pouvez installer des addons permettant d'ajouter des fonctionnalités à FreeCAD sous la forme d'ateliers supplémentaires. Nous vous conseillons les ateliers suivants :
- **Fasteners :** gestion de visserie
- **Gears :** création de roue dentées 
- **Sheet Metal :** pour réaliser de la tôlerie ou du pliage plastique  
**Re-démarrez FreeCAD pour appliquer les modifications." 
image="2021-12-20-17-31-44.png" %}

{% include step-tuto.html 
greyBackground = false
title="Organiser les ateliers"
content="Dans `Outils > Personnaliser > Ateliers`, vous pouvez réorganiser les ateliers comme vous le désirez afin de mettre ne avant ceux que vous utilisez le plus souvent et mettre de cotés ceux que vous n'utilisez pas. Nous vous recommandons de mettre en avant l'atelier `Part Design` qui est celui qui vous sera le plus utile dans l'utilisation de FreeCAD en conception mécanique.  
**Re-démarrez FreeCAD pour appliquer les modifications." 
image="2021-12-20-17-28-35.png" %}

---
## 7. Réorganiser votre fenêtre et vos outils

{% include step-tuto.html 
greyBackground = true
title="Organiser les outils"
content=" Dans chaque ateliers, les barres d'outils peuvent être déplacées sur les 4 coins de votre fenêtre. Selon votre résolution d'écran, il sera peut-être nécessaire de faire des ajustements afin de faire apparaitre l'ensemble des barres d'outils.
![](2021-12-20-17-38-30.png)" 
image="changeMenu.gif" %}

{% include step-tuto.html 
greyBackground = false
title="Ajouter des outils"
content="Dans un atelier, il est possible d'ajouter des outils provenant d'un autre atelier. Ceci peut être intéressant si vous avez besoins régulièrement d'un outil se trouvant dans un atelier différent de celui habituellement utilisé.  
Ici, nous allons ajouter l'outils de déplacement de l'atelier **Draft** dans l'atelier **PartDesign**. Rendez-vous dans `Outils > Personnaliser > Barre d'outils` " 
image="accesMenuBarreOutils.gif" %}

{% include step-tuto.html 
greyBackground = false
content="Créez une nouvelle barre d'outils en cliquant sur `Nouveau`. Donnez lui un nom (exemple: dans notre cas `Move`), puis ajouter les outils `move` et `rotate` de l'atelier `Draft`. 
**Il faudra lancer l'atelier `Draft` une fois afin de charger la barre d'outils." 
image="ajoutMenuBarreOutils.gif" %}

---

## 7. Aller plus loin

**Tutoriels**

- [Wiki RealThunder](https://github.com/realthunder/FreeCAD_assembly3/wiki)
- [Tuto complet - Votre première pièce sous FreeCAD](https://wiki.freecadweb.org/Creating_a_simple_part_with_PartDesign/fr)
- [Vidéo - FreeCAD - Base de la modélisation](https://www.youtube.com/watch?v=5drucFyzOJM)
- [jp willm - Chaine de tutos FreeCAD(FR)](https://www.youtube.com/channel/UCJwHW5GwrK1fq16cxUoBOUw)
- [Maker Tales - Chaine de tutos FreeCAD(EN)](https://www.youtube.com/playlist?list=PL6Fiih6ItYsWCE20KtUJYpiDPrCA2rVpN)
- [OfficineRobotica - Chaine FreeCAD LinkBranch](https://www.youtube.com/channel/UC4PIO2pZaFKzI97uumFTNSg)