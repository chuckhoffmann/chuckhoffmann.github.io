let scene, camera, renderer, line;


function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    let geometry = new THREE.BoxGeometry(1,0.25,.75);
    let wireframe = new THREE.WireframeGeometry(geometry);
    line = new THREE.LineSegments(wireframe);
    let material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    line.material = material;
    scene.add(line);

    camera.position.z = 3;

    animate();
}

function animate() {
    requestAnimationFrame(animate);


    line.rotation.y += 0.01;
    line.rotation.z += 0.01;

    renderer.render(scene, camera);
}

init();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
