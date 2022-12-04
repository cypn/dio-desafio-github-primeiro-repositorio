
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obsedidade Grave';
    }
}

// Main
(function () {
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
//parentes após a função invoca ela imediatamente após. Ela não pode ser invocada novamente. código será rodado só uma vez


// anotações
// definir função
function teste() {
    console.log('teste');
}
//chamar função
teste();
teste();

function sayMyName(name) {
    console.log('Your name is: ' + name);
}
sayMyName('Renan');
sayMyName('Vitor');

function quadrado(valor) {
    return valor * valor;
}
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));
/*
function main(){
    console.log('Programa principal');
}
//precisa chamar a função main
main();
*/
//funçoes viram um valor, objeto, podemser colocadas como variaveis, parametros de outras funções
console.log(main);


