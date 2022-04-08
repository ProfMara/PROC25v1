class Tronco {
    constructor(x, y,largura,angle) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = 20;
        var mexe = { isStatic: false, restitution: 1, friction: 0.9, density: 1 };
        this.body = Bodies.rectangle(x, y, largura, this.altura, mexe);
        Body.setAngle(this.body, angle)
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        var a = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(a);
        fill("brown")
        rectMode(CENTER);
        rect(0, 0, this.largura, this.altura);
        pop();

    }

}