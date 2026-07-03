---
layout: documentation
hide_hero: false
hero_image: hero.png
hero_height: is-small
hero_darken: true
image: hero.png
component_toc: true
doc_header: true
type: tutorial

title: Arduino port série
subtitle: Lire et tracer les données du port série avec le moniteur de l'IDE Arduino
description: Établir une liaison série entre une carte Arduino et un PC, puis utiliser le moniteur et le traceur série intégrés à l'IDE Arduino pour lire et visualiser les données envoyées.
author: Alban Petit

time: 1
difficulty: 1
compatibilities-os: win, mac, lin

prerequisites:
  - label: Notions de base en C++ (framework Arduino)
    link: ""

softwares:
  - label: Arduino IDE
    link: /docs/references/software/arduino-ide/

hardwares:
  - label: Carte compatible Arduino (UNO, ESP32, etc.)
    link: /docs/references/hardware/arduino-uno/
---

## 1 - Introduction

### 1.1 - Présentation

La majorité des cartes "type Arduino" sont capables de communiquer en série via l'USB (c'est le cas des cartes arduino UNO). Il est donc possible de recevoir et d'envoyer des instructions via ce port et de les afficher sur un terminal de l'ordinateur hôte.

Pour se faire nous allons établir une communication série entre le µC et le PC.

La liaison série permet une communication point-à-point grâce à deux voies:

- **TX : La transmission** - C'est la voie qui transmet le message à son interlocuteur
- **RX : La réception** - C'est la voie qui va recevoir un message de l'interlocuteur

Etant donné que les voies sont spécifiques et associées à des pins du µC (sur une UNO : RX = pin0 et TX = pin1) il ne faut pas oublier de croiser le fils de communication comme montré dans cet exemple :

![schema](schema-connexion-tx-rx.png)

