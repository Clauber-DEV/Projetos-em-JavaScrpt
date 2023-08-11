function converter() {
    let metros = document.querySelector(`input#metros`)
    let res = document.querySelector(`p#resultado`)
    if (metros.value.length == 0) {
        window.alert(`Insira um número para converter!`)
    } else {
        let mt = Number(metros.value)

        let m1 = mt / 1000
        let m2 = mt / 100
        let m3 = mt / 10
        let m4 = mt * 10
        let m5 = mt * 100
        let m6 = mt * 1000

        res.innerHTML = `Converção:<br>
        ${m1} Km => Kilometro<br> 
        ${m2} Hm => Hequitometro<br> 
        ${m3} Dam => Decametro<br> 
        ${m4} dm => decimetro<br> 
        ${m5} cm => centimetro<br> 
        ${m6} mm => milimetro<br>`
    }
}
