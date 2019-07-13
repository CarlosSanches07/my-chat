//Here starts the main code
const MainView = require('./view/MainView');

const run = async function() {
    //Here comes the execution flow
    await MainView.mainView();
}

run();
