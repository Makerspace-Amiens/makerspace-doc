---
layout: documentation
hide_hero: false
hero_image: axidraw-twitter-stokeastic.png
hero_height: is-small
hero_darken: true
image: axidraw-twitter-stokeastic.png
component_toc: true
doc_header: true
tag: machines-that-draws

title: Les grandes étapes du projet
subtitle: Constituer votre équipe, concevoir, tester votre machine, ...
description: Cette page détaille les différentes étapes pour réaliser votre projet

time: 1
difficulty: 1

todo: 80
---

{% include step-tuto.html image="team.png" greyBackground = false title = "Étape 1 : Formation de l’équipe" content="La première étape consiste à **former une équipe** de **4 étudiants** avec des compétences **complémentaires** pour maximiser vos chances de succès. Analysez vos **points forts** et ceux de vos camarades pour **répartir les rôles** de manière équilibrée : **responsable mécanique**, **responsable électronique**, **responsable logiciel**...

N’oubliez pas de définir un **cadre de travail clair** dès le début, en établissant des **règles de communication** et en choisissant des **outils collaboratifs** comme **Trello** ou **Teams** pour organiser vos tâches." %}

{% include step-tuto.html image="documentation.png" greyBackground = false title = "Étape 2 : Compréhension du projet et des objectifs" content="Prenez le temps de bien **comprendre** les attentes du **projet**, les **livrables** à rendre, et les **délais**. Discutez ensemble pour **clarifier les objectifs** : un **Proof of Concept** fonctionnel pour le **S1** et une **version finale améliorée** pour le **S2**.

Listez également les **contraintes** à respecter, comme le **matériel disponible** ou les **limites** imposées par le temps. Cette étape est **nécessaire** pour **aligner les attentes** de tout le monde dès le départ." %}

{% include step-tuto.html image="research.png" greyBackground = false title = "Étape 3 : Recherche et exploration" content="Faites des **recherches** sur des machines similaires, comme l’**Axidraw** ou des projets **open source**.

Vous pouvez vous aider de la page [**Types de machines**](../03-types-de-machines). Identifiez les **concepts** qui pourraient **inspirer** votre machine et explorez des **tutoriels techniques**.

Utilisez cette étape pour faire un **brainstorming** en équipe et sélectionner les **idées les plus réalisables** en fonction de vos **ressources**, **envies** et **compétences**." %}

{% include step-tuto.html image = "target.png" greyBackground = false title = "Étape 4 : Définition des spécifications" content="Décrivez précisément ce que votre machine doit **accomplir**. Identifiez les **fonctionnalités minimales** nécessaires pour le **Proof of Concept** du **S1**, comme le **tracé de lignes simples**.

Ensuite, définissez les **objectifs à long terme** pour le **S2**, tels que des **tracés plus complexes** ou une **meilleure précision**. Cette étape inclut également le **choix des composants** électroniques et mécaniques à utiliser." %}

{% include step-tuto.html image ="3D.png" greyBackground = false title = "Étape 5 : Conception CAO" content="Utilisez **OnShape**, en suivant le tutoriel [**Démarrer avec OnShape**](../02-onshape-project), pour **modéliser** les pièces **mécaniques** de votre machine. Créez un **assemblage virtuel** pour vérifier l’**intégration des composants** et détecter d’éventuels **problèmes** avant la fabrication.

Profitez de cette étape pour **anticiper les ajustements** et **optimiser le design** en fonction des **contraintes techniques** et **matérielles**." %}

{% include step-tuto.html image = "prototyping.png" greyBackground = false title = "Étape 6 : Prototypage rapide" content="Avant de fabriquer les pièces définitives, réalisez des **prototypes rapides** en décomposants vos ensembles, en utilisant des matériaux simples.

Par exemple, pour tester l'encastrement d'un moteur dans une pièce de votre châssis, n'imprimez, ou ne découpez, que la partie de la pièce qui s'interface avec le moteur, cela permet des économies drastiques en matière et temps de prototypage. Une fois toute les mesures confirmées, vous pourrez finalement produire la pièce de manière définitive.

Cette méthode vous permettra de **tester vos idées**, d’identifier les **points faibles** du design, et de les **corriger** avant de passer à la fabrication finale." %}

{% include step-tuto.html image = "make.png" greyBackground = false title = "Étape 7 : Fabrication des pièces" content="Passez à la **fabrication des pièces définitives** en utilisant les outils du **MakerSpace**, comme les **imprimantes 3D** et la **découpe laser**.

Prenez soin de respecter les **dimensions** et les **tolérances** définies dans vos **fichiers CAO** pour assurer une **bonne intégration** des composants **mécaniques** et **électroniques**." %}

{% include step-tuto.html image = "elec.png" greyBackground = false title = "Étape 8 : Intégration électronique" content="Assemblez les **composants électroniques**, comme les **moteurs pas à pas**, les **servomoteurs** et la **CNC Shield**.

Câblez correctement les éléments en suivant les **schémas électroniques**, et vérifiez chaque **connexion** avant de tester l’ensemble. Cette étape demande de la **précision** pour éviter des **dysfonctionnements**." %}

{% include step-tuto.html image = "program.png" greyBackground = false title = "Étape 9 : Programmation" content="Écrivez le **code nécessaire** pour piloter votre machine à l’aide d’**Arduino**. Commencez par programmer des **fonctionnalités de base**, comme le **déplacement des moteurs** selon des **trajectoires simples**.

Testez régulièrement pour **identifier les bugs** et **ajuster les paramètres**." %}

{% include step-tuto.html image = "tune.png" greyBackground = false title = "Étape 10 : Calibration" content="Ajustez et **calibrez votre machine** pour garantir un fonctionnement **précis**. Vérifiez l’**alignement des axes**, les **distances de déplacement**, et la **précision des tracés**.

Effectuez des **tests** avec des formes simples (**carrés**, **cercles**) et **affinez les réglages** en fonction des **résultats obtenus**." %}

{% include step-tuto.html image = "render.png" greyBackground = false title = "Étape 11 : Documentation et livrables S1" content="Compilez les **résultats du premier semestre** en préparant un document **OnShape** de votre **POC**, une **vidéo verticale** de présentation, et une **présentation technique** de **5 minutes**.

Ces **livrables** doivent refléter votre **progression** et les **choix techniques** faits jusqu’à présent." %}

{% include step-tuto.html image = "upgrade.png" greyBackground = false title = "Étape 12 : Améliorations pour la version finale" content="Identifiez les **points faibles** de votre **POC** et apportez des **améliorations** pour développer une **version finale plus performante**.

Concentrez-vous sur la **précision**, la **fiabilité** et l’**esthétique** de votre machine, tout en intégrant de **nouvelles fonctionnalités** si possible." %}

{% include step-tuto.html image = "draw.png" greyBackground = false title = "Étape 13 : Développement des tracés automatisés" content="Travaillez sur la **génération de tracés complexes**. Explorez l’intégration de **G-code** pour programmer des **motifs spécifiques** et testez différentes approches pour améliorer les **résultats graphiques** produits par votre machine." %}

{% include step-tuto.html image = "render.png" greyBackground = false title = "Étape 14 : Documentation et livrables S2" content="Documentez la **version finale** de votre machine en détail pour permettre à quelqu’un d’autre de la **reproduire** ou de l’**améliorer**.
Préparez une **vidéo finale** montrant son **fonctionnement**, un **rapport technique complet**, et votre **présentation** pour la soutenance." %}

{% include step-tuto.html image = "presentation.png" greyBackground = false title = "Étape 15 : Présentation lors de la Journée des Projets" content="Préparez un **stand** pour présenter votre machine à la **Journée des Projets**. Mettez en avant les **tracés réalisés**, les **défis surmontés**, et les **compétences acquises**.

Soyez prêt·e à **répondre aux questions** d’un **jury de professionnels** et à **démontrer le fonctionnement** de votre machine." %}
