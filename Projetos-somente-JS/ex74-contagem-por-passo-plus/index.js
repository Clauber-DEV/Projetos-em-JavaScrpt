/* M05 ex 074 Contagem por passo plus
 * O programa deve ter funções que 
 * faça contagens de acordo com os parametros ds disparos
 */
function contagem(ini, fim, passo) {
    if (ini === 0 && fim === 10 && passo === 2) {
        console.log("Contando de 0 a 10 de 2 em 2");
        while (ini < fim) {
            process.stdout.write(`${ini} -> `);
            ini += passo;
            setTimeout(() => {
                console.log('');
            }, 200 * (fim / passo));
        }
        setTimeout(() => {
            console.log("Fim");
        }, 200 * (fim / passo));
    }

    console.log("");

    if (ini === 10 && fim === 50 && passo === 5) {
        console.log("contando de 10 a 50 de 5 em 5");
        while (ini < fim) {
            process.stdout.write(`${ini} -> `);
            ini += passo;
            setTimeout(() => {
                console.log('');
            }, 200 * ((fim - ini) / passo));
        }
        setTimeout(() => {
            console.log("Fim");
        }, 200 * ((fim - ini) / passo));
    }

    console.log("");

    if (ini === 10 && fim === 2 && passo === 1) {
        console.log("contando de 10 a 2 de 1 em 1");
        while (ini > fim) {
            process.stdout.write(`${ini} -> `);
            ini -= passo;
            setTimeout(() => {
                console.log('');
            }, 200 * ((ini - fim) / passo));
        }
        setTimeout(() => {
            console.log("Fim");
        }, 200 * ((ini - fim) / passo));
    }

    console.log("");

    if (ini === 50 && fim === 0 && passo === -10) {
        console.log("contando de 50 a 0 de 10 em 10");
        while (ini > fim) {
            process.stdout.write(`${ini} -> `);
            ini += passo;
            setTimeout(() => {
                console.log('');
            }, 200 * ((ini - fim) / passo));
        }
        setTimeout(() => {
            console.log("Fim");
        }, 200 * ((ini - fim) / passo));
    }
}

function inicio() {
    contagem(0, 10, 2);
    contagem(10, 50, 5);
    contagem(10, 2, 1);
    contagem(50, 0, -10);
}

inicio();
