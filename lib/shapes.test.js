// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

const { Triangle, Circle, Square } = require('./shape');

describe('Triangle', () => {    
    test('Triangle render method should return SVG string', () => {
        const triangle = new Triangle(50, 'red');
        expect(triangle.render()).toBe('<svg height="50" width ="50"><polygon points="0,50 50,50 25, 0" style="fill:red;stroke:black;stroke-width:1"/></svg>');
    });
});

describe('Circle', () => {
    test('render method should return the SVG for the circle with the given color and radius', () => {
        const circle = new Circle(50, 'red');
        const svg = circle.render();
        expect(svg).toContain('<circle');
        expect(svg).toContain('cx="50"');
        expect(svg).toContain('cy="50"');
        expect(svg).toContain('r="50"');
        expect(svg).toContain('style="fill:red;stroke:black;stroke-width:1"');
    });
});

describe('Square', () => {
    test('render method should return the SVG for the square with the given color and side length', () => {
        const square = new Square(100, 'green');
        const svg = square.render();
        expect(svg).toContain('<rect');
        expect(svg).toContain('width="100"');
        expect(svg).toContain('height="100"');
        expect(svg).toContain('style="fill:green;stroke:black;stroke-width:1');
    });
});