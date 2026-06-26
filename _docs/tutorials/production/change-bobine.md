---
layout: documentation
image: IMG_20241001_141743.jpg
hide_hero: false
hero_image: IMG_20241001_141743.jpg
hero_darken: true
component_toc: true
doc_header: true
type: tutorial
tag: additive-manufacturing

title: Recharger les bobines au MakerSpace
subtitle: Comment recharger les bobines de filament 3D ROSA - refill 
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

## 1. Présentation

Le MakerSpace dispose de bobines de la marque ROSA au format **Refill**. Cela implique que la bobine est enroulée sur un support en carton et ne dispose pas de flasques latéraux. Pour cela, des supports compatibles sont disponibles dans le MakerSpace et un processus de préparation est à suivre.

{% include message.html title="Attention" message="Suivez SCRUPULEUSEMENT les instructions et ATTENDEZ avant d'enlever les scratchs de la bobine. SI vous ne faites pas ça, vous risquez fortement d'ENDOMMAGER l'enroulement et de rendre la bobine INUTILISABLE !
Vous enlevez les scratchs dans la DERNIÈRE ÉTAPE du changement de bobine."
status="is-danger" dismissable="false" icon="fas fa-exclamation-triangle" %}

---

## 2. Préparation de votre ancienne Bobine

{% include step-tuto.html 
greyBackground = true
content="Préparez votre bobine vide. Posez-la à plat avec les instructions et la vis de serrage noire sur la face du dessus." 
image="IMG_20241001_141134.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Dévissez l'anneau noir en suivant les instructions sur la bobine. **ATTENTION** le sens de desserrage est inversé par rapport au sens naturel. Pour desserrer vous devez tourner vers la **droite**." 
image="IMG_20241001_141151.jpg" %}

{% include message.html message="Le sens de serrage en pas inversé a été choisi spécifiquement pour empêcher la bobine de se desserrer pendant sa rotation. Ne forcez pas sur la vis si vous n'arrivez pas à la tourner et contactez un FabManager."
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html 
greyBackground = true
content="Vous pouvez maintenant enlever le support en carton ainsi que le reste du filament." 
image="IMG_20241001_141222.jpg"
image_2="IMG_20241001_141159.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="**Attention :** le but du filament de type **refill** est d'éviter un excès de matière plastique utilisé dans le support de bobine. Si vous ne jetez pas correctement le support en carton, vous n'avez fait que la moitié du travail 😉♻." 
image="IMG_20241001_141241.jpg" %}

---

## 3. Déballage de la nouvelle bobine

{% include step-tuto.html 
greyBackground = true
content="Vérifiez bien le choix de votre bobine. Utilisez un filament **ROSA refill** disponible dans le MakerSpace." 
image="IMG_20241001_141301.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Déballez la bobine et sortez-la de son sac plastique zippé. Stockez le reste de la bobine précédente dans le sac zippé afin de le garder à l'abri de l'humidité. Il sera réutilisé ultérieurement." 
image="IMG_20241001_141444.jpg" %}

{% include message.html title="Attention" message="N'enlevez pas les scratchs pour le moment !!"
status="is-danger" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html 
greyBackground = true
content="Jetez le carton dans la poubelle appropriée, comme pour le support carton de la bobine précédente." 
image="IMG_20241001_141405.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Enlevez l'étiquette intérieure. Elle va gêner pour l'insertion du matériau." 
image="IMG_20241001_141535.jpg" %}

---

## 4. Insertion de la nouvelle bobine

{% include step-tuto.html 
greyBackground = true
content="Sortez délicatement le début du filament sur 1/3 de tour uniquement. Le but étant de comprendre dans quel sens est enroulée la bobine." 
image="IMG_20241001_141604.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Insérez **délicatement** mais **fermement** la nouvelle bobine en alignant les scratchs sur les ouvertures et en prenant garde au sens d'enroulement. Le filament doit sortir dans le sens des aiguilles d'une montre (voir photo)." 
image="IMG_20241001_141648.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Positionnez le flasque supérieur sur la bobine en vous aidant des scratchs pour l'alignement et des ergots prévus sur le cœur de la bobine." 
image="IMG_20241001_141708.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Vissez la partie supérieure à l'aide de la vis noire enlevée précédemment. Le sens de vissage est indiqué sur le flasque. Pour rappel, il est inversé, donc un vissage dans le sens inverse des aiguilles d'une montre. Serrez la vis en permettant un démontage possible." 
image="IMG_20241001_141731.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Afin d'éviter que la bobine ne se déroule d'un coup, positionnez le filament précédemment sorti dans un des trous latéraux." 
image="IMG_20241001_141743.jpg" %}

{% include message.html title="Attention" message="Ne croisez JAMAIS le filament d'une bobine dans la bobine elle-même ! Vous risqueriez de créer un nœud dans la bobine et de devoir passer quelques minutes voire heures à démêler votre bobine. De plus, si ce n'est pas détecté de suite, cela peut résulter en des impressions ratées car la bobine se bloquera à cause du nœud. Toujours utiliser les trous latéraux pour coincer le filament.

![alt text](IMG_20241001_141747.jpg)"
status="is-warning" dismissable="false" icon="fas fa-exclamation-triangle" %}

{% include step-tuto.html 
greyBackground = true
content="Vous pouvez ENFIN enlever les scratchs ! Soyez vigilant pendant l'opération afin de vérifier que la bobine est en bon état. Ne jetez pas les scratchs : ils peuvent servir. Donnez-les au FabManager." 
image="IMG_20241001_141759.jpg" %}

{% include step-tuto.html 
greyBackground = true
content="Bravo ! Vous avez changé la bobine ! Il vous reste maintenant à vous référer aux instructions des différentes machines pour l'insertion du filament et son remplacement dans la machine." 
image="IMG_20241001_141814.jpg" %}

---

{%
  include card_collections.html
  title="Remplacer votre filament"
  description="Selectionnez votre machine pour suivre le tutoriel de remplacement de votre filament."
  type="replace_filament"
%}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}