Afin de communiquer, les deux périphériques doivent être synchronisés sur la même vitesse de transmission appelée [**bauds**](https://fr.wikipedia.org/wiki/Baud_(mesure)).

Si vous souhaitez en savoir plus sur la liaison série :
[La liaison série - Zeste de savoir](https://zestedesavoir.com/tutoriels/686/arduino-premiers-pas-en-informatique-embarquee/744_la-communication-avec-arduino/3426_generalites-sur-la-voie-serie/)

### 1.2 - Premier exemple

Dans notre exemple, nous allons envoyer une trame (un sinus) et nous allons l'afficher sur le moniteur série.

Le code utilisé sera le suivant :

``` c++
#include <Arduino.h>
float i=0;

void setup() 
{
  Serial.begin(115200);
}

void loop() 
{
  i+=0.1;
  Serial.print("sin:");
  Serial.println(sin(i));
  delay(10);
}

```

- `Serial.begin(115200)`   : Initialise une communication série à 115200 bauds
- `Serial.print(">sin:")`   : Envoi sur le porte série la chaine de caractères `">sin:"`
- `Serial.println(sin(i))`  : Envoi sur le porte série le résultat de l'opération `sin(i)` avec un retour à la ligne à la fin

En savoir plus sur l'utilisation du port série dans le Framework arduino : [référence Arduino - Serial](https://www.arduino.cc/reference/en/language/functions/communication/serial/)

{% include message.html
message="**Problème :** les données sont transmises toutes les 10ms. Elles sont donc difficilement visibles et descriptibles dans le terminal série."
status="is-warning" %}

Nous allons donc voir par la suite comment améliorer la lecture du port série dans le cas d'un grand nombre de données et d'une fréquence d'envoi importante.

## 2 - Arduino IDE

Le terminal série inclut dans l'Arduino IDE est particulièrement simple et efficace. Il permet à la fois :

- D'afficher les données bruts du port série
- De tracer des courbes de données

Il n'est d'ailleurs pas nécessaire d'avoir écrit le code dans l'IDE, ou d'avoir une carte arduino, pour utiliser le moniteur série. N'importe quel port série provenant de n'importe quelle source peut être utilisé.

### 2.1 - Utilisation simple du moniteur

Utilisons l'exemple précèdent afin de tester le moniteur série en lecture

{% include step-tuto.html
content="Dans l'IDE Arduino, allez dans ***Outils > Port*** et sélectionnez le port com de votre carte à utiliser. Cliquez ensuite sur ***Moniteur série*** en haut à droite pour ouvrir le moniteur.  
![](arduino-ide-bouton-moniteur-serie.png)"
image="arduino-ide-outils-port.png" %}

{% include step-tuto.html
content="La fenêtre du terminal série s'ouvre et vous affiche les données reçues. Attention cependnat à bien régler la vitesse en baud dans le menu inférieur droit.  
![](arduino-ide-terminal-serie.png)  
Il vous est également possible d'afficher l'horodatage et de désactiver le défilement automatique."
image="arduino-ide-reglage-vitesse-baud.png" %}

Le moniteur arduino a l'avantage de proposer les fonctionnalités du moniteur de PIO sous VSCode avec des accès simplifiées aux paramétrage du port série, le rendant plus simple à utiliser et à paramétrer

### 2.2 - Utilisation du mode graphique

Il est également possible d'afficher les données reçues sur un affichage graphique et de tracer les courbes de données reçues. pour cela :

{% include step-tuto.html
content="Cliquez sur ***Outils > Traceur série***. La fenêtre du traceur série devrait s'ouvrir."
image="arduino-ide-menu-traceur-serie.png" %}

{% include step-tuto.html
content="Sur la fenêtre s'affiche alors votre courbe des données reçues. il est également possible, comme sur la fenêtre textuelle, de modifier les paramètres de vitesse et d'envoyer des données."
image="hero.png" %}

{% include message.html
message="**Attention :** une des limitations de l'IDE Arduino est de ne pas pouvoir lancer à la fois le moniteur textuel **et** le moniteur graphique. Ceci pour être cependant fait avec un autre utilitaire décrit plus bas.  
![](arduino-ide-limitation-moniteur-plotter.png)"
status="is-danger" %}

### 2.3 - Utilisation avancée du plotter

#### a. Afficher plusieurs graphiques

Il es possible d'afficher plusieurs graphiques dans l'interface série d'Arduino IDE. Pour cela, on va utiliser le séparateur `virgule` `","` entre chaque envois de datas.

Par exemple, pour afficher une courbe de `sin(i)` et en même temps la courbe de `cos(i)`, on peut s'y prendre de la manière suivante :

``` c++
void loop() 
{
    i+=0.1;
    Serial.print(sin(i));
    Serial.print(",");
    Serial.println(cos(i));
    delay(10);
}
```

![](plotter-graphique-sin-cos.png)

Il est bien sur possible d'afficher plus de courbes (aucune limite n'est définie dans la doc de l'IDE). Les couleurs des graphes sont définies automatiquement et l'ordre d'envoi des données impact le choix de la couleur.

Il est également possible d'afficher des labels permettant d'identifier les courbes. Pour cela, on va faire précéder chaque envoi de valeur avec le label correspondant à la courbe avec un le caractère `deux points` `:` entre le label et la valeur :

``` c++
void loop() 
{
    i+=0.1;
    Serial.print("sin:");
    Serial.print(sin(i));
    Serial.print(",");
    Serial.print("cos:");
    Serial.println(cos(i));
    delay(10);
}
```

![](plotter-graphique-labels.png)

#### b. Gérer l'auto-scale

Le moniteur série d'arduino IDE va automatiquement adapter l'échelle verticale de l'affichage en fonction des données min et max reçues. Cela peut parfois être contraignant pour la lecture des graphiques. Une solution consiste à envoyer deux courbes constantes min et max permettant de forcer l'échelle verticale.

**Attention cependant :** si les courbes dépassent le valeurs min et/ou max, l'adaptation automatique recommence à modifier l'échelle d'affichage.

{% include message.html
message="L'échelle ne peut pas descendre en dessous de -5 et +5' même avec cette méthode. Pour étudier la limitation de l'autoscale, on va donc ici multiplier les valeur affichées."
status="info" %}

Dans l'exemple ci-dessous on va afficher deux lignes min et max à respectivement `-15`et `+30`, puis on va afficher la valeur de `10*cos(i)`.

``` c++
void loop() 
{
    i+=0.1;
    Serial.print("min:");
    Serial.print(-15);
    Serial.print(",");
    Serial.print("cos:");
    Serial.print(10*cos(i));
    Serial.print(",");
    Serial.print("max:");
    Serial.println(30);
    delay(10);
}
```

![](plotter-graphique-autoscale.png)

#### c. Fonction d'aide

Si vous souhaitez simplifier votre écriture de code dans le but d'afficher des graphiques, vous pouvez utiliser la fonction suivante (ou similaire) dans votre code :

``` c++
void plot(String label, float value, bool last)
{
    Serial.print(label);
    Serial.print(":");
    Serial.print(value);
    if(!last) Serial.print(",");
    else Serial.println();
}
```

- `String label`    : Le nom de votre label
- `float value`     : La valeur à afficher
- `bool last`       : `faux` si d'autres valeurs doivent suivre, `vrai` si c'est la dernière valeur

On peut alors avoir le code suivant afin d'afficher deux courbes avec labels :

``` c++
void loop() 
{
  i+=0.1;
  plot("cos", 10*cos(i), false);
  plot("sin", 5*sin(i), true);
  delay(10);
}
```

![](plotter-graphique-fonction-plot.png)

### 2.4 - Limitations

- L'axe X défile à l'infini et il est impossible de mettre en pause le défilement autrement qu'en déconnectant la liaison physique.
- Il n'est pas possible d'afficher un point en (X,Y)
- La mise à l'échelle automatique de L'axe Y semble être une bonne idée à première vue, mais peut être très ennuyante rapidement dans certains cas.
- Il est impossible de zoomer sur une partie de la courbe
- Il est impossible de visualiser d'autres données provenant du port série en même temps que les courbes.

Pour cela, il parait intéressant de chercher d'autres options d'affichage. Actuellement il n'existe pas de vrai alternative implémentée directement dans VSCode par PlatformIO ou par Arduino.

C'est pour cela que l'extension **TelePlot** a été développée et sera explicitée dans ce tutoriel : [VScode, platformio port serie](/docs/tutorials/electronics/vscode-port-serie/). 

## Sources

- [Youtube - ElektorTV - How To Use Arduino's Serial Plotter](https://www.youtube.com/watch?v=WnxBNxX_WDc)  
- [ElektorMAG - How-to Use Arduino's Serial Plotter](https://www.elektormagazine.com/labs/how-to-use-arduinos-serial-plotter)
- [TelePlot](https://github.com/nesnes/teleplot)
