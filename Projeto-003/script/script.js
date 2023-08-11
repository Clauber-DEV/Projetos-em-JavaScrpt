function converter(){
    let numero = document.querySelector(`input#numero`)
    let resultado = document.querySelector(`input#resultado`)
    if(numero.value.length == 0 ){
        window.alert = (`vazio`)
    }else{
        window.alert = (`cheio`)
    }
}