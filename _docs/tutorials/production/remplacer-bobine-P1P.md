---
layout: documentation
image: bambulab_p1p.png
hide_hero: false
hero_image: bambulab_p1p.png
hero_darken: true
component_toc: true
doc_header: true
type: doc,tutorial
tag: additive-manufacturing

title: Remplacer une bobine - P1P
subtitle: Comment remplacer une bobine sur une imprimante P1P
description: 
author: Adrien Bracq

time: 1
difficulty: 1

prerequisites:
  - label: Avoir rechargé une bobine
    link: "../change-bobine"

softwares: 
  - label: Aucun
    link: ""

todo: 100
---

## 1.Pourquoi remplacer une bobine de filament ?

En impression 3D, le filament constitue la matière première de vos objets imprimés. Il est consommé en continu tout au long du processus d’impression. Il est donc essentiel de savoir comment remplacer une bobine, et ce pour plusieurs raisons :

- **La bobine est vide :** C’est la situation la plus fréquente. Lorsque le filament arrive à sa fin, il faut impérativement le remplacer pour éviter une impression incomplète ou un arrêt brutal de la machine.
- **Changement de matériau :** Certains projets nécessitent des propriétés spécifiques (flexibilité, résistance à la chaleur, solubilité, etc.) ou des matériaux compatibles avec d’autres (PLA, PETG, TPU, etc.). Changer de bobine permet d’adapter le filament au besoin de la pièce.
- **Changement de couleur :** Que ce soit pour l’esthétique ou pour différencier des parties dans une même impression, il est souvent utile de passer d’une bobine à une autre de couleur différente.
- **Mauvais enroulement ou défaut :** Il peut arriver qu’un filament soit mal enroulé ou endommagé (humidité, cassures, diamètre irrégulier…). Le remplacer préventivement permet d’éviter des incidents pendant l’impression (bourrages, sous-extrusion…).

Maîtriser correctement cette opération est donc un geste de base indispensable pour tout utilisateur d’imprimante 3D, que ce soit dans un cadre pédagogique, personnel ou professionnel.

{% include message.html 
title="Attention" 
message="Suivez scrupuleusement les instructions ci-dessous. La manipulation des bobines de filament nécessite PRÉCISION et DÉLICATESSE.  
Un geste brusque, une mauvaise insertion ou une pièce forcée peut ENDOMMAGER le système d’extrusion ou entraîner une PANNE d’impression.  
  
- Ne forcez JAMAIS l’introduction du filament.  
- Vérifiez le bon alignement et le bon sens d'enroulement.   
- En cas de doute, demandez conseil à un encadrant.  
  
Le non-respect de ces consignes peut rendre la bobine **INUTILISABLE** ou la machine temporairement **HORS SERVICE**." 
status="is-danger" 
dismissable="false" 
icon="fas fa-exclamation-triangle" 
%}

---

## 2. Décharger votre ancienne bobine

{% include message.html 
title="Attention" 
message="Si votre bobine est complètement vide ou **s’il n’y a pas** de bobine dans votre imprimante, vous pouvez passer à l’étape suivante." 
status="is-info" 
dismissable="false" 
%}

{% include step-tuto.html 
greyBackground = true
content="Dans un premier temps, nous allons décharger le filament ou la bobine existante. Pour cela, rendez-vous dans le menu de votre imprimante. Naviguez vers le menu **Extruder**, puis sur **Décharger**, et attendez que la buse chauffe pour continuer la procédure." 
image="image.png"
image_2="image-1.png"
image_3="image-2.png" %}


{% include step-tuto.html 
greyBackground = true
content="Une fois la température atteinte, l’imprimante effectue un mouvement permettant de couper et de rétracter le filament. Attendez la fin de cette séquence : l’imprimante vous demandera alors de retirer le filament de l’extrudeur (voir image). Tirez doucement sur le filament pour l’extraire — il devrait venir sans forcer. Si ce n’est pas le cas, arrêtez immédiatement la procédure et contactez un encadrant. " 
image="image-3.png"
image_2="image-4.png"
image_3="image-5.png" %}


