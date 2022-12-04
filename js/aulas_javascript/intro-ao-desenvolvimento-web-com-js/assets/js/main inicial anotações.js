
// console.log('Sucesso');

//como fazer requisição http via js
//fetch api não precisa instalar, já está disponível nos browsers

//essa parte foi para o arquivo poke api
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt=${pokemon.name}>
            </div>
        </li>
    `
}
const pokemonList = document.getElementById('pokemonList')
//innerhtml adiciona ao html dentro do elemento 
//pokemonList.innerHTML += '<li>Teste</li>'


//fetch retorna uma promisse
// Processamento assincrono, não é imediato. Tem promessa de um resultado
// por padrão o fetch usa o method get
//essa parte foi para o arquivo poke-api
fetch(url)
    .then.then((response) => response.json())
    .then(/*function*/(response) => response.json())/* { */
    //arrow funtion usa a seta => ao invés da palavra function, sintaxe reduzida. retorno direto depois da seta.
    // console.log(response)
    /* return response.json() */
    /*não é bom encadear call backs
    response
        .json()
        .then(function (responsebody) {
            console.log(responsebody)
        }) */
    /* }) */
    //pode encadear then s. O segundo then recebe a response do 1o.
    .then((jsonbody) => jsonbody.results)
    .then((pokemons) => {
        /*  //adiciona um breaking point 
         debugger
         console.log(pokemonList) */
        const listItens = []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            //console.log(convertPokemonToLi(pokemon))
            //esse modo abaixo de adicionar a lista não é muito bom, o melhor seria jogar para uma nova lista e converter
            //pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
        console.log(listItens)
        pokemonList.innerHTML += listItens
    })
    .catch((error) => console.error(error))
    /* .finally(function () {
console.log('Requisição concluída')
}) */
//Interface da promisse foi baseada na interface de uma try(roda quando funciona) catch(roda com a falha) finally(roda sempre ao final)
/* try {
    
} catch (error) {
    
}finally{

} */

//chamada poke api
pokeApi.getPokemons().then((pokemons = []) => {
    // simplificação usando metodos de listas
    /*
        .innerHTML += adiciona ao html que já existe no arquivo, na parte que o pokemon list identificou
        .map converte lista
        .join() troca o separador da lista pelo o que estiver entre os ()
    */
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')

    /* forma original 
    const listItens = []
     for (let i = 0; i < pokemons.length; i++) {
         const pokemon = pokemons[i];
         //pokemonList.innerHTML += convertPokemonToLi(pokemon)
         listItens.push(convertPokemonToLi(pokemon))
     }
     console.log(listItens)
     pokemonList.innerHTML += listItens */
})