Crée une nouvelle **sous-page** dans un atelier existant de `_workshops/`.

Les sous-pages d'un atelier suivent le même format que les docs (`layout: documentation`), mais vivent dans `_workshops/<slug>/`. Elles peuvent être des tutoriels, des concepts, des guides ou des références spécifiques à l'atelier.

**Arguments attendus** : `$ARGUMENTS`
Format : `<workshop-slug> <type>/<page-slug>` — ex : `puzzle-bot tutorials/detection-aruco` ou `otto-mks concepts/cinematique`

## Ce que tu dois faire

1. **Parser les arguments** :
   - `workshop-slug` = slug de l'atelier existant
   - `type` = `tutorials`, `concepts`, `how-to-guides` ou `references`
   - `page-slug` = nom du fichier (sans `.md`)

2. **Vérifier** que `_workshops/<workshop-slug>/index.md` existe. Si non, suggérer `/new-workshop <workshop-slug>` d'abord.

3. **Créer** :
   - Fichier : `_workshops/<workshop-slug>/<type>/<page-slug>.md`
   - Dossier images : `_workshops/<workshop-slug>/<type>/<page-slug>/` (avec `.gitkeep`)

4. **Front matter** selon le type :

### `tutorials/` :

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

title: <Titre du tutoriel>
subtitle: <Ce que l'utilisateur saura faire>
description: <1 phrase>
author: Alban Petit

time: 1
difficulty: 1
todo: 10
---
```

### `concepts/` :

```yaml
---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: <Titre du concept>
subtitle: <Ce que l'utilisateur va comprendre>
description: <1 phrase>
author: Alban Petit

todo: 10
---
```

### Pour une vidéo externe (ex : YouTube) :

```yaml
---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: <Titre>
subtitle: <Sujet>
description: <Description>
external_link: https://www.youtube.com/watch?v=VIDEO_ID

time: 1
difficulty: 1
todo: 100
---
```

Avec dans le corps :

```markdown
<Description courte du contenu.>

{% include youtube.html video="VIDEO_ID" %}

Voir aussi directement sur [YouTube](https://www.youtube.com/watch?v=VIDEO_ID).
```

5. **Rappeler** à l'utilisateur d'ajouter l'URL de la nouvelle page dans les listes correspondantes du front matter de `_workshops/<workshop-slug>/index.md` :

```yaml
tutorials:
  - /workshops/<workshop-slug>/tutorials/<page-slug>/
```

L'URL générée par Jekyll sera `/workshops/<workshop-slug>/<type>/<page-slug>/` (trailing slash, format pretty).

6. **Affiche** le fichier créé, son URL Jekyll attendue, et le bloc à copier dans `index.md`.
