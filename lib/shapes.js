// Place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class.

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

// Use inheritance to reuse the code in the child classes.

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

class Circle extends Shape {
    constructor(radius, color) {
        super(color, 'circle');
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * (this.radius ** 2);
    }

    render() {
        return `<svg height="${this.radius*2}" width="${this.radius*2}">
        <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}"
        style="fill:${this.color};stroke:black;stroke-width:1"/>
        </svg>`;
    }
}

class Square extends Shape {
    constructor(sideLength, color) {
        super(color, 'square');
        this.sideLength = sideLength;
    }

    calculateArea() {
        return this.sideLength ** 2;
    }

    render() {
        return `<svg height="${this.sideLength}" width="${this.sideLength}">
        <rect x="0" y="0" width="${this.sideLength}" height="${this.sideLength}"
        style="fill:${this.color};stroke:black;stroke-width:1"/>
        </svg>`;
    }
}