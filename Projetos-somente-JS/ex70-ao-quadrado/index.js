const ut = require('util');

/* M05 ex 070 Ao quadrado
 *  O programa deve montar quadrados com Matrizes
 *  com disparos com parâmetros
 */
function quadrado(tam) {
    if (tam === 4) {
        const cubo1 = new Array(4).fill(new Array(4));
        for (let indl = 0; indl < cubo1.length; indl++) {
            for (let indc = 0; indc < cubo1[indl].length; indc++) {
                ut.promisify(setTimeout)(100);
                process.stdout.write("▓▓");
            }
            console.log();
        }
        console.log("4X4\n\n");
    }
    if (tam === 2) {
        const cubo2 = new Array(2).fill(new Array(2));
        for (let indl = 0; indl < cubo2.length; indl++) {
            for (let indc = 0; indc < cubo2[indl].length; indc++) {
                ut.promisify(setTimeout)(100);
                process.stdout.write("██");
            }
            console.log();
        }
        console.log("2X2\n\n");
    }
    if (tam === 5) {
        const cubo3 = new Array(5).fill(new Array(5));
        for (let indl = 0; indl < cubo3.length; indl++) {
            for (let indc = 0; indc < cubo3[indl].length; indc++) {
                ut.promisify(setTimeout)(100);
                process.stdout.write("▒▒");
            }
            console.log();
        }
        console.log("5X5\n\n");
    }
}

function inicio() {
    quadrado(4);
    quadrado(2);
    quadrado(5);
}

inicio();
