class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(450,390,800,20,options)
        world.add(world,this.ground)
    }
    display(){
        Fill("black")
        rectMode(CENTER)
        rect(this.ground.position.x,this.ground.position.y,800,20)
    }
}