import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function polygonRender(container, guiContainer) {
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
    camera.position.set(-10, 30, 30);
    
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();

    const ambientLight = new THREE.AmbientLight(0xFFFFFF);
    scene.add(ambientLight);

    const geometry = new THREE.PlaneGeometry(40, 20, 200, 200);
    const planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xFF9800,
        wireframe: false,
    });
    const plane = new THREE.Mesh(geometry, planeMaterial);
    scene.add(plane);
    plane.rotation.x = -0.5 * Math.PI;
    plane.castShadow = true;
    plane.receiveShadow = true;

    const count = geometry.attributes.position.count;
    console.log(count);

    const spotLight = new THREE.SpotLight(0xFFFFFF, 5000);
    spotLight.position.set(-100, 100, 0);
    spotLight.angle = 0.15;
    spotLight.penumbra = 0.5;
    spotLight.intensity = 10000;
    scene.add(spotLight);
    spotLight.castShadow = true;

    function animate() {
        const now = Date.now() / 300;
        for (let i = 0; i < count; i++) {
            const x = geometry.attributes.position.getX(i);
            const xsin = Math.sin(x + now);
            geometry.attributes.position.setZ(i, xsin)    
        }
        geometry.computeVertexNormals();
        geometry.attributes.position.needsUpdate = true;
        requestAnimationFrame(animate);
        render();
    }
    function render() {
        renderer.render(scene, camera);
    }
      
    animate();
    render();
}
