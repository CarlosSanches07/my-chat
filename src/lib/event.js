const EventEmitter = require('events');
class Emitter extends EventEmitter {
}

const event = new Emitter();
module.exports = event;