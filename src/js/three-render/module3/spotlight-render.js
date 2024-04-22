import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

export function spotlightRender(container, guiContainer) {
    const renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.shadowMap.enabled = true;

    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    
    const orbit = new OrbitControls(camera, renderer.domElement);
    
    const axesHelper = new THREE.AxesHelper(5);
    axesHelper.material = new THREE.LineBasicMaterial({color: 0xFF9800});
    scene.add(axesHelper);

    camera.position.set(-10, 30, 30);
    orbit.update();
    
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0x135D66});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    const planeGeometry = new THREE.PlaneGeometry(30, 30);
    const planeMaterial = new THREE.MeshStandardMaterial({
        color: 0xE3FEF7,
        side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);
    plane.rotation.x = -0.5 * Math.PI;
    plane.receiveShadow = true

    const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0x135D66,
        wireframe: false,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphere.position.set(-10, 10, 0);
    sphere.castShadow = true;

    // const ambientLight = new THREE.AmbientLight(0xFFFFFF);
    // scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    // scene.add(directionalLight);
    // directionalLight.position.set(-50, 50, 0)
    // directionalLight.castShadow = true;
    // directionalLight.shadow.camera.bottom = -12;

    // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
    // scene.add(dLightHelper);

    // const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
    // scene.add(dLightShadowHelper);

    const spotLight = new THREE.SpotLight(0xFFFFFF, 5000);
    spotLight.position.set(-100, 100, 0);
    spotLight.angle = 0.08;
    scene.add(spotLight);
    spotLight.castShadow = true;

    const sLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(sLightHelper);

    const gui = new dat.GUI({ autoPlace: false });
    guiContainer.appendChild(gui.domElement);
    gui.close();
    const options = {
        sphereColor: '#135D66',
        wireframe: false,
        speed: 0.01,
        angle: 0.08,
        penumbra: 0,
        intensity: 5000,
    };

    gui.addColor(options, 'sphereColor').onChange(function(e) {
        sphere.material.color.set(e);
    })

    gui.add(options, 'wireframe').onChange(function(e) {
        sphere.material.wireframe = e;
    })

    gui.add(options, 'speed', 0, 0.1);
    gui.add(options, 'angle', 0, 0.15);
    gui.add(options, 'penumbra', 0, 1);
    gui.add(options, 'intensity', 0, 10000);

    let step = 0;

    const gridHelper = new THREE.GridHelper(30);
    scene.add(gridHelper);

    function animate() {
        requestAnimationFrame(animate);
        step += options.speed;
        sphere.position.y = 10 * Math.abs(Math.sin(step));
        spotLight.angle = options.angle;
        spotLight.penumbra = options.penumbra;
        spotLight.intensity = options.intensity;
        sLightHelper.update();
        render();
    }
    function render() {
        renderer.render(scene, camera);
    }
      
    animate();
    render();
}
