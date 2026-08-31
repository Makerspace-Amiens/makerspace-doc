---
title: Workshops
subtitle: Des projets à réaliser et des thématiques à explorer pour s'initier au prototypage rapide
layout: default
permalink: /workshops/
show_sidebar: false
hero_height: is-small
hero_image: /assets/img/printer.jpg
---

<div class="doc-section" id="projets-section">
  <h2 id="projets" class="title is-3">Projets</h2>
  <p class="subtitle is-5 has-text-grey">Des projets guidés à concevoir et fabriquer de A à Z</p>

  {% include card_collections.html collection="workshops" type="workshop" kind="project" %}
</div>

<hr class="has-background-grey-lighter my-6" style="height: 2px; border: none;">

<div class="doc-section" id="thematiques-section">
  <h2 id="thematiques" class="title is-3">Thématiques</h2>
  <p class="subtitle is-5 has-text-grey">Des parcours pour se former à un domaine ou une technique</p>

  {% include card_collections.html collection="workshops" type="workshop" kind="course" %}
</div>
