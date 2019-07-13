//Here starts the main code
const View = require('./view/MainView');
const Input = require('./lib/Input');

const run = function() {
    //Here comes the execution flow
    View.header();
    Input.run();
}

run();
