/*  ex 069 Repita meu escreva
 *  O programa deve repetir bordas e frases
 *  em outras funções somente com disparos na função principal
 */
const borda0 = 1, borda1 = 2, borda2 = 3, borda3 = 4;

function repeticao(txt, vezesTXT, vezesBD) {
    if (txt === "Sou Estudonauta" && vezesTXT === 1 && vezesBD === 1) {
        while (vezesBD <= borda1) {
            let repet = 2;
            console.log("\n+----------==========----------+");
            while (vezesTXT < repet) {
                console.log("\n       Sou Estudonauta!!!");
                vezesTXT++;
            }
            vezesBD++;
        }
    } else if (txt === "Estou aprendendo a programar" && vezesTXT === 3 && vezesBD === 2) {
        while (vezesBD <= borda2) {
            console.log("\n ~~~~~~~~~~::::::::::~~~~~~~~~~");
            let repet = 5;
            while (vezesTXT <= repet) {
                console.log("\n  Estou aprendendo a programar.");
                vezesTXT++;
            }
            vezesBD++;
        }
    } else if (txt === "E estou adorando" && vezesTXT === 2 && vezesBD === 3) {
        while (vezesBD <= borda3) {
            let repet = 4;
            console.log("\n <<<<<<<<<<---------->>>>>>>>>>");
            while (vezesTXT <= repet) {
                console.log("\n        E estou adorando");
                vezesTXT++;
            }
            vezesBD++;
        }
    } else if (txt === "Sucesso TOTAL!!" && vezesTXT === 5 && vezesBD === 0) {
        while (vezesBD <= borda0) {
            let repet = 8;
            console.log("");
            while (vezesTXT <= repet) {
                console.log("\n        Sucesso TOTAL!!");
                vezesTXT++;
            }
            vezesBD++;
        }
    }
}

function inicio() {
    let resp;
    console.log("Quer ir para a versão ESTUDONAUTA? [ s / n ]");
    resp = prompt();

    if (resp === "s") {
        console.log("\n    Versão ESTUDONAUTA\n\n");
        meu_escreva("Sou Estudonauta", 1, 1);
        meu_escreva("Estou aprendendo a programar", 3, 2);
        meu_escreva("E estou adorando", 2, 3);
        meu_escreva("Sucesso TOTAL!!", 5, 0);
    } else {
        console.log("\n    Minha versão\n\n");
        repeticao("Sou Estudonauta", 1, 1);
        repeticao("Estou aprendendo a programar", 3, 2);
        repeticao("E estou adorando", 2, 3);
        repeticao("Sucesso TOTAL!!", 5, 0);
    }
}

function meu_escreva(txt, quant, borda) {
    let faixa;
    switch (borda) {
        case 1:
            faixa = "\n+----------==========----------+";
            break;
        case 2:
            faixa = "\n ~~~~~~~~~~::::::::::~~~~~~~~~~";
            break;
        case 3:
            faixa = "\n <<<<<<<<<<---------->>>>>>>>>>";
            break;
        default:
            faixa = "";
            break;
    }

    console.log(faixa + "\n");
    for (let cont = 1; cont <= quant; cont++) {
        console.log(txt + "\n");
    }
    console.log(faixa);
}

inicio();
