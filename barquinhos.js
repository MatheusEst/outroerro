class barquinhos{
    constructor(x,y,a,l,p){
        this.a = a
        this.l = l
        this.p = p
        this.barco = Bodies.rectangle(x,y,a,l)
        this.barcoI = loadImage("barco.png");
        World.add(world,this.barco);
        


    }
    remove(i){
        Matter.World.remove(world,matrizB[i].barco)
        delete matrizB[i]
    }

    display(){
        
        push()

        translate(this.barco.position.x,this.barco.position.y);
        rotate(this.barco.angle);
        imageMode(CENTER)
        image(this.barcoI,0,0,this.a,this.l);
        pop()
        
    }

}