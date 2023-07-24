function dados() {
    let nome = document.querySelector('input#nome')
    let ano = document.querySelector('input#ano')
    let sal = document.querySelector('input#salario')
    let ficha = document.querySelector('p#ficha')

    if (nome.value.length == '' || ano.value.length == 0 || sal.value.length == 0) {
        window.alert('Favor preencher todos os campos antes de salvar!')
    } else {
        let n = String(nome.value)
        let a = Number(ano.value)
        let s = Number(sal.value)
        ficha.innerHTML = `Ficha Funcional <br> Nome:${n} <br> Ano de Nascimento:${a} <br> Salário:${s}`


    }
}