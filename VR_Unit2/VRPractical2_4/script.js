let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 
  
  for(let i = 0; i < 20; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-20,20));
    tree.scale(rnd(1,4));
  }

  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}
