---
layout: documentation
hide_hero: false
hero_image: image.png
hero_darken: true
image: image.png
component_toc: true
doc_header: true
type: tutorial
tag: otto-mks

title: 07 - Capteur ultrason et liaison série
subtitle: Récupérer une information et l'afficher
description: Cette page va vous accompagner dans l'utilisation de la liaison série et du capteur ultrason.

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---
# Introduction à la liaison série

## Qu'est-ce qu'une liaison série ?

La liaison série est un protocole de communication permettant d'échanger des données entre deux dispositifs en transmettant les informations bit par bit sur une seule ligne de données. Elle est largement utilisée dans les systèmes embarqués, les communications entre microcontrôleurs et ordinateurs, ainsi que dans de nombreux équipements électroniques.

Contrairement à une liaison parallèle, qui transmet plusieurs bits simultanément sur plusieurs lignes, la liaison série envoie les données séquentiellement, ce qui réduit le nombre de fils nécessaires et permet des transmissions sur de plus longues distances.

## Comment fonctionne une liaison série ?

La communication série repose sur l'envoi et la réception de données en série, selon un protocole défini. Les paramètres clés d'une liaison série sont :

- **Baud rate (débit en bauds)** : définit la vitesse de transmission en bits par seconde (bps). Par exemple, 9600 bauds signifie 9600 bits par seconde.
- **Bits de données** : nombre de bits utilisés pour représenter chaque caractère (généralement 8 bits).
- **Bit de parité** : optionnel, permet de détecter les erreurs de transmission.
- **Bits de stop** : marquent la fin d'un caractère pour signaler à l'autre dispositif qu'une nouvelle transmission peut commencer.

En général, une liaison série utilise deux fils principaux :

- **TX (transmission)** : pour envoyer des données.
- **RX (réception)** : pour recevoir des données.

Sur les modules ESP32 de type XIAO et autres, la liaison série peut être réalisée via le câble USB. Cette connexion USB repose sur un convertisseur série-USB intégré, qui permet de transformer une liaison série classique en USB. L'utilisation de ce convertisseur nécessite parfois l'installation de pilotes spécifiques sur l'ordinateur.

De plus, cette liaison série est généralement utilisée pour charger les programmes dans la carte depuis un IDE comme l'Arduino IDE, facilitant ainsi le développement et le débogage.

## Comment envoyer des informations sur une liaison série

Sur les plateformes comme l'Arduino ou l'ESP32, la communication série est gérée par un port série matériel ou logiciel. Voici comment envoyer des informations via une liaison série en utilisant l'Arduino IDE.

### Exemple de code en Arduino

```cpp
void setup() {
  Serial.begin(9600);  // Initialisation de la liaison série à 9600 bauds
  Serial.println("Démarrage de la communication série");
}

void loop() {
  Serial.println("Bonjour, ESP32 !");  // Envoie un message sur la liaison série
  delay(1000);  // Attendre 1 seconde avant d'envoyer à nouveau
}
```

### Explication du code

1. **`Serial.begin(9600);`** → Initialise la liaison série à 9600 bauds.
2. **`Serial.println("Démarrage de la communication série");`** → Envoie un message d'initialisation.
3. **`Serial.println("Bonjour, ESP32 !");`** → Envoie un message toutes les secondes.
4. **`delay(1000);`** → Ajoute un délai d'une seconde avant le prochain envoi.

En utilisant le moniteur série de l'IDE Arduino, il est possible de voir les messages envoyés par la carte et de les utiliser pour le débogage et la communication avec d'autres dispositifs.

{% include step-tuto.html
greyBackground = true
content="Pour cela, cliquez en haut à droite sur **Serial Monitor** ![alt text](Arduino_IDE_Ld1OnYlOJU.png). En onglet s'ouvre en dessous de votre fenêtre à coté de l'onglet Output vous montrant les éléments envoyés par votre carte. 
"
image="Arduino_IDE_cnrdkHFnpj.png"
%}

