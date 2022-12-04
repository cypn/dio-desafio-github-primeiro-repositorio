// criação de um objeto literals
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    //função dentro do objeto é chamada de método
    descrever: function () {
        //this é uma palavra reservada que se refere ao objeto
        console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
        // console.log(' Meu nome é ${this.nome} e minha idade é ${thhis.idade}')
    }

};

pessoa.descrever();

pessoa.nome = 'Renan';
pessoa.idade = 30;

pessoa.descrever();

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

//pode adicionar e remover dados do objeto
pessoa.altura = 1.69;
delete pessoa.idade;

//map chave.valor
console.log(pessoa);

//editar função
pessoa.descrever = function () {
    // usar crase, aspas simples não estava funcionando
    console.log(`Meu nome é ${this.nome}`);
}
pessoa.descrever();

const atributo = 'nome';
// através da string acessa o atributo
console.log(pessoa[atributo]);
pessoa['nome'] = 'teste';

// criar classe
// defini como são pessoas para que possam ser instanciadas
// classe é a definição e instancia é uma ocorrencia
//classe sempre com letra maiuscula

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    //o que acontece quando a pessoa é instanciada
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('Vitor',25);
const renan = new Pessoa('Renan',30);

console.log(vitor);

/*

const vitor = new Pessoa();
vitor.nome = 'Vitor J. Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

vitor.descrever();
renan.descrever();*/