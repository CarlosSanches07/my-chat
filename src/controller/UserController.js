const Input = require('../lib/Input');

module.exports = {
    //User controller functions
    init() {
        _input = Input;
    },

    async getUser() {
        const data = await _input.getUser();
        return {
            name : data.name
        }
    }
}