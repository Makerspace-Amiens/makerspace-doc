Crée un nouveau **Guide pratique** dans `_docs/how-to-guides/` pour ce site Jekyll MakerSpace.

Un guide pratique répond à « comment faire X » — il suppose que l'utilisateur a déjà les bases et veut accomplir une tâche précise. Ce n'est pas un tutoriel pas à pas pour débutants.

**Arguments attendus** : `$ARGUMENTS`
Format : `<slug>` — ex : `configurer-wifi-esp32` ou `exporter-pcb-kicad`

## Ce que tu dois faire

1. **Chemin** :
   - Fichier : `_docs/how-to-guides/<slug>.md`
   - Dossier images : `_docs/how-to-guides/<slug>/` (créer un `.gitkeep`)

2. **Front matter** :

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
type: how-to

title: <Titre : commencer par un verbe — "Configurer…", "Exporter…", "Intégrer…">
subtitle: <Complément bref>
description: <1 phrase orientée résultat>
author: Alban Petit

time: 1
difficulty: 2
todo: 10

prerequisites:
  - label: <pré-requis concret>
    link: ""
softwares:
  - label: Aucun logiciel requis
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---
```

3. **Squelette de contenu** :

```markdown
## Contexte

En 1–2 phrases : quand utiliser ce guide et ce que l'utilisateur obtiendra.

## Prérequis

Liste explicite de ce qu'il faut avoir avant de commencer.

## Procédure

### 1. <Première action>

Description concise. Commandes ou captures si nécessaire.

### 2. <Deuxième action>

...

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| ... | ... | ... |
```

4. **Rappels** :
   - Le titre doit commencer par un verbe à l'infinitif.
   - Corps en `##`/`###`, jamais `#`.
   - Orienté tâche, pas pédagogique — aller droit au but.
   - `difficulty` au moins 2 (suppose des bases).

5. **Affiche** le chemin et le front matter final.
