
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

// const valores = gets();
let maiorPar = 0;
let menorImpar = 1000000;

let numero;
while (numero = gets()) {
    if (numero % 2 === 0) {
        if (maiorPar < numero) {
            maiorPar = numero;
        }
    } else {
        if (menorImpar > numero) {
            menorImpar = numero;
        }
    }
}
print(`Maior número par: ${maiorPar}`);
print(`Menor número impar: ${menorImpar}`);