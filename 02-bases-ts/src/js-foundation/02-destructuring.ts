console.log(process.env.PORT);

const { SHELL } = process.env;

// console.table({SHELL});

const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

const [, , batman] = characters;

console.log(batman);
