class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.06,
            length: 10
        }
        this.boy = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.boy);
        this.image = loadImage("sprites/boy.png");
    }
    
    attach(body){
        this.boy.bodyA = body;
      }
    fly(){

        this.boy.bodyA = null;
    }

    display(){
        if(this.boy.bodyA){
        
        var pointA = this.boy.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }
    
}