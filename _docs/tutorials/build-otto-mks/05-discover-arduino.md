---
layout: documentation
hide_hero: false
hero_image: Arduino_IDE_Fia33YwlyJ.png
hero_darken: true
image: Arduino_IDE_Fia33YwlyJ.png
component_toc: true
doc_header: true
type: tutorial
tag: otto-mks

title: 05 - Démarrer avec Arduino !
subtitle: Présentation du contexte et installation des outils
description: Cette page va vous accompagner dans la découverte d'Arduino et l'installation des différents outils.

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---

Arduino est une plateforme de prototypage électronique qui permet de développer rapidement des projets en utilisant des cartes électroniques programmables. Pour bien comprendre comment fonctionne Arduino et ses alternatives, il est important de distinguer trois éléments essentiels :

- **Le firmware :** le logiciel interne qui gère les interactions entre le matériel et le programme utilisateur.
- **Les cartes :** le matériel physique qui exécute le code.
- **L'IDE (Environnement de Développement Intégré) :** l'interface logicielle permettant d'écrire, compiler et téléverser le code vers la carte.

## Différence entre firmware, cartes et IDE

**1. Le firmware Arduino**

  Le firmware est un programme logiciel embarqué dans la carte microcontrôleur qui permet d'exécuter les instructions du code utilisateur en gérant les ressources matérielles. Dans l'écosystème Arduino, le terme "firmware" désigne le programme interne de la carte qui assure son fonctionnement de base. Les cartes Arduino sont programmées en C/C++ et utilisent des bibliothèques comme Arduino.h, qui fournissent des abstractions facilitant le contrôle du matériel. En réalité, les utilisateurs n'écrivent pas du "code Arduino" mais bien du C/C++ enrichi par ces bibliothèques. Cela permet d'interagir avec le matériel sans devoir manipuler directement les registres du microcontrôleur.

