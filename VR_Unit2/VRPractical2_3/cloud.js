class Cloud{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let clouds = document.createElement("a-sphere");
        clouds.setAttribute("color","white");
        clouds.setAttribute("position","0 10 0");
        clouds.setAttribute("scale","4");
        this.obj.append( clouds );

        this.obj.setAttribute("position",{x:x, y:y, z:z});
        scene.append( this.obj )
    }
}