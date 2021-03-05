# Hydra example for three js mesh texture

## hydra hack for flok, etc

Copy and run this:

```javascript
fetch("https://raw.githubusercontent.com/rexmalebka/hydra-threejs/changes/hack/dist/hydra-three.js").then( x=> x.text() ).then(text=>{
  let script = document.createElement("script")
  script.innerHTML = text
  document.body.appendChild(script)
})
```

## Hydra standalone

for [hydra standalone](https://github.com/ojack/hydra-standalone)

- git clone this repo inside `hydra/app/extensions`

> git clone https://github.com/rexmalebka/hydra-threejs 

- add this to `hydra/public/index.html`

```javascript
 <script>require("./../app/extensions/hydra-threejs/threejs-embedded/index.js")</script>
```
## Hydra for atom package

- locate your .atom package directory for `atom-hydra` , in my case `~/.atom/packages/atom-hydra`

- on your  .atom package directory for `atom-hydra`:

> npm install three --save

- copy `atom/three-js.js` into `lib/`

- on `lib/main.js` put this line:

```javascript
import three from "./three-js.js"
```
## Docs

instanciate three js and save this into a variable

```javascript
t = new three()
```

the three object has:

- `t.scene` a threejs scene
- `t.renderer` a `THREE.WebGLRenderer`
- `t.camera` for a `THREE.PerspectiveCamera`
- `t.ambienLight` for `THREE.AmbientLight`
- `t.DracoGLTFLoader` for a `DracoGLTFLoader` loader 

this library puts `THREE` library on global, so you can use it as you want

[three js docs](https://threejs.org/docs/)

## issues

of course, post them in issues or even better, make a PR :).
