const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');

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
  let svgShape;
  switch (userInput.shapeType) {
    case 'Triangle':
      svgShape = shape.drawTriangle();
      break;
    case 'Circle':
      svgShape = shape.drawCircle();
      break;
    case 'Square':
      svgShape = shape.drawSquare();
      break;
    default:
      console.log('Invalid shape type selected');
      return;
  }

  const logo = `<svg width="${shape.size}" height="${shape.size}">
    ${svgShape}
    <text x="5" y="75" font-size="60" fill="${userInput.textColor}">${userInput.text}</text>
  </svg>`;

  return logo;
}

async function main() {
  const userInput = await promptUser();
  let shape;
  if (userInput.shapeType === 'Triangle') {
    shape = new Triangle(50);
  } else if (userInput.shapeType === 'Circle') {
    shape = new Circle(50);
  } else if (userInput.shapeType === 'Square') {
    shape = new Square(50);
  }

  shape.setColor(userInput.shapeColor);
  const logo = generateLogo(userInput, shape);
  fs.writeFile('./examples/logo.svg', logo, (err) => {
    if (err) throw err;
    console.log('Logo created!');
  });
}

main();

module.exports = promptUser;