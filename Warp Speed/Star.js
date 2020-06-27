
class Star {
    constructor(p) {
        this.p = p
        this.r = 16
        this.x = this.p.random(this.p.width/2, -this.p.width/2)
        this.y = p.random(this.p.height/2, -this.p.height/2)
        this.z = p.random(this.p.width, 0)
        this.pz = this.z
        this.px = this.x
        this.py = this.y
    }

    update(speed) {
        this.z -= speed
        if (this.z < 1) {
            this.x = this.p.random(this.p.width/2, -this.p.width/2)
            this.y = this.p.random(this.p.height/2, -this.p.height/2)
            this.z = this.p.width
            this.pz = this.z
            this.px = this.x
            this.py = this.y
        }
    }


    show() {
        this.p.fill(255)
        this.p.noStroke()

        let sx = this.p.map(this.x / this.z, 0, 1, 0, this.p.width)
        let sy = this.p.map(this.y / this.z, 0, 1, 0, this.p.height)
        let sr = this.p.map(this.z, 0, this.p.width, this.r, 0)

        this.p.circle(sx, sy, sr)


        this.pz = this.z

        this.p.stroke(255)
        if (sx != this.px) {
            this.p.line(sx, sy, this.px, this.py)
            this.px = sx
            this.py = sy
        }
    }
}