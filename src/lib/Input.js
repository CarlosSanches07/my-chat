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
                        clear();
                        console.log('Please enter a valid name');
                        return false;
                    }
                }
            },
        ];
        return inquirer.prompt(questions);
    },
}