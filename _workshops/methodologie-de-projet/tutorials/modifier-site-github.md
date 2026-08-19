---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Modifier son site Jekyll depuis l'interface GitHub
subtitle: Éditer votre documentation sans rien installer
description: Modifier une page du site de documentation directement depuis le navigateur, sans configurer Git ni Jekyll en local.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Avoir un repo de projet créé
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Aucun logiciel requis (interface web GitHub)
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Captures d'écran à venir" message="Les libellés de boutons ci-dessous correspondent à l'interface actuelle de GitHub." status="is-info" icon="fas fa-camera" %}

## Le moyen le plus rapide de documenter

Le dossier `docs/` de votre repo est un site Jekyll, hébergé par GitHub
Pages. Pas besoin d'installer quoi que ce soit pour modifier une page : le
navigateur suffit. Pratique pour une correction rapide, ou pour commencer
avant d'installer Ruby en local (voir le tutoriel suivant).

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 — Trouver le fichier"
  content="Sur GitHub.com, naviguez dans le dossier `docs/` de votre repo jusqu'au fichier `.md` à modifier (par exemple `docs/objectifs.md`)." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 — Ouvrir l'éditeur"
  content="Cliquez sur l'icône crayon (✏️) en haut à droite du fichier affiché. L'éditeur Markdown de GitHub s'ouvre." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 3 — Modifier et prévisualiser"
  content="Modifiez le texte. Utilisez l'onglet **Preview** en haut de l'éditeur pour vérifier le rendu avant de valider — voir [Syntaxe Markdown](/workshops/methodologie-de-projet/tutorials/syntaxe-markdown/) si besoin." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 4 — Committer"
  content="En bas de la page : un champ pour le titre du commit (résumé court), un champ optionnel pour la description. Choisissez **Commit directly to the `main` branch** pour une modification simple, ou **Create a new branch and start a pull request** si vous voulez une relecture — voir [Utiliser les Pull Requests](/docs/how-to-guides/pull-requests-et-conflits-git/). Cliquez sur **Commit changes**." %}

## Vérifier la publication

Après un commit sur `main`, GitHub Pages reconstruit le site
automatiquement — comptez 1 à 2 minutes. Onglet **Actions** de votre repo
pour suivre la progression du build en direct.

{% include message.html title="Limite de cette méthode" message="Pratique pour une modification ponctuelle, mais vous ne voyez pas le rendu final avant publication (l'onglet Preview de GitHub n'applique pas le thème du site). Pour des changements plus lourds, construire le site en local (tutoriel suivant) permet de vérifier avant de publier." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Pas d'icône crayon visible | Vous n'avez pas les droits d'écriture sur le repo | Vérifiez que vous êtes bien collaborateur du repo |
| Le site ne se met pas à jour après le commit | Le build GitHub Actions a échoué | Onglet **Actions**, ouvrez le run en échec pour voir l'erreur (souvent une erreur de syntaxe dans le front matter) |
| La mise en page semble cassée après modification | Front matter YAML mal formé (indentation, guillemets) | Comparez avec une autre page qui fonctionne |

## Exercice

Modifiez une ligne de votre documentation directement depuis GitHub.com,
prévisualisez, committez, et vérifiez dans l'onglet **Actions** que le
site s'est reconstruit sans erreur.
