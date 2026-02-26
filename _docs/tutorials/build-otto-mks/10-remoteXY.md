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

title: 10 - RemoteXY
subtitle: Piloter son microcontroleur à distance
description: Cette page va vous accompagner dans l'utilisation de RemoteXY vous permettant de piloter votre robot à distance.

time: 3
difficulty: 2

author: Adrien BRACQ & Rémi LACOMBE
---

## Présentation de RemoteXY

[RemoteXY](https://remotexy.com) est une plateforme qui permet de créer des interfaces utilisateur pour contrôler des microcontrôleurs (comme Arduino, ESP32, STM32, etc.) via des appareils mobiles (smartphones ou tablettes). Ces interfaces peuvent inclure des boutons, des curseurs, des joysticks, des indicateurs, etc. 

[RemoteXY](https://remotexy.com) simplifie ainsi la création d'applications interactives sans nécessiter de compétences avancées en développement mobile.

{% include message.html title="Attention" message="L'application [RemoteXY](https://remotexy.com) est gratuite, mais elle est limitée à un maximum de 5 éléments. Pour ajouter davantage d'éléments, vous devrez passer à la version Pro, qui est payante." status="is-warning" dismissable="true" icon="fas fa-triangle-exclamation" %}

## Principe de fonctionnement

**1. Génération de l'Interface**

  Avec RemoteXY, vous créez facilement une interface graphique (GUI) en glissant-déposant des éléments comme des boutons, curseurs ou jauges via son constructeur en ligne. Une fois l’interface prête, un code source préconfiguré est généré, adapté au microcontrôleur utilisé (Arduino, ESP32, etc.).

**2. Communication**

  RemoteXY connecte l’application mobile au microcontrôleur via :
  - Bluetooth (classique ou BLE),
  - Wi-Fi (ESP32, ESP8266),
  - ou USB (connexion filaire).

**3. Code Généré**

  Le code généré contient :
  - La gestion des éléments de l’interface.
  - La configuration du mode de communication choisi.
  - Des outils pour lire/écrire les données entre l’interface et le microcontrôleur.

**4. Interaction**

  Le microcontrôleur échange des données avec l’application mobile :
  - Reçoit des commandes pour exécuter des actions (ex. : allumer une LED, contrôler un moteur).
  - Envoie des informations pour mettre à jour l’interface (ex. : afficher une température).
  
  Cela permet de développer rapidement des systèmes interactifs et évolutifs.

---

## Créer une interface simple

{% include step-tuto.html 
greyBackground = true
content="Dans un premier temps, téléchargez l'application sur votre téléphone, soit depuis l'App Store de votre système mobile, soit directement via la [page web du projet](https://remotexy.com/en/download/).
" 
image="opera_DaVHd25tyT.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Ensuite, rendez-vous sur [la page de l'éditeur d'interface](https://remotexy.com/en/editor/). Vous y trouverez tous les outils nécessaires pour concevoir votre interface. Pour commencer, nous allons créer une application simple permettant de tester un servomoteur à l’aide d’un slider.
" 
image="opera_My1aCr6po0.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Pour cela, glissze déposez un slider sur l'interface et positionnez le à l'endroit désiré. Vous pouvez remarquer sur votre droite des informations liées à ce slider, comme le nom de la variable ou des options graphiques.

changez le nom de variable en `slider_servo_D7`, puis passez l'option `Center position` sur **Middle**.
" 
image="opera_KHtlD6mykG.png" 
image_2="opera_E1a1HH25KZ.png" 
image_3="opera_NaeS40383r.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="Dans **Configuration**, en haut à droite, sélectionnez **Bluetooth**. Une fenêtre s’ouvre pour vous guider dans la configuration de votre projet.

Dans **Board**, sélectionnez votre carte, ici `ESP32 based board`. Dans **Module**, choisissez `Integrated Bluetooth`.

Une fois ces paramètres définis, cliquez sur **Apply** pour valider.
" 
image="opera_3HGQqEByWS.png" 
image_2="opera_uIRiFM7zHV.png" 
image_3="opera_1XT7wIeSdi.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="
Dans l'onglet **Settings**, vous pouvez configurer les paramètres de connexion avec votre appareil. Voici les options disponibles :

- **`Device name in app` :** Le nom de votre équipement tel qu'il apparaîtra dans l'application mobile.  
- **`Access password` :** Le mot de passe d'accès. Ce n'est pas obligatoire, mais fortement recommandé pour sécuriser la connexion.  
- **`Bluetooth name` :** Le nom de votre équipement visible lors de la recherche d'appareils Bluetooth.  
- **`Mode` :** Le type de connexion Bluetooth utilisé, soit classique, soit **LE** (Low Energy), en fonction des capacités de votre appareil.  
" 
image="opera_R8eBXKT4n2.png" 
image_2="opera_QJuRbWld8T.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="
Cliquez ensuite sur **Get Source Code** en haut à droite. Une nouvelle page s'ouvre avec un code généré pour votre application. Cliquez sur download code pour télécharger votre code et l'ouvrir dans l'Arduino IDE, ou copier coller votre code dans un nouveau projet.
" 
image="opera_TkX7x01zw2.png" 
image_2="opera_5wlkOG38W8.png" 
image_3="Arduino_IDE_FKFaHRGvAG.png"
%}

## Adaptez le code généré

Le code généré par RemoteXY contient déjà de nombreuses informations utiles. Avant de le modifier ou de l'adapter à vos besoins, prenons le temps d'examiner sa structure et de comprendre son fonctionnement pas à pas.

Voici une analyse détaillée, ligne par ligne, pour vous aider à mieux appréhender chaque partie du code :

### Explication Détaillée du Code Généré par RemoteXY

#### 1. Activation du mode debug (facultatif)

```cpp
//#define REMOTEXY__DEBUGLOG
```

- Cette ligne, si décommentée, active le mode de débogage.
- Lorsque le mode debug est activé, le programme envoie des messages sur le port série à 115200 bauds pour aider à diagnostiquer les problèmes de communication.

---

#### 2. Sélection du mode de connexion et inclusion des bibliothèques BLE

```cpp
#define REMOTEXY_MODE__ESP32CORE_BLE
#include <BLEDevice.h>
```

- **`REMOTEXY_MODE__ESP32CORE_BLE`** : Configure RemoteXY pour fonctionner en mode **Bluetooth Low Energy (BLE)**, qui est pris en charge par l'ESP32.
- **`#include <BLEDevice.h>`** : Inclut la bibliothèque pour gérer la communication BLE.

---

#### 3. Paramètres de connexion RemoteXY

```cpp
#define REMOTEXY_BLUETOOTH_NAME "Otto-BLE"
#define REMOTEXY_ACCESS_PASSWORD "**************"
```

- **`REMOTEXY_BLUETOOTH_NAME`** : Définit le nom de l'appareil qui apparaîtra lors de la recherche Bluetooth. Ici, l'appareil sera visible sous le nom **"Otto-BLE"**.
- **`REMOTEXY_ACCESS_PASSWORD`** : Définit un mot de passe pour sécuriser l'accès. Ce champ est fortement recommandé pour éviter les connexions non autorisées.

---

#### 4. Configuration de l'interface RemoteXY

```cpp
#include <RemoteXY.h>
#pragma pack(push, 1)
uint8_t RemoteXY_CONF[] =   // 42 bytes
  { 255,1,0,0,0,35,0,19,0,0,0,79,116,116,111,45,71,114,111,117,
  112,101,32,48,50,0,31,1,106,200,1,1,1,0,4,45,37,13,100,32,
  2,26 };
#pragma pack(pop)
```

- **`RemoteXY_CONF[]`** : C'est une configuration générée automatiquement qui définit la disposition et les propriétés des éléments de l'interface graphique (GUI).
  - Ici, la configuration occupe **42 octets**.
  - Elle inclut les détails du slider (position, type, plage de valeurs, etc.).
- **`#pragma pack(push, 1)`** : Assure un alignement des données en mémoire pour optimiser la communication entre l'appareil mobile et le microcontrôleur.

---

#### 5. Structure de données RemoteXY

```cpp
struct {
    // input variables
  int8_t slider_servo_D7; // from -100 to 100

    // other variable
  uint8_t connect_flag;  // =1 if wire connected, else =0

} RemoteXY;
```

- **`struct RemoteXY`** : Structure qui contient les variables liées aux éléments de l'interface :
  - **`slider_servo_D7`** : Variable correspondant à la position du slider. Elle varie de **-100 à 100**, ce qui peut être utilisé pour contrôler un servomoteur.
  - **`connect_flag`** : Indique l'état de la connexion Bluetooth :
    - `1` : L'appareil est connecté.
    - `0` : Aucun appareil n'est connecté.

---

#### 6. Fonction `setup()`

```cpp
void setup() 
{
  RemoteXY_Init (); 
  // TODO you setup code
}
```

- **`RemoteXY_Init()`** : Initialise la communication Bluetooth et configure les éléments de l'interface graphique définis dans **`RemoteXY_CONF[]`**.
- Vous pouvez ajouter ici des lignes de configuration supplémentaires pour initialiser d'autres périphériques (comme un servomoteur).

---

#### 7. Fonction `loop()`

```cpp
void loop() 
{ 
  RemoteXY_Handler ();
  // TODO you loop code
  // use the RemoteXY structure for data transfer
  // do not call delay(), use instead RemoteXY_delay() 
}
```

- **`RemoteXY_Handler()`** : 
  - Cette fonction traite les données échangées entre le microcontrôleur et l'application mobile.
  - Elle met à jour les valeurs des variables de la structure RemoteXY en fonction des interactions de l'utilisateur.
- **`TODO` Comments** : Ces sections servent à ajouter vos propres instructions pour interagir avec les variables (par exemple, déplacer un servomoteur selon la position du slider).

**Important :** La fonction **`delay()`** classique n'est pas compatible avec RemoteXY, car elle bloque le fonctionnement. Utilisez plutôt **`RemoteXY_delay()`** pour gérer les temporisations.

---

#### Résumé du Fonctionnement
1. **Configuration :** Le code initialise la communication Bluetooth avec le nom et le mot de passe définis.
2. **Interface graphique :** Un slider est configuré pour envoyer des valeurs de -100 à 100.
3. **Échanges de données :**
   - Les valeurs du slider sont mises à jour dans la structure **`RemoteXY.slider_servo_D7`**.
   - Vous pouvez utiliser cette variable pour contrôler un servomoteur connecté à la broche D7.
4. **Personnalisation :** Le programme est prêt pour l'ajout de fonctionnalités dans les sections **`setup()`** et **`loop()`**.

De manière générale, si vous modifiez l'interface, il n'est pas nécessaire de reprendre l'intégralité du code. Seule la partie liée à la configuration de l'interface graphique (GUI) doit être mise à jour et adaptée pour refléter les changements effectués.

```cpp
// RemoteXY GUI configuration  
#pragma pack(push, 1)  
uint8_t RemoteXY_CONF[] =   // 42 bytes
  { 255,1,0,0,0,35,0,19,0,0,0,79,116,116,111,45,71,114,111,117,
  112,101,32,48,50,0,31,1,106,200,1,1,1,0,4,45,37,13,100,32,
  2,26 };
// this structure defines all the variables and events of your control interface 
struct {
    // input variables
  int8_t slider_servo_D7; // from -100 to 100
    // other variable
  uint8_t connect_flag;  // =1 if wire connected, else =0
} RemoteXY;   
#pragma pack(pop)
```

### Modification du code

Pour ajouter le pilotage d’un servomoteur connecté à la broche **D7** sur un **ESP32**, en utilisant la valeur du slider généré par RemoteXY, voici les lignes à ajouter ou modifier dans le code :

---

#### 1. Inclure la bibliothèque Servo
Ajoutez la bibliothèque **ESP32Servo.h** en haut du code pour permettre le contrôle du servomoteur.

```cpp
#include <ESP32Servo.h>
```

---

#### 2. Déclarer un objet Servo
Déclarez un objet pour représenter le servomoteur et une constante pour la broche **D7**.

```cpp
Servo servoD7; // Création d'un objet Servo
const int servoPinD7 = D7; // Définir la broche D7
```

---

#### 3. Initialiser le servomoteur dans `setup()`
Ajoutez l'instruction pour attacher le servomoteur à la broche D7 dans la fonction **`setup()`**.

```cpp
void setup() 
{
  RemoteXY_Init();
  servoD7.attach(servoPinD7); // Attacher le servomoteur à la broche D7
  servoD7.write(90); // Positionner le servo au milieu (90°) au démarrage
}
```

---

#### 4. Piloter le servomoteur dans `loop()`
Ajoutez le code dans la fonction **`loop()`** pour lire la valeur du slider et l’utiliser pour contrôler le servomoteur. Convertissez la valeur du slider (de -100 à 100) en un angle (de 0° à 180°).

```cpp
void loop() 
{ 
  RemoteXY_Handler();
  // Convertir la valeur du slider (-100 à 100) en angle (0° à 180°)
  int angle = map(RemoteXY.slider_servo_D7, -100, 100, 0, 180);
  // Piloter le servomoteur avec l'angle correspondant
  servoD7.write(angle);
}
```

---

#### 5. Téléverser le programme

{% include step-tuto.html 
greyBackground = true
content="
Une fois le programme modifié, vous pouvez téléverser le code dans la carte et lancer l'application. N'oubliez pas d'installer la librairie `RemoteXY` dans l'IDE Arduino.
" 
image="Arduino_IDE_PQpeD0Fh7H.png" 
%}

---

### Connection avec l'application

{% include step-tuto.html 
greyBackground = true
content="
Sur votre téléphone, ouvrez l'application **RemoteXY**. Appuyez sur **+ - Add new device**, puis sélectionnez **Bluetooth**. Choisissez la technologie Bluetooth correspondant à celle configurée précédemment dans l'éditeur (classique ou BLE). Votre appareil devrait apparaître dans la liste des connexions Bluetooth. Appuyez sur son nom pour vous connecter, puis saisissez le mot de passe si nécessaire.
" 
image="Screenshot_2025-01-28-12-16-37-380_com.shevauto.remotexy.free.jpg" 
image_2="Screenshot_2025-01-28-12-17-05-885_com.shevauto.remotexy.free.jpg" 
image_3="Screenshot_2025-01-28-12-17-13-157_com.shevauto.remotexy.free.jpg" 
image_4="Screenshot_2025-01-28-12-17-19-959_com.android.companiondevicemanager.jpg" 
%}

{% include step-tuto.html 
greyBackground = true
content="
Une fois connecté, votre application devrait s’afficher sur votre téléphone. Essayez de déplacer le slider : le servomoteur devrait réagir en suivant les mouvements du slider, ajustant sa position en conséquence.
" 
image="Screenshot_2025-01-28-12-17-26-644_com.shevauto.remotexy.free.jpg" 
%}

---

## Recevoir des informations

Dans les chapitres précédents, nous avons vu comment récupérer la distance du capteur ultrason. Nosu allons ici adapter l'interface afin d'afficher cette distance sur votre téléphone.

{% include step-tuto.html 
greyBackground = true
content="
Ajoutez un élément **Value** et donnez lui le nom **distance_sensor**.
" 
image="opera_NjHXzjTf3p.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="
Générez le code et copiez uniquement les éléments destinés aux modifications de l'interface. 
" 
image="opera_puto4kEddp.png"
image_2="Arduino_IDE_js90QMENOq.png" 
%}

{% include step-tuto.html 
greyBackground = true
content="
Ajoutez les lignes de code nécessaires pour récupérer la distance mesurée par le capteur. Veillez à remplacer les `delay()` par des `RemoteXY_delay()` si nécessaire. Évitez d'utiliser la liaison série dans ce cas. Nous utiliserons la variable `RemoteXY.distance_sensor`.

Relancez l'application. Vous devriez voir la distance mesurée par votre capteur s'afficher en dessous.
" 
image="Arduino_IDE_AxTCUKLp6v.png"
image_2="Screenshot_2025-01-28-12-47-15-711_com.shevauto.remotexy.free.jpg"
%}

---

{% include message.html 
title="A faire" 
message="
- Créer un programme et une application pour piloter le Otto
- Adapter le Otto au règlement des différentes compétitions
" 
status="is-info" 
icon="fas fa-pen" %}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Trouvez d'autres tutoriels en lien avec le projet"
  type="tuto"
%}