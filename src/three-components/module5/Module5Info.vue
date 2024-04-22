<script setup>
import { ref } from 'vue'
    let isAllInfodisplay = ref(false);
</script>

<template>
    <p><span class="highlight-text">Selection des objets</span><br>Un point important de threeJs après la création des objets, il faut pouvoir les séléctionner si besoin,
    On va pour cela utiliser "Raycast" qui va tracer une ligne depuis la sortis de la caméra jusqu'au bout de la scene et ainsi "tracker" tous les objets se trouvant en contact de la ligne.
    </p>
    <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    <pre v-if="isAllInfodisplay">
        <code>
const cylinders = new THREE.Group();
cylinders.add(createMesh(cylindersGeometry, material, 3, 2, 5, 'Cylindre A', 1))
cylinders.add(createMesh(cylindersGeometry, material, 7.5, 2, 5, 'Cylindre B', 1))
cylinders.add(createMesh(cylindersGeometry, material, 4.5, 6, 5, 'Cylindre C', 1))
scene.add(cylinders);

const boxes = new THREE.Group();
const boxGeometry = new THREE.BoxGeometry(4, 4, 4);
boxes.add(createMesh(boxGeometry, material, -3, 2, 8, 'Cube A', 0));
boxes.add(createMesh(boxGeometry, material, -7, 2, 8, 'Cube B', 0));
boxes.add(createMesh(boxGeometry, material, -7, 6, 8, 'Cube C', 0));
scene.add(boxes);
<div class="code-com">// On commence par créer nos groupes d'objet, ça sera plus simple pour les séléctionner</div>
container.addEventListener('mousedown', onMouseDown);
<div class="code-com">// Pour le click, on ajoute un event</div>
function onMouseDown(event) {
        if(draggable) {
            draggable = null;
            return;
        }
        raycaster.layers.set(1);
<div class="code-com">// Pour raycaster on va d'abord lui dire qu'elle couche on souhaite viser ici la "1"</div>
        const coords = new THREE.Vector2(
            -1 + 2 * (event.clientX - left) / width,
            1 - 2 * (event.clientY - top) / height,
        )
<div class="code-com">// Puis on setup les coordonnés de notre cursor dans le plan du container, raycaster accepte des valeurs comprisent entre -1 et 1</div>
        raycaster.setFromCamera(coords, camera);
        const intersections = raycaster.intersectObjects(scene.children, true);
<div class="code-com">// On "vise" les objets vers les coordonnés du curseur</div>
        if(intersections.length > 0) {
            const selectedObject = intersections[0].object;
            if(selectedObject.name != 'Sphere') {
                const randColor = new THREE.Color(Math.random(), Math.random(), Math.random());
                selectedObject.material.color = randColor;
            } else {
                draggable = selectedObject;
            }
        }
    }
<div class="code-com">// Puis on applique un traitement quand un objet correspondant aux coordonnés est touché (dans ce cas juste un changement de couleur)</div>
<div class="code-com">// Pour le mouseOver c'est exactement la même chose avec un event differents, et pour le dragNdrop on combine simplement les deux evenements</div>
const {top, left, width, height} = renderer.domElement.getBoundingClientRect();
const raycaster = new THREE.Raycaster();
const moveMouse = new THREE.Vector2();
<div class="code-com">// On oublie pas de définir nos variables vectoriel ainsi que raycaster</div>
sphere.layers.set(1);
<div class="code-com">// Setup des layers</div>

        </code>
        <p @click="isAllInfodisplay = !isAllInfodisplay" class="more-separator">...</p>
    </pre>
</template>