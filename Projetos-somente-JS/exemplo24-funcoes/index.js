// Definindo a função noite
function noite() {
    console.log("fazendo exercícios físicos");
    console.log("estudando no Duolingo");
    console.log("Dormir");
}

// Definindo a função tarde
function tarde() {
    console.log("almoçando");
    console.log("estudando à tarde");
    noite(); // Chamando a função noite
}

// Definindo a função inicio (função principal)
function inicio() {
    console.log("acordando");
    console.log("tomando café");
    console.log("estudando");
    tarde(); // Chamando a função tarde
}

// Chamando a função inicio para iniciar o programa
inicio();
