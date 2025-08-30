const heroes = [
  {
    id: 1,
    name: "Superman",
    power: "Super strength",
  },
  {
    id: 2,
    name: "Batman",
    power: "Intelligence and gadgets",
  },
  {
    id: 3,
    name: "Wonder Woman",
    power: "Super strength and agility",
  },
];

const findHeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};

const hero = findHeroById(2);

console.log(hero?.name ?? "Unknown Hero");
