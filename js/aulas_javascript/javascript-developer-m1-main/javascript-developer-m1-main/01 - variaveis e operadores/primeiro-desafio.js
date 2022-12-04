/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

console.log('olá');
const precoCombustivel = 5.79;
let kmPorLitro = 10;
let distanciaKm = 100;
let valorViagem = 0;

kmPorLitro = 12;
distanciaKm = 1580;
valorViagem = (distanciaKm / kmPorLitro) * precoCombustivel;
console.log(valorViagem.toFixed(2));