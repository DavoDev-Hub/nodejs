console.log(process.env.PORT);

const { SHELL } = process.env;

// console.table({SHELL});

export const characters = ["Flash", "Superman", "Batman"];

const [hero, villain] = characters;

console.log(hero);
console.log(villain);
