  // instanciate three plugin
  t = new three()

//
t.scene
t.camera
t.renderer
t.DracoGLTFLoader // for .glb objects

  // create three js mesh (box)
  box = new THREE.Mesh(
    new THREE.BoxGeometry(),
    new THREE.MeshStandardMaterial({color: 0xff00ff, transparent:true, opacity:0.5})
  )
  t.scene.add(box)

  // create three js source on hydra
  s0.initTHREE(t)

  // output it
  src(s0)
  .out()


  // we could modify mesh properties
  box.rotation.y = 0.5

// more complex stuff
torus = new THREE.Mesh(
  new THREE.TorusKnotGeometry( 1, 0.15, 100, 16 ),
  new THREE.MeshPhongMaterial({color: 0x00ab0f0})
)
t.scene.add(torus)


  // movements
  clearInterval(typeof move_f == 'undefined'? 0: mode_f)
  move_f = setInterval(()=>{
    box.rotation.y += 0.05
  },50)

  // more mesh
  m = [...new Array(10)].map( mm => {
    bb = new THREE.Mesh(
      new THREE.SphereBufferGeometry(),
      new THREE.MeshPhongMaterial({
        color:Math.floor(0x000000 + Math.random()*0xffffff),
        transparent: true,
        opacity:0.5
      })
    )
    bb.position.set(Math.random()*10 -5, Math.random()*2,Math.random()*5)
    t.scene.add(bb)
    return bb
  })


// move torus
clearInterval(typeof move_t == 'undefined'? 0: move_t)
move_t = setInterval(()=>{
  torus.rotation.y += 0.05
  torus.scale.setScalar(0.5 + Math.abs(Math.sin(time))*2)
},50)

  // move spheres
  pos_m = m.map( x => x.position )
  clearInterval(typeof move_g == 'undefined'? 0: move_g)
  move_g = setInterval(()=>{
    m.forEach(( mm,i )=> {
      mm.position.x = pos_m[i].x + Math.sin(2*time)* 0.4
      mm.position.z = pos_m[i].z +(Math.sin(time)* 0.2)
    })
  },50)



  // move camera
  clearInterval(typeof move_cam == 'undefined'? 0: move_cam)
  move_cam = setInterval(()=>{
    t.camera.rotation.y +=0.01
  },50)

clearInterval(typeof move_cam == 'undefined'? 0: move_cam)
t.camera.rotation.y = 0


  src(s0)
  .diff(src(o0).scale(1.01).luma(0.05))
  .out()


  src(s0)
  .out()


  // change torus
  clearInterval(typeof move_t == 'undefined'? 0: move_t)
  move_t = setInterval(()=>{
    torus.rotation.y += 0.05
    torus.scale.setScalar(0.5 + Math.abs(Math.sin(time))*2)
    torus.material.color.setRGB(0.5,Math.random()*1,0.5)
  },50)


  src(s0)
  .blend(src(o0).scale(1.1).contrast(2))
  .out()


  // add custom GLTF
   pez = null
t.DracoGLTFLoader.load("/Users/dorianvelazquez/Downloads/FullTest_01.glb   ", ( pez_ )=>{
     pez = pez_
     t.scene.add(pez.scene)
   })



  pez.scene.scale.setScalar(0.09)


    // move camera
    clearInterval(typeof move_pez == 'undefined'? 0: move_pez)
    move_pez = setInterval(()=>{
      pez.scene.rotation.y +=0.01
    },50)

    src(s0)
    .diff(src(o0).scale(1.001))
    .out()

