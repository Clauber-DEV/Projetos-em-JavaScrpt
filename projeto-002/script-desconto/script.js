function verificar() {
    let tot = document.querySelector('input#total')
    let des = document.querySelector('p#desconto')
    let total = Number(tot.value)
    if (total >= 500) {
        let desc1 = (total * 10) / 100
        let desc2 = total - desc1
        des.innerHTML = `ATENÇÃO!! <HR> Você ganhou um descontão de R$${desc1.toFixed(2)}. <br> E só paga R$${desc2.toFixed(2)}!! <br> Obrigado por comprar conosco, volte sempre.`
    } else {
        window.alert('Valores abaixo de R$500.00 não geram desconto.')
        des.innerHTML = `Obrigado por comprar conosco, volte sempre!`
    }
}