const readline = require('readline');
const comm = require('../controller/Commands');

module.exports = {
    mainApp: async function(){  
        const mainMenu = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: `my-chat~@${process.env.USERNAME}/>`
        });
        mainMenu.prompt();
        
        mainMenu.on('line', (line) => {
            command = line.split(' ')[0];
            param = line.split(' ')[1];
            if(comm[command]){
                comm[command](param)
                    .then((res) => {
                        if(res){
                            //implementar regra para sair
                            console.log(res);
                        }
                        mainMenu.prompt();
                    })
                    .catch((e) => console.error(e))
            }
            else{
                console.log('Type help for help');
                mainMenu.prompt();
            }
        
        }).on('close', () => {
            process.exit(0);
        });
    }
}