{% include message.html 
title="Attention" 
message="La communication série étant partagée avec le téléversement du code, il faudra fermer l'onglet de communication série avant de pouvoir téléverser de nouveau votre code." 
status="is-danger" 
icon="fas fa-triangle-exclamation" %}

---

La liaison série est un moyen simple et efficace d'échanger des données entre différents composants électroniques, avec une mise en œuvre facile sur des plateformes comme l'Arduino et l'ESP32. Nous allons maintenant l'utiliser pour envoyer des informations provenant du capteur ultrason.

---

## Test du capteur à ultrason

Les capteurs à ultrasons sont des dispositifs couramment utilisés pour mesurer des distances en envoyant des impulsions sonores et en mesurant le temps nécessaire à leur retour après réflexion sur un obstacle. Ils sont très populaires dans les applications de robotique et de détection d'obstacles.

### Principe de fonctionnement

Un capteur à ultrasons fonctionne sur le principe de l'écholocation :

1. Une impulsion sonore est émise par le capteur via la broche **Trig**.
2. Cette impulsion se propage dans l'air à une vitesse d'environ 343 m/s.
3. Lorsqu'elle rencontre un obstacle, elle est réfléchie vers le capteur.
4. Le capteur détecte l'écho via la broche **Echo**, et le temps de trajet aller-retour est mesuré.

En utilisant la formule suivante, on peut calculer la distance de l'objet en fonction du temps de trajet et de la vitesse du son dans l'air :

``` Distance = (Temps aller-retour × Vitesse du son) / 2 ```

Où la vitesse du son dans l'air est d'environ 343 m/s à température ambiante.

### Connexion du capteur à l'ESP32

Nous allons utiliser les broches suivantes pour connecter notre capteur ultrasonique :

```cpp
const int trig_pin = D2;
const int echo_pin = D1;
```

### Approche pour obtenir la mesure

Pour mesurer la distance, nous allons suivre les étapes suivantes :

1. Configurer les broches du capteur (Trig en sortie et Echo en entrée).
2. Envoyer une impulsion ultrasonique sur la broche Trig.
3. Mesurer la durée de retour sur la broche Echo.
4. Convertir cette durée en distance.

Voici un exemple de code permettant de réaliser ces étapes :

```cpp
const int trig_pin = D2;
const int echo_pin = D1;

void setup() {
  Serial.begin(9600);
  pinMode(trig_pin, OUTPUT);
  pinMode(echo_pin, INPUT);
}

void loop() {
  digitalWrite(trig_pin, LOW);
  delayMicroseconds(2);
  digitalWrite(trig_pin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig_pin, LOW);

  long duration = pulseIn(echo_pin, HIGH);
  float distance = (duration * 0.0343) / 2;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  delay(1000);
}
```

### Explication du code

1. **Initialisation** : On configure la liaison série et les broches du capteur.
2. **Émission d'impulsion** : Une impulsion de 10 µs est envoyée sur la broche Trig.
3. **Mesure du temps de retour** : La fonction `pulseIn()` mesure la durée pendant laquelle l'écho est reçu.
4. **Calcul de la distance** : La durée est convertie en distance.
5. **Affichage** : La distance mesurée est affichée sur le moniteur série.

Cette solution permet de détecter des objets et d'obtenir leur distance avec précision.

---

{% include message.html 
title="A faire" 
message="
**Niveau 1 :**
- Créez une fonction permettant de récupérer la distance du capteur et de la retourner
- Créez une fonction permettant d'afficher la distance

**Niveau 2 :**
- Créez un booléen global `debug` qui, quand il est mis à `true` affiche la distance mesurée dans la fonction d'affichage sur le port série

Cette variable pourra être utilisée dans le code pour activer ou non l'affichage d'éléments de debug sur le port série." 
status="is-info" 
icon="fas fa-pen" %}


---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}