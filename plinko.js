class plinko {
    constructor(x, y,r) {

        var options ={
			isStatic: true,
            restitution:0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, this.r,options);       
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("white")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};
