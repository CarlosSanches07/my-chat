const Input = require('../lib/Input');

module.exports = 
    class UserController {
    //User controller functions
    constructor() {
        _input = Input;
    }

    getUser() {
        const data = _input.getUser();
        return {
            name : data[0].name
        }
    }
}