export interface Hero {
  id: number;
  name: string;
  power: string;
}

export const heroes: Hero[] = [
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
