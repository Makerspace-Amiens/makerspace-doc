---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true

title: Rédiger un README de projet efficace
subtitle: La première (et parfois seule) chose que quelqu'un lira
description: Structurer le README à la racine de votre repo pour qu'il donne, en 2 minutes de lecture, tout ce qu'il faut savoir avant de creuser.
author: Adrien Bracq

time: 1
difficulty: 1
todo: 60

prerequisites:
  - label: Avoir un repo de projet créé
    link: /workshops/methodologie-de-projet/tutorials/creer-repo-template/
softwares:
  - label: Un éditeur de texte
    link: ""
hardwares:
  - label: Aucune machine requise
    link: ""
---

## Pourquoi le README compte autant

Le fichier `README.md` à la racine de votre repo s'affiche automatiquement
sur la page GitHub du projet — c'est souvent la toute première chose que
lira un jury, un encadrant, ou une prochaine équipe. Voir aussi
[Rendre son projet transmissible](/workshops/methodologie-de-projet/concepts/rendre-projet-transmissible/)
pour le principe général.

## La structure qui fonctionne

Un bon README répond, dans l'ordre, à : c'est quoi, comment je le lance,
où trouver plus de détails, quelles sont les limites.

{% capture tab1 %}

```markdown
# Projet de robot de tri

Projet réalisé au MakerSpace pour le Forum des Sciences.
```

{% endcapture %}

{% capture tab2 %}

```markdown
# Robot de tri de déchets

Robot capable de trier 3 catégories de déchets (plastique, verre, métal),
conçu pour une démonstration pédagogique au Forum des Sciences d'Amiens.

## Démarrage rapide

1. Flasher `project/software/main.ino` sur l'Arduino via l'IDE Arduino
2. Alimenter le robot en 12V
3. Déposer un déchet sur le tapis d'entrée

## Documentation complète

Voir le [site de documentation](https://votre-projet.github.io) pour le
détail de la conception, des choix techniques et des tests.

## Limites connues

- Taux de tri correct : ~80% (voir les résultats de tests détaillés)
- Non testé sous forte luminosité directe

## Licence

MIT — voir [LICENSE](LICENSE)
```

{% endcapture %}

{% include content-tabs.html
  id="readme-avant-apres"
  tab_title1="❌ README minimal"
  tab_title2="✅ README structuré"
  tab1=tab1
  tab2=tab2
%}

## Un gabarit à copier

{% capture snippet_readme %}# Nom du projet

Une phrase de description : ce que fait le projet, pour qui.

## Démarrage rapide

1. ...
2. ...

## Documentation complète

Voir le [site de documentation](...).

## Limites connues

- ...

## Licence

... — voir [LICENSE](LICENSE)
{% endcapture %}
{% include code-snippet.html label="Copier le gabarit (Markdown)" content=snippet_readme %}

{% include message.html title="Un README n'est pas la documentation complète" message="Il pointe vers elle, il ne la remplace pas. Si votre README dépasse une page d'écran, une bonne partie de son contenu devrait probablement vivre dans docs/ à la place." status="is-info" icon="fas fa-info-circle" %}

## Exercice

Ouvrez le `README.md` de votre repo (créé automatiquement depuis le
template) et réécrivez-le en suivant la structure ci-dessus, avec le vrai
contenu de votre projet.
