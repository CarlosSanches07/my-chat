const io = require('socket.io-client');
const event = require('./event');
const chalk = require('chalk');


module.exports = {
    init : (url) => {
        console.log(url);
        const socket = io(url);
        socket.on('connected', () => {
            console.log('connected')
            event.emit('await');
        })
        .on('received', (data) => {
            console.log(
                chalk.red(`\nreceived [from]${data.from}: ${data.message}`)
            );
            event.emit('received');
        });
        return socket;
    }
}