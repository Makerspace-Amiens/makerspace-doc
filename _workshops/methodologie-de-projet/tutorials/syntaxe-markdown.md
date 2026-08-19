---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Syntaxe Markdown
subtitle: Écrire de la documentation sans jamais toucher au HTML
description: Les bases de la syntaxe Markdown, suffisantes pour écrire toute la documentation de votre projet.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 70

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
softwares:
  - label: Un éditeur de texte (VSCode par exemple)
    link: "https://code.visualstudio.com"
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Pourquoi Markdown

Toute la documentation de votre projet (`docs/`) s'écrit en Markdown — un
langage de balisage léger, en texte brut, qui se transforme automatiquement
en pages web mises en forme. Pas besoin de connaître le HTML : quelques
symboles suffisent.

## Les bases

### Titres

```markdown
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3
```

{% include message.html title="Un seul niveau 1 par page" message="Sur ce site, le titre de niveau 1 est généré automatiquement à partir du champ title du front matter — commencez toujours le corps de vos pages à ##, jamais à #." status="is-warning" icon="fas fa-exclamation-triangle" %}

### Mise en forme du texte

{% capture tab1 %}

```markdown
**Texte en gras**
*Texte en italique*
***Gras et italique***
```

{% endcapture %}

{% capture tab2 %}

**Texte en gras**
*Texte en italique*
***Gras et italique***

{% endcapture %}

{% include content-tabs.html
  id="markdown-emphase"
  tab_title1="Source"
  tab_title2="Rendu"
  tab1=tab1
  tab2=tab2
%}

### Listes

{% capture tab3 %}

```markdown
- Élément 1
- Élément 2
  - Sous-élément

1. Premier
2. Deuxième
```

{% endcapture %}

{% capture tab4 %}

- Élément 1
- Élément 2
  - Sous-élément

1. Premier
2. Deuxième

{% endcapture %}

{% include content-tabs.html
  id="markdown-listes"
  tab_title1="Source"
  tab_title2="Rendu"
  tab1=tab3
  tab2=tab4
%}

### Liens et images

```markdown
[Texte du lien](https://exemple.com)
![Texte alternatif](chemin/vers/image.png)
```

### Citations et code

{% capture tab5 %}

````markdown
> Une citation.

Du `code inline`.

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
```
````

{% endcapture %}

{% capture tab6 %}

> Une citation.

Du `code inline`.

```cpp
void setup() {
  pinMode(13, OUTPUT);
}
```

{% endcapture %}

{% include content-tabs.html
  id="markdown-code"
  tab_title1="Source"
  tab_title2="Rendu"
  tab1=tab5
  tab2=tab6
%}

{% include message.html title="Toujours nommer le langage" message="Après les trois backticks d'ouverture, précisez le langage (```cpp, ```python, ```bash...) : ça active la coloration syntaxique et c'est une règle de style de ce site." status="is-info" icon="fas fa-info-circle" %}

### Tableaux

```markdown
| En-tête 1 | En-tête 2 |
|---|---|
| Cellule 1 | Cellule 2 |
```

C'est le format utilisé pour la plupart des gabarits de cet atelier — voir
par exemple le tableau de jalons dans
[Gérer le temps et les jalons](/workshops/methodologie-de-projet/concepts/gerer-temps-jalons/).

## Aller plus loin sur ce site

Ce site Jekyll ajoute quelques extras au Markdown standard : des blocs
d'alerte colorés (`message.html`), des onglets comparatifs
(`content-tabs.html`, celui utilisé sur cette page même), des diagrammes
Mermaid (blocs ` ```mermaid! `). Vous n'en aurez pas besoin pour l'essentiel
de votre documentation, mais ils existent si utile.

## Exercice

Ouvrez `docs/objectifs.md` de votre projet (rempli dans le tutoriel sur le
cahier des charges) et vérifiez qu'il utilise correctement les titres, une
liste, et au moins un lien. Corrigez si besoin.
