Crée une nouvelle **Fiche de référence** dans `_docs/references/` pour ce site Jekyll MakerSpace.

Les références sont des fiches factuelles et consultables (machine, composant, logiciel, plan). Pas de procédure — uniquement des caractéristiques, specs, BOM, liens.

**Arguments attendus** : `$ARGUMENTS`
Format : `<type>/<slug>` où `<type>` est l'un des sous-dossiers ci-dessous.

| Type | Sous-dossier | Exemples |
|---|---|---|
| `software` | `_docs/references/software/` | Arduino IDE, OnShape, KiCad |
| `hardware` | `_docs/references/hardware/` | Arduino Uno, CNC Shield, servomoteur |
| `machines` | `_docs/references/machines/` | Bambulab X1C, Laserbox, Mayku |
| `plans` | `_docs/references/plans/` | Index de plans OnShape |
| `others` | `_docs/references/others/` | Ressources externes, livres, cours PDF |

## Ce que tu dois faire

1. **Chemin** :
   - Fichier : `_docs/references/<type>/<slug>.md`
   - Dossier images : `_docs/references/<type>/<slug>/` (créer un `.gitkeep`)

2. **Front matter selon le type** :

### Pour `software` (logiciel/outil) :

```yaml
---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: <Nom du logiciel>
subtitle: <Rôle en une phrase>
description: <Description courte>
author: Alban Petit

manufacturer:
  - name: <Éditeur>
    link: "https://..."

external_link: https://...   # si la fiche doit rediriger vers le site officiel

todo: 10
---
```

### Pour `hardware` (composant électronique) :

```yaml
---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true

title: <Nom du composant>
subtitle: <Description courte>
description: <Description pour les cartes>
author: Alban Petit

manufacturer:
  - name: <Fabricant>
    link: "https://..."

todo: 10
---
```

### Pour `machines` (équipements du MakerSpace) :

```yaml
---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: equipment

title: <Nom de la machine>
subtitle: <Technologie ou usage principal>
description: <Description pour les cartes>
author: Alban Petit

manufacturer:
  - name: <Fabricant>
    link: "https://..."

working_area: <Zone de travail si applicable>
access_level: 1   # 0 autonomie, 1 encadré, 2 opérateur uniquement

todo: 10
---
```

3. **Squelette de contenu** adapté au type :

Pour **software** :
```markdown
## Présentation

Rôle du logiciel, cas d'usage au MakerSpace.

## Installation

Lien de téléchargement, prérequis système.

## Fonctionnalités clés

- Fonctionnalité 1
- Fonctionnalité 2

## Ressources

- [Documentation officielle](https://...)
```

Pour **hardware** :
```markdown
## Description

Fonctionnement du composant, principe physique si pertinent.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Tension | 5V |
| ... | ... |

## Brochage (Pinout)

Image du pinout + tableau des broches.

## Exemple de câblage

Image ou schéma.
```

Pour **machines** :
```markdown
## Présentation

Type de machine, technologie, cas d'usage au MakerSpace.

## Caractéristiques techniques

| Paramètre | Valeur |
|---|---|
| Zone de travail | |
| Matériaux compatibles | |
| ... | ... |

## Utilisation au MakerSpace

Règles d'accès, réservation, consignes de sécurité.

## Ressources

- [Manuel constructeur](https://...)
```

4. **Rappels** :
   - Pas de champ `type` pour software/hardware/plans/others — uniquement `type: equipment` pour les machines.
   - `external_link` redirige le clic sur la carte directement vers l'URL (pas de visite de la page interne).
   - Corps en `##`, jamais `#`.

5. **Affiche** le chemin, le type détecté et le front matter généré.
