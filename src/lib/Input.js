const inquirer      = require('inquirer');

module.exports = {
    //Input funcions here

    getUser: () => {
        const questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your name: ',
                validate: function (value) {
                    if (value.lenght) {
                        return true;
                    }else {
                        return true;
                    }
                }
            },
        ];
        return inquirer.prompt(questions);
    },
}