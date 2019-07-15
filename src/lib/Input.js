const readline = require('readline');
const comm = require('../controller/Commands');
const event = require('./event');

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
            this.chat();
        })

        event.on('await', () => {
            mainMenu.close();
        });

        
    },

    chat: async function() {
        const chat = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: `chat~@${process.env.USERNAME}/>`
        });
        chat.prompt()
        chat.on('line', (line) => {
            if(line.split()[0].match('/quit')) {
                chat.close();
            }
            comm['send-message'](line.split());
            chat.prompt()
        })
        .on('close', ()=> {
            this.mainApp();
        })
        event.on('received', () => {
            chat.prompt();
        })
    }
}