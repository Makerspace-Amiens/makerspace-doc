---
layout: documentation
image: opera_ZUFfmL9HCZ.png
hide_hero: false
hero_image: opera_ZUFfmL9HCZ.png
hero_darken: true
component_toc: true
doc_header: true

title: OnShape (4) - Votre première pièce en Laser
subtitle: Création de votre première pièce en laser sous OnShape
description: Création de votre première pièce en laser sous OnShape
tags: onshape
type: doc,cao, tutorial

time: 3
difficulty: 2
compatibilities-os: win,mac,lin

prerequisites:
  - label: Installation de OnShape
    link: "../onshape-installation"
  - label: Votre premiere pièce en 3D
    link: "../onshape-premiere-piece"

softwares: 
  - label: OnShape
    link: "https://www.onshape.com/"

todo: 100
---

## Objectif :

![](2022-09-08-09-17-59.png)

L'objectif de ce tutoriel est d'étendre vos connaissances sur On-Shape en réalisant pas-à-pas la pièce ci-dessus. L'ensemble des fonctions utilisées ne sont pas expliquées de manière exhaustives donc n'hésitez pas à tester par vous-même certaines options.

Cette pièce pourra être, par la suite, découpée au laser (explicité dans un autre tutoriel).

## Création de votre projet

{% include step-tuto.html 
greyBackground = true
title="ETAPE 1 - Nouveau document"
content="Créez un nouveau **Document** dans OnShape puis une esquisse sur le plan du Dessus (**Top**). Reproduisez ensuite l'esquisse cotée ci-contre." 
image="opera_zzMVyB8RCh.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 2 - Extrusion du contour"
content="Effectuez une extrusion de **3 mm** de votre esquisse precedemment créée. C'est l'épaisseur de votre matériau que vous découperez par la suite au laser. Même si cela n'a pas d'impact sur le fichier utilisé pour la découpe laser, il est important d'utiliser les cotations réelles, notamment dans des cas d'assemblage comme nous le verrons plus tard." 
image="opera_8vsmUcWcJf.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 3 - Création de la première marque"
content="Créez une nouvelle esquisse sur le dessus de votre pièce. A l'aide de l'outil **Symétrie** et des outils précédemment utilisés, créez un triangle comme dans la vue ci-contre.

![alt text](opera_khzUucGfSn.png)
" 
image="opera_q0cbFfEpwX.png"
image_2="opera_U9HzW5zkPq.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 4 - Créez la première marque"
content="Extrudez de 0.5mm le triangle créé precedemment." 
image="opera_75xeXaQL3Q.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 5 - Répétition"
content="Nous allons maintenant repeter cette operation en utilisant la fonction de repetition circulaire de On-Shape et ainsi créer l'ensemble des marques pour la fonction **Rapporteur** de notre outil. 

![alt text](opera_2QjPnU5Q8l.png)

Pour cela, selectionnez l'outil **Répétition circulaire**. Puis Selectionnez en haut de la boite d'outil **Répétition de fonction**. Enfin, selectionnez la derniere extrusion effectuée dans les **Fonctions à répéter** et le contour circulaire de votre pièce pour l'**Axe de répétition**.

Comme notre rapporteur ne fonctionne que sur 90 degrés et que les crans vont indiquer les angles tous les 10°, réglez les espacements comme sur la boite de dialogue ci-dessous. A noter que le dernier cran ne sera pas affiché afin de ne pas empiéter avec la règle. 

![alt text](opera_nLuR0G0JL5.png)
" 
image="opera_ebrHQTi4Qk.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 6 - Seconde marque"
content="Pour la réalisation des angles à 5°, nous allons utiliser exactement le même procédé. Réalisez le triangle à 5° du premier precedemment réalisé (voir image ci-contre) puis effectuez la fonction de répétition circulaire." 
image="opera_RFDqDNcpHC.png"
image_2="opera_yTg6UOlHDi.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 7 - Ajout de l'outil rainure"
content="Afin de réaliser l'étape des rainures pour la règle, nous allons utiliser un outil **Rainure** qui n'est peut être pas disponible dans votre interface, ou dans votre barre d'outils de raccourcis. 

![alt text](opera_P1ToyjtuoC.png)

Si c'est le cas, allez en haut à droite dans **Mon Compte**, puis dans **Préférences** et cherchez **Barres d'outils de raccourcis** et selectionnez **Rainure** pui Enregistrez et revenez à votre conception en corus.

![alt text](opera_PbSSdkBgv0.png)

![alt text](opera_BFyT4asXJA.png)"
image="opera_BFyT4asXJA.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 8 - Création de la rainure"
content="Grâce à l'outil **Rainure** vu precedemment, créez une rainure comme sur la vue ci-contre. Une rainure se créé sur une ligne. Créez et cotez votre ligne puis ensuite utilisez l'outil **Rainure** pour rajouter votre rainure à ces ligne. 

Une fois cela fait, réalisez un enlevement de matière de 0.5mm comme pour les précédentes rainures du rapporteur.

![alt text](opera_hBvBRadJIX.png)"
image="opera_Ga4HNwuD1r.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 9 - Répétition linéaire"
content="Nous allons maintenant réaliser une **répétition linéaire** de cette rainure. Pour cela, le processus est très similaire à la **répétition circulaire**. 

![alt text](opera_R1HmAkQlwX.png)

Cliquez sur **Répétition linéaire** puis remplissez la boite de dialogue (voir ci-dessous). Comme vous pouvez le remarquer, même si le fonctionnement est similaire, le compteur d'instance ne fonctionne pas exactement de la même façon. Dans une **Répétition linéaire**, on indique la distance qui sépare chaque instance.

![alt text](opera_NisRjeObM7.png)
"
image="opera_jxpEW0589o.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 10 - Graduations suplémentaires"
content="Effectuez les opération similaires afin d'obtenir les graduations tous les **5 mm**

![alt text](opera_VUANwChrgM.png)

![alt text](opera_jdEjnm8JXL.png)
"
image="opera_7NgkyarupC.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 11 - Ajout de texte"
content=" Nous allons maintenant utiliser l'outil **Texte** afin de rajouter du texte à notre outil

![alt text](opera_vpALW3dzvd.png)

Selectionnez l'outil texte, puis créez les textes nécéssaires sur votre règle en veillant à respecter les dimensions ci-dessous.

![alt text](opera_xYXrq1gw6S.png)

**Astuce :** Afin de gagner du temps pour les écriture des graduations, utilisez l'outils d'**égalité** afin de ne coter que la première graduation.
"
image="opera_lqBR6tybaS.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 12 - Orientation du texte"
content="Pour les écritures des angles, vous pouvez orienter le texte. Il faut au préalable supprimer la contrainte d'horizontalité. pour cela, selectionnez **Afficher les contraintes**, puis selectionnez la contriante d'horizontalité (en jaune) et appuyez sur la touche **Suppr** de votre clavier. Vous aurez allors tout le loisir d'orienter votre texte.

![alt text](opera_HDnsncWyvT.png)

Vous pouvez alors créer un cercle de construction et contraindre le texte dessus.

![alt text](opera_ypdUbMg7Zl.png)

Il ne vous reste plus qu'à positionner le texte en fonction de l'angle désiré.

![alt text](opera_u9c4kaml8O.gif)
"

image="opera_UTzF2IPIdU.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 13 - Extrusion du texte"
content="Pour l'enlevement de matière des textes, n'oubliez pas de **cocher** la case **Fusionner avec tous**. Dans le cas contraire, de nombreuses pièces risquent d'être créées.

![alt text](opera_qbmdnFGBSe.png)
"
image="opera_wnyHZafjb6.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 14 - Intégration d'un logo"
content="
Pour intégrer un logo ou une image, vous pouvez utiliser le format DXF. Nous allons ici utiliser le logo UniLaSalle que vous pouvez télécharger [en utilisant ce lien](LogoUniLaSalle.dxf). 

![alt text](opera_mfgvI5KsX3.png)

Cliquez ensuite sur **Importer** et selectionnez votre fichier. Vous devriez voir votre fichier nouvellement importé dans la boite de dialogue. Selectionnez le et validez en haut à droite ![alt text](opera_WwkthH3NLX.png).

![alt text](opera_s5LaYqeHrn.png)

Vous pouvez maintenant déplacer votre élément sur votre esquisse. 

![alt text](opera_11Y7ZrecaI.png)

Il ne vous reste plus qu'à effectuer une opération d'enlèvement de matière sur 0.5mm.
"
image="opera_ZUFfmL9HCZ.png" %}

