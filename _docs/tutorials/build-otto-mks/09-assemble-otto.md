---
layout: documentation
hide_hero: false
hero_image: OttoIkea.png
hero_darken: true
image: OttoIkea.png
component_toc: true
doc_header: true
type: tutorial
tag: otto-mks

title: 09 - Assemblez votre Otto-MKS
subtitle: Guide d'assemblage d'Otto-MKS
description: Suivez ces étapes pour assembler votre Otto-MKS !

author: Adrien BRACQ & Rémi LACOMBE

time: 4
difficulty: 2

---
Maintenant que vos pièces sont imprimées, suivez ce guide pour assembler votre Otto-MKS ! 

{% include message.html title="Attention" message="**Avant d'assembler votre robot**, et pour que le montage se passe au mieux, vous devez avoir suivi l'ensemble des [**tutoriels précédents**](../pages/tutoriels/) !

**Prenez votre temps** à chaque étape et vérifiez régulièrement votre assemblage, notamment concernant le **type de vis** à utiliser." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html 
greyBackground = false
image = "BOM.png"
title="Matériel"

content="Pour commencer, vérifiez que vous disposez de l'ensemble du matériel et des pièces imprimées" %}

{% include step-tuto.html 
greyBackground = false
image = "step 1.png"
title="Étape 1 - Assemblage du corps"

content="Insérez les servomoteurs dans la pièce **Body** aux emplacements prévus à cet effet." %}

{% include step-tuto.html 
greyBackground = false
image = "step 2.png"
title="Étape 2 - Vissage des servomoteurs"

content="**⚠️ Attention : Vérifiez le type de vis**" %}

