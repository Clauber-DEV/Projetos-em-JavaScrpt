/** exemplo15
 * como atribuir valor em vetores 
 * utilizando .length
 */

let quantidadeElementos = 10; // variavel que irá determinar a quantidade de elementos em um vetor
let valores = new Array(quantidadeElementos);// a variavel valores irá receber um vetor/Array com a quantidade de elementos expecificado acima.

for (let indice = 0; indice < valores.length; indice++) { // percursor para preencher o vetor
    valores[indice] = Math.floor(Math.random() * 11);
}

for (let indice = 0; indice < valores.length; indice++) { // percursor para mostrar os valores
    process.stdout.write(`${valores[indice]}`);
    if (indice < valores.length - 1) { // se o valor do indice for menor que a quantidade de valores do vator não deverá incluir o " - ".
        process.stdout.write(" - ");
    }
}

console.log(); // Adicione esta linha para pular uma linha no final
