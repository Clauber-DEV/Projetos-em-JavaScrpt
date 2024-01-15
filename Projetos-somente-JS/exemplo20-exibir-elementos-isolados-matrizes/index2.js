/** exemplo de como exibir elementos izolados em matrizes */

// Função para preencher uma matriz com valores aleatórios
function preencherMatrizAleatoria(linhas, colunas, valorMinimo, valorMaximo) {
  let matriz = [];

  for (let i = 0; i < linhas; i++) {
    let linha = [];

    for (let j = 0; j < colunas; j++) {
      // Gera um número aleatório entre valorMinimo e valorMaximo
      let valorAleatorio = Math.floor(Math.random() * (valorMaximo - valorMinimo + 1)) + valorMinimo;
      linha.push(valorAleatorio);
    }

    matriz.push(linha);
  }

  return matriz;
}

// Exemplo: criando uma matriz 3x3 com valores entre 1 e 10
let matrizAleatoria = preencherMatrizAleatoria(3, 3, 1, 10);

// Exibindo a matriz gerada
console.log(matrizAleatoria);
