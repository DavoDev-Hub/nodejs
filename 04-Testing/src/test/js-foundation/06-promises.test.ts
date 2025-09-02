import { getPokemonById } from "../../js-foundation/06-promises";
import { describe, expect, test } from "@jest/globals";

describe("js-foundation/06-promises", () => {
  test("should return the name a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe("bulbasaur");
  });

  test("Should return an error if pokemon does not exist", async () => {
    const pokemonId = 9999999;

    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
