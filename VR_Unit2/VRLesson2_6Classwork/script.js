let scene;
let mechTemplate;
let army = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mechTemplate = document.getElementById("mech-1");
  
  let mech1 = new Mech(-10,13)
  // loop();
})
function loop(){


  window.requestAnimationFrame( loop );
}
