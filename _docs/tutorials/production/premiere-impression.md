---
layout: documentation
image: opera_PmIMDM8QQi.png
hide_hero: false
hero_image: opera_PmIMDM8QQi.png
hero_darken: true
component_toc: true
doc_header: true
type: doc,archive

title: Impression 3D avec CURA sur le serveur du MakerSpace
subtitle: Comment imprimer sa pièce avec CURA et le serveur du MakerSpace
description: Dans ce tutoriel, nous vous apprenons à imprimer votre pièce en utilisant le logiciel CURA et le serveur d'impression 3D du MakerSpace.
author: Remi Lacombe

time: 1
difficulty: 1
compatibilities-os: win,mac,lin

prerequisites:
  - label: OnShape - Votre Premier Mini-Projet
    link: "../../cao/onshape/onshape-premier-mini-projet"

softwares: 
  - label: OnShape
    link: ""
  - label: Cura
    link: ""
  - label: Repetier Server
    link: ""

todo: 100
---

# Impression 3D d'une pièce

### Préparation du fichier

{% include step-tuto.html 
greyBackground = false
title="1 - Enregistrement au format 3mf"
content="Cliquez droit sur votre pièce dans la barre de d'outil de gauche, puis cliquez sur **exporter**. 

![Alt text](opera_Cylzhb20xb.png)

Sélectionnez le format de fichier le ***3mf**. Enregistrez le fichier sur une clef USB afin de pouvoir l'amener sur le PC d’impression du MakerSpace.

![Alt text](opera_DlNDpXdAOZ.png)
"
image="opera_q0E3mrqhdm.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Ouverture du fichier"
content="Ouvrez le logiciel Cura ![](20230823_182215.png) puis ouvrez votre fichier au format **3mf** en allant dans **File > Open File(s)**

![Alt text](UltiMaker-Cura_20230823_182245.png)

Sélectionnez le modèle et à l'aide des outils de déplacement et de rotation, positionnez le fichier au centre du plateau.
![Alt text](UltiMaker-Cura_20230823_182606.gif)
"
image="UltiMaker-Cura_UFt5BViqGd.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Slicage"
content="Vérifiez que la machine et les paramètres sélectionnés sont correctes (voir ci-dessous), puis cliquez sur **Slice** en bas à droite. ![Alt text](UltiMaker-Cura_20230823_182901.png)

![Alt text](UltiMaker-Cura_20230823_182712.png)

Une fois l'opération de slice terminée, vous verrez apparaitre une estimation du temps d'impression en bas à droite :

![Alt text](UltiMaker-Cura_20230823_182943.png)
"
image="UltiMaker-Cura_20230823_183033.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Vérification"
content="Dans le bandeau supérieur, cliquez sur l'onglet **Preview**. 

![Alt text](UltiMaker-Cura_20230823_183117.png)

Vous aurez alors accès à une vue représentant l'ensemble des couches et des opérations de fabrication de la pièce générées par le logiciel. Vous pouvez naviguer dans les couches en utilisant le scrolling de droite, ou simuler la fabrication d'une couche en utilisant le scrolling inférieur.

![Alt text](UltiMaker-Cura_20230823_183422.gif)
"
image="UltiMaker-Cura_20230823_183456.png" %}

{% include step-tuto.html 
greyBackground = false
title="5 - Enregistrement"
content="Il ne vous reste plus qu'à enregistrer le code machine généré par le logiciel afin de l'envoyer sur le serveur d'impression. Pour cela, cliquez simplement sur **Save to Disk** en bas à droite et enregistrez le ficheir au format ***.gcode**.

![Alt text](UltiMaker-Cura_20230823_183709.png)
"
image="UltiMaker-Cura_20230823_183846.png" %}

### Impression du fichier sur le serveur

{% include step-tuto.html 
greyBackground = false
title="1 - Accéder au serveur"
content="Allez dans le MakerSpace sur l'ordinateur d'impression et ouvrez, si ce n'est pas déja fait, la page du serveur d'impression.

Sur la page qui s'ouvre, vous avez accés au statut de l'ensemble des imprimantes du serveur. Dans notre cas, nous allons utilsiez les imprimantes SideWinder S1, S2 ou S3. Vérifiez qu'elles sont bien connectées. Si ce n'est pas le cas, prévenez le FabManager du MakerSpace.
"
image="opera_jgFT9zCsVc.png" %}

{% include step-tuto.html 
greyBackground = false
title="2 - Accéder à l'imprimante"
content="Cliquez ensuite sur le bouton **Aller à l'imprimante** sous l'imprimante à laquelle vous souhaitez accéder.

![Alt text](opera_AQgVbCvl0a.png)

Vous arrivez sur la page de gestion de l'imprimante. 
"
image="opera_KhippXyscX.png" %}

{% include step-tuto.html 
greyBackground = false
title="3 - Charger et lancer le Gcode"
content="Cliquez sur **Charger le G-Code** et selectionnez le fichier que vous avez précédemment créé avec Cura. 

![Alt text](opera_rqZdnGHzrr.png)

Votre fichier apparait alors dans la liste des fichiers pouvant être imprimé. Cliquez sur l'icone d'impression ![Alt text](opera_e3NAHhE1VJ.png) sur la ligne de votre fichier afin de lancer l'impression.

![Alt text](opera_AuKRv4tlRt.png)

Une fois lancée, les informations d'impression se mettent à jour en haut de la fenetre et la machine commence son cycle de chauffe du plateau et de la buse.

![Alt text](opera_TyOjruQrHo.png)

Il ne vous reste plus qu'à vérifier la bonne impression des premieres couches et à vérifier le bon fonctionnement de l'impression règulierement. 
"
image="opera_PmIMDM8QQi.png" %}

{% include step-tuto.html 
greyBackground = false
title="4 - Récuperez votre pièce !"
content="Et voila ! Il ne vous reste plus qu'à attendre la fin de votre impression ! Pour retirer la pièce, bien attendre que le plateau ai refroidit. LA pièce doti se décoller toute seul sans forcer. Si ce n'est pas le cas, attendre encore un peu ou prévenir le FabManager.
"
image="Animation.gif" %}

{% include message.html title="Attention" 
message="Si un soucis apparait avant ou pendant l'impression, ou que vous avez un doute sur la marche à suivre, n'hésitez pas à contacter le FabManager du MakerSpace." 
status="is-warning"
icon="fas fa-exclamation-triangle" %}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}