interface buildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

export const buildMakePerson = ({
  getUUID,
  getAge,
}: buildMakerPersonOptions) => {
  return ({ name, birthdate }: { name: string; birthdate: string }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name:'John', birthdate: '2004-01-13' }
// const  john = buildPerson( obj )

// const obj = { name:'John', birthdate: '2004-01-13' }
// const  john = buildPerson( obj )

// console.log(john)
