---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Git, GitHub Desktop et VSCode
subtitle: Le cycle modifier / commit / push au quotidien
description: Comprendre ce que fait Git, et enregistrer/envoyer vos modifications avec GitHub Desktop ou directement depuis VSCode.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Avoir cloné votre repo (voir le tutoriel précédent)
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: GitHub Desktop ou VSCode
    link: "https://desktop.github.com"
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Captures d'écran à venir" message="Les interfaces de GitHub Desktop et VSCode changent peu d'une version à l'autre — les libellés ci-dessous correspondent aux versions actuelles de ces outils." status="is-info" icon="fas fa-camera" %}

## Ce que fait Git, en une phrase

Git garde un historique complet de chaque modification de vos fichiers, et
GitHub héberge une copie de cet historique en ligne pour que toute
l'équipe travaille sur la même base. Le cycle de base, celui que vous
répéterez des dizaines de fois par semaine :

```mermaid!
graph LR
    A[Modifier des fichiers] --> B[Stage / sélectionner<br/>les changements]
    B --> C[Commit : enregistrer<br/>avec un message]
    C --> D[Push : envoyer<br/>sur GitHub]
```

- **Modifier** : vous éditez des fichiers normalement, dans VSCode ou
  ailleurs — rien de spécial à Git à ce stade.
- **Stage** (mettre en attente) : vous choisissez quels fichiers modifiés
  vont dans le prochain commit. Utile si vous avez travaillé sur deux
  choses différentes en même temps : vous pouvez committer l'une sans
  l'autre.
- **Commit** : un instantané de ces modifications, avec un message qui
  explique quoi et pourquoi. Le commit reste **sur votre ordinateur**
  jusqu'au push suivant — personne d'autre ne le voit encore.
- **Push** : vos commits sont envoyés sur GitHub, où le reste de l'équipe
  peut les récupérer.
- **Fetch / Pull** : l'inverse du push — récupérer les commits que les
  autres ont envoyés sur GitHub, pour les avoir aussi sur votre machine.
  **Fetch** regarde ce qui a changé sans encore rien télécharger, **Pull**
  télécharge et applique les changements.

{% include message.html title="Pourquoi pas juste Google Drive ?" message="Un dossier partagé écrase les fichiers sans prévenir en cas de modification simultanée. Git garde chaque version dans l'historique et prévient explicitement en cas de conflit — voir [Résoudre un conflit Git](/workshops/methodologie-de-projet/tutorials/resoudre-conflit-git/)." status="is-info" icon="fas fa-info-circle" %}

## Avec GitHub Desktop

{% include step-tuto.html
  greyBackground=true
  title="Étape 1 — Voir les changements"
  content="Ouvrez GitHub Desktop, sélectionnez votre repo dans la liste en haut à gauche. L'onglet **Changes** liste tous les fichiers modifiés depuis le dernier commit, avec un aperçu des lignes ajoutées/supprimées." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 2 — Committer"
  content="Cochez les fichiers à inclure dans ce commit (tous par défaut). En bas à gauche, écrivez un résumé court (impératif, ex. « Ajoute le calcul de vitesse moteur ») et, si besoin, une description plus longue. Cliquez sur **Commit to main**." %}

{% include step-tuto.html
  greyBackground=true
  title="Étape 3 — Envoyer sur GitHub"
  content="Cliquez sur **Push origin** en haut. Vos commits sont maintenant visibles par toute l'équipe sur GitHub.com. Avant de commencer à travailler, pensez aussi à cliquer sur **Fetch origin** pour récupérer les changements des autres." %}

## Directement depuis VSCode

VSCode intègre les mêmes fonctions sans changer d'application — pratique
si vous éditez déjà votre code ou votre documentation dedans.

{% include step-tuto.html
  greyBackground=true
  title="Panneau Source Control"
  content="Cliquez sur l'icône de branches dans la barre latérale gauche (ou `Ctrl+Shift+G`). Les fichiers modifiés apparaissent sous **Changes**." %}

{% include step-tuto.html
  greyBackground=true
  title="Stage, commit, sync"
  content="Survolez un fichier et cliquez sur le `+` pour le stager (ou le `+` en haut de la liste pour tout staged d'un coup). Écrivez votre message de commit dans le champ de texte en haut du panneau, puis cliquez sur **Commit** (le bouton ✓). Cliquez ensuite sur **Sync Changes** pour push (et pull en même temps)." %}

{% include message.html title="Bonne pratique" message="Des commits petits et fréquents, avec un message précis, valent mieux qu'un commit géant en fin de journée avec le message « avancement ». Un commit doit correspondre à un changement cohérent qu'on pourrait résumer en une phrase." status="is-success" icon="fas fa-check-circle" %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| "Push" échoue avec une erreur de rejet | Quelqu'un d'autre a push avant vous, votre historique local est en retard | Faites **Fetch origin** puis **Pull**, réglez les conflits éventuels ([voir le tutoriel dédié](/workshops/methodologie-de-projet/tutorials/resoudre-conflit-git/)), puis repush |
| Un fichier que vous ne voulez pas suivre apparaît dans Changes | Fichier généré ou temporaire non exclu | Ajoutez-le à `.gitignore` |
| Le bouton Commit reste grisé | Aucun message de commit écrit, ou aucun fichier staged | Vérifiez les deux |

## Exercice

Modifiez n'importe quel fichier de votre repo (par exemple, ajoutez une
ligne dans `docs/objectifs.md`), puis faites le cycle complet : stage,
commit avec un message précis, push. Vérifiez sur GitHub.com que votre
commit apparaît bien dans l'historique du repo.
