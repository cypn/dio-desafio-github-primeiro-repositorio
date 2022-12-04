// listas []

const alunos = ['João', 'Vitor', 'Marina'];
console.log(alunos);
//alunos[0] = João

console.log(alunos[0]);

//métodos de lista
//push add no fim da lista
alunos.push('Renan');
console.log(alunos)
//adicionar em uma posição especifica se vazio ou substitui o valor
alunos[4] = 'Vinícius';
console.log(alunos)
//pode misturar tipos de dados na lista strigs com inteiros, numeros etc

//pop remove ultimo item da lista
console.log(alunos.pop())
//shift remove primeiro item da lista
console.log(alunos.shift())
// para retirar itens específicos é mais complicado
//console.log()

// pode iniciar lista vazia

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);
//length tamanho da lista
console.log(notas.length);

//estruturas de repetição
let soma = 0;
// autocomplete for loop
// contador geralmente é i (index no autocomplete)
//1a parte declaração do index, 2a parte teste para ver se roda o código, 3a parte condição que altera variavel de controle no final do for.
// i++ i = i + 1

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);

const nome = 'Vitor Johansen Guerra';
//string é um array de caracteres
//pode usar métodos de lista
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
