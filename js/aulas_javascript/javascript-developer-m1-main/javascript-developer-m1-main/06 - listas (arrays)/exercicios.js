/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/
const numero = 9;
console.log(`Tabuada do ${numero}`)
for (let i = 0; i < 11; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/
const listaNumeros = [0, 12, 166, 189, 465, 999, 323, 65, 74];
listaNumeros.push(60);
listaNumeros.push(3);
listaNumeros.push(5);
listaNumeros.push(4);
listaNumeros.push(8);
listaNumeros.push(7);
listaNumeros.push(2);

console.log(' ')
console.log(`Lista de números`)
for (let i = 0; i < listaNumeros.length; i++) {
    if (listaNumeros[i] % 2 === 0) {
        console.log(listaNumeros[i]);
    }
}

/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/
const listaNomes = [];
listaNomes.push('Vitor');
listaNomes.push('Renan');
listaNomes.push('Fernando');
listaNomes.push('Valéria');
listaNomes.push('Daniel');
listaNomes.push('Vera');

console.log('')
console.log('Lista de nomes com V')
for (let i = 0; i < listaNomes.length; i++) {
    const nome = listaNomes[i];
    if (nome[0] == 'V') {
        console.log(nome);
    }
}

/*4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;*/
const listaIntervalo = [];
console.log(' ');
console.log('Pares no intervalo 10 a 50')
for (let i = 10; i < 51; i = i + 2) {
    listaIntervalo.push(i);

}
console.log(listaIntervalo);


/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/
const listaMedias = [2, 7, 3, 8, 10, 4];
console.log('Médias de recuperação')
for (let i = 0; i < listaMedias.length; i++) {
    if (listaMedias[i] < 5) {
        console.log(listaMedias[i]);
    }
}

/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/
const listaNotas = [2, 7, 3, 8, 10, 4];
let maior = 0;
for (let i = 0; i < listaNotas.length; i++) {
    if (maior < listaNotas[i]) {
        maior = listaNotas[i];
    }
}
console.log(`A maior nota é ${maior}`);