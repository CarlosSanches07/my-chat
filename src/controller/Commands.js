module.exports = {
    //User controller functions
    'connect' : (room) =>  {
        if (room)
            console.log(room)
        else
            console.log('Please insert a valid room');
    },

    'connect-global' : () => {
        console.log('globalzinho')
    },

    'help' : () => {
        console.log(`
        -------------- HELP ----------------
        -- Type connect <room> -> to p2p chat
        -- type connect-global -> to global chat
        
        `);
    }

}