{% include message.html title="Pour la suite" message="Vous pouvez maintenant personnaliser votre outil comme vous le souhaitez. Rajouter des graduations ou des textes spécifiques. A noter que plus le modèle sera chargé, plus les modifications peuvent prendre du temps. Le processus de découpe laser sera également plus long." status="is-info" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 15 - Création de la page de dessin"
content="Afin de créer les fichiers pour la découpe laser, nous allons utiliser une vue de dessin permettant de mettre en forme les différentes pièces à découpes.

Cliquez droit sur votre pièce dans l'arbre de Pièces puis cliquez sur **Créer le dessin de...**. Cliquez ensuite sur **Modèle personnalisé** et personnalisez votre vue de dessin comme suit :

![alt text](opera_DerIA8dnFV.png)

Ainsi vous creez un dessin vierge dans lequelle vous allez pouvoir importer vos vues pour la découpe laser. 
"
image="opera_Ar0gKL95sl.png" %}

{% include step-tuto.html 
greyBackground = false
title="ETAPE 16 - Intégration des différentes vues"
content="Vous arrivez sur l'onglet de votre dessin precedemment créé. Vous pouvez maintenant ajuster les paramètres afin de positionner votre vue de gravure sur votre dessin. 

![alt text](opera_cXLctPQKng.png)

**ATTENTION :** Vérifiez bien que votre echelle est positionnée sur 1:1. 

Vous pouvez rajouter une autre vue en dessous qui sera la découpe de contour de votre règle. Les éléments seront rassemblés par la suite sur le logiciel de la laser.

![alt text](opera_QspDRDQeWI.png)

"
image="opera_urBV7QnDsc.png" %}

{% include step-tuto.html 
greyBackground = true
title="ETAPE 17 - Export des fichiers"
content="Vous pouvez maintenant exporter votre page en fichier SVG en cliquant droit sur l'onglet, puis **exporter**. Vérifiez les paramètre d'exportation comme indiqué sur l'image.

![alt text](opera_ayKWnRzqwn.png)"
image="opera_hq0JUzA5DV.png" %}

{% include message.html title="Découpe laser" message="Avant de lancer la découpe et la gravure, il est toujours interessant de vérifier votre fichier avec le logiciel **InkScape**. Cela vous permettra d'identifier les soucis liés à un mauvais dimensionnement, ou un export de mauvaise qualité." %}