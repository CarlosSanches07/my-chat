//Here starts the main code
//import MainView from './view/MainView';

const inquirer = require('../src/lib/Input');

const run = async function() {
    //Here comes the execution flow
    const user      = await inquirer.getUser();
    await console.log(user);
}

run();
