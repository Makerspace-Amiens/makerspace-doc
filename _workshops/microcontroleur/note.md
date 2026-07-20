Voici la note de cadrage complète.

---

# Module Microcontrôleurs - Note de cadrage

**Public :** étudiants prépa ingénieur, école d'ingénieur (techniques électroniques, microcontrôleur, dev embarqué)
**Matériel cible :** ESP32-S3 sur breadboard puis PCB
**Framework :** Arduino-ESP32
**Structure :** CM 4,5h → TD 10,5h (4 séances) → Projet par binômes
**Fil conducteur :** un mini-jeu type Gameboy. TD = Pong 2 joueurs local ; Projet = Snake multijoueur asymétrique (un joueur sur la console, un sur navigateur).

---

## 1. CM - Introduction aux microcontrôleurs (4,5h)

**Format :** conceptuel-d'abord, zéro code jusqu'au Ch. 5. Le blink commenté ligne par ligne est la récompense finale qui relie tous les concepts.

**Deux fils rouges :**
1. *Du concept à l'objet* - chaque notion incarnée par une démo physique (LED, bouton, joystick affichant 0–4095 au projecteur).
2. *Le schéma-bloc unique* - dessiné au Ch. 1 (CPU / Flash / RAM / périphériques), ré-affiché à chaque chapitre en surlignant la brique du jour.

| Ch. | Titre | Durée | Contenu clé |
|---|---|---|---|
| 0 | Introduction / contexte | 20 min | µC partout ; µC vs microprocesseur vs ordinateur ; positionnement ESP32 ; annonce projet |
| 1 | Architecture d'un µC | 45 min | CPU, bus, mémoires, périphériques ; Flash vs RAM ; le registre comme interface logiciel/matériel ; horloge & cycle ; survol ESP32-S3 ; **tracé du schéma-bloc fil rouge** |
| 2 | GPIO & monde numérique | 40 min | E/S tout-ou-rien ; niveaux 0/3,3V (vs 5V Arduino) ; piloter une LED ; lire un bouton ; **pull-up/pull-down & état flottant** ; courant max par pin |
| - | Pause | 10 min | |
| 3 | Analogique → numérique | 40 min | ADC : échantillonnage, résolution 12 bits (0–4095), joystick ; **piège ADC2/WiFi** ; PWM : faux analogique (LED, son, servos) |
| 4 | Communiquer : bus série | 40 min | Pourquoi pas 30 fils ; UART (moniteur série) ; I2C (adressage) ; SPI (rapide, écran du projet) ; savoir choisir/reconnaître un bus |
| 5 | Du matériel au logiciel | 35 min | Cycle code → compil → flash → exécution ; toolchain & framework ; `setup()`/`loop()`, boucle infinie, absence d'OS ; **blink commenté ligne par ligne** |
| 6 | Ouverture & cadrage projet | 15 min | Présentation projet, matériel, binômes ; démo prototype si possible |

**Total : ≈4h05 + 25 min de marge.**
*Compressible :* Ch. 1 (détail Xtensa dual-core pas vital hors FreeRTOS).
*Prérequis :* bases d'électricité (tension, courant, résistance, loi d'Ohm). Sinon Ch. 0bis de ~20 min.

---

## 2. TD - ESP32-S3 sur breadboard (10,5h / 4 séances)

**Principe :** chaque TD ajoute **un** périphérique au montage précédent. Câblage commun et figé pour tous (mêmes pins, des TD au projet).
**Cible :** Pong 2 joueurs local (plus simple que Snake, et garde le Snake du projet « neuf »).

