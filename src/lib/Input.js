const readline = require('readline');
const comm = require('../controller/Commands');

module.exports = {
    run: function(){  
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: `my-chat~@${process.env.USERNAME}/>`
        });

        rl.prompt();
        
        rl.on('line', (line) => {
            command = line.split(' ')[0];
            param = line.split(' ')[1];
            if(comm[command]){
                comm[command](param);
            }
            else
                console.log('Type help for help');
            rl.prompt();
        
        }).on('close', () => {
            console.log('Have a great day!');
            process.exit(0);
        });
    }
}