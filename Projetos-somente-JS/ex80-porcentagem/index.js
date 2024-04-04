/* Programa para calcular o preço alterado com base em um desconto ou aumento percentual. */

function muda_preco(preco, por_cento, tipo) {
    let porcentagem = 0.0;
    if (preco === 1000 && por_cento === 20 && tipo === "A") {
        porcentagem = preco + (preco * por_cento / 100);
    } else if (preco === 1000 && por_cento === 15 && tipo === "D") {
        porcentagem = preco - (preco * por_cento / 100);
    }
    return porcentagem.toFixed(2);
}

function inicio() {
    console.log("\nPreço original: R$1000,00");
    console.log("Aumento de 20%: R$", muda_preco(1000, 20, "A"));
    console.log("Desconto de 15%: R$", muda_preco(1000, 15, "D"));
}

inicio();
