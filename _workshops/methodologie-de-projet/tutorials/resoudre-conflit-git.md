---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Résoudre un conflit Git
subtitle: Ni panique, ni tout recommencer
description: Comprendre pourquoi un conflit Git apparaît, et le résoudre proprement dans VSCode sans perdre le travail de personne.
author: Adrien Bracq

time: 1
difficulty: 2
todo: 55

prerequisites:
  - label: Connaître le cycle stage / commit / push
    link: /workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/
softwares:
  - label: VSCode
    link: "https://code.visualstudio.com"
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Pourquoi un conflit apparaît

Un conflit survient quand deux personnes ont modifié **les mêmes lignes**
du même fichier, sur des branches différentes. Git sait fusionner
automatiquement des modifications sur des lignes différentes — sur les
mêmes lignes, il ne peut pas deviner laquelle garder, et vous le demande.

{% include message.html title="Ce n'est pas une erreur" message="Un conflit n'est pas le signe que vous avez mal fait quelque chose. C'est le fonctionnement normal de Git dès qu'une équipe travaille en parallèle sur les mêmes fichiers." status="is-info" icon="fas fa-info-circle" %}

## Repérer un conflit

Il apparaît généralement lors d'un `git pull`, d'un merge, ou en essayant
de fusionner une Pull Request. Git affiche un message du type
`CONFLICT (content): Merge conflict in <fichier>`, et le fichier concerné
contient des marqueurs spéciaux :

```text
<<<<<<< HEAD
Votre version des lignes en conflit
=======
La version de l'autre branche
>>>>>>> nom-de-la-branche
```

## Résoudre dans VSCode

{% include step-tuto.html
  greyBackground=true
  title="Ouvrir le fichier en conflit"
  content="VSCode détecte automatiquement les marqueurs de conflit et affiche, au-dessus de chaque bloc, des liens cliquables : **Accept Current Change** (garder votre version), **Accept Incoming Change** (garder l'autre), **Accept Both Changes** (garder les deux), ou **Compare Changes** (voir les deux côte à côte)." %}

{% include step-tuto.html
  greyBackground=true
  title="Choisir la bonne version"
  content="Ne cliquez pas au hasard : lisez les deux versions, et si besoin, discutez-en avec la personne qui a écrit l'autre version. Le résultat final ne doit contenir **aucun** marqueur `<<<<<<<`, `=======`, `>>>>>>>` restant — vérifiez en relisant le fichier entier une fois terminé." %}

{% include step-tuto.html
  greyBackground=true
  title="Finaliser"
  content="Une fois tous les conflits du fichier résolus : stage le fichier, committez avec un message du type « Résout le conflit sur main.ino », puis push normalement." %}

{% include message.html title="En cas de doute" message="Un conflit mal résolu peut faire disparaître silencieusement le travail de quelqu'un. Dans le doute, contactez la personne dont vous écrasez potentiellement le travail plutôt que de trancher seul." status="is-warning" icon="fas fa-exclamation-triangle" %}

## Pourquoi ça arrive moins souvent qu'on ne le croit

Des commits petits et fréquents, plutôt que d'énormes commits accumulés
pendant des jours, réduisent fortement la fréquence et la taille des
conflits — voir [Git, GitHub Desktop et VSCode](/workshops/methodologie-de-projet/tutorials/git-github-desktop-vscode/).
Travailler sur des branches séparées par brique du projet (voir
[Constituer et organiser son équipe](/workshops/methodologie-de-projet/concepts/constituer-organiser-equipe/))
aide aussi, puisque les mêmes fichiers sont alors modifiés par moins de
personnes en parallèle.

## Résolution de problèmes

| Symptôme | Cause probable | Solution |
|---|---|---|
| Le fichier contient encore `<<<<<<<` après commit | Marqueurs oubliés, non retirés avant de committer | Rouvrez le fichier, supprimez les marqueurs restants, recommittez |
| Conflit sur presque tous les fichiers | Les deux branches ont trop divergé | Faites des `pull`/merges plus fréquents à l'avenir pour rester proche de `main` |
| Peur de perdre du travail en résolvant | Compréhensible, mais Git garde l'historique | Les deux versions restent visibles dans l'historique des commits, rien n'est perdu définitivement |

## Exercice

Si aucun vrai conflit ne s'est encore présenté sur votre projet, provoquez-en
un volontairement à deux (modifiez la même ligne d'un fichier sur deux
branches différentes) pour vous entraîner à le résoudre sans enjeu réel.
