class chain{
    constructor (bodyA,bodyB){
     var options={
         bodyA : bodyA,
         bodyB : bodyB,
         stiffness: 0.04, 
         length: 10 
     }  
     this.chain=Constraint.create(options) 
     World.add(world,this.chain)
    } 
    fly(){
        this.chain.bodyA=null

    }
    attch(body){
        this.chain.bodyA=body
    }  
    display(){
        if(this.chain.bodyA){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB
    line(pointA.x,pointA.y,pointB.x,pointB.y)    
    }
    }
} 