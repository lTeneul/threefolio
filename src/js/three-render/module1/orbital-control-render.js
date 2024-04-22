import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function orbitalControlRender(container) {
    const renderer = new THREE.WebGLRenderer({alpha: true});

    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    
    const orbit = new OrbitControls(camera, renderer.domElement);
    
    const axesHelper = new THREE.AxesHelper(5);
    axesHelper.material = new THREE.LineBasicMaterial({color: 0xFF9800});
    scene.add(axesHelper);

    camera.position.set(0, 2, 5);
    orbit.update();
    
    const boxGeometry = new THREE.BoxGeometry();
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0x135D66});
    const box = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(box);

    const edges = new THREE.EdgesGeometry(boxGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xE3FEF7, linewidth: 20 });
    const line = new THREE.LineSegments(edges, lineMaterial);
    box.add(line);

    function animate() {
        requestAnimationFrame(animate);
        render();
    }
    function render() {
        renderer.render(scene, camera);
    }
      
    animate();
    render();
}
