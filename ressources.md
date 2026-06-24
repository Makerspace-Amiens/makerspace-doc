---
title: Ressources
subtitle: Composants, bibliothèques, revendeurs et outils utiles au MakerSpace
layout: default
menubar_toc: true
toc_title: Sommaire
show_sidebar: false
hero_image: /assets/img/printer.jpg
hero_darken: true
hide_hero: false
hero_height: is-small
---

<div class="field">
  <div class="control has-icons-left">
    <input class="input is-medium" type="text" id="doc-search" placeholder="Rechercher dans les ressources...">
    <span class="icon is-left"><i class="fas fa-search"></i></span>
  </div>
</div>

{%- assign ressourceCategories = "" | split: "" -%}
{%- for item in site.ressources -%}
  {%- if item.path -%}
    {%- assign pathSegments = item.path | split: "/" -%}
    {%- if pathSegments.size > 2 -%}
      {%- assign cat = pathSegments[1] -%}
      {%- unless ressourceCategories contains cat -%}
        {%- assign ressourceCategories = ressourceCategories | push: cat -%}
      {%- endunless -%}
    {%- endif -%}
  {%- endif -%}
{%- endfor -%}
{%- assign ressourceCategories = ressourceCategories | sort -%}

{% for category in ressourceCategories %}
  {%- capture categoryLabel -%}
    {%- case category -%}
      {%- when "components" -%}Composants
      {%- when "libraries" -%}Bibliothèques
      {%- when "resellers" -%}Revendeurs
      {%- when "tools" -%}Outils
      {%- else -%}{{ category | replace: "-", " " | capitalize }}
    {%- endcase -%}
  {%- endcapture -%}
  {%- assign categoryLabel = categoryLabel | strip -%}
  {%- assign pathPrefix = "_ressources/" | append: category | append: "/" -%}

  <div class="doc-section" id="{{ category }}-section">
    <h2 id="{{ category }}" class="title is-3">{{ categoryLabel }}</h2>

    {%- assign subCategories = "" | split: "" -%}
    {%- for item in site.ressources -%}
      {%- if item.path and item.path contains pathPrefix -%}
        {%- assign pathSegments = item.path | split: "/" -%}
        {%- if pathSegments.size > 3 -%}
          {%- assign subCat = pathSegments[2] -%}
          {%- unless subCategories contains subCat -%}
            {%- assign subCategories = subCategories | push: subCat -%}
          {%- endunless -%}
        {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
    {%- assign subCategories = subCategories | sort -%}

    {% if subCategories.size > 0 %}
    <div class="tags doc-filter">
      <button type="button" class="tag is-medium is-link doc-filter-btn is-active" data-category="all">Tous</button>
      {% for subCat in subCategories %}
        <button type="button" class="tag is-medium doc-filter-btn" data-category="{{ subCat }}">
          {%- case subCat -%}
            {%- when "electronics" -%}Électronique
            {%- when "mechanical" -%}Mécanique
            {%- when "general" -%}Général
            {%- else -%}{{ subCat | replace: "-", " " | capitalize }}
          {%- endcase -%}
        </button>
      {% endfor %}
    </div>
    {% endif %}

    {% include card_collections.html collection="ressources" image_fit="cover" path_prefix=pathPrefix category_path_offset=2 %}

    <p class="doc-empty has-text-grey" style="display:none">Aucun résultat dans cette section.</p>
  </div>

  {% unless forloop.last %}
  <hr class="has-background-grey-lighter my-6" style="height: 2px; border: none;">
  {% endunless %}
{% endfor %}

<script src="{{ '/assets/js/doc-search.js' | relative_url }}"></script>
