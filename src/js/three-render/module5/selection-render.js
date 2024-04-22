import * as THREE from 'three';

export function selectionRender(container) {
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.shadowMap.enabled = true;

    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
        30,
        container.clientWidth / container.clientHeight,
        0.4,
        -1000
    );
    camera.layers.enable(1);
    camera.position.set(0, 20, 60);
    camera.rotation.x = -0.2

    const planeGeometry = new THREE.PlaneGeometry(30, 30);
    const planeMaterial = new THREE.MeshStandardMaterial({
        color: 0x77B0AA,
        side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);
    plane.rotation.x = -0.5 * Math.PI;
    plane.name = 'floor';
    plane.receiveShadow = true
 
    const ambientLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    scene.add(directionalLight);
    directionalLight.position.set(-50, 50, 0);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.bottom = -12;

    function createMesh(geometry, material, x, y, z, name, layer) {
        const mesh = new THREE.Mesh(geometry, material.clone());
        mesh.position.set(x, y, z);
        mesh.name = name;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.layers.set(layer);
        return mesh;
    }
    const cylindersGeometry = new THREE.CylinderGeometry(2, 2, 4);
    const material = new THREE.MeshLambertMaterial();

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

    const sphereGeometry = new THREE.SphereGeometry(3);
    const sphere = new THREE.Mesh(sphereGeometry, material);
    scene.add(sphere);
    sphere.position.y = 10;
    sphere.name = 'Sphere';
    sphere.layers.set(1);
    boxes.rotation.y = -0.3;

    const {top, left, width, height} = renderer.domElement.getBoundingClientRect();

    const raycaster = new THREE.Raycaster();
    const moveMouse = new THREE.Vector2();
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', event => {
        moveMouse.x = -1 + 2 * (event.clientX - left) / width;
        moveMouse.y = 1 - 2 * (event.clientY - top) / height;
        onMouseMove(moveMouse);
    });
    var draggable;

    function onMouseDown(event) {
        if(draggable) {
            draggable = null;
            return;
        }
        raycaster.layers.set(1);
        const coords = new THREE.Vector2(
            -1 + 2 * (event.clientX - left) / width,
            1 - 2 * (event.clientY - top) / height,
        )

        raycaster.setFromCamera(coords, camera);
        const intersections = raycaster.intersectObjects(scene.children, true);
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

    function onMouseMove (coords) {
        raycaster.layers.set(0);

        raycaster.setFromCamera(coords, camera);
        const intersections = raycaster.intersectObjects(boxes.children, true);

        if(intersections.length > 0) {
            const selectedObject = intersections[0].object;
            const randColor = new THREE.Color(Math.random(), Math.random(), Math.random());
            selectedObject.material.color = randColor;
        }
    }

    function dragObject() {
            if (!!draggable) {    
            raycaster.setFromCamera(moveMouse, camera);
            var intersects = raycaster.intersectObjects(scene.children, false);
            
            if(intersects.length > 0) {
                draggable.position.x = intersects[0].point.x;
                draggable.position.z = intersects[0].point.z;
            }
        }
    }
    
    function animate() {
        requestAnimationFrame(animate);
        dragObject();
        render();
    }
    function render() {
        renderer.render(scene, camera);
    }
      
    animate();
    render();
}
