const buildMakePerson = ( {getUUID, getAge} ) => {

return ({name, birthdate}) => {
    

    return{
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}
}





// const obj = { name:'John', birthdate: '2004-01-13' }
// const  john = buildPerson( obj )

// console.log(john)


module.exports={
    buildMakePerson
}