---
title: Documentation
subtitle: Tutoriels, guides, concepts et références du MakerSpace
layout: default
menubar_toc: true
toc_title: Sommaire
show_sidebar: false
hero_image: /assets/img/printer.jpg
hero_height: is-small
---

<div class="field">
  <div class="control has-icons-left">
    <input class="input is-medium" type="text" id="doc-search" placeholder="Rechercher dans la documentation...">
    <span class="icon is-left"><i class="fas fa-search"></i></span>
  </div>
</div>

<div class="doc-section" id="tutoriels-section">
  <h2 id="tutoriels" class="title is-3">Tutoriels</h2>
  <p class="subtitle is-5 has-text-grey">Des tutoriels pas-à-pas pour s'initier</p>

  {%- assign tutoCategories = "" | split: "" -%}
  {%- for item in site.docs -%}
    {%- if item.type contains "tutorial" and item.path -%}
      {%- assign pathSegments = item.path | split: "/" -%}
      {%- if pathSegments.size > 3 -%}
        {%- assign cat = pathSegments[2] -%}
        {%- unless tutoCategories contains cat -%}
          {%- assign tutoCategories = tutoCategories | push: cat -%}
        {%- endunless -%}
      {%- endif -%}
    {%- endif -%}
  {%- endfor -%}
  {%- assign tutoCategories = tutoCategories | sort -%}

  {% if tutoCategories.size > 0 %}
  <div class="tags doc-filter">
    <button type="button" class="tag is-medium is-link doc-filter-btn is-active" data-category="all">Tous</button>
    {% for cat in tutoCategories %}
      <button type="button" class="tag is-medium doc-filter-btn" data-category="{{ cat }}">
        {%- case cat -%}
          {%- when "design" -%}Conception
          {%- when "electronics" -%}Électronique
          {%- when "production" -%}Production
          {%- else -%}{{ cat | replace: "-", " " | capitalize }}
        {%- endcase -%}
      </button>
    {% endfor %}
  </div>
  {% endif %}

  {% include card_collections.html type="tutorial" category_path_offset=2 %}

  <p class="doc-empty has-text-grey" style="display:none">Aucun résultat dans cette section.</p>
</div>

<hr class="has-background-grey-lighter my-6" style="height: 2px; border: none;">

<div class="doc-section" id="guides-section">
  <h2 id="guides" class="title is-3">Guides</h2>
  <p class="subtitle is-5 has-text-grey">Des guides pour une utilisation en autonomie</p>

  {% include card_collections.html type="how-to" %}

  <p class="doc-empty has-text-grey" style="display:none">Aucun résultat dans cette section.</p>
</div>

<hr class="has-background-grey-lighter my-6" style="height: 2px; border: none;">

<div class="doc-section" id="concepts-section">
  <h2 id="concepts" class="title is-3">Concepts</h2>
  <p class="subtitle is-5 has-text-grey">Des cours et ressources pour approfondir ses connaissances</p>

  {% include card_collections.html type="concept" %}

  <p class="doc-empty has-text-grey" style="display:none">Aucun résultat dans cette section.</p>
</div>

<hr class="has-background-grey-lighter my-6" style="height: 2px; border: none;">

<div class="doc-section" id="references-section">
  <h2 id="references" class="title is-3">Références</h2>
  <p class="subtitle is-5 has-text-grey">Des références pour aller plus loin</p>

  {%- assign refCategories = "" | split: "" -%}
  {%- for item in site.docs -%}
    {%- if item.path contains "_docs/references/" -%}
      {%- assign pathSegments = item.path | split: "/" -%}
      {%- if pathSegments.size > 3 -%}
        {%- assign cat = pathSegments[2] -%}
        {%- unless refCategories contains cat -%}
          {%- assign refCategories = refCategories | push: cat -%}
        {%- endunless -%}
      {%- endif -%}
    {%- endif -%}
  {%- endfor -%}
  {%- assign refCategories = refCategories | sort -%}

  {% if refCategories.size > 0 %}
  <div class="tags doc-filter">
    <button type="button" class="tag is-medium is-link doc-filter-btn is-active" data-category="all">Tous</button>
    {% for cat in refCategories %}
      <button type="button" class="tag is-medium doc-filter-btn" data-category="{{ cat }}">
        {%- case cat -%}
          {%- when "software" -%}Logiciels
          {%- when "hardware" -%}Électronique
          {%- when "machines" -%}Machines
          {%- when "plans" -%}Plans
          {%- when "others" -%}Autres
          {%- else -%}{{ cat | replace: "-", " " | capitalize }}
        {%- endcase -%}
      </button>
    {% endfor %}
  </div>
  {% endif %}

  {% include card_collections.html path_prefix="_docs/references/" category_path_offset=2 %}

  <p class="doc-empty has-text-grey" style="display:none">Aucun résultat dans cette section.</p>
</div>

<script src="{{ '/assets/js/doc-search.js' | relative_url }}"></script>
