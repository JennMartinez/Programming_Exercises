var inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        name: 'noun',
        message: 'Enter a noun: '
    },
    {
        type: 'input',
        name: 'verb',
        message: 'Enter a verb: '
    },
    {
        type: 'input',
        name: 'adjective',
        message: 'Enter an adjective: '
    },
    {
        type: 'input',
        name: 'adverb',
        message: 'Enter an adverb: '
    },
  ])
  .then(answers => {
    console.log(`Do you ${answers.verb} your ${answers.adjective} ${answers.noun} quickly? That's hilarious!`);
});