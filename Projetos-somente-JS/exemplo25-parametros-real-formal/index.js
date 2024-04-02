// Função mercado para realizar compras com base no valor do parâmetro din
function mercado(din) {
    if (din <= 10) {
        console.log("comprar Bala");
    } else if (din < 50) {
        console.log("Comprar bala");
        console.log("Comprar refrigerante");
    } else {
        console.log("Comprar bala");
        console.log("Comprar refrigerante");
        console.log("Comprar kinder ovo");
    }
}

// Função principal inicio
function inicio() {
    console.log("jogando bola");
    mercado(10); // Chamada da função mercado com o parâmetro 10
    console.log("Tomando banho");
    mercado(30); // Chamada da função mercado com o parâmetro 30
    console.log("Jogando video game");
    mercado(50); // Chamada da função mercado com o parâmetro 50
    console.log("Durmindo");
}

// Função dobra para dobrar o valor do parâmetro num
function dobra(num) {
    let d = num * 2;
    console.log("\nVariável FORMAL 'd':", d); // Resultado do parâmetro FORMAL
}

// Função inicio2
function inicio2() {
    let n = 7;
    dobra(n); // Chamada da função dobra com o parâmetro 7
    console.log("\nVariável REAL 'n':", n); // Resultado do parâmetro REAL
}

// Função inicio3 para realizar operações com os parâmetros n1 e n2
function inicio3(n1, n2) {
    let s = 0;
    n1++;
    n2--;
    s = n1 + n2;
    console.log("\nResultado da operação na função FORMAL inicio3: val s", s);
}

// Chamada da função principal inicio para iniciar o programa
inicio();

// Chamada da função inicio2
inicio2();

// Definindo as variáveis a e b e chamando a função inicio3
let a = 3, b = 5;
inicio3(a, b);

// Exibindo o valor das variáveis a e b após a chamada da função inicio3
console.log("\nVariáveis da função REAL: val a:", a, " e val b:", b);
