const THREE = require("./node_modules/three/build/three.min.js");
window.THREE = THREE
const GLTFLoader = require("./node_modules/three/examples/js/loaders/GLTFLoader.js")
const DRACOLoader = require("./node_modules/three/examples/js/loaders/DRACOLoader.js")
const OrbitControls = require("./node_modules/three/examples/js/controls/OrbitControls.js")

const initTHREE = function(){

	const scene = new THREE.Scene()
	const renderer = new THREE.WebGLRenderer({ antialias: true })
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
	const controls = new THREE.OrbitControls( camera, document.body );
	controls.enableKeys = false


	// add to body invisible to the human eye
	renderer.setSize(window.innerWidth, window.innerHeight)
	renderer.domElement.style.display = "none"
	renderer.domElement.id = "threejs"
	document.querySelector("body").appendChild(renderer.domElement);

	// ambient light 
	const Ambientlight = new THREE.AmbientLight( 0xffffff )
	scene.add(Ambientlight)

	// loaders
	let DracoGLTFLoader = new THREE.GLTFLoader()
	let draco = new THREE.DRACOLoader()
	draco.setDecoderPath( './node_modules/three/examples/js/libs/draco/' );
	DracoGLTFLoader.setDRACOLoader( draco );


	// on resize 
	window.addEventListener('resize', function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}, false);

	function animate(){
		window.requestAnimationFrame(animate)
		renderer.render(scene, camera);
		controls.update();

	}

	
	animate()
	
	camera.position.z = -5

	window.THREE = THREE
	window.sTHREE = hydra.createSource()
	window.sTHREE.init({src: renderer.domElement})

	return {
		scene: scene,
		camera: camera,
		renderer: renderer,
		GLTFLoader: new THREE.GLTFLoader(),
		DracoGLTFLoader: DracoGLTFLoader,
	}
}



window.initTHREE = initTHREE
