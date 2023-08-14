const preco = document.querySelector(`input#preco`);
const resultado = document.querySelector(`div#resultado`);

function calcularPeriodo(percentual) {
    if (preco.value.length === 0) {
        window.alert(`Por favor, digite o preço antes de clicar no período!`);
    } else {
        const preco1 = Number(preco.value);
        const preco2 = preco1 + (percentual * preco1 / 100);

        let descricao = "";
        if (percentual > 0) {
            descricao = `terá mais ${percentual}% no valor`;
        } else {
            descricao = `terá menos ${Math.abs(percentual)}% no valor`;
        }

        resultado.innerHTML = `Nesse período seu produto ${descricao}.<br>
            De R$${preco1.toFixed(2)} passará para R$${preco2.toFixed(2)}.`;
    }
}

function carnaval() {
    calcularPeriodo(10);
}

function ferias() {
    calcularPeriodo(20);
}

function crianca() {
    calcularPeriodo(5);
}

function bfriday() {
    calcularPeriodo(-30);
}

function natal() {
    calcularPeriodo(-5);
}