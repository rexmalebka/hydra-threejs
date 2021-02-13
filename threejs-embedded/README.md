# THREE js in hydra

- on `hydra/app/extensions` clone this repo
- add `    <script>require("./../app/extensions/hydra-threejs/threejs-embedded/index.js")</script>` on public index.html on `hydra/public/index.html` standalone file.
- initialize THREE js using `t = initTHREE()` global function
- now `THREE` is global and can be used to crete three js mesh
- `sTHREE`  can be used as a source on hydra
- `t` object contains a `scene`, `orbitControls`, `GLTFLoader`, `DracoGLTFLoader`, `camera` and `hydraTarget`


## create a three js mesh

```javascript
// initialize
t = initTHREE()

// create a mesh for example and add it to t scene
c = new Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshBasicMaterial())
t.scene.add(c)

// render it
src(STHREE).out()

```


## using hydra as mesh map material

```javascript

// initialize
t = initTHREE()

// create a mesh for example and add it to t scene
c = new Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshStandardMaterial({map: t.hydraTarget.o[0]}))
t.scene.add(c)

// render it
src(STHREE).out()

// render mesh texture to hydra target outputs
osc(2,2,14).out(t.hydraTarget.o[0])
```
