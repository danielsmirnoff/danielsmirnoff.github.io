import * as THREE from 'three';

let scene, camera, renderer, directionalLight;
let geometry, material, cube;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight );

    camera.rotation.z = 45;
    
    geometry = new THREE.BoxGeometry( 1, 1, 1 );
    material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({flatshading: true}));
    scene.add( cube );
    
    camera.position.z = 5;
    
}
    

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );

}
