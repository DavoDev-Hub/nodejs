// const {emailTemplate} = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
//const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
const getPokemonById = require('./js-foundation/06-promises');
const {buildLogger} = require('./plugins')

const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Esto es algo malo');

// getPokemonById(4)
// .then(( pokemon ) => console.log( { pokemon } ))
// .catch( (err) => console.log(  err  ) )
// .finally( () => console.log('Finalmente') )





// const { getAge,getUUID } = require("./plugins");

// const {buildMakePerson} = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUUID, getAge})

// const obj = { name:'John', birthdate: '2004-01-13' }

//  const john = makePerson( obj )

//  console.log(john)





// const id = 2

// getUserById(id, ( error , user) =>{ 
//     if( error ){
//         throw new Error(error);
//     }
//     console.log({user});
// });


//console.log(emailTemplate)

