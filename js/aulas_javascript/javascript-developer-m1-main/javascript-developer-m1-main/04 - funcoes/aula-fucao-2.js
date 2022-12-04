function escrevaNome(name){
    //console.log('Meu nome é '+ name);
    return 'Meu nome é '+ name;
}
//escrevaNome('caroline');
// nomear funções com verbos

function verificarIdade(idade){
    if(idade >= 18){
        return escrevaNome('caroline') +' é Maior de idade';
    } else {
        return escrevaNome('caroline') + ' é Menor de idade';
    }
}
console.log(verificarIdade(28));

//exemplo preço
/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/
function aplicarDesconto(valor, desconto){
    return valor * (1 - (desconto / 100));
}
function precoFinal(pagamento, preçoOriginal){
    if(pagamento === 1){
        return aplicarDesconto(preçoOriginal, 10);
    }else if (pagamento === 2){
        return aplicarDesconto (preçoOriginal,15);
    }else if (pagamento === 3){
        return preçoOriginal;
    }else{
        return aplicarDesconto (preçoOriginal, -10);
    }
}

const preçoEtiqueta = 100;
const formaDePagamento = 4;
console.log(precoFinal(formaDePagamento,preçoEtiqueta));

