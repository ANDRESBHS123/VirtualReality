class Mech{
    constructor(x,y,z){
        this.x =x;
        this.y = y;
        this.z = z;
        this.obj = mechTemplate.cloneNode(true)
        this.obj.setAttribute("position",{x:x,y:y,z:z})
        screen.append(this.obj);
    }
}