| TD | Durée | Thème | Contenu clé | Sortie de séance |
|---|---|---|---|---|
| 1 | 1,5h | Sas toolchain + GPIO | Install Arduino-ESP32 (drivers/carte/port) ; **blink validé individuellement** ; LED + résistance si temps | Chacun a flashé un blink |
| 2 | 3h | Entrées : boutons + joystick + série | Bouton pull-up interne, anti-rebond léger ; moniteur série = outil de debug ; ADC potentiomètre ; joystick = 2 ADC + bouton sur **ADC1** ; détection directions | Joystick + boutons lus, directions détectées |
| 3 | 3h | Écran SPI + game loop | Câblage SPI (ST7789/ILI9341) ; **TFT_eSPI avec `User_Setup` fourni identique pour tous** ; primitives (texte, formes, coordonnées) ; sprite au joystick ; game loop (lire→màj→redessiner), `millis()` non-bloquant, redessin sans clignotement → **balle qui rebondit** | Une raquette + balle qui rebondit |
| 4 | 3h | Animation + collisions + boutons + FSM | Consolidation game loop ; **collision balle/raquette** (test d'intersection - à expliquer au tableau) ; 2e raquette ; score ; structuration code (entrées/état/rendu) ; **machine à états du jeu** (FSM : `MENU` → `PARTIE` → `GAME_OVER`, le `switch(state)` dans la game loop) | **Pong 2 joueurs complet avec écrans menu / partie / fin** |

*Points de vigilance :* TD1 → install en travail perso **avant** la séance (les 1,5h servent à valider, pas télécharger). TD3 → `User_Setup` TFT_eSPI clé en main, testé sur le matériel exact (goulot d'étranglement). Câblage figé dès le TD1. Joystick sur ADC1 (WiFi du projet).

**Sur la FSM (TD4) :** concept fondamental de l'embarqué (modes, protocoles, séquencements) découvert via un jeu où il est intuitif ; transforme la bidouille en vrai jeu (début/fin propres) ; et prépare directement le projet (accueillera les états réseau du Snake). *Vigilance vocabulaire :* le mot « état » désigne deux choses dans la séance - nommer distinctement « données du jeu » (variables) vs « phase du jeu » (FSM) pour éviter la confusion.

---

## 3. Projet - Snake multijoueur (par binômes)

**Objectif :** partir de zéro sur une mécanique neuve (Snake), transférer la chaîne maîtrisée en TD (entrées → état → rendu → game loop → FSM), puis ajouter le multijoueur asymétrique navigateur/console. L'infra réseau (WebSocket, serveur web) est **fournie en squelette** : ils se concentrent sur le jeu, pas sur la plomberie.

**Architecture à deux fils parallèles** (pas séquentiels) :

### Fil logiciel (cœur du projet)
1. Snake mono-joueur sur breadboard (consolidation autonome de tout le TD).
2. Ajout de la couche réseau/navigateur (squelette fourni) → multijoueur asymétrique : un joueur sur la console, un sur une interface graphique dans le navigateur. Les états réseau (`ATTENTE_NAVIGATEUR`, `CONNECTÉ`, `DÉCONNEXION`) s'intègrent dans la FSM apprise au TD4.

### Fil matériel (compétence transverse, menée à côté)
1. **Conception KiCad** - base de schéma fournie à compléter (pas de page blanche) :
   - Pré-placé/pré-routé par toi : ESP32-S3, alim, régulateur, USB, boot straps, découplage, pistes critiques (alim, USB différentiel).
   - Laissé aux étudiants : ce qu'ils ont vécu en breadboard - boutons, joystick, connecteur écran, pull-ups, et routage des signaux lents.
   - Boucle d'apprentissage : geste breadboard → symbole → footprint → cuivre.
2. **Bascule sur jalon** - quand un binôme a « bien avancé » (ticket d'entrée type « schéma complété + routage à X % / DRC passant », idéalement + revue 5 min/binôme), tu lui donnes **une carte que tu as routée toi-même, fonctionnelle garantie**. Le PCB soudé n'est **pas** celui qu'ils ont routé.
3. **Soudure partielle** sur la carte de référence :
   - Pré-soudé/testé par toi : fin & central (puce/module ESP32-S3, régulateur, USB).
   - Laissé aux étudiants : le pardonnant (boutons, connecteurs, headers, passifs larges 0805/1206).

**Statut du travail KiCad :** livrable **évalué en soi** (propreté, règles, placement, routage), **pas** un prérequis matériel. À annoncer clairement pour enlever la pression du « est-ce que ça marche ».

*Points de vigilance :* PCB **jamais** en début de projet (goulot). Carte de référence fabriquée avec **marge** (cartes de rab pour casse/erreurs). **Cohérence des pins** obligatoire sur les 3 supports : breadboard TD, squelette KiCad, carte de référence.

---

## Vue d'ensemble de la progression

| Phase | Volume | Aboutissement | Compétence acquise |
|---|---|---|---|
| CM | 4,5h | Carte mentale du µC | Concepts : archi, GPIO, ADC/PWM, bus, chaîne de dev |
| TD | 10,5h | Pong 2 joueurs local + FSM | Chaîne complète entrées → état → rendu → game loop → FSM |
| Projet | binômes | Snake multijoueur + PCB soudé | Transfert autonome + réseau + KiCad + soudure |

---

## Briques encore ouvertes
- Partage précis du schéma KiCad : pré-rempli vs à compléter.
- Fiche de câblage / pins commune (cohérente sur les 3 supports : breadboard, KiCad, carte de référence).
- BOM matérielle.