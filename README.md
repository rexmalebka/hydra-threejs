# Hydra example for three js mesh texture

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

## issues

of course, post them in issues or even better, make a PR :).
