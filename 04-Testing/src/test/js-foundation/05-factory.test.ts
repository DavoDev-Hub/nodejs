import { buildMakePerson } from "../../js-foundation/05-factory";
import { describe, expect, test } from "@jest/globals";

describe("js-foundation/05-factory", () => {
  const getUUID = () => "1234";
  const getAge = () => 35;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const person = makePerson({ name: "John Doe", birthdate: "1990-01-01" });

    expect(person).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1990-01-01",
      age: 35,
    });
  });
});
