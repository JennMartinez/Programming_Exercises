var inquirer = requirer('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'first',
            message: 'What is the first number?'
        },
        {
            type: 'input',
            name: 'second',
            message: 'What is the second number?'
        }
    ])