'use babel'

import {default as Hydra_atom } from './atom-hydra.js'
import Hydra from 'hydra-synth'
import { CompositeDisposable } from 'atom'

import * as THREE_ from 'THREE'
const THREE = THREE_
window.THREE = THREE
const GLTFLoader = require("three/examples/js/loaders/GLTFLoader.js")
const DRACOLoader = require("three/examples/js/loaders/DRACOLoader.js")

const subsc = new CompositeDisposable();
Hydra_target = null


subsc.add(atom.commands.add('atom-workspace',{
	'atom-hydra:toggle': () => {
			if(Hydra_atom.isActive == false){
			//	Hydra_target.canvas.remove()
			//	Hydra_target = null
			}else{


				Hydra_atom.main.hydra.s.forEach( (s)=>{
					s.initTHREE = function(three_ ){
						s.src = three_.renderer.domElement
					}
				})
/*
				let cnv  = document.createElement('canvas')
				cnv.width = window.innerWidth
				cnv.height = window.innerHeight
				cnv.id = "hydra-target"
				Hydra_target = new Hydra({
					makeGlobal: false,
					canvas: cnv
				})
				
				Hydra_target.canvas.id = "hydra-target"
				Hydra_target.canvas.style.display = "none"
				*/
			}
	}
}))


export default class three {
	constructor(){
		let scene = new THREE.Scene()
		let renderer = new THREE.WebGLRenderer({ antialias: true })
		let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
		let hydra = Hydra_atom.main.hydra


		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.domElement.style.display = "none"
		renderer.domElement.classList.add("threejs")
		document.querySelector(".hydra").appendChild(renderer.domElement);

		// shadow stuff
		renderer.shadowMap.enabled = true
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		// ambient light
		const Ambientlight = new THREE.AmbientLight( 0xffffff )
		scene.add(Ambientlight)

		//pointlight
		const dirlight = new THREE.DirectionalLight( 0x5e7cad, 1, 800 );
		dirlight.castShadow = true
		dirlight.position.y = 20
		dirlight.target.position.y = -20
		dirlight.shadow.mapSize.width = 1024
		dirlight.shadow.mapSize.height = 1024
		scene.add(dirlight)


		
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
		this.hydraTarget = Hydra_target

		this.DracoGLTFLoader = DracoGLTFLoader
	}
}
window.three = three
