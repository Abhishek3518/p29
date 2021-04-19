class Poligen{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:1.0,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        strokeWeight(4)
        fill("white")
        push()
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}