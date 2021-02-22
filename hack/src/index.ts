import * as THREE_ from 'three'
const THREE = THREE_
window.THREE = THREE
//const GLTFLoader = require("three/examples/js/loaders/GLTFLoader.js")
//const DRACOLoader = require("three/examples/js/loaders/DRACOLoader.js")
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js'

export interface three{
	scene: THREE.Scene
	GLTFLoader: GLTFLoader
	DracoGLTFLoader: GLTFLoader
	renderer: THREE.WebGLRenderer
	camera: THREE.PerspectiveCamera
	animate: Function
	ambientLight: THREE.AmbientLight

}

export class three implements three{
	constructor(){
		let scene = new THREE.Scene()
		let renderer = new THREE.WebGLRenderer({ antialias: true })
		let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
		['s0','s1','s2','s3','s4'].forEach( (s)=>{
			if(window.hasOwnProperty(s)){
				window[s]['initTHREE'] = function(three_ ){
					window[s]['src'] = three_.renderer.domElement
				}
			}
                })


		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.domElement.style.display = "none";
		renderer.domElement.classList.add("threejs");
		(document.body as HTMLElement).appendChild(renderer.domElement);

		// shadow stuff
		renderer.shadowMap.enabled = true
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		// ambient light
		const Ambientlight = new THREE.AmbientLight( 0xffffff )
		scene.add(Ambientlight)

		//pointlight
		const dirlight = new THREE.DirectionalLight( 0x5e7cad, 1)
		dirlight.castShadow = true
		dirlight.position.y = 20
		dirlight.target.position.y = -20
		dirlight.shadow.mapSize.width = 1024
		dirlight.shadow.mapSize.height = 1024
		scene.add(dirlight)


		
		// loaders
		let DracoGLTFLoader = new GLTFLoader()
		let draco = new DRACOLoader()
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
		//this.hydraTarget = Hydra_target

		this.DracoGLTFLoader = DracoGLTFLoader
	}
}
window['three'] = three
