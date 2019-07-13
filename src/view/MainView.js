const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const UserController = require('../controller/UserController');

module.exports = {
    //View 
    header : function() {
        clear();
        console.log(`${chalk.green(figlet.textSync('my-chat'))}
            
        
        
                    --builded with love ${chalk.red('<3')}
        `
         );
    },

    mainView: async  function() {
        try {
            this.header();
            UserController.init();
            const user = await UserController.getUser();
            const optionMenu = await UserController.getMenuChoice();
        } catch (e) {
            console.error(e);
        }
    }
};