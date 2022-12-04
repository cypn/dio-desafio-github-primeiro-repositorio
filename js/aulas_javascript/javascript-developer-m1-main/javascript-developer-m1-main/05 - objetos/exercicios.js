

/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoPercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioPorKm * precoCombustivel;
    }

}
const corsa = new Carro('volkswagen', 'vermelho', 1 / 10);
console.log(corsa.calcularGastoPercurso(1000, 5.70));
const uno = new Carro('fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoPercurso(70, 5));
const palio = new Carro('fiat', 'preto', 1 / 10);
console.log(palio.calcularGastoPercurso(70, 5));


/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }
    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc < 25) {
            return ('Peso normal');
        } else if (imc < 30) {
            return ('Acima do peso');
        } else if (imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }

}



const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularImc() + ' ' + jose.classificarImc());
const renan = new Pessoa('Renan', 76, 1.75);
console.log(renan.calcularImc() + ' ' + renan.classificarImc());
const vitor = new Pessoa('vitor', 60, 1.69);
console.log(vitor.calcularImc() + ' ' + vitor.classificarImc());
