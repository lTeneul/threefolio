import * as THREE from 'three';
import gsap from 'gsap';

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

import vertexShader from '@/shaders/vertex.glsl';
import fragmentShader from '@/shaders/fragment.glsl'
import atmosphereVertexShader from '@/shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '@/shaders/atmosphereFragment.glsl'

export function solarRender(container) {
    // Camera / Scene / Render / Orbit
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set(-30, 20, 200);
    gsap.to(camera.position, {
        x: 0,
        y: 100,
        z: 200,
        duration: 1.5
    })
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

    const planetTab = [];

    // Soleil
    const sunGeo = new THREE.SphereGeometry(16,30,30);
    const sunMat = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        uniforms: {
            globeTexture: {
                value: new THREE.TextureLoader().load(sunTexture)
            },
            couleurRGB: {
                value: new THREE.Vector3(1, 1, 0)
            }
        }
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.name = 'sun'
    planetTab.push(sun)
    scene.add(sun);

    
    // Creation des planètes
    function createPlanete(size, texture, position, r, g, b, name, ring) {
        var couleurRGB = new THREE.Vector3(r, g, b);
        const geo = new THREE.SphereGeometry(size, 30, 30);
        const mat = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            transparent: true,
            uniforms: {
                globeTexture: {
                    value: new THREE.TextureLoader().load(texture)
                },
                couleurRGB: {
                    value: couleurRGB
                }
            }
        });
        
        
        const mesh = new THREE.Mesh(geo, mat);
        mesh.castShadow = true;
        mesh.name = name;
        const obj = new THREE.Object3D();
        obj.name = 'planetParent'
        obj.add(mesh);
        
        if(ring) {
            const ringGeo = new THREE.RingGeometry(
                ring.innerRadius,
                ring.outerRadius,
                32);

                const ringMat = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader,
                    transparent: true,
                    uniforms: {
                        globeTexture: {
                            value: new THREE.TextureLoader().load(ring.texture)
                        },
                    }
                })

            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            ringMesh.name = name;
            planetTab.push(ringMesh);
            obj.add(ringMesh);

            ringMesh.receiveShadow = true;
            ringMesh.position.x = position;
            ringMesh.rotation.x = -0.45 * Math.PI;
            ringMesh.rotateY(Math.random() * 0.2)

        }
        const atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(size, 30, 30),
            new THREE.ShaderMaterial({
                vertexShader: atmosphereVertexShader,
                fragmentShader: atmosphereFragmentShader,
                blending: THREE.AdditiveBlending,
                transparent: true,
                side: THREE.BackSide,
                uniforms: {
                    couleurRGB: {
                        value: couleurRGB
                    }
                }
            }));
        atmosphere.scale.set(1.1, 1.1, 1.1)
        mesh.add(atmosphere);
        planetTab.push(mesh);
        scene.add(obj);
        mesh.position.x = position;
        return {mesh, obj}
    };
    // Liste Planetes
    const venus = createPlanete(5.8, venusTexture, 44, 1, 0.8, 0.4, 'venus');

    const mercury = createPlanete(3.2, mercuryTexture, 28, 0.753, 0.753, 0.753, 'mercury');
    const earth = createPlanete(6, earthTexture, 62, 0.3, 0.6, 1.0, 'earth');
    const mars = createPlanete(4, marsTexture, 78, 0.839, 0.3137, 0.0627,'mars');
    const jupiter = createPlanete(12, jupiterTexture, 100, 0.898, 0.557, 0.149, 'jupiter');

    const saturn = createPlanete(10, saturnTexture, 132, 1, 0.941, 0.545,'saturn', {
        innerRadius: 10,
        outerRadius: 20,
        texture: saturnRingTexture
    });

    const uranus = createPlanete(7, uranusTexture, 176, 0.690, 0.878, 0.902, 'uranus',{
        innerRadius: 7,
        outerRadius: 12,
        texture: uranusRingTexture
    });

    const neptune = createPlanete(7, neptuneTexture, 200, 0, 0.2, 0.6,'neptune');
    const pluto = createPlanete(2.8, plutoTexture, 216, 0.502, 0.400, 0.400,'pluto');

    // Sunlight
    const sunlight = new THREE.PointLight(0xFFFFFF, 20000, 8000);
    scene.add(sunlight);

    // Evenement
    const {top, left, width, height} = renderer.domElement.getBoundingClientRect();

    const raycaster = new THREE.Raycaster();
    let planetChoosen;
    let planetStop;

    // Evenement curseur pointeur
    container.addEventListener('mousemove', onMouseMove)
    function onMouseMove(event) {
        const coords = new THREE.Vector2(
            -1 + 2 * (event.clientX - left) / width,
            1 - 2 * (event.clientY - top) / height,
        )
        raycaster.setFromCamera(coords, camera);
        const intersections = raycaster.intersectObjects(scene.children, true);

        if(intersections.length > 0) {
            renderer.domElement.style.cursor = 'pointer';
        } else {
            renderer.domElement.style.cursor = 'auto';
        }
    }

    // Evenement de clique sur une planète
    container.addEventListener('mousedown', onMouseDown);
    function onMouseDown(event) {
        const divInfo =  document.querySelector('.planet-info');

        if(!!planetStop) {
            divInfo.classList.add('hidden');
            planetStop = null;
            gsap.to(camera.position, {
                x: 0,
                y: 100,
                z: 200,
                duration: 1.5,
            })
            camera.rotateX(-0.4);
            sunlight.intensity = 20000;

            planetTab.forEach(planet => {
                planet.visible = true;
            })

            return
        }

        const coords = new THREE.Vector2(
            -1 + 2 * (event.clientX - left) / width,
            1 - 2 * (event.clientY - top) / height,
        )

        raycaster.setFromCamera(coords, camera);
        const intersections = raycaster.intersectObjects(scene.children, true);

        if(intersections.length > 0) {
            divInfo.classList.remove('hidden');
            const selectedObject = intersections[0].object;

            scene.traverse(function(child) {
                if (child instanceof THREE.Mesh && child.name === selectedObject.name) {
                    cameraCenter(child, coords);
                    sunlight.intensity = 0;
                    planetChoosen = child;
                    planetStop = child.parent;
                    divInfo.querySelector('input').value = child.name;
                    divInfo.querySelector('input').dispatchEvent(new Event('inputchange'));
                }
            });

            planetTab.forEach(planet => {
                if(planet.name != planetChoosen.name) {
                    planet.visible = false;
                }
            })
        }
    }

    function cameraCenter(object, coords) {
        const boiteEnglobante = new THREE.Box3().setFromObject(object);
        const centreBoite = new THREE.Vector3();
        boiteEnglobante.getCenter(centreBoite);

        const tailleBoite = new THREE.Vector3();
        boiteEnglobante.getSize(tailleBoite);

        const distance = Math.max(tailleBoite.x, tailleBoite.y, tailleBoite.z) / (2 * Math.tan(camera.fov * Math.PI / 360));
        const planetPos = camera.position.copy(centreBoite);
        camera.lookAt(centreBoite);

        gsap.fromTo(camera.position, {
            x: coords.x,
            y: coords.y,
            z: 200,
        },
        {
            x: planetPos.x + tailleBoite.x / 2,
            y: 0,
            z: planetPos.z + distance,
        })
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
		render()
	}

	function render() {
		renderer.render(scene, camera);
	}
	
	animate();
	render();
}