{% include step-tuto.html 
greyBackground = false
image = "step 3.png"
title="Étape 3 - Assemblage des palonniers"

content="**Découpez** deux palonniers comme indiqué, puis insérez-les dans les pièces **Leg**.  
Enfoncez les palonniers jusqu'au **fond des emplacements prévus.**" %}

{% include message.html title="Attention" message="Pour la prochaine étape, vous aurez besoin du code réalisé précédemment dans [**le tutoriel sur les servomoteurs**](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/), permettant de les positionner à **90°**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include message.html title="Attention" message="Les servomoteurs sont **très fragiles**, **évitez au maximum de forcer manuellement leur rotation**, au risque d'endommager les pièces mécaniques internes !" status="is-danger" dismissable="true" icon="fas fa-solid fa-skull-crossbones" %}

{% include step-tuto.html 
greyBackground = false
image = "step 4.png"
title="Étape 4 - Assemblage des jambes"

content="Branchez les deux servomoteurs sur la **carte électronique** et exécutez votre [code de **positionnement à 90°**](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/).  
Insérez ensuite les **jambes** sur l'**axe des servomoteurs**, dans la **position indiquée**.
Débranchez les servomoteurs et vérifiez que les **butées** se trouvent bien à **90° de part et d'autre de la position neutre**.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 5.png"
title="Étape 5 - Vissage des jambes"

content="Vissez les jambes sur les axes des servomoteurs.  
**⚠️ Vérifiez le type de vis**
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 6.png"
title="Étape 6 - Assemblage des palonniers des pieds"

content="Insérez les palonniers dans les pièces **Left_Foot** et **Right_Foot** jusqu'à la butée.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 7.png"
title="Étape 7 - Vissage des palonniers des pieds"

content="Vissez fermement les palonniers.  
**⚠️ Vérifiez le type de vis**
" %}

{% include message.html title="Attention" message="Pour la prochaine étape, vous aurez besoin du code réalisé précédemment dans [**le tutoriel sur les servomoteurs**](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/), permettant de les positionner à **90°**" status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

{% include step-tuto.html 
greyBackground = false
image = "step 8A.png"
image_2 = "step 8B.png"
title="Étape 8 - Assemblage des servomoteurs des pieds"

content="Branchez les deux servomoteurs sur la **carte électronique** et exécutez votre [code de **positionnement à 90°**](https://makerspace-amiens.fr/otto-mks/docs/tutoriels/08-servomotor/).  
  
Insérez ensuite les **servomoteurs** dans les pièces **Foot** dans la **position indiquée**.
  
Débranchez les servomoteurs et vérifiez que les **butées** se trouvent bien à **90° de part et d'autre de la position neutre**.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 9.png"
title="Étape 9 - Vissage des servomoteurs des pieds"

content="Vissez l'axe des servomoteurs.  
  
**⚠️ Vérifiez le type de vis**
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 10A.png"
image_2 = "step 10B.png"
image_3 = "step 10C.png"
title="Étape 10 - Assemblage des pieds"

content="Insérez les pieds dans les emplacements prévus des pièces **Leg**.  
Assurez-vous de faire passer les fils par les trous de la pièce **Body**.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 11.png"
title="Étape 11 - Vissage des pieds"

content="Vissez la deuxième vis des servomoteurs.  
  
**⚠️ Vérifiez le type de vis**  
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 12.png"
title="Étape 12 - Assemblage du capteur ultrason"

content="Glissez le capteur dans la pièce **Head** selon la position et le sens indiqués.  
    
**⚠️ Attention : les grilles avant des capteurs sont très fragiles, évitez d'appuyer dessus**  
" %}

{% include step-tuto.html 
greyBackground = false
image = "duck.png"
title="Étape BONUS - Pause canard"

content="Prenez une pause pour observer le **canard jaune** de votre kit, si vous avez rencontré des problèmes depuis le début du montage, il saura vous **écouter avec compassion** !

[**source**](https://rubberduckdebugging.com)
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 13.png"
title="Étape 13 - Préparation de la carte électronique"

content="**Dévissez** et **conservez** la rondelle et l'écrou du bouton.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 14.png"
title="Étape 14 - Installation de la carte électronique"

content="Insérez délicatement la carte dans la pièce **Head**.  
Vérifiez que les **broches du capteur ultrason** s'insèrent correctement dans le **connecteur** et que le **bouton est enfoncé jusqu'à la butée**.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 15.png"
title="Étape 15 - Assemblage de la tête"

content="Finalisez le montage de la tête en remettant la rondelle et en revissant l'écrou.  
  
**⚠️ Important : l'ergot de la rondelle doit s'insérer dans l'un des deux trous prévus à cet effet**
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 16.png"
title="Étape 16 - Installation de la batterie"

content="Fixez la **cosse 9V** sur la **batterie**.  
  
**⚠️ Attention : la carte ne doit SURTOUT PAS être branchée à l'envers, sous peine de l'endommager**  

Insérez ensuite la batterie dans son **emplacement**, avec les câbles orientés **vers le haut**.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 17.png"
title="Étape 17 - Câblage"

content="**Branchez les servomoteurs sur la carte** en **respectant l'ordre indiqué** pour éviter tout problème lors de la programmation.
  
**⚠️ Vérifiez le bon sens des connecteurs des servomoteurs en contrôlant les couleurs (Marron sur ⏚, Rouge sur +5V, et Jaune sur le signal)**  
  
**Connectez** enfin **la batterie** sur le **connecteur d'alimentation**.  

Utilisez la bande de velcro fournie pour **organiser** proprement **les câbles**.
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 18.png"
title="Étape 18 - Assemblage final"

content="**Terminez l'assemblage** en refermant **la tête sur le corps**.  
Appuyez légèrement sur les côtés pour faciliter l'emboîtement.  
  
**⚠️ Vérifiez qu'aucun câble n'est coincé entre les deux pièces**
" %}

{% include step-tuto.html 
greyBackground = false
image = "step 19.png"
title="À vous de jouer !"

content="**Félicitations !** 🎉  
Votre Otto est maintenant opérationnel !
Vous pouvez désormais le programmer et le modifier pour participer, et peut-être remporter, les épreuves du tournoi, dont les règles sont [disponibles ici]().
" %}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Découvrez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}