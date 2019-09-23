var inquirer = require('inquirer');

console.log('Hi. You will be asked a couple questions.');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'quote',
            message: 'What is the quote?'
        },
        {
            type: 'input',
            name: 'author',
            message: 'Who said it?'
        },
  ])
  .then(answers => {
    console.log(`${answers.author} says, \"${answers.quote}.\"`);
});