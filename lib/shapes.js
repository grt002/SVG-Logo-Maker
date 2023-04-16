// Place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

class Shape {
    constructor(color, shapeType) {
        this.color = color;
        this.shapeType = shapeType;
    }

    render() {
        // return the SVG for the shape with its color
        return `<svg></svg>`;
    }
}

class Triangle extends Shape {
    constructor(sideLength, color) {
        super(color, 'triangle');
        this.sideLength = sideLength;
    }

    calculateArea() {
        return (Math.sqrt(3) / 4) * (this.sideLength ** 2);
    }

    render() {
        return `<svg height="${this.sideLength}" width="${this.sideLength}">
        <polygon points="0,${this.sideLength} ${this.sideLength}, ${this.sideLength} ${this.sideLength/2},0"
        style="fill:${this.color};stroke:black;stroke-width:1"/>
        </svg>`;
    }
}