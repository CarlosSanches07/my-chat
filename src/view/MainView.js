const chalk = require('chalk');
const figlet = require('figlet');

module.exports = {
    //View 
    header : function() {
        console.clear();
        console.log(`${chalk.green(figlet.textSync(`
wellcome to
my-chat
        `))}
            
        
        
                                    ${chalk.blue('--builded with love')} ${chalk.red('S2')}
        `
         );
    }
};