**2. Les cartes Arduino**

  Les cartes Arduino originales (comme l'UNO, MEGA, etc.) sont conçues pour fonctionner nativement avec l'IDE Arduino. Cependant, il existe des cartes compatibles, comme la XIAO, qui offrent les mêmes fonctionnalités mais avec des performances et des caractéristiques différentes (taille réduite, consommation énergétique optimisée, connectivité avancée, etc.).

  Les cartes compatibles comme la XIAO fonctionnent avec le même IDE et firmware, mais peuvent nécessiter des bibliothèques ou des pilotes spécifiques.

**3. L'IDE Arduino**

  L'IDE Arduino est un environnement logiciel permettant d'écrire et de téléverser du code sur les cartes. Il prend en charge plusieurs cartes compatibles, y compris celles qui ne sont pas fabriquées par Arduino, tant qu'elles supportent les mêmes architectures et protocoles de communication.

---

Dans notre cas par exemple, nous allons utiliser une carte spéficique au projet Otto-Mks basée sur un module XIAO ESP32C3. La carte XIAO est compatible avec l'IDE Arduino et le firmware Arduino, ce qui signifie que les projets et programmes développés avec Arduino peuvent être portés facilement sur cette carte. Elle présente des avantages comme :

- Un format ultra compact.
- Une consommation énergétique faible.
- Une compatibilité avec les bibliothèques Arduino.

Vous pouvez retrouver une description plus complète de la carte [sur la page dédiée.](../../tutoriels/04-discover-otto-pcb)

---

## Installation de l'environnement de développement

Afin de développer des projets sur des cartes compatibles avec l'environnement Arduino, il existe deux principales solutions :

- Les outils de développement fournis par Arduino ([IDE en ligne ou hors-ligne](https://www.arduino.cc/en/software)).
- [PlatformIO](https://platformio.org), intégré à un IDE comme VS Code, par exemple.

Si la seconde solution est plus avancée et permet de travailler dans des environnements de développement plus complets, favorisant ainsi une approche plus professionnelle, c'est bien la première solution que nous étudierons ici dans un contexte d'initiation. 

Gardez à l'esprit que le code et le langage restent les mêmes dans tous les cas et qu'il vous est tout a fait possible de passer à un autre IDE par la suite.

### Mise en place de l'environnement de développement

{% include step-tuto.html 
greyBackground = true
content="Nous allons donc commencer par installer, si ce n'est pas déja fait, l'IDE Arduino.

Pour cela, rendez-vous sur [le site d'Arduino](https://www.arduino.cc/en/software) et téléchargez la version qui convient à votre ordinateur.
" 
image="opera_lJptd4GUNO.png" %}

{% include step-tuto.html 
greyBackground = true
content="Installez ensuite l'application en suivant attentivement les étapes d'installation. Si l'on vous demande d'installer des pilotes à ce moment de l'installation, acceptez-les, car ils sont nécessaires pour établir la connexion avec les cartes.  

Une fois l'installation terminée, lancez l'application.
" 
image="arduino-ide_2.3.4_Windows_64bit_LlaPyfanrF.png" 
image_2="arduino-ide_2.3.4_Windows_64bit_XiduRTIyac.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Au **premier** lancement du programme, il est possible que le logiciel fasse des mises à jours ou des installations de périphériques. Acceptez-les afin de pouvoir vous connecter à vos cartes de développement. 
" 
image="Arduino_IDE_5QyuDN0Tnf.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Afin de pouvoir compiler et charger votre programme sur votre carte, vous devez installer les paquets fournis par le constructeur.  

Pour cela, rendez-vous dans **Fichier > Préférences**, puis dans le champ **Additional Boards**, ajoutez le lien suivant :  

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```  

Profitez-en pour cocher les différentes options, comme illustré sur l'image, afin d'accéder à des fonctionnalités supplémentaires et d'activer des options avancées de débogage.  

Cliquez sur **OK**, puis ouvrez le panneau latéral dans l'onglet **Boards**, tapez **ESP32**, et lancez l'installation du paquet **ESP32** *by Espressif Systems*. Attendez la fin de l'installation avant de continuer. Cela peut durer quelques minutes.
" 
image="hczUEuM8gK.png" 
image_2="Arduino_IDE_uLuPrFembp.png" 
image_3="Arduino_IDE_ZZyHDG13fW.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Nous allons effectuer un test de liaison avec votre carte afin de vérifier qu'elle est correctement reconnue par votre ordinateur et qu'il est possible d'y envoyer du code.  

Branchez votre carte via le port USB de votre ordinateur (ne connectez aucun autre périphérique pour ce test unitaire). Vérifiez ensuite que la LED rouge située à côté du port USB est bien allumée ou clignote.
" 
image="opera_rwDHZZVYMd.png" 
image_2="opera_cKFjuAidHG.png" 
image_3="opera_Kb84cFbwtS.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Accédez ensuite au menu déroulant **Select Board**. Vous devriez voir votre carte apparaître sur l'un des ports COM de votre ordinateur.  

Cliquez sur **Select Other Board**, puis, dans la barre de recherche, saisissez **XIAO** et sélectionnez la variante **XIAO_ESP32C3**.  

Validez votre choix en cliquant sur **OK**.
" 
image="Arduino_IDE_qykVNLk9fH.png" 
image_2="Arduino_IDE_gk3tQxMmN2.png" 
image_3="Arduino_IDE_RMuNmI6o6q.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Vous êtes maintenant prêt à charger un premier programme sur votre carte. Pour ce premier test, nous allons utiliser un programme vide afin de vérifier la connexion. Nous utiliserons le programme de base qui s'affiche lors de la création d'un nouveau projet.  

En haut à gauche, vous trouverez deux icônes :  

- ![alt text](verify.png) **Vérifier / Compiler** : cette option permet de vérifier et compiler le projet afin de le préparer pour le téléversement.  
- ![alt text](upload.png) **Téléverser** : cette option envoie le code compilé vers le microcontrôleur. Cliquer sur ce bouton lancera également la vérification et la compilation du programme avant son envoi.  

Cliquez sur **Téléverser** et assurez-vous que le programme est bien transféré en vérifiant l'affichage du message **Done uploading**.
" 
image="Arduino_IDE_Fia33YwlyJ.png" 
image_2="Arduino_IDE_pJ2c2oLC6n.png" 
image_3="Arduino_IDE_tKkyM2M3dU.png" 
%}

---

Votre environnement de développement est désormais correctement installé, et vous êtes prêt à commencer la programmation des cartes Otto MKS.  

Nous vous recommandons de suivre les tutoriels suivants afin de vous familiariser avec les fonctionnalités de base de la carte. 

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}