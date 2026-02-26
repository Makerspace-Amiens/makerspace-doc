---
title: Projet OTTO-MKS
subtitle: Version MakerSpace du robot open-source Otto
layout: collection

hide_hero: true

hero_height: is-large
hero_darken: true
hero_image: otto-mks.jpg
about_image: otto-mks.jpg
image: fotto-mks.jpg

show_sidebar: false
hide_footer: false
component_toc: false

workshop-content: true
hide_content: true

type: workshop
---

<!-- tab:presentation -->
{% capture about3d %}
### Otto, c’est quoi ?

Le robot Otto est un petit robot humanoïde open-source, développé pour enseigner les bases de la robotique et de la programmation. Facile à assembler et à personnaliser, Otto est adapté aux enfants, aux étudiants et aux amateurs de robotique. Il est souvent utilisé dans les écoles et les ateliers de Makerspaces pour initier les jeunes aux STEM (Sciences, Technologie, Ingénierie, Mathématiques).

### Otto en 4 points clés

- **Open-source :** Le projet est disponible gratuitement en ligne, avec des plans, des fichiers de conception 3D et des guides d’assemblage.
- **Modulaire :** Otto peut être personnalisé en ajoutant des éléments mécaniques ou différents capteurs, modules de son, LED, etc.
- **Programmable :** Le robot peut être programmé avec Arduino, ou d’autres plateformes de programmation visuelle.
- **Impression 3D :** Les composants du robot peuvent être imprimés en 3D, ce qui permet aux utilisateurs de fabriquer leur propre Otto.

### Cours, tutoriels et ressources pour aller plus loin

Ce module regroupe l’ensemble des ressources pédagogiques autour du robot Otto : cours théoriques, tutoriels pratiques, guides de conception, retours d’expérience et fiches techniques. Que vous soyez étudiant, enseignant ou maker curieux, vous y trouverez les bases pour démarrer votre projet Otto.
{% endcapture %}

{% include workshop-about.html
   title="Découvrez le robot Otto"
   subtitle="Une série de contenus sur Otto-MKS"
   image="otto-mks.jpg"
   image_alt="Un robot Otto"
   content=about3d
%}
<!-- /tab:presentation -->

<!-- tab:concepts -->
{% include card_collections.html
  title="Découvrez le projet"
  description="Explorez ces contenus pour découvrir le projet"
  collection="docs"
  type="concept"
  tag="otto-mks"
%}
<!-- /tab:concepts -->

<!-- tab:tutoriels -->
{% include card_collections.html
  title="Construisez votre robot Otto"
  description="Explorez les tutoriels qui vous aiderons à construire votre robot !"
  collection="docs"
  type="tutorial"
  tag="otto-mks"
%}
<!-- /tab:tutoriels -->

<!-- tab:guides -->
{% include card_collections.html
  title="Guides pour une utilisation avancée"
  description="Une selection de guides pour aller plus loin sur l'apprentissage de l'Impression 3D"
  collection="docs"
  type="how-to"
  tag="otto-mks"
%}
<!-- /tab:guides -->

<!-- tab:reference -->
{% include card_collections.html
  title="Aller plus loin avec le robot Otto"
  description="Une selection de références pour aller plus loin sur le développement de votre petit robot"
  collection="docs"
  type="reference"
  tag="additive-manufacturing"
%}
<!-- /tab:reference -->

<!-- tab:equipments -->
{% include card_collections.html
  title="Les équipements"
  description="Le matériel du MakerSpace utilisable pour ce workshop"
  collection="docs"
  type="equipment"
  tag="additive-manufacturing"
%}
<!-- /tab:equipments -->