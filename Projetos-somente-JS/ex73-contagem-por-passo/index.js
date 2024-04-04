/* M05 ex 073 Contagem por passo
 * O programa deve ter funções que 
 * faça contagens de acordo com os parametros ds disparos
 */
function contagem(ini, fim, passo) {
    if (ini === 0 && fim === 10 && passo === 2) {
        console.log("Contando de 0 a 10 de 2 em 2");
        while (ini <= fim) {
            ini += passo;
            setTimeout(() => {
                process.stdout.write(`${ini} -> `);
            }, 200);
        }
        setTimeout(() => {
            console.log("Fim");
        }, 200 * (fim / passo));
    }

    console.log("");

    if (ini === 10 && fim === 50 && passo === 5) {
        console.log("contando de 10 a 50 de 5 em 5");
        while (ini <= fim) {
            ini += passo;
            setTimeout(() => {
                process.stdout.write(`${ini} -> `);
            }, 200);
        }
        setTimeout(() => {
            console.log("Fim");
        }, 200 * ((fim - ini) / passo));
    }
}

function inicio() {
    contagem(0, 10, 2);
    contagem(10, 50, 5);
}

inicio();
