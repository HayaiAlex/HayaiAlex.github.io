class gameShape {
    constructor(shape, position, givenColour) {
        if (shape == "Sphere") {
            this.geometry = new THREE.SphereGeometry(10, 32, 32);
            this.color = 0xFF00FF
        }
        if (shape == "Box") {
            this.geometry = new THREE.BoxGeometry(16, 16, 16);
            this.color = 0x00FFFF
        }
        this.material = new THREE.MeshStandardMaterial( {color: this.color, metalness: 0});
        this.newShape = new THREE.Mesh(this.geometry, this.material);
        this.newShape.position.set(position[0], position[1], 0)
        scene.add(this.newShape);
    }

}