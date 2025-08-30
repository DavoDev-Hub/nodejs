

// codigo poco  legible


// const getPokemonById = ( id, callback ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

//     fetch ( url ).then( ( response ) => {

//         response.json().then( ( pokemon ) => {
//             //console.log(pokemon.name)

//             callback( pokemon.name )
//         })
//     });


// }


// const getPokemonById = ( id ) => {
    // const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    // return fetch ( url ).
    // then (( res ) =>  res.json())
    // .then( () => {throw new Error('Pokemon no existe')} )
    // .then( ( pokemon )  => pokemon.name)

// }



// const getPokemonById = async( id ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

//     const res = await fetch( url );
//     const pokemon = await res.json();

//     return pokemon.name
    // return fetch ( url ).
    // then (( res ) =>  res.json())
    // .then( () => {throw new Error('Pokemon no existe')} )
    // .then( ( pokemon )  => pokemon.name)
    // return 10;
// }


const {http} = require('../plugins');
const getPokemonById = async( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    const pokemon = await http.get(url);
    return pokemon.name;
    // const res = await fetch( url );
    // const pokemon = await res.json();

    // return pokemon.name
    // return fetch ( url ).
    // then (( res ) =>  res.json())
    // .then( () => {throw new Error('Pokemon no existe')} )
    // .then( ( pokemon )  => pokemon.name)
    // return 10;
}


// Token de acceso
// Publicas

module.exports =  getPokemonById;