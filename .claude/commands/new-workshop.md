Crée un nouveau **Atelier (Workshop)** complet dans `_workshops/` pour ce site Jekyll MakerSpace.

Un atelier est un projet guidé du début à la fin, avec une page d'accueil (`project-home`) et des sous-pages (tutoriels, concepts…). Il apparaît automatiquement dans la navbar et la page `/workshops/` sans configuration supplémentaire.

**Arguments attendus** : `$ARGUMENTS`
Format : `<slug>` — ex : `robot-sumo` ou `gravure-laser-debutant`

## Ce que tu dois faire

1. **Créer la structure de dossiers** :

```
_workshops/<slug>/
├── index.md          ← page d'accueil (layout: project-home)
├── hero.jpg          ← image de couverture (placeholder si pas d'image)
└── tutorials/        ← dossier pour les futurs tutos propres à cet atelier
```

Créer un `.gitkeep` dans `tutorials/`.

2. **Créer `_workshops/<slug>/index.md`** avec ce front matter :

```yaml
---
title: <Nom de l'atelier>
layout: project-home
permalink: /workshops/<slug>/
type: workshop
image: /workshops/<slug>/hero.jpg
project_slug: <slug>
project_image: /workshops/<slug>/hero.jpg
project_tags:
  - <Tag 1>
  - <Tag 2>
description: "<1 phrase de présentation pour le hero et les cartes.>"
subtitle: <Accroche courte>

concepts:
  -

tutorials:
  -

how_to_guides:
  -

hardware:
  -

software:
  -

ressources:
  -
---
```

3. **Ajouter un corps de présentation** minimal :

```markdown
Bienvenue dans l'atelier **<Nom>** !

<2–3 phrases de présentation : objectif du projet, ce que les participants vont réaliser et apprendre.>

## Ce que vous allez apprendre

- Compétence 1
- Compétence 2
- Compétence 3

## Pourquoi ce projet ?

<Contexte pédagogique, lien avec d'autres modules si applicable.>
```

4. **Expliquer à l'utilisateur** :
   - L'atelier apparaîtra automatiquement dans le dropdown "Thématiques" de la navbar (trié alphabétiquement).
   - Pour lier des tutoriels existants : ajouter leurs URLs dans les listes `tutorials:`, `concepts:`, etc.
   - Pour créer des tutoriels spécifiques à cet atelier : utiliser `/new-workshop-page <slug> tutorials/<nom-tuto>`.
   - Les listes vides (`-`) peuvent être laissées ou supprimées si aucune ressource n'est encore disponible.

5. **Affiche** la structure créée, le front matter généré, et rappelle les prochaines étapes.