{% include step-tuto.html 
greyBackground = true
content="Une fois le filament retiré de l’extrudeur, insérez son extrémité dans l’une des encoches de la bobine pour éviter qu’il ne se déroule, puis retirez la bobine de son support." 
image="image-6.png"
image_2="image-7.png" %}


{% include message.html 
title="Attention – Ne croisez pas le filament !" 
message="Lorsque vous retirez une bobine, **insérez immédiatement l’extrémité du filament dans une des encoches prévues à cet effet**.  
**Ne le laissez jamais s’enrouler librement autour de la bobine**, et surtout **ne le croisez pas** avec les spires restantes.  
Un filament emmêlé risque de **former un nœud**, ce qui pourrait **bloquer complètement l’imprimante pendant une impression** et **endommager gravement le système d’extrusion**." 
status="is-danger" 
dismissable="false" 
icon="fas fa-exclamation-triangle" 
%}

---

## 3. Charger votre nouveau Filament

{% include step-tuto.html 
greyBackground = true
content="Sélectionnez votre filament et prenez soin de bien vérifier son type (PLA, PETG, TPU, etc.). Assurez-vous qu’il est compatible avec votre imprimante et adapté à l’impression que vous souhaitez réaliser.

Dans le cas de l’utilisation d’un filament spécifique, veillez à retirer votre bobine à la fin de votre impression et à remettre un filament plus standard (comme du PLA) afin de ne pas piéger les utilisateurs suivants.

Une fois votre bobine choisie, placez-la sur le porte-bobine. N’enlevez pas encore le filament de son encoche." 
image="image-8.png" %}


{% include step-tuto.html 
greyBackground = true
content="Dans le menu **Extruder** de l’imprimante, appuyez sur **Charger**, puis attendez que la buse atteigne la température requise." 
image="image-9.png"
image_2="image-10.png" %}


{% include step-tuto.html 
greyBackground = true
content=" Dès que l’imprimante vous indique d’introduire le filament, retirez délicatement l’extrémité de son encoche, puis insérez-le doucement dans l’extrudeur.

Au bout d’un moment, le capteur de l’imprimante détectera la présence du filament et commencera à l’entraîner automatiquement. Vous devriez voir la petite roue jaune de l’extrudeur tourner lentement.

À partir de ce moment, laissez faire la machine et ne poussez plus le filament manuellement.

Si rien ne se passe ou si vous entendez un bruit de claquement, arrêtez immédiatement la procédure et contactez un encadrant. " 
image="image-11.png"
image_2="image-12.png"
image_3="image-13.png" %}

{% include step-tuto.html 
greyBackground = true
content="L’extrudeur va maintenant extruder une petite quantité de filament afin de vérifier que la buse n’est pas bouchée et que le filament a bien été entraîné par les roues d’entraînement.

Vous devriez voir une petite quantité de filament sortir de la buse.

- Si c’est le cas, appuyez sur Fait.
- Si rien ne sort, appuyez sur Réessayer.

⚠️ Si la couleur du filament qui sort n’est pas la même que celle de votre bobine, c’est tout à fait normal : le filament de la bobine précédente sera purgé à l’étape suivante. " 
image="image-14.png" %}

{% include step-tuto.html 
greyBackground = true
content="Une fois le filament inséré, la machine va automatiquement purger l’ancien filament.
Attendez la fin de cette purge ainsi que le nettoyage de la buse par l’imprimante. " 
image="image-15.png"
image_2="image-16.png" %}

---

{% include message.html 
title="Changement de bobine terminé !" 
message="Vous avez terminé le remplacement de votre bobine de filament.  
Avant de lancer votre impression, **assurez-vous que le bon type de filament est bien sélectionné**, que la bobine est libre de tourner, et que le plateau est propre.  

🧼 *Pensez à retirer les restes de filament extrudé autour de la buse pour éviter les résidus sur la première couche.*  
En cas de doute ou de problème, n’hésitez pas à demander conseil à un encadrant." 
status="is-info" 
dismissable="false" 
icon="fas fa-check-circle" 
%}

---

{%
  include card_collections.html
  title="Pour aller plus loin"
  description="Explorez d'autres tutoriels pour approfondir vos connaissances"
  type="tutorial"
%}