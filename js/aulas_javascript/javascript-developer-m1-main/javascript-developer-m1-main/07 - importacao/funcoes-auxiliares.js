
const entradas = [10, 5, 50, 10, 98, 23, 33, 44, 100, 1, 7,1000];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

//função de exportação de objetos literais
module.exports = { gets, print };
/*Mesma coisa que:
module.exports = {
    gets: gets,
    print: print
}*/
/*Outra forma:
module.exports.gets = gets*/