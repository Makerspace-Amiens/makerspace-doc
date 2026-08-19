---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Utiliser les Pull Requests pour la relecture
subtitle: Un regard extérieur avant que le code atterrisse dans le projet
description: Créer une branche, ouvrir une Pull Request, et faire relire son travail par un camarade avant de le fusionner dans la branche principale.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Connaître le cycle stage / commit / push
    link: /workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/
softwares:
  - label: GitHub Desktop ou VSCode
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

{% include message.html title="Captures d'écran à venir" message="L'interface GitHub évolue régulièrement — les libellés de boutons ci-dessous correspondent à l'interface actuelle." status="is-info" icon="fas fa-camera" %}

## Pourquoi ne pas pousser directement sur `main`

Travailler directement sur la branche principale (`main`) fonctionne tant
qu'on est seul. À plusieurs, ça mène vite à des conflits et à du code non
relu qui casse ce qui marchait. Une **Pull Request** (PR) propose vos
modifications, les rend visibles avant qu'elles n'atteignent `main`, et
donne à quelqu'un d'autre l'occasion de les relire.

```mermaid!
graph LR
    A[Créer une branche] --> B[Travailler, committer]
    B --> C[Ouvrir une Pull Request]
    C --> D[Relecture par un camarade]
    D -->|à corriger| B
    D -->|approuvé| E[Merge dans main]
```

## Créer une branche

{% include step-tuto.html
  greyBackground=true
  title="Nouvelle branche"
  content="**Avec GitHub Desktop** : `Current branch` en haut, puis `New branch`, donnez un nom court décrivant la tâche (ex. `moteur-pas-a-pas`, pas `fix` ou `test`).

**Avec VSCode** : cliquez sur le nom de branche en bas à gauche, `Create new branch`, entrez le nom.

Travaillez et committez normalement sur cette branche — voir [Git, GitHub Desktop et VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/)." %}

## Ouvrir la Pull Request

{% include step-tuto.html
  greyBackground=true
  title="Créer la PR"
  content="Une fois vos commits pushés sur la branche, allez sur GitHub.com : un bandeau propose directement **Compare & pull request**. Sinon, onglet **Pull requests**, bouton **New pull request**, choisissez votre branche.

Donnez un titre clair et une description : ce qui a changé, pourquoi, et ce qu'il faut vérifier en particulier. Dans le panneau de droite, ajoutez un **Reviewer** (la personne qui va relire)." %}

## Relire le travail d'un camarade

{% include step-tuto.html
  greyBackground=true
  title="Faire une review"
  content="Sur la PR, onglet **Files changed** : chaque ligne modifiée est affichée avec un `+`/`-`. Survolez une ligne et cliquez sur le `+` bleu pour laisser un commentaire dessus. Une fois la relecture terminée, bouton **Review changes** en haut à droite : choisissez **Comment** (remarques sans bloquer), **Approve** (validé), ou **Request changes** (à corriger avant de merger)." %}

{% include message.html title="Relire, ce n'est pas juste dire oui" message="Une bonne relecture pose des questions : « pourquoi ce choix ? », « ça marche aussi dans tel cas ? ». Ce n'est pas un obstacle administratif, c'est le moment où un deuxième cerveau attrape ce que le premier n'a pas vu." status="is-info" icon="fas fa-info-circle" %}

## Fusionner (merge)

{% include step-tuto.html
  greyBackground=true
  title="Merge"
  content="Une fois la PR approuvée, bouton **Merge pull request** puis **Confirm merge**. Supprimez ensuite la branche (bouton proposé juste après) — elle a fait son travail, la garder ne sert à rien." %}

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Bouton "Merge" grisé | Un reviewer a demandé des changements, pas encore résolus | Corrigez, repushez sur la même branche, la PR se met à jour automatiquement |
| "This branch has conflicts" | La branche principale a évolué depuis la création de votre branche | Voir [Résoudre un conflit Git](/workshops/methodologie-de-projet/tutorials/resoudre-conflit-git/) |
| Personne ne relit jamais les PR | Pas de reviewer assigné, ou pas d'habitude d'équipe prise | Assignez systématiquement un reviewer, décidé au point de synchro |

## Exercice

Sur votre projet, faites une PR pour votre prochaine petite modification :
créez une branche, committez, ouvrez la PR, demandez à un camarade de la
relire avant de merger — même pour un changement mineur, histoire de
prendre l'habitude.
