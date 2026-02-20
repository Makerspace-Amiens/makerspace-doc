---
title: Fabrication Additive
subtitle: Ressources pour la fabrication additive au MakerSpace - UniLaSalle Amiens
layout: default

hide_hero: true

hero_height: is-large
hero_darken: true
hero_image: fab-additive.jpg
about_image: fab-additive.jpg

show_sidebar: false
hide_footer: false
component_toc: false

workshop-content: true
hide_content: true

graph3d-hero: true
graph3d-id: graph-makerspace
graph3d-data: graph_test
graph3d-title: MakerSpace Network
graph3d-subtitle: Découvrez les liens entre nos projets et nos machines
---

<!-- tab:presentation -->
{% capture about3d %}
### Comprendre la fabrication additive

L’impression 3D, aussi appelée fabrication additive, consiste à créer un objet réel à partir d’un modèle numérique en ajoutant de la matière couche par couche. Loin d’être une technologie futuriste, elle existe depuis les années 1980 et s’est aujourd’hui largement démocratisée. Des industries de pointe aux ateliers de makers, elle offre un moyen rapide et accessible de concevoir, tester et produire des pièces uniques ou en petites séries.

### Une technologie au service de la créativité

Grâce à la diversité des matériaux, des procédés (FFF, SLA, SLS, etc.) et des outils de conception disponibles, l’impression 3D est devenue un véritable levier d’innovation. Elle permet de fabriquer des prototypes, de réparer des objets du quotidien, ou encore de donner vie à des projets artistiques, mécaniques ou architecturaux. C’est aussi un formidable outil d’apprentissage, qui développe à la fois la rigueur technique et la créativité.

### Cours, tutoriels et ressources pour aller plus loin

Ce module regroupe l’ensemble des ressources pédagogiques autour de l’impression 3D : cours théoriques, tutoriels pratiques, guides de conception, retours d’expérience et fiches techniques. Que vous soyez étudiant, enseignant ou maker curieux, vous y trouverez les bases nécessaires pour comprendre, maîtriser et expérimenter la fabrication additive dans vos projets.
{% endcapture %}

{% include workshop-about.html
   title="Découvrez l'Impression 3D"
   subtitle="Une série de contenus sur l'impression 3D"
   image="fab-additive.jpg"
   image_alt="Une imprimante 3D"
   content=about3d
%}
<!-- /tab:presentation -->

<!-- tab:concepts -->
{% include card_collections.html
  title="Découvrez l'impression 3D"
  description="Explorez les cours pour découvrir l'impression 3D"
  collection="docs"
  type="concept"
  tag="additive-manufacturing"
%}
<!-- /tab:concepts -->

<!-- tab:tutoriels -->
{% include card_collections.html
  title="Apprenez l'impression 3D"
  description="Explorez les tutoriels pour découvrir l'impression 3D"
  collection="docs"
  type="tutorial"
  tag="additive-manufacturing"
%}
<!-- /tab:tutoriels -->

<!-- tab:guides -->
{% include card_collections.html
  title="Guides pour une utilisation avancée"
  description="Une selection de guides pour aller plus loin sur l'apprentissage de l'Impression 3D"
  collection="docs"
  type="how-to"
  tag="additive-manufacturing"
%}
<!-- /tab:guides -->

<!-- tab:reference -->
{% include card_collections.html
  title="Aller plus loin en impression 3D"
  description="Une selection de références pour aller plus loin sur l'apprentissage de l'Impression 3D"
  collection="docs"
  type="reference"
  tag="additive-manufacturing"
%}
<!-- /tab:reference -->

