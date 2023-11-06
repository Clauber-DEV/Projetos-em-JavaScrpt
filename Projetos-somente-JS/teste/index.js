const { stdout } = require("process");
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: stdout
});

rl.question("", function(){

    rl.close()
});