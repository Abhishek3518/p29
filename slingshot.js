class slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20

        }
        this.pointA=pointA
        this.pointB=pointB
        this.sling-Constraint.create(options)
        World.add(world,this.world)
    }
    fly(){
        this.sling.bodyA=null
    }
    display(){
        strokeWeight(4)
        fill("black")
        pointA=this.sling.bodyA.position
        pointB=this.sling.pointB
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}