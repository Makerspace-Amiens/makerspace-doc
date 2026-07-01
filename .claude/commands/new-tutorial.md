Crée un nouveau tutoriel dans `_docs/tutorials/` pour ce site Jekyll MakerSpace.

**Arguments attendus** : `$ARGUMENTS`
Format recommandé : `<sous-dossier>/<slug>` — ex : `electronics/capteur-ultrason` ou `software/onshape/onshape-assemblage`

## Ce que tu dois faire

1. **Déduire le chemin** depuis les arguments :
   - Fichier : `_docs/tutorials/<sous-dossier>/<slug>.md`
   - Dossier images : `_docs/tutorials/<sous-dossier>/<slug>/` (créer un `.gitkeep` dedans)

2. **Créer le fichier Markdown** avec ce front matter exact :

```yaml
---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: tutorial

title: <Titre humain du tutoriel>
subtitle: <Sous-titre court — ce que l'utilisateur saura faire>
description: <1 phrase de résumé pour le SEO et les cartes>
author: Alban Petit

time: 1
difficulty: 1
todo: 10

prerequisites:
  - label: Aucun pré-requis nécessaire
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---
```

3. **Ajouter un squelette de contenu** :

```markdown
## Objectif

Décris en 2–3 phrases ce que l'utilisateur va réaliser et apprendre.

## Matériel nécessaire

Liste le matériel si applicable.

{% include step-tuto.html
greyBackground=true
title="Étape 1 — "
content="Description de l'étape."
image="step1.png" %}

{% include step-tuto.html
greyBackground=false
title="Étape 2 — "
content="Description de l'étape."
image="step2.png" %}

## Résultat attendu

Décris le résultat final et comment le valider.
```

4. **Rappels** :
   - Le corps commence à `##`, jamais `#`.
   - Chaque étape = un `{% include step-tuto.html %}`, pas un titre numéroté.
   - `time` en heures (entier), `difficulty` de 0 à 5, `todo` entre 0 et 100.
   - Images dans le sous-dossier `<slug>/`, nommées de façon descriptive (`hero.png`, `schema-cablage.png`…).

5. **Affiche** le chemin créé et le front matter final pour validation.
