Analyse les changements en cours et crée un commit Git en suivant la convention du projet.

**Arguments optionnels** : `$ARGUMENTS`
Si des arguments sont fournis, les utiliser comme indication sur le contexte ou le scope du commit (ex : `docs`, `workshop puzzle-bot`, `navbar fix`).

## Ce que tu dois faire

1. **Inspecter l'état Git** en lançant ces commandes en parallèle :
   - `git status --short` — fichiers modifiés/ajoutés/supprimés
   - `git diff --stat HEAD` — résumé des changements
   - `git diff HEAD` — détail des changements (pour comprendre le « pourquoi »)

2. **Choisir le bon type** :

   | Type | Quand l'utiliser |
   |---|---|
   | `feat` | Nouveau contenu, nouvelle page, nouvelle fonctionnalité |
   | `fix` | Correction d'une erreur (contenu erroné, lien cassé, bug CSS/JS) |
   | `refactor` | Réorganisation sans changement de fond (déplacer des fichiers, renommer) |
   | `chore` | Configuration, tooling, dépendances, fichiers `.json`/`.yml` de config |
   | `style` | CSS, mise en forme, renommage sans impact fonctionnel |
   | `docs` | Méta-documentation (CLAUDE.md, CONTRIBUTING.md, README) |
   | `build` | Système de build, Gemfile, Makefile |
   | `ci` | GitHub Actions, pipelines, Netlify |

3. **Choisir le bon scope** :

   | Scope | Zone concernée |
   |---|---|
   | `docs` | Contenu dans `_docs/` |
   | `workshop` ou `workshop/<slug>` | Ateliers dans `_workshops/` |
   | `ressource` | Ressources dans `_ressources/` |
   | `theme` | Layouts, includes, assets CSS/JS (`_layouts/`, `_includes/`, `assets/`) |
   | `nav` | Navigation, header, navbar |
   | `config` | `_config.yml`, `_data/` |
   | `cms` | Configuration Decap (`admin/`) |
   | `ci` | GitHub Actions, déploiement |
   | `meta` | CLAUDE.md, CONTRIBUTING.md |

   Si les changements touchent un seul atelier → `workshop/<slug>` (ex : `workshop/puzzle-bot`).
   Si les changements touchent plusieurs zones → choisir la zone principale.

4. **Rédiger la description** :
   - En **anglais**, à l'impératif présent (« add », « fix », « move », pas « added », « fixes »).
   - Courte (≤ 72 caractères), factuelle, centrée sur le **quoi**.
   - Pas de point final.

5. **Ajouter un corps** si plusieurs changements distincts ou si le contexte n'est pas évident :

   ```
   type(scope): description courte

   - Détail changement 1
   - Détail changement 2
   ```

6. **Exemples de la convention en vigueur** (tirés du log réel) :

   ```text
   feat(docs): add serial port and plotter tutorial
   fix(navbar): remove inset shadow on search input to restore white background
   feat(workshop/puzzle-bot): adapt project page to project-home format and wire up resources
   fix(nav): generate workshops dropdown dynamically instead of a stale list
   chore(docs): fix all markdownlint errors across the project
   feat(docs): add mermaid.js with a theme matching the site palette
   docs(meta): rewrite CLAUDE.md to reflect current site architecture
   refactor(docs): migrate capteurs tutorial to general concepts
   ```

7. **Créer le commit** avec `git add` sur les fichiers pertinents puis `git commit -m "..."`.
   - Ne jamais faire `git add .` ou `git add -A` sans vérifier d'abord qu'aucun fichier sensible (`.env`, clés, fichiers temporaires) n'est inclus.
   - Si les changements touchent plusieurs sujets indépendants, proposer de les splitter en plusieurs commits.
   - Toujours ajouter en fin de message :
     ```
     Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
     ```
