import * as THREE from 'three';

import starsTexture from '@/img/backstars.jpg';
import sunTexture from '@/img/sun.png';
import mercuryTexture from '@/img/mercury.jpg';
import venusTexture from '@/img/venus.jpeg';
import earthTexture from '@/img/earth.jpeg';
import marsTexture from '@/img/mars.webp';
import jupiterTexture from '@/img/jupiter.jpg';
import saturnTexture from '@/img/saturn.webp';
import saturnRingTexture from '@/img/saturn ring.png';
import uranusTexture from '@/img/uranus.jpg';
import uranusRingTexture from '@/img/uranus ring.png';
import neptuneTexture from '@/img/neptune.jpg';
import plutoTexture from '@/img/pluto.jpg';

export function solarRender(container) {
    // Camera / Scene / Render / Orbit
	const scene = new THREE.Scene();

	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set(10, 100, 200);
    camera.rotateX(-0.4)
   
	const renderer = new THREE.WebGLRenderer({
        antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize( container.clientWidth, container.clientHeight );
	container.appendChild(renderer.domElement);
    
    // Fond cube
    const cubeStarsTexture = new THREE.CubeTextureLoader();
    scene.background = cubeStarsTexture.load([
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
        starsTexture,
    ])

    // Lumière ambiante
    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    const textureLoader = new THREE.TextureLoader();

    // Soleil
    const sunGeo = new THREE.SphereGeometry(16,30,30);
    const sunMat = new THREE.MeshBasicMaterial({
        map: textureLoader.load(sunTexture),
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.name = 'sun'
    scene.add(sun);
    
    // Creation des planètes
    function createPlanete(size, texture, position, name, ring) {
        const geo = new THREE.SphereGeometry(size, 30, 30);
        const mat = new THREE.MeshStandardMaterial({
            map: textureLoader.load(texture),
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.name = name;
        const obj = new THREE.Object3D();
        obj.name = 'planetParent'
        obj.add(mesh);
        if(ring) {
            const ringGeo = new THREE.RingGeometry(
                ring.innerRadius,
                ring.outerRadius,
                32);

            const ringMat = new THREE.MeshBasicMaterial({
                map: textureLoader.load(ring.texture),
                side: THREE.DoubleSide
            });
            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            obj.add(ringMesh);
            ringMesh.position.x = position;
            ringMesh.rotation.x = -0.5 * Math.PI;

        }
        scene.add(obj);
        mesh.position.x = position;
        return {mesh, obj}
    };

    const mercury = createPlanete(3.2, mercuryTexture, 28, 'mercury');
    const venus = createPlanete(5.8, venusTexture, 44, 'venus');
    const earth = createPlanete(6, earthTexture, 62, 'earth');
    const mars = createPlanete(4, marsTexture, 78, 'mars');
    const jupiter = createPlanete(12, jupiterTexture, 100, 'jupiter');

    const saturn = createPlanete(10, saturnTexture, 132, 'saturn', {
        innerRadius: 10,
        outerRadius: 20,
        texture: saturnRingTexture
    });
    const uranus = createPlanete(7, uranusTexture, 176, 'uranus',{
        innerRadius: 7,
        outerRadius: 12,
        texture: uranusRingTexture
    });
    const neptune = createPlanete(7, neptuneTexture, 200, 'neptune');
    const pluto = createPlanete(2.8, plutoTexture, 216, 'pluto');

    // Sunlight
    const sunlight = new THREE.PointLight(0xFFFFFF, 20000, 8000);
    scene.add(sunlight);

    // Evenement
    const {top, left, width, height} = renderer.domElement.getBoundingClientRect();

    const raycaster = new THREE.Raycaster();
    let planetStop;

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 5);
    scene.add(directionalLight);
    directionalLight.position.set(5, 5, 5)


    function onMouseDown(event) {
        if(!!planetStop) {
            planetStop = null;
            camera.position.set(10, 100, 200);
            camera.lookAt(0, 0, 0)
            sunlight.intensity = 20000;
            return
        }

        const coords = new THREE.Vector2(
            -1 + 2 * (event.clientX - left) / width,
            1 - 2 * (event.clientY - top) / height,
        )

        raycaster.setFromCamera(coords, camera);
        const intersections = raycaster.intersectObjects(scene.children, true);

        if(intersections.length > 0) {
            const selectedObject = intersections[0].object;
            scene.traverse(function(child) {
                if (child instanceof THREE.Mesh && child.name === selectedObject.name) {
                    cameraCenter(child);
                    sunlight.intensity = 0;
                    planetStop = child.parent;
                }
            });
        }
        
    }

    function cameraCenter(object) {
        const boiteEnglobante = new THREE.Box3().setFromObject(object);
        const centreBoite = new THREE.Vector3();
        boiteEnglobante.getCenter(centreBoite);
        const tailleBoite = new THREE.Vector3();
        boiteEnglobante.getSize(tailleBoite);
        const distance = Math.max(tailleBoite.x, tailleBoite.y, tailleBoite.z) / (2 * Math.tan(camera.fov * Math.PI / 360));
        camera.position.copy(centreBoite);
        camera.position.z += distance;
        
        camera.lookAt(centreBoite);
        camera.position.x += tailleBoite.x / 2;
    }

	function animate() {
		requestAnimationFrame( animate );
        // Self-rotation
        sun.rotateY(0.004);
        mercury.mesh.rotateY(0.004);
        venus.mesh.rotateY(0.002);
        earth.mesh.rotateY(0.02);
        mars.mesh.rotateY(0.018);
        jupiter.mesh.rotateY(0.04);
        saturn.mesh.rotateY(0.038);
        uranus.mesh.rotateY(0.03);
        neptune.mesh.rotateY(0.032);
        pluto.mesh.rotateY(0.008);

        // Sun orbiting
        if(!!planetStop) {
            planetStop.rotateY(0);
        } else {
            mercury.obj.rotateY(0.04);
            venus.obj.rotateY(0.015);
            earth.obj.rotateY(0.01);
            mars.obj.rotateY(0.008);
            jupiter.obj.rotateY(0.002);
            saturn.obj.rotateY(0.0009);
            uranus.obj.rotateY(0.0004);
            neptune.obj.rotateY(0.0001);
            pluto.obj.rotateY(0.00007);
        }
        
        container.addEventListener('mousedown', onMouseDown);

		render()
	}

	function render() {
		renderer.render(scene, camera);
	}
	
	animate();
	render();
}
