const axios = require('axios');
const socket = require('../lib/socket');

const validateRoom = (room) => {
    if (room)
        return true;
    else
        console.log('Please insert a valid room');
    return false;
}

const url = 'http://localhost:3000'

module.exports = {
    //Commands functions
    'connect' : async (room) =>  { 
        
        if (!validateRoom(room))
            return;
        
        console.log('connecting...');
        let res;


        this.socket = await socket.init(`${url}/`);
        /* await axios.post(`${url}/connect`,{
            data: room
        })
        .then((response) => {
            if(response.status == 200) {
                res = response;
                console.log('connected !!!');
            }
        })
        .catch( e => console.error('Faleid to connect'));
        
        return res.data; */
    },

    'connect-global' : async () => {
        console.log('globalzinho')
    },

    'create-room' : async (room) => {
        if (validateRoom(room))
            console.log(room) 
    },

    'send-message' : async (msg) => {
        await this.socket.emit('message', {
            from : process.env.USERNAME,
            message: msg
        });
    },

    'help' : async () => {
       await console.log(`
        -------------- HELP ----------------
        -- Type connect <room-name> -> to p2p chat;
        -- Type connect-global -> to global chat;
        -- Type create-room <room-name> -> to create a room;
        
        `);
    }

}