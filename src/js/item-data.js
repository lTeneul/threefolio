const module1 = { 
  id: 1, 
  url: '/cube', name: 'Module 1: Easy Cube', 
  information: [
    "Création d'un cube rotatif",
    "Setup des paramètres pour l'affichage d'une scène",
    "Ajout de bordure",
    "Setup des axesHelpers",
    "Control de la caméra",
  ],
}

const module2 = { 
  id: 2, 
  url: '/datgui', name: 'Module 2: DatGui', 
  information: [
    "Initialisation de Dat Gui",
    "Animation sur la vitesse",
    "Rebond"
  ],
}

const module3 = { 
  id: 3, 
  url: '/light', name: 'Module 3: Ombre et lumière', 
  information: [
    "Setup de la lumière ambiante",
    "Setup de la lumière directionnel",
    "Setup light helpers"
  ],
}

const module4 = { 
  id: 4, 
  url: '/texture', name: 'Module 4: Texture', 
  information: [
    "Ajout d'une texture sur une scène",
    "Ajout d'une texture sur un objet",
  ],
}

const module5 = {
  id: 5,
  url: '/selection', name: 'Module 5: Séléction',
  information: [
    "Raycast",
    "Permettre à l'utilisateur de séléctionner des objets 3D",
    "Modification des objets à la séléction",
    "DragnDrop, click, mouseover",
    "Layers"
  ]
}

const module6 = {
  id: 6,
  url: '/polygon', name: 'Module 6: Modification de structure',
  information: [
    "Modification du squelette d'un objet",
    "Animation de catte modification"
  ]
}

export const itemData = [
    module1,
    module2,
    module3,
    module4,
    module5,
    module6,
  ];

