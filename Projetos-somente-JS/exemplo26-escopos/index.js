/*  Escopo de variaveis
 *  Escopo é a area onde a variavel irá funcionar
 *  variaveis locais só funional dentro de seu escopo e são declaradas dentro da função
 *  variaveis globais fincionam dentro de qualquer escopo e são declaradas fora das funções
 */

let a = 5, b = 3

function teste(n1, n2) {
    let s = 0

    n1++
    n2--
    s = n1 + n2
    console.log(s + "")
}

function inicio() {

    teste(a, b)
    console.log(a + "" + b)
}

inicio()