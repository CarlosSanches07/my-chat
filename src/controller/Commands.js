const validateRoom = (room) => {
    if (room)
        return true;
    else
        console.log('Please insert a valid room');
    return false;
}

module.exports = {
    //Commands functions
    'connect' : (room) =>  {
        if (validateRoom(room))
            console.log(room);
    },

    'connect-global' : () => {
        console.log('globalzinho')
    },

    'create-room' : (room) => {
        if (validateRoom(room))
            console.log(room) 
    },


    'help' : () => {
        console.log(`
        -------------- HELP ----------------
        -- Type connect <room-name> -> to p2p chat;
        -- Type connect-global -> to global chat;
        -- Type create-room <room-name> -> to create a room;
        
        `);
    }

}