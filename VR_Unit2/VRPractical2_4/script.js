let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let ufos = [ ];

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
  
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let ufo = new UFO(x,z);
    ufos.push(ufo);
  }
}