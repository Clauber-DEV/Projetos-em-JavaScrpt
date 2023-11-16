/**
 *Programa que leia um número qualquer
 *e conte de 1 até ele, só que fazendo o jogo do PIM!
 *sunstituindo o número pela a palavra PIM!
 *estrutura de cotrole de inicio
 *jogo do PIM
 */


 const readline = require('readline');
 const entrada = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 // Função para encerrar o programa quando a interface é fechada
 entrada.on('close', () => {
     console.log('Fim.');
     process.exit(0);
 });
 
 async function jogoDoPim() {
     let limiteContar = await pergunta("Quer que conte até quanto?: ");
     let limite = parseInt(limiteContar);
     let ciclo = 0;
     let resultado = ''; // String para acumular os resultados
 
     while (ciclo < limite) {
         ciclo++;
         if (ciclo % 4 === 0) {
             resultado += 'Pim \n';
         } else {
             resultado += `${ciclo} - `;
         }
     }
 
     console.log(resultado); // Imprime todos os resultados de uma vez
     entrada.close(); // Fecha a interface readline
 }
 
 function pergunta(pergunta) {
     return new Promise((resolve) => {
         entrada.question(pergunta, resolve);
     });
 }
 
 jogoDoPim();