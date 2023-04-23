const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
  constructor(size, color) {
    this.size = size;
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return '';
  }
}

class Circle extends Shape {
  constructor(size, color) {
    super(size, color);
  }

  render() {
    return `<circle cx="${this.size/2}" cy="${this.size/2}" r="${this.size/2}" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(size, color) {
    super(size, color);
  }

  render() {
    return `<rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor(size, color) {
    super(size, color);
  }

  render() {
    const halfSize = this.size / 2;
    const points = `0,${this.size} ${this.size},${this.size} ${halfSize},0`;
    return `<polygon points="${points}" fill="${this.color}" />`;
  }
}

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for your logo:'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the color for the text (e.g. red, #FF0000):'
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Select the type of shape for your logo:',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the color for the shape (e.g. blue, #0000FF):'
    },
  ]);
}

function generateLogo(userInput, shape) {
  const logo = `<svg width="${shape.size}" height="${shape.size}">
      ${shape.render()}
      <text x="5" y="75" font-size="60" fill="${userInput.textColor}">${userInput.text}</text>
  </svg>`;

  return logo;
}

async function createShape(shapeType, shapeColor) {
  let shape;
  switch(shapeType) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      throw new Error(`Invalid shape type: ${shapeType}`);
  }

  shape.setColor(shapeColor);

  return shape;
}

async function main() {
    const userInput = await promptUser();
    let shape;
    if (userInput.shapeType === 'Triangle') {
      shape = new Triangle();
    } else if (userInput.shapeType === 'Circle') {
      shape = new Circle();
    } else if (userInput.shapeType === 'Square') {
      shape = new Square();
    }
  
    shape.setColor(userInput.shapeColor);
    shape.setShape();
  
    const logo = generateLogo(userInput, shape);
    fs.writeFile('./examples/logo.svg', logo, (err) => {
      if (err) throw err;
      console.log('Generated logo.svg');
    });
  }
  
main();
    
module.exports = promptUser;