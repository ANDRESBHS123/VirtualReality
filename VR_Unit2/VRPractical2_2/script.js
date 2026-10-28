let scene, car;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    rocket = document.querySelector("#rocket");
    pokeball = document.querySelector("#pokemonball");
    


    car.x = 0;
    car.dx = 0.01;

    rocket.y = -2;
    rocket.dy = 0.01;

    pokeball.x = 0;
    pokeball.dx = 200; 

    loop();
    
})

function loop(){
    car.x += car.dx;
    // car.setAttribute("positon", {x:car.x, y:0, z:-5});
    car.setAttribute("position", car.x + " 0 0 ");

    rocket.y += rocket.dy;
    rocket.setAttribute("position", `0 ${rocket.y} -10`);

    pokeball.x += pokeball.dx;
    pokeball.setAttribute("rotation", {x:pokeball.x, y:0, z:0});


    window.requestAnimationFrame(loop);
}
