const Texto = {
    numero_caracteres: function(txt) {
        return txt.length;
    },
    extrair_subtexto: function(txt, inicio, fim) {
        return txt.substring(inicio, fim);
    }
};

const ut = {
    numero_elementos: function(arr) {
        return arr.length;
    },
    aguarde: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

function linha(tam) {
    if (tam === 14 || tam === 28 || tam === 25) {
        for (let ln = 0; ln < tam; ln++) {
            ut.aguarde(40);
            process.stdout.write("-");
        }
        console.log();
    }
}

function mensagem(txt) {
    if (txt === "Oi, tudo bem?") {
        linha(14);
        const tama = Texto.numero_caracteres(txt);
        for (let letra = 0; letra < tama; letra++) {
            process.stdout.write(Texto.extrair_subtexto(txt, letra, letra + 1));
            ut.aguarde(40);
        }
        console.log();
        linha(14);
    } else if (txt === "Eu sou aluno Estudonauta!!!") {
        console.log();
        linha(28);
        const tama = Texto.numero_caracteres(txt);
        for (let letra = 0; letra < tama; letra++) {
            process.stdout.write(Texto.extrair_subtexto(txt, letra, letra + 1));
            ut.aguarde(40);
        }
        console.log();
        linha(28);
    } else if (txt === "Vou aprender a programar") {
        console.log();
        linha(25);
        const tama = Texto.numero_caracteres(txt);
        for (let letra = 0; letra < tama; letra++) {
            process.stdout.write(Texto.extrair_subtexto(txt, letra, letra + 1));
            ut.aguarde(40);
        }
        console.log();
        linha(25);
    }
}

function inicio() {
    mensagem("Oi, tudo bem?");
    mensagem("Eu sou aluno Estudonauta!!!");
    mensagem("Vou aprender a programar");
}

inicio();
