Crée une nouvelle **Ressource** dans `_ressources/` pour ce site Jekyll MakerSpace.

Les ressources sont des fiches de liens, d'outils ou de composants organisées par catégorie (microcontrôleurs, outils, revendeurs, bibliothèques…). Elles apparaissent sur la page `/ressources/` filtrée par catégorie.

**Arguments attendus** : `$ARGUMENTS`
Format : `<categorie>/<slug>` — ex : `microcontrollers/esp32-s3` ou `tools/oscilloscope`

Les catégories existantes (sous-dossiers de `_ressources/`) définissent les boutons de filtre sur `/ressources/`. Utiliser une catégorie existante ou en créer une nouvelle si cohérent.

## Ce que tu dois faire

1. **Lister les catégories existantes** en scannant `_ressources/` :

```bash
ls _ressources/
```

2. **Chemin** :
   - Fichier : `_ressources/<categorie>/<slug>.md`
   - Dossier images : `_ressources/<categorie>/<slug>/` (avec `.gitkeep`)

3. **Front matter** :

```yaml
---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: <Nom de la ressource>
subtitle: <Description courte>
description: <1 phrase>
author: Alban Petit

manufacturer:
  - name: <Fabricant ou éditeur si applicable>
    link: "https://..."

external_link: https://...   # si lien direct vers ressource externe

todo: 10
---
```

4. **Corps minimal** :

```markdown
## Présentation

Description de la ressource et de son utilité au MakerSpace.

## Caractéristiques

- Point clé 1
- Point clé 2

## Liens utiles

- [Site officiel](https://...)
- [Documentation](https://...)
```

5. **Rappels** :
   - Pas de champ `type` dans les ressources — le filtre sur `/ressources/` est basé sur le sous-dossier (path_prefix), pas sur le type.
   - `external_link` redirige le clic sur la carte directement vers l'URL externe.
   - Corps en `##`, jamais `#`.
   - Si la catégorie n'existe pas encore, la créer avec un nom cohérent (snake-case ou kebab-case).

6. **Affiche** le chemin créé, la catégorie utilisée et le front matter final.
