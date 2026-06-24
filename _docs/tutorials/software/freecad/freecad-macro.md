---
layout: documentation
image: FreeCad(3).png
hide_hero: false
hero_image: FreeCad(3).png
hero_darken: true
component_toc: true
background_color: '#f7f4ed'

title: FreeCAD (3) - Macros
subtitle: Création et programmation de macros
description: Documentaiton sur la creation de macros dans freeCAD
tags: freecad
type: doc,cao

time: 5
difficulty: 5
compatibilities-os: win,mac,lin

prerequisites:
  - label: Aucun
    link: ""

softwares: 
  - label: FreeCAD
    link: "https://www.freecad.org"

todo: 5
---


{% include message.html 
icon="fas fa-info-circle"
title="Notes"
message="Cette page ne traitera que du paramétrage de la version *link-branch* de [RealThunder](https://github.com/realthunder/FreeCAD_assembly3). Attention à la version utilisée spécifiée ci-dessous. " 
status="is-info" %}

{% include message.html 
icon="fas fa-info-circle"
title="Work In Progress..."
message="La documentation n'est pas terminée ! " 
status="is-danger" %}

<div class="control">
   <div class="tags has-addons">
        <span class="tag is-dark is-medium">FreeCAD_assembly3</span>
        <span class="tag is-info is-medium has-text-black"><a href="https://github.com/realthunder/FreeCAD_assembly3/releases/tag/0.11" style="color:white">2021.10.15</a></span>
        <span class="tag is-dark is-medium">
            <p class="icon">
                <i class="fab fa-github"></i>
            </p>
        </span>
    </div>
</div>

## 1. XXXXXXXX

En-tête de base.
```python
__title__   = " "
__author__  = ""
__version__ = ""
__date__    = ""
__url__     = ""
__Comment__ = ""
__Communication__ = ""
__IconL__  = ""
__IconW__  = ""
```
Code de base pour affichage d'une fenêtre dockée sur la droite.
``` python
import sys
from PySide import QtGui ,QtCore 

FCmw = FreeCADGui.getMainWindow()
myNewFreeCADWidget = QtGui.QDockWidget() # create a new dckwidget

##########################
class myWidget_Ui(object):
  def setupUi(self, myWidget):
    # Setup the Widget
    myWidget.setObjectName("myWidget")
    myWidget.resize(QtCore.QSize(350,100).expandedTo(myWidget.minimumSizeHint())) # sets size of the widget
    myWidget.setWindowTitle("My Panel")

##########################
#  Load and Setup the UI
myNewFreeCADWidget.ui = myWidget_Ui() # load the Ui script
myNewFreeCADWidget.ui.setupUi(myNewFreeCADWidget) # setup the ui
FCmw.addDockWidget(QtCore.Qt.RightDockWidgetArea,myNewFreeCADWidget) # add the widget to the main window
```



## 2. Avec l'interface QT creator

Télécharger QT Creator avec la licence "openSource"

Attention à ne pas oublier de mettre un layout global pour voir le panel en entier et éviter cela : 
![](2022-01-04-14-50-16.png)
Pour se faire dans QT verifier dans les objets qu'il n'y a pas de layouts cassés ou non définit. Si oui (voir image), alors clic droit sur l'objet > Mettre en page et choisissez la mise en page
![](2022-01-04-15-00-32.png)
![](2022-01-04-15-01-25.png)
Résultat : ![](2022-01-04-15-13-09.png)

Code minimum d'intégration :

``` python

import FreeCAD ,FreeCADGui ,Part

# CHANGE THE LINE BELOW
path_to_ui = "C:/...Chemin.../form.ui"
 
class BoxTaskPanel:
   def __init__(self):
       # this will create a Qt widget from our ui file
       self.form = FreeCADGui.PySideUic.loadUi(path_to_ui)

        
panel = BoxTaskPanel()
FreeCADGui.Control.showDialog(panel)

``` 


---
## X. Aller plus loin

**Macros intéressantes**

- [FCInfo](https://wiki.freecadweb.org/Macro_FCInfo/fr)
- 

**Tutoriels**

- [Tuto d'origine FreeCAD](https://wiki.freecadweb.org/Manual:Creating_interface_tools)
- [QT exemple sous FreeCAD](https://wiki.freecadweb.org/Qt_Example)
- 
