const THREE = require("./node_modules/three/build/three.min.js");
window.THREE = THREE
const GLTFLoader = require("./node_modules/three/examples/js/loaders/GLTFLoader.js")
const DRACOLoader = require("./node_modules/three/examples/js/loaders/DRACOLoader.js")
const OrbitControls = require("./node_modules/three/examples/js/controls/OrbitControls.js")


class three {
	constructor(){
		hydra.s.forEach( (s)=>{
			s.initTHREE = function(three_ ){
				s.src = three_.renderer.domElement
			}
		})
		/*
		let cnvs = document.createElement("canvas")
		cnvs.id = "hydra-target"
		cnvs.style.width = window.innerWidth 
		cnvs.style.height = window.innerHeight
		let hydraTarget = new hydra.constructor({
			makeGlobal: false,
			canvas: cnvs
		}) 

		hydra.o.forEach( (o)=>{
			o.toTHREE = function( ){
				s.src = three_.renderer.domElement
			}
		})
*/
		let scene = new THREE.Scene()
		let renderer = new THREE.WebGLRenderer({ antialias: true })
		let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)

		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.domElement.style.display = "none"
		renderer.domElement.classList.add("threejs")
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
			renderer.render(scene, camera);
			window.requestAnimationFrame(animate)
		}

		animate()

		camera.position.z = 5



		this.scene = scene
		this.renderer = renderer
		this.camera = camera
		this.animate = animate

		this.ambientLight = Ambientlight

		this.DracoGLTFLoader = DracoGLTFLoader

	}
}
window.three = three
