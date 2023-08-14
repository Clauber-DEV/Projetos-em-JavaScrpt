let preco = document.querySelector(`input#preco`)
let resultado = document.querySelector(`div#resultado`)
function carnaval() {

    if (preco.value.length == 0) {
        window.alert(`Por favor digite o preço antes de clicar no periodo!`)
    } else {
        let preco1 = Number(preco.value)
        let preco2 = (10 * preco1 / 100) + preco1
        resultado.innerHTML = `Nesse período seu produto terá mais 10% no valor.<br>
        De R$${preco1} passará para R$${preco2}.`
    }
}

function ferias() {
    if (preco.value.length == 0) {
        window.alert(`Por favor digite o preço antes de clicar no periodo!`)
    } else {
        let preco1 = Number(preco.value)
        let preco2 = (20 * preco1 / 100) + preco1
        resultado.innerHTML = `Nesse período seu produto terá mais 20% no valor.<br>
        De R$${preco1} passará para R$${preco2}.`
    }
}

function crianca() {

    if (preco.value.length == 0) {
        window.alert(`Por favor digite o preço antes de clicar no periodo!`)
    } else {
        let preco1 = Number(preco.value)
        let preco2 = (5 * preco1 / 100) + preco1
        resultado.innerHTML = `Nesse período seu produto terá mais 5% no valor.<br>
        De R$${preco1} passará para R$${preco2}.`
    }
}

function bfriday() {
    if (preco.value.length == 0) {
        window.alert(`Por favor digite o preço antes de clicar no período!.`)
    } else {
        let preco1 = Number(preco.value)
        let preco2 = (30 * preco1 / 100) - preco1
        resultado.innerHTML = `Nesse período seu produto terá menos 30% no valor.<br>
        De R$${preco1} passará para R$${preco2}.`

    }
}

function natal() {
    if (preco.value.length == 0) {
        window.alert(`Por favor digite o preço antes de clicar no periodo!.`)
    } else {
        let preco1 = Number(preco.value)
        let preco2 = (5 * preco1 / 100) - preco1
        resultado.innerHTML = `Nesse período seu produto terá menor 5% no valor.<br>
        De R$${preco1} passará para R$${preco2}.`
    }
}
