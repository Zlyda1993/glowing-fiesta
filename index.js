const inquirer = require('inquirer');
const fs = require('fs');

const shapeOptions = [
  {
    name: 'Square',
    value: (shapeColor, textColor, characters) => `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="200" fill="${shapeColor}" />
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
      </svg>
    `,
  },
  {
    name: 'Triangle',
    value: (shapeColor, textColor, characters) => `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 20,180 280,180" fill="${shapeColor}" />
        <text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
      </svg>
    `,
  },
  {
    name: 'Circle',
    value: (shapeColor, textColor, characters) => `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
      </svg>
    `,
  },
];

inquirer
  .prompt([
    {
      type: 'list',
      message: 'Which shape would you like for your logo?',
      name: 'shape',
      choices: shapeOptions.map((option) => option.name),
    },
    {
      type: 'input',
      message: 'What color would you like the shape?',
      name: 'shapeColor',
    },
    {
      type: 'input',
      message: 'How many characters in your logo? (max of 3 characters)',
      name: 'characters',
    },
    {
      type: 'input',
      message: 'What color would you like the text?',
      name: 'textColor',
    },
  ])
  .then((response) => {
    const { shape, shapeColor, characters, textColor } = response;

    const selectedShapeFunction = shapeOptions.find((option) => option.name === shape).value;
    const svgContent = selectedShapeFunction(shapeColor, textColor, characters);

    fs.writeFile(`logo.svg`, svgContent, (err) => {
      if (err) {
        console.error('Error writing logo.svg:', err);
      } else {
        console.log(`Generated logo.svg!`);
      }
    });
  });