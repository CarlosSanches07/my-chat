const inquirer = require('inquirer');
const clear = require('clear');

module.exports = {
    //Input funcions here

    getUser: () => {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: 'Enter your name: ',
                validate: function (value) {
                    if (value) {
                        return true;
                    }else {
                        console.log('Please enter a valid name');
                    }
                }
            },
        ];

        return inquirer.prompt(questions);
    },

    getMenuChoice: () => {
        values = [1, 2, 3]
        const questions = [
            {
                name:'menuOption',
                type: 'list',
                message: 'Choose One',
                choices: [
                    {name: '1', value: values[0], short: 'Choose 1'},
                    {name: '2', value: values[1], short: 'Choose 2'},
                    {name: '3', value: values[2], short: 'Choose 3'}
                ]
                
            }
        ];
        return inquirer.prompt(questions);